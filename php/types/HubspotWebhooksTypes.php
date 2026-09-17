<?php
declare(strict_types=1);

// Typed models for the HubspotWebhooks SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Basic entity data model. */
class Basic
{
}

/** Request payload for Basic#load. */
class BasicLoadMatch
{
    public ?int $install_portal_id = null;
}

/** Request payload for Basic#remove. */
class BasicRemoveMatch
{
    public int $subscription_id;
}

/** WebhooksBatchResponseJournalFetch entity data model. */
class WebhooksBatchResponseJournalFetch
{
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** Request payload for WebhooksBatchResponseJournalFetch#load. */
class WebhooksBatchResponseJournalFetchLoadMatch
{
    public ?string $batch_id = null;
    public int $count;
    public ?int $install_portal_id = null;
}

/** Request payload for WebhooksBatchResponseJournalFetch#create. */
class WebhooksBatchResponseJournalFetchCreateData
{
    public ?int $install_portal_id = null;
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** WebhooksBatchResponseSubscription entity data model. */
class WebhooksBatchResponseSubscription
{
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** Request payload for WebhooksBatchResponseSubscription#create. */
class WebhooksBatchResponseSubscriptionCreateData
{
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** WebhooksCollectionResponseSubscriptionResponseNoPaging entity data model. */
class WebhooksCollectionResponseSubscriptionResponseNoPaging
{
    public ?array $actionOverrides = null;
    public array $actions;
    public int $appId;
    public ?array $associatedObjectTypeIds = null;
    public string $createdAt;
    public ?int $createdBy = null;
    public ?string $deletedAt = null;
    public int $id;
    public ?array $listIds = null;
    public ?array $objectIds = null;
    public string $objectTypeId;
    public ?int $portalId = null;
    public ?array $properties = null;
    public string $subscriptionType;
    public string $updatedAt;
}

/** Request payload for WebhooksCollectionResponseSubscriptionResponseNoPaging#list. */
class WebhooksCollectionResponseSubscriptionResponseNoPagingListMatch
{
    public ?array $actionOverrides = null;
    public ?array $actions = null;
    public ?int $appId = null;
    public ?array $associatedObjectTypeIds = null;
    public ?string $createdAt = null;
    public ?int $createdBy = null;
    public ?string $deletedAt = null;
    public ?int $id = null;
    public ?array $listIds = null;
    public ?array $objectIds = null;
    public ?string $objectTypeId = null;
    public ?int $portalId = null;
    public ?array $properties = null;
    public ?string $subscriptionType = null;
    public ?string $updatedAt = null;
}

/** WebhooksCrmObjectSnapshotBatch entity data model. */
class WebhooksCrmObjectSnapshotBatch
{
    public array $snapshotRequests;
    public array $snapshotResponses;
}

/** Request payload for WebhooksCrmObjectSnapshotBatch#create. */
class WebhooksCrmObjectSnapshotBatchCreateData
{
    public array $snapshotRequests;
    public array $snapshotResponses;
}

/** WebhooksFilter entity data model. */
class WebhooksFilter
{
    public array $conditions;
    public int $createdAt;
    public array $filter;
    public int $filterId;
    public int $id;
    public int $subscriptionId;
}

/** Request payload for WebhooksFilter#load. */
class WebhooksFilterLoadMatch
{
    public int $id;
}

/** Request payload for WebhooksFilter#create. */
class WebhooksFilterCreateData
{
    public array $conditions;
    public int $createdAt;
    public array $filter;
    public int $filterId;
    public int $id;
    public int $subscriptionId;
}

/** WebhooksSetting entity data model. */
class WebhooksSetting
{
    public int $maxConcurrentRequests;
    public string $targetUrl;
    public array $throttling;
}

/** Request payload for WebhooksSetting#load. */
class WebhooksSettingLoadMatch
{
}

/** Request payload for WebhooksSetting#update. */
class WebhooksSettingUpdateData
{
    public ?int $maxConcurrentRequests = null;
    public ?string $targetUrl = null;
    public ?array $throttling = null;
}

/** WebhooksSnapshotStatus entity data model. */
class WebhooksSnapshotStatus
{
    public ?int $completedAt = null;
    public ?string $errorCode = null;
    public string $id;
    public int $initiatedAt;
    public ?string $message = null;
    public string $status;
}

/** Request payload for WebhooksSnapshotStatus#load. */
class WebhooksSnapshotStatusLoadMatch
{
    public string $id;
}

/** WebhooksSubscription entity data model. */
class WebhooksSubscription
{
    public bool $active;
    public string $createdAt;
    public string $eventType;
    public ?string $eventTypeName = null;
    public string $id;
    public ?string $objectTypeId = null;
    public ?string $propertyName = null;
    public ?string $updatedAt = null;
}

/** Request payload for WebhooksSubscription#load. */
class WebhooksSubscriptionLoadMatch
{
    public int $id;
}

/** Request payload for WebhooksSubscription#create. */
class WebhooksSubscriptionCreateData
{
    public bool $active;
    public string $createdAt;
    public string $eventType;
    public ?string $eventTypeName = null;
    public string $id;
    public ?string $objectTypeId = null;
    public ?string $propertyName = null;
    public ?string $updatedAt = null;
}

/** Request payload for WebhooksSubscription#update. */
class WebhooksSubscriptionUpdateData
{
    public int $id;
    public ?bool $active = null;
    public ?string $createdAt = null;
    public ?string $eventType = null;
    public ?string $eventTypeName = null;
    public ?string $objectTypeId = null;
    public ?string $propertyName = null;
    public ?string $updatedAt = null;
}

/** WebhooksSubscriptionList entity data model. */
class WebhooksSubscriptionList
{
    public bool $active;
    public string $createdAt;
    public string $eventType;
    public ?string $eventTypeName = null;
    public string $id;
    public ?string $objectTypeId = null;
    public ?string $propertyName = null;
    public ?string $updatedAt = null;
}

/** Request payload for WebhooksSubscriptionList#list. */
class WebhooksSubscriptionListListMatch
{
}

/** WebhooksSubscriptionResponse1 entity data model. */
class WebhooksSubscriptionResponse1
{
    public ?array $actionOverrides = null;
    public array $actions;
    public int $appId;
    public ?array $associatedObjectTypeIds = null;
    public string $createdAt;
    public ?int $createdBy = null;
    public ?string $deletedAt = null;
    public int $id;
    public ?array $listIds = null;
    public ?array $objectIds = null;
    public string $objectTypeId;
    public ?int $portalId = null;
    public ?array $properties = null;
    public string $subscriptionType;
    public string $updatedAt;
}

/** Request payload for WebhooksSubscriptionResponse1#load. */
class WebhooksSubscriptionResponse1LoadMatch
{
    public int $subscription_id;
}

/** Request payload for WebhooksSubscriptionResponse1#create. */
class WebhooksSubscriptionResponse1CreateData
{
    public ?array $actionOverrides = null;
    public array $actions;
    public int $appId;
    public ?array $associatedObjectTypeIds = null;
    public string $createdAt;
    public ?int $createdBy = null;
    public ?string $deletedAt = null;
    public int $id;
    public ?array $listIds = null;
    public ?array $objectIds = null;
    public string $objectTypeId;
    public ?int $portalId = null;
    public ?array $properties = null;
    public string $subscriptionType;
    public string $updatedAt;
}

