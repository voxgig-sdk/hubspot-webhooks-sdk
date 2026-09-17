import { HubspotWebhooksEntityBase } from '../HubspotWebhooksEntityBase';
import type { HubspotWebhooksSDK } from '../HubspotWebhooksSDK';
import type { Control } from '../types';
import type { Basic, BasicLoadMatch, BasicRemoveMatch } from '../HubspotWebhooksTypes';
declare class BasicEntity extends HubspotWebhooksEntityBase<Basic> {
    constructor(client: HubspotWebhooksSDK, entopts: any);
    make(this: BasicEntity): BasicEntity;
    load(this: any, reqmatch?: BasicLoadMatch, ctrl?: Control): Promise<BasicEntity>;
    remove(this: any, reqmatch?: BasicRemoveMatch, ctrl?: Control): Promise<BasicEntity>;
}
export { BasicEntity };
