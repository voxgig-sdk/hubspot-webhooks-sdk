

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"snapshotRequests":{"a":true,"h":"Snapshot Requests","n":"snapshotRequests","r":true,"sh":"An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object.","t":"`$ARRAY`","key$":"snapshotRequests","index$":0},"snapshotResponses":{"a":true,"h":"Snapshot Responses","n":"snapshotResponses","r":true,"sh":"An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object.","t":"`$ARRAY`","key$":"snapshotResponses","index$":1}},"name":"webhooks_crm_object_snapshot_batch","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /webhooks-journal/snapshots/2026-09/crm","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/webhooks-journal/snapshots/2026-09/crm","q":{},"r":{},"s":[{"lit":"webhooks-journal"},{"lit":"snapshots"},{"lit":"2026-09"},{"lit":"crm"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"webhooks_crm_object_snapshot_batch","name__orig":"webhooks_crm_object_snapshot_batch","Name":"WebhooksCrmObjectSnapshotBatch","name_":"webhooks_crm_object_snapshot_batch","name-":"webhooks-crm-object-snapshot-batch","NAME":"WEBHOOKS_CRM_OBJECT_SNAPSHOT_BATCH","index$":3}, {"active":true,"entity":"webhooks_crm_object_snapshot_batch","key$":"BasicWebhooksCrmObjectSnapshotBatchFlow","kind":"basic","name":"BasicWebhooksCrmObjectSnapshotBatchFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"webhooks_crm_object_snapshot_batch_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'WebhooksCrmObjectSnapshotBatch', {"POST /webhooks-journal/snapshots/2026-09/crm":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["snapshotRequests"],"type":"object","properties":{"snapshotRequests":{"type":"array","description":"An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object. This property is required.","example":null,"items":{"required":["objectId","objectTypeId","portalId","properties"],"type":"object","properties":{"objectId":{"type":"integer","description":"An integer representing the unique identifier of the CRM object for which the snapshot is requested.","format":"int64","example":null},"objectTypeId":{"type":"string","description":"A string representing the type identifier of the CRM object, specifying what kind of object it is within HubSpot.","example":null},"portalId":{"type":"integer","description":"An integer representing the unique identifier of the HubSpot account (portal) where the CRM object resides.","format":"int64","example":null},"properties":{"type":"array","description":"An array of strings, each representing a property of the CRM object that should be included in the snapshot.","example":null,"items":{}}},"example":null,"x-ref":"#/components/schemas/WebhooksCrmObjectSnapshotRequest"},"key$":"snapshotRequests"}},"example":null,"x-ref":"#/components/schemas/WebhooksCrmObjectSnapshotBatchRequest","index$":1},"example":null}},"required":true},"parameters":[]}})
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
  
