import { HubspotWebhooksEntityBase } from '../HubspotWebhooksEntityBase';
import type { HubspotWebhooksSDK } from '../HubspotWebhooksSDK';
import type { Control } from '../types';
import type { WebhooksSetting, WebhooksSettingLoadMatch, WebhooksSettingUpdateData } from '../HubspotWebhooksTypes';
declare class WebhooksSettingEntity extends HubspotWebhooksEntityBase<WebhooksSetting> {
    constructor(client: HubspotWebhooksSDK, entopts: any);
    make(this: WebhooksSettingEntity): WebhooksSettingEntity;
    load(this: any, reqmatch?: WebhooksSettingLoadMatch, ctrl?: Control): Promise<WebhooksSettingEntity>;
    update(this: any, reqdata?: WebhooksSettingUpdateData, ctrl?: Control): Promise<WebhooksSettingEntity>;
}
export { WebhooksSettingEntity };
