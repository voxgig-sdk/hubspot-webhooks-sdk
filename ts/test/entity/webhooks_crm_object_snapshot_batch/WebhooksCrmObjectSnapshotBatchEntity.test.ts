

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { HubspotWebhooksSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('WebhooksCrmObjectSnapshotBatchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_WEBHOOKS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_WEBHOOKS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotWebhooksSDK.test()
    const ent = testsdk.WebhooksCrmObjectSnapshotBatch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_WEBHOOKS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'webhooks_crm_object_snapshot_batch.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"snapshotRequests","req":true,"short":"An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object.","type":"`$ARRAY`","index$":0},{"active":true,"name":"snapshotResponses","req":true,"short":"An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object.","type":"`$ARRAY`","index$":1}],"name":"webhooks_crm_object_snapshot_batch","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /webhooks-journal/snapshots/2026-09/crm","json":"{\"operationId\":\"post-/webhooks-journal/snapshots/2026-09/crm_/webhooks-journal/snapshots/2026-03/crm\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"snapshotRequests\":{\"description\":\"An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object. This property is required.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"objectId\":{\"description\":\"An integer representing the unique identifier of the CRM object for which the snapshot is requested.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"objectTypeId\":{\"description\":\"A string representing the type identifier of the CRM object, specifying what kind of object it is within HubSpot.\",\"example\":null,\"type\":\"string\"},\"portalId\":{\"description\":\"An integer representing the unique identifier of the HubSpot account (portal) where the CRM object resides.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"properties\":{\"description\":\"An array of strings, each representing a property of the CRM object that should be included in the snapshot.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"objectId\",\"objectTypeId\",\"portalId\",\"properties\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"snapshotRequests\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"snapshotResponses\":{\"description\":\"An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object. This property is required.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"objectId\":{\"description\":\"An integer representing the unique identifier of the CRM object for which the snapshot is taken.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"objectTypeId\":{\"description\":\"A string indicating the type of the CRM object, such as contact, company, or deal.\",\"example\":null,\"type\":\"string\"},\"portalId\":{\"description\":\"An integer representing the unique identifier of the HubSpot portal associated with the CRM object.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"snapshotStatusId\":{\"description\":\"A UUID string representing the status identifier of the snapshot request, indicating the current state of the snapshot process.\",\"example\":null,\"format\":\"uuid\",\"type\":\"string\"}},\"required\":[\"objectId\",\"objectTypeId\",\"portalId\",\"snapshotStatusId\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"snapshotResponses\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"webhooks-journal-snapshot-management\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"developers-read\":\"\",\"developers-write\":\"\",\"private-apps-read\":\"\",\"private-apps-write\":\"\",\"webhooks-journal-data-access\":\"\",\"webhooks-journal-snapshot-management\":\"\",\"webhooks-journal-subscription-management\":\"\",\"webhooks-journal-subscription-read\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/webhooks-journal/snapshots/2026-09/crm","segments":[{"lit":"webhooks-journal"},{"lit":"snapshots"},{"lit":"2026-09"},{"lit":"crm"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"webhooks_crm_object_snapshot_batch","name__orig":"webhooks_crm_object_snapshot_batch","Name":"WebhooksCrmObjectSnapshotBatch","name_":"webhooks_crm_object_snapshot_batch","name-":"webhooks-crm-object-snapshot-batch","NAME":"WEBHOOKS_CRM_OBJECT_SNAPSHOT_BATCH","index$":4}, {"active":true,"entity":"webhooks_crm_object_snapshot_batch","key$":"BasicWebhooksCrmObjectSnapshotBatchFlow","kind":"basic","name":"BasicWebhooksCrmObjectSnapshotBatchFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"webhooks_crm_object_snapshot_batch_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'WebhooksCrmObjectSnapshotBatch')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const webhooks_crm_object_snapshot_batch_ref01_ent = client.WebhooksCrmObjectSnapshotBatch()
    let webhooks_crm_object_snapshot_batch_ref01_data = setup.data.new.webhooks_crm_object_snapshot_batch['webhooks_crm_object_snapshot_batch_ref01']

    webhooks_crm_object_snapshot_batch_ref01_data = (await webhooks_crm_object_snapshot_batch_ref01_ent.create(webhooks_crm_object_snapshot_batch_ref01_data)).data()
    assert(null != webhooks_crm_object_snapshot_batch_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/webhooks_crm_object_snapshot_batch/WebhooksCrmObjectSnapshotBatchTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = HubspotWebhooksSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['webhooks_crm_object_snapshot_batch01','webhooks_crm_object_snapshot_batch02','webhooks_crm_object_snapshot_batch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_CRM_OBJECT_SNAPSHOT_BATCH_ENTID': idmap,
    'HUBSPOT_WEBHOOKS_TEST_LIVE': 'FALSE',
    'HUBSPOT_WEBHOOKS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_WEBHOOKS_APIKEY': '',
  })

  idmap = env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_CRM_OBJECT_SNAPSHOT_BATCH_ENTID']

  const live = 'TRUE' === env.HUBSPOT_WEBHOOKS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_CRM_OBJECT_SNAPSHOT_BATCH_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new HubspotWebhooksSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
