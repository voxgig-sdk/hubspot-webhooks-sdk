# HubspotWebhooks Lua SDK



The Lua SDK for the HubspotWebhooks API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Basic()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/hubspot-webhooks-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("hubspot-webhooks_sdk")

local client = sdk.new({
  apikey = os.getenv("HUBSPOT_WEBHOOKS_APIKEY"),
})
```

### 3. Load a webhooksbatchresponsejournalfetch

WebhooksBatchResponseJournalFetch is nested under count, so provide the `count`.

```lua
local webhooksbatchresponsejournalfetch, err = client:WebhooksBatchResponseJournalFetch():load({ count = 1 })
if err then error(err) end
print(webhooksbatchresponsejournalfetch)
```

### 4. Create, update, and remove

```lua
-- Remove
client:Basic():remove({ subscription_id = 1 })
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local webhookssnapshotstatus, err = client:WebhooksSnapshotStatus():load({ id = "example_id" })
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:WebhooksSnapshotStatus():load({ id = "test01" })
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
HUBSPOT_WEBHOOKS_TEST_LIVE=TRUE
HUBSPOT_WEBHOOKS_APIKEY=<your-key>
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### HubspotWebhooksSDK

```lua
local sdk = require("hubspot-webhooks_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### HubspotWebhooksSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Basic` | `(data) -> BasicEntity` | Create a Basic entity instance. |
| `WebhooksBatchResponseJournalFetch` | `(data) -> WebhooksBatchResponseJournalFetchEntity` | Create a WebhooksBatchResponseJournalFetch entity instance. |
| `WebhooksBatchResponseSubscription` | `(data) -> WebhooksBatchResponseSubscriptionEntity` | Create a WebhooksBatchResponseSubscription entity instance. |
| `WebhooksCollectionResponseSubscriptionResponseNoPaging` | `(data) -> WebhooksCollectionResponseSubscriptionResponseNoPagingEntity` | Create a WebhooksCollectionResponseSubscriptionResponseNoPaging entity instance. |
| `WebhooksCrmObjectSnapshotBatch` | `(data) -> WebhooksCrmObjectSnapshotBatchEntity` | Create a WebhooksCrmObjectSnapshotBatch entity instance. |
| `WebhooksFilter` | `(data) -> WebhooksFilterEntity` | Create a WebhooksFilter entity instance. |
| `WebhooksSetting` | `(data) -> WebhooksSettingEntity` | Create a WebhooksSetting entity instance. |
| `WebhooksSnapshotStatus` | `(data) -> WebhooksSnapshotStatusEntity` | Create a WebhooksSnapshotStatus entity instance. |
| `WebhooksSubscription` | `(data) -> WebhooksSubscriptionEntity` | Create a WebhooksSubscription entity instance. |
| `WebhooksSubscriptionList` | `(data) -> WebhooksSubscriptionListEntity` | Create a WebhooksSubscriptionList entity instance. |
| `WebhooksSubscriptionResponse1` | `(data) -> WebhooksSubscriptionResponse1Entity` | Create a WebhooksSubscriptionResponse1 entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local basic, err = client:Basic():load()
    if err then error(err) end
    -- basic is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### Basic

| Field | Description |
| --- | --- |

Operations: Load, Remove.

API path: `/webhooks-journal/journal-local/2026-09/offset/{offset}/next`

#### WebhooksBatchResponseJournalFetch

| Field | Description |
| --- | --- |
| `completedAt` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | An array of strings to be processed. |
| `links` | A map of link names to associated URIs related to the batch operation. |
| `requestedAt` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | An array of results from the batch operation, each represented as a JournalFetchResponse object. |
| `startedAt` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | The current status of the batch operation. |

Operations: Create, Load.

API path: `/webhooks-journal/journal-local/2026-09/batch/read`

#### WebhooksBatchResponseSubscription

