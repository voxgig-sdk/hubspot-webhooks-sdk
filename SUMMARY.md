# HubSpot Webhooks API

HubSpot Webhooks API, merged from the vendor&#39;s per-API OpenAPI documents.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 11 entities and 35 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [Basic](docs/api/basic.html)

Results: No content.

SDK operations: `load`, `remove`.

### [WebhooksBatchResponseJournalFetch](docs/api/webhooks_batch_response_journal_fetch.html)

Results: successful operation; multiple statuses.

SDK operations: `create`, `load`.

Key fields to recognise:

- `completedAt`: The date and time when the batch operation was completed, in ISO 8601 format.
- `inputs`: An array of strings to be processed.
- `links`: A map of link names to associated URIs related to the batch operation.
- `requestedAt`: The date and time when the batch operation was requested, in ISO 8601 format.
- `results`: An array of results from the batch operation, each represented as a JournalFetchResponse object.

### [WebhooksBatchResponseSubscription](docs/api/webhooks_batch_response_subscription.html)

Results: successful operation; multiple statuses.

SDK operations: `create`.

Key fields to recognise:

- `completedAt`: The date and time when the batch operation was completed, in ISO 8601 format.
- `inputs`: An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated.
- `links`: A map of link names to associated URIs providing additional information about the batch operation.
- `requestedAt`: The date and time when the batch operation was requested, in ISO 8601 format.
- `results`: An array containing the results of the batch operation, with each item representing an individual subscription response.

### [WebhooksCollectionResponseSubscriptionResponseNoPaging](docs/api/webhooks_collection_response_subscription_response_no_paging.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `actionOverrides`: An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object.
- `actions`: A list of actions that trigger the subscription. Possible values include &#39;CREATE&#39;, &#39;UPDATE&#39;, &#39;DELETE&#39;, &#39;MERGE&#39;, &#39;RESTORE&#39;, &#39;ASSOCIATION_ADDED&#39;, &#39;ASSOCIATION_REMOVED&#39;, &#39;SNAPSHOT&#39;, &#39;APP_INSTALL&#39;, &#39;APP_UNINSTALL&#39;, &#39;ADDED_TO_LIST&#39;, &#39;REMOVED_FROM_LIST&#39;, and &#39;GDPR_DELETE&#39;.
- `appId`: The unique identifier for the app associated with the subscription. It is an integer formatted as int64.
- `associatedObjectTypeIds`: A list of associated object type IDs. Each ID is a string.
- `createdAt`: The date and time when the subscription was created, in ISO 8601 format.

### [WebhooksCrmObjectSnapshotBatch](docs/api/webhooks_crm_object_snapshot_batch.html)

Results: successful operation.

SDK operations: `create`.

Key fields to recognise:

- `snapshotRequests`: An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object.
- `snapshotResponses`: An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object. This property is required.

### [WebhooksFilter](docs/api/webhooks_filter.html)

Results: successful operation.

SDK operations: `create`, `load`.

Key fields to recognise:

- `conditions`: An array of conditions that define the criteria for the filter. Each condition specifies a property, an operator, and optionally a value or values.
- `createdAt`: A Unix timestamp in milliseconds indicating when the filter was created.
- `filter`: Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against.
- `filterId`: The unique identifier for the created filter. It is an integer formatted as int64.
- `id`: The unique identifier for the filter. It is an integer in int64 format.

### [WebhooksSetting](docs/api/webhooks_setting.html)

Results: successful operation.

SDK operations: `load`, `update`.

Key fields to recognise:

- `maxConcurrentRequests`: The maximum number of concurrent requests allowed. This is an integer value.
- `targetUrl`: The URL to which the webhook events will be sent. It is a string.

### [WebhooksSnapshotStatus](docs/api/webhooks_snapshot_status.html)

Results: successful operation.

SDK operations: `load`.

Key fields to recognise:

- `completedAt`: The timestamp indicating when the snapshot operation was completed, represented as a Unix timestamp in milliseconds.
- `errorCode`: A code representing the error that occurred, if any. Possible values are &#39;TIMEOUT&#39;, &#39;VALIDATION_ERROR&#39;, &#39;INTERNAL_ERROR&#39;, and &#39;PERMISSION_DENIED&#39;.
- `id`: The unique identifier for the snapshot operation, represented as a UUID.
- `initiatedAt`: The timestamp indicating when the snapshot operation was initiated, represented as a Unix timestamp in milliseconds.
- `message`: A descriptive message providing additional information about the snapshot operation or error.

