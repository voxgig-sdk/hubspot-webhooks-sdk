import { Context } from './Context';
declare class HubspotWebhooksError extends Error {
    isHubspotWebhooksError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { HubspotWebhooksError };
