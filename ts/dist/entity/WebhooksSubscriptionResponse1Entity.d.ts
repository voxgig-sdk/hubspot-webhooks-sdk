import { HubspotWebhooksEntityBase } from '../HubspotWebhooksEntityBase';
import type { HubspotWebhooksSDK } from '../HubspotWebhooksSDK';
import type { Control } from '../types';
import type { WebhooksSubscriptionResponse1, WebhooksSubscriptionResponse1LoadMatch, WebhooksSubscriptionResponse1CreateData } from '../HubspotWebhooksTypes';
declare class WebhooksSubscriptionResponse1Entity extends HubspotWebhooksEntityBase<WebhooksSubscriptionResponse1> {
    constructor(client: HubspotWebhooksSDK, entopts: any);
    make(this: WebhooksSubscriptionResponse1Entity): WebhooksSubscriptionResponse1Entity;
    load(this: any, reqmatch?: WebhooksSubscriptionResponse1LoadMatch, ctrl?: Control): Promise<WebhooksSubscriptionResponse1Entity>;
    create(this: any, reqdata?: WebhooksSubscriptionResponse1CreateData, ctrl?: Control): Promise<WebhooksSubscriptionResponse1Entity>;
}
export { WebhooksSubscriptionResponse1Entity };
