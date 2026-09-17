import { BasicEntity } from './entity/BasicEntity';
import { WebhooksBatchResponseJournalFetchEntity } from './entity/WebhooksBatchResponseJournalFetchEntity';
import { WebhooksBatchResponseSubscriptionEntity } from './entity/WebhooksBatchResponseSubscriptionEntity';
import { WebhooksCollectionResponseSubscriptionResponseNoPagingEntity } from './entity/WebhooksCollectionResponseSubscriptionResponseNoPagingEntity';
import { WebhooksCrmObjectSnapshotBatchEntity } from './entity/WebhooksCrmObjectSnapshotBatchEntity';
import { WebhooksFilterEntity } from './entity/WebhooksFilterEntity';
import { WebhooksSettingEntity } from './entity/WebhooksSettingEntity';
import { WebhooksSnapshotStatusEntity } from './entity/WebhooksSnapshotStatusEntity';
import { WebhooksSubscriptionEntity } from './entity/WebhooksSubscriptionEntity';
import { WebhooksSubscriptionListEntity } from './entity/WebhooksSubscriptionListEntity';
import { WebhooksSubscriptionResponse1Entity } from './entity/WebhooksSubscriptionResponse1Entity';
export type * from './HubspotWebhooksTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { HubspotWebhooksEntityBase } from './HubspotWebhooksEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class HubspotWebhooksSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Basic(entopts?: Record<string, any>): BasicEntity;
    WebhooksBatchResponseJournalFetch(entopts?: Record<string, any>): WebhooksBatchResponseJournalFetchEntity;
    WebhooksBatchResponseSubscription(entopts?: Record<string, any>): WebhooksBatchResponseSubscriptionEntity;
    WebhooksCollectionResponseSubscriptionResponseNoPaging(entopts?: Record<string, any>): WebhooksCollectionResponseSubscriptionResponseNoPagingEntity;
    WebhooksCrmObjectSnapshotBatch(entopts?: Record<string, any>): WebhooksCrmObjectSnapshotBatchEntity;
    WebhooksFilter(entopts?: Record<string, any>): WebhooksFilterEntity;
    WebhooksSetting(entopts?: Record<string, any>): WebhooksSettingEntity;
    WebhooksSnapshotStatus(entopts?: Record<string, any>): WebhooksSnapshotStatusEntity;
    WebhooksSubscription(entopts?: Record<string, any>): WebhooksSubscriptionEntity;
    WebhooksSubscriptionList(entopts?: Record<string, any>): WebhooksSubscriptionListEntity;
    WebhooksSubscriptionResponse1(entopts?: Record<string, any>): WebhooksSubscriptionResponse1Entity;
    static test(testoptsarg?: any, sdkoptsarg?: any): HubspotWebhooksSDK;
    tester(testopts?: any, sdkopts?: any): HubspotWebhooksSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof HubspotWebhooksSDK;
export { stdutil, config, BaseFeature, HubspotWebhooksEntityBase, HubspotWebhooksSDK, SDK, };
