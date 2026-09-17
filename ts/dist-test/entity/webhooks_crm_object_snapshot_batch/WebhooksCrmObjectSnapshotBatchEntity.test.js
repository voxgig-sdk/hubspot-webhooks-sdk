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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('WebhooksCrmObjectSnapshotBatchEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_WEBHOOKS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_WEBHOOKS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotWebhooksSDK.test();
        const ent = testsdk.WebhooksCrmObjectSnapshotBatch();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_WEBHOOKS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'webhooks_crm_object_snapshot_batch.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "snapshotRequests", "req": true, "short": "An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object.", "type": "`$ARRAY`", "index$": 0 }, { "active": true, "name": "snapshotResponses", "req": true, "short": "An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object.", "type": "`$ARRAY`", "index$": 1 }], "name": "webhooks_crm_object_snapshot_batch", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /webhooks-journal/snapshots/2026-09/crm", "json": "{\"operationId\":\"post-/webhooks-journal/snapshots/2026-09/crm_/webhooks-journal/snapshots/2026-03/crm\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"snapshotRequests\":{\"description\":\"An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object. This property is required.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"objectId\":{\"description\":\"An integer representing the unique identifier of the CRM object for which the snapshot is requested.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"objectTypeId\":{\"description\":\"A string representing the type identifier of the CRM object, specifying what kind of object it is within HubSpot.\",\"example\":null,\"type\":\"string\"},\"portalId\":{\"description\":\"An integer representing the unique identifier of the HubSpot account (portal) where the CRM object resides.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"properties\":{\"description\":\"An array of strings, each representing a property of the CRM object that should be included in the snapshot.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"objectId\",\"objectTypeId\",\"portalId\",\"properties\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"snapshotRequests\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"snapshotResponses\":{\"description\":\"An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object. This property is required.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"objectId\":{\"description\":\"An integer representing the unique identifier of the CRM object for which the snapshot is taken.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"objectTypeId\":{\"description\":\"A string indicating the type of the CRM object, such as contact, company, or deal.\",\"example\":null,\"type\":\"string\"},\"portalId\":{\"description\":\"An integer representing the unique identifier of the HubSpot portal associated with the CRM object.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"snapshotStatusId\":{\"description\":\"A UUID string representing the status identifier of the snapshot request, indicating the current state of the snapshot process.\",\"example\":null,\"format\":\"uuid\",\"type\":\"string\"}},\"required\":[\"objectId\",\"objectTypeId\",\"portalId\",\"snapshotStatusId\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"snapshotResponses\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"webhooks-journal-snapshot-management\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"developers-read\":\"\",\"developers-write\":\"\",\"private-apps-read\":\"\",\"private-apps-write\":\"\",\"webhooks-journal-data-access\":\"\",\"webhooks-journal-snapshot-management\":\"\",\"webhooks-journal-subscription-management\":\"\",\"webhooks-journal-subscription-read\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/webhooks-journal/snapshots/2026-09/crm", "segments": [{ "lit": "webhooks-journal" }, { "lit": "snapshots" }, { "lit": "2026-09" }, { "lit": "crm" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "webhooks_crm_object_snapshot_batch", "name__orig": "webhooks_crm_object_snapshot_batch", "Name": "WebhooksCrmObjectSnapshotBatch", "name_": "webhooks_crm_object_snapshot_batch", "name-": "webhooks-crm-object-snapshot-batch", "NAME": "WEBHOOKS_CRM_OBJECT_SNAPSHOT_BATCH", "index$": 4 }, { "active": true, "entity": "webhooks_crm_object_snapshot_batch", "key$": "BasicWebhooksCrmObjectSnapshotBatchFlow", "kind": "basic", "name": "BasicWebhooksCrmObjectSnapshotBatchFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "webhooks_crm_object_snapshot_batch_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'WebhooksCrmObjectSnapshotBatch');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const webhooks_crm_object_snapshot_batch_ref01_ent = client.WebhooksCrmObjectSnapshotBatch();
        let webhooks_crm_object_snapshot_batch_ref01_data = setup.data.new.webhooks_crm_object_snapshot_batch['webhooks_crm_object_snapshot_batch_ref01'];
        webhooks_crm_object_snapshot_batch_ref01_data = (await webhooks_crm_object_snapshot_batch_ref01_ent.create(webhooks_crm_object_snapshot_batch_ref01_data)).data();
        (0, node_assert_1.default)(null != webhooks_crm_object_snapshot_batch_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/webhooks_crm_object_snapshot_batch/WebhooksCrmObjectSnapshotBatchTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotWebhooksSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['webhooks_crm_object_snapshot_batch01', 'webhooks_crm_object_snapshot_batch02', 'webhooks_crm_object_snapshot_batch03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_CRM_OBJECT_SNAPSHOT_BATCH_ENTID': idmap,
        'HUBSPOT_WEBHOOKS_TEST_LIVE': 'FALSE',
        'HUBSPOT_WEBHOOKS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_WEBHOOKS_APIKEY': '',
    });
    idmap = env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_CRM_OBJECT_SNAPSHOT_BATCH_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_WEBHOOKS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_CRM_OBJECT_SNAPSHOT_BATCH_ENTID'];
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
//# sourceMappingURL=WebhooksCrmObjectSnapshotBatchEntity.test.js.map