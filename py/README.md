# HubspotWebhooks Python SDK



The Python SDK for the HubspotWebhooks API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Basic()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/hubspot-webhooks-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from hubspotwebhooks_sdk import HubspotWebhooksSDK

client = HubspotWebhooksSDK({
    "apikey": os.environ.get("HUBSPOT_WEBHOOKS_APIKEY"),
})
```

### 3. Load a webhooksbatchresponsejournalfetch

WebhooksBatchResponseJournalFetch is nested under count, so provide the `count`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    webhooksbatchresponsejournalfetch = client.WebhooksBatchResponseJournalFetch().load({"count": 1})
    print(webhooksbatchresponsejournalfetch)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Remove
client.Basic().remove({"subscription_id": 1})
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    webhookssnapshotstatus = client.WebhooksSnapshotStatus().load({"id": "example_id"})
    print(webhookssnapshotstatus)
except Exception as err:
    print(f"load failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = HubspotWebhooksSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
webhookssnapshotstatus = client.WebhooksSnapshotStatus().load({"id": "test01"})
# webhookssnapshotstatus contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = HubspotWebhooksSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### HubspotWebhooksSDK

```python
from hubspotwebhooks_sdk import HubspotWebhooksSDK

client = HubspotWebhooksSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = HubspotWebhooksSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### HubspotWebhooksSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `basic = client.Basic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```python
basic = client.Basic().load()
```


### WebhooksBatchResponseJournalFetch

Create an instance: `webhooks_batch_response_journal_fetch = client.WebhooksBatchResponseJournalFetch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `str` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `list` | An array of strings to be processed. |
| `links` | `dict` | A map of link names to associated URIs related to the batch operation. |
| `requestedAt` | `str` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `list` | An array of results from the batch operation, each represented as a JournalFetchResponse object. |
| `startedAt` | `str` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `str` | The current status of the batch operation. |

#### Example: Load

```python
webhooks_batch_response_journal_fetch = client.WebhooksBatchResponseJournalFetch().load({"count": 1})
```

#### Example: Create

```python
webhooks_batch_response_journal_fetch = client.WebhooksBatchResponseJournalFetch().create({
    "completedAt": "example_completedAt",  # str
    "inputs": [],  # list
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
})
```


### WebhooksBatchResponseSubscription

Create an instance: `webhooks_batch_response_subscription = client.WebhooksBatchResponseSubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `str` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `list` | An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated. |
| `links` | `dict` | A map of link names to associated URIs providing additional information about the batch operation. |
| `requestedAt` | `str` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `list` | An array containing the results of the batch operation, with each item representing an individual subscription response. |
| `startedAt` | `str` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `str` | The current status of the batch operation. |

#### Example: Create

```python
webhooks_batch_response_subscription = client.WebhooksBatchResponseSubscription().create({
    "2026_09_id": 1,  # int
    "completedAt": "example_completedAt",  # str
    "inputs": [],  # list
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
})
```


### WebhooksCollectionResponseSubscriptionResponseNoPaging

Create an instance: `webhooks_collection_response_subscription_response_no_paging = client.WebhooksCollectionResponseSubscriptionResponseNoPaging()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actionOverrides` | `dict` | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `actions` | `list` | A list of actions that trigger the subscription. |
| `appId` | `int` | The unique identifier for the app associated with the subscription. |
| `associatedObjectTypeIds` | `list` | A list of associated object type IDs. |
| `createdAt` | `str` | The date and time when the subscription was created, in ISO 8601 format. |
| `createdBy` | `int` | The ID of the user who created the subscription. |
| `deletedAt` | `str` | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `id` | `int` | The unique identifier for the subscription. |
| `listIds` | `list` | A list of list IDs associated with the subscription. |
| `objectIds` | `list` | A list of object IDs associated with the subscription. |
| `objectTypeId` | `str` | The identifier for the object type associated with the subscription. |
| `portalId` | `int` | The unique identifier for the portal associated with the subscription. |
| `properties` | `list` | A list of property names associated with the subscription. |
| `subscriptionType` | `str` | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `updatedAt` | `str` | The date and time when the subscription was last updated, in ISO 8601 format. |

#### Example: List

```python
webhooks_collection_response_subscription_response_no_pagings = client.WebhooksCollectionResponseSubscriptionResponseNoPaging().list()
```


### WebhooksCrmObjectSnapshotBatch

Create an instance: `webhooks_crm_object_snapshot_batch = client.WebhooksCrmObjectSnapshotBatch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `snapshotRequests` | `list` | An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object. |
| `snapshotResponses` | `list` | An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object. |

#### Example: Create

```python
webhooks_crm_object_snapshot_batch = client.WebhooksCrmObjectSnapshotBatch().create({
    "snapshotRequests": [],  # list
    "snapshotResponses": [],  # list
})
```


### WebhooksFilter

Create an instance: `webhooks_filter = client.WebhooksFilter()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conditions` | `list` | An array of conditions that define the criteria for the filter. |
| `createdAt` | `int` | A Unix timestamp in milliseconds indicating when the filter was created. |
| `filter` | `dict` | Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. |
| `filterId` | `int` | The unique identifier for the created filter. |
| `id` | `int` | The unique identifier for the filter. |
| `subscriptionId` | `int` | The unique identifier of the subscription to which the filter will be applied. |

#### Example: Load

```python
webhooks_filter = client.WebhooksFilter().load({"id": 1})
```

#### Example: Create