### [WebhooksSubscription](docs/api/webhooks_subscription.html)

Results: successful operation.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `active`: A boolean indicating whether the subscription is currently active.
- `createdAt`: The date and time when the subscription was created, in ISO 8601 format.
- `eventType`: The type of event that triggers the subscription. Valid values include various property changes, creations, deletions, merges, restores, and association changes for different HubSpot objects.
- `eventTypeName`: The name of the event type for the subscription.
- `id`: The unique identifier for the subscription. It is an integer formatted as int64.

### [WebhooksSubscriptionList](docs/api/webhooks_subscription_list.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `active`: A boolean indicating whether the subscription is currently active.
- `createdAt`: The date and time when the subscription was created, in ISO 8601 format.
- `eventType`: The type of event that triggers the subscription. Valid values include various property changes, creations, deletions, merges, restores, and association changes for different HubSpot objects.
- `eventTypeName`: The name of the event type for the subscription.
- `id`: The unique identifier for the subscription. It is an integer formatted as int64.

### [WebhooksSubscriptionResponse1](docs/api/webhooks_subscription_response_1.html)

Results: successful operation.

SDK operations: `create`, `load`.

Key fields to recognise:

- `actionOverrides`: An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object.
- `actions`: A list of actions that trigger the subscription. Possible values include &#39;CREATE&#39;, &#39;UPDATE&#39;, &#39;DELETE&#39;, &#39;MERGE&#39;, &#39;RESTORE&#39;, &#39;ASSOCIATION_ADDED&#39;, &#39;ASSOCIATION_REMOVED&#39;, &#39;SNAPSHOT&#39;, &#39;APP_INSTALL&#39;, &#39;APP_UNINSTALL&#39;, &#39;ADDED_TO_LIST&#39;, &#39;REMOVED_FROM_LIST&#39;, and &#39;GDPR_DELETE&#39;.
- `appId`: The unique identifier for the app associated with the subscription. It is an integer formatted as int64.
- `associatedObjectTypeIds`: A list of associated object type IDs. Each ID is a string.
- `createdAt`: The date and time when the subscription was created, in ISO 8601 format.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Basic](docs/api/basic.html) | `load` | `GET /webhooks-journal/journal-local/2026-09/offset/{offset}/next` | Required |
| [Basic](docs/api/basic.html) | `load` | `GET /webhooks-journal/journal/2026-09/offset/{offset}/next` | Required |
| [Basic](docs/api/basic.html) | `load` | `GET /webhooks-journal/journal-local/2026-09/earliest` | Required |
| [Basic](docs/api/basic.html) | `load` | `GET /webhooks-journal/journal-local/2026-09/latest` | Required |
| [Basic](docs/api/basic.html) | `load` | `GET /webhooks-journal/journal/2026-09/earliest` | Required |
| [Basic](docs/api/basic.html) | `load` | `GET /webhooks-journal/journal/2026-09/latest` | Required |
| [Basic](docs/api/basic.html) | `remove` | `DELETE /app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}` | Required |
| [Basic](docs/api/basic.html) | `remove` | `DELETE /app-webhooks/2026-09/{appId}/settings` | Required |
| [Basic](docs/api/basic.html) | `remove` | `DELETE /webhooks-journal/subscriptions/2026-09/filters/{filterId}` | Required |
| [Basic](docs/api/basic.html) | `remove` | `DELETE /webhooks-journal/subscriptions/2026-09/portals/{portalId}` | Required |
| [Basic](docs/api/basic.html) | `remove` | `DELETE /webhooks-journal/subscriptions/2026-09/{subscriptionId}` | Required |
| [WebhooksBatchResponseJournalFetch](docs/api/webhooks_batch_response_journal_fetch.html) | `create` | `POST /webhooks-journal/journal-local/2026-09/batch/read` | Required |
| [WebhooksBatchResponseJournalFetch](docs/api/webhooks_batch_response_journal_fetch.html) | `create` | `POST /webhooks-journal/journal/2026-09/batch/read` | Required |
| [WebhooksBatchResponseJournalFetch](docs/api/webhooks_batch_response_journal_fetch.html) | `load` | `GET /webhooks-journal/journal-local/2026-09/batch/{offset}/next/{count}` | Required |
| [WebhooksBatchResponseJournalFetch](docs/api/webhooks_batch_response_journal_fetch.html) | `load` | `GET /webhooks-journal/journal/2026-09/batch/{offset}/next/{count}` | Required |
| [WebhooksBatchResponseJournalFetch](docs/api/webhooks_batch_response_journal_fetch.html) | `load` | `GET /webhooks-journal/journal-local/2026-09/batch/earliest/{count}` | Required |
| [WebhooksBatchResponseJournalFetch](docs/api/webhooks_batch_response_journal_fetch.html) | `load` | `GET /webhooks-journal/journal-local/2026-09/batch/latest/{count}` | Required |
| [WebhooksBatchResponseJournalFetch](docs/api/webhooks_batch_response_journal_fetch.html) | `load` | `GET /webhooks-journal/journal/2026-09/batch/earliest/{count}` | Required |
| [WebhooksBatchResponseJournalFetch](docs/api/webhooks_batch_response_journal_fetch.html) | `load` | `GET /webhooks-journal/journal/2026-09/batch/latest/{count}` | Required |
| [WebhooksBatchResponseSubscription](docs/api/webhooks_batch_response_subscription.html) | `create` | `POST /app-webhooks/2026-09/{appId}/subscriptions/batch/update` | Required |
| [WebhooksCollectionResponseSubscriptionResponseNoPaging](docs/api/webhooks_collection_response_subscription_response_no_paging.html) | `list` | `GET /webhooks-journal/subscriptions/2026-09` | Required |
| [WebhooksCrmObjectSnapshotBatch](docs/api/webhooks_crm_object_snapshot_batch.html) | `create` | `POST /webhooks-journal/snapshots/2026-09/crm` | Required |
| [WebhooksFilter](docs/api/webhooks_filter.html) | `create` | `POST /webhooks-journal/subscriptions/2026-09/filters` | Required |
| [WebhooksFilter](docs/api/webhooks_filter.html) | `load` | `GET /webhooks-journal/subscriptions/2026-09/filters/{filterId}` | Required |
| [WebhooksFilter](docs/api/webhooks_filter.html) | `load` | `GET /webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}` | Required |
| [WebhooksSetting](docs/api/webhooks_setting.html) | `load` | `GET /app-webhooks/2026-09/{appId}/settings` | Required |
| [WebhooksSetting](docs/api/webhooks_setting.html) | `update` | `PUT /app-webhooks/2026-09/{appId}/settings` | Required |
| [WebhooksSnapshotStatus](docs/api/webhooks_snapshot_status.html) | `load` | `GET /webhooks-journal/journal-local/2026-09/status/{statusId}` | Required |
| [WebhooksSnapshotStatus](docs/api/webhooks_snapshot_status.html) | `load` | `GET /webhooks-journal/journal/2026-09/status/{statusId}` | Required |
| [WebhooksSubscription](docs/api/webhooks_subscription.html) | `create` | `POST /app-webhooks/2026-09/{appId}/subscriptions` | Required |
| [WebhooksSubscription](docs/api/webhooks_subscription.html) | `load` | `GET /app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}` | Required |
| [WebhooksSubscription](docs/api/webhooks_subscription.html) | `update` | `PATCH /app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}` | Required |
| [WebhooksSubscriptionList](docs/api/webhooks_subscription_list.html) | `list` | `GET /app-webhooks/2026-09/{appId}/subscriptions` | Required |
| [WebhooksSubscriptionResponse1](docs/api/webhooks_subscription_response_1.html) | `create` | `POST /webhooks-journal/subscriptions/2026-09` | Required |
| [WebhooksSubscriptionResponse1](docs/api/webhooks_subscription_response_1.html) | `load` | `GET /webhooks-journal/subscriptions/2026-09/{subscriptionId}` | Required |

## Connect to the API

- API server: `https://api.hubapi.com`

The default credential is sent in the `hapikey` query.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [JavaScript](docs/sdks/js.html) | `js/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `hubspot-webhooks_list`: List records for an entity. Supported entities: `webhooks_collection_response_subscription_response_no_paging`, `webhooks_subscription_list`.
- `hubspot-webhooks_load`: Load one record for an entity. Supported entities: `basic`, `webhooks_batch_response_journal_fetch`, `webhooks_filter`, `webhooks_setting`, `webhooks_snapshot_status`, `webhooks_subscription`, `webhooks_subscription_response_1`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

