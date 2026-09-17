import { HubspotWebhooksEntityBase } from '../HubspotWebhooksEntityBase';
import type { HubspotWebhooksSDK } from '../HubspotWebhooksSDK';
import type { Control } from '../types';
import type { WebhooksFilter, WebhooksFilterLoadMatch, WebhooksFilterCreateData } from '../HubspotWebhooksTypes';
declare class WebhooksFilterEntity extends HubspotWebhooksEntityBase<WebhooksFilter> {
    constructor(client: HubspotWebhooksSDK, entopts: any);
    make(this: WebhooksFilterEntity): WebhooksFilterEntity;
    load(this: any, reqmatch?: WebhooksFilterLoadMatch, ctrl?: Control): Promise<WebhooksFilterEntity>;
    create(this: any, reqdata?: WebhooksFilterCreateData, ctrl?: Control): Promise<WebhooksFilterEntity>;
}
export { WebhooksFilterEntity };
