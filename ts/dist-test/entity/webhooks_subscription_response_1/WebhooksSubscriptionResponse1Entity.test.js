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
(0, node_test_1.describe)('WebhooksSubscriptionResponse1Entity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_WEBHOOKS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_WEBHOOKS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotWebhooksSDK.test();
        const ent = testsdk.WebhooksSubscriptionResponse1();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_WEBHOOKS_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'webhooks_subscription_response_1.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "actionOverrides": { "a": true, "h": "Action Overrides", "n": "actionOverrides", "r": false, "sh": "An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object.", "t": "`$OBJECT`", "key$": "actionOverrides", "index$": 0 }, "actions": { "a": true, "h": "Actions", "n": "actions", "r": true, "sh": "A list of actions that trigger the subscription.", "t": "`$ARRAY`", "key$": "actions", "index$": 1 }, "appId": { "a": true, "fo": "int64", "h": "App Id", "n": "appId", "r": true, "sh": "The unique identifier for the app associated with the subscription.", "t": "`$INTEGER`", "key$": "appId", "index$": 2 }, "associatedObjectTypeIds": { "a": true, "h": "Associated Object Type Ids", "n": "associatedObjectTypeIds", "r": false, "sh": "A list of associated object type IDs.", "t": "`$ARRAY`", "key$": "associatedObjectTypeIds", "index$": 3 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": true, "sh": "The date and time when the subscription was created, in ISO 8601 format.", "t": "`$STRING`", "key$": "createdAt", "index$": 4 }, "createdBy": { "a": true, "fo": "int64", "h": "Created By", "n": "createdBy", "r": false, "sh": "The ID of the user who created the subscription.", "t": "`$INTEGER`", "key$": "createdBy", "index$": 5 }, "deletedAt": { "a": true, "fo": "date-time", "h": "Deleted At", "n": "deletedAt", "r": false, "sh": "The date and time when the subscription was deleted, in ISO 8601 format, if applicable.", "t": "`$STRING`", "key$": "deletedAt", "index$": 6 }, "id": { "a": true, "fo": "int64", "h": "Id", "n": "id", "r": true, "sh": "The unique identifier for the subscription.", "t": "`$INTEGER`", "key$": "id", "index$": 7 }, "listIds": { "a": true, "h": "List Ids", "n": "listIds", "r": false, "sh": "A list of list IDs associated with the subscription.", "t": "`$ARRAY`", "key$": "listIds", "index$": 8 }, "objectIds": { "a": true, "h": "Object Ids", "n": "objectIds", "r": false, "sh": "A list of object IDs associated with the subscription.", "t": "`$ARRAY`", "key$": "objectIds", "index$": 9 }, "objectTypeId": { "a": true, "h": "Object Type Id", "n": "objectTypeId", "r": true, "sh": "The identifier for the object type associated with the subscription.", "t": "`$STRING`", "key$": "objectTypeId", "index$": 10 }, "portalId": { "a": true, "fo": "int64", "h": "Portal Id", "n": "portalId", "r": false, "sh": "The unique identifier for the portal associated with the subscription.", "t": "`$INTEGER`", "key$": "portalId", "index$": 11 }, "properties": { "a": true, "h": "Properties", "n": "properties", "r": false, "sh": "A list of property names associated with the subscription.", "t": "`$ARRAY`", "key$": "properties", "index$": 12 }, "subscriptionType": { "a": true, "h": "Subscription Type", "n": "subscriptionType", "r": true, "sh": "The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'.", "t": "`$STRING`", "key$": "subscriptionType", "index$": 13 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The date and time when the subscription was last updated, in ISO 8601 format.", "t": "`$STRING`", "key$": "updatedAt", "index$": 14 } }, "id": { "field": "id", "name": "id" }, "name": "webhooks_subscription_response_1", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /webhooks-journal/subscriptions/2026-09", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/webhooks-journal/subscriptions/2026-09", "q": {}, "r": {}, "s": [{ "lit": "webhooks-journal" }, { "lit": "subscriptions" }, { "lit": "2026-09" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /webhooks-journal/subscriptions/2026-09", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/webhooks-journal/subscriptions/2026-09", "q": {}, "r": {}, "s": [{ "lit": "webhooks-journal" }, { "lit": "subscriptions" }, { "lit": "2026-09" }], "t": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /webhooks-journal/subscriptions/2026-09/{subscriptionId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "subscription_id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/webhooks-journal/subscriptions/2026-09/{subscriptionId}", "q": { "exist": ["subscription_id"] }, "r": { "param": { "subscriptionId": "subscription_id" } }, "s": [{ "lit": "webhooks-journal" }, { "lit": "subscriptions" }, { "lit": "2026-09" }, { "var": "subscription_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "webhooks_subscription_response_1", "name__orig": "webhooks_subscription_response_1", "Name": "WebhooksSubscriptionResponse1", "name_": "webhooks_subscription_response_1", "name-": "webhooks-subscription-response-1", "NAME": "WEBHOOKS_SUBSCRIPTION_RESPONSE_1", "index$": 8 }, { "active": true, "entity": "webhooks_subscription_response_1", "key$": "BasicWebhooksSubscriptionResponse1Flow", "kind": "basic", "name": "BasicWebhooksSubscriptionResponse1Flow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "webhooks_subscription_response_1_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "webhooks_subscription_response_1_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "webhooks_subscription_response_1_ref01", "srcdatavar": "webhooks_subscription_response_1_ref01_data", "suffix": "_dt0" }, "m": { "id": "webhooks_subscription_response_101" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-webhooks_subscription_response_1_ref01" } }], "index$": 2 }] }, 'WebhooksSubscriptionResponse1', { "POST /webhooks-journal/subscriptions/2026-09": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": {}, "example": null, "oneOf": [{ "required": ["actions", "objectIds", "objectTypeId", "portalId", "properties", "subscriptionType"], "type": "object", "properties": { "actions": { "type": "array", "description": "An array of strings specifying the actions that trigger the subscription. Valid actions include 'CREATE', 'UPDATE', 'DELETE', 'MERGE', 'RESTORE'.", "example": null, "items": { "type": "string", "example": null, "enum": [] } }, "objectIds": { "type": "array", "description": "An array of integers representing the IDs of the objects involved in the subscription. Empty means listen to all objectIds.", "example": null, "items": { "type": "integer", "format": "int64", "example": null } }, "objectTypeId": { "type": "string", "description": "A string that identifies the type of object for which the subscription is being created or updated. For example \"0-1\" for contacts.", "example": null }, "portalId": { "type": "integer", "description": "An integer representing the portal ID associated with the subscription.", "format": "int64", "example": null }, "properties": { "type": "array", "description": "An array of strings listing the properties of the objects that are relevant to the subscription. Empty means listen to all properties.", "example": null, "items": { "type": "string", "example": null } }, "subscriptionType": { "type": "string", "description": "A string indicating the type of subscription. The default and only valid value is 'OBJECT'.", "example": null, "default": "OBJECT", "enum": ["OBJECT"] } }, "example": null, "x-hubspot-sub-type-impl": true, "x-ref": "#/components/schemas/WebhooksObjectSubscriptionUpsertRequest" }, { "required": ["actions", "associatedObjectTypeIds", "objectIds", "objectTypeId", "portalId", "subscriptionType"], "type": "object", "properties": { "actions": { "type": "array", "description": "An array of strings specifying the actions that trigger the subscription. Valid actions include  'ASSOCIATION_ADDED' and 'ASSOCIATION_REMOVED'.", "example": null, "items": { "type": "string", "example": null, "enum": [] } }, "associatedObjectTypeIds": { "type": "array", "description": "An array of strings representing the type identifiers of the associated objects involved in the subscription. If present, events will only fire if the TO objectTypeId in the association is included in this array.  ", "example": null, "items": { "type": "string", "example": null } }, "objectIds": { "type": "array", "description": "An array of integers representing the unique identifiers of the objects involved in the subscription.", "example": null, "items": { "type": "integer", "format": "int64", "example": null } }, "objectTypeId": { "type": "string", "description": "A string representing the type identifier of the object involved in the subscription. For example \"0-1\" for Contacts. This corresponds to the FROM side of the association. An objectTypeId of \"0-1\" would match a CONTACT_TO_COMPANY association change.  ", "example": null }, "portalId": { "type": "integer", "description": "An integer representing the unique identifier of the HubSpot portal.", "format": "int64", "example": null }, "subscriptionType": { "type": "string", "description": "A string indicating the type of subscription, which is 'ASSOCIATION' by default.", "example": null, "default": "ASSOCIATION", "enum": ["ASSOCIATION"] } }, "example": null, "x-hubspot-sub-type-impl": true, "x-ref": "#/components/schemas/WebhooksAssociationSubscriptionUpsertRequest" }, { "required": ["eventTypeId", "properties", "subscriptionType"], "type": "object", "properties": { "eventTypeId": { "type": "string", "description": "A string representing the unique identifier for the event type that the subscription pertains to. This value corresponds to an internal event classification at HubSpot. \n\n4-1909196: App install event\n4-1916193: App uninstall event", "example": null }, "properties": { "type": "array", "description": "An array of strings specifying the properties of the event associated with the subscription.", "example": null, "items": { "type": "string", "example": null } }, "subscriptionType": { "type": "string", "description": "A string indicating the type of subscription, which is 'APP_LIFECYCLE_EVENT' by default.", "example": null, "default": "APP_LIFECYCLE_EVENT", "enum": ["APP_LIFECYCLE_EVENT"] } }, "example": null, "x-hubspot-sub-type-impl": true, "x-ref": "#/components/schemas/WebhooksAppLifecycleEventSubscriptionUpsertRequest" }, { "required": ["actions", "listIds", "objectIds", "portalId", "subscriptionType"], "type": "object", "properties": { "actions": { "type": "array", "description": "An array of strings specifying the actions that trigger the subscription. Valid actions include 'ADDED_TO_LIST', and 'REMOVED_FROM_LIST'", "example": null, "items": { "type": "string", "example": null, "enum": [] } }, "listIds": { "type": "array", "description": "An array of integers representing the IDs of the lists involved in the subscription. Empty means listen to all lists.", "example": null, "items": { "type": "integer", "format": "int64", "example": null } }, "objectIds": { "type": "array", "description": "An array of integers representing the IDs of the objects associated with the subscription. Empty means listen to all objectsIds.", "example": null, "items": { "type": "integer", "format": "int64", "example": null } }, "portalId": { "type": "integer", "description": "An integer representing the ID of the portal where the subscription is being managed.", "format": "int64", "example": null }, "subscriptionType": { "type": "string", "description": "A string indicating the type of subscription. The default and only valid value is 'LIST_MEMBERSHIP'.", "example": null, "default": "LIST_MEMBERSHIP", "enum": ["LIST_MEMBERSHIP"] } }, "example": null, "x-hubspot-sub-type-impl": true, "x-ref": "#/components/schemas/WebhooksListMembershipSubscriptionUpsertRequest" }, { "required": ["actions", "objectTypeId", "portalId", "subscriptionType"], "type": "object", "properties": { "actions": { "type": "array", "description": "An array of strings specifying the actions that trigger the subscription. Valid action is 'GDPR_DELETE'. ", "example": null, "items": { "type": "string", "example": null, "enum": [] } }, "objectTypeId": { "type": "string", "description": "A string representing the unique identifier for the type of object associated with the subscription.", "example": null }, "portalId": { "type": "integer", "description": "An integer representing the unique identifier for the HubSpot portal that is being listened to for changes. ", "format": "int64", "example": null }, "subscriptionType": { "type": "string", "description": "A string indicating the type of subscription. GDPR_PRIVACY_DELETION is the only valid option for GdprPrivacyDeletionSubscriptionUpsertRequest. ", "example": null, "default": "GDPR_PRIVACY_DELETION", "enum": ["GDPR_PRIVACY_DELETION"] } }, "example": null, "x-hubspot-sub-type-impl": true, "x-ref": "#/components/schemas/WebhooksGdprPrivacyDeletionSubscriptionUpsertRequest" }], "x-ref": "#/components/schemas/WebhooksSubscriptionUpsertRequest", "index$": 1 }, "example": null } }, "required": true }, "parameters": [] }, "GET /webhooks-journal/subscriptions/2026-09": { "protocol": "http", "parameters": [] }, "GET /webhooks-journal/subscriptions/2026-09/{subscriptionId}": { "protocol": "http", "parameters": [{ "name": "subscriptionId", "in": "path", "description": "The unique identifier of the subscription to retrieve. It is an integer value.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const webhooks_subscription_response_1_ref01_ent = client.WebhooksSubscriptionResponse1();
        let webhooks_subscription_response_1_ref01_data = setup.data.new.webhooks_subscription_response_1['webhooks_subscription_response_1_ref01'];
        webhooks_subscription_response_1_ref01_data = (await webhooks_subscription_response_1_ref01_ent.create(webhooks_subscription_response_1_ref01_data)).data();
        (0, node_assert_1.default)(null != webhooks_subscription_response_1_ref01_data.id);
        // LIST
        const webhooks_subscription_response_1_ref01_match = {};
        const webhooks_subscription_response_1_ref01_list = (await webhooks_subscription_response_1_ref01_ent.list(webhooks_subscription_response_1_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(webhooks_subscription_response_1_ref01_list, { id: webhooks_subscription_response_1_ref01_data.id })));
        // LOAD
        const webhooks_subscription_response_1_ref01_match_dt0 = {};
        webhooks_subscription_response_1_ref01_match_dt0.id = webhooks_subscription_response_1_ref01_data.id;
        const webhooks_subscription_response_1_ref01_data_dt0 = (await webhooks_subscription_response_1_ref01_ent.load(webhooks_subscription_response_1_ref01_match_dt0)).data();
        (0, node_assert_1.default)(webhooks_subscription_response_1_ref01_data_dt0.id === webhooks_subscription_response_1_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/webhooks_subscription_response_1/WebhooksSubscriptionResponse1TestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotWebhooksSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['webhooks_subscription_response_101', 'webhooks_subscription_response_102', 'webhooks_subscription_response_103'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SUBSCRIPTION_RESPONSE_1_ENTID': idmap,
        'HUBSPOT_WEBHOOKS_TEST_LIVE': 'FALSE',
        'HUBSPOT_WEBHOOKS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_WEBHOOKS_APIKEY': '',
    });
    idmap = env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SUBSCRIPTION_RESPONSE_1_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_WEBHOOKS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SUBSCRIPTION_RESPONSE_1_ENTID'];
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
//# sourceMappingURL=WebhooksSubscriptionResponse1Entity.test.js.map