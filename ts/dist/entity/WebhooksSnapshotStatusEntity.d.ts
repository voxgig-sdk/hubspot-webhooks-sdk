import { HubspotWebhooksEntityBase } from '../HubspotWebhooksEntityBase';
import type { HubspotWebhooksSDK } from '../HubspotWebhooksSDK';
import type { Control } from '../types';
import type { WebhooksSnapshotStatus, WebhooksSnapshotStatusLoadMatch } from '../HubspotWebhooksTypes';
declare class WebhooksSnapshotStatusEntity extends HubspotWebhooksEntityBase<WebhooksSnapshotStatus> {
    constructor(client: HubspotWebhooksSDK, entopts: any);
    make(this: WebhooksSnapshotStatusEntity): WebhooksSnapshotStatusEntity;
    load(this: any, reqmatch?: WebhooksSnapshotStatusLoadMatch, ctrl?: Control): Promise<WebhooksSnapshotStatusEntity>;
}
export { WebhooksSnapshotStatusEntity };