| Field | Description |
| --- | --- |
| `completedAt` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated. |
| `links` | A map of link names to associated URIs providing additional information about the batch operation. |
| `requestedAt` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | An array containing the results of the batch operation, with each item representing an individual subscription response. |
| `startedAt` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | The current status of the batch operation. |

Operations: Create.

API path: `/app-webhooks/2026-09/{appId}/subscriptions/batch/update`

#### WebhooksCollectionResponseSubscriptionResponseNoPaging

| Field | Description |
| --- | --- |
| `actionOverrides` | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `actions` | A list of actions that trigger the subscription. |
| `appId` | The unique identifier for the app associated with the subscription. |
| `associatedObjectTypeIds` | A list of associated object type IDs. |
| `createdAt` | The date and time when the subscription was created, in ISO 8601 format. |
| `createdBy` | The ID of the user who created the subscription. |
| `deletedAt` | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `id` | The unique identifier for the subscription. |
| `listIds` | A list of list IDs associated with the subscription. |
| `objectIds` | A list of object IDs associated with the subscription. |
| `objectTypeId` | The identifier for the object type associated with the subscription. |
| `portalId` | The unique identifier for the portal associated with the subscription. |
| `properties` | A list of property names associated with the subscription. |
| `subscriptionType` | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `updatedAt` | The date and time when the subscription was last updated, in ISO 8601 format. |

Operations: List.

API path: `/webhooks-journal/subscriptions/2026-09`

#### WebhooksCrmObjectSnapshotBatch

| Field | Description |
| --- | --- |
| `snapshotRequests` | An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object. |
| `snapshotResponses` | An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object. |

Operations: Create.

API path: `/webhooks-journal/snapshots/2026-09/crm`

#### WebhooksFilter

| Field | Description |
| --- | --- |
| `conditions` | An array of conditions that define the criteria for the filter. |
| `createdAt` | A Unix timestamp in milliseconds indicating when the filter was created. |
| `filter` | Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. |
| `filterId` | The unique identifier for the created filter. |
| `id` | The unique identifier for the filter. |
| `subscriptionId` | The unique identifier of the subscription to which the filter will be applied. |

Operations: Create, Load.

API path: `/webhooks-journal/subscriptions/2026-09/filters`

#### WebhooksSetting

| Field | Description |
| --- | --- |
| `maxConcurrentRequests` | The maximum number of concurrent requests allowed. |
| `targetUrl` | The URL to which webhook events will be sent. |
| `throttling` |  |

Operations: Load, Update.

API path: `/app-webhooks/2026-09/{appId}/settings`

#### WebhooksSnapshotStatus

| Field | Description |
| --- | --- |
| `completedAt` | The timestamp indicating when the snapshot operation was completed, represented as a Unix timestamp in milliseconds. |
| `errorCode` | A code representing the error that occurred, if any. |
| `id` | The unique identifier for the snapshot operation, represented as a UUID. |
| `initiatedAt` | The timestamp indicating when the snapshot operation was initiated, represented as a Unix timestamp in milliseconds. |
| `message` | A descriptive message providing additional information about the snapshot operation or error. |
| `status` | The current status of the snapshot. |

Operations: Load.

API path: `/webhooks-journal/journal-local/2026-09/status/{statusId}`

#### WebhooksSubscription

| Field | Description |
| --- | --- |
| `active` | A boolean indicating whether the subscription is currently active. |
| `createdAt` | The date and time when the subscription was created, in ISO 8601 format. |
| `eventType` | The type of event that triggers the subscription. |
| `eventTypeName` | The name of the event type for the subscription. |
| `id` | The unique identifier for the subscription. |
| `objectTypeId` | The identifier for the object type associated with the subscription. |
| `propertyName` | The name of the property associated with the subscription event, if applicable. |
| `updatedAt` | The date and time when the subscription was last updated, in ISO 8601 format. |

Operations: Create, Load, Update.

API path: `/app-webhooks/2026-09/{appId}/subscriptions`

#### WebhooksSubscriptionList

