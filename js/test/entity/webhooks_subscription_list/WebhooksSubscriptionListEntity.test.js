
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


describe('WebhooksSubscriptionListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_WEBHOOKS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_WEBHOOKS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotWebhooksSDK.test()
    const ent = testsdk.WebhooksSubscriptionList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"active","req":true,"short":"A boolean indicating whether the subscription is currently active.","type":"`$BOOLEAN`","index$":0},{"active":true,"format":"date-time","name":"createdAt","req":true,"short":"The date and time when the subscription was created, in ISO 8601 format.","type":"`$STRING`","index$":1},{"active":true,"name":"eventType","req":true,"short":"The type of event that triggers the subscription.","type":"`$STRING`","index$":2},{"active":true,"name":"eventTypeName","req":false,"short":"The name of the event type for the subscription.","type":"`$STRING`","index$":3},{"active":true,"name":"id","req":true,"short":"The unique identifier for the subscription.","type":"`$STRING`","index$":4},{"active":true,"name":"objectTypeId","req":false,"short":"The identifier for the object type associated with the subscription.","type":"`$STRING`","index$":5},{"active":true,"name":"propertyName","req":false,"short":"The name of the property associated with the subscription event, if applicable.","type":"`$STRING`","index$":6},{"active":true,"format":"date-time","name":"updatedAt","req":false,"short":"The date and time when the subscription was last updated, in ISO 8601 format.","type":"`$STRING`","index$":7}],"id":{"field":"id","name":"id"},"name":"webhooks_subscription_list","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"app_id","orig":"app_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /app-webhooks/2026-09/{appId}/subscriptions","json":"{\"operationId\":\"get-/app-webhooks/2026-09/{appId}/subscriptions_getAll\",\"parameters\":[{\"description\":\"The unique identifier of the app for which to retrieve subscriptions.\",\"explode\":false,\"in\":\"path\",\"name\":\"appId\",\"required\":true,\"schema\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"results\":{\"description\":\"An array of subscription responses, each detailing a specific subscription's properties and status.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"active\":{\"description\":\"A boolean indicating whether the subscription is currently active.\",\"example\":null,\"type\":\"boolean\"},\"createdAt\":{\"description\":\"The date and time when the subscription was created, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"eventType\":{\"description\":\"The type of event that triggers the subscription. Valid values include various property changes, creations, deletions, merges, restores, and association changes for different HubSpot objects.\",\"enum\":[\"company.associationChange\",\"company.creation\",\"company.deletion\",\"company.merge\",\"company.propertyChange\",\"company.restore\",\"contact.associationChange\",\"contact.creation\",\"contact.deletion\",\"contact.merge\",\"contact.privacyDeletion\",\"contact.propertyChange\",\"contact.restore\",\"conversation.creation\",\"conversation.deletion\",\"conversation.newMessage\",\"conversation.privacyDeletion\",\"conversation.propertyChange\",\"deal.associationChange\",\"deal.creation\",\"deal.deletion\",\"deal.merge\",\"deal.propertyChange\",\"deal.restore\",\"event.completed\",\"line_item.associationChange\",\"line_item.creation\",\"line_item.deletion\",\"line_item.merge\",\"line_item.propertyChange\",\"line_item.restore\",\"object.associationChange\",\"object.creation\",\"object.deletion\",\"object.merge\",\"object.propertyChange\",\"object.restore\",\"product.creation\",\"product.deletion\",\"product.merge\",\"product.propertyChange\",\"product.restore\",\"ticket.associationChange\",\"ticket.creation\",\"ticket.deletion\",\"ticket.merge\",\"ticket.propertyChange\",\"ticket.restore\"],\"example\":null,\"type\":\"string\"},\"eventTypeName\":{\"description\":\"The name of the event type for the subscription.\",\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the subscription. It is an integer formatted as int64.\",\"example\":null,\"type\":\"string\"},\"objectTypeId\":{\"description\":\"The identifier for the object type associated with the subscription. It is a string.\",\"example\":null,\"type\":\"string\"},\"propertyName\":{\"description\":\"The name of the property associated with the subscription event, if applicable.\",\"example\":null,\"type\":\"string\"},\"updatedAt\":{\"description\":\"The date and time when the subscription was last updated, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"active\",\"createdAt\",\"eventType\",\"id\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"developers-read\"]},{\"oauth2\":[\"private-apps-read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"developers-read\":\"\",\"developers-write\":\"\",\"private-apps-read\":\"\",\"private-apps-write\":\"\",\"webhooks-journal-data-access\":\"\",\"webhooks-journal-snapshot-management\":\"\",\"webhooks-journal-subscription-management\":\"\",\"webhooks-journal-subscription-read\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/app-webhooks/2026-09/{appId}/subscriptions","rename":{"param":{"appId":"app_id"}},"segments":[{"lit":"app-webhooks"},{"lit":"2026-09"},{"var":"app_id"},{"lit":"subscriptions"}],"select":{"exist":["app_id"]},"transform":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["2026_09"]]},"key$":"webhooks_subscription_list","name__orig":"webhooks_subscription_list","Name":"WebhooksSubscriptionList","name_":"webhooks_subscription_list","name-":"webhooks-subscription-list","NAME":"WEBHOOKS_SUBSCRIPTION_LIST","index$":9}, {"active":true,"entity":"webhooks_subscription_list","key$":"BasicWebhooksSubscriptionListFlow","kind":"basic","name":"BasicWebhooksSubscriptionListFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"app_id":"app01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"webhooks_subscription_list_ref01"}}],"index$":0}]}, 'WebhooksSubscriptionList')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let webhooks_subscription_list_ref01_data = Object.values(setup.data.existing.webhooks_subscription_list)[0]

    // LIST
    const webhooks_subscription_list_ref01_ent = client.WebhooksSubscriptionList()
    const webhooks_subscription_list_ref01_match = {}
    webhooks_subscription_list_ref01_match['app_id'] = setup.idmap['app01']

    const webhooks_subscription_list_ref01_list = (await webhooks_subscription_list_ref01_ent.list(webhooks_subscription_list_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/webhooks_subscription_list/WebhooksSubscriptionListTestData.json')

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
    ['webhooks_subscription_list01','webhooks_subscription_list02','webhooks_subscription_list03','2026_0901','2026_0902','2026_0903'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SUBSCRIPTION_LIST_ENTID': idmap,
    'HUBSPOT_WEBHOOKS_TEST_LIVE': 'FALSE',
    'HUBSPOT_WEBHOOKS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_WEBHOOKS_APIKEY': '',
  })

  idmap = env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SUBSCRIPTION_LIST_ENTID']

  const live = 'TRUE' === env.HUBSPOT_WEBHOOKS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SUBSCRIPTION_LIST_ENTID']
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
  
