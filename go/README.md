# HubspotWebhooks Golang SDK



The Golang SDK for the HubspotWebhooks API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Basic(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/hubspot-webhooks-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/hubspot-webhooks-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/hubspot-webhooks-sdk/go=../hubspot-webhooks-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/hubspot-webhooks-sdk/go"
)

func main() {
    client := sdk.NewHubspotWebhooksSDK(map[string]any{
        "apikey": os.Getenv("HUBSPOT_WEBHOOKS_APIKEY"),
    })

    // Load a single basic — the value is the loaded record.
    basic, err := client.Basic(nil).Load(nil, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(basic)

    // Remove a basic.
    removed, err := client.Basic(nil).Remove(map[string]any{"subscription_id": 1}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(removed)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
webhookssnapshotstatus, err := client.WebhooksSnapshotStatus(nil).Load(map[string]any{"id": "example_id"}, nil)
if err != nil {
    // handle err
    return
}
_ = webhookssnapshotstatus
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

webhooksSnapshotStatus, err := client.WebhooksSnapshotStatus(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(webhooksSnapshotStatus) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewHubspotWebhooksSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewHubspotWebhooksSDK

```go
func NewHubspotWebhooksSDK(options map[string]any) *HubspotWebhooksSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *HubspotWebhooksSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### HubspotWebhooksSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Basic` | `(data map[string]any) HubspotWebhooksEntity` | Create a Basic entity instance. |
| `WebhooksBatchResponseJournalFetch` | `(data map[string]any) HubspotWebhooksEntity` | Create a WebhooksBatchResponseJournalFetch entity instance. |
| `WebhooksBatchResponseSubscription` | `(data map[string]any) HubspotWebhooksEntity` | Create a WebhooksBatchResponseSubscription entity instance. |
| `WebhooksCollectionResponseSubscriptionResponseNoPaging` | `(data map[string]any) HubspotWebhooksEntity` | Create a WebhooksCollectionResponseSubscriptionResponseNoPaging entity instance. |
| `WebhooksCrmObjectSnapshotBatch` | `(data map[string]any) HubspotWebhooksEntity` | Create a WebhooksCrmObjectSnapshotBatch entity instance. |
| `WebhooksFilter` | `(data map[string]any) HubspotWebhooksEntity` | Create a WebhooksFilter entity instance. |
| `WebhooksSetting` | `(data map[string]any) HubspotWebhooksEntity` | Create a WebhooksSetting entity instance. |
| `WebhooksSnapshotStatus` | `(data map[string]any) HubspotWebhooksEntity` | Create a WebhooksSnapshotStatus entity instance. |
| `WebhooksSubscription` | `(data map[string]any) HubspotWebhooksEntity` | Create a WebhooksSubscription entity instance. |
| `WebhooksSubscriptionList` | `(data map[string]any) HubspotWebhooksEntity` | Create a WebhooksSubscriptionList entity instance. |
| `WebhooksSubscriptionResponse1` | `(data map[string]any) HubspotWebhooksEntity` | Create a WebhooksSubscriptionResponse1 entity instance. |

### Entity interface (HubspotWebhooksEntity)

All entities implement the `HubspotWebhooksEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    basic, err := client.Basic(nil).Load(nil, nil)
    if err != nil { /* handle */ }
    // basic is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Basic

| Field | Description |
| --- | --- |

Operations: Load, Remove.

API path: `/webhooks-journal/journal-local/2026-09/offset/{offset}/next`

#### WebhooksBatchResponseJournalFetch

| Field | Description |
| --- | --- |
| `"completedAt"` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `"inputs"` | An array of strings to be processed. |
| `"links"` | A map of link names to associated URIs related to the batch operation. |
| `"requestedAt"` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `"results"` | An array of results from the batch operation, each represented as a JournalFetchResponse object. |
| `"startedAt"` | The date and time when the batch operation started, in ISO 8601 format. |
| `"status"` | The current status of the batch operation. |

Operations: Create, Load.

API path: `/webhooks-journal/journal-local/2026-09/batch/read`

#### WebhooksBatchResponseSubscription

| Field | Description |
| --- | --- |
| `"completedAt"` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `"inputs"` | An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated. |
| `"links"` | A map of link names to associated URIs providing additional information about the batch operation. |
| `"requestedAt"` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `"results"` | An array containing the results of the batch operation, with each item representing an individual subscription response. |
| `"startedAt"` | The date and time when the batch operation started, in ISO 8601 format. |
| `"status"` | The current status of the batch operation. |

Operations: Create.

API path: `/app-webhooks/2026-09/{appId}/subscriptions/batch/update`

#### WebhooksCollectionResponseSubscriptionResponseNoPaging

| Field | Description |
| --- | --- |
| `"actionOverrides"` | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `"actions"` | A list of actions that trigger the subscription. |
| `"appId"` | The unique identifier for the app associated with the subscription. |
| `"associatedObjectTypeIds"` | A list of associated object type IDs. |
| `"createdAt"` | The date and time when the subscription was created, in ISO 8601 format. |
| `"createdBy"` | The ID of the user who created the subscription. |
| `"deletedAt"` | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `"id"` | The unique identifier for the subscription. |
| `"listIds"` | A list of list IDs associated with the subscription. |
| `"objectIds"` | A list of object IDs associated with the subscription. |
| `"objectTypeId"` | The identifier for the object type associated with the subscription. |
| `"portalId"` | The unique identifier for the portal associated with the subscription. |
| `"properties"` | A list of property names associated with the subscription. |
| `"subscriptionType"` | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `"updatedAt"` | The date and time when the subscription was last updated, in ISO 8601 format. |

Operations: List.

API path: `/webhooks-journal/subscriptions/2026-09`

#### WebhooksCrmObjectSnapshotBatch

| Field | Description |
| --- | --- |
| `"snapshotRequests"` | An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object. |
| `"snapshotResponses"` | An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object. |

Operations: Create.

API path: `/webhooks-journal/snapshots/2026-09/crm`

#### WebhooksFilter

| Field | Description |
| --- | --- |
| `"conditions"` | An array of conditions that define the criteria for the filter. |
| `"createdAt"` | A Unix timestamp in milliseconds indicating when the filter was created. |
| `"filter"` | Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. |
| `"filterId"` | The unique identifier for the created filter. |
| `"id"` | The unique identifier for the filter. |
| `"subscriptionId"` | The unique identifier of the subscription to which the filter will be applied. |

Operations: Create, Load.

API path: `/webhooks-journal/subscriptions/2026-09/filters`

#### WebhooksSetting

| Field | Description |
| --- | --- |
| `"maxConcurrentRequests"` | The maximum number of concurrent requests allowed. |
| `"targetUrl"` | The URL to which webhook events will be sent. |
| `"throttling"` |  |

Operations: Load, Update.

API path: `/app-webhooks/2026-09/{appId}/settings`

#### WebhooksSnapshotStatus

| Field | Description |
| --- | --- |
| `"completedAt"` | The timestamp indicating when the snapshot operation was completed, represented as a Unix timestamp in milliseconds. |
| `"errorCode"` | A code representing the error that occurred, if any. |
| `"id"` | The unique identifier for the snapshot operation, represented as a UUID. |
| `"initiatedAt"` | The timestamp indicating when the snapshot operation was initiated, represented as a Unix timestamp in milliseconds. |
| `"message"` | A descriptive message providing additional information about the snapshot operation or error. |
| `"status"` | The current status of the snapshot. |

Operations: Load.

API path: `/webhooks-journal/journal-local/2026-09/status/{statusId}`

#### WebhooksSubscription

| Field | Description |
| --- | --- |
| `"active"` | A boolean indicating whether the subscription is currently active. |
| `"createdAt"` | The date and time when the subscription was created, in ISO 8601 format. |
| `"eventType"` | The type of event that triggers the subscription. |
| `"eventTypeName"` | The name of the event type for the subscription. |
| `"id"` | The unique identifier for the subscription. |
| `"objectTypeId"` | The identifier for the object type associated with the subscription. |
| `"propertyName"` | The name of the property associated with the subscription event, if applicable. |
| `"updatedAt"` | The date and time when the subscription was last updated, in ISO 8601 format. |

Operations: Create, Load, Update.

API path: `/app-webhooks/2026-09/{appId}/subscriptions`

#### WebhooksSubscriptionList

| Field | Description |
| --- | --- |
| `"active"` | A boolean indicating whether the subscription is currently active. |
| `"createdAt"` | The date and time when the subscription was created, in ISO 8601 format. |
| `"eventType"` | The type of event that triggers the subscription. |
| `"eventTypeName"` | The name of the event type for the subscription. |
| `"id"` | The unique identifier for the subscription. |
| `"objectTypeId"` | The identifier for the object type associated with the subscription. |
| `"propertyName"` | The name of the property associated with the subscription event, if applicable. |
| `"updatedAt"` | The date and time when the subscription was last updated, in ISO 8601 format. |

Operations: List.

API path: `/app-webhooks/2026-09/{appId}/subscriptions`

#### WebhooksSubscriptionResponse1

| Field | Description |
| --- | --- |
| `"actionOverrides"` | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `"actions"` | A list of actions that trigger the subscription. |
| `"appId"` | The unique identifier for the app associated with the subscription. |
| `"associatedObjectTypeIds"` | A list of associated object type IDs. |
| `"createdAt"` | The date and time when the subscription was created, in ISO 8601 format. |
| `"createdBy"` | The ID of the user who created the subscription. |
| `"deletedAt"` | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `"id"` | The unique identifier for the subscription. |
| `"listIds"` | A list of list IDs associated with the subscription. |
| `"objectIds"` | A list of object IDs associated with the subscription. |
| `"objectTypeId"` | The identifier for the object type associated with the subscription. |
| `"portalId"` | The unique identifier for the portal associated with the subscription. |
| `"properties"` | A list of property names associated with the subscription. |
| `"subscriptionType"` | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `"updatedAt"` | The date and time when the subscription was last updated, in ISO 8601 format. |

Operations: Create, Load.

API path: `/webhooks-journal/subscriptions/2026-09`



## Entities


### Basic

Create an instance: `basic := client.Basic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Example: Load

```go
basic, err := client.Basic(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(basic) // the loaded record
```


### WebhooksBatchResponseJournalFetch

Create an instance: `webhooksBatchResponseJournalFetch := client.WebhooksBatchResponseJournalFetch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `[]any` | An array of strings to be processed. |
| `links` | `map[string]any` | A map of link names to associated URIs related to the batch operation. |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `[]any` | An array of results from the batch operation, each represented as a JournalFetchResponse object. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Load

```go
webhooksBatchResponseJournalFetch, err := client.WebhooksBatchResponseJournalFetch(nil).Load(map[string]any{"count": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhooksBatchResponseJournalFetch) // the loaded record
```

#### Example: Create

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


### WebhooksBatchResponseSubscription

Create an instance: `webhooksBatchResponseSubscription := client.WebhooksBatchResponseSubscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `[]any` | An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated. |
| `links` | `map[string]any` | A map of link names to associated URIs providing additional information about the batch operation. |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `[]any` | An array containing the results of the batch operation, with each item representing an individual subscription response. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Create

```go
result, err := client.WebhooksBatchResponseSubscription(nil).Create(map[string]any{
    "2026_09_id": 1,
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


### WebhooksCollectionResponseSubscriptionResponseNoPaging

Create an instance: `webhooksCollectionResponseSubscriptionResponseNoPaging := client.WebhooksCollectionResponseSubscriptionResponseNoPaging(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actionOverrides` | `map[string]any` | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `actions` | `[]any` | A list of actions that trigger the subscription. |
| `appId` | `int` | The unique identifier for the app associated with the subscription. |
| `associatedObjectTypeIds` | `[]any` | A list of associated object type IDs. |
| `createdAt` | `string` | The date and time when the subscription was created, in ISO 8601 format. |
| `createdBy` | `int` | The ID of the user who created the subscription. |
| `deletedAt` | `string` | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `id` | `int` | The unique identifier for the subscription. |
| `listIds` | `[]any` | A list of list IDs associated with the subscription. |
| `objectIds` | `[]any` | A list of object IDs associated with the subscription. |
| `objectTypeId` | `string` | The identifier for the object type associated with the subscription. |
| `portalId` | `int` | The unique identifier for the portal associated with the subscription. |
| `properties` | `[]any` | A list of property names associated with the subscription. |
| `subscriptionType` | `string` | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `updatedAt` | `string` | The date and time when the subscription was last updated, in ISO 8601 format. |

#### Example: List

```go
webhooksCollectionResponseSubscriptionResponseNoPagings, err := client.WebhooksCollectionResponseSubscriptionResponseNoPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhooksCollectionResponseSubscriptionResponseNoPagings) // the array of records
```


### WebhooksCrmObjectSnapshotBatch

Create an instance: `webhooksCrmObjectSnapshotBatch := client.WebhooksCrmObjectSnapshotBatch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `snapshotRequests` | `[]any` | An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object. |
| `snapshotResponses` | `[]any` | An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object. |

#### Example: Create

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


### WebhooksFilter

Create an instance: `webhooksFilter := client.WebhooksFilter(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conditions` | `[]any` | An array of conditions that define the criteria for the filter. |
| `createdAt` | `int` | A Unix timestamp in milliseconds indicating when the filter was created. |
| `filter` | `map[string]any` | Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. |
| `filterId` | `int` | The unique identifier for the created filter. |
| `id` | `int` | The unique identifier for the filter. |
| `subscriptionId` | `int` | The unique identifier of the subscription to which the filter will be applied. |

#### Example: Load

```go
webhooksFilter, err := client.WebhooksFilter(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhooksFilter) // the loaded record
```

#### Example: Create

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


### WebhooksSetting

Create an instance: `webhooksSetting := client.WebhooksSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `maxConcurrentRequests` | `int` | The maximum number of concurrent requests allowed. |
| `targetUrl` | `string` | The URL to which webhook events will be sent. |
| `throttling` | `map[string]any` |  |

#### Example: Load

```go
webhooksSetting, err := client.WebhooksSetting(nil).Load(map[string]any{"2026_09_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhooksSetting) // the loaded record
```


### WebhooksSnapshotStatus

Create an instance: `webhooksSnapshotStatus := client.WebhooksSnapshotStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `int` | The timestamp indicating when the snapshot operation was completed, represented as a Unix timestamp in milliseconds. |
| `errorCode` | `string` | A code representing the error that occurred, if any. |
| `id` | `string` | The unique identifier for the snapshot operation, represented as a UUID. |
| `initiatedAt` | `int` | The timestamp indicating when the snapshot operation was initiated, represented as a Unix timestamp in milliseconds. |
| `message` | `string` | A descriptive message providing additional information about the snapshot operation or error. |
| `status` | `string` | The current status of the snapshot. |

#### Example: Load

```go
webhooksSnapshotStatus, err := client.WebhooksSnapshotStatus(nil).Load(map[string]any{"id": "webhooks_snapshot_status_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhooksSnapshotStatus) // the loaded record
```


### WebhooksSubscription

Create an instance: `webhooksSubscription := client.WebhooksSubscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | A boolean indicating whether the subscription is currently active. |
| `createdAt` | `string` | The date and time when the subscription was created, in ISO 8601 format. |
| `eventType` | `string` | The type of event that triggers the subscription. |
| `eventTypeName` | `string` | The name of the event type for the subscription. |
| `id` | `string` | The unique identifier for the subscription. |
| `objectTypeId` | `string` | The identifier for the object type associated with the subscription. |
| `propertyName` | `string` | The name of the property associated with the subscription event, if applicable. |
| `updatedAt` | `string` | The date and time when the subscription was last updated, in ISO 8601 format. |

#### Example: Load

```go
webhooksSubscription, err := client.WebhooksSubscription(nil).Load(map[string]any{"id": 1, "2026_09_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhooksSubscription) // the loaded record
```

#### Example: Create

```go
result, err := client.WebhooksSubscription(nil).Create(map[string]any{
    "2026_09_id": 1,
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


### WebhooksSubscriptionList

Create an instance: `webhooksSubscriptionList := client.WebhooksSubscriptionList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | A boolean indicating whether the subscription is currently active. |
| `createdAt` | `string` | The date and time when the subscription was created, in ISO 8601 format. |
| `eventType` | `string` | The type of event that triggers the subscription. |
| `eventTypeName` | `string` | The name of the event type for the subscription. |
| `id` | `string` | The unique identifier for the subscription. |
| `objectTypeId` | `string` | The identifier for the object type associated with the subscription. |
| `propertyName` | `string` | The name of the property associated with the subscription event, if applicable. |
| `updatedAt` | `string` | The date and time when the subscription was last updated, in ISO 8601 format. |

#### Example: List

```go
webhooksSubscriptionLists, err := client.WebhooksSubscriptionList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhooksSubscriptionLists) // the array of records
```


### WebhooksSubscriptionResponse1

Create an instance: `webhooksSubscriptionResponse1 := client.WebhooksSubscriptionResponse1(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actionOverrides` | `map[string]any` | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `actions` | `[]any` | A list of actions that trigger the subscription. |
| `appId` | `int` | The unique identifier for the app associated with the subscription. |
| `associatedObjectTypeIds` | `[]any` | A list of associated object type IDs. |
| `createdAt` | `string` | The date and time when the subscription was created, in ISO 8601 format. |
| `createdBy` | `int` | The ID of the user who created the subscription. |
| `deletedAt` | `string` | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `id` | `int` | The unique identifier for the subscription. |
| `listIds` | `[]any` | A list of list IDs associated with the subscription. |
| `objectIds` | `[]any` | A list of object IDs associated with the subscription. |
| `objectTypeId` | `string` | The identifier for the object type associated with the subscription. |
| `portalId` | `int` | The unique identifier for the portal associated with the subscription. |
| `properties` | `[]any` | A list of property names associated with the subscription. |
| `subscriptionType` | `string` | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `updatedAt` | `string` | The date and time when the subscription was last updated, in ISO 8601 format. |

#### Example: Load

```go
webhooksSubscriptionResponse1, err := client.WebhooksSubscriptionResponse1(nil).Load(map[string]any{"subscription_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhooksSubscriptionResponse1) // the loaded record
```

#### Example: Create

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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

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

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/hubspot-webhooks-sdk/go/
├── hubspot-webhooks.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/hubspot-webhooks-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
webhookssnapshotstatus := client.WebhooksSnapshotStatus(nil)
webhookssnapshotstatus.Load(map[string]any{"id": "example_id"}, nil)

// webhookssnapshotstatus.Data() now returns the webhookssnapshotstatus data from the last load
// webhookssnapshotstatus.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
