// Typed models for the HubspotWebhooks SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} Basic
 */

/**
 * @typedef {Object} BasicLoadMatch
 * @property {number} [install_portal_id]
 */

/**
 * @typedef {Object} BasicRemoveMatch
 * @property {number} subscription_id
 */

/**
 * @typedef {Object} WebhooksBatchResponseJournalFetch
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} WebhooksBatchResponseJournalFetchLoadMatch
 * @property {string} [batch_id]
 * @property {number} count
 * @property {number} [install_portal_id]
 */

/**
 * @typedef {Object} WebhooksBatchResponseJournalFetchCreateData
 * @property {number} [install_portal_id]
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} WebhooksBatchResponseSubscription
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} WebhooksBatchResponseSubscriptionCreateData
 * @property {number} app_id
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} WebhooksCollectionResponseSubscriptionResponseNoPaging
 * @property {Object} [actionOverrides]
 * @property {Array} actions
 * @property {number} appId
 * @property {Array} [associatedObjectTypeIds]
 * @property {string} createdAt
 * @property {number} [createdBy]
 * @property {string} [deletedAt]
 * @property {number} id
 * @property {Array} [listIds]
 * @property {Array} [objectIds]
 * @property {string} objectTypeId
 * @property {number} [portalId]
 * @property {Array} [properties]
 * @property {string} subscriptionType
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} WebhooksCollectionResponseSubscriptionResponseNoPagingListMatch
 * @property {Object} [actionOverrides]
 * @property {Array} [actions]
 * @property {number} [appId]
 * @property {Array} [associatedObjectTypeIds]
 * @property {string} [createdAt]
 * @property {number} [createdBy]
 * @property {string} [deletedAt]
 * @property {number} [id]
 * @property {Array} [listIds]
 * @property {Array} [objectIds]
 * @property {string} [objectTypeId]
 * @property {number} [portalId]
 * @property {Array} [properties]
 * @property {string} [subscriptionType]
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} WebhooksCrmObjectSnapshotBatch
 * @property {Array} snapshotRequests
 * @property {Array} snapshotResponses
 */

/**
 * @typedef {Object} WebhooksCrmObjectSnapshotBatchCreateData
 * @property {Array} snapshotRequests
 * @property {Array} snapshotResponses
 */

/**
 * @typedef {Object} WebhooksFilter
 * @property {Array} conditions
 * @property {number} createdAt
 * @property {Object} filter
 * @property {number} filterId
 * @property {number} id
 * @property {number} subscriptionId
 */

/**
 * @typedef {Object} WebhooksFilterLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} WebhooksFilterCreateData
 * @property {Array} conditions
 * @property {number} createdAt
 * @property {Object} filter
 * @property {number} filterId
 * @property {number} id
 * @property {number} subscriptionId
 */

/**
 * @typedef {Object} WebhooksSetting
 * @property {number} maxConcurrentRequests
 * @property {string} targetUrl
 * @property {Object} throttling
 */

/**
 * @typedef {Object} WebhooksSettingLoadMatch
 * @property {number} app_id
 */

/**
 * @typedef {Object} WebhooksSettingUpdateData
 * @property {number} app_id
 * @property {number} [maxConcurrentRequests]
 * @property {string} [targetUrl]
 * @property {Object} [throttling]
 */

/**
 * @typedef {Object} WebhooksSnapshotStatus
 * @property {number} [completedAt]
 * @property {string} [errorCode]
 * @property {string} id
 * @property {number} initiatedAt
 * @property {string} [message]
 * @property {string} status
 */

/**
 * @typedef {Object} WebhooksSnapshotStatusLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} WebhooksSubscription
 * @property {boolean} active
 * @property {string} createdAt
 * @property {string} eventType
 * @property {string} [eventTypeName]
 * @property {string} id
 * @property {string} [objectTypeId]
 * @property {string} [propertyName]
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} WebhooksSubscriptionLoadMatch
 * @property {number} app_id
 * @property {number} id
 */

/**
 * @typedef {Object} WebhooksSubscriptionCreateData
 * @property {number} app_id
 * @property {boolean} active
 * @property {string} createdAt
 * @property {string} eventType
 * @property {string} [eventTypeName]
 * @property {string} id
 * @property {string} [objectTypeId]
 * @property {string} [propertyName]
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} WebhooksSubscriptionUpdateData
 * @property {number} app_id
 * @property {number} id
 * @property {boolean} [active]
 * @property {string} [createdAt]
 * @property {string} [eventType]
 * @property {string} [eventTypeName]
 * @property {string} [objectTypeId]
 * @property {string} [propertyName]
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} WebhooksSubscriptionList
 * @property {boolean} active
 * @property {string} createdAt
 * @property {string} eventType
 * @property {string} [eventTypeName]
 * @property {string} id
 * @property {string} [objectTypeId]
 * @property {string} [propertyName]
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} WebhooksSubscriptionListListMatch
 * @property {number} app_id
 */

/**
 * @typedef {Object} WebhooksSubscriptionResponse1
 * @property {Object} [actionOverrides]
 * @property {Array} actions
 * @property {number} appId
 * @property {Array} [associatedObjectTypeIds]
 * @property {string} createdAt
 * @property {number} [createdBy]
 * @property {string} [deletedAt]
 * @property {number} id
 * @property {Array} [listIds]
 * @property {Array} [objectIds]
 * @property {string} objectTypeId
 * @property {number} [portalId]
 * @property {Array} [properties]
 * @property {string} subscriptionType
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} WebhooksSubscriptionResponse1LoadMatch
 * @property {number} subscription_id
 */

/**
 * @typedef {Object} WebhooksSubscriptionResponse1CreateData
 * @property {Object} [actionOverrides]
 * @property {Array} actions
 * @property {number} appId
 * @property {Array} [associatedObjectTypeIds]
 * @property {string} createdAt
 * @property {number} [createdBy]
 * @property {string} [deletedAt]
 * @property {number} id
 * @property {Array} [listIds]
 * @property {Array} [objectIds]
 * @property {string} objectTypeId
 * @property {number} [portalId]
 * @property {Array} [properties]
 * @property {string} subscriptionType
 * @property {string} updatedAt
 */