```python
webhooks_filter = client.WebhooksFilter().create({
    "conditions": [],  # list
    "createdAt": 1,  # int
    "filter": {},  # dict
    "filterId": 1,  # int
    "id": 1,  # int
    "subscriptionId": 1,  # int
})
```


### WebhooksSetting

Create an instance: `webhooks_setting = client.WebhooksSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `maxConcurrentRequests` | `int` | The maximum number of concurrent requests allowed. |
| `targetUrl` | `str` | The URL to which webhook events will be sent. |
| `throttling` | `dict` |  |

#### Example: Load

```python
webhooks_setting = client.WebhooksSetting().load({"2026_09_id": 1})
```


### WebhooksSnapshotStatus

Create an instance: `webhooks_snapshot_status = client.WebhooksSnapshotStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `int` | The timestamp indicating when the snapshot operation was completed, represented as a Unix timestamp in milliseconds. |
| `errorCode` | `str` | A code representing the error that occurred, if any. |
| `id` | `str` | The unique identifier for the snapshot operation, represented as a UUID. |
| `initiatedAt` | `int` | The timestamp indicating when the snapshot operation was initiated, represented as a Unix timestamp in milliseconds. |
| `message` | `str` | A descriptive message providing additional information about the snapshot operation or error. |
| `status` | `str` | The current status of the snapshot. |

#### Example: Load

```python
webhooks_snapshot_status = client.WebhooksSnapshotStatus().load({"id": "webhooks_snapshot_status_id"})
```


### WebhooksSubscription

Create an instance: `webhooks_subscription = client.WebhooksSubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | A boolean indicating whether the subscription is currently active. |
| `createdAt` | `str` | The date and time when the subscription was created, in ISO 8601 format. |
| `eventType` | `str` | The type of event that triggers the subscription. |
| `eventTypeName` | `str` | The name of the event type for the subscription. |
| `id` | `str` | The unique identifier for the subscription. |
| `objectTypeId` | `str` | The identifier for the object type associated with the subscription. |
| `propertyName` | `str` | The name of the property associated with the subscription event, if applicable. |
| `updatedAt` | `str` | The date and time when the subscription was last updated, in ISO 8601 format. |

#### Example: Load

```python
webhooks_subscription = client.WebhooksSubscription().load({"id": 1, "2026_09_id": 1})
```

#### Example: Create

```python
webhooks_subscription = client.WebhooksSubscription().create({
    "2026_09_id": 1,  # int
    "active": True,  # bool
    "createdAt": "example_createdAt",  # str
    "eventType": "example_eventType",  # str
    "id": "example_id",  # str
})
```


### WebhooksSubscriptionList

Create an instance: `webhooks_subscription_list = client.WebhooksSubscriptionList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | A boolean indicating whether the subscription is currently active. |
| `createdAt` | `str` | The date and time when the subscription was created, in ISO 8601 format. |
| `eventType` | `str` | The type of event that triggers the subscription. |
| `eventTypeName` | `str` | The name of the event type for the subscription. |
| `id` | `str` | The unique identifier for the subscription. |
| `objectTypeId` | `str` | The identifier for the object type associated with the subscription. |
| `propertyName` | `str` | The name of the property associated with the subscription event, if applicable. |
| `updatedAt` | `str` | The date and time when the subscription was last updated, in ISO 8601 format. |

#### Example: List

```python
webhooks_subscription_lists = client.WebhooksSubscriptionList().list({"2026_09_id": 1})
```


### WebhooksSubscriptionResponse1

Create an instance: `webhooks_subscription_response_1 = client.WebhooksSubscriptionResponse1()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actionOverrides` | `dict` | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `actions` | `list` | A list of actions that trigger the subscription. |
| `appId` | `int` | The unique identifier for the app associated with the subscription. |
| `associatedObjectTypeIds` | `list` | A list of associated object type IDs. |
| `createdAt` | `str` | The date and time when the subscription was created, in ISO 8601 format. |
| `createdBy` | `int` | The ID of the user who created the subscription. |
| `deletedAt` | `str` | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `id` | `int` | The unique identifier for the subscription. |
| `listIds` | `list` | A list of list IDs associated with the subscription. |
| `objectIds` | `list` | A list of object IDs associated with the subscription. |
| `objectTypeId` | `str` | The identifier for the object type associated with the subscription. |
| `portalId` | `int` | The unique identifier for the portal associated with the subscription. |
| `properties` | `list` | A list of property names associated with the subscription. |
| `subscriptionType` | `str` | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `updatedAt` | `str` | The date and time when the subscription was last updated, in ISO 8601 format. |

#### Example: Load

```python
webhooks_subscription_response_1 = client.WebhooksSubscriptionResponse1().load({"subscription_id": 1})
```

#### Example: Create

```python
webhooks_subscription_response_1 = client.WebhooksSubscriptionResponse1().create({
    "actions": [],  # list
    "appId": 1,  # int
    "createdAt": "example_createdAt",  # str
    "id": 1,  # int
    "objectTypeId": "example_objectTypeId",  # str
    "subscriptionType": "example_subscriptionType",  # str
    "updatedAt": "example_updatedAt",  # str
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

Features are the extension mechanism. A feature is a Python class
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

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── hubspotwebhooks_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`hubspotwebhooks_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
webhookssnapshotstatus = client.WebhooksSnapshotStatus()
webhookssnapshotstatus.load({"id": "example_id"})

# webhookssnapshotstatus.data_get() now returns the webhookssnapshotstatus data from the last load
# webhookssnapshotstatus.match_get() returns the last match criteria
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
