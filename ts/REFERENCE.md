# HubspotWebhooks TypeScript SDK Reference

Complete API reference for the HubspotWebhooks TypeScript SDK.


## HubspotWebhooksSDK

### Constructor

```ts
new HubspotWebhooksSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HubspotWebhooksSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = HubspotWebhooksSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `HubspotWebhooksSDK` instance in test mode.


### Instance Methods

#### `Basic(data?: object)`

Create a new `Basic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BasicEntity` instance.

#### `WebhooksBatchResponseJournalFetch(data?: object)`

Create a new `WebhooksBatchResponseJournalFetch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhooksBatchResponseJournalFetchEntity` instance.

#### `WebhooksBatchResponseSubscription(data?: object)`

Create a new `WebhooksBatchResponseSubscription` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhooksBatchResponseSubscriptionEntity` instance.

#### `WebhooksCollectionResponseSubscriptionResponseNoPaging(data?: object)`

Create a new `WebhooksCollectionResponseSubscriptionResponseNoPaging` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhooksCollectionResponseSubscriptionResponseNoPagingEntity` instance.

#### `WebhooksCrmObjectSnapshotBatch(data?: object)`

Create a new `WebhooksCrmObjectSnapshotBatch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhooksCrmObjectSnapshotBatchEntity` instance.

#### `WebhooksFilter(data?: object)`

Create a new `WebhooksFilter` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhooksFilterEntity` instance.

#### `WebhooksSetting(data?: object)`

Create a new `WebhooksSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhooksSettingEntity` instance.

#### `WebhooksSnapshotStatus(data?: object)`

Create a new `WebhooksSnapshotStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhooksSnapshotStatusEntity` instance.

#### `WebhooksSubscription(data?: object)`

