# HubspotWebhooks Lua SDK Reference

Complete API reference for the HubspotWebhooks Lua SDK.


## HubspotWebhooksSDK

### Constructor

```lua
local sdk = require("hubspot-webhooks_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Basic(data)`

Create a new `Basic` entity instance. Pass `nil` for no initial data.

#### `WebhooksBatchResponseJournalFetch(data)`

Create a new `WebhooksBatchResponseJournalFetch` entity instance. Pass `nil` for no initial data.

#### `WebhooksBatchResponseSubscription(data)`

Create a new `WebhooksBatchResponseSubscription` entity instance. Pass `nil` for no initial data.

#### `WebhooksCollectionResponseSubscriptionResponseNoPaging(data)`

Create a new `WebhooksCollectionResponseSubscriptionResponseNoPaging` entity instance. Pass `nil` for no initial data.

#### `WebhooksCrmObjectSnapshotBatch(data)`

Create a new `WebhooksCrmObjectSnapshotBatch` entity instance. Pass `nil` for no initial data.

#### `WebhooksFilter(data)`

Create a new `WebhooksFilter` entity instance. Pass `nil` for no initial data.

#### `WebhooksSetting(data)`

Create a new `WebhooksSetting` entity instance. Pass `nil` for no initial data.

#### `WebhooksSnapshotStatus(data)`

Create a new `WebhooksSnapshotStatus` entity instance. Pass `nil` for no initial data.

#### `WebhooksSubscription(data)`

Create a new `WebhooksSubscription` entity instance. Pass `nil` for no initial data.

#### `WebhooksSubscriptionList(data)`

Create a new `WebhooksSubscriptionList` entity instance. Pass `nil` for no initial data.

#### `WebhooksSubscriptionResponse1(data)`

Create a new `WebhooksSubscriptionResponse1` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## BasicEntity