| Field | Description |
| --- | --- |
| `active` | A boolean indicating whether the subscription is currently active. |
| `createdAt` | The date and time when the subscription was created, in ISO 8601 format. |
| `eventType` | The type of event that triggers the subscription. |
| `eventTypeName` | The name of the event type for the subscription. |
| `id` | The unique identifier for the subscription. |
| `objectTypeId` | The identifier for the object type associated with the subscription. |
| `propertyName` | The name of the property associated with the subscription event, if applicable. |
| `updatedAt` | The date and time when the subscription was last updated, in ISO 8601 format. |

Operations: List.

API path: `/app-webhooks/2026-09/{appId}/subscriptions`

#### WebhooksSubscriptionResponse1

| Field | Description |
| --- | --- |
| `actionOverrides` | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `actions` | A list of actions that trigger the subscription. |
| `appId` | The unique identifier for the app associated with the subscription. |
| `associatedObjectTypeIds` | A list of associated object type IDs. |
| `createdAt` | The date and time when the subscription was created, in ISO 8601 format. |
| `createdBy` | The ID of the user who created the subscription. |
| `deletedAt` | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `id` | The unique identifier for the subscription. |
| `listIds` | A list of list IDs associated with the subscription. |
| `objectIds` | A list of object IDs associated with the subscription. |
| `objectTypeId` | The identifier for the object type associated with the subscription. |
| `portalId` | The unique identifier for the portal associated with the subscription. |
| `properties` | A list of property names associated with the subscription. |
| `subscriptionType` | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `updatedAt` | The date and time when the subscription was last updated, in ISO 8601 format. |

Operations: Create, Load.

API path: `/webhooks-journal/subscriptions/2026-09`



## Entities


### Basic

Create an instance: `local basic = client:Basic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```lua
local basic, err = client:Basic():load()
```


### WebhooksBatchResponseJournalFetch

Create an instance: `local webhooks_batch_response_journal_fetch = client:WebhooksBatchResponseJournalFetch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `table` | An array of strings to be processed. |
| `links` | `table` | A map of link names to associated URIs related to the batch operation. |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `table` | An array of results from the batch operation, each represented as a JournalFetchResponse object. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Load

```lua
local webhooks_batch_response_journal_fetch, err = client:WebhooksBatchResponseJournalFetch():load({ count = 1 })
```

#### Example: Create

```lua
local webhooks_batch_response_journal_fetch, err = client:WebhooksBatchResponseJournalFetch():create({
  completedAt = "example_completedAt", -- string
  inputs = {}, -- table
  results = {}, -- table
  startedAt = "example_startedAt", -- string
  status = "example_status", -- string
})
```


### WebhooksBatchResponseSubscription

