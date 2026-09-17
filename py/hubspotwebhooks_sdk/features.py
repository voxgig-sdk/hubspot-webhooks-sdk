# HubspotWebhooks SDK feature factory

from hubspotwebhooks_sdk.feature.base_feature import HubspotWebhooksBaseFeature
from hubspotwebhooks_sdk.feature.debug_feature import HubspotWebhooksDebugFeature
from hubspotwebhooks_sdk.feature.idempotency_feature import HubspotWebhooksIdempotencyFeature
from hubspotwebhooks_sdk.feature.metrics_feature import HubspotWebhooksMetricsFeature
from hubspotwebhooks_sdk.feature.paging_feature import HubspotWebhooksPagingFeature
from hubspotwebhooks_sdk.feature.ratelimit_feature import HubspotWebhooksRatelimitFeature
from hubspotwebhooks_sdk.feature.retry_feature import HubspotWebhooksRetryFeature
from hubspotwebhooks_sdk.feature.test_feature import HubspotWebhooksTestFeature
from hubspotwebhooks_sdk.feature.timeout_feature import HubspotWebhooksTimeoutFeature


_FEATURES = {
    "base": lambda: HubspotWebhooksBaseFeature(),
    "debug": lambda: HubspotWebhooksDebugFeature(),
    "idempotency": lambda: HubspotWebhooksIdempotencyFeature(),
    "metrics": lambda: HubspotWebhooksMetricsFeature(),
    "paging": lambda: HubspotWebhooksPagingFeature(),
    "ratelimit": lambda: HubspotWebhooksRatelimitFeature(),
    "retry": lambda: HubspotWebhooksRetryFeature(),
    "test": lambda: HubspotWebhooksTestFeature(),
    "timeout": lambda: HubspotWebhooksTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
