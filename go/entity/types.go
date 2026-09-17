// Typed models for the HubspotWebhooks SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/hubspot-webhooks-sdk/go/core"
)

// Basic is the typed data model for the basic entity.
type Basic struct {
}

// BasicLoadMatch is the typed request payload for Basic.LoadTyped.
type BasicLoadMatch struct {
	InstallPortalId *int `json:"install_portal_id,omitempty"`
}

// BasicRemoveMatch is the typed request payload for Basic.RemoveTyped.
type BasicRemoveMatch struct {
	SubscriptionId int `json:"subscription_id"`
}

// WebhooksBatchResponseJournalFetch is the typed data model for the webhooks_batch_response_journal_fetch entity.
type WebhooksBatchResponseJournalFetch struct {
	CompletedAt string `json:"completedAt"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// WebhooksBatchResponseJournalFetchLoadMatch is the typed request payload for WebhooksBatchResponseJournalFetch.LoadTyped.
type WebhooksBatchResponseJournalFetchLoadMatch struct {
	BatchId *string `json:"batch_id,omitempty"`
	Count int `json:"count"`
	InstallPortalId *int `json:"install_portal_id,omitempty"`
}

// WebhooksBatchResponseJournalFetchCreateData is the typed request payload for WebhooksBatchResponseJournalFetch.CreateTyped.
type WebhooksBatchResponseJournalFetchCreateData struct {
	InstallPortalId *int `json:"install_portal_id,omitempty"`
	CompletedAt string `json:"completedAt"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// WebhooksBatchResponseSubscription is the typed data model for the webhooks_batch_response_subscription entity.
type WebhooksBatchResponseSubscription struct {
	CompletedAt string `json:"completedAt"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// WebhooksBatchResponseSubscriptionCreateData is the typed request payload for WebhooksBatchResponseSubscription.CreateTyped.
type WebhooksBatchResponseSubscriptionCreateData struct {
	AppId int `json:"app_id"`
	CompletedAt string `json:"completedAt"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// WebhooksCollectionResponseSubscriptionResponseNoPaging is the typed data model for the webhooks_collection_response_subscription_response_no_paging entity.
type WebhooksCollectionResponseSubscriptionResponseNoPaging struct {
	ActionOverrides *map[string]any `json:"actionOverrides,omitempty"`
	Actions []any `json:"actions"`
	AppId int `json:"appId"`
	AssociatedObjectTypeIds *[]any `json:"associatedObjectTypeIds,omitempty"`
	CreatedAt string `json:"createdAt"`
	CreatedBy *int `json:"createdBy,omitempty"`
	DeletedAt *string `json:"deletedAt,omitempty"`
	Id int `json:"id"`
	ListIds *[]any `json:"listIds,omitempty"`
	ObjectIds *[]any `json:"objectIds,omitempty"`
	ObjectTypeId string `json:"objectTypeId"`
	PortalId *int `json:"portalId,omitempty"`
	Properties *[]any `json:"properties,omitempty"`
	SubscriptionType string `json:"subscriptionType"`
	UpdatedAt string `json:"updatedAt"`
}

// WebhooksCollectionResponseSubscriptionResponseNoPagingListMatch is the typed request payload for WebhooksCollectionResponseSubscriptionResponseNoPaging.ListTyped.
type WebhooksCollectionResponseSubscriptionResponseNoPagingListMatch struct {
	ActionOverrides *map[string]any `json:"actionOverrides,omitempty"`
	Actions *[]any `json:"actions,omitempty"`
	AppId *int `json:"appId,omitempty"`
	AssociatedObjectTypeIds *[]any `json:"associatedObjectTypeIds,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CreatedBy *int `json:"createdBy,omitempty"`
	DeletedAt *string `json:"deletedAt,omitempty"`
	Id *int `json:"id,omitempty"`
	ListIds *[]any `json:"listIds,omitempty"`
	ObjectIds *[]any `json:"objectIds,omitempty"`
	ObjectTypeId *string `json:"objectTypeId,omitempty"`
	PortalId *int `json:"portalId,omitempty"`
	Properties *[]any `json:"properties,omitempty"`
	SubscriptionType *string `json:"subscriptionType,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// WebhooksCrmObjectSnapshotBatch is the typed data model for the webhooks_crm_object_snapshot_batch entity.
type WebhooksCrmObjectSnapshotBatch struct {
	SnapshotRequests []any `json:"snapshotRequests"`
	SnapshotResponses []any `json:"snapshotResponses"`
}

// WebhooksCrmObjectSnapshotBatchCreateData is the typed request payload for WebhooksCrmObjectSnapshotBatch.CreateTyped.
type WebhooksCrmObjectSnapshotBatchCreateData struct {
	SnapshotRequests []any `json:"snapshotRequests"`
	SnapshotResponses []any `json:"snapshotResponses"`
}

// WebhooksFilter is the typed data model for the webhooks_filter entity.
type WebhooksFilter struct {
	Conditions []any `json:"conditions"`
	CreatedAt int `json:"createdAt"`
	Filter map[string]any `json:"filter"`
	FilterId int `json:"filterId"`
	Id int `json:"id"`
	SubscriptionId int `json:"subscriptionId"`
}

// WebhooksFilterLoadMatch is the typed request payload for WebhooksFilter.LoadTyped.
type WebhooksFilterLoadMatch struct {
	Id int `json:"id"`
}

// WebhooksFilterCreateData is the typed request payload for WebhooksFilter.CreateTyped.
type WebhooksFilterCreateData struct {
	Conditions []any `json:"conditions"`
	CreatedAt int `json:"createdAt"`
	Filter map[string]any `json:"filter"`
	FilterId int `json:"filterId"`
	Id int `json:"id"`
	SubscriptionId int `json:"subscriptionId"`
}

// WebhooksSetting is the typed data model for the webhooks_setting entity.
type WebhooksSetting struct {
	MaxConcurrentRequests int `json:"maxConcurrentRequests"`
	TargetUrl string `json:"targetUrl"`
	Throttling map[string]any `json:"throttling"`
}

// WebhooksSettingLoadMatch is the typed request payload for WebhooksSetting.LoadTyped.
type WebhooksSettingLoadMatch struct {
	AppId int `json:"app_id"`
}

// WebhooksSettingUpdateData is the typed request payload for WebhooksSetting.UpdateTyped.
type WebhooksSettingUpdateData struct {
	AppId int `json:"app_id"`
	MaxConcurrentRequests *int `json:"maxConcurrentRequests,omitempty"`
	TargetUrl *string `json:"targetUrl,omitempty"`
	Throttling *map[string]any `json:"throttling,omitempty"`
}

// WebhooksSnapshotStatus is the typed data model for the webhooks_snapshot_status entity.
type WebhooksSnapshotStatus struct {
	CompletedAt *int `json:"completedAt,omitempty"`
	ErrorCode *string `json:"errorCode,omitempty"`
	Id string `json:"id"`
	InitiatedAt int `json:"initiatedAt"`
	Message *string `json:"message,omitempty"`
	Status string `json:"status"`
}

// WebhooksSnapshotStatusLoadMatch is the typed request payload for WebhooksSnapshotStatus.LoadTyped.
type WebhooksSnapshotStatusLoadMatch struct {
	Id string `json:"id"`
}

// WebhooksSubscription is the typed data model for the webhooks_subscription entity.
type WebhooksSubscription struct {
	Active bool `json:"active"`
	CreatedAt string `json:"createdAt"`
	EventType string `json:"eventType"`
	EventTypeName *string `json:"eventTypeName,omitempty"`
	Id string `json:"id"`
	ObjectTypeId *string `json:"objectTypeId,omitempty"`
	PropertyName *string `json:"propertyName,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// WebhooksSubscriptionLoadMatch is the typed request payload for WebhooksSubscription.LoadTyped.
type WebhooksSubscriptionLoadMatch struct {
	AppId int `json:"app_id"`
	Id int `json:"id"`
}

// WebhooksSubscriptionCreateData is the typed request payload for WebhooksSubscription.CreateTyped.
type WebhooksSubscriptionCreateData struct {
	AppId int `json:"app_id"`
	Active bool `json:"active"`
	CreatedAt string `json:"createdAt"`
	EventType string `json:"eventType"`
	EventTypeName *string `json:"eventTypeName,omitempty"`
	Id string `json:"id"`
	ObjectTypeId *string `json:"objectTypeId,omitempty"`
	PropertyName *string `json:"propertyName,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// WebhooksSubscriptionUpdateData is the typed request payload for WebhooksSubscription.UpdateTyped.
type WebhooksSubscriptionUpdateData struct {
	AppId int `json:"app_id"`
	Id int `json:"id"`
	Active *bool `json:"active,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	EventType *string `json:"eventType,omitempty"`
	EventTypeName *string `json:"eventTypeName,omitempty"`
	ObjectTypeId *string `json:"objectTypeId,omitempty"`
	PropertyName *string `json:"propertyName,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// WebhooksSubscriptionList is the typed data model for the webhooks_subscription_list entity.
type WebhooksSubscriptionList struct {
	Active bool `json:"active"`
	CreatedAt string `json:"createdAt"`
	EventType string `json:"eventType"`
	EventTypeName *string `json:"eventTypeName,omitempty"`
	Id string `json:"id"`
	ObjectTypeId *string `json:"objectTypeId,omitempty"`
	PropertyName *string `json:"propertyName,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// WebhooksSubscriptionListListMatch is the typed request payload for WebhooksSubscriptionList.ListTyped.
type WebhooksSubscriptionListListMatch struct {
	AppId int `json:"app_id"`
}

// WebhooksSubscriptionResponse1 is the typed data model for the webhooks_subscription_response_1 entity.
type WebhooksSubscriptionResponse1 struct {
	ActionOverrides *map[string]any `json:"actionOverrides,omitempty"`
	Actions []any `json:"actions"`
	AppId int `json:"appId"`
	AssociatedObjectTypeIds *[]any `json:"associatedObjectTypeIds,omitempty"`
	CreatedAt string `json:"createdAt"`
	CreatedBy *int `json:"createdBy,omitempty"`
	DeletedAt *string `json:"deletedAt,omitempty"`
	Id int `json:"id"`
	ListIds *[]any `json:"listIds,omitempty"`
	ObjectIds *[]any `json:"objectIds,omitempty"`
	ObjectTypeId string `json:"objectTypeId"`
	PortalId *int `json:"portalId,omitempty"`
	Properties *[]any `json:"properties,omitempty"`
	SubscriptionType string `json:"subscriptionType"`
	UpdatedAt string `json:"updatedAt"`
}

// WebhooksSubscriptionResponse1LoadMatch is the typed request payload for WebhooksSubscriptionResponse1.LoadTyped.
type WebhooksSubscriptionResponse1LoadMatch struct {
	SubscriptionId int `json:"subscription_id"`
}

// WebhooksSubscriptionResponse1CreateData is the typed request payload for WebhooksSubscriptionResponse1.CreateTyped.
type WebhooksSubscriptionResponse1CreateData struct {
	ActionOverrides *map[string]any `json:"actionOverrides,omitempty"`
	Actions []any `json:"actions"`
	AppId int `json:"appId"`
	AssociatedObjectTypeIds *[]any `json:"associatedObjectTypeIds,omitempty"`
	CreatedAt string `json:"createdAt"`
	CreatedBy *int `json:"createdBy,omitempty"`
	DeletedAt *string `json:"deletedAt,omitempty"`
	Id int `json:"id"`
	ListIds *[]any `json:"listIds,omitempty"`
	ObjectIds *[]any `json:"objectIds,omitempty"`
	ObjectTypeId string `json:"objectTypeId"`
	PortalId *int `json:"portalId,omitempty"`
	Properties *[]any `json:"properties,omitempty"`
	SubscriptionType string `json:"subscriptionType"`
	UpdatedAt string `json:"updatedAt"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
