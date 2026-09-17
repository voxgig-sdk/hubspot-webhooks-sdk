import { HubspotWebhooksEntityBase } from '../HubspotWebhooksEntityBase';
import type { HubspotWebhooksSDK } from '../HubspotWebhooksSDK';
import type { Control } from '../types';
import type { WebhooksSubscription, WebhooksSubscriptionLoadMatch, WebhooksSubscriptionCreateData, WebhooksSubscriptionUpdateData } from '../HubspotWebhooksTypes';
declare class WebhooksSubscriptionEntity extends HubspotWebhooksEntityBase<WebhooksSubscription> {
    constructor(client: HubspotWebhooksSDK, entopts: any);
    make(this: WebhooksSubscriptionEntity): WebhooksSubscriptionEntity;
    load(this: any, reqmatch?: WebhooksSubscriptionLoadMatch, ctrl?: Control): Promise<WebhooksSubscriptionEntity>;
    create(this: any, reqdata?: WebhooksSubscriptionCreateData, ctrl?: Control): Promise<WebhooksSubscriptionEntity>;
    update(this: any, reqdata?: WebhooksSubscriptionUpdateData, ctrl?: Control): Promise<WebhooksSubscriptionEntity>;
}
export { WebhooksSubscriptionEntity };
