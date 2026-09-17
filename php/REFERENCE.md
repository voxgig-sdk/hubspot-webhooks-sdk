# HubspotWebhooks PHP SDK Reference

Complete API reference for the HubspotWebhooks PHP SDK.


## HubspotWebhooksSDK

### Constructor

```php
require_once __DIR__ . '/hubspotwebhooks_sdk.php';

$client = new HubspotWebhooksSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HubspotWebhooksSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = HubspotWebhooksSDK::test();
```


### Instance Methods

#### `Basic($data = null)`

Create a new `BasicEntity` instance. Pass `null` for no initial data.

#### `WebhooksBatchResponseJournalFetch($data = null)`

Create a new `WebhooksBatchResponseJournalFetchEntity` instance. Pass `null` for no initial data.

#### `WebhooksBatchResponseSubscription($data = null)`

Create a new `WebhooksBatchResponseSubscriptionEntity` instance. Pass `null` for no initial data.

#### `WebhooksCollectionResponseSubscriptionResponseNoPaging($data = null)`

Create a new `WebhooksCollectionResponseSubscriptionResponseNoPagingEntity` instance. Pass `null` for no initial data.

#### `WebhooksCrmObjectSnapshotBatch($data = null)`

Create a new `WebhooksCrmObjectSnapshotBatchEntity` instance. Pass `null` for no initial data.

#### `WebhooksFilter($data = null)`

Create a new `WebhooksFilterEntity` instance. Pass `null` for no initial data.

#### `WebhooksSetting($data = null)`

Create a new `WebhooksSettingEntity` instance. Pass `null` for no initial data.

#### `WebhooksSnapshotStatus($data = null)`

Create a new `WebhooksSnapshotStatusEntity` instance. Pass `null` for no initial data.

#### `WebhooksSubscription($data = null)`

Create a new `WebhooksSubscriptionEntity` instance. Pass `null` for no initial data.

#### `WebhooksSubscriptionList($data = null)`

Create a new `WebhooksSubscriptionListEntity` instance. Pass `null` for no initial data.

#### `WebhooksSubscriptionResponse1($data = null)`

