

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


describe('WebhooksSnapshotStatusEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_WEBHOOKS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_WEBHOOKS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotWebhooksSDK.test()
    const ent = testsdk.WebhooksSnapshotStatus()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_WEBHOOKS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'webhooks_snapshot_status.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"int64","name":"completedAt","req":false,"short":"The timestamp indicating when the snapshot operation was completed, represented as a Unix timestamp in milliseconds.","type":"`$INTEGER`","index$":0},{"active":true,"name":"errorCode","req":false,"short":"A code representing the error that occurred, if any.","type":"`$STRING`","index$":1},{"active":true,"format":"uuid","name":"id","req":true,"short":"The unique identifier for the snapshot operation, represented as a UUID.","type":"`$STRING`","index$":2},{"active":true,"format":"int64","name":"initiatedAt","req":true,"short":"The timestamp indicating when the snapshot operation was initiated, represented as a Unix timestamp in milliseconds.","type":"`$INTEGER`","index$":3},{"active":true,"name":"message","req":false,"short":"A descriptive message providing additional information about the snapshot operation or error.","type":"`$STRING`","index$":4},{"active":true,"name":"status","req":true,"short":"The current status of the snapshot.","type":"`$STRING`","index$":5}],"id":{"field":"id","name":"id"},"name":"webhooks_snapshot_status","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"id","orig":"status_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /webhooks-journal/journal-local/2026-09/status/{statusId}","json":"{\"operationId\":\"get-/webhooks-journal/journal-local/2026-09/status/{statusId}_/webhooks-journal/journal-local/2026-03/status/{statusId}\",\"parameters\":[{\"description\":\"The unique identifier of the status to retrieve. It is a UUID format string.\",\"explode\":false,\"in\":\"path\",\"name\":\"statusId\",\"required\":true,\"schema\":{\"example\":null,\"format\":\"uuid\",\"type\":\"string\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"completedAt\":{\"description\":\"The timestamp indicating when the snapshot operation was completed, represented as a Unix timestamp in milliseconds.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"errorCode\":{\"description\":\"A code representing the error that occurred, if any. Possible values are 'TIMEOUT', 'VALIDATION_ERROR', 'INTERNAL_ERROR', and 'PERMISSION_DENIED'.\",\"enum\":[\"INTERNAL_ERROR\",\"PERMISSION_DENIED\",\"TIMEOUT\",\"VALIDATION_ERROR\"],\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the snapshot operation, represented as a UUID.\",\"example\":null,\"format\":\"uuid\",\"type\":\"string\"},\"initiatedAt\":{\"description\":\"The timestamp indicating when the snapshot operation was initiated, represented as a Unix timestamp in milliseconds.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"message\":{\"description\":\"A descriptive message providing additional information about the snapshot operation or error.\",\"example\":null,\"type\":\"string\"},\"status\":{\"description\":\"The current status of the snapshot. Valid values include 'PENDING', 'IN_PROGRESS', 'COMPLETED', 'FAILED', and 'EXPIRED'.\",\"enum\":[\"EXPIRED\",\"FAILED\",\"IN_PROGRESS\",\"PENDING\",\"SUCCESS\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"id\",\"initiatedAt\",\"status\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"webhooks-journal-snapshot-management\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"developers-read\":\"\",\"developers-write\":\"\",\"private-apps-read\":\"\",\"private-apps-write\":\"\",\"webhooks-journal-data-access\":\"\",\"webhooks-journal-snapshot-management\":\"\",\"webhooks-journal-subscription-management\":\"\",\"webhooks-journal-subscription-read\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/webhooks-journal/journal-local/2026-09/status/{statusId}","rename":{"param":{"statusId":"id"}},"segments":[{"lit":"webhooks-journal"},{"lit":"journal-local"},{"lit":"2026-09"},{"lit":"status"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"id","orig":"status_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /webhooks-journal/journal/2026-09/status/{statusId}","json":"{\"operationId\":\"get-/webhooks-journal/journal/2026-09/status/{statusId}_/webhooks-journal/journal/2026-03/status/{statusId}\",\"parameters\":[{\"description\":\"The unique identifier (UUID) of the webhook journal status to retrieve.\",\"explode\":false,\"in\":\"path\",\"name\":\"statusId\",\"required\":true,\"schema\":{\"example\":null,\"format\":\"uuid\",\"type\":\"string\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"completedAt\":{\"description\":\"The timestamp indicating when the snapshot operation was completed, represented as a Unix timestamp in milliseconds.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"errorCode\":{\"description\":\"A code representing the error that occurred, if any. Possible values are 'TIMEOUT', 'VALIDATION_ERROR', 'INTERNAL_ERROR', and 'PERMISSION_DENIED'.\",\"enum\":[\"INTERNAL_ERROR\",\"PERMISSION_DENIED\",\"TIMEOUT\",\"VALIDATION_ERROR\"],\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the snapshot operation, represented as a UUID.\",\"example\":null,\"format\":\"uuid\",\"type\":\"string\"},\"initiatedAt\":{\"description\":\"The timestamp indicating when the snapshot operation was initiated, represented as a Unix timestamp in milliseconds.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"message\":{\"description\":\"A descriptive message providing additional information about the snapshot operation or error.\",\"example\":null,\"type\":\"string\"},\"status\":{\"description\":\"The current status of the snapshot. Valid values include 'PENDING', 'IN_PROGRESS', 'COMPLETED', 'FAILED', and 'EXPIRED'.\",\"enum\":[\"EXPIRED\",\"FAILED\",\"IN_PROGRESS\",\"PENDING\",\"SUCCESS\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"id\",\"initiatedAt\",\"status\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"webhooks-journal-snapshot-management\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"developers-read\":\"\",\"developers-write\":\"\",\"private-apps-read\":\"\",\"private-apps-write\":\"\",\"webhooks-journal-data-access\":\"\",\"webhooks-journal-snapshot-management\":\"\",\"webhooks-journal-subscription-management\":\"\",\"webhooks-journal-subscription-read\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/webhooks-journal/journal/2026-09/status/{statusId}","rename":{"param":{"statusId":"id"}},"segments":[{"lit":"webhooks-journal"},{"lit":"journal"},{"lit":"2026-09"},{"lit":"status"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"webhooks_snapshot_status","name__orig":"webhooks_snapshot_status","Name":"WebhooksSnapshotStatus","name_":"webhooks_snapshot_status","name-":"webhooks-snapshot-status","NAME":"WEBHOOKS_SNAPSHOT_STATUS","index$":7}, {"active":true,"entity":"webhooks_snapshot_status","key$":"BasicWebhooksSnapshotStatusFlow","kind":"basic","name":"BasicWebhooksSnapshotStatusFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"webhooks_snapshot_status_ref01","srcdatavar":"webhooks_snapshot_status_ref01_data","suffix":"_dt0"},"match":{"id":"webhooks_snapshot_status01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-webhooks_snapshot_status_ref01"}}],"index$":0}]}, 'WebhooksSnapshotStatus')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let webhooks_snapshot_status_ref01_data = Object.values(setup.data.existing.webhooks_snapshot_status)[0] as any

    // LOAD
    const webhooks_snapshot_status_ref01_ent = client.WebhooksSnapshotStatus()
    const webhooks_snapshot_status_ref01_match_dt0: any = {}
    webhooks_snapshot_status_ref01_match_dt0.id = webhooks_snapshot_status_ref01_data.id
    const webhooks_snapshot_status_ref01_data_dt0 = (await webhooks_snapshot_status_ref01_ent.load(webhooks_snapshot_status_ref01_match_dt0)).data()
    assert(webhooks_snapshot_status_ref01_data_dt0.id === webhooks_snapshot_status_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/webhooks_snapshot_status/WebhooksSnapshotStatusTestData.json')

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
    ['webhooks_snapshot_status01','webhooks_snapshot_status02','webhooks_snapshot_status03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SNAPSHOT_STATUS_ENTID': idmap,
    'HUBSPOT_WEBHOOKS_TEST_LIVE': 'FALSE',
    'HUBSPOT_WEBHOOKS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_WEBHOOKS_APIKEY': '',
  })

  idmap = env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SNAPSHOT_STATUS_ENTID']

  const live = 'TRUE' === env.HUBSPOT_WEBHOOKS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SNAPSHOT_STATUS_ENTID']
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
  
