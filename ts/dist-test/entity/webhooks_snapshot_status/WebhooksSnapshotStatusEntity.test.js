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
(0, node_test_1.describe)('WebhooksSnapshotStatusEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_WEBHOOKS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_WEBHOOKS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotWebhooksSDK.test();
        const ent = testsdk.WebhooksSnapshotStatus();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_WEBHOOKS_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'webhooks_snapshot_status.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "completedAt": { "a": true, "fo": "int64", "h": "Completed At", "n": "completedAt", "r": false, "sh": "The timestamp indicating when the snapshot operation was completed, represented as a Unix timestamp in milliseconds.", "t": "`$INTEGER`", "key$": "completedAt", "index$": 0 }, "errorCode": { "a": true, "h": "Error Code", "n": "errorCode", "r": false, "sh": "A code representing the error that occurred, if any.", "t": "`$STRING`", "key$": "errorCode", "index$": 1 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "sh": "The unique identifier for the snapshot operation, represented as a UUID.", "t": "`$STRING`", "key$": "id", "index$": 2 }, "initiatedAt": { "a": true, "fo": "int64", "h": "Initiated At", "n": "initiatedAt", "r": true, "sh": "The timestamp indicating when the snapshot operation was initiated, represented as a Unix timestamp in milliseconds.", "t": "`$INTEGER`", "key$": "initiatedAt", "index$": 3 }, "message": { "a": true, "h": "Message", "n": "message", "r": false, "sh": "A descriptive message providing additional information about the snapshot operation or error.", "t": "`$STRING`", "key$": "message", "index$": 4 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "The current status of the snapshot.", "t": "`$STRING`", "key$": "status", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "webhooks_snapshot_status", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /webhooks-journal/journal-local/2026-09/status/{statusId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "id", "or": "status_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/webhooks-journal/journal-local/2026-09/status/{statusId}", "q": { "exist": ["id"] }, "r": { "param": { "statusId": "id" } }, "s": [{ "lit": "webhooks-journal" }, { "lit": "journal-local" }, { "lit": "2026-09" }, { "lit": "status" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /webhooks-journal/journal/2026-09/status/{statusId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "id", "or": "status_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/webhooks-journal/journal/2026-09/status/{statusId}", "q": { "exist": ["id"] }, "r": { "param": { "statusId": "id" } }, "s": [{ "lit": "webhooks-journal" }, { "lit": "journal" }, { "lit": "2026-09" }, { "lit": "status" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "webhooks_snapshot_status", "name__orig": "webhooks_snapshot_status", "Name": "WebhooksSnapshotStatus", "name_": "webhooks_snapshot_status", "name-": "webhooks-snapshot-status", "NAME": "WEBHOOKS_SNAPSHOT_STATUS", "index$": 6 }, { "active": true, "entity": "webhooks_snapshot_status", "key$": "BasicWebhooksSnapshotStatusFlow", "kind": "basic", "name": "BasicWebhooksSnapshotStatusFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "webhooks_snapshot_status_ref01", "srcdatavar": "webhooks_snapshot_status_ref01_data", "suffix": "_dt0" }, "m": { "id": "webhooks_snapshot_status01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-webhooks_snapshot_status_ref01" } }], "index$": 0 }] }, 'WebhooksSnapshotStatus', { "GET /webhooks-journal/journal-local/2026-09/status/{statusId}": { "protocol": "http", "parameters": [{ "name": "statusId", "in": "path", "description": "The unique identifier of the status to retrieve. It is a UUID format string.", "required": true, "style": "simple", "explode": false, "schema": { "type": "string", "format": "uuid", "example": null }, "index$": 0 }] }, "GET /webhooks-journal/journal/2026-09/status/{statusId}": { "protocol": "http", "parameters": [{ "name": "statusId", "in": "path", "description": "The unique identifier (UUID) of the webhook journal status to retrieve.", "required": true, "style": "simple", "explode": false, "schema": { "type": "string", "format": "uuid", "example": null }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let webhooks_snapshot_status_ref01_data = Object.values(setup.data.existing.webhooks_snapshot_status)[0];
        // LOAD
        const webhooks_snapshot_status_ref01_ent = client.WebhooksSnapshotStatus();
        const webhooks_snapshot_status_ref01_match_dt0 = {};
        webhooks_snapshot_status_ref01_match_dt0.id = webhooks_snapshot_status_ref01_data.id;
        const webhooks_snapshot_status_ref01_data_dt0 = (await webhooks_snapshot_status_ref01_ent.load(webhooks_snapshot_status_ref01_match_dt0)).data();
        (0, node_assert_1.default)(webhooks_snapshot_status_ref01_data_dt0.id === webhooks_snapshot_status_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/webhooks_snapshot_status/WebhooksSnapshotStatusTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotWebhooksSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['webhooks_snapshot_status01', 'webhooks_snapshot_status02', 'webhooks_snapshot_status03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SNAPSHOT_STATUS_ENTID': idmap,
        'HUBSPOT_WEBHOOKS_TEST_LIVE': 'FALSE',
        'HUBSPOT_WEBHOOKS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_WEBHOOKS_APIKEY': '',
    });
    idmap = env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SNAPSHOT_STATUS_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_WEBHOOKS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SNAPSHOT_STATUS_ENTID'];
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
//# sourceMappingURL=WebhooksSnapshotStatusEntity.test.js.map