Create a new `WebhooksSubscriptionResponse1Entity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): HubspotWebhooksUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## BasicEntity

```php
$basic = $client->Basic();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Basic()->load();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Basic()->remove(["subscription_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BasicEntity`

Create a new `BasicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhooksBatchResponseJournalFetchEntity

```php
$webhooks_batch_response_journal_fetch = $client->WebhooksBatchResponseJournalFetch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `array` | Yes | An array of strings to be processed. |
| `links` | `array` | No | A map of link names to associated URIs related to the batch operation. |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `array` | Yes | An array of results from the batch operation, each represented as a JournalFetchResponse object. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WebhooksBatchResponseJournalFetch()->create([
  "completedAt" => null, // string
  "inputs" => null, // array
  "results" => null, // array
  "startedAt" => null, // string
  "status" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WebhooksBatchResponseJournalFetch()->load(["count" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhooksBatchResponseJournalFetchEntity`

Create a new `WebhooksBatchResponseJournalFetchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhooksBatchResponseSubscriptionEntity

```php
$webhooks_batch_response_subscription = $client->WebhooksBatchResponseSubscription();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `array` | Yes | An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated. |
| `links` | `array` | No | A map of link names to associated URIs providing additional information about the batch operation. |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `array` | Yes | An array containing the results of the batch operation, with each item representing an individual subscription response. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WebhooksBatchResponseSubscription()->create([
  "app_id" => null, // int
  "completedAt" => null, // string
  "inputs" => null, // array
  "results" => null, // array
  "startedAt" => null, // string
  "status" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhooksBatchResponseSubscriptionEntity`

Create a new `WebhooksBatchResponseSubscriptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhooksCollectionResponseSubscriptionResponseNoPagingEntity

```php
$webhooks_collection_response_subscription_response_no_paging = $client->WebhooksCollectionResponseSubscriptionResponseNoPaging();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionOverrides` | `array` | No | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `actions` | `array` | Yes | A list of actions that trigger the subscription. |
| `appId` | `int` | Yes | The unique identifier for the app associated with the subscription. |
| `associatedObjectTypeIds` | `array` | No | A list of associated object type IDs. |
| `createdAt` | `string` | Yes | The date and time when the subscription was created, in ISO 8601 format. |
| `createdBy` | `int` | No | The ID of the user who created the subscription. |
| `deletedAt` | `string` | No | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `id` | `int` | Yes | The unique identifier for the subscription. |
| `listIds` | `array` | No | A list of list IDs associated with the subscription. |
| `objectIds` | `array` | No | A list of object IDs associated with the subscription. |
| `objectTypeId` | `string` | Yes | The identifier for the object type associated with the subscription. |
| `portalId` | `int` | No | The unique identifier for the portal associated with the subscription. |
| `properties` | `array` | No | A list of property names associated with the subscription. |
| `subscriptionType` | `string` | Yes | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `updatedAt` | `string` | Yes | The date and time when the subscription was last updated, in ISO 8601 format. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WebhooksCollectionResponseSubscriptionResponseNoPaging()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhooksCollectionResponseSubscriptionResponseNoPagingEntity`

Create a new `WebhooksCollectionResponseSubscriptionResponseNoPagingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhooksCrmObjectSnapshotBatchEntity

```php
$webhooks_crm_object_snapshot_batch = $client->WebhooksCrmObjectSnapshotBatch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `snapshotRequests` | `array` | Yes | An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object. |
| `snapshotResponses` | `array` | Yes | An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WebhooksCrmObjectSnapshotBatch()->create([
  "snapshotRequests" => null, // array
  "snapshotResponses" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhooksCrmObjectSnapshotBatchEntity`

Create a new `WebhooksCrmObjectSnapshotBatchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhooksFilterEntity

```php
$webhooks_filter = $client->WebhooksFilter();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conditions` | `array` | Yes | An array of conditions that define the criteria for the filter. |
| `createdAt` | `int` | Yes | A Unix timestamp in milliseconds indicating when the filter was created. |
| `filter` | `array` | Yes | Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. |
| `filterId` | `int` | Yes | The unique identifier for the created filter. |
| `id` | `int` | Yes | The unique identifier for the filter. |
| `subscriptionId` | `int` | Yes | The unique identifier of the subscription to which the filter will be applied. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WebhooksFilter()->create([
  "conditions" => null, // array
  "createdAt" => null, // int
  "filter" => null, // array
  "filterId" => null, // int
  "id" => null, // int
  "subscriptionId" => null, // int
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WebhooksFilter()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhooksFilterEntity`

Create a new `WebhooksFilterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhooksSettingEntity

```php
$webhooks_setting = $client->WebhooksSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `maxConcurrentRequests` | `int` | Yes | The maximum number of concurrent requests allowed. |
| `targetUrl` | `string` | Yes | The URL to which webhook events will be sent. |
| `throttling` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WebhooksSetting()->load(["app_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->WebhooksSetting()->update([
  "app_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhooksSettingEntity`

Create a new `WebhooksSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhooksSnapshotStatusEntity

```php
$webhooks_snapshot_status = $client->WebhooksSnapshotStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `int` | No | The timestamp indicating when the snapshot operation was completed, represented as a Unix timestamp in milliseconds. |
| `errorCode` | `string` | No | A code representing the error that occurred, if any. |
| `id` | `string` | Yes | The unique identifier for the snapshot operation, represented as a UUID. |
| `initiatedAt` | `int` | Yes | The timestamp indicating when the snapshot operation was initiated, represented as a Unix timestamp in milliseconds. |
| `message` | `string` | No | A descriptive message providing additional information about the snapshot operation or error. |
| `status` | `string` | Yes | The current status of the snapshot. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WebhooksSnapshotStatus()->load(["id" => "webhooks_snapshot_status_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhooksSnapshotStatusEntity`

Create a new `WebhooksSnapshotStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhooksSubscriptionEntity

```php
$webhooks_subscription = $client->WebhooksSubscription();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | A boolean indicating whether the subscription is currently active. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WebhooksSubscription()->create([
  "app_id" => null, // int
  "active" => null, // bool
  "createdAt" => null, // string
  "eventType" => null, // string
  "id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WebhooksSubscription()->load(["id" => 1, "app_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->WebhooksSubscription()->update([
  "id" => 1,
  "app_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhooksSubscriptionEntity`

Create a new `WebhooksSubscriptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhooksSubscriptionListEntity

```php
$webhooks_subscription_list = $client->WebhooksSubscriptionList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | A boolean indicating whether the subscription is currently active. |
| `createdAt` | `string` | Yes | The date and time when the subscription was created, in ISO 8601 format. |
| `eventType` | `string` | Yes | The type of event that triggers the subscription. |
| `eventTypeName` | `string` | No | The name of the event type for the subscription. |
| `id` | `string` | Yes | The unique identifier for the subscription. |
| `objectTypeId` | `string` | No | The identifier for the object type associated with the subscription. |
| `propertyName` | `string` | No | The name of the property associated with the subscription event, if applicable. |
| `updatedAt` | `string` | No | The date and time when the subscription was last updated, in ISO 8601 format. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WebhooksSubscriptionList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhooksSubscriptionListEntity`

Create a new `WebhooksSubscriptionListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhooksSubscriptionResponse1Entity

```php
$webhooks_subscription_response_1 = $client->WebhooksSubscriptionResponse1();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionOverrides` | `array` | No | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `actions` | `array` | Yes | A list of actions that trigger the subscription. |
| `appId` | `int` | Yes | The unique identifier for the app associated with the subscription. |
| `associatedObjectTypeIds` | `array` | No | A list of associated object type IDs. |
| `createdAt` | `string` | Yes | The date and time when the subscription was created, in ISO 8601 format. |
| `createdBy` | `int` | No | The ID of the user who created the subscription. |
| `deletedAt` | `string` | No | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `id` | `int` | Yes | The unique identifier for the subscription. |
| `listIds` | `array` | No | A list of list IDs associated with the subscription. |
| `objectIds` | `array` | No | A list of object IDs associated with the subscription. |
| `objectTypeId` | `string` | Yes | The identifier for the object type associated with the subscription. |
| `portalId` | `int` | No | The unique identifier for the portal associated with the subscription. |
| `properties` | `array` | No | A list of property names associated with the subscription. |
| `subscriptionType` | `string` | Yes | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `updatedAt` | `string` | Yes | The date and time when the subscription was last updated, in ISO 8601 format. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WebhooksSubscriptionResponse1()->create([
  "actions" => null, // array
  "appId" => null, // int
  "createdAt" => null, // string
  "id" => null, // int
  "objectTypeId" => null, // string
  "subscriptionType" => null, // string
  "updatedAt" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WebhooksSubscriptionResponse1()->load(["subscription_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhooksSubscriptionResponse1Entity`

Create a new `WebhooksSubscriptionResponse1Entity` instance with the same client and
options.

#### `get_name(): string`

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

```php
$client = new HubspotWebhooksSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

