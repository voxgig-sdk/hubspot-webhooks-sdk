# HubspotWebhooks Golang SDK Reference

Complete API reference for the HubspotWebhooks Golang SDK.


## HubspotWebhooksSDK

### Constructor

```go
func NewHubspotWebhooksSDK(options map[string]any) *HubspotWebhooksSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *HubspotWebhooksSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *HubspotWebhooksSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Basic(data map[string]any) HubspotWebhooksEntity`

Create a new `Basic` entity instance. Pass `nil` for no initial data.

#### `WebhooksBatchResponseJournalFetch(data map[string]any) HubspotWebhooksEntity`

Create a new `WebhooksBatchResponseJournalFetch` entity instance. Pass `nil` for no initial data.

#### `WebhooksBatchResponseSubscription(data map[string]any) HubspotWebhooksEntity`

Create a new `WebhooksBatchResponseSubscription` entity instance. Pass `nil` for no initial data.

#### `WebhooksCollectionResponseSubscriptionResponseNoPaging(data map[string]any) HubspotWebhooksEntity`

Create a new `WebhooksCollectionResponseSubscriptionResponseNoPaging` entity instance. Pass `nil` for no initial data.

#### `WebhooksCrmObjectSnapshotBatch(data map[string]any) HubspotWebhooksEntity`

Create a new `WebhooksCrmObjectSnapshotBatch` entity instance. Pass `nil` for no initial data.

#### `WebhooksFilter(data map[string]any) HubspotWebhooksEntity`

Create a new `WebhooksFilter` entity instance. Pass `nil` for no initial data.

#### `WebhooksSetting(data map[string]any) HubspotWebhooksEntity`

Create a new `WebhooksSetting` entity instance. Pass `nil` for no initial data.

#### `WebhooksSnapshotStatus(data map[string]any) HubspotWebhooksEntity`

Create a new `WebhooksSnapshotStatus` entity instance. Pass `nil` for no initial data.

#### `WebhooksSubscription(data map[string]any) HubspotWebhooksEntity`

Create a new `WebhooksSubscription` entity instance. Pass `nil` for no initial data.

#### `WebhooksSubscriptionList(data map[string]any) HubspotWebhooksEntity`

Create a new `WebhooksSubscriptionList` entity instance. Pass `nil` for no initial data.

#### `WebhooksSubscriptionResponse1(data map[string]any) HubspotWebhooksEntity`

Create a new `WebhooksSubscriptionResponse1` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## BasicEntity

