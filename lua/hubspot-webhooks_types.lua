-- Typed models for the HubspotWebhooks SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Basic

---@class BasicLoadMatch
---@field install_portal_id? number

---@class BasicRemoveMatch
---@field subscription_id number

---@class WebhooksBatchResponseJournalFetch
---@field completedAt string
---@field inputs table
---@field links? table
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class WebhooksBatchResponseJournalFetchLoadMatch
---@field batch_id? string
---@field count number
---@field install_portal_id? number

---@class WebhooksBatchResponseJournalFetchCreateData
---@field install_portal_id? number
---@field completedAt string
---@field inputs table
---@field links? table
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class WebhooksBatchResponseSubscription
---@field completedAt string
---@field inputs table
---@field links? table
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class WebhooksBatchResponseSubscriptionCreateData
---@field ["2026_09_id"] number
---@field completedAt string
---@field inputs table
---@field links? table
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class WebhooksCollectionResponseSubscriptionResponseNoPaging
---@field actionOverrides? table
---@field actions table
---@field appId number
---@field associatedObjectTypeIds? table
---@field createdAt string
---@field createdBy? number
---@field deletedAt? string
---@field id number
---@field listIds? table
---@field objectIds? table
---@field objectTypeId string
---@field portalId? number
---@field properties? table
---@field subscriptionType string
---@field updatedAt string

---@class WebhooksCollectionResponseSubscriptionResponseNoPagingListMatch
---@field actionOverrides? table
---@field actions? table
---@field appId? number
---@field associatedObjectTypeIds? table
---@field createdAt? string
---@field createdBy? number
---@field deletedAt? string
---@field id? number
---@field listIds? table
---@field objectIds? table
---@field objectTypeId? string
---@field portalId? number
---@field properties? table
---@field subscriptionType? string
---@field updatedAt? string

---@class WebhooksCrmObjectSnapshotBatch
---@field snapshotRequests table
---@field snapshotResponses table

---@class WebhooksCrmObjectSnapshotBatchCreateData
---@field snapshotRequests table
---@field snapshotResponses table

---@class WebhooksFilter
---@field conditions table
---@field createdAt number
---@field filter table
---@field filterId number
---@field id number
---@field subscriptionId number

---@class WebhooksFilterLoadMatch
---@field id number

---@class WebhooksFilterCreateData
---@field conditions table
---@field createdAt number
---@field filter table
---@field filterId number
---@field id number
---@field subscriptionId number

---@class WebhooksSetting
---@field maxConcurrentRequests number
---@field targetUrl string
---@field throttling table

---@class WebhooksSettingLoadMatch
---@field ["2026_09_id"] number

---@class WebhooksSettingUpdateData
---@field ["2026_09_id"] number
---@field maxConcurrentRequests? number
---@field targetUrl? string
---@field throttling? table

---@class WebhooksSnapshotStatus
---@field completedAt? number
---@field errorCode? string
---@field id string
---@field initiatedAt number
---@field message? string
---@field status string

---@class WebhooksSnapshotStatusLoadMatch
---@field id string

---@class WebhooksSubscription
---@field active boolean
---@field createdAt string
---@field eventType string
---@field eventTypeName? string
---@field id string
---@field objectTypeId? string
---@field propertyName? string
---@field updatedAt? string

---@class WebhooksSubscriptionLoadMatch
---@field ["2026_09_id"] number
---@field id number

---@class WebhooksSubscriptionCreateData
---@field ["2026_09_id"] number
---@field active boolean
---@field createdAt string
---@field eventType string
---@field eventTypeName? string
---@field id string
---@field objectTypeId? string
---@field propertyName? string
---@field updatedAt? string

---@class WebhooksSubscriptionUpdateData
---@field ["2026_09_id"] number
---@field id number
---@field active? boolean
---@field createdAt? string
---@field eventType? string
---@field eventTypeName? string
---@field objectTypeId? string
---@field propertyName? string
---@field updatedAt? string

---@class WebhooksSubscriptionList
---@field active boolean
---@field createdAt string
---@field eventType string
---@field eventTypeName? string
---@field id string
---@field objectTypeId? string
---@field propertyName? string
---@field updatedAt? string

---@class WebhooksSubscriptionListListMatch
---@field ["2026_09_id"] number

---@class WebhooksSubscriptionResponse1
---@field actionOverrides? table
---@field actions table
---@field appId number
---@field associatedObjectTypeIds? table
---@field createdAt string
---@field createdBy? number
---@field deletedAt? string
---@field id number
---@field listIds? table
---@field objectIds? table
---@field objectTypeId string
---@field portalId? number
---@field properties? table
---@field subscriptionType string
---@field updatedAt string

---@class WebhooksSubscriptionResponse1LoadMatch
---@field subscription_id number

---@class WebhooksSubscriptionResponse1CreateData
---@field actionOverrides? table
---@field actions table
---@field appId number
---@field associatedObjectTypeIds? table
---@field createdAt string
---@field createdBy? number
---@field deletedAt? string
---@field id number
---@field listIds? table
---@field objectIds? table
---@field objectTypeId string
---@field portalId? number
---@field properties? table
---@field subscriptionType string
---@field updatedAt string

local M = {}

return M
