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
(0, node_test_1.describe)('WebhooksSettingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_WEBHOOKS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_WEBHOOKS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotWebhooksSDK.test();
        const ent = testsdk.WebhooksSetting();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_WEBHOOKS_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'webhooks_setting.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "maxConcurrentRequests": { "a": true, "fo": "int32", "h": "Max Concurrent Requests", "n": "maxConcurrentRequests", "r": true, "sh": "The maximum number of concurrent requests allowed.", "t": "`$INTEGER`", "key$": "maxConcurrentRequests", "index$": 0 }, "targetUrl": { "a": true, "h": "Target Url", "n": "targetUrl", "r": true, "sh": "The URL to which webhook events will be sent.", "t": "`$STRING`", "key$": "targetUrl", "index$": 1 }, "throttling": { "a": true, "h": "Throttling", "n": "throttling", "r": true, "t": "`$OBJECT`", "key$": "throttling", "index$": 2 } }, "name": "webhooks_setting", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /app-webhooks/2026-09/{appId}/settings", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "app_id", "or": "app_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/app-webhooks/2026-09/{appId}/settings", "q": { "exist": ["app_id"] }, "r": { "param": { "appId": "app_id" } }, "s": [{ "lit": "app-webhooks" }, { "lit": "2026-09" }, { "var": "app_id" }, { "lit": "settings" }], "t": { "req": "`reqdata`", "res": "`body.throttling`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /app-webhooks/2026-09/{appId}/settings", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "app_id", "or": "app_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/app-webhooks/2026-09/{appId}/settings", "q": { "exist": ["app_id"] }, "r": { "param": { "appId": "app_id" } }, "s": [{ "lit": "app-webhooks" }, { "lit": "2026-09" }, { "var": "app_id" }, { "lit": "settings" }], "t": { "req": "`reqdata`", "res": "`body.throttling`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "webhooks_setting", "name__orig": "webhooks_setting", "Name": "WebhooksSetting", "name_": "webhooks_setting", "name-": "webhooks-setting", "NAME": "WEBHOOKS_SETTING", "index$": 5 }, { "active": true, "entity": "webhooks_setting", "key$": "BasicWebhooksSettingFlow", "kind": "basic", "name": "BasicWebhooksSettingFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "webhooks_setting_ref01", "srcdatavar": "webhooks_setting_ref01_data", "suffix": "_up0", "textfield": "targetUrl" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-webhooks_setting_ref01" } }], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "webhooks_setting_ref01", "srcdatavar": "webhooks_setting_ref01_data", "suffix": "_dt0" }, "m": { "id": "webhooks_setting01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-webhooks_setting_ref01" } }], "index$": 1 }] }, 'WebhooksSetting', { "GET /app-webhooks/2026-09/{appId}/settings": { "protocol": "http", "parameters": [{ "name": "appId", "in": "path", "description": "The unique identifier of the app whose webhook settings are being retrieved.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int32", "example": null }, "index$": 0 }] }, "PUT /app-webhooks/2026-09/{appId}/settings": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "required": ["targetUrl", "throttling"], "type": "object", "properties": { "targetUrl": { "type": "string", "description": "The URL to which webhook events will be sent. It is a string.", "example": null, "key$": "targetUrl" }, "throttling": { "required": ["maxConcurrentRequests"], "type": "object", "properties": { "maxConcurrentRequests": { "description": "The maximum number of concurrent requests allowed. This is an integer value.", "example": null, "format": "int32", "type": "integer" } }, "example": null, "x-ref": "#/components/schemas/WebhooksThrottlingSettings", "key$": "throttling" } }, "example": null, "x-ref": "#/components/schemas/WebhooksSettingsChangeRequest", "index$": 1 }, "example": null } }, "required": true }, "parameters": [{ "name": "appId", "in": "path", "description": "The unique identifier of the app whose webhook settings are to be updated.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int32", "example": null }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let webhooks_setting_ref01_data = Object.values(setup.data.existing.webhooks_setting)[0];
        // UPDATE
        const webhooks_setting_ref01_ent = client.WebhooksSetting();
        const webhooks_setting_ref01_data_up0 = {};
        const webhooks_setting_ref01_markdef_up0 = { name: 'targetUrl', value: 'Mark01-webhooks_setting_ref01_' + setup.now };
        webhooks_setting_ref01_data_up0[webhooks_setting_ref01_markdef_up0.name] = webhooks_setting_ref01_markdef_up0.value;
        const webhooks_setting_ref01_resdata_up0 = (await webhooks_setting_ref01_ent.update(webhooks_setting_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != webhooks_setting_ref01_resdata_up0);
        (0, node_assert_1.default)(webhooks_setting_ref01_resdata_up0[webhooks_setting_ref01_markdef_up0.name] === webhooks_setting_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/webhooks_setting/WebhooksSettingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotWebhooksSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['webhooks_setting01', 'webhooks_setting02', 'webhooks_setting03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SETTING_ENTID': idmap,
        'HUBSPOT_WEBHOOKS_TEST_LIVE': 'FALSE',
        'HUBSPOT_WEBHOOKS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_WEBHOOKS_APIKEY': '',
    });
    idmap = env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SETTING_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_WEBHOOKS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SETTING_ENTID'];
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
//# sourceMappingURL=WebhooksSettingEntity.test.js.map