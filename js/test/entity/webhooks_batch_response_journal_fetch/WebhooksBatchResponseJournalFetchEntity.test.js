
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


describe('WebhooksBatchResponseJournalFetchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_WEBHOOKS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_WEBHOOKS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotWebhooksSDK.test()
    const ent = testsdk.WebhooksBatchResponseJournalFetch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"completedAt":{"a":true,"fo":"date-time","h":"Completed At","n":"completedAt","r":true,"sh":"The date and time when the batch operation was completed, in ISO 8601 format.","t":"`$STRING`","key$":"completedAt","index$":0},"inputs":{"a":true,"h":"Inputs","n":"inputs","r":true,"sh":"An array of strings to be processed.","t":"`$ARRAY`","key$":"inputs","index$":1},"links":{"a":true,"h":"Links","n":"links","r":false,"sh":"A map of link names to associated URIs related to the batch operation.","t":"`$OBJECT`","key$":"links","index$":2},"requestedAt":{"a":true,"fo":"date-time","h":"Requested At","n":"requestedAt","r":false,"sh":"The date and time when the batch operation was requested, in ISO 8601 format.","t":"`$STRING`","key$":"requestedAt","index$":3},"results":{"a":true,"h":"Results","n":"results","r":true,"sh":"An array of results from the batch operation, each represented as a JournalFetchResponse object.","t":"`$ARRAY`","key$":"results","index$":4},"startedAt":{"a":true,"fo":"date-time","h":"Started At","n":"startedAt","r":true,"sh":"The date and time when the batch operation started, in ISO 8601 format.","t":"`$STRING`","key$":"startedAt","index$":5},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The current status of the batch operation.","t":"`$STRING`","key$":"status","index$":6}},"name":"webhooks_batch_response_journal_fetch","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /webhooks-journal/journal-local/2026-09/batch/read","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":null,"k":"query","n":"install_portal_id","or":"install_portal_id","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/webhooks-journal/journal-local/2026-09/batch/read","q":{"exist":["install_portal_id"]},"r":{},"s":[{"lit":"webhooks-journal"},{"lit":"journal-local"},{"lit":"2026-09"},{"lit":"batch"},{"lit":"read"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /webhooks-journal/journal/2026-09/batch/read","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":null,"k":"query","n":"install_portal_id","or":"install_portal_id","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/webhooks-journal/journal/2026-09/batch/read","q":{"exist":["install_portal_id"]},"r":{},"s":[{"lit":"webhooks-journal"},{"lit":"journal"},{"lit":"2026-09"},{"lit":"batch"},{"lit":"read"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /webhooks-journal/journal-local/2026-09/batch/{offset}/next/{count}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"batch_id","or":"offset","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":null,"k":"param","n":"count","or":"count","r":true,"t":"`$INTEGER`","index$":1}],"query":[{"a":true,"ex":null,"k":"query","n":"install_portal_id","or":"install_portal_id","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/webhooks-journal/journal-local/2026-09/batch/{offset}/next/{count}","q":{"exist":["batch_id","count","install_portal_id"]},"r":{"param":{"offset":"batch_id"}},"s":[{"lit":"webhooks-journal"},{"lit":"journal-local"},{"lit":"2026-09"},{"lit":"batch"},{"var":"batch_id"},{"lit":"next"},{"var":"count"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /webhooks-journal/journal/2026-09/batch/{offset}/next/{count}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"batch_id","or":"offset","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":null,"k":"param","n":"count","or":"count","r":true,"t":"`$INTEGER`","index$":1}],"query":[{"a":true,"ex":null,"k":"query","n":"install_portal_id","or":"install_portal_id","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/webhooks-journal/journal/2026-09/batch/{offset}/next/{count}","q":{"exist":["batch_id","count","install_portal_id"]},"r":{"param":{"offset":"batch_id"}},"s":[{"lit":"webhooks-journal"},{"lit":"journal"},{"lit":"2026-09"},{"lit":"batch"},{"var":"batch_id"},{"lit":"next"},{"var":"count"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /webhooks-journal/journal-local/2026-09/batch/earliest/{count}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"count","or":"count","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":null,"k":"query","n":"install_portal_id","or":"install_portal_id","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/webhooks-journal/journal-local/2026-09/batch/earliest/{count}","q":{"exist":["count","install_portal_id"]},"r":{},"s":[{"lit":"webhooks-journal"},{"lit":"journal-local"},{"lit":"2026-09"},{"lit":"batch"},{"lit":"earliest"},{"var":"count"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /webhooks-journal/journal-local/2026-09/batch/latest/{count}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"count","or":"count","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":null,"k":"query","n":"install_portal_id","or":"install_portal_id","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/webhooks-journal/journal-local/2026-09/batch/latest/{count}","q":{"exist":["count","install_portal_id"]},"r":{},"s":[{"lit":"webhooks-journal"},{"lit":"journal-local"},{"lit":"2026-09"},{"lit":"batch"},{"lit":"latest"},{"var":"count"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"GET /webhooks-journal/journal/2026-09/batch/earliest/{count}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"count","or":"count","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":null,"k":"query","n":"install_portal_id","or":"install_portal_id","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/webhooks-journal/journal/2026-09/batch/earliest/{count}","q":{"exist":["count","install_portal_id"]},"r":{},"s":[{"lit":"webhooks-journal"},{"lit":"journal"},{"lit":"2026-09"},{"lit":"batch"},{"lit":"earliest"},{"var":"count"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"GET /webhooks-journal/journal/2026-09/batch/latest/{count}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"count","or":"count","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":null,"k":"query","n":"install_portal_id","or":"install_portal_id","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/webhooks-journal/journal/2026-09/batch/latest/{count}","q":{"exist":["count","install_portal_id"]},"r":{},"s":[{"lit":"webhooks-journal"},{"lit":"journal"},{"lit":"2026-09"},{"lit":"batch"},{"lit":"latest"},{"var":"count"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"webhooks_batch_response_journal_fetch","name__orig":"webhooks_batch_response_journal_fetch","Name":"WebhooksBatchResponseJournalFetch","name_":"webhooks_batch_response_journal_fetch","name-":"webhooks-batch-response-journal-fetch","NAME":"WEBHOOKS_BATCH_RESPONSE_JOURNAL_FETCH","index$":1}, {"active":true,"entity":"webhooks_batch_response_journal_fetch","key$":"BasicWebhooksBatchResponseJournalFetchFlow","kind":"basic","name":"BasicWebhooksBatchResponseJournalFetchFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"webhooks_batch_response_journal_fetch_ref01"},"m":{"batch_id":"batch01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"webhooks_batch_response_journal_fetch_ref01","srcdatavar":"webhooks_batch_response_journal_fetch_ref01_data","suffix":"_dt0"},"m":{"id":"webhooks_batch_response_journal_fetch01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-webhooks_batch_response_journal_fetch_ref01"}}],"index$":1}]}, 'WebhooksBatchResponseJournalFetch', {"POST /webhooks-journal/journal-local/2026-09/batch/read":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["inputs"],"type":"object","properties":{"inputs":{"type":"array","description":"An array of strings to be processed. This property is required.","example":null,"items":{"type":"string","example":null},"key$":"inputs"}},"example":null,"x-ref":"#/components/schemas/WebhooksBatchInputString","index$":1},"example":null}},"required":true},"parameters":[{"name":"installPortalId","in":"query","description":"An integer representing the ID of the portal installation. This parameter is used to specify the portal context for the request.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":0}]},"POST /webhooks-journal/journal/2026-09/batch/read":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["inputs"],"type":"object","properties":{"inputs":{"type":"array","description":"An array of strings to be processed. This property is required.","example":null,"items":{"type":"string","example":null},"key$":"inputs"}},"example":null,"x-ref":"#/components/schemas/WebhooksBatchInputString","index$":1},"example":null}},"required":true},"parameters":[{"name":"installPortalId","in":"query","description":"The ID of the portal where the webhooks are installed. This is an integer value.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":0}]},"GET /webhooks-journal/journal-local/2026-09/batch/{offset}/next/{count}":{"protocol":"http","parameters":[{"name":"count","in":"path","description":"The number of journal entries to retrieve in the batch. This is an integer and must be at least 1.","required":true,"style":"simple","explode":false,"schema":{"minimum":1,"type":"integer","format":"int32","example":null},"index$":0},{"name":"offset","in":"path","description":"The starting point for fetching the next batch of journal entries. This is a string value.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":1},{"name":"installPortalId","in":"query","description":"The ID of the portal where the webhooks are installed. This is an integer value.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":2}]},"GET /webhooks-journal/journal/2026-09/batch/{offset}/next/{count}":{"protocol":"http","parameters":[{"name":"count","in":"path","description":"The number of entries to retrieve in the batch. This is an integer and must be at least 1.","required":true,"style":"simple","explode":false,"schema":{"minimum":1,"type":"integer","format":"int32","example":null},"index$":0},{"name":"offset","in":"path","description":"The starting point in the journal from which entries will be fetched. This is a string value.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":1},{"name":"installPortalId","in":"query","description":"An optional integer parameter to specify the portal ID for which the webhook journal entries should be retrieved.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":2}]},"GET /webhooks-journal/journal-local/2026-09/batch/earliest/{count}":{"protocol":"http","parameters":[{"name":"count","in":"path","description":"The number of entries to retrieve in the batch. This must be an integer with a minimum value of 1.","required":true,"style":"simple","explode":false,"schema":{"minimum":1,"type":"integer","format":"int32","example":null},"index$":0},{"name":"installPortalId","in":"query","description":"The ID of the portal where the webhook is installed. This is an integer value.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":1}]},"GET /webhooks-journal/journal-local/2026-09/batch/latest/{count}":{"protocol":"http","parameters":[{"name":"count","in":"path","description":"The number of latest journal entries to retrieve. Must be an integer with a minimum value of 1.","required":true,"style":"simple","explode":false,"schema":{"minimum":1,"type":"integer","format":"int32","example":null},"index$":0},{"name":"installPortalId","in":"query","description":"The ID of the portal where the webhooks are installed. This is an optional parameter.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":1}]},"GET /webhooks-journal/journal/2026-09/batch/earliest/{count}":{"protocol":"http","parameters":[{"name":"count","in":"path","description":"The number of webhook journal entries to retrieve. This must be an integer with a minimum value of 1.","required":true,"style":"simple","explode":false,"schema":{"minimum":1,"type":"integer","format":"int32","example":null},"index$":0},{"name":"installPortalId","in":"query","description":"The ID of the portal where the webhook is installed. This is an integer value.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":1}]},"GET /webhooks-journal/journal/2026-09/batch/latest/{count}":{"protocol":"http","parameters":[{"name":"count","in":"path","description":"The number of webhook journal entries to retrieve. It is a required integer parameter with a minimum value of 1.","required":true,"style":"simple","explode":false,"schema":{"minimum":1,"type":"integer","format":"int32","example":null},"index$":0},{"name":"installPortalId","in":"query","description":"The ID of the portal for which the webhook journal entries are being retrieved. It is an optional integer parameter.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const webhooks_batch_response_journal_fetch_ref01_ent = client.WebhooksBatchResponseJournalFetch()
    let webhooks_batch_response_journal_fetch_ref01_data = setup.data.new.webhooks_batch_response_journal_fetch['webhooks_batch_response_journal_fetch_ref01']
    webhooks_batch_response_journal_fetch_ref01_data['batch_id'] = setup.idmap['batch01']

    webhooks_batch_response_journal_fetch_ref01_data = (await webhooks_batch_response_journal_fetch_ref01_ent.create(webhooks_batch_response_journal_fetch_ref01_data)).data()
    assert(null != webhooks_batch_response_journal_fetch_ref01_data)


    // LOAD
    const webhooks_batch_response_journal_fetch_ref01_match_dt0 = {}
    const webhooks_batch_response_journal_fetch_ref01_data_dt0 = (await webhooks_batch_response_journal_fetch_ref01_ent.load(webhooks_batch_response_journal_fetch_ref01_match_dt0)).data()
    assert(null != webhooks_batch_response_journal_fetch_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/webhooks_batch_response_journal_fetch/WebhooksBatchResponseJournalFetchTestData.json')

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
    ['webhooks_batch_response_journal_fetch01','webhooks_batch_response_journal_fetch02','webhooks_batch_response_journal_fetch03','batch01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_BATCH_RESPONSE_JOURNAL_FETCH_ENTID': idmap,
    'HUBSPOT_WEBHOOKS_TEST_LIVE': 'FALSE',
    'HUBSPOT_WEBHOOKS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_WEBHOOKS_APIKEY': '',
  })

  idmap = env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_BATCH_RESPONSE_JOURNAL_FETCH_ENTID']

  const live = 'TRUE' === env.HUBSPOT_WEBHOOKS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_BATCH_RESPONSE_JOURNAL_FETCH_ENTID']
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
  
