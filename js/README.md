# HubspotWebhooks JavaScript SDK



The JavaScript SDK for the HubspotWebhooks API — an entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Basic()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```js
npm install hubspot-webhooks
```
## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.


### Create a Client

```js
const { HubspotWebhooksSDK } = require('@voxgig-sdk/hubspot-webhooks-js')

const client = new HubspotWebhooksSDK({
  apikey: process.env.HUBSPOT_WEBHOOKS_APIKEY,
})
```

### Load a Basic

```js
const basic = await client.Basic().load()
console.log(basic)
```

### Remove a Basic

```js
await client.Basic().remove({ subscription_id: 1 })
```

### Direct API Access

Use `client.direct()` to call any API endpoint directly:

```js
const result = await client.direct({
  path: '/custom/endpoint/{id}',
  method: 'GET',
  params: { id: 'abc123' },
})

if (result.ok) {
  console.log(result.data)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const webhookssnapshotstatus = await client.WebhooksSnapshotStatus().load({ id: "example_id" })
  console.log(webhookssnapshotstatus)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```js
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```js
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```js
const client = HubspotWebhooksSDK.test()

const webhookssnapshotstatus = await client.WebhooksSnapshotStatus().load({ id: 'test01' })
// webhookssnapshotstatus is the entity, populated with mock response data
// — call webhookssnapshotstatus.data() for the record itself
console.log(webhookssnapshotstatus)
```

You can also use the instance method:

```js
const client = new HubspotWebhooksSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```js
const entity = client.WebhooksSnapshotStatus()

// First call runs the operation and stores its result
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```js
const logger = {
  hooks: {
    PreRequest: (ctx) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new HubspotWebhooksSDK({
  apikey: '...',
  extend: [logger],
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
cd js && npm test
```


## Reference

### HubspotWebhooksSDK

#### Constructor

```js
new HubspotWebhooksSDK(options?)
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Basic(data?)` | `BasicEntity` | Create a Basic entity instance. |
| `WebhooksBatchResponseJournalFetch(data?)` | `WebhooksBatchResponseJournalFetchEntity` | Create a WebhooksBatchResponseJournalFetch entity instance. |
| `WebhooksBatchResponseSubscription(data?)` | `WebhooksBatchResponseSubscriptionEntity` | Create a WebhooksBatchResponseSubscription entity instance. |
| `WebhooksCollectionResponseSubscriptionResponseNoPaging(data?)` | `WebhooksCollectionResponseSubscriptionResponseNoPagingEntity` | Create a WebhooksCollectionResponseSubscriptionResponseNoPaging entity instance. |
| `WebhooksCrmObjectSnapshotBatch(data?)` | `WebhooksCrmObjectSnapshotBatchEntity` | Create a WebhooksCrmObjectSnapshotBatch entity instance. |
| `WebhooksFilter(data?)` | `WebhooksFilterEntity` | Create a WebhooksFilter entity instance. |
| `WebhooksSetting(data?)` | `WebhooksSettingEntity` | Create a WebhooksSetting entity instance. |
| `WebhooksSnapshotStatus(data?)` | `WebhooksSnapshotStatusEntity` | Create a WebhooksSnapshotStatus entity instance. |
| `WebhooksSubscription(data?)` | `WebhooksSubscriptionEntity` | Create a WebhooksSubscription entity instance. |
| `WebhooksSubscriptionList(data?)` | `WebhooksSubscriptionListEntity` | Create a WebhooksSubscriptionList entity instance. |
| `WebhooksSubscriptionResponse1(data?)` | `WebhooksSubscriptionResponse1Entity` | Create a WebhooksSubscriptionResponse1 entity instance. |
| `tester(testopts?, sdkopts?)` | `HubspotWebhooksSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `HubspotWebhooksSDK.test(testopts?, sdkopts?)` | `HubspotWebhooksSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): HubspotWebhooksSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `undefined`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```js
{
  ok: true,
  status: 200,
  headers: {},
  data: {}
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```js
{
  url: 'string',
  method: 'string',
  headers: {},
  body: undefined
}
```

### Entities

#### Basic

| Field | Description |
| --- | --- |

Operations: load, remove.

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

Operations: create, load.

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

Operations: create.

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

Operations: list.

API path: `/webhooks-journal/subscriptions/2026-09`

#### WebhooksCrmObjectSnapshotBatch

| Field | Description |
| --- | --- |
| `snapshotRequests` | An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object. |
| `snapshotResponses` | An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object. |

Operations: create.

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

Operations: create, load.

API path: `/webhooks-journal/subscriptions/2026-09/filters`

#### WebhooksSetting

| Field | Description |
| --- | --- |
| `maxConcurrentRequests` | The maximum number of concurrent requests allowed. |
| `targetUrl` | The URL to which webhook events will be sent. |
| `throttling` |  |

Operations: load, update.

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

Operations: load.

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

Operations: create, load, update.

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

Operations: list.

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

Operations: create, load.

API path: `/webhooks-journal/subscriptions/2026-09`



## Entities


### Basic

Create an instance: `const basic = client.Basic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```ts
const basic = await client.Basic().load()
```


### WebhooksBatchResponseJournalFetch

Create an instance: `const webhooks_batch_response_journal_fetch = client.WebhooksBatchResponseJournalFetch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `Array` | An array of strings to be processed. |
| `links` | `Object` | A map of link names to associated URIs related to the batch operation. |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `Array` | An array of results from the batch operation, each represented as a JournalFetchResponse object. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Load

```ts
const webhooks_batch_response_journal_fetch = await client.WebhooksBatchResponseJournalFetch().load({ count: 1 })
```

#### Example: Create

```ts
const webhooks_batch_response_journal_fetch = await client.WebhooksBatchResponseJournalFetch().create({
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```


### WebhooksBatchResponseSubscription

Create an instance: `const webhooks_batch_response_subscription = client.WebhooksBatchResponseSubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `Array` | An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated. |
| `links` | `Object` | A map of link names to associated URIs providing additional information about the batch operation. |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `Array` | An array containing the results of the batch operation, with each item representing an individual subscription response. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Create

```ts
const webhooks_batch_response_subscription = await client.WebhooksBatchResponseSubscription().create({
  '2026_09_id': 1,
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```


### WebhooksCollectionResponseSubscriptionResponseNoPaging

Create an instance: `const webhooks_collection_response_subscription_response_no_paging = client.WebhooksCollectionResponseSubscriptionResponseNoPaging()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actionOverrides` | `Object` | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `actions` | `Array` | A list of actions that trigger the subscription. |
| `appId` | `number` | The unique identifier for the app associated with the subscription. |
| `associatedObjectTypeIds` | `Array` | A list of associated object type IDs. |
| `createdAt` | `string` | The date and time when the subscription was created, in ISO 8601 format. |
| `createdBy` | `number` | The ID of the user who created the subscription. |
| `deletedAt` | `string` | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `id` | `number` | The unique identifier for the subscription. |
| `listIds` | `Array` | A list of list IDs associated with the subscription. |
| `objectIds` | `Array` | A list of object IDs associated with the subscription. |
| `objectTypeId` | `string` | The identifier for the object type associated with the subscription. |
| `portalId` | `number` | The unique identifier for the portal associated with the subscription. |
| `properties` | `Array` | A list of property names associated with the subscription. |
| `subscriptionType` | `string` | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `updatedAt` | `string` | The date and time when the subscription was last updated, in ISO 8601 format. |

#### Example: List

```ts
const webhooks_collection_response_subscription_response_no_pagings = await client.WebhooksCollectionResponseSubscriptionResponseNoPaging().list()
```


### WebhooksCrmObjectSnapshotBatch

Create an instance: `const webhooks_crm_object_snapshot_batch = client.WebhooksCrmObjectSnapshotBatch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `snapshotRequests` | `Array` | An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object. |
| `snapshotResponses` | `Array` | An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object. |

#### Example: Create

```ts
const webhooks_crm_object_snapshot_batch = await client.WebhooksCrmObjectSnapshotBatch().create({
  snapshotRequests: [],
  snapshotResponses: [],
})
```


### WebhooksFilter

Create an instance: `const webhooks_filter = client.WebhooksFilter()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conditions` | `Array` | An array of conditions that define the criteria for the filter. |
| `createdAt` | `number` | A Unix timestamp in milliseconds indicating when the filter was created. |
| `filter` | `Object` | Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. |
| `filterId` | `number` | The unique identifier for the created filter. |
| `id` | `number` | The unique identifier for the filter. |
| `subscriptionId` | `number` | The unique identifier of the subscription to which the filter will be applied. |

#### Example: Load

```ts
const webhooks_filter = await client.WebhooksFilter().load({ id: 1 })
```

#### Example: Create

```ts
const webhooks_filter = await client.WebhooksFilter().create({
  conditions: [],
  createdAt: 1,
  filter: {},
  filterId: 1,
  id: 1,
  subscriptionId: 1,
})
```


### WebhooksSetting

Create an instance: `const webhooks_setting = client.WebhooksSetting()`

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
| `throttling` | `Object` |  |

#### Example: Load

```ts
const webhooks_setting = await client.WebhooksSetting().load({ '2026_09_id': 1 })
```


### WebhooksSnapshotStatus

Create an instance: `const webhooks_snapshot_status = client.WebhooksSnapshotStatus()`

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

```ts
const webhooks_snapshot_status = await client.WebhooksSnapshotStatus().load({ id: 'webhooks_snapshot_status_id' })
```


### WebhooksSubscription

Create an instance: `const webhooks_subscription = client.WebhooksSubscription()`

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

```ts
const webhooks_subscription = await client.WebhooksSubscription().load({ id: 1, '2026_09_id': 1 })
```

#### Example: Create

```ts
const webhooks_subscription = await client.WebhooksSubscription().create({
  '2026_09_id': 1,
  active: true,
  createdAt: 'example_createdAt',
  eventType: 'example_eventType',
  id: 'example_id',
})
```


### WebhooksSubscriptionList

Create an instance: `const webhooks_subscription_list = client.WebhooksSubscriptionList()`

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

```ts
const webhooks_subscription_lists = await client.WebhooksSubscriptionList().list({ '2026_09_id': 1 })
```


### WebhooksSubscriptionResponse1

Create an instance: `const webhooks_subscription_response_1 = client.WebhooksSubscriptionResponse1()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actionOverrides` | `Object` | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `actions` | `Array` | A list of actions that trigger the subscription. |
| `appId` | `number` | The unique identifier for the app associated with the subscription. |
| `associatedObjectTypeIds` | `Array` | A list of associated object type IDs. |
| `createdAt` | `string` | The date and time when the subscription was created, in ISO 8601 format. |
| `createdBy` | `number` | The ID of the user who created the subscription. |
| `deletedAt` | `string` | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `id` | `number` | The unique identifier for the subscription. |
| `listIds` | `Array` | A list of list IDs associated with the subscription. |
| `objectIds` | `Array` | A list of object IDs associated with the subscription. |
| `objectTypeId` | `string` | The identifier for the object type associated with the subscription. |
| `portalId` | `number` | The unique identifier for the portal associated with the subscription. |
| `properties` | `Array` | A list of property names associated with the subscription. |
| `subscriptionType` | `string` | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `updatedAt` | `string` | The date and time when the subscription was last updated, in ISO 8601 format. |

#### Example: Load

```ts
const webhooks_subscription_response_1 = await client.WebhooksSubscriptionResponse1().load({ subscription_id: 1 })
```

#### Example: Create

```ts
const webhooks_subscription_response_1 = await client.WebhooksSubscriptionResponse1().create({
  actions: [],
  appId: 1,
  createdAt: 'example_createdAt',
  id: 1,
  objectTypeId: 'example_objectTypeId',
  subscriptionType: 'example_subscriptionType',
  updatedAt: 'example_updatedAt',
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

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

### Module structure

```
hubspot-webhooks/
├── src/
│   ├── HubspotWebhooksSDK.js        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
└── test/                   # Test suites
```

Import the SDK from the package root:

```js
const { HubspotWebhooksSDK } = require('@voxgig-sdk/hubspot-webhooks-js')
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const webhookssnapshotstatus = client.WebhooksSnapshotStatus()
await webhookssnapshotstatus.load({ id: "example_id" })

// webhookssnapshotstatus.data() now returns the webhookssnapshotstatus data from the last `load`
// webhookssnapshotstatus.match() returns { id: "example_id" }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
