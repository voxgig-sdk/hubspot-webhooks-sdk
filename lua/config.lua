-- HubspotWebhooks SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "HubspotWebhooks",
      slug = "hubspot-webhooks",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["debug"] = {
        ["options"] = {
          ["active"] = false,
          ["max"] = 100,
          ["redact"] = {
            "authorization",
            "cookie",
            "set-cookie",
            "api-key",
            "apikey",
            "x-api-key",
            "idempotency-key",
          },
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["onEntry"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["idempotency"] = {
        ["options"] = {
          ["active"] = false,
          ["header"] = "Idempotency-Key",
          ["methods"] = {
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
          },
          ["ops"] = {
            "create",
            "update",
            "remove",
          },
        },
        ["optspec"] = {
          ["keygen"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["metrics"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["paging"] = {
        ["options"] = {
          ["active"] = false,
          ["afterVar"] = "after",
          ["cursorParam"] = "cursor",
          ["firstVar"] = "first",
          ["limitParam"] = "limit",
          ["pageParam"] = "page",
          ["startPage"] = 1,
        },
        ["optspec"] = {
          ["limit"] = "`$NUMBER`",
          ["ops"] = "`$LIST`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://api.hubapi.com",
      auth = {
        prefix = "",
        ["in"] = "query",
        name = "hapikey",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["basic"] = {},
        ["webhooks_batch_response_journal_fetch"] = {},
        ["webhooks_batch_response_subscription"] = {},
        ["webhooks_crm_object_snapshot_batch"] = {},
        ["webhooks_filter"] = {},
        ["webhooks_setting"] = {},
        ["webhooks_snapshot_status"] = {},
        ["webhooks_subscription"] = {},
        ["webhooks_subscription_response_1"] = {},
      },
    },
    entity = {
      ["basic"] = {
        ["fields"] = {},
        ["name"] = "basic",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks-journal/journal-local/2026-09/offset/{offset}/next",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "journal-local",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "offset",
                  },
                  {
                    ["var"] = "offset_id",
                  },
                  {
                    ["lit"] = "next",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "journal-local",
                  "2026-09",
                  "offset",
                  "{offset_id}",
                  "next",
                },
                ["rename"] = {
                  ["param"] = {
                    ["offset"] = "offset_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "offset_id",
                      ["orig"] = "offset",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "install_portal_id",
                      ["orig"] = "install_portal_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "install_portal_id",
                    "offset_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks-journal/journal/2026-09/offset/{offset}/next",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "journal",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "offset",
                  },
                  {
                    ["var"] = "offset_id",
                  },
                  {
                    ["lit"] = "next",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "journal",
                  "2026-09",
                  "offset",
                  "{offset_id}",
                  "next",
                },
                ["rename"] = {
                  ["param"] = {
                    ["offset"] = "offset_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "offset_id",
                      ["orig"] = "offset",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "install_portal_id",
                      ["orig"] = "install_portal_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "install_portal_id",
                    "offset_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks-journal/journal-local/2026-09/earliest",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "journal-local",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "earliest",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "journal-local",
                  "2026-09",
                  "earliest",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "install_portal_id",
                      ["orig"] = "install_portal_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "install_portal_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks-journal/journal-local/2026-09/latest",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "journal-local",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "latest",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "journal-local",
                  "2026-09",
                  "latest",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "install_portal_id",
                      ["orig"] = "install_portal_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "install_portal_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks-journal/journal/2026-09/earliest",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "journal",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "earliest",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "journal",
                  "2026-09",
                  "earliest",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "install_portal_id",
                      ["orig"] = "install_portal_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "install_portal_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks-journal/journal/2026-09/latest",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "journal",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "latest",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "journal",
                  "2026-09",
                  "latest",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "install_portal_id",
                      ["orig"] = "install_portal_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "install_portal_id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}",
                ["segments"] = {
                  {
                    ["lit"] = "app-webhooks",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["var"] = "app_id",
                  },
                  {
                    ["lit"] = "subscriptions",
                  },
                  {
                    ["var"] = "subscription_id",
                  },
                },
                ["parts"] = {
                  "app-webhooks",
                  "2026-09",
                  "{app_id}",
                  "subscriptions",
                  "{subscription_id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["appId"] = "app_id",
                    ["subscriptionId"] = "subscription_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "app_id",
                      ["orig"] = "app_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                    {
                      ["name"] = "subscription_id",
                      ["orig"] = "subscription_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "app_id",
                    "subscription_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/app-webhooks/2026-09/{appId}/settings",
                ["segments"] = {
                  {
                    ["lit"] = "app-webhooks",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["var"] = "app_id",
                  },
                  {
                    ["lit"] = "settings",
                  },
                },
                ["parts"] = {
                  "app-webhooks",
                  "2026-09",
                  "{app_id}",
                  "settings",
                },
                ["rename"] = {
                  ["param"] = {
                    ["appId"] = "app_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "app_id",
                      ["orig"] = "app_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "app_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/webhooks-journal/subscriptions/2026-09/filters/{filterId}",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "subscriptions",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "filters",
                  },
                  {
                    ["var"] = "filter_id",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "subscriptions",
                  "2026-09",
                  "filters",
                  "{filter_id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["filterId"] = "filter_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "filter_id",
                      ["orig"] = "filter_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "filter_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/webhooks-journal/subscriptions/2026-09/portals/{portalId}",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "subscriptions",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "portals",
                  },
                  {
                    ["var"] = "portal_id",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "subscriptions",
                  "2026-09",
                  "portals",
                  "{portal_id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["portalId"] = "portal_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "portal_id",
                      ["orig"] = "portal_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "portal_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/webhooks-journal/subscriptions/2026-09/{subscriptionId}",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "subscriptions",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["var"] = "subscription_id",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "subscriptions",
                  "2026-09",
                  "{subscription_id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["subscriptionId"] = "subscription_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "subscription_id",
                      ["orig"] = "subscription_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "subscription_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["webhooks_batch_response_journal_fetch"] = {
        ["fields"] = {
          {
            ["name"] = "completedAt",
            ["title"] = "Completed At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The date and time when the batch operation was completed, in ISO 8601 format.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "inputs",
            ["title"] = "Inputs",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "An array of strings to be processed.",
          },
          {
            ["name"] = "links",
            ["title"] = "Links",
            ["type"] = "`$OBJECT`",
            ["short"] = "A map of link names to associated URIs related to the batch operation.",
          },
          {
            ["name"] = "requestedAt",
            ["title"] = "Requested At",
            ["type"] = "`$STRING`",
            ["short"] = "The date and time when the batch operation was requested, in ISO 8601 format.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "results",
            ["title"] = "Results",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "An array of results from the batch operation, each represented as a JournalFetchResponse object.",
          },
          {
            ["name"] = "startedAt",
            ["title"] = "Started At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The date and time when the batch operation started, in ISO 8601 format.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The current status of the batch operation.",
          },
        },
        ["name"] = "webhooks_batch_response_journal_fetch",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/webhooks-journal/journal-local/2026-09/batch/read",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "journal-local",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "batch",
                  },
                  {
                    ["lit"] = "read",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "journal-local",
                  "2026-09",
                  "batch",
                  "read",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "install_portal_id",
                      ["orig"] = "install_portal_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "install_portal_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/webhooks-journal/journal/2026-09/batch/read",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "journal",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "batch",
                  },
                  {
                    ["lit"] = "read",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "journal",
                  "2026-09",
                  "batch",
                  "read",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "install_portal_id",
                      ["orig"] = "install_portal_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "install_portal_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks-journal/journal-local/2026-09/batch/{offset}/next/{count}",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "journal-local",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "batch",
                  },
                  {
                    ["var"] = "batch_id",
                  },
                  {
                    ["lit"] = "next",
                  },
                  {
                    ["var"] = "count",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "journal-local",
                  "2026-09",
                  "batch",
                  "{batch_id}",
                  "next",
                  "{count}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["offset"] = "batch_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "batch_id",
                      ["orig"] = "offset",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                    {
                      ["name"] = "count",
                      ["orig"] = "count",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "install_portal_id",
                      ["orig"] = "install_portal_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "batch_id",
                    "count",
                    "install_portal_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks-journal/journal/2026-09/batch/{offset}/next/{count}",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "journal",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "batch",
                  },
                  {
                    ["var"] = "batch_id",
                  },
                  {
                    ["lit"] = "next",
                  },
                  {
                    ["var"] = "count",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "journal",
                  "2026-09",
                  "batch",
                  "{batch_id}",
                  "next",
                  "{count}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["offset"] = "batch_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "batch_id",
                      ["orig"] = "offset",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                    {
                      ["name"] = "count",
                      ["orig"] = "count",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "install_portal_id",
                      ["orig"] = "install_portal_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "batch_id",
                    "count",
                    "install_portal_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks-journal/journal-local/2026-09/batch/earliest/{count}",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "journal-local",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "batch",
                  },
                  {
                    ["lit"] = "earliest",
                  },
                  {
                    ["var"] = "count",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "journal-local",
                  "2026-09",
                  "batch",
                  "earliest",
                  "{count}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "count",
                      ["orig"] = "count",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "install_portal_id",
                      ["orig"] = "install_portal_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "count",
                    "install_portal_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks-journal/journal-local/2026-09/batch/latest/{count}",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "journal-local",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "batch",
                  },
                  {
                    ["lit"] = "latest",
                  },
                  {
                    ["var"] = "count",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "journal-local",
                  "2026-09",
                  "batch",
                  "latest",
                  "{count}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "count",
                      ["orig"] = "count",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "install_portal_id",
                      ["orig"] = "install_portal_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "count",
                    "install_portal_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks-journal/journal/2026-09/batch/earliest/{count}",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "journal",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "batch",
                  },
                  {
                    ["lit"] = "earliest",
                  },
                  {
                    ["var"] = "count",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "journal",
                  "2026-09",
                  "batch",
                  "earliest",
                  "{count}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "count",
                      ["orig"] = "count",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "install_portal_id",
                      ["orig"] = "install_portal_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "count",
                    "install_portal_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks-journal/journal/2026-09/batch/latest/{count}",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "journal",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "batch",
                  },
                  {
                    ["lit"] = "latest",
                  },
                  {
                    ["var"] = "count",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "journal",
                  "2026-09",
                  "batch",
                  "latest",
                  "{count}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "count",
                      ["orig"] = "count",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "install_portal_id",
                      ["orig"] = "install_portal_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "count",
                    "install_portal_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["webhooks_batch_response_subscription"] = {
        ["fields"] = {
          {
            ["name"] = "completedAt",
            ["title"] = "Completed At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The date and time when the batch operation was completed, in ISO 8601 format.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "inputs",
            ["title"] = "Inputs",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated.",
          },
          {
            ["name"] = "links",
            ["title"] = "Links",
            ["type"] = "`$OBJECT`",
            ["short"] = "A map of link names to associated URIs providing additional information about the batch operation.",
          },
          {
            ["name"] = "requestedAt",
            ["title"] = "Requested At",
            ["type"] = "`$STRING`",
            ["short"] = "The date and time when the batch operation was requested, in ISO 8601 format.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "results",
            ["title"] = "Results",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "An array containing the results of the batch operation, with each item representing an individual subscription response.",
          },
          {
            ["name"] = "startedAt",
            ["title"] = "Started At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The date and time when the batch operation started, in ISO 8601 format.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The current status of the batch operation.",
          },
        },
        ["name"] = "webhooks_batch_response_subscription",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/app-webhooks/2026-09/{appId}/subscriptions/batch/update",
                ["segments"] = {
                  {
                    ["lit"] = "app-webhooks",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["var"] = "app_id",
                  },
                  {
                    ["lit"] = "subscriptions",
                  },
                  {
                    ["lit"] = "batch",
                  },
                  {
                    ["lit"] = "update",
                  },
                },
                ["parts"] = {
                  "app-webhooks",
                  "2026-09",
                  "{app_id}",
                  "subscriptions",
                  "batch",
                  "update",
                },
                ["rename"] = {
                  ["param"] = {
                    ["appId"] = "app_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "app_id",
                      ["orig"] = "app_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "app_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["webhooks_crm_object_snapshot_batch"] = {
        ["fields"] = {
          {
            ["name"] = "snapshotRequests",
            ["title"] = "Snapshot Requests",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object.",
          },
          {
            ["name"] = "snapshotResponses",
            ["title"] = "Snapshot Responses",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object.",
          },
        },
        ["name"] = "webhooks_crm_object_snapshot_batch",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/webhooks-journal/snapshots/2026-09/crm",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "snapshots",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "crm",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "snapshots",
                  "2026-09",
                  "crm",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["webhooks_filter"] = {
        ["fields"] = {
          {
            ["name"] = "conditions",
            ["title"] = "Conditions",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "An array of conditions that define the criteria for the filter.",
          },
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "A Unix timestamp in milliseconds indicating when the filter was created.",
            ["format"] = "int64",
          },
          {
            ["name"] = "filter",
            ["title"] = "Filter",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against.",
          },
          {
            ["name"] = "filterId",
            ["title"] = "Filter Id",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "The unique identifier for the created filter.",
            ["format"] = "int64",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "The unique identifier for the filter.",
            ["format"] = "int64",
          },
          {
            ["name"] = "subscriptionId",
            ["title"] = "Subscription Id",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "The unique identifier of the subscription to which the filter will be applied.",
            ["format"] = "int64",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "webhooks_filter",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/webhooks-journal/subscriptions/2026-09/filters",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "subscriptions",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "filters",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "subscriptions",
                  "2026-09",
                  "filters",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks-journal/subscriptions/2026-09/filters/{filterId}",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "subscriptions",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "filters",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "subscriptions",
                  "2026-09",
                  "filters",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["filterId"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.filter`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "filter_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "subscriptions",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "filters",
                  },
                  {
                    ["lit"] = "subscription",
                  },
                  {
                    ["var"] = "subscription_id",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "subscriptions",
                  "2026-09",
                  "filters",
                  "subscription",
                  "{subscription_id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["subscriptionId"] = "subscription_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "subscription_id",
                      ["orig"] = "subscription_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "subscription_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["webhooks_setting"] = {
        ["fields"] = {
          {
            ["name"] = "maxConcurrentRequests",
            ["title"] = "Max Concurrent Requests",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "The maximum number of concurrent requests allowed.",
            ["format"] = "int32",
          },
          {
            ["name"] = "targetUrl",
            ["title"] = "Target Url",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The URL to which webhook events will be sent.",
          },
          {
            ["name"] = "throttling",
            ["title"] = "Throttling",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
        },
        ["name"] = "webhooks_setting",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/app-webhooks/2026-09/{appId}/settings",
                ["segments"] = {
                  {
                    ["lit"] = "app-webhooks",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["var"] = "app_id",
                  },
                  {
                    ["lit"] = "settings",
                  },
                },
                ["parts"] = {
                  "app-webhooks",
                  "2026-09",
                  "{app_id}",
                  "settings",
                },
                ["rename"] = {
                  ["param"] = {
                    ["appId"] = "app_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.throttling`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "app_id",
                      ["orig"] = "app_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "app_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/app-webhooks/2026-09/{appId}/settings",
                ["segments"] = {
                  {
                    ["lit"] = "app-webhooks",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["var"] = "app_id",
                  },
                  {
                    ["lit"] = "settings",
                  },
                },
                ["parts"] = {
                  "app-webhooks",
                  "2026-09",
                  "{app_id}",
                  "settings",
                },
                ["rename"] = {
                  ["param"] = {
                    ["appId"] = "app_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.throttling`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "app_id",
                      ["orig"] = "app_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "app_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["webhooks_snapshot_status"] = {
        ["fields"] = {
          {
            ["name"] = "completedAt",
            ["title"] = "Completed At",
            ["type"] = "`$INTEGER`",
            ["short"] = "The timestamp indicating when the snapshot operation was completed, represented as a Unix timestamp in milliseconds.",
            ["format"] = "int64",
          },
          {
            ["name"] = "errorCode",
            ["title"] = "Error Code",
            ["type"] = "`$STRING`",
            ["short"] = "A code representing the error that occurred, if any.",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The unique identifier for the snapshot operation, represented as a UUID.",
            ["format"] = "uuid",
          },
          {
            ["name"] = "initiatedAt",
            ["title"] = "Initiated At",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "The timestamp indicating when the snapshot operation was initiated, represented as a Unix timestamp in milliseconds.",
            ["format"] = "int64",
          },
          {
            ["name"] = "message",
            ["title"] = "Message",
            ["type"] = "`$STRING`",
            ["short"] = "A descriptive message providing additional information about the snapshot operation or error.",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The current status of the snapshot.",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "webhooks_snapshot_status",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks-journal/journal-local/2026-09/status/{statusId}",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "journal-local",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "status",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "journal-local",
                  "2026-09",
                  "status",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["statusId"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "status_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks-journal/journal/2026-09/status/{statusId}",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "journal",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "status",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "journal",
                  "2026-09",
                  "status",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["statusId"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "status_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["webhooks_subscription"] = {
        ["fields"] = {
          {
            ["name"] = "active",
            ["title"] = "Active",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$BOOLEAN`",
              },
            },
            ["short"] = "A boolean indicating whether the subscription is currently active.",
          },
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The date and time when the subscription was created, in ISO 8601 format.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "eventType",
            ["title"] = "Event Type",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The type of event that triggers the subscription.",
          },
          {
            ["name"] = "eventTypeName",
            ["title"] = "Event Type Name",
            ["type"] = "`$STRING`",
            ["short"] = "The name of the event type for the subscription.",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The unique identifier for the subscription.",
          },
          {
            ["name"] = "objectTypeId",
            ["title"] = "Object Type Id",
            ["type"] = "`$STRING`",
            ["short"] = "The identifier for the object type associated with the subscription.",
          },
          {
            ["name"] = "propertyName",
            ["title"] = "Property Name",
            ["type"] = "`$STRING`",
            ["short"] = "The name of the property associated with the subscription event, if applicable.",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["short"] = "The date and time when the subscription was last updated, in ISO 8601 format.",
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "webhooks_subscription",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/app-webhooks/2026-09/{appId}/subscriptions",
                ["segments"] = {
                  {
                    ["lit"] = "app-webhooks",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["var"] = "app_id",
                  },
                  {
                    ["lit"] = "subscriptions",
                  },
                },
                ["parts"] = {
                  "app-webhooks",
                  "2026-09",
                  "{app_id}",
                  "subscriptions",
                },
                ["rename"] = {
                  ["param"] = {
                    ["appId"] = "app_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "app_id",
                      ["orig"] = "app_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "app_id",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/app-webhooks/2026-09/{appId}/subscriptions",
                ["segments"] = {
                  {
                    ["lit"] = "app-webhooks",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["var"] = "app_id",
                  },
                  {
                    ["lit"] = "subscriptions",
                  },
                },
                ["parts"] = {
                  "app-webhooks",
                  "2026-09",
                  "{app_id}",
                  "subscriptions",
                },
                ["rename"] = {
                  ["param"] = {
                    ["appId"] = "app_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "app_id",
                      ["orig"] = "app_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "app_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}",
                ["segments"] = {
                  {
                    ["lit"] = "app-webhooks",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["var"] = "app_id",
                  },
                  {
                    ["lit"] = "subscriptions",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "app-webhooks",
                  "2026-09",
                  "{app_id}",
                  "subscriptions",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["appId"] = "app_id",
                    ["subscriptionId"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "app_id",
                      ["orig"] = "app_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "subscription_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "app_id",
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}",
                ["segments"] = {
                  {
                    ["lit"] = "app-webhooks",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["var"] = "app_id",
                  },
                  {
                    ["lit"] = "subscriptions",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "app-webhooks",
                  "2026-09",
                  "{app_id}",
                  "subscriptions",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["appId"] = "app_id",
                    ["subscriptionId"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "app_id",
                      ["orig"] = "app_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "subscription_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "app_id",
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["webhooks_subscription_response_1"] = {
        ["fields"] = {
          {
            ["name"] = "actionOverrides",
            ["title"] = "Action Overrides",
            ["type"] = "`$OBJECT`",
            ["short"] = "An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object.",
          },
          {
            ["name"] = "actions",
            ["title"] = "Actions",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "A list of actions that trigger the subscription.",
          },
          {
            ["name"] = "appId",
            ["title"] = "App Id",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "The unique identifier for the app associated with the subscription.",
            ["format"] = "int64",
          },
          {
            ["name"] = "associatedObjectTypeIds",
            ["title"] = "Associated Object Type Ids",
            ["type"] = "`$ARRAY`",
            ["short"] = "A list of associated object type IDs.",
          },
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The date and time when the subscription was created, in ISO 8601 format.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "createdBy",
            ["title"] = "Created By",
            ["type"] = "`$INTEGER`",
            ["short"] = "The ID of the user who created the subscription.",
            ["format"] = "int64",
          },
          {
            ["name"] = "deletedAt",
            ["title"] = "Deleted At",
            ["type"] = "`$STRING`",
            ["short"] = "The date and time when the subscription was deleted, in ISO 8601 format, if applicable.",
            ["format"] = "date-time",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
            ["short"] = "The unique identifier for the subscription.",
            ["format"] = "int64",
          },
          {
            ["name"] = "listIds",
            ["title"] = "List Ids",
            ["type"] = "`$ARRAY`",
            ["short"] = "A list of list IDs associated with the subscription.",
          },
          {
            ["name"] = "objectIds",
            ["title"] = "Object Ids",
            ["type"] = "`$ARRAY`",
            ["short"] = "A list of object IDs associated with the subscription.",
          },
          {
            ["name"] = "objectTypeId",
            ["title"] = "Object Type Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The identifier for the object type associated with the subscription.",
          },
          {
            ["name"] = "portalId",
            ["title"] = "Portal Id",
            ["type"] = "`$INTEGER`",
            ["short"] = "The unique identifier for the portal associated with the subscription.",
            ["format"] = "int64",
          },
          {
            ["name"] = "properties",
            ["title"] = "Properties",
            ["type"] = "`$ARRAY`",
            ["short"] = "A list of property names associated with the subscription.",
          },
          {
            ["name"] = "subscriptionType",
            ["title"] = "Subscription Type",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'.",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The date and time when the subscription was last updated, in ISO 8601 format.",
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "webhooks_subscription_response_1",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/webhooks-journal/subscriptions/2026-09",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "subscriptions",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "subscriptions",
                  "2026-09",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks-journal/subscriptions/2026-09",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "subscriptions",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "subscriptions",
                  "2026-09",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks-journal/subscriptions/2026-09/{subscriptionId}",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks-journal",
                  },
                  {
                    ["lit"] = "subscriptions",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["var"] = "subscription_id",
                  },
                },
                ["parts"] = {
                  "webhooks-journal",
                  "subscriptions",
                  "2026-09",
                  "{subscription_id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["subscriptionId"] = "subscription_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "subscription_id",
                      ["orig"] = "subscription_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "subscription_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
