

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


describe('WebhooksSubscriptionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_WEBHOOKS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_WEBHOOKS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotWebhooksSDK.test()
    const ent = testsdk.WebhooksSubscription()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_WEBHOOKS_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'webhooks_subscription.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"A boolean indicating whether the subscription is currently active.","t":"`$BOOLEAN`","key$":"active","index$":0},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"The date and time when the subscription was created, in ISO 8601 format.","t":"`$STRING`","key$":"createdAt","index$":1},"eventType":{"a":true,"h":"Event Type","n":"eventType","r":true,"sh":"The type of event that triggers the subscription.","t":"`$STRING`","key$":"eventType","index$":2},"eventTypeName":{"a":true,"h":"Event Type Name","n":"eventTypeName","r":false,"sh":"The name of the event type for the subscription.","t":"`$STRING`","key$":"eventTypeName","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier for the subscription.","t":"`$STRING`","key$":"id","index$":4},"objectTypeId":{"a":true,"h":"Object Type Id","n":"objectTypeId","r":false,"sh":"The identifier for the object type associated with the subscription.","t":"`$STRING`","key$":"objectTypeId","index$":5},"propertyName":{"a":true,"h":"Property Name","n":"propertyName","r":false,"sh":"The name of the property associated with the subscription event, if applicable.","t":"`$STRING`","key$":"propertyName","index$":6},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":false,"sh":"The date and time when the subscription was last updated, in ISO 8601 format.","t":"`$STRING`","key$":"updatedAt","index$":7}},"id":{"field":"id","name":"id"},"name":"webhooks_subscription","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /app-webhooks/2026-09/{appId}/subscriptions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"app_id","or":"app_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/app-webhooks/2026-09/{appId}/subscriptions","q":{"exist":["app_id"]},"r":{"param":{"appId":"app_id"}},"s":[{"lit":"app-webhooks"},{"lit":"2026-09"},{"var":"app_id"},{"lit":"subscriptions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /app-webhooks/2026-09/{appId}/subscriptions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"app_id","or":"app_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/app-webhooks/2026-09/{appId}/subscriptions","q":{"exist":["app_id"]},"r":{"param":{"appId":"app_id"}},"s":[{"lit":"app-webhooks"},{"lit":"2026-09"},{"var":"app_id"},{"lit":"subscriptions"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"app_id","or":"app_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"ex":null,"k":"param","n":"id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}","q":{"exist":["app_id","id"]},"r":{"param":{"appId":"app_id","subscriptionId":"id"}},"s":[{"lit":"app-webhooks"},{"lit":"2026-09"},{"var":"app_id"},{"lit":"subscriptions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"app_id","or":"app_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"ex":null,"k":"param","n":"id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"PATCH","o":"/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}","q":{"exist":["app_id","id"]},"r":{"param":{"appId":"app_id","subscriptionId":"id"}},"s":[{"lit":"app-webhooks"},{"lit":"2026-09"},{"var":"app_id"},{"lit":"subscriptions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"webhooks_subscription","name__orig":"webhooks_subscription","Name":"WebhooksSubscription","name_":"webhooks_subscription","name-":"webhooks-subscription","NAME":"WEBHOOKS_SUBSCRIPTION","index$":7}, {"active":true,"entity":"webhooks_subscription","key$":"BasicWebhooksSubscriptionFlow","kind":"basic","name":"BasicWebhooksSubscriptionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"webhooks_subscription_ref01"},"m":{"app_id":"app01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"app_id":"app01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"webhooks_subscription_ref01"}}],"index$":1},{"a":true,"d":{"app_id":"app01"},"i":{"ref":"webhooks_subscription_ref01","srcdatavar":"webhooks_subscription_ref01_data","suffix":"_up0","textfield":"createdAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-webhooks_subscription_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"webhooks_subscription_ref01","srcdatavar":"webhooks_subscription_ref01_data","suffix":"_dt0"},"m":{"app_id":"app01","id":"webhooks_subscription01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-webhooks_subscription_ref01"}}],"index$":3}]}, 'WebhooksSubscription', {"POST /app-webhooks/2026-09/{appId}/subscriptions":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["active","eventType"],"type":"object","properties":{"active":{"type":"boolean","description":"A boolean indicating whether the subscription is active.","example":null,"key$":"active"},"eventType":{"type":"string","description":"A string representing the type of event to subscribe to. Valid values include various property changes, creations, deletions, merges, restorations, association changes, and event completions.","example":null,"enum":["company.associationChange","company.creation","company.deletion","company.merge","company.propertyChange","company.restore","contact.associationChange","contact.creation","contact.deletion","contact.merge","contact.privacyDeletion","contact.propertyChange","contact.restore","conversation.creation","conversation.deletion","conversation.newMessage","conversation.privacyDeletion","conversation.propertyChange","deal.associationChange","deal.creation","deal.deletion","deal.merge","deal.propertyChange","deal.restore","event.completed","line_item.associationChange","line_item.creation","line_item.deletion","line_item.merge","line_item.propertyChange","line_item.restore","object.associationChange","object.creation","object.deletion","object.merge","object.propertyChange","object.restore","product.creation","product.deletion","product.merge","product.propertyChange","product.restore","ticket.associationChange","ticket.creation","ticket.deletion","ticket.merge","ticket.propertyChange","ticket.restore"],"key$":"eventType"},"eventTypeName":{"type":"string","description":"A string providing a human-readable name for the event type.","example":null,"key$":"eventTypeName"},"objectTypeId":{"type":"string","description":"A string representing the ID of the object type associated with the subscription.","example":null,"key$":"objectTypeId"},"propertyName":{"type":"string","description":"A string indicating the specific property name related to the event type, if applicable.","example":null,"key$":"propertyName"}},"example":null,"x-ref":"#/components/schemas/WebhooksSubscriptionCreateRequest","index$":1},"example":null}},"required":true},"parameters":[{"name":"appId","in":"path","description":"The unique identifier of the app for which the webhook subscription is being created.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":0}]},"GET /app-webhooks/2026-09/{appId}/subscriptions":{"protocol":"http","parameters":[{"name":"appId","in":"path","description":"The unique identifier of the app for which to retrieve subscriptions.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":0}]},"GET /app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}":{"protocol":"http","parameters":[{"name":"appId","in":"path","description":"The unique identifier of the app for which the subscription is configured.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":0},{"name":"subscriptionId","in":"path","description":"The unique identifier of the subscription to retrieve.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":1}]},"PATCH /app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"active":{"type":"boolean","description":"A boolean indicating whether the subscription is active. If true, the subscription is active; if false, it is inactive.","example":null,"key$":"active"}},"example":null,"x-ref":"#/components/schemas/WebhooksSubscriptionPatchRequest","index$":1},"example":null}},"required":true},"parameters":[{"name":"appId","in":"path","description":"The unique identifier of the app for which the subscription is being updated.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":0},{"name":"subscriptionId","in":"path","description":"The unique identifier of the subscription to update.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const webhooks_subscription_ref01_ent = client.WebhooksSubscription()
    let webhooks_subscription_ref01_data = setup.data.new.webhooks_subscription['webhooks_subscription_ref01']
    webhooks_subscription_ref01_data['app_id'] = setup.idmap['app01']

    webhooks_subscription_ref01_data = (await webhooks_subscription_ref01_ent.create(webhooks_subscription_ref01_data)).data()
    assert(null != webhooks_subscription_ref01_data.id)


    // LIST
    const webhooks_subscription_ref01_match: any = {}
    webhooks_subscription_ref01_match['app_id'] = setup.idmap['app01']

    const webhooks_subscription_ref01_list = (await webhooks_subscription_ref01_ent.list(webhooks_subscription_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(webhooks_subscription_ref01_list, { id: webhooks_subscription_ref01_data.id })))


    // UPDATE
    const webhooks_subscription_ref01_data_up0: any = {}
    webhooks_subscription_ref01_data_up0.id = webhooks_subscription_ref01_data.id
    webhooks_subscription_ref01_data_up0 ['app_id'] = setup.idmap['app_id']

    const webhooks_subscription_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-webhooks_subscription_ref01_' + setup.now }
    ;(webhooks_subscription_ref01_data_up0 as any)[webhooks_subscription_ref01_markdef_up0.name] = webhooks_subscription_ref01_markdef_up0.value

    const webhooks_subscription_ref01_resdata_up0 = (await webhooks_subscription_ref01_ent.update(webhooks_subscription_ref01_data_up0)).data()
    assert(webhooks_subscription_ref01_resdata_up0.id === webhooks_subscription_ref01_data_up0.id)

    assert((webhooks_subscription_ref01_resdata_up0 as any)[webhooks_subscription_ref01_markdef_up0.name] === webhooks_subscription_ref01_markdef_up0.value)


    // LOAD
    const webhooks_subscription_ref01_match_dt0: any = {}
    webhooks_subscription_ref01_match_dt0.id = webhooks_subscription_ref01_data.id
    const webhooks_subscription_ref01_data_dt0 = (await webhooks_subscription_ref01_ent.load(webhooks_subscription_ref01_match_dt0)).data()
    assert(webhooks_subscription_ref01_data_dt0.id === webhooks_subscription_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/webhooks_subscription/WebhooksSubscriptionTestData.json')

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
    ['webhooks_subscription01','webhooks_subscription02','webhooks_subscription03','app01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SUBSCRIPTION_ENTID': idmap,
    'HUBSPOT_WEBHOOKS_TEST_LIVE': 'FALSE',
    'HUBSPOT_WEBHOOKS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_WEBHOOKS_APIKEY': '',
  })

  idmap = env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SUBSCRIPTION_ENTID']

  const live = 'TRUE' === env.HUBSPOT_WEBHOOKS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SUBSCRIPTION_ENTID']
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
  
