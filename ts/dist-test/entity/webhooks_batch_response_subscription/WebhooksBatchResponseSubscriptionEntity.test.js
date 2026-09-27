"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('WebhooksBatchResponseSubscriptionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_WEBHOOKS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_WEBHOOKS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotWebhooksSDK.test();
        const ent = testsdk.WebhooksBatchResponseSubscription();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_WEBHOOKS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'webhooks_batch_response_subscription.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "completedAt": { "a": true, "fo": "date-time", "h": "Completed At", "n": "completedAt", "r": true, "sh": "The date and time when the batch operation was completed, in ISO 8601 format.", "t": "`$STRING`", "key$": "completedAt", "index$": 0 }, "inputs": { "a": true, "h": "Inputs", "n": "inputs", "r": true, "sh": "An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated.", "t": "`$ARRAY`", "key$": "inputs", "index$": 1 }, "links": { "a": true, "h": "Links", "n": "links", "r": false, "sh": "A map of link names to associated URIs providing additional information about the batch operation.", "t": "`$OBJECT`", "key$": "links", "index$": 2 }, "requestedAt": { "a": true, "fo": "date-time", "h": "Requested At", "n": "requestedAt", "r": false, "sh": "The date and time when the batch operation was requested, in ISO 8601 format.", "t": "`$STRING`", "key$": "requestedAt", "index$": 3 }, "results": { "a": true, "h": "Results", "n": "results", "r": true, "sh": "An array containing the results of the batch operation, with each item representing an individual subscription response.", "t": "`$ARRAY`", "key$": "results", "index$": 4 }, "startedAt": { "a": true, "fo": "date-time", "h": "Started At", "n": "startedAt", "r": true, "sh": "The date and time when the batch operation started, in ISO 8601 format.", "t": "`$STRING`", "key$": "startedAt", "index$": 5 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "The current status of the batch operation.", "t": "`$STRING`", "key$": "status", "index$": 6 } }, "name": "webhooks_batch_response_subscription", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /app-webhooks/2026-09/{appId}/subscriptions/batch/update", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "app_id", "or": "app_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/app-webhooks/2026-09/{appId}/subscriptions/batch/update", "q": { "exist": ["app_id"] }, "r": { "param": { "appId": "app_id" } }, "s": [{ "lit": "app-webhooks" }, { "lit": "2026-09" }, { "var": "app_id" }, { "lit": "subscriptions" }, { "lit": "batch" }, { "lit": "update" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "webhooks_batch_response_subscription", "name__orig": "webhooks_batch_response_subscription", "Name": "WebhooksBatchResponseSubscription", "name_": "webhooks_batch_response_subscription", "name-": "webhooks-batch-response-subscription", "NAME": "WEBHOOKS_BATCH_RESPONSE_SUBSCRIPTION", "index$": 2 }, { "active": true, "entity": "webhooks_batch_response_subscription", "key$": "BasicWebhooksBatchResponseSubscriptionFlow", "kind": "basic", "name": "BasicWebhooksBatchResponseSubscriptionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "webhooks_batch_response_subscription_ref01" }, "m": { "app_id": "app01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'WebhooksBatchResponseSubscription', { "POST /app-webhooks/2026-09/{appId}/subscriptions/batch/update": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "required": ["inputs"], "type": "object", "properties": { "inputs": { "type": "array", "description": "An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated. This property is required.", "example": null, "items": { "required": ["active", "id"], "type": "object", "properties": { "active": { "type": "boolean", "description": "A boolean indicating whether the subscription is active.", "example": null }, "id": { "type": "integer", "description": "The unique identifier for the subscription. It is an integer.", "format": "int32", "example": null } }, "example": null, "x-ref": "#/components/schemas/WebhooksSubscriptionBatchUpdateRequest" }, "key$": "inputs" } }, "example": null, "x-ref": "#/components/schemas/WebhooksBatchInputSubscriptionBatchUpdateRequest", "index$": 1 }, "example": null } }, "required": true }, "parameters": [{ "name": "appId", "in": "path", "description": "The unique identifier of the app for which the subscriptions are being updated.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int32", "example": null }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const webhooks_batch_response_subscription_ref01_ent = client.WebhooksBatchResponseSubscription();
        let webhooks_batch_response_subscription_ref01_data = setup.data.new.webhooks_batch_response_subscription['webhooks_batch_response_subscription_ref01'];
        webhooks_batch_response_subscription_ref01_data['app_id'] = setup.idmap['app01'];
        webhooks_batch_response_subscription_ref01_data = (await webhooks_batch_response_subscription_ref01_ent.create(webhooks_batch_response_subscription_ref01_data)).data();
        (0, node_assert_1.default)(null != webhooks_batch_response_subscription_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/webhooks_batch_response_subscription/WebhooksBatchResponseSubscriptionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotWebhooksSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['webhooks_batch_response_subscription01', 'webhooks_batch_response_subscription02', 'webhooks_batch_response_subscription03', 'app01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_BATCH_RESPONSE_SUBSCRIPTION_ENTID': idmap,
        'HUBSPOT_WEBHOOKS_TEST_LIVE': 'FALSE',
        'HUBSPOT_WEBHOOKS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_WEBHOOKS_APIKEY': '',
    });
    idmap = env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_BATCH_RESPONSE_SUBSCRIPTION_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_WEBHOOKS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_BATCH_RESPONSE_SUBSCRIPTION_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.HubspotWebhooksSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.HUBSPOT_WEBHOOKS_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.HUBSPOT_WEBHOOKS_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=WebhooksBatchResponseSubscriptionEntity.test.js.map