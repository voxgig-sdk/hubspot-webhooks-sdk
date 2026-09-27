
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


describe('BasicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_WEBHOOKS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_WEBHOOKS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotWebhooksSDK.test()
    const ent = testsdk.Basic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"basic","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /webhooks-journal/journal-local/2026-09/offset/{offset}/next","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"offset_id","or":"offset","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":null,"k":"query","n":"install_portal_id","or":"install_portal_id","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/webhooks-journal/journal-local/2026-09/offset/{offset}/next","q":{"exist":["install_portal_id","offset_id"]},"r":{"param":{"offset":"offset_id"}},"s":[{"lit":"webhooks-journal"},{"lit":"journal-local"},{"lit":"2026-09"},{"lit":"offset"},{"var":"offset_id"},{"lit":"next"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /webhooks-journal/journal/2026-09/offset/{offset}/next","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"offset_id","or":"offset","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":null,"k":"query","n":"install_portal_id","or":"install_portal_id","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/webhooks-journal/journal/2026-09/offset/{offset}/next","q":{"exist":["install_portal_id","offset_id"]},"r":{"param":{"offset":"offset_id"}},"s":[{"lit":"webhooks-journal"},{"lit":"journal"},{"lit":"2026-09"},{"lit":"offset"},{"var":"offset_id"},{"lit":"next"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /webhooks-journal/journal-local/2026-09/earliest","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":null,"k":"query","n":"install_portal_id","or":"install_portal_id","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/webhooks-journal/journal-local/2026-09/earliest","q":{"exist":["install_portal_id"]},"r":{},"s":[{"lit":"webhooks-journal"},{"lit":"journal-local"},{"lit":"2026-09"},{"lit":"earliest"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /webhooks-journal/journal-local/2026-09/latest","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":null,"k":"query","n":"install_portal_id","or":"install_portal_id","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/webhooks-journal/journal-local/2026-09/latest","q":{"exist":["install_portal_id"]},"r":{},"s":[{"lit":"webhooks-journal"},{"lit":"journal-local"},{"lit":"2026-09"},{"lit":"latest"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"GET /webhooks-journal/journal/2026-09/earliest","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":null,"k":"query","n":"install_portal_id","or":"install_portal_id","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/webhooks-journal/journal/2026-09/earliest","q":{"exist":["install_portal_id"]},"r":{},"s":[{"lit":"webhooks-journal"},{"lit":"journal"},{"lit":"2026-09"},{"lit":"earliest"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"GET /webhooks-journal/journal/2026-09/latest","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":null,"k":"query","n":"install_portal_id","or":"install_portal_id","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/webhooks-journal/journal/2026-09/latest","q":{"exist":["install_portal_id"]},"r":{},"s":[{"lit":"webhooks-journal"},{"lit":"journal"},{"lit":"2026-09"},{"lit":"latest"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"app_id","or":"app_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"ex":null,"k":"param","n":"subscription_id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"DELETE","o":"/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}","q":{"exist":["app_id","subscription_id"]},"r":{"param":{"appId":"app_id","subscriptionId":"subscription_id"}},"s":[{"lit":"app-webhooks"},{"lit":"2026-09"},{"var":"app_id"},{"lit":"subscriptions"},{"var":"subscription_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /app-webhooks/2026-09/{appId}/settings","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"app_id","or":"app_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/app-webhooks/2026-09/{appId}/settings","q":{"exist":["app_id"]},"r":{"param":{"appId":"app_id"}},"s":[{"lit":"app-webhooks"},{"lit":"2026-09"},{"var":"app_id"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"DELETE /webhooks-journal/subscriptions/2026-09/filters/{filterId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"filter_id","or":"filter_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/webhooks-journal/subscriptions/2026-09/filters/{filterId}","q":{"exist":["filter_id"]},"r":{"param":{"filterId":"filter_id"}},"s":[{"lit":"webhooks-journal"},{"lit":"subscriptions"},{"lit":"2026-09"},{"lit":"filters"},{"var":"filter_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"DELETE /webhooks-journal/subscriptions/2026-09/portals/{portalId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"portal_id","or":"portal_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/webhooks-journal/subscriptions/2026-09/portals/{portalId}","q":{"exist":["portal_id"]},"r":{"param":{"portalId":"portal_id"}},"s":[{"lit":"webhooks-journal"},{"lit":"subscriptions"},{"lit":"2026-09"},{"lit":"portals"},{"var":"portal_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"DELETE /webhooks-journal/subscriptions/2026-09/{subscriptionId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"subscription_id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/webhooks-journal/subscriptions/2026-09/{subscriptionId}","q":{"exist":["subscription_id"]},"r":{"param":{"subscriptionId":"subscription_id"}},"s":[{"lit":"webhooks-journal"},{"lit":"subscriptions"},{"lit":"2026-09"},{"var":"subscription_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"basic","name__orig":"basic","Name":"Basic","name_":"basic","name-":"basic","NAME":"BASIC","index$":0}, {"active":true,"entity":"basic","key$":"BasicBasicFlow","kind":"basic","name":"BasicBasicFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"basic_ref01","srcdatavar":"basic_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-basic_ref01"}}],"index$":0}]}, 'Basic', {"GET /webhooks-journal/journal-local/2026-09/offset/{offset}/next":{"protocol":"http","parameters":[{"name":"offset","in":"path","description":"The offset string indicating the starting point for retrieving the next batch of journal entries.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0},{"name":"installPortalId","in":"query","description":"An integer representing the ID of the portal installation for which to retrieve the journal entries.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":1}]},"GET /webhooks-journal/journal/2026-09/offset/{offset}/next":{"protocol":"http","parameters":[{"name":"offset","in":"path","description":"The offset from which to start retrieving the next set of webhook journal entries. It is a string value.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0},{"name":"installPortalId","in":"query","description":"The ID of the portal installation for which the webhook journal entries are being retrieved. It is an integer value.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":1}]},"GET /webhooks-journal/journal-local/2026-09/earliest":{"protocol":"http","parameters":[{"name":"installPortalId","in":"query","description":"The ID of the portal installation for which to retrieve the earliest journal entry. This parameter helps specify the context of the request.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":0}]},"GET /webhooks-journal/journal-local/2026-09/latest":{"protocol":"http","parameters":[{"name":"installPortalId","in":"query","description":"The ID of the installation portal to filter the webhook journal entries. It is an integer value.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":0}]},"GET /webhooks-journal/journal/2026-09/earliest":{"protocol":"http","parameters":[{"name":"installPortalId","in":"query","description":"The ID of the installation portal for which to retrieve the earliest journal entry. This is an integer value.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":0}]},"GET /webhooks-journal/journal/2026-09/latest":{"protocol":"http","parameters":[{"name":"installPortalId","in":"query","description":"The unique identifier of the portal installation to filter the journal entries.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":0}]},"DELETE /app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}":{"protocol":"http","parameters":[{"name":"appId","in":"path","description":"The unique identifier of the app for which the subscription is configured.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":0},{"name":"subscriptionId","in":"path","description":"The unique identifier of the subscription to delete.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":1}]},"DELETE /app-webhooks/2026-09/{appId}/settings":{"protocol":"http","parameters":[{"name":"appId","in":"path","description":"The unique identifier of the app whose webhook settings are to be deleted.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int32","example":null},"index$":0}]},"DELETE /webhooks-journal/subscriptions/2026-09/filters/{filterId}":{"protocol":"http","parameters":[{"name":"filterId","in":"path","description":"The unique identifier of the filter to delete. It is required to specify which filter should be removed from the subscription.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0}]},"DELETE /webhooks-journal/subscriptions/2026-09/portals/{portalId}":{"protocol":"http","parameters":[{"name":"portalId","in":"path","description":"The unique identifier of the portal for which the subscription is to be deleted.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0}]},"DELETE /webhooks-journal/subscriptions/2026-09/{subscriptionId}":{"protocol":"http","parameters":[{"name":"subscriptionId","in":"path","description":"The unique identifier of the subscription to delete.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let basic_ref01_data = Object.values(setup.data.existing.basic)[0]

    // LOAD
    const basic_ref01_ent = client.Basic()
    const basic_ref01_match_dt0 = {}
    const basic_ref01_data_dt0 = (await basic_ref01_ent.load(basic_ref01_match_dt0)).data()
    assert(null != basic_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/basic/BasicTestData.json')

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
    ['basic01','basic02','basic03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_WEBHOOKS_TEST_BASIC_ENTID': idmap,
    'HUBSPOT_WEBHOOKS_TEST_LIVE': 'FALSE',
    'HUBSPOT_WEBHOOKS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_WEBHOOKS_APIKEY': '',
  })

  idmap = env['HUBSPOT_WEBHOOKS_TEST_BASIC_ENTID']

  const live = 'TRUE' === env.HUBSPOT_WEBHOOKS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_WEBHOOKS_TEST_BASIC_ENTID']
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
  
