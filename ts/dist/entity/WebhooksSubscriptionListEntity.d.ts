import { HubspotWebhooksEntityBase } from '../HubspotWebhooksEntityBase';
import type { HubspotWebhooksSDK } from '../HubspotWebhooksSDK';
import type { Control } from '../types';
import type { WebhooksSubscriptionList, WebhooksSubscriptionListListMatch } from '../HubspotWebhooksTypes';
declare class WebhooksSubscriptionListEntity extends HubspotWebhooksEntityBase<WebhooksSubscriptionList> {
    constructor(client: HubspotWebhooksSDK, entopts: any);
    make(this: WebhooksSubscriptionListEntity): WebhooksSubscriptionListEntity;
    list(this: any, reqmatch?: WebhooksSubscriptionListListMatch, ctrl?: Control): Promise<WebhooksSubscriptionListEntity[]>;
}
export { WebhooksSubscriptionListEntity };
