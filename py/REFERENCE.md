# HubspotWebhooks Python SDK Reference

Complete API reference for the HubspotWebhooks Python SDK.


## HubspotWebhooksSDK

### Constructor

```python
from hubspotwebhooks_sdk import HubspotWebhooksSDK

client = HubspotWebhooksSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HubspotWebhooksSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = HubspotWebhooksSDK.test()
```


### Instance Methods

#### `Basic(data=None)`

Create a new `BasicEntity` instance. Pass `None` for no initial data.

#### `WebhooksBatchResponseJournalFetch(data=None)`

Create a new `WebhooksBatchResponseJournalFetchEntity` instance. Pass `None` for no initial data.

#### `WebhooksBatchResponseSubscription(data=None)`

Create a new `WebhooksBatchResponseSubscriptionEntity` instance. Pass `None` for no initial data.

#### `WebhooksCollectionResponseSubscriptionResponseNoPaging(data=None)`

Create a new `WebhooksCollectionResponseSubscriptionResponseNoPagingEntity` instance. Pass `None` for no initial data.

#### `WebhooksCrmObjectSnapshotBatch(data=None)`

Create a new `WebhooksCrmObjectSnapshotBatchEntity` instance. Pass `None` for no initial data.

#### `WebhooksFilter(data=None)`

Create a new `WebhooksFilterEntity` instance. Pass `None` for no initial data.

#### `WebhooksSetting(data=None)`

Create a new `WebhooksSettingEntity` instance. Pass `None` for no initial data.

#### `WebhooksSnapshotStatus(data=None)`

Create a new `WebhooksSnapshotStatusEntity` instance. Pass `None` for no initial data.

#### `WebhooksSubscription(data=None)`

Create a new `WebhooksSubscriptionEntity` instance. Pass `None` for no initial data.

#### `WebhooksSubscriptionList(data=None)`

Create a new `WebhooksSubscriptionListEntity` instance. Pass `None` for no initial data.

#### `WebhooksSubscriptionResponse1(data=None)`