Create an instance: `local webhooks_batch_response_subscription = client:WebhooksBatchResponseSubscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `table` | An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated. |
| `links` | `table` | A map of link names to associated URIs providing additional information about the batch operation. |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `table` | An array containing the results of the batch operation, with each item representing an individual subscription response. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Create

```lua
local webhooks_batch_response_subscription, err = client:WebhooksBatchResponseSubscription():create({
  app_id = 1, -- number
  completedAt = "example_completedAt", -- string
  inputs = {}, -- table
  results = {}, -- table
  startedAt = "example_startedAt", -- string
  status = "example_status", -- string
})
```


### WebhooksCollectionResponseSubscriptionResponseNoPaging

Create an instance: `local webhooks_collection_response_subscription_response_no_paging = client:WebhooksCollectionResponseSubscriptionResponseNoPaging(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actionOverrides` | `table` | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `actions` | `table` | A list of actions that trigger the subscription. |
| `appId` | `number` | The unique identifier for the app associated with the subscription. |
| `associatedObjectTypeIds` | `table` | A list of associated object type IDs. |
| `createdAt` | `string` | The date and time when the subscription was created, in ISO 8601 format. |
| `createdBy` | `number` | The ID of the user who created the subscription. |
| `deletedAt` | `string` | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `id` | `number` | The unique identifier for the subscription. |
| `listIds` | `table` | A list of list IDs associated with the subscription. |
| `objectIds` | `table` | A list of object IDs associated with the subscription. |
| `objectTypeId` | `string` | The identifier for the object type associated with the subscription. |
| `portalId` | `number` | The unique identifier for the portal associated with the subscription. |
| `properties` | `table` | A list of property names associated with the subscription. |
| `subscriptionType` | `string` | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `updatedAt` | `string` | The date and time when the subscription was last updated, in ISO 8601 format. |

#### Example: List

```lua
local webhooks_collection_response_subscription_response_no_pagings, err = client:WebhooksCollectionResponseSubscriptionResponseNoPaging():list()
```


### WebhooksCrmObjectSnapshotBatch

Create an instance: `local webhooks_crm_object_snapshot_batch = client:WebhooksCrmObjectSnapshotBatch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `snapshotRequests` | `table` | An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object. |
| `snapshotResponses` | `table` | An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object. |

#### Example: Create

```lua
local webhooks_crm_object_snapshot_batch, err = client:WebhooksCrmObjectSnapshotBatch():create({
  snapshotRequests = {}, -- table
  snapshotResponses = {}, -- table
})
```


### WebhooksFilter

Create an instance: `local webhooks_filter = client:WebhooksFilter(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conditions` | `table` | An array of conditions that define the criteria for the filter. |
| `createdAt` | `number` | A Unix timestamp in milliseconds indicating when the filter was created. |
| `filter` | `table` | Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. |
| `filterId` | `number` | The unique identifier for the created filter. |
| `id` | `number` | The unique identifier for the filter. |
| `subscriptionId` | `number` | The unique identifier of the subscription to which the filter will be applied. |

#### Example: Load

```lua
local webhooks_filter, err = client:WebhooksFilter():load({ id = 1 })
```

#### Example: Create

```lua
local webhooks_filter, err = client:WebhooksFilter():create({
  conditions = {}, -- table
  createdAt = 1, -- number
  filter = {}, -- table
  filterId = 1, -- number
  id = 1, -- number
  subscriptionId = 1, -- number
})
```


### WebhooksSetting

Create an instance: `local webhooks_setting = client:WebhooksSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `maxConcurrentRequests` | `number` | The maximum number of concurrent requests allowed. |
| `targetUrl` | `string` | The URL to which webhook events will be sent. |
| `throttling` | `table` |  |

#### Example: Load

```lua
local webhooks_setting, err = client:WebhooksSetting():load({ app_id = 1 })
```


### WebhooksSnapshotStatus

Create an instance: `local webhooks_snapshot_status = client:WebhooksSnapshotStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `number` | The timestamp indicating when the snapshot operation was completed, represented as a Unix timestamp in milliseconds. |
| `errorCode` | `string` | A code representing the error that occurred, if any. |
| `id` | `string` | The unique identifier for the snapshot operation, represented as a UUID. |
| `initiatedAt` | `number` | The timestamp indicating when the snapshot operation was initiated, represented as a Unix timestamp in milliseconds. |
| `message` | `string` | A descriptive message providing additional information about the snapshot operation or error. |
| `status` | `string` | The current status of the snapshot. |

#### Example: Load

```lua
local webhooks_snapshot_status, err = client:WebhooksSnapshotStatus():load({ id = "webhooks_snapshot_status_id" })
```


### WebhooksSubscription

Create an instance: `local webhooks_subscription = client:WebhooksSubscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | A boolean indicating whether the subscription is currently active. |
| `createdAt` | `string` | The date and time when the subscription was created, in ISO 8601 format. |
| `eventType` | `string` | The type of event that triggers the subscription. |
| `eventTypeName` | `string` | The name of the event type for the subscription. |
| `id` | `string` | The unique identifier for the subscription. |
| `objectTypeId` | `string` | The identifier for the object type associated with the subscription. |
| `propertyName` | `string` | The name of the property associated with the subscription event, if applicable. |
| `updatedAt` | `string` | The date and time when the subscription was last updated, in ISO 8601 format. |

#### Example: Load

```lua
local webhooks_subscription, err = client:WebhooksSubscription():load({ id = 1, app_id = 1 })
```

#### Example: Create

```lua
local webhooks_subscription, err = client:WebhooksSubscription():create({
  app_id = 1, -- number
  active = true, -- boolean
  createdAt = "example_createdAt", -- string
  eventType = "example_eventType", -- string
  id = "example_id", -- string
})
```


### WebhooksSubscriptionList

Create an instance: `local webhooks_subscription_list = client:WebhooksSubscriptionList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | A boolean indicating whether the subscription is currently active. |
| `createdAt` | `string` | The date and time when the subscription was created, in ISO 8601 format. |
| `eventType` | `string` | The type of event that triggers the subscription. |
| `eventTypeName` | `string` | The name of the event type for the subscription. |
| `id` | `string` | The unique identifier for the subscription. |
| `objectTypeId` | `string` | The identifier for the object type associated with the subscription. |
| `propertyName` | `string` | The name of the property associated with the subscription event, if applicable. |
| `updatedAt` | `string` | The date and time when the subscription was last updated, in ISO 8601 format. |

#### Example: List

```lua
local webhooks_subscription_lists, err = client:WebhooksSubscriptionList():list()
```


### WebhooksSubscriptionResponse1

Create an instance: `local webhooks_subscription_response_1 = client:WebhooksSubscriptionResponse1(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actionOverrides` | `table` | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `actions` | `table` | A list of actions that trigger the subscription. |
| `appId` | `number` | The unique identifier for the app associated with the subscription. |
| `associatedObjectTypeIds` | `table` | A list of associated object type IDs. |
| `createdAt` | `string` | The date and time when the subscription was created, in ISO 8601 format. |
| `createdBy` | `number` | The ID of the user who created the subscription. |
| `deletedAt` | `string` | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `id` | `number` | The unique identifier for the subscription. |
| `listIds` | `table` | A list of list IDs associated with the subscription. |
| `objectIds` | `table` | A list of object IDs associated with the subscription. |
| `objectTypeId` | `string` | The identifier for the object type associated with the subscription. |
| `portalId` | `number` | The unique identifier for the portal associated with the subscription. |
| `properties` | `table` | A list of property names associated with the subscription. |
| `subscriptionType` | `string` | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `updatedAt` | `string` | The date and time when the subscription was last updated, in ISO 8601 format. |

#### Example: Load

```lua
local webhooks_subscription_response_1, err = client:WebhooksSubscriptionResponse1():load({ subscription_id = 1 })
```

#### Example: Create

```lua
local webhooks_subscription_response_1, err = client:WebhooksSubscriptionResponse1():create({
  actions = {}, -- table
  appId = 1, -- number
  createdAt = "example_createdAt", -- string
  id = 1, -- number
  objectTypeId = "example_objectTypeId", -- string
  subscriptionType = "example_subscriptionType", -- string
  updatedAt = "example_updatedAt", -- string
})
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Request/response capture ring buffer for debugging |
| [`idempotency`](#idempotency) | Idempotency keys for safe retries of mutating operations |
| [`metrics`](#metrics) | Statistics capture: per-operation counters and latency |
| [`paging`](#paging) | Pagination signals for list operations |
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Request/response capture ring buffer for debugging.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency keys for safe retries of mutating operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Statistics capture: per-operation counters and latency.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Pagination signals for list operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Request/response capture ring buffer for debugging
- **IdempotencyFeature**: Idempotency keys for safe retries of mutating operations
- **MetricsFeature**: Statistics capture: per-operation counters and latency
- **PagingFeature**: Pagination signals for list operations
- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── hubspot-webhooks_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`hubspot-webhooks_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local webhookssnapshotstatus = client:WebhooksSnapshotStatus()
webhookssnapshotstatus:load({ id = "example_id" })

-- webhookssnapshotstatus:data_get() now returns the webhookssnapshotstatus data from the last load
-- webhookssnapshotstatus:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
