# Typed models for the HubspotWebhooks SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Basic(TypedDict):
    pass


class BasicLoadMatch(TypedDict, total=False):
    install_portal_id: int


class BasicRemoveMatch(TypedDict):
    subscription_id: int


class WebhooksBatchResponseJournalFetchRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class WebhooksBatchResponseJournalFetch(WebhooksBatchResponseJournalFetchRequired, total=False):
    links: dict
    requestedAt: str


class WebhooksBatchResponseJournalFetchLoadMatchRequired(TypedDict):
    count: int


class WebhooksBatchResponseJournalFetchLoadMatch(WebhooksBatchResponseJournalFetchLoadMatchRequired, total=False):
    batch_id: str
    install_portal_id: int


class WebhooksBatchResponseJournalFetchCreateDataRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class WebhooksBatchResponseJournalFetchCreateData(WebhooksBatchResponseJournalFetchCreateDataRequired, total=False):
    install_portal_id: int
    links: dict
    requestedAt: str


class WebhooksBatchResponseSubscriptionRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class WebhooksBatchResponseSubscription(WebhooksBatchResponseSubscriptionRequired, total=False):
    links: dict
    requestedAt: str


class WebhooksBatchResponseSubscriptionCreateDataRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class WebhooksBatchResponseSubscriptionCreateData(WebhooksBatchResponseSubscriptionCreateDataRequired, total=False):
    links: dict
    requestedAt: str


class WebhooksCollectionResponseSubscriptionResponseNoPagingRequired(TypedDict):
    actions: list
    appId: int
    createdAt: str
    id: int
    objectTypeId: str
    subscriptionType: str
    updatedAt: str


class WebhooksCollectionResponseSubscriptionResponseNoPaging(WebhooksCollectionResponseSubscriptionResponseNoPagingRequired, total=False):
    actionOverrides: dict
    associatedObjectTypeIds: list
    createdBy: int
    deletedAt: str
    listIds: list
    objectIds: list
    portalId: int
    properties: list


class WebhooksCollectionResponseSubscriptionResponseNoPagingListMatch(TypedDict, total=False):
    actionOverrides: dict
    actions: list
    appId: int
    associatedObjectTypeIds: list
    createdAt: str
    createdBy: int
    deletedAt: str
    id: int
    listIds: list
    objectIds: list
    objectTypeId: str
    portalId: int
    properties: list
    subscriptionType: str
    updatedAt: str


class WebhooksCrmObjectSnapshotBatch(TypedDict):
    snapshotRequests: list
    snapshotResponses: list


class WebhooksCrmObjectSnapshotBatchCreateData(TypedDict):
    snapshotRequests: list
    snapshotResponses: list


class WebhooksFilter(TypedDict):
    conditions: list
    createdAt: int
    filter: dict
    filterId: int
    id: int
    subscriptionId: int


class WebhooksFilterLoadMatch(TypedDict):
    id: int


class WebhooksFilterCreateData(TypedDict):
    conditions: list
    createdAt: int
    filter: dict
    filterId: int
    id: int
    subscriptionId: int


class WebhooksSetting(TypedDict):
    maxConcurrentRequests: int
    targetUrl: str
    throttling: dict


class WebhooksSettingLoadMatch(TypedDict):
    pass


class WebhooksSettingUpdateData(TypedDict, total=False):
    maxConcurrentRequests: int
    targetUrl: str
    throttling: dict


class WebhooksSnapshotStatusRequired(TypedDict):
    id: str
    initiatedAt: int
    status: str


class WebhooksSnapshotStatus(WebhooksSnapshotStatusRequired, total=False):
    completedAt: int
    errorCode: str
    message: str


class WebhooksSnapshotStatusLoadMatch(TypedDict):
    id: str


class WebhooksSubscriptionRequired(TypedDict):
    active: bool
    createdAt: str
    eventType: str
    id: str


class WebhooksSubscription(WebhooksSubscriptionRequired, total=False):
    eventTypeName: str
    objectTypeId: str
    propertyName: str
    updatedAt: str


class WebhooksSubscriptionLoadMatch(TypedDict):
    id: int


class WebhooksSubscriptionCreateDataRequired(TypedDict):
    active: bool
    createdAt: str
    eventType: str
    id: str


class WebhooksSubscriptionCreateData(WebhooksSubscriptionCreateDataRequired, total=False):
    eventTypeName: str
    objectTypeId: str
    propertyName: str
    updatedAt: str


class WebhooksSubscriptionUpdateDataRequired(TypedDict):
    id: int


class WebhooksSubscriptionUpdateData(WebhooksSubscriptionUpdateDataRequired, total=False):
    active: bool
    createdAt: str
    eventType: str
    eventTypeName: str
    objectTypeId: str
    propertyName: str
    updatedAt: str


class WebhooksSubscriptionListRequired(TypedDict):
    active: bool
    createdAt: str
    eventType: str
    id: str


class WebhooksSubscriptionList(WebhooksSubscriptionListRequired, total=False):
    eventTypeName: str
    objectTypeId: str
    propertyName: str
    updatedAt: str


class WebhooksSubscriptionListListMatch(TypedDict):
    pass


class WebhooksSubscriptionResponse1Required(TypedDict):
    actions: list
    appId: int
    createdAt: str
    id: int
    objectTypeId: str
    subscriptionType: str
    updatedAt: str


class WebhooksSubscriptionResponse1(WebhooksSubscriptionResponse1Required, total=False):
    actionOverrides: dict
    associatedObjectTypeIds: list
    createdBy: int
    deletedAt: str
    listIds: list
    objectIds: list
    portalId: int
    properties: list


class WebhooksSubscriptionResponse1LoadMatch(TypedDict):
    subscription_id: int


class WebhooksSubscriptionResponse1CreateDataRequired(TypedDict):
    actions: list
    appId: int
    createdAt: str
    id: int
    objectTypeId: str
    subscriptionType: str
    updatedAt: str


class WebhooksSubscriptionResponse1CreateData(WebhooksSubscriptionResponse1CreateDataRequired, total=False):
    actionOverrides: dict
    associatedObjectTypeIds: list
    createdBy: int
    deletedAt: str
    listIds: list
    objectIds: list
    portalId: int
    properties: list
