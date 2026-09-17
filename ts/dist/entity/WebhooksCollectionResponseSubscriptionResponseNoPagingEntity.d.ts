import { HubspotWebhooksEntityBase } from '../HubspotWebhooksEntityBase';
import type { HubspotWebhooksSDK } from '../HubspotWebhooksSDK';
import type { Control } from '../types';
import type { WebhooksCollectionResponseSubscriptionResponseNoPaging, WebhooksCollectionResponseSubscriptionResponseNoPagingListMatch } from '../HubspotWebhooksTypes';
declare class WebhooksCollectionResponseSubscriptionResponseNoPagingEntity extends HubspotWebhooksEntityBase<WebhooksCollectionResponseSubscriptionResponseNoPaging> {
    constructor(client: HubspotWebhooksSDK, entopts: any);
    make(this: WebhooksCollectionResponseSubscriptionResponseNoPagingEntity): WebhooksCollectionResponseSubscriptionResponseNoPagingEntity;
    list(this: any, reqmatch?: WebhooksCollectionResponseSubscriptionResponseNoPagingListMatch, ctrl?: Control): Promise<WebhooksCollectionResponseSubscriptionResponseNoPagingEntity[]>;
}
export { WebhooksCollectionResponseSubscriptionResponseNoPagingEntity };
