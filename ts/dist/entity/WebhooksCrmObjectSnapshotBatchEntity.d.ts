import { HubspotWebhooksEntityBase } from '../HubspotWebhooksEntityBase';
import type { HubspotWebhooksSDK } from '../HubspotWebhooksSDK';
import type { Control } from '../types';
import type { WebhooksCrmObjectSnapshotBatch, WebhooksCrmObjectSnapshotBatchCreateData } from '../HubspotWebhooksTypes';
declare class WebhooksCrmObjectSnapshotBatchEntity extends HubspotWebhooksEntityBase<WebhooksCrmObjectSnapshotBatch> {
    constructor(client: HubspotWebhooksSDK, entopts: any);
    make(this: WebhooksCrmObjectSnapshotBatchEntity): WebhooksCrmObjectSnapshotBatchEntity;
    create(this: any, reqdata?: WebhooksCrmObjectSnapshotBatchCreateData, ctrl?: Control): Promise<WebhooksCrmObjectSnapshotBatchEntity>;
}
export { WebhooksCrmObjectSnapshotBatchEntity };