```go
basic := client.Basic(nil)
fmt.Println(basic.GetName()) // "basic"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Basic(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Basic(nil).Remove(map[string]any{"subscription_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BasicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhooksBatchResponseJournalFetchEntity

```go
webhooksBatchResponseJournalFetch := client.WebhooksBatchResponseJournalFetch(nil)
fmt.Println(webhooksBatchResponseJournalFetch.GetName()) // "webhooks_batch_response_journal_fetch"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `[]any` | Yes | An array of strings to be processed. |
| `links` | `map[string]any` | No | A map of link names to associated URIs related to the batch operation. |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `[]any` | Yes | An array of results from the batch operation, each represented as a JournalFetchResponse object. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WebhooksBatchResponseJournalFetch(nil).Load(map[string]any{"count": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.WebhooksBatchResponseJournalFetch(nil).Create(map[string]any{
    "completedAt": "example_completedAt",
    "inputs": []any{},
    "results": []any{},
    "startedAt": "example_startedAt",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhooksBatchResponseJournalFetchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhooksBatchResponseSubscriptionEntity

```go
webhooksBatchResponseSubscription := client.WebhooksBatchResponseSubscription(nil)
fmt.Println(webhooksBatchResponseSubscription.GetName()) // "webhooks_batch_response_subscription"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `[]any` | Yes | An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated. |
| `links` | `map[string]any` | No | A map of link names to associated URIs providing additional information about the batch operation. |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `[]any` | Yes | An array containing the results of the batch operation, with each item representing an individual subscription response. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.WebhooksBatchResponseSubscription(nil).Create(map[string]any{
    "app_id": 1,
    "completedAt": "example_completedAt",
    "inputs": []any{},
    "results": []any{},
    "startedAt": "example_startedAt",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhooksBatchResponseSubscriptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhooksCollectionResponseSubscriptionResponseNoPagingEntity

```go
webhooksCollectionResponseSubscriptionResponseNoPaging := client.WebhooksCollectionResponseSubscriptionResponseNoPaging(nil)
fmt.Println(webhooksCollectionResponseSubscriptionResponseNoPaging.GetName()) // "webhooks_collection_response_subscription_response_no_paging"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionOverrides` | `map[string]any` | No | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `actions` | `[]any` | Yes | A list of actions that trigger the subscription. |
| `appId` | `int` | Yes | The unique identifier for the app associated with the subscription. |
| `associatedObjectTypeIds` | `[]any` | No | A list of associated object type IDs. |
| `createdAt` | `string` | Yes | The date and time when the subscription was created, in ISO 8601 format. |
| `createdBy` | `int` | No | The ID of the user who created the subscription. |
| `deletedAt` | `string` | No | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `id` | `int` | Yes | The unique identifier for the subscription. |
| `listIds` | `[]any` | No | A list of list IDs associated with the subscription. |
| `objectIds` | `[]any` | No | A list of object IDs associated with the subscription. |
| `objectTypeId` | `string` | Yes | The identifier for the object type associated with the subscription. |
| `portalId` | `int` | No | The unique identifier for the portal associated with the subscription. |
| `properties` | `[]any` | No | A list of property names associated with the subscription. |
| `subscriptionType` | `string` | Yes | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `updatedAt` | `string` | Yes | The date and time when the subscription was last updated, in ISO 8601 format. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WebhooksCollectionResponseSubscriptionResponseNoPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhooksCollectionResponseSubscriptionResponseNoPagingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhooksCrmObjectSnapshotBatchEntity

```go
webhooksCrmObjectSnapshotBatch := client.WebhooksCrmObjectSnapshotBatch(nil)
fmt.Println(webhooksCrmObjectSnapshotBatch.GetName()) // "webhooks_crm_object_snapshot_batch"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `snapshotRequests` | `[]any` | Yes | An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object. |
| `snapshotResponses` | `[]any` | Yes | An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.WebhooksCrmObjectSnapshotBatch(nil).Create(map[string]any{
    "snapshotRequests": []any{},
    "snapshotResponses": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhooksCrmObjectSnapshotBatchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhooksFilterEntity

```go
webhooksFilter := client.WebhooksFilter(nil)
fmt.Println(webhooksFilter.GetName()) // "webhooks_filter"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conditions` | `[]any` | Yes | An array of conditions that define the criteria for the filter. |
| `createdAt` | `int` | Yes | A Unix timestamp in milliseconds indicating when the filter was created. |
| `filter` | `map[string]any` | Yes | Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. |
| `filterId` | `int` | Yes | The unique identifier for the created filter. |
| `id` | `int` | Yes | The unique identifier for the filter. |
| `subscriptionId` | `int` | Yes | The unique identifier of the subscription to which the filter will be applied. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WebhooksFilter(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.WebhooksFilter(nil).Create(map[string]any{
    "conditions": []any{},
    "createdAt": 1,
    "filter": map[string]any{},
    "filterId": 1,
    "id": 1,
    "subscriptionId": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhooksFilterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhooksSettingEntity

```go
webhooksSetting := client.WebhooksSetting(nil)
fmt.Println(webhooksSetting.GetName()) // "webhooks_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `maxConcurrentRequests` | `int` | Yes | The maximum number of concurrent requests allowed. |
| `targetUrl` | `string` | Yes | The URL to which webhook events will be sent. |
| `throttling` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WebhooksSetting(nil).Load(map[string]any{"app_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.WebhooksSetting(nil).Update(map[string]any{
    "app_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhooksSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhooksSnapshotStatusEntity

```go
webhooksSnapshotStatus := client.WebhooksSnapshotStatus(nil)
fmt.Println(webhooksSnapshotStatus.GetName()) // "webhooks_snapshot_status"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WebhooksSnapshotStatus(nil).Load(map[string]any{"id": "webhooks_snapshot_status_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhooksSnapshotStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhooksSubscriptionEntity

```go
webhooksSubscription := client.WebhooksSubscription(nil)
fmt.Println(webhooksSubscription.GetName()) // "webhooks_subscription"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WebhooksSubscription(nil).Load(map[string]any{"id": 1, "app_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.WebhooksSubscription(nil).Create(map[string]any{
    "app_id": 1,
    "active": true,
    "createdAt": "example_createdAt",
    "eventType": "example_eventType",
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.WebhooksSubscription(nil).Update(map[string]any{
    "id": 1,
    "app_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhooksSubscriptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhooksSubscriptionListEntity

```go
webhooksSubscriptionList := client.WebhooksSubscriptionList(nil)
fmt.Println(webhooksSubscriptionList.GetName()) // "webhooks_subscription_list"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WebhooksSubscriptionList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhooksSubscriptionListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhooksSubscriptionResponse1Entity

```go
webhooksSubscriptionResponse1 := client.WebhooksSubscriptionResponse1(nil)
fmt.Println(webhooksSubscriptionResponse1.GetName()) // "webhooks_subscription_response_1"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionOverrides` | `map[string]any` | No | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `actions` | `[]any` | Yes | A list of actions that trigger the subscription. |
| `appId` | `int` | Yes | The unique identifier for the app associated with the subscription. |
| `associatedObjectTypeIds` | `[]any` | No | A list of associated object type IDs. |
| `createdAt` | `string` | Yes | The date and time when the subscription was created, in ISO 8601 format. |
| `createdBy` | `int` | No | The ID of the user who created the subscription. |
| `deletedAt` | `string` | No | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `id` | `int` | Yes | The unique identifier for the subscription. |
| `listIds` | `[]any` | No | A list of list IDs associated with the subscription. |
| `objectIds` | `[]any` | No | A list of object IDs associated with the subscription. |
| `objectTypeId` | `string` | Yes | The identifier for the object type associated with the subscription. |
| `portalId` | `int` | No | The unique identifier for the portal associated with the subscription. |
| `properties` | `[]any` | No | A list of property names associated with the subscription. |
| `subscriptionType` | `string` | Yes | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `updatedAt` | `string` | Yes | The date and time when the subscription was last updated, in ISO 8601 format. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WebhooksSubscriptionResponse1(nil).Load(map[string]any{"subscription_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.WebhooksSubscriptionResponse1(nil).Create(map[string]any{
    "actions": []any{},
    "appId": 1,
    "createdAt": "example_createdAt",
    "id": 1,
    "objectTypeId": "example_objectTypeId",
    "subscriptionType": "example_subscriptionType",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhooksSubscriptionResponse1Entity` instance with the same client and
options.

#### `GetName() string`

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

```go
client := sdk.NewHubspotWebhooksSDK(map[string]any{
    "feature": map[string]any{
        "debug": map[string]any{"active": true},
        "idempotency": map[string]any{"active": true},
        "metrics": map[string]any{"active": true},
        "paging": map[string]any{"active": true},
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
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

