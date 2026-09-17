package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewDebugFeatureFunc func() Feature

var NewIdempotencyFeatureFunc func() Feature

var NewMetricsFeatureFunc func() Feature

var NewPagingFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewBasicEntityFunc func(client *HubspotWebhooksSDK, entopts map[string]any) HubspotWebhooksEntity

var NewWebhooksBatchResponseJournalFetchEntityFunc func(client *HubspotWebhooksSDK, entopts map[string]any) HubspotWebhooksEntity

var NewWebhooksBatchResponseSubscriptionEntityFunc func(client *HubspotWebhooksSDK, entopts map[string]any) HubspotWebhooksEntity

var NewWebhooksCollectionResponseSubscriptionResponseNoPagingEntityFunc func(client *HubspotWebhooksSDK, entopts map[string]any) HubspotWebhooksEntity

var NewWebhooksCrmObjectSnapshotBatchEntityFunc func(client *HubspotWebhooksSDK, entopts map[string]any) HubspotWebhooksEntity

var NewWebhooksFilterEntityFunc func(client *HubspotWebhooksSDK, entopts map[string]any) HubspotWebhooksEntity

var NewWebhooksSettingEntityFunc func(client *HubspotWebhooksSDK, entopts map[string]any) HubspotWebhooksEntity

var NewWebhooksSnapshotStatusEntityFunc func(client *HubspotWebhooksSDK, entopts map[string]any) HubspotWebhooksEntity

var NewWebhooksSubscriptionEntityFunc func(client *HubspotWebhooksSDK, entopts map[string]any) HubspotWebhooksEntity

var NewWebhooksSubscriptionListEntityFunc func(client *HubspotWebhooksSDK, entopts map[string]any) HubspotWebhooksEntity

var NewWebhooksSubscriptionResponse1EntityFunc func(client *HubspotWebhooksSDK, entopts map[string]any) HubspotWebhooksEntity

