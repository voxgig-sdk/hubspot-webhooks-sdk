# HubspotWebhooks SDK

from hubspotwebhooks_sdk.utility.voxgig_struct import voxgig_struct as vs
from hubspotwebhooks_sdk.core.utility_type import HubspotWebhooksUtility
from hubspotwebhooks_sdk.core.spec import HubspotWebhooksSpec
from hubspotwebhooks_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from hubspotwebhooks_sdk.utility import register

# Load features
from hubspotwebhooks_sdk.feature.base_feature import HubspotWebhooksBaseFeature
from hubspotwebhooks_sdk.features import _has_feature, _make_feature


class HubspotWebhooksSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = HubspotWebhooksUtility()
        self._utility = utility

        from hubspotwebhooks_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return HubspotWebhooksUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = HubspotWebhooksSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "HubspotWebhooksSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("HubspotWebhooksSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Basic(self, data=None) -> "BasicEntity":
        """Entity factory: client.Basic().list() / client.Basic().load({"id": ...})."""
        from hubspotwebhooks_sdk.entity.basic_entity import BasicEntity
        return BasicEntity(self, data)


    def WebhooksBatchResponseJournalFetch(self, data=None) -> "WebhooksBatchResponseJournalFetchEntity":
        """Entity factory: client.WebhooksBatchResponseJournalFetch().list() / client.WebhooksBatchResponseJournalFetch().load({"id": ...})."""
        from hubspotwebhooks_sdk.entity.webhooks_batch_response_journal_fetch_entity import WebhooksBatchResponseJournalFetchEntity
        return WebhooksBatchResponseJournalFetchEntity(self, data)


    def WebhooksBatchResponseSubscription(self, data=None) -> "WebhooksBatchResponseSubscriptionEntity":
        """Entity factory: client.WebhooksBatchResponseSubscription().list() / client.WebhooksBatchResponseSubscription().load({"id": ...})."""
        from hubspotwebhooks_sdk.entity.webhooks_batch_response_subscription_entity import WebhooksBatchResponseSubscriptionEntity
        return WebhooksBatchResponseSubscriptionEntity(self, data)


    def WebhooksCollectionResponseSubscriptionResponseNoPaging(self, data=None) -> "WebhooksCollectionResponseSubscriptionResponseNoPagingEntity":
        """Entity factory: client.WebhooksCollectionResponseSubscriptionResponseNoPaging().list() / client.WebhooksCollectionResponseSubscriptionResponseNoPaging().load({"id": ...})."""
        from hubspotwebhooks_sdk.entity.webhooks_collection_response_subscription_response_no_paging_entity import WebhooksCollectionResponseSubscriptionResponseNoPagingEntity
        return WebhooksCollectionResponseSubscriptionResponseNoPagingEntity(self, data)


    def WebhooksCrmObjectSnapshotBatch(self, data=None) -> "WebhooksCrmObjectSnapshotBatchEntity":
        """Entity factory: client.WebhooksCrmObjectSnapshotBatch().list() / client.WebhooksCrmObjectSnapshotBatch().load({"id": ...})."""
        from hubspotwebhooks_sdk.entity.webhooks_crm_object_snapshot_batch_entity import WebhooksCrmObjectSnapshotBatchEntity
        return WebhooksCrmObjectSnapshotBatchEntity(self, data)


    def WebhooksFilter(self, data=None) -> "WebhooksFilterEntity":
        """Entity factory: client.WebhooksFilter().list() / client.WebhooksFilter().load({"id": ...})."""
        from hubspotwebhooks_sdk.entity.webhooks_filter_entity import WebhooksFilterEntity
        return WebhooksFilterEntity(self, data)


    def WebhooksSetting(self, data=None) -> "WebhooksSettingEntity":
        """Entity factory: client.WebhooksSetting().list() / client.WebhooksSetting().load({"id": ...})."""
        from hubspotwebhooks_sdk.entity.webhooks_setting_entity import WebhooksSettingEntity
        return WebhooksSettingEntity(self, data)


    def WebhooksSnapshotStatus(self, data=None) -> "WebhooksSnapshotStatusEntity":
        """Entity factory: client.WebhooksSnapshotStatus().list() / client.WebhooksSnapshotStatus().load({"id": ...})."""
        from hubspotwebhooks_sdk.entity.webhooks_snapshot_status_entity import WebhooksSnapshotStatusEntity
        return WebhooksSnapshotStatusEntity(self, data)


    def WebhooksSubscription(self, data=None) -> "WebhooksSubscriptionEntity":
        """Entity factory: client.WebhooksSubscription().list() / client.WebhooksSubscription().load({"id": ...})."""
        from hubspotwebhooks_sdk.entity.webhooks_subscription_entity import WebhooksSubscriptionEntity
        return WebhooksSubscriptionEntity(self, data)


    def WebhooksSubscriptionList(self, data=None) -> "WebhooksSubscriptionListEntity":
        """Entity factory: client.WebhooksSubscriptionList().list() / client.WebhooksSubscriptionList().load({"id": ...})."""
        from hubspotwebhooks_sdk.entity.webhooks_subscription_list_entity import WebhooksSubscriptionListEntity
        return WebhooksSubscriptionListEntity(self, data)


    def WebhooksSubscriptionResponse1(self, data=None) -> "WebhooksSubscriptionResponse1Entity":
        """Entity factory: client.WebhooksSubscriptionResponse1().list() / client.WebhooksSubscriptionResponse1().load({"id": ...})."""
        from hubspotwebhooks_sdk.entity.webhooks_subscription_response_1_entity import WebhooksSubscriptionResponse1Entity
        return WebhooksSubscriptionResponse1Entity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "HubspotWebhooksSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from hubspotwebhooks_sdk.entity.basic_entity import BasicEntity
    from hubspotwebhooks_sdk.entity.webhooks_batch_response_journal_fetch_entity import WebhooksBatchResponseJournalFetchEntity
    from hubspotwebhooks_sdk.entity.webhooks_batch_response_subscription_entity import WebhooksBatchResponseSubscriptionEntity
    from hubspotwebhooks_sdk.entity.webhooks_collection_response_subscription_response_no_paging_entity import WebhooksCollectionResponseSubscriptionResponseNoPagingEntity
    from hubspotwebhooks_sdk.entity.webhooks_crm_object_snapshot_batch_entity import WebhooksCrmObjectSnapshotBatchEntity
    from hubspotwebhooks_sdk.entity.webhooks_filter_entity import WebhooksFilterEntity
    from hubspotwebhooks_sdk.entity.webhooks_setting_entity import WebhooksSettingEntity
    from hubspotwebhooks_sdk.entity.webhooks_snapshot_status_entity import WebhooksSnapshotStatusEntity
    from hubspotwebhooks_sdk.entity.webhooks_subscription_entity import WebhooksSubscriptionEntity
    from hubspotwebhooks_sdk.entity.webhooks_subscription_list_entity import WebhooksSubscriptionListEntity
    from hubspotwebhooks_sdk.entity.webhooks_subscription_response_1_entity import WebhooksSubscriptionResponse1Entity
