# HubspotWebhooks SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "HubspotWebhooks",
            "slug": "hubspot-webhooks",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "debug": {
        "options": {
          "active": False,
          "max": 100,
          "redact": [
            "authorization",
            "cookie",
            "set-cookie",
            "api-key",
            "apikey",
            "x-api-key",
            "idempotency-key",
          ],
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "onEntry": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "idempotency": {
        "options": {
          "active": False,
          "header": "Idempotency-Key",
          "methods": [
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
          ],
          "ops": [
            "create",
            "update",
            "remove",
          ],
        },
        "optspec": {
          "keygen": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "metrics": {
        "options": {
          "active": False,
        },
        "optspec": {
          "now": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "paging": {
        "options": {
          "active": False,
          "afterVar": "after",
          "cursorParam": "cursor",
          "firstVar": "first",
          "limitParam": "limit",
          "pageParam": "page",
          "startPage": 1,
        },
        "optspec": {
          "limit": "`$NUMBER`",
          "ops": "`$LIST`",
        },
        "strict": False,
        "transport": "none",
      },
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api.hubapi.com",
            "auth": {
                "prefix": "",
                "in": "query",
                "name": "hapikey",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "basic": {},
                "webhooks_batch_response_journal_fetch": {},
                "webhooks_batch_response_subscription": {},
                "webhooks_collection_response_subscription_response_no_paging": {},
                "webhooks_crm_object_snapshot_batch": {},
                "webhooks_filter": {},
                "webhooks_setting": {},
                "webhooks_snapshot_status": {},
                "webhooks_subscription": {},
                "webhooks_subscription_list": {},
                "webhooks_subscription_response_1": {},
            },
        },
        "entity": {
      "basic": {
        "fields": [],
        "name": "basic",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "offset_id",
                      "orig": "offset",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "install_portal_id",
                      "orig": "install_portal_id",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks-journal/journal-local/2026-09/offset/{offset}/next",
                "rename": {
                  "param": {
                    "offset": "offset_id",
                  },
                },
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "journal-local",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "offset",
                  },
                  {
                    "var": "offset_id",
                  },
                  {
                    "lit": "next",
                  },
                ],
                "select": {
                  "exist": [
                    "install_portal_id",
                    "offset_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "journal-local",
                  "2026-09",
                  "offset",
                  "{offset_id}",
                  "next",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "offset_id",
                      "orig": "offset",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "install_portal_id",
                      "orig": "install_portal_id",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks-journal/journal/2026-09/offset/{offset}/next",
                "rename": {
                  "param": {
                    "offset": "offset_id",
                  },
                },
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "journal",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "offset",
                  },
                  {
                    "var": "offset_id",
                  },
                  {
                    "lit": "next",
                  },
                ],
                "select": {
                  "exist": [
                    "install_portal_id",
                    "offset_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "journal",
                  "2026-09",
                  "offset",
                  "{offset_id}",
                  "next",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "install_portal_id",
                      "orig": "install_portal_id",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks-journal/journal-local/2026-09/earliest",
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "journal-local",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "earliest",
                  },
                ],
                "select": {
                  "exist": [
                    "install_portal_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "journal-local",
                  "2026-09",
                  "earliest",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "install_portal_id",
                      "orig": "install_portal_id",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks-journal/journal-local/2026-09/latest",
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "journal-local",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "latest",
                  },
                ],
                "select": {
                  "exist": [
                    "install_portal_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "journal-local",
                  "2026-09",
                  "latest",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "install_portal_id",
                      "orig": "install_portal_id",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks-journal/journal/2026-09/earliest",
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "journal",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "earliest",
                  },
                ],
                "select": {
                  "exist": [
                    "install_portal_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "journal",
                  "2026-09",
                  "earliest",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "install_portal_id",
                      "orig": "install_portal_id",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks-journal/journal/2026-09/latest",
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "journal",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "latest",
                  },
                ],
                "select": {
                  "exist": [
                    "install_portal_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "journal",
                  "2026-09",
                  "latest",
                ],
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "app_id",
                      "orig": "app_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "param",
                      "name": "subscription_id",
                      "orig": "subscription_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}",
                "rename": {
                  "param": {
                    "appId": "app_id",
                    "subscriptionId": "subscription_id",
                  },
                },
                "segments": [
                  {
                    "lit": "app-webhooks",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "app_id",
                  },
                  {
                    "lit": "subscriptions",
                  },
                  {
                    "var": "subscription_id",
                  },
                ],
                "select": {
                  "exist": [
                    "app_id",
                    "subscription_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "app-webhooks",
                  "2026-09",
                  "{app_id}",
                  "subscriptions",
                  "{subscription_id}",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "app_id",
                      "orig": "app_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/app-webhooks/2026-09/{appId}/settings",
                "rename": {
                  "param": {
                    "appId": "app_id",
                  },
                },
                "segments": [
                  {
                    "lit": "app-webhooks",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "app_id",
                  },
                  {
                    "lit": "settings",
                  },
                ],
                "select": {
                  "exist": [
                    "app_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "app-webhooks",
                  "2026-09",
                  "{app_id}",
                  "settings",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "filter_id",
                      "orig": "filter_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/webhooks-journal/subscriptions/2026-09/filters/{filterId}",
                "rename": {
                  "param": {
                    "filterId": "filter_id",
                  },
                },
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "subscriptions",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "filters",
                  },
                  {
                    "var": "filter_id",
                  },
                ],
                "select": {
                  "exist": [
                    "filter_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "subscriptions",
                  "2026-09",
                  "filters",
                  "{filter_id}",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "portal_id",
                      "orig": "portal_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/webhooks-journal/subscriptions/2026-09/portals/{portalId}",
                "rename": {
                  "param": {
                    "portalId": "portal_id",
                  },
                },
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "subscriptions",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "portals",
                  },
                  {
                    "var": "portal_id",
                  },
                ],
                "select": {
                  "exist": [
                    "portal_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "subscriptions",
                  "2026-09",
                  "portals",
                  "{portal_id}",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "subscription_id",
                      "orig": "subscription_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/webhooks-journal/subscriptions/2026-09/{subscriptionId}",
                "rename": {
                  "param": {
                    "subscriptionId": "subscription_id",
                  },
                },
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "subscriptions",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "subscription_id",
                  },
                ],
                "select": {
                  "exist": [
                    "subscription_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "subscriptions",
                  "2026-09",
                  "{subscription_id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "offset",
            ],
            [
              "filter",
            ],
            [
              "portal",
            ],
            [
              "2026_09",
            ],
            [
              "2026_09",
              "subscription",
            ],
          ],
        },
      },
      "webhooks_batch_response_journal_fetch": {
        "fields": [
          {
            "format": "date-time",
            "name": "completedAt",
            "req": True,
            "short": "The date and time when the batch operation was completed, in ISO 8601 format.",
            "type": "`$STRING`",
          },
          {
            "name": "inputs",
            "req": True,
            "short": "An array of strings to be processed.",
            "type": "`$ARRAY`",
          },
          {
            "name": "links",
            "short": "A map of link names to associated URIs related to the batch operation.",
            "type": "`$OBJECT`",
          },
          {
            "format": "date-time",
            "name": "requestedAt",
            "short": "The date and time when the batch operation was requested, in ISO 8601 format.",
            "type": "`$STRING`",
          },
          {
            "name": "results",
            "req": True,
            "short": "An array of results from the batch operation, each represented as a JournalFetchResponse object.",
            "type": "`$ARRAY`",
          },
          {
            "format": "date-time",
            "name": "startedAt",
            "req": True,
            "short": "The date and time when the batch operation started, in ISO 8601 format.",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "req": True,
            "short": "The current status of the batch operation.",
            "type": "`$STRING`",
          },
        ],
        "name": "webhooks_batch_response_journal_fetch",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "install_portal_id",
                      "orig": "install_portal_id",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/webhooks-journal/journal-local/2026-09/batch/read",
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "journal-local",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "batch",
                  },
                  {
                    "lit": "read",
                  },
                ],
                "select": {
                  "exist": [
                    "install_portal_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "journal-local",
                  "2026-09",
                  "batch",
                  "read",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "install_portal_id",
                      "orig": "install_portal_id",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/webhooks-journal/journal/2026-09/batch/read",
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "journal",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "batch",
                  },
                  {
                    "lit": "read",
                  },
                ],
                "select": {
                  "exist": [
                    "install_portal_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "journal",
                  "2026-09",
                  "batch",
                  "read",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "batch_id",
                      "orig": "offset",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": None,
                      "kind": "param",
                      "name": "count",
                      "orig": "count",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "install_portal_id",
                      "orig": "install_portal_id",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks-journal/journal-local/2026-09/batch/{offset}/next/{count}",
                "rename": {
                  "param": {
                    "offset": "batch_id",
                  },
                },
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "journal-local",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "batch",
                  },
                  {
                    "var": "batch_id",
                  },
                  {
                    "lit": "next",
                  },
                  {
                    "var": "count",
                  },
                ],
                "select": {
                  "exist": [
                    "batch_id",
                    "count",
                    "install_portal_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "journal-local",
                  "2026-09",
                  "batch",
                  "{batch_id}",
                  "next",
                  "{count}",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "batch_id",
                      "orig": "offset",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": None,
                      "kind": "param",
                      "name": "count",
                      "orig": "count",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "install_portal_id",
                      "orig": "install_portal_id",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks-journal/journal/2026-09/batch/{offset}/next/{count}",
                "rename": {
                  "param": {
                    "offset": "batch_id",
                  },
                },
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "journal",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "batch",
                  },
                  {
                    "var": "batch_id",
                  },
                  {
                    "lit": "next",
                  },
                  {
                    "var": "count",
                  },
                ],
                "select": {
                  "exist": [
                    "batch_id",
                    "count",
                    "install_portal_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "journal",
                  "2026-09",
                  "batch",
                  "{batch_id}",
                  "next",
                  "{count}",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "count",
                      "orig": "count",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "install_portal_id",
                      "orig": "install_portal_id",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks-journal/journal-local/2026-09/batch/earliest/{count}",
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "journal-local",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "batch",
                  },
                  {
                    "lit": "earliest",
                  },
                  {
                    "var": "count",
                  },
                ],
                "select": {
                  "exist": [
                    "count",
                    "install_portal_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "journal-local",
                  "2026-09",
                  "batch",
                  "earliest",
                  "{count}",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "count",
                      "orig": "count",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "install_portal_id",
                      "orig": "install_portal_id",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks-journal/journal-local/2026-09/batch/latest/{count}",
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "journal-local",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "batch",
                  },
                  {
                    "lit": "latest",
                  },
                  {
                    "var": "count",
                  },
                ],
                "select": {
                  "exist": [
                    "count",
                    "install_portal_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "journal-local",
                  "2026-09",
                  "batch",
                  "latest",
                  "{count}",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "count",
                      "orig": "count",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "install_portal_id",
                      "orig": "install_portal_id",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks-journal/journal/2026-09/batch/earliest/{count}",
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "journal",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "batch",
                  },
                  {
                    "lit": "earliest",
                  },
                  {
                    "var": "count",
                  },
                ],
                "select": {
                  "exist": [
                    "count",
                    "install_portal_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "journal",
                  "2026-09",
                  "batch",
                  "earliest",
                  "{count}",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "count",
                      "orig": "count",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "install_portal_id",
                      "orig": "install_portal_id",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks-journal/journal/2026-09/batch/latest/{count}",
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "journal",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "batch",
                  },
                  {
                    "lit": "latest",
                  },
                  {
                    "var": "count",
                  },
                ],
                "select": {
                  "exist": [
                    "count",
                    "install_portal_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "journal",
                  "2026-09",
                  "batch",
                  "latest",
                  "{count}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "earliest",
            ],
            [
              "latest",
            ],
            [
              "batch",
              "next",
            ],
          ],
        },
      },
      "webhooks_batch_response_subscription": {
        "fields": [
          {
            "format": "date-time",
            "name": "completedAt",
            "req": True,
            "short": "The date and time when the batch operation was completed, in ISO 8601 format.",
            "type": "`$STRING`",
          },
          {
            "name": "inputs",
            "req": True,
            "short": "An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated.",
            "type": "`$ARRAY`",
          },
          {
            "name": "links",
            "short": "A map of link names to associated URIs providing additional information about the batch operation.",
            "type": "`$OBJECT`",
          },
          {
            "format": "date-time",
            "name": "requestedAt",
            "short": "The date and time when the batch operation was requested, in ISO 8601 format.",
            "type": "`$STRING`",
          },
          {
            "name": "results",
            "req": True,
            "short": "An array containing the results of the batch operation, with each item representing an individual subscription response.",
            "type": "`$ARRAY`",
          },
          {
            "format": "date-time",
            "name": "startedAt",
            "req": True,
            "short": "The date and time when the batch operation started, in ISO 8601 format.",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "req": True,
            "short": "The current status of the batch operation.",
            "type": "`$STRING`",
          },
        ],
        "name": "webhooks_batch_response_subscription",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "app_id",
                      "orig": "app_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/app-webhooks/2026-09/{appId}/subscriptions/batch/update",
                "rename": {
                  "param": {
                    "appId": "app_id",
                  },
                },
                "segments": [
                  {
                    "lit": "app-webhooks",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "app_id",
                  },
                  {
                    "lit": "subscriptions",
                  },
                  {
                    "lit": "batch",
                  },
                  {
                    "lit": "update",
                  },
                ],
                "select": {
                  "exist": [
                    "app_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "app-webhooks",
                  "2026-09",
                  "{app_id}",
                  "subscriptions",
                  "batch",
                  "update",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "2026_09",
            ],
          ],
        },
      },
      "webhooks_collection_response_subscription_response_no_paging": {
        "fields": [
          {
            "name": "actionOverrides",
            "short": "An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object.",
            "type": "`$OBJECT`",
          },
          {
            "name": "actions",
            "req": True,
            "short": "A list of actions that trigger the subscription.",
            "type": "`$ARRAY`",
          },
          {
            "format": "int64",
            "name": "appId",
            "req": True,
            "short": "The unique identifier for the app associated with the subscription.",
            "type": "`$INTEGER`",
          },
          {
            "name": "associatedObjectTypeIds",
            "short": "A list of associated object type IDs.",
            "type": "`$ARRAY`",
          },
          {
            "format": "date-time",
            "name": "createdAt",
            "req": True,
            "short": "The date and time when the subscription was created, in ISO 8601 format.",
            "type": "`$STRING`",
          },
          {
            "format": "int64",
            "name": "createdBy",
            "short": "The ID of the user who created the subscription.",
            "type": "`$INTEGER`",
          },
          {
            "format": "date-time",
            "name": "deletedAt",
            "short": "The date and time when the subscription was deleted, in ISO 8601 format, if applicable.",
            "type": "`$STRING`",
          },
          {
            "format": "int64",
            "name": "id",
            "req": True,
            "short": "The unique identifier for the subscription.",
            "type": "`$INTEGER`",
          },
          {
            "name": "listIds",
            "short": "A list of list IDs associated with the subscription.",
            "type": "`$ARRAY`",
          },
          {
            "name": "objectIds",
            "short": "A list of object IDs associated with the subscription.",
            "type": "`$ARRAY`",
          },
          {
            "name": "objectTypeId",
            "req": True,
            "short": "The identifier for the object type associated with the subscription.",
            "type": "`$STRING`",
          },
          {
            "format": "int64",
            "name": "portalId",
            "short": "The unique identifier for the portal associated with the subscription.",
            "type": "`$INTEGER`",
          },
          {
            "name": "properties",
            "short": "A list of property names associated with the subscription.",
            "type": "`$ARRAY`",
          },
          {
            "name": "subscriptionType",
            "req": True,
            "short": "The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "updatedAt",
            "req": True,
            "short": "The date and time when the subscription was last updated, in ISO 8601 format.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "webhooks_collection_response_subscription_response_no_paging",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks-journal/subscriptions/2026-09",
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "subscriptions",
                  },
                  {
                    "lit": "2026-09",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "parts": [
                  "webhooks-journal",
                  "subscriptions",
                  "2026-09",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "webhooks_crm_object_snapshot_batch": {
        "fields": [
          {
            "name": "snapshotRequests",
            "req": True,
            "short": "An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object.",
            "type": "`$ARRAY`",
          },
          {
            "name": "snapshotResponses",
            "req": True,
            "short": "An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object.",
            "type": "`$ARRAY`",
          },
        ],
        "name": "webhooks_crm_object_snapshot_batch",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/webhooks-journal/snapshots/2026-09/crm",
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "snapshots",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "crm",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "snapshots",
                  "2026-09",
                  "crm",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "webhooks_filter": {
        "fields": [
          {
            "name": "conditions",
            "req": True,
            "short": "An array of conditions that define the criteria for the filter.",
            "type": "`$ARRAY`",
          },
          {
            "format": "int64",
            "name": "createdAt",
            "req": True,
            "short": "A Unix timestamp in milliseconds indicating when the filter was created.",
            "type": "`$INTEGER`",
          },
          {
            "name": "filter",
            "req": True,
            "short": "Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against.",
            "type": "`$OBJECT`",
          },
          {
            "format": "int64",
            "name": "filterId",
            "req": True,
            "short": "The unique identifier for the created filter.",
            "type": "`$INTEGER`",
          },
          {
            "format": "int64",
            "name": "id",
            "req": True,
            "short": "The unique identifier for the filter.",
            "type": "`$INTEGER`",
          },
          {
            "format": "int64",
            "name": "subscriptionId",
            "req": True,
            "short": "The unique identifier of the subscription to which the filter will be applied.",
            "type": "`$INTEGER`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "webhooks_filter",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/webhooks-journal/subscriptions/2026-09/filters",
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "subscriptions",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "filters",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "subscriptions",
                  "2026-09",
                  "filters",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "filter_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks-journal/subscriptions/2026-09/filters/{filterId}",
                "rename": {
                  "param": {
                    "filterId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "subscriptions",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "filters",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.filter`",
                },
                "parts": [
                  "webhooks-journal",
                  "subscriptions",
                  "2026-09",
                  "filters",
                  "{id}",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "subscription_id",
                      "orig": "subscription_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}",
                "rename": {
                  "param": {
                    "subscriptionId": "subscription_id",
                  },
                },
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "subscriptions",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "filters",
                  },
                  {
                    "lit": "subscription",
                  },
                  {
                    "var": "subscription_id",
                  },
                ],
                "select": {
                  "exist": [
                    "subscription_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "subscriptions",
                  "2026-09",
                  "filters",
                  "subscription",
                  "{subscription_id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "subscription",
            ],
          ],
        },
      },
      "webhooks_setting": {
        "fields": [
          {
            "format": "int32",
            "name": "maxConcurrentRequests",
            "req": True,
            "short": "The maximum number of concurrent requests allowed.",
            "type": "`$INTEGER`",
          },
          {
            "name": "targetUrl",
            "req": True,
            "short": "The URL to which webhook events will be sent.",
            "type": "`$STRING`",
          },
          {
            "name": "throttling",
            "req": True,
            "type": "`$OBJECT`",
          },
        ],
        "name": "webhooks_setting",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "app_id",
                      "orig": "app_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/app-webhooks/2026-09/{appId}/settings",
                "rename": {
                  "param": {
                    "appId": "app_id",
                  },
                },
                "segments": [
                  {
                    "lit": "app-webhooks",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "app_id",
                  },
                  {
                    "lit": "settings",
                  },
                ],
                "select": {
                  "exist": [
                    "app_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.throttling`",
                },
                "parts": [
                  "app-webhooks",
                  "2026-09",
                  "{app_id}",
                  "settings",
                ],
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "app_id",
                      "orig": "app_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/app-webhooks/2026-09/{appId}/settings",
                "rename": {
                  "param": {
                    "appId": "app_id",
                  },
                },
                "segments": [
                  {
                    "lit": "app-webhooks",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "app_id",
                  },
                  {
                    "lit": "settings",
                  },
                ],
                "select": {
                  "exist": [
                    "app_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.throttling`",
                },
                "parts": [
                  "app-webhooks",
                  "2026-09",
                  "{app_id}",
                  "settings",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "2026_09",
            ],
          ],
        },
      },
      "webhooks_snapshot_status": {
        "fields": [
          {
            "format": "int64",
            "name": "completedAt",
            "short": "The timestamp indicating when the snapshot operation was completed, represented as a Unix timestamp in milliseconds.",
            "type": "`$INTEGER`",
          },
          {
            "name": "errorCode",
            "short": "A code representing the error that occurred, if any.",
            "type": "`$STRING`",
          },
          {
            "format": "uuid",
            "name": "id",
            "req": True,
            "short": "The unique identifier for the snapshot operation, represented as a UUID.",
            "type": "`$STRING`",
          },
          {
            "format": "int64",
            "name": "initiatedAt",
            "req": True,
            "short": "The timestamp indicating when the snapshot operation was initiated, represented as a Unix timestamp in milliseconds.",
            "type": "`$INTEGER`",
          },
          {
            "name": "message",
            "short": "A descriptive message providing additional information about the snapshot operation or error.",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "req": True,
            "short": "The current status of the snapshot.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "webhooks_snapshot_status",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "status_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks-journal/journal-local/2026-09/status/{statusId}",
                "rename": {
                  "param": {
                    "statusId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "journal-local",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "status",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "journal-local",
                  "2026-09",
                  "status",
                  "{id}",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "status_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks-journal/journal/2026-09/status/{statusId}",
                "rename": {
                  "param": {
                    "statusId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "journal",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "status",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "journal",
                  "2026-09",
                  "status",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "webhooks_subscription": {
        "fields": [
          {
            "name": "active",
            "op": {
              "update": {
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "short": "A boolean indicating whether the subscription is currently active.",
            "type": "`$BOOLEAN`",
          },
          {
            "format": "date-time",
            "name": "createdAt",
            "req": True,
            "short": "The date and time when the subscription was created, in ISO 8601 format.",
            "type": "`$STRING`",
          },
          {
            "name": "eventType",
            "req": True,
            "short": "The type of event that triggers the subscription.",
            "type": "`$STRING`",
          },
          {
            "name": "eventTypeName",
            "short": "The name of the event type for the subscription.",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "The unique identifier for the subscription.",
            "type": "`$STRING`",
          },
          {
            "name": "objectTypeId",
            "short": "The identifier for the object type associated with the subscription.",
            "type": "`$STRING`",
          },
          {
            "name": "propertyName",
            "short": "The name of the property associated with the subscription event, if applicable.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "updatedAt",
            "short": "The date and time when the subscription was last updated, in ISO 8601 format.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "webhooks_subscription",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "app_id",
                      "orig": "app_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/app-webhooks/2026-09/{appId}/subscriptions",
                "rename": {
                  "param": {
                    "appId": "app_id",
                  },
                },
                "segments": [
                  {
                    "lit": "app-webhooks",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "app_id",
                  },
                  {
                    "lit": "subscriptions",
                  },
                ],
                "select": {
                  "exist": [
                    "app_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "app-webhooks",
                  "2026-09",
                  "{app_id}",
                  "subscriptions",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "app_id",
                      "orig": "app_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "subscription_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}",
                "rename": {
                  "param": {
                    "appId": "app_id",
                    "subscriptionId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "app-webhooks",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "app_id",
                  },
                  {
                    "lit": "subscriptions",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "app_id",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "app-webhooks",
                  "2026-09",
                  "{app_id}",
                  "subscriptions",
                  "{id}",
                ],
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "app_id",
                      "orig": "app_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "subscription_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "PATCH",
                "orig": "/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}",
                "rename": {
                  "param": {
                    "appId": "app_id",
                    "subscriptionId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "app-webhooks",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "app_id",
                  },
                  {
                    "lit": "subscriptions",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "app_id",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "app-webhooks",
                  "2026-09",
                  "{app_id}",
                  "subscriptions",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "2026_09",
            ],
          ],
        },
      },
      "webhooks_subscription_list": {
        "fields": [
          {
            "name": "active",
            "req": True,
            "short": "A boolean indicating whether the subscription is currently active.",
            "type": "`$BOOLEAN`",
          },
          {
            "format": "date-time",
            "name": "createdAt",
            "req": True,
            "short": "The date and time when the subscription was created, in ISO 8601 format.",
            "type": "`$STRING`",
          },
          {
            "name": "eventType",
            "req": True,
            "short": "The type of event that triggers the subscription.",
            "type": "`$STRING`",
          },
          {
            "name": "eventTypeName",
            "short": "The name of the event type for the subscription.",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "The unique identifier for the subscription.",
            "type": "`$STRING`",
          },
          {
            "name": "objectTypeId",
            "short": "The identifier for the object type associated with the subscription.",
            "type": "`$STRING`",
          },
          {
            "name": "propertyName",
            "short": "The name of the property associated with the subscription event, if applicable.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "updatedAt",
            "short": "The date and time when the subscription was last updated, in ISO 8601 format.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "webhooks_subscription_list",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "app_id",
                      "orig": "app_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/app-webhooks/2026-09/{appId}/subscriptions",
                "rename": {
                  "param": {
                    "appId": "app_id",
                  },
                },
                "segments": [
                  {
                    "lit": "app-webhooks",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "app_id",
                  },
                  {
                    "lit": "subscriptions",
                  },
                ],
                "select": {
                  "exist": [
                    "app_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "parts": [
                  "app-webhooks",
                  "2026-09",
                  "{app_id}",
                  "subscriptions",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "2026_09",
            ],
          ],
        },
      },
      "webhooks_subscription_response_1": {
        "fields": [
          {
            "name": "actionOverrides",
            "short": "An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object.",
            "type": "`$OBJECT`",
          },
          {
            "name": "actions",
            "req": True,
            "short": "A list of actions that trigger the subscription.",
            "type": "`$ARRAY`",
          },
          {
            "format": "int64",
            "name": "appId",
            "req": True,
            "short": "The unique identifier for the app associated with the subscription.",
            "type": "`$INTEGER`",
          },
          {
            "name": "associatedObjectTypeIds",
            "short": "A list of associated object type IDs.",
            "type": "`$ARRAY`",
          },
          {
            "format": "date-time",
            "name": "createdAt",
            "req": True,
            "short": "The date and time when the subscription was created, in ISO 8601 format.",
            "type": "`$STRING`",
          },
          {
            "format": "int64",
            "name": "createdBy",
            "short": "The ID of the user who created the subscription.",
            "type": "`$INTEGER`",
          },
          {
            "format": "date-time",
            "name": "deletedAt",
            "short": "The date and time when the subscription was deleted, in ISO 8601 format, if applicable.",
            "type": "`$STRING`",
          },
          {
            "format": "int64",
            "name": "id",
            "req": True,
            "short": "The unique identifier for the subscription.",
            "type": "`$INTEGER`",
          },
          {
            "name": "listIds",
            "short": "A list of list IDs associated with the subscription.",
            "type": "`$ARRAY`",
          },
          {
            "name": "objectIds",
            "short": "A list of object IDs associated with the subscription.",
            "type": "`$ARRAY`",
          },
          {
            "name": "objectTypeId",
            "req": True,
            "short": "The identifier for the object type associated with the subscription.",
            "type": "`$STRING`",
          },
          {
            "format": "int64",
            "name": "portalId",
            "short": "The unique identifier for the portal associated with the subscription.",
            "type": "`$INTEGER`",
          },
          {
            "name": "properties",
            "short": "A list of property names associated with the subscription.",
            "type": "`$ARRAY`",
          },
          {
            "name": "subscriptionType",
            "req": True,
            "short": "The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "updatedAt",
            "req": True,
            "short": "The date and time when the subscription was last updated, in ISO 8601 format.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "webhooks_subscription_response_1",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/webhooks-journal/subscriptions/2026-09",
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "subscriptions",
                  },
                  {
                    "lit": "2026-09",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "subscriptions",
                  "2026-09",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "subscription_id",
                      "orig": "subscription_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks-journal/subscriptions/2026-09/{subscriptionId}",
                "rename": {
                  "param": {
                    "subscriptionId": "subscription_id",
                  },
                },
                "segments": [
                  {
                    "lit": "webhooks-journal",
                  },
                  {
                    "lit": "subscriptions",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "var": "subscription_id",
                  },
                ],
                "select": {
                  "exist": [
                    "subscription_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhooks-journal",
                  "subscriptions",
                  "2026-09",
                  "{subscription_id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "2026_09",
            ],
          ],
        },
      },
    },
    }
