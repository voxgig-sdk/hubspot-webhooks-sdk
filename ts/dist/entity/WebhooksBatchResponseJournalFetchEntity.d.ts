import { HubspotWebhooksEntityBase } from '../HubspotWebhooksEntityBase';
import type { HubspotWebhooksSDK } from '../HubspotWebhooksSDK';
import type { Control } from '../types';
import type { WebhooksBatchResponseJournalFetch, WebhooksBatchResponseJournalFetchLoadMatch, WebhooksBatchResponseJournalFetchCreateData } from '../HubspotWebhooksTypes';
declare class WebhooksBatchResponseJournalFetchEntity extends HubspotWebhooksEntityBase<WebhooksBatchResponseJournalFetch> {
    constructor(client: HubspotWebhooksSDK, entopts: any);
    make(this: WebhooksBatchResponseJournalFetchEntity): WebhooksBatchResponseJournalFetchEntity;
    load(this: any, reqmatch?: WebhooksBatchResponseJournalFetchLoadMatch, ctrl?: Control): Promise<WebhooksBatchResponseJournalFetchEntity>;
    create(this: any, reqdata?: WebhooksBatchResponseJournalFetchCreateData, ctrl?: Control): Promise<WebhooksBatchResponseJournalFetchEntity>;
}
export { WebhooksBatchResponseJournalFetchEntity };