Create a new `WebhooksSubscription` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhooksSubscriptionEntity` instance.

#### `WebhooksSubscriptionList(data?: object)`

Create a new `WebhooksSubscriptionList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhooksSubscriptionListEntity` instance.

#### `WebhooksSubscriptionResponse1(data?: object)`

Create a new `WebhooksSubscriptionResponse1` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhooksSubscriptionResponse1Entity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `HubspotWebhooksSDK.test()`.

**Returns:** `HubspotWebhooksSDK` instance in test mode.


---

## BasicEntity

```ts
const basic = client.Basic()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Basic().load()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Basic().remove({ subscription_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BasicEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotWebhooksSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhooksBatchResponseJournalFetchEntity

```ts
const webhooks_batch_response_journal_fetch = client.WebhooksBatchResponseJournalFetch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `any[]` | Yes | An array of strings to be processed. |
| `links` | `Record<string, any>` | No | A map of link names to associated URIs related to the batch operation. |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `any[]` | Yes | An array of results from the batch operation, each represented as a JournalFetchResponse object. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WebhooksBatchResponseJournalFetch().create({
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WebhooksBatchResponseJournalFetch().load({ count: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhooksBatchResponseJournalFetchEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotWebhooksSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhooksBatchResponseSubscriptionEntity

```ts
const webhooks_batch_response_subscription = client.WebhooksBatchResponseSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `any[]` | Yes | An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated. |
| `links` | `Record<string, any>` | No | A map of link names to associated URIs providing additional information about the batch operation. |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `any[]` | Yes | An array containing the results of the batch operation, with each item representing an individual subscription response. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WebhooksBatchResponseSubscription().create({
  app_id: 1,
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhooksBatchResponseSubscriptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotWebhooksSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhooksCollectionResponseSubscriptionResponseNoPagingEntity

```ts
const webhooks_collection_response_subscription_response_no_paging = client.WebhooksCollectionResponseSubscriptionResponseNoPaging()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionOverrides` | `Record<string, any>` | No | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `actions` | `any[]` | Yes | A list of actions that trigger the subscription. |
| `appId` | `number` | Yes | The unique identifier for the app associated with the subscription. |
| `associatedObjectTypeIds` | `any[]` | No | A list of associated object type IDs. |
| `createdAt` | `string` | Yes | The date and time when the subscription was created, in ISO 8601 format. |
| `createdBy` | `number` | No | The ID of the user who created the subscription. |
| `deletedAt` | `string` | No | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `id` | `number` | Yes | The unique identifier for the subscription. |
| `listIds` | `any[]` | No | A list of list IDs associated with the subscription. |
| `objectIds` | `any[]` | No | A list of object IDs associated with the subscription. |
| `objectTypeId` | `string` | Yes | The identifier for the object type associated with the subscription. |
| `portalId` | `number` | No | The unique identifier for the portal associated with the subscription. |
| `properties` | `any[]` | No | A list of property names associated with the subscription. |
| `subscriptionType` | `string` | Yes | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `updatedAt` | `string` | Yes | The date and time when the subscription was last updated, in ISO 8601 format. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WebhooksCollectionResponseSubscriptionResponseNoPaging().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhooksCollectionResponseSubscriptionResponseNoPagingEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotWebhooksSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhooksCrmObjectSnapshotBatchEntity

```ts
const webhooks_crm_object_snapshot_batch = client.WebhooksCrmObjectSnapshotBatch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `snapshotRequests` | `any[]` | Yes | An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object. |
| `snapshotResponses` | `any[]` | Yes | An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WebhooksCrmObjectSnapshotBatch().create({
  snapshotRequests: [],
  snapshotResponses: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhooksCrmObjectSnapshotBatchEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotWebhooksSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhooksFilterEntity

```ts
const webhooks_filter = client.WebhooksFilter()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conditions` | `any[]` | Yes | An array of conditions that define the criteria for the filter. |
| `createdAt` | `number` | Yes | A Unix timestamp in milliseconds indicating when the filter was created. |
| `filter` | `Record<string, any>` | Yes | Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. |
| `filterId` | `number` | Yes | The unique identifier for the created filter. |
| `id` | `number` | Yes | The unique identifier for the filter. |
| `subscriptionId` | `number` | Yes | The unique identifier of the subscription to which the filter will be applied. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WebhooksFilter().create({
  conditions: [],
  createdAt: 1,
  filter: {},
  filterId: 1,
  id: 1,
  subscriptionId: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WebhooksFilter().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhooksFilterEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotWebhooksSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhooksSettingEntity

```ts
const webhooks_setting = client.WebhooksSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `maxConcurrentRequests` | `number` | Yes | The maximum number of concurrent requests allowed. |
| `targetUrl` | `string` | Yes | The URL to which webhook events will be sent. |
| `throttling` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WebhooksSetting().load({ app_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.WebhooksSetting().update({
  app_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhooksSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotWebhooksSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhooksSnapshotStatusEntity

```ts
const webhooks_snapshot_status = client.WebhooksSnapshotStatus()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WebhooksSnapshotStatus().load({ id: 'webhooks_snapshot_status_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhooksSnapshotStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotWebhooksSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhooksSubscriptionEntity

```ts
const webhooks_subscription = client.WebhooksSubscription()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WebhooksSubscription().create({
  app_id: 1,
  active: true,
  createdAt: 'example_createdAt',
  eventType: 'example_eventType',
  id: 'example_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WebhooksSubscription().load({ id: 1, app_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.WebhooksSubscription().update({
  id: 1,
  app_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhooksSubscriptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotWebhooksSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhooksSubscriptionListEntity

```ts
const webhooks_subscription_list = client.WebhooksSubscriptionList()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WebhooksSubscriptionList().list({ app_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhooksSubscriptionListEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotWebhooksSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhooksSubscriptionResponse1Entity

```ts
const webhooks_subscription_response_1 = client.WebhooksSubscriptionResponse1()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionOverrides` | `Record<string, any>` | No | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `actions` | `any[]` | Yes | A list of actions that trigger the subscription. |
| `appId` | `number` | Yes | The unique identifier for the app associated with the subscription. |
| `associatedObjectTypeIds` | `any[]` | No | A list of associated object type IDs. |
| `createdAt` | `string` | Yes | The date and time when the subscription was created, in ISO 8601 format. |
| `createdBy` | `number` | No | The ID of the user who created the subscription. |
| `deletedAt` | `string` | No | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `id` | `number` | Yes | The unique identifier for the subscription. |
| `listIds` | `any[]` | No | A list of list IDs associated with the subscription. |
| `objectIds` | `any[]` | No | A list of object IDs associated with the subscription. |
| `objectTypeId` | `string` | Yes | The identifier for the object type associated with the subscription. |
| `portalId` | `number` | No | The unique identifier for the portal associated with the subscription. |
| `properties` | `any[]` | No | A list of property names associated with the subscription. |
| `subscriptionType` | `string` | Yes | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `updatedAt` | `string` | Yes | The date and time when the subscription was last updated, in ISO 8601 format. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WebhooksSubscriptionResponse1().create({
  actions: [],
  appId: 1,
  createdAt: 'example_createdAt',
  id: 1,
  objectTypeId: 'example_objectTypeId',
  subscriptionType: 'example_subscriptionType',
  updatedAt: 'example_updatedAt',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WebhooksSubscriptionResponse1().load({ subscription_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhooksSubscriptionResponse1Entity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotWebhooksSDK` instance.

#### `entopts()`

Return a copy of the entity options.


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

```ts
const client = new HubspotWebhooksSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
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

