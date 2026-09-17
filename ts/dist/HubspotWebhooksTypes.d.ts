export interface Basic {
}
export interface BasicLoadMatch {
    install_portal_id?: number;
}
export interface BasicRemoveMatch {
    subscription_id: number;
}
export interface WebhooksBatchResponseJournalFetch {
    completedAt: string;
    inputs: any[];
    links?: Record<string, any>;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface WebhooksBatchResponseJournalFetchLoadMatch {
    batch_id?: string;
    count: number;
    install_portal_id?: number;
}
export interface WebhooksBatchResponseJournalFetchCreateData {
    install_portal_id?: number;
    completedAt: string;
    inputs: any[];
    links?: Record<string, any>;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface WebhooksBatchResponseSubscription {
    completedAt: string;
    inputs: any[];
    links?: Record<string, any>;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface WebhooksBatchResponseSubscriptionCreateData {
    "2026_09_id": number;
    completedAt: string;
    inputs: any[];
    links?: Record<string, any>;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface WebhooksCollectionResponseSubscriptionResponseNoPaging {
    actionOverrides?: Record<string, any>;
    actions: any[];
    appId: number;
    associatedObjectTypeIds?: any[];
    createdAt: string;
    createdBy?: number;
    deletedAt?: string;
    id: number;
    listIds?: any[];
    objectIds?: any[];
    objectTypeId: string;
    portalId?: number;
    properties?: any[];
    subscriptionType: string;
    updatedAt: string;
}
export interface WebhooksCollectionResponseSubscriptionResponseNoPagingListMatch {
    actionOverrides?: Record<string, any>;
    actions?: any[];
    appId?: number;
    associatedObjectTypeIds?: any[];
    createdAt?: string;
    createdBy?: number;
    deletedAt?: string;
    id?: number;
    listIds?: any[];
    objectIds?: any[];
    objectTypeId?: string;
    portalId?: number;
    properties?: any[];
    subscriptionType?: string;
    updatedAt?: string;
}
export interface WebhooksCrmObjectSnapshotBatch {
    snapshotRequests: any[];
    snapshotResponses: any[];
}
export interface WebhooksCrmObjectSnapshotBatchCreateData {
    snapshotRequests: any[];
    snapshotResponses: any[];
}
export interface WebhooksFilter {
    conditions: any[];
    createdAt: number;
    filter: Record<string, any>;
    filterId: number;
    id: number;
    subscriptionId: number;
}
export interface WebhooksFilterLoadMatch {
    id: number;
}
export interface WebhooksFilterCreateData {
    conditions: any[];
    createdAt: number;
    filter: Record<string, any>;
    filterId: number;
    id: number;
    subscriptionId: number;
}
export interface WebhooksSetting {
    maxConcurrentRequests: number;
    targetUrl: string;
    throttling: Record<string, any>;
}
export interface WebhooksSettingLoadMatch {
    "2026_09_id": number;
}
export interface WebhooksSettingUpdateData {
    "2026_09_id": number;
    maxConcurrentRequests?: number;
    targetUrl?: string;
    throttling?: Record<string, any>;
}
export interface WebhooksSnapshotStatus {
    completedAt?: number;
    errorCode?: string;
    id: string;
    initiatedAt: number;
    message?: string;
    status: string;
}
export interface WebhooksSnapshotStatusLoadMatch {
    id: string;
}
export interface WebhooksSubscription {
    active: boolean;
    createdAt: string;
    eventType: string;
    eventTypeName?: string;
    id: string;
    objectTypeId?: string;
    propertyName?: string;
    updatedAt?: string;
}
export interface WebhooksSubscriptionLoadMatch {
    "2026_09_id": number;
    id: number;
}
export interface WebhooksSubscriptionCreateData {
    "2026_09_id": number;
    active: boolean;
    createdAt: string;
    eventType: string;
    eventTypeName?: string;
    id: string;
    objectTypeId?: string;
    propertyName?: string;
    updatedAt?: string;
}
export interface WebhooksSubscriptionUpdateData {
    "2026_09_id": number;
    id: number;
    active?: boolean;
    createdAt?: string;
    eventType?: string;
    eventTypeName?: string;
    objectTypeId?: string;
    propertyName?: string;
    updatedAt?: string;
}
export interface WebhooksSubscriptionList {
    active: boolean;
    createdAt: string;
    eventType: string;
    eventTypeName?: string;
    id: string;
    objectTypeId?: string;
    propertyName?: string;
    updatedAt?: string;
}
export interface WebhooksSubscriptionListListMatch {
    "2026_09_id": number;
}
export interface WebhooksSubscriptionResponse1 {
    actionOverrides?: Record<string, any>;
    actions: any[];
    appId: number;
    associatedObjectTypeIds?: any[];
    createdAt: string;
    createdBy?: number;
    deletedAt?: string;
    id: number;
    listIds?: any[];
    objectIds?: any[];
    objectTypeId: string;
    portalId?: number;
    properties?: any[];
    subscriptionType: string;
    updatedAt: string;
}
export interface WebhooksSubscriptionResponse1LoadMatch {
    subscription_id: number;
}
export interface WebhooksSubscriptionResponse1CreateData {
    actionOverrides?: Record<string, any>;
    actions: any[];
    appId: number;
    associatedObjectTypeIds?: any[];
    createdAt: string;
    createdBy?: number;
    deletedAt?: string;
    id: number;
    listIds?: any[];
    objectIds?: any[];
    objectTypeId: string;
    portalId?: number;
    properties?: any[];
    subscriptionType: string;
    updatedAt: string;
}
