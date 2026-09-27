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
(0, node_test_1.describe)('WebhooksFilterEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_WEBHOOKS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_WEBHOOKS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotWebhooksSDK.test();
        const ent = testsdk.WebhooksFilter();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_WEBHOOKS_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'webhooks_filter.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "conditions": { "a": true, "h": "Conditions", "n": "conditions", "r": true, "sh": "An array of conditions that define the criteria for the filter.", "t": "`$ARRAY`", "key$": "conditions", "index$": 0 }, "createdAt": { "a": true, "fo": "int64", "h": "Created At", "n": "createdAt", "r": true, "sh": "A Unix timestamp in milliseconds indicating when the filter was created.", "t": "`$INTEGER`", "key$": "createdAt", "index$": 1 }, "filter": { "a": true, "h": "Filter", "n": "filter", "r": true, "sh": "Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against.", "t": "`$OBJECT`", "key$": "filter", "index$": 2 }, "filterId": { "a": true, "fo": "int64", "h": "Filter Id", "n": "filterId", "r": true, "sh": "The unique identifier for the created filter.", "t": "`$INTEGER`", "key$": "filterId", "index$": 3 }, "id": { "a": true, "fo": "int64", "h": "Id", "n": "id", "r": true, "sh": "The unique identifier for the filter.", "t": "`$INTEGER`", "key$": "id", "index$": 4 }, "subscriptionId": { "a": true, "fo": "int64", "h": "Subscription Id", "n": "subscriptionId", "r": true, "sh": "The unique identifier of the subscription to which the filter will be applied.", "t": "`$INTEGER`", "key$": "subscriptionId", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "webhooks_filter", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /webhooks-journal/subscriptions/2026-09/filters", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/webhooks-journal/subscriptions/2026-09/filters", "q": {}, "r": {}, "s": [{ "lit": "webhooks-journal" }, { "lit": "subscriptions" }, { "lit": "2026-09" }, { "lit": "filters" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /webhooks-journal/subscriptions/2026-09/filters/{filterId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "id", "or": "filter_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/webhooks-journal/subscriptions/2026-09/filters/{filterId}", "q": { "exist": ["id"] }, "r": { "param": { "filterId": "id" } }, "s": [{ "lit": "webhooks-journal" }, { "lit": "subscriptions" }, { "lit": "2026-09" }, { "lit": "filters" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.filter`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "subscription_id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}", "q": { "exist": ["subscription_id"] }, "r": { "param": { "subscriptionId": "subscription_id" } }, "s": [{ "lit": "webhooks-journal" }, { "lit": "subscriptions" }, { "lit": "2026-09" }, { "lit": "filters" }, { "lit": "subscription" }, { "var": "subscription_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "webhooks_filter", "name__orig": "webhooks_filter", "Name": "WebhooksFilter", "name_": "webhooks_filter", "name-": "webhooks-filter", "NAME": "WEBHOOKS_FILTER", "index$": 4 }, { "active": true, "entity": "webhooks_filter", "key$": "BasicWebhooksFilterFlow", "kind": "basic", "name": "BasicWebhooksFilterFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "webhooks_filter_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "webhooks_filter_ref01", "srcdatavar": "webhooks_filter_ref01_data", "suffix": "_dt0" }, "m": { "id": "webhooks_filter01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-webhooks_filter_ref01" } }], "index$": 1 }] }, 'WebhooksFilter', { "POST /webhooks-journal/subscriptions/2026-09/filters": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "required": ["filter", "subscriptionId"], "type": "object", "properties": { "filter": { "required": ["conditions"], "type": "object", "properties": { "conditions": { "type": "array", "description": "An array of conditions that define the criteria for the filter. Each condition specifies a property, an operator, and optionally a value or values.", "example": null, "items": { "required": [], "type": "object", "properties": {}, "example": null, "x-ref": "#/components/schemas/WebhooksCondition" }, "key$": "conditions" } }, "description": "Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. ", "example": null, "x-ref": "#/components/schemas/WebhooksFilter", "key$": "filter" }, "subscriptionId": { "type": "integer", "description": "The unique identifier of the subscription to which the filter will be applied. It is an integer formatted as int64.", "format": "int64", "example": null, "key$": "subscriptionId" } }, "example": null, "x-ref": "#/components/schemas/WebhooksFilterCreateRequest", "index$": 1 }, "example": null } }, "required": true }, "parameters": [] }, "GET /webhooks-journal/subscriptions/2026-09/filters/{filterId}": { "protocol": "http", "parameters": [{ "name": "filterId", "in": "path", "description": "The unique identifier of the filter to retrieve.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 0 }] }, "GET /webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}": { "protocol": "http", "parameters": [{ "name": "subscriptionId", "in": "path", "description": "The unique identifier of the subscription for which to retrieve filters.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const webhooks_filter_ref01_ent = client.WebhooksFilter();
        let webhooks_filter_ref01_data = setup.data.new.webhooks_filter['webhooks_filter_ref01'];
        webhooks_filter_ref01_data = (await webhooks_filter_ref01_ent.create(webhooks_filter_ref01_data)).data();
        (0, node_assert_1.default)(null != webhooks_filter_ref01_data.id);
        // LOAD
        const webhooks_filter_ref01_match_dt0 = {};
        webhooks_filter_ref01_match_dt0.id = webhooks_filter_ref01_data.id;
        const webhooks_filter_ref01_data_dt0 = (await webhooks_filter_ref01_ent.load(webhooks_filter_ref01_match_dt0)).data();
        (0, node_assert_1.default)(webhooks_filter_ref01_data_dt0.id === webhooks_filter_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/webhooks_filter/WebhooksFilterTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotWebhooksSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['webhooks_filter01', 'webhooks_filter02', 'webhooks_filter03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_FILTER_ENTID': idmap,
        'HUBSPOT_WEBHOOKS_TEST_LIVE': 'FALSE',
        'HUBSPOT_WEBHOOKS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_WEBHOOKS_APIKEY': '',
    });
    idmap = env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_FILTER_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_WEBHOOKS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_FILTER_ENTID'];
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
//# sourceMappingURL=WebhooksFilterEntity.test.js.map