import { HubspotWebhooksEntityBase } from '../HubspotWebhooksEntityBase';
import type { HubspotWebhooksSDK } from '../HubspotWebhooksSDK';
import type { Control } from '../types';
import type { WebhooksBatchResponseSubscription, WebhooksBatchResponseSubscriptionCreateData } from '../HubspotWebhooksTypes';
declare class WebhooksBatchResponseSubscriptionEntity extends HubspotWebhooksEntityBase<WebhooksBatchResponseSubscription> {
    constructor(client: HubspotWebhooksSDK, entopts: any);
    make(this: WebhooksBatchResponseSubscriptionEntity): WebhooksBatchResponseSubscriptionEntity;
    create(this: any, reqdata?: WebhooksBatchResponseSubscriptionCreateData, ctrl?: Control): Promise<WebhooksBatchResponseSubscriptionEntity>;
}
export { WebhooksBatchResponseSubscriptionEntity };