```lua
local basic = client:Basic(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Basic():load()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Basic():remove({ subscription_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BasicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhooksBatchResponseJournalFetchEntity

```lua
local webhooks_batch_response_journal_fetch = client:WebhooksBatchResponseJournalFetch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `table` | Yes | An array of strings to be processed. |
| `links` | `table` | No | A map of link names to associated URIs related to the batch operation. |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `table` | Yes | An array of results from the batch operation, each represented as a JournalFetchResponse object. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WebhooksBatchResponseJournalFetch():create({
  completedAt = --[[ string ]],
  inputs = --[[ table ]],
  results = --[[ table ]],
  startedAt = --[[ string ]],
  status = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WebhooksBatchResponseJournalFetch():load({ count = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhooksBatchResponseJournalFetchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhooksBatchResponseSubscriptionEntity

```lua
local webhooks_batch_response_subscription = client:WebhooksBatchResponseSubscription(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `table` | Yes | An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated. |
| `links` | `table` | No | A map of link names to associated URIs providing additional information about the batch operation. |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `table` | Yes | An array containing the results of the batch operation, with each item representing an individual subscription response. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WebhooksBatchResponseSubscription():create({
  ["2026_09_id"] = --[[ number ]],
  completedAt = --[[ string ]],
  inputs = --[[ table ]],
  results = --[[ table ]],
  startedAt = --[[ string ]],
  status = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhooksBatchResponseSubscriptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhooksCollectionResponseSubscriptionResponseNoPagingEntity

```lua
local webhooks_collection_response_subscription_response_no_paging = client:WebhooksCollectionResponseSubscriptionResponseNoPaging(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionOverrides` | `table` | No | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `actions` | `table` | Yes | A list of actions that trigger the subscription. |
| `appId` | `number` | Yes | The unique identifier for the app associated with the subscription. |
| `associatedObjectTypeIds` | `table` | No | A list of associated object type IDs. |
| `createdAt` | `string` | Yes | The date and time when the subscription was created, in ISO 8601 format. |
| `createdBy` | `number` | No | The ID of the user who created the subscription. |
| `deletedAt` | `string` | No | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `id` | `number` | Yes | The unique identifier for the subscription. |
| `listIds` | `table` | No | A list of list IDs associated with the subscription. |
| `objectIds` | `table` | No | A list of object IDs associated with the subscription. |
| `objectTypeId` | `string` | Yes | The identifier for the object type associated with the subscription. |
| `portalId` | `number` | No | The unique identifier for the portal associated with the subscription. |
| `properties` | `table` | No | A list of property names associated with the subscription. |
| `subscriptionType` | `string` | Yes | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `updatedAt` | `string` | Yes | The date and time when the subscription was last updated, in ISO 8601 format. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WebhooksCollectionResponseSubscriptionResponseNoPaging():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhooksCollectionResponseSubscriptionResponseNoPagingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhooksCrmObjectSnapshotBatchEntity

```lua
local webhooks_crm_object_snapshot_batch = client:WebhooksCrmObjectSnapshotBatch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `snapshotRequests` | `table` | Yes | An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object. |
| `snapshotResponses` | `table` | Yes | An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WebhooksCrmObjectSnapshotBatch():create({
  snapshotRequests = --[[ table ]],
  snapshotResponses = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhooksCrmObjectSnapshotBatchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhooksFilterEntity

```lua
local webhooks_filter = client:WebhooksFilter(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conditions` | `table` | Yes | An array of conditions that define the criteria for the filter. |
| `createdAt` | `number` | Yes | A Unix timestamp in milliseconds indicating when the filter was created. |
| `filter` | `table` | Yes | Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. |
| `filterId` | `number` | Yes | The unique identifier for the created filter. |
| `id` | `number` | Yes | The unique identifier for the filter. |
| `subscriptionId` | `number` | Yes | The unique identifier of the subscription to which the filter will be applied. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WebhooksFilter():create({
  conditions = --[[ table ]],
  createdAt = --[[ number ]],
  filter = --[[ table ]],
  filterId = --[[ number ]],
  id = --[[ number ]],
  subscriptionId = --[[ number ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WebhooksFilter():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhooksFilterEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhooksSettingEntity

```lua
local webhooks_setting = client:WebhooksSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `maxConcurrentRequests` | `number` | Yes | The maximum number of concurrent requests allowed. |
| `targetUrl` | `string` | Yes | The URL to which webhook events will be sent. |
| `throttling` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WebhooksSetting():load({ ["2026_09_id"] = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:WebhooksSetting():update({
  ["2026_09_id"] = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhooksSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhooksSnapshotStatusEntity

```lua
local webhooks_snapshot_status = client:WebhooksSnapshotStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `number` | No | The timestamp indicating when the snapshot operation was completed, represented as a Unix timestamp in milliseconds. |
| `errorCode` | `string` | No | A code representing the error that occurred, if any. |
| `id` | `string` | Yes | The unique identifier for the snapshot operation, represented as a UUID. |
| `initiatedAt` | `number` | Yes | The timestamp indicating when the snapshot operation was initiated, represented as a Unix timestamp in milliseconds. |
| `message` | `string` | No | A descriptive message providing additional information about the snapshot operation or error. |
| `status` | `string` | Yes | The current status of the snapshot. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WebhooksSnapshotStatus():load({ id = "webhooks_snapshot_status_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhooksSnapshotStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhooksSubscriptionEntity

```lua
local webhooks_subscription = client:WebhooksSubscription(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | A boolean indicating whether the subscription is currently active. |
| `createdAt` | `string` | Yes | The date and time when the subscription was created, in ISO 8601 format. |
| `eventType` | `string` | Yes | The type of event that triggers the subscription. |
| `eventTypeName` | `string` | No | The name of the event type for the subscription. |
| `id` | `string` | Yes | The unique identifier for the subscription. |
| `objectTypeId` | `string` | No | The identifier for the object type associated with the subscription. |
| `propertyName` | `string` | No | The name of the property associated with the subscription event, if applicable. |
| `updatedAt` | `string` | No | The date and time when the subscription was last updated, in ISO 8601 format. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `active` | - | - | Yes |
| `createdAt` | - | - | - |
| `eventType` | - | - | - |
| `eventTypeName` | - | - | - |
| `id` | - | - | - |
| `objectTypeId` | - | - | - |
| `propertyName` | - | - | - |
| `updatedAt` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WebhooksSubscription():create({
  ["2026_09_id"] = --[[ number ]],
  active = --[[ boolean ]],
  createdAt = --[[ string ]],
  eventType = --[[ string ]],
  id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WebhooksSubscription():load({ id = 1, ["2026_09_id"] = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:WebhooksSubscription():update({
  id = 1,
  ["2026_09_id"] = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhooksSubscriptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhooksSubscriptionListEntity

```lua
local webhooks_subscription_list = client:WebhooksSubscriptionList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | A boolean indicating whether the subscription is currently active. |
| `createdAt` | `string` | Yes | The date and time when the subscription was created, in ISO 8601 format. |
| `eventType` | `string` | Yes | The type of event that triggers the subscription. |
| `eventTypeName` | `string` | No | The name of the event type for the subscription. |
| `id` | `string` | Yes | The unique identifier for the subscription. |
| `objectTypeId` | `string` | No | The identifier for the object type associated with the subscription. |
| `propertyName` | `string` | No | The name of the property associated with the subscription event, if applicable. |
| `updatedAt` | `string` | No | The date and time when the subscription was last updated, in ISO 8601 format. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WebhooksSubscriptionList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhooksSubscriptionListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhooksSubscriptionResponse1Entity

```lua
local webhooks_subscription_response_1 = client:WebhooksSubscriptionResponse1(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionOverrides` | `table` | No | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `actions` | `table` | Yes | A list of actions that trigger the subscription. |
| `appId` | `number` | Yes | The unique identifier for the app associated with the subscription. |
| `associatedObjectTypeIds` | `table` | No | A list of associated object type IDs. |
| `createdAt` | `string` | Yes | The date and time when the subscription was created, in ISO 8601 format. |
| `createdBy` | `number` | No | The ID of the user who created the subscription. |
| `deletedAt` | `string` | No | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `id` | `number` | Yes | The unique identifier for the subscription. |
| `listIds` | `table` | No | A list of list IDs associated with the subscription. |
| `objectIds` | `table` | No | A list of object IDs associated with the subscription. |
| `objectTypeId` | `string` | Yes | The identifier for the object type associated with the subscription. |
| `portalId` | `number` | No | The unique identifier for the portal associated with the subscription. |
| `properties` | `table` | No | A list of property names associated with the subscription. |
| `subscriptionType` | `string` | Yes | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `updatedAt` | `string` | Yes | The date and time when the subscription was last updated, in ISO 8601 format. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WebhooksSubscriptionResponse1():create({
  actions = --[[ table ]],
  appId = --[[ number ]],
  createdAt = --[[ string ]],
  id = --[[ number ]],
  objectTypeId = --[[ string ]],
  subscriptionType = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WebhooksSubscriptionResponse1():load({ subscription_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhooksSubscriptionResponse1Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Request/response capture ring buffer for debugging |
| `idempotency` | 0.0.1 | Idempotency keys for safe retries of mutating operations |
| `metrics` | 0.0.1 | Statistics capture: per-operation counters and latency |
| `paging` | 0.0.1 | Pagination signals for list operations |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Request/response capture ring buffer for debugging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency keys for safe retries of mutating operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Statistics capture: per-operation counters and latency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Pagination signals for list operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

