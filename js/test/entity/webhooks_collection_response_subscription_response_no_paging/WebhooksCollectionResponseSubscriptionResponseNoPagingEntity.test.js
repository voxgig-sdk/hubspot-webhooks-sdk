
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


describe('WebhooksCollectionResponseSubscriptionResponseNoPagingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_WEBHOOKS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_WEBHOOKS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotWebhooksSDK.test()
    const ent = testsdk.WebhooksCollectionResponseSubscriptionResponseNoPaging()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"actionOverrides","req":false,"short":"An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object.","type":"`$OBJECT`","index$":0},{"active":true,"name":"actions","req":true,"short":"A list of actions that trigger the subscription.","type":"`$ARRAY`","index$":1},{"active":true,"format":"int64","name":"appId","req":true,"short":"The unique identifier for the app associated with the subscription.","type":"`$INTEGER`","index$":2},{"active":true,"name":"associatedObjectTypeIds","req":false,"short":"A list of associated object type IDs.","type":"`$ARRAY`","index$":3},{"active":true,"format":"date-time","name":"createdAt","req":true,"short":"The date and time when the subscription was created, in ISO 8601 format.","type":"`$STRING`","index$":4},{"active":true,"format":"int64","name":"createdBy","req":false,"short":"The ID of the user who created the subscription.","type":"`$INTEGER`","index$":5},{"active":true,"format":"date-time","name":"deletedAt","req":false,"short":"The date and time when the subscription was deleted, in ISO 8601 format, if applicable.","type":"`$STRING`","index$":6},{"active":true,"format":"int64","name":"id","req":true,"short":"The unique identifier for the subscription.","type":"`$INTEGER`","index$":7},{"active":true,"name":"listIds","req":false,"short":"A list of list IDs associated with the subscription.","type":"`$ARRAY`","index$":8},{"active":true,"name":"objectIds","req":false,"short":"A list of object IDs associated with the subscription.","type":"`$ARRAY`","index$":9},{"active":true,"name":"objectTypeId","req":true,"short":"The identifier for the object type associated with the subscription.","type":"`$STRING`","index$":10},{"active":true,"format":"int64","name":"portalId","req":false,"short":"The unique identifier for the portal associated with the subscription.","type":"`$INTEGER`","index$":11},{"active":true,"name":"properties","req":false,"short":"A list of property names associated with the subscription.","type":"`$ARRAY`","index$":12},{"active":true,"name":"subscriptionType","req":true,"short":"The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'.","type":"`$STRING`","index$":13},{"active":true,"format":"date-time","name":"updatedAt","req":true,"short":"The date and time when the subscription was last updated, in ISO 8601 format.","type":"`$STRING`","index$":14}],"id":{"field":"id","name":"id"},"name":"webhooks_collection_response_subscription_response_no_paging","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /webhooks-journal/subscriptions/2026-09","json":"{\"operationId\":\"get-/webhooks-journal/subscriptions/2026-09_/webhooks-journal/subscriptions/2026-03\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"results\":{\"description\":\"An array of SubscriptionResponse objects, each representing a subscription's details such as actions, appId, createdAt, and other relevant properties.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"actionOverrides\":{\"additionalProperties\":{\"example\":null,\"properties\":{\"associatedObjectTypeIds\":{\"description\":\"An array of strings, each representing an associated object type ID relevant to the action override.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"listIds\":{\"description\":\"An array of integers representing list IDs that are associated with the action override. The integers are in int64 format.\",\"example\":null,\"items\":{\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"type\":\"array\"},\"objectIds\":{\"description\":\"An array of integers, each representing an object ID for which the action override is applicable. The integers are in int64 format.\",\"example\":null,\"items\":{\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"type\":\"array\"},\"properties\":{\"description\":\"An array of strings representing the properties to be overridden in the action. Each string corresponds to a property name.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"description\":\"An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object.\",\"example\":null,\"type\":\"object\"},\"actions\":{\"description\":\"A list of actions that trigger the subscription. Possible values include 'CREATE', 'UPDATE', 'DELETE', 'MERGE', 'RESTORE', 'ASSOCIATION_ADDED', 'ASSOCIATION_REMOVED', 'SNAPSHOT', 'APP_INSTALL', 'APP_UNINSTALL', 'ADDED_TO_LIST', 'REMOVED_FROM_LIST', and 'GDPR_DELETE'.\",\"example\":null,\"items\":{\"enum\":[\"CREATE\",\"UPDATE\",\"DELETE\",\"MERGE\",\"RESTORE\",\"ASSOCIATION_ADDED\",\"ASSOCIATION_REMOVED\",\"SNAPSHOT\",\"APP_INSTALL\",\"APP_UNINSTALL\",\"ADDED_TO_LIST\",\"REMOVED_FROM_LIST\",\"GDPR_DELETE\"],\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"appId\":{\"description\":\"The unique identifier for the app associated with the subscription. It is an integer formatted as int64.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"associatedObjectTypeIds\":{\"description\":\"A list of associated object type IDs. Each ID is a string.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"createdAt\":{\"description\":\"The date and time when the subscription was created, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"createdBy\":{\"description\":\"The ID of the user who created the subscription. It is an integer formatted as int64.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"deletedAt\":{\"description\":\"The date and time when the subscription was deleted, in ISO 8601 format, if applicable.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the subscription. It is an integer formatted as int64.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"listIds\":{\"description\":\"A list of list IDs associated with the subscription. Each ID is an integer formatted as int64.\",\"example\":null,\"items\":{\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"type\":\"array\"},\"objectIds\":{\"description\":\"A list of object IDs associated with the subscription. Each ID is an integer formatted as int64.\",\"example\":null,\"items\":{\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"type\":\"array\"},\"objectTypeId\":{\"description\":\"The identifier for the object type associated with the subscription. It is a string.\",\"example\":null,\"type\":\"string\"},\"portalId\":{\"description\":\"The unique identifier for the portal associated with the subscription. It is an integer formatted as int64.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"properties\":{\"description\":\"A list of property names associated with the subscription. Each property is a string.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"subscriptionType\":{\"description\":\"The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'.\",\"enum\":[\"APP_LIFECYCLE_EVENT\",\"ASSOCIATION\",\"EVENT\",\"GDPR_PRIVACY_DELETION\",\"LIST_MEMBERSHIP\",\"OBJECT\"],\"example\":null,\"type\":\"string\"},\"updatedAt\":{\"description\":\"The date and time when the subscription was last updated, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"actions\",\"appId\",\"createdAt\",\"id\",\"objectTypeId\",\"subscriptionType\",\"updatedAt\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"webhooks-journal-subscription-read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"developers-read\":\"\",\"developers-write\":\"\",\"private-apps-read\":\"\",\"private-apps-write\":\"\",\"webhooks-journal-data-access\":\"\",\"webhooks-journal-snapshot-management\":\"\",\"webhooks-journal-subscription-management\":\"\",\"webhooks-journal-subscription-read\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/webhooks-journal/subscriptions/2026-09","segments":[{"lit":"webhooks-journal"},{"lit":"subscriptions"},{"lit":"2026-09"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"webhooks_collection_response_subscription_response_no_paging","name__orig":"webhooks_collection_response_subscription_response_no_paging","Name":"WebhooksCollectionResponseSubscriptionResponseNoPaging","name_":"webhooks_collection_response_subscription_response_no_paging","name-":"webhooks-collection-response-subscription-response-no-paging","NAME":"WEBHOOKS_COLLECTION_RESPONSE_SUBSCRIPTION_RESPONSE_NO_PAGING","index$":3}, {"active":true,"entity":"webhooks_collection_response_subscription_response_no_paging","key$":"BasicWebhooksCollectionResponseSubscriptionResponseNoPagingFlow","kind":"basic","name":"BasicWebhooksCollectionResponseSubscriptionResponseNoPagingFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"webhooks_collection_response_subscription_response_no_paging_ref01"}}],"index$":0}]}, 'WebhooksCollectionResponseSubscriptionResponseNoPaging')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let webhooks_collection_response_subscription_response_no_paging_ref01_data = Object.values(setup.data.existing.webhooks_collection_response_subscription_response_no_paging)[0]

    // LIST
    const webhooks_collection_response_subscription_response_no_paging_ref01_ent = client.WebhooksCollectionResponseSubscriptionResponseNoPaging()
    const webhooks_collection_response_subscription_response_no_paging_ref01_match = {}

    const webhooks_collection_response_subscription_response_no_paging_ref01_list = (await webhooks_collection_response_subscription_response_no_paging_ref01_ent.list(webhooks_collection_response_subscription_response_no_paging_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/webhooks_collection_response_subscription_response_no_paging/WebhooksCollectionResponseSubscriptionResponseNoPagingTestData.json')

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
    ['webhooks_collection_response_subscription_response_no_paging01','webhooks_collection_response_subscription_response_no_paging02','webhooks_collection_response_subscription_response_no_paging03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_COLLECTION_RESPONSE_SUBSCRIPTION_RESPONSE_NO_PAGING_ENTID': idmap,
    'HUBSPOT_WEBHOOKS_TEST_LIVE': 'FALSE',
    'HUBSPOT_WEBHOOKS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_WEBHOOKS_APIKEY': '',
  })

  idmap = env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_COLLECTION_RESPONSE_SUBSCRIPTION_RESPONSE_NO_PAGING_ENTID']

  const live = 'TRUE' === env.HUBSPOT_WEBHOOKS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_COLLECTION_RESPONSE_SUBSCRIPTION_RESPONSE_NO_PAGING_ENTID']
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
  
