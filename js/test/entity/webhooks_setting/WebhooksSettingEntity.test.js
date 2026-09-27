
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { HubspotWebhooksSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('WebhooksSettingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_WEBHOOKS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_WEBHOOKS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotWebhooksSDK.test()
    const ent = testsdk.WebhooksSetting()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"maxConcurrentRequests":{"a":true,"fo":"int32","h":"Max Concurrent Requests","n":"maxConcurrentRequests","r":true,"sh":"The maximum number of concurrent requests allowed.","t":"`$INTEGER`","key$":"maxConcurrentRequests","index$":0},"targetUrl":{"a":true,"h":"Target Url","n":"targetUrl","r":true,"sh":"The URL to which webhook events will be sent.","t":"`$STRING`","key$":"targetUrl","index$":1},"throttling":{"a":true,"h":"Throttling","n":"throttling","r":true,"t":"`$OBJECT`","key$":"throttling","index$":2}},"name":"webhooks_setting","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /app-webhooks/2026-09/{appId}/settings","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"app_id","or":"app_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/app-webhooks/2026-09/{appId}/settings","q":{"exist":["app_id"]},"r":{"param":{"appId":"app_id"}},"s":[{"lit":"app-webhooks"},{"lit":"2026-09"},{"var":"app_id"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body.throttling`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /app-webhooks/2026-09/{appId}/settings","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"app_id","or":"app_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PUT","o":"/app-webhooks/2026-09/{appId}/settings","q":{"exist":["app_id"]},"r":{"param":{"appId":"app_id"}},"s":[{"lit":"app-webhooks"},{"lit":"2026-09"},{"var":"app_id"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body.throttling`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"webhooks_setting","name__orig":"webhooks_setting","Name":"WebhooksSetting","name_":"webhooks_setting","name-":"webhooks-setting","NAME":"WEBHOOKS_SETTING","index$":5}, {"active":true,"entity":"webhooks_setting","key$":"BasicWebhooksSettingFlow","kind":"basic","name":"BasicWebhooksSettingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"webhooks_setting_ref01","srcdatavar":"webhooks_setting_ref01_data","suffix":"_up0","textfield":"targetUrl"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-webhooks_setting_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"webhooks_setting_ref01","srcdatavar":"webhooks_setting_ref01_data","suffix":"_dt0"},"m":{"id":"webhooks_setting01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-webhooks_setting_ref01"}}],"index$":1}]}, 'WebhooksSetting', {"GET /app-webhooks/2026-09/{appId}/settings":{"protocol":"http","parameters":[{"name":"appId","in":"path","description":"The unique identifier of the app whose webhook settings are being retrieved.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":0}]},"PUT /app-webhooks/2026-09/{appId}/settings":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["targetUrl","throttling"],"type":"object","properties":{"targetUrl":{"type":"string","description":"The URL to which webhook events will be sent. It is a string.","example":null,"key$":"targetUrl"},"throttling":{"required":["maxConcurrentRequests"],"type":"object","properties":{"maxConcurrentRequests":{"description":"The maximum number of concurrent requests allowed. This is an integer value.","example":null,"format":"int32","type":"integer"}},"example":null,"x-ref":"#/components/schemas/WebhooksThrottlingSettings","key$":"throttling"}},"example":null,"x-ref":"#/components/schemas/WebhooksSettingsChangeRequest","index$":1},"example":null}},"required":true},"parameters":[{"name":"appId","in":"path","description":"The unique identifier of the app whose webhook settings are to be updated.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let webhooks_setting_ref01_data = Object.values(setup.data.existing.webhooks_setting)[0]

    // UPDATE
    const webhooks_setting_ref01_ent = client.WebhooksSetting()
    const webhooks_setting_ref01_data_up0 = {}

    const webhooks_setting_ref01_markdef_up0 = { name: 'targetUrl', value: 'Mark01-webhooks_setting_ref01_' + setup.now }
    webhooks_setting_ref01_data_up0 [webhooks_setting_ref01_markdef_up0.name] = webhooks_setting_ref01_markdef_up0.value

    const webhooks_setting_ref01_resdata_up0 = (await webhooks_setting_ref01_ent.update(webhooks_setting_ref01_data_up0)).data()
    assert(null != webhooks_setting_ref01_resdata_up0)

    assert(webhooks_setting_ref01_resdata_up0[webhooks_setting_ref01_markdef_up0.name] === webhooks_setting_ref01_markdef_up0.value)


    // LOAD
    const webhooks_setting_ref01_match_dt0 = {}
    const webhooks_setting_ref01_data_dt0 = (await webhooks_setting_ref01_ent.load(webhooks_setting_ref01_match_dt0)).data()
    assert(null != webhooks_setting_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/webhooks_setting/WebhooksSettingTestData.json')

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
    ['webhooks_setting01','webhooks_setting02','webhooks_setting03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SETTING_ENTID': idmap,
    'HUBSPOT_WEBHOOKS_TEST_LIVE': 'FALSE',
    'HUBSPOT_WEBHOOKS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_WEBHOOKS_APIKEY': '',
  })

  idmap = env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SETTING_ENTID']

  const live = 'TRUE' === env.HUBSPOT_WEBHOOKS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SETTING_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
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
  