Create a new `WebhooksSubscriptionResponse1Entity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## BasicEntity

```python
basic = client.Basic()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Basic().load()
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Basic().remove({"subscription_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BasicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhooksBatchResponseJournalFetchEntity

```python
webhooks_batch_response_journal_fetch = client.WebhooksBatchResponseJournalFetch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `str` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `list` | Yes | An array of strings to be processed. |
| `links` | `dict` | No | A map of link names to associated URIs related to the batch operation. |
| `requestedAt` | `str` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `list` | Yes | An array of results from the batch operation, each represented as a JournalFetchResponse object. |
| `startedAt` | `str` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `str` | Yes | The current status of the batch operation. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WebhooksBatchResponseJournalFetch().create({
    "completedAt": "example_completedAt",  # str
    "inputs": [],  # list
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WebhooksBatchResponseJournalFetch().load({"count": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhooksBatchResponseJournalFetchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhooksBatchResponseSubscriptionEntity

```python
webhooks_batch_response_subscription = client.WebhooksBatchResponseSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `str` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `list` | Yes | An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated. |
| `links` | `dict` | No | A map of link names to associated URIs providing additional information about the batch operation. |
| `requestedAt` | `str` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `list` | Yes | An array containing the results of the batch operation, with each item representing an individual subscription response. |
| `startedAt` | `str` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `str` | Yes | The current status of the batch operation. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WebhooksBatchResponseSubscription().create({
    "app_id": 1,  # int
    "completedAt": "example_completedAt",  # str
    "inputs": [],  # list
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhooksBatchResponseSubscriptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhooksCollectionResponseSubscriptionResponseNoPagingEntity

```python
webhooks_collection_response_subscription_response_no_paging = client.WebhooksCollectionResponseSubscriptionResponseNoPaging()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionOverrides` | `dict` | No | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `actions` | `list` | Yes | A list of actions that trigger the subscription. |
| `appId` | `int` | Yes | The unique identifier for the app associated with the subscription. |
| `associatedObjectTypeIds` | `list` | No | A list of associated object type IDs. |
| `createdAt` | `str` | Yes | The date and time when the subscription was created, in ISO 8601 format. |
| `createdBy` | `int` | No | The ID of the user who created the subscription. |
| `deletedAt` | `str` | No | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `id` | `int` | Yes | The unique identifier for the subscription. |
| `listIds` | `list` | No | A list of list IDs associated with the subscription. |
| `objectIds` | `list` | No | A list of object IDs associated with the subscription. |
| `objectTypeId` | `str` | Yes | The identifier for the object type associated with the subscription. |
| `portalId` | `int` | No | The unique identifier for the portal associated with the subscription. |
| `properties` | `list` | No | A list of property names associated with the subscription. |
| `subscriptionType` | `str` | Yes | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `updatedAt` | `str` | Yes | The date and time when the subscription was last updated, in ISO 8601 format. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WebhooksCollectionResponseSubscriptionResponseNoPaging().list()
for webhooks_collection_response_subscription_response_no_paging in results:
    print(webhooks_collection_response_subscription_response_no_paging)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhooksCollectionResponseSubscriptionResponseNoPagingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhooksCrmObjectSnapshotBatchEntity

```python
webhooks_crm_object_snapshot_batch = client.WebhooksCrmObjectSnapshotBatch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `snapshotRequests` | `list` | Yes | An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object. |
| `snapshotResponses` | `list` | Yes | An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WebhooksCrmObjectSnapshotBatch().create({
    "snapshotRequests": [],  # list
    "snapshotResponses": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhooksCrmObjectSnapshotBatchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhooksFilterEntity

```python
webhooks_filter = client.WebhooksFilter()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conditions` | `list` | Yes | An array of conditions that define the criteria for the filter. |
| `createdAt` | `int` | Yes | A Unix timestamp in milliseconds indicating when the filter was created. |
| `filter` | `dict` | Yes | Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. |
| `filterId` | `int` | Yes | The unique identifier for the created filter. |
| `id` | `int` | Yes | The unique identifier for the filter. |
| `subscriptionId` | `int` | Yes | The unique identifier of the subscription to which the filter will be applied. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WebhooksFilter().create({
    "conditions": [],  # list
    "createdAt": 1,  # int
    "filter": {},  # dict
    "filterId": 1,  # int
    "id": 1,  # int
    "subscriptionId": 1,  # int
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WebhooksFilter().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhooksFilterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhooksSettingEntity

```python
webhooks_setting = client.WebhooksSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `maxConcurrentRequests` | `int` | Yes | The maximum number of concurrent requests allowed. |
| `targetUrl` | `str` | Yes | The URL to which webhook events will be sent. |
| `throttling` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WebhooksSetting().load({"app_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.WebhooksSetting().update({
    "app_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhooksSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhooksSnapshotStatusEntity

```python
webhooks_snapshot_status = client.WebhooksSnapshotStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `int` | No | The timestamp indicating when the snapshot operation was completed, represented as a Unix timestamp in milliseconds. |
| `errorCode` | `str` | No | A code representing the error that occurred, if any. |
| `id` | `str` | Yes | The unique identifier for the snapshot operation, represented as a UUID. |
| `initiatedAt` | `int` | Yes | The timestamp indicating when the snapshot operation was initiated, represented as a Unix timestamp in milliseconds. |
| `message` | `str` | No | A descriptive message providing additional information about the snapshot operation or error. |
| `status` | `str` | Yes | The current status of the snapshot. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WebhooksSnapshotStatus().load({"id": "webhooks_snapshot_status_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhooksSnapshotStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhooksSubscriptionEntity

```python
webhooks_subscription = client.WebhooksSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | A boolean indicating whether the subscription is currently active. |
| `createdAt` | `str` | Yes | The date and time when the subscription was created, in ISO 8601 format. |
| `eventType` | `str` | Yes | The type of event that triggers the subscription. |
| `eventTypeName` | `str` | No | The name of the event type for the subscription. |
| `id` | `str` | Yes | The unique identifier for the subscription. |
| `objectTypeId` | `str` | No | The identifier for the object type associated with the subscription. |
| `propertyName` | `str` | No | The name of the property associated with the subscription event, if applicable. |
| `updatedAt` | `str` | No | The date and time when the subscription was last updated, in ISO 8601 format. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WebhooksSubscription().create({
    "app_id": 1,  # int
    "active": True,  # bool
    "createdAt": "example_createdAt",  # str
    "eventType": "example_eventType",  # str
    "id": "example_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WebhooksSubscription().load({"id": 1, "app_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.WebhooksSubscription().update({
    "id": 1,
    "app_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhooksSubscriptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhooksSubscriptionListEntity

```python
webhooks_subscription_list = client.WebhooksSubscriptionList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | A boolean indicating whether the subscription is currently active. |
| `createdAt` | `str` | Yes | The date and time when the subscription was created, in ISO 8601 format. |
| `eventType` | `str` | Yes | The type of event that triggers the subscription. |
| `eventTypeName` | `str` | No | The name of the event type for the subscription. |
| `id` | `str` | Yes | The unique identifier for the subscription. |
| `objectTypeId` | `str` | No | The identifier for the object type associated with the subscription. |
| `propertyName` | `str` | No | The name of the property associated with the subscription event, if applicable. |
| `updatedAt` | `str` | No | The date and time when the subscription was last updated, in ISO 8601 format. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WebhooksSubscriptionList().list({"app_id": 1})
for webhooks_subscription_list in results:
    print(webhooks_subscription_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhooksSubscriptionListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhooksSubscriptionResponse1Entity

```python
webhooks_subscription_response_1 = client.WebhooksSubscriptionResponse1()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionOverrides` | `dict` | No | An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object. |
| `actions` | `list` | Yes | A list of actions that trigger the subscription. |
| `appId` | `int` | Yes | The unique identifier for the app associated with the subscription. |
| `associatedObjectTypeIds` | `list` | No | A list of associated object type IDs. |
| `createdAt` | `str` | Yes | The date and time when the subscription was created, in ISO 8601 format. |
| `createdBy` | `int` | No | The ID of the user who created the subscription. |
| `deletedAt` | `str` | No | The date and time when the subscription was deleted, in ISO 8601 format, if applicable. |
| `id` | `int` | Yes | The unique identifier for the subscription. |
| `listIds` | `list` | No | A list of list IDs associated with the subscription. |
| `objectIds` | `list` | No | A list of object IDs associated with the subscription. |
| `objectTypeId` | `str` | Yes | The identifier for the object type associated with the subscription. |
| `portalId` | `int` | No | The unique identifier for the portal associated with the subscription. |
| `properties` | `list` | No | A list of property names associated with the subscription. |
| `subscriptionType` | `str` | Yes | The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'. |
| `updatedAt` | `str` | Yes | The date and time when the subscription was last updated, in ISO 8601 format. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WebhooksSubscriptionResponse1().create({
    "actions": [],  # list
    "appId": 1,  # int
    "createdAt": "example_createdAt",  # str
    "id": 1,  # int
    "objectTypeId": "example_objectTypeId",  # str
    "subscriptionType": "example_subscriptionType",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WebhooksSubscriptionResponse1().load({"subscription_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhooksSubscriptionResponse1Entity` instance with the same options.

#### `get_name() -> str`

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

```python
client = HubspotWebhooksSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

