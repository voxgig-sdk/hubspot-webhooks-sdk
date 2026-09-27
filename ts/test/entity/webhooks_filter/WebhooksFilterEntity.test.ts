

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


describe('WebhooksFilterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_WEBHOOKS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_WEBHOOKS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotWebhooksSDK.test()
    const ent = testsdk.WebhooksFilter()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_WEBHOOKS_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'webhooks_filter.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"conditions":{"a":true,"h":"Conditions","n":"conditions","r":true,"sh":"An array of conditions that define the criteria for the filter.","t":"`$ARRAY`","key$":"conditions","index$":0},"createdAt":{"a":true,"fo":"int64","h":"Created At","n":"createdAt","r":true,"sh":"A Unix timestamp in milliseconds indicating when the filter was created.","t":"`$INTEGER`","key$":"createdAt","index$":1},"filter":{"a":true,"h":"Filter","n":"filter","r":true,"sh":"Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against.","t":"`$OBJECT`","key$":"filter","index$":2},"filterId":{"a":true,"fo":"int64","h":"Filter Id","n":"filterId","r":true,"sh":"The unique identifier for the created filter.","t":"`$INTEGER`","key$":"filterId","index$":3},"id":{"a":true,"fo":"int64","h":"Id","n":"id","r":true,"sh":"The unique identifier for the filter.","t":"`$INTEGER`","key$":"id","index$":4},"subscriptionId":{"a":true,"fo":"int64","h":"Subscription Id","n":"subscriptionId","r":true,"sh":"The unique identifier of the subscription to which the filter will be applied.","t":"`$INTEGER`","key$":"subscriptionId","index$":5}},"id":{"field":"id","name":"id"},"name":"webhooks_filter","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /webhooks-journal/subscriptions/2026-09/filters","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/webhooks-journal/subscriptions/2026-09/filters","q":{},"r":{},"s":[{"lit":"webhooks-journal"},{"lit":"subscriptions"},{"lit":"2026-09"},{"lit":"filters"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /webhooks-journal/subscriptions/2026-09/filters/{filterId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"id","or":"filter_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/webhooks-journal/subscriptions/2026-09/filters/{filterId}","q":{"exist":["id"]},"r":{"param":{"filterId":"id"}},"s":[{"lit":"webhooks-journal"},{"lit":"subscriptions"},{"lit":"2026-09"},{"lit":"filters"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.filter`"},"index$":0},{"a":true,"co":{"id":"GET /webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"subscription_id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}","q":{"exist":["subscription_id"]},"r":{"param":{"subscriptionId":"subscription_id"}},"s":[{"lit":"webhooks-journal"},{"lit":"subscriptions"},{"lit":"2026-09"},{"lit":"filters"},{"lit":"subscription"},{"var":"subscription_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"webhooks_filter","name__orig":"webhooks_filter","Name":"WebhooksFilter","name_":"webhooks_filter","name-":"webhooks-filter","NAME":"WEBHOOKS_FILTER","index$":4}, {"active":true,"entity":"webhooks_filter","key$":"BasicWebhooksFilterFlow","kind":"basic","name":"BasicWebhooksFilterFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"webhooks_filter_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"webhooks_filter_ref01","srcdatavar":"webhooks_filter_ref01_data","suffix":"_dt0"},"m":{"id":"webhooks_filter01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-webhooks_filter_ref01"}}],"index$":1}]}, 'WebhooksFilter', {"POST /webhooks-journal/subscriptions/2026-09/filters":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["filter","subscriptionId"],"type":"object","properties":{"filter":{"required":["conditions"],"type":"object","properties":{"conditions":{"type":"array","description":"An array of conditions that define the criteria for the filter. Each condition specifies a property, an operator, and optionally a value or values.","example":null,"items":{"required":[],"type":"object","properties":{},"example":null,"x-ref":"#/components/schemas/WebhooksCondition"},"key$":"conditions"}},"description":"Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. ","example":null,"x-ref":"#/components/schemas/WebhooksFilter","key$":"filter"},"subscriptionId":{"type":"integer","description":"The unique identifier of the subscription to which the filter will be applied. It is an integer formatted as int64.","format":"int64","example":null,"key$":"subscriptionId"}},"example":null,"x-ref":"#/components/schemas/WebhooksFilterCreateRequest","index$":1},"example":null}},"required":true},"parameters":[]},"GET /webhooks-journal/subscriptions/2026-09/filters/{filterId}":{"protocol":"http","parameters":[{"name":"filterId","in":"path","description":"The unique identifier of the filter to retrieve.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0}]},"GET /webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}":{"protocol":"http","parameters":[{"name":"subscriptionId","in":"path","description":"The unique identifier of the subscription for which to retrieve filters.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const webhooks_filter_ref01_ent = client.WebhooksFilter()
    let webhooks_filter_ref01_data = setup.data.new.webhooks_filter['webhooks_filter_ref01']

    webhooks_filter_ref01_data = (await webhooks_filter_ref01_ent.create(webhooks_filter_ref01_data)).data()
    assert(null != webhooks_filter_ref01_data.id)


    // LOAD
    const webhooks_filter_ref01_match_dt0: any = {}
    webhooks_filter_ref01_match_dt0.id = webhooks_filter_ref01_data.id
    const webhooks_filter_ref01_data_dt0 = (await webhooks_filter_ref01_ent.load(webhooks_filter_ref01_match_dt0)).data()
    assert(webhooks_filter_ref01_data_dt0.id === webhooks_filter_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/webhooks_filter/WebhooksFilterTestData.json')

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
    ['webhooks_filter01','webhooks_filter02','webhooks_filter03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_FILTER_ENTID': idmap,
    'HUBSPOT_WEBHOOKS_TEST_LIVE': 'FALSE',
    'HUBSPOT_WEBHOOKS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_WEBHOOKS_APIKEY': '',
  })

  idmap = env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_FILTER_ENTID']

  const live = 'TRUE' === env.HUBSPOT_WEBHOOKS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_FILTER_ENTID']
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
  
