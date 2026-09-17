package voxgighubspotwebhookssdk

import (
	"github.com/voxgig-sdk/hubspot-webhooks-sdk/go/core"
	"github.com/voxgig-sdk/hubspot-webhooks-sdk/go/entity"
	"github.com/voxgig-sdk/hubspot-webhooks-sdk/go/feature"
	_ "github.com/voxgig-sdk/hubspot-webhooks-sdk/go/utility"
)

// Type aliases preserve external API.
type HubspotWebhooksSDK = core.HubspotWebhooksSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type HubspotWebhooksEntity = core.HubspotWebhooksEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type HubspotWebhooksError = core.HubspotWebhooksError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewBasicEntityFunc = func(client *core.HubspotWebhooksSDK, entopts map[string]any) core.HubspotWebhooksEntity {
		return entity.NewBasicEntity(client, entopts)
	}
	core.NewWebhooksBatchResponseJournalFetchEntityFunc = func(client *core.HubspotWebhooksSDK, entopts map[string]any) core.HubspotWebhooksEntity {
		return entity.NewWebhooksBatchResponseJournalFetchEntity(client, entopts)
	}
	core.NewWebhooksBatchResponseSubscriptionEntityFunc = func(client *core.HubspotWebhooksSDK, entopts map[string]any) core.HubspotWebhooksEntity {
		return entity.NewWebhooksBatchResponseSubscriptionEntity(client, entopts)
	}
	core.NewWebhooksCollectionResponseSubscriptionResponseNoPagingEntityFunc = func(client *core.HubspotWebhooksSDK, entopts map[string]any) core.HubspotWebhooksEntity {
		return entity.NewWebhooksCollectionResponseSubscriptionResponseNoPagingEntity(client, entopts)
	}
	core.NewWebhooksCrmObjectSnapshotBatchEntityFunc = func(client *core.HubspotWebhooksSDK, entopts map[string]any) core.HubspotWebhooksEntity {
		return entity.NewWebhooksCrmObjectSnapshotBatchEntity(client, entopts)
	}
	core.NewWebhooksFilterEntityFunc = func(client *core.HubspotWebhooksSDK, entopts map[string]any) core.HubspotWebhooksEntity {
		return entity.NewWebhooksFilterEntity(client, entopts)
	}
	core.NewWebhooksSettingEntityFunc = func(client *core.HubspotWebhooksSDK, entopts map[string]any) core.HubspotWebhooksEntity {
		return entity.NewWebhooksSettingEntity(client, entopts)
	}
	core.NewWebhooksSnapshotStatusEntityFunc = func(client *core.HubspotWebhooksSDK, entopts map[string]any) core.HubspotWebhooksEntity {
		return entity.NewWebhooksSnapshotStatusEntity(client, entopts)
	}
	core.NewWebhooksSubscriptionEntityFunc = func(client *core.HubspotWebhooksSDK, entopts map[string]any) core.HubspotWebhooksEntity {
		return entity.NewWebhooksSubscriptionEntity(client, entopts)
	}
	core.NewWebhooksSubscriptionListEntityFunc = func(client *core.HubspotWebhooksSDK, entopts map[string]any) core.HubspotWebhooksEntity {
		return entity.NewWebhooksSubscriptionListEntity(client, entopts)
	}
	core.NewWebhooksSubscriptionResponse1EntityFunc = func(client *core.HubspotWebhooksSDK, entopts map[string]any) core.HubspotWebhooksEntity {
		return entity.NewWebhooksSubscriptionResponse1Entity(client, entopts)
	}
}

// Constructor re-exports.
var NewHubspotWebhooksSDK = core.NewHubspotWebhooksSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewHubspotWebhooksSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *HubspotWebhooksSDK  { return NewHubspotWebhooksSDK(nil) }
func Test() *HubspotWebhooksSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
