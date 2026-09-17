
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


describe('WebhooksBatchResponseSubscriptionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_WEBHOOKS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_WEBHOOKS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotWebhooksSDK.test()
    const ent = testsdk.WebhooksBatchResponseSubscription()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"completedAt","req":true,"short":"The date and time when the batch operation was completed, in ISO 8601 format.","type":"`$STRING`","index$":0},{"active":true,"name":"inputs","req":true,"short":"An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated.","type":"`$ARRAY`","index$":1},{"active":true,"name":"links","req":false,"short":"A map of link names to associated URIs providing additional information about the batch operation.","type":"`$OBJECT`","index$":2},{"active":true,"format":"date-time","name":"requestedAt","req":false,"short":"The date and time when the batch operation was requested, in ISO 8601 format.","type":"`$STRING`","index$":3},{"active":true,"name":"results","req":true,"short":"An array containing the results of the batch operation, with each item representing an individual subscription response.","type":"`$ARRAY`","index$":4},{"active":true,"format":"date-time","name":"startedAt","req":true,"short":"The date and time when the batch operation started, in ISO 8601 format.","type":"`$STRING`","index$":5},{"active":true,"name":"status","req":true,"short":"The current status of the batch operation.","type":"`$STRING`","index$":6}],"name":"webhooks_batch_response_subscription","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"app_id","orig":"app_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"POST /app-webhooks/2026-09/{appId}/subscriptions/batch/update","json":"{\"operationId\":\"post-/app-webhooks/2026-09/{appId}/subscriptions/batch/update_updateBatch\",\"parameters\":[{\"description\":\"The unique identifier of the app for which the subscriptions are being updated.\",\"explode\":false,\"in\":\"path\",\"name\":\"appId\",\"required\":true,\"schema\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"inputs\":{\"description\":\"An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated. This property is required.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"active\":{\"description\":\"A boolean indicating whether the subscription is active.\",\"example\":null,\"type\":\"boolean\"},\"id\":{\"description\":\"The unique identifier for the subscription. It is an integer.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"active\",\"id\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"inputs\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"completedAt\":{\"description\":\"The date and time when the batch operation was completed, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs providing additional information about the batch operation.\",\"example\":null,\"type\":\"object\"},\"requestedAt\":{\"description\":\"The date and time when the batch operation was requested, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"results\":{\"description\":\"An array containing the results of the batch operation, with each item representing an individual subscription response.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"active\":{\"description\":\"A boolean indicating whether the subscription is currently active.\",\"example\":null,\"type\":\"boolean\"},\"createdAt\":{\"description\":\"The date and time when the subscription was created, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"eventType\":{\"description\":\"The type of event that triggers the subscription. Valid values include various property changes, creations, deletions, merges, restores, and association changes for different HubSpot objects.\",\"enum\":[\"company.associationChange\",\"company.creation\",\"company.deletion\",\"company.merge\",\"company.propertyChange\",\"company.restore\",\"contact.associationChange\",\"contact.creation\",\"contact.deletion\",\"contact.merge\",\"contact.privacyDeletion\",\"contact.propertyChange\",\"contact.restore\",\"conversation.creation\",\"conversation.deletion\",\"conversation.newMessage\",\"conversation.privacyDeletion\",\"conversation.propertyChange\",\"deal.associationChange\",\"deal.creation\",\"deal.deletion\",\"deal.merge\",\"deal.propertyChange\",\"deal.restore\",\"event.completed\",\"line_item.associationChange\",\"line_item.creation\",\"line_item.deletion\",\"line_item.merge\",\"line_item.propertyChange\",\"line_item.restore\",\"object.associationChange\",\"object.creation\",\"object.deletion\",\"object.merge\",\"object.propertyChange\",\"object.restore\",\"product.creation\",\"product.deletion\",\"product.merge\",\"product.propertyChange\",\"product.restore\",\"ticket.associationChange\",\"ticket.creation\",\"ticket.deletion\",\"ticket.merge\",\"ticket.propertyChange\",\"ticket.restore\"],\"example\":null,\"type\":\"string\"},\"eventTypeName\":{\"description\":\"The name of the event type for the subscription.\",\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the subscription. It is an integer formatted as int64.\",\"example\":null,\"type\":\"string\"},\"objectTypeId\":{\"description\":\"The identifier for the object type associated with the subscription. It is a string.\",\"example\":null,\"type\":\"string\"},\"propertyName\":{\"description\":\"The name of the property associated with the subscription event, if applicable.\",\"example\":null,\"type\":\"string\"},\"updatedAt\":{\"description\":\"The date and time when the subscription was last updated, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"active\",\"createdAt\",\"eventType\",\"id\"],\"type\":\"object\"},\"type\":\"array\"},\"startedAt\":{\"description\":\"The date and time when the batch operation started, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"status\":{\"description\":\"The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.\",\"enum\":[\"CANCELED\",\"COMPLETE\",\"PENDING\",\"PROCESSING\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"completedAt\",\"results\",\"startedAt\",\"status\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"207\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"completedAt\":{\"description\":\"The date and time when the batch processing was completed, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"errors\":{\"description\":\"An array of StandardError objects detailing any errors that occurred during the batch processing.\",\"example\":null,\"items\":{\"description\":\"Ye olde error\",\"example\":null,\"properties\":{\"category\":{\"description\":\"A string indicating the category of the error.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"An object containing additional context about the error condition, with each property being an array of strings.\",\"example\":null,\"type\":\"object\"},\"errors\":{\"description\":\"An array of ErrorDetail objects providing further information about the error.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"A string that uniquely identifies the error instance.\",\"example\":null,\"type\":\"string\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"An object mapping link names to associated URIs that contain documentation about the error or recommended remediation steps.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A string containing a human-readable message describing the error.\",\"example\":null,\"type\":\"string\"},\"status\":{\"description\":\"A string representing the status of the error.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"An object providing more specific categorization of the error.\",\"example\":null,\"properties\":{},\"type\":\"object\"}},\"required\":[\"category\",\"context\",\"errors\",\"links\",\"message\",\"status\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs, providing additional resources or documentation related to the batch operation.\",\"example\":null,\"type\":\"object\"},\"numErrors\":{\"description\":\"The total number of errors encountered during the batch operation.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"requestedAt\":{\"description\":\"The date and time when the batch request was initially made, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"results\":{\"description\":\"An array of SubscriptionResponse objects representing the results of each subscription update processed in the batch.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/properties\"},\"required\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/required\"},\"type\":\"object\"},\"type\":\"array\"},\"startedAt\":{\"description\":\"The date and time when the batch processing began, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"status\":{\"description\":\"The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.\",\"enum\":[\"CANCELED\",\"COMPLETE\",\"PENDING\",\"PROCESSING\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"completedAt\",\"results\",\"startedAt\",\"status\"],\"type\":\"object\"}}},\"description\":\"multiple statuses\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"$ref\":\"#/responses/207/content/application~1json/schema/properties/errors/items/properties/errors/items/properties\"},\"required\":{\"$ref\":\"#/responses/207/content/application~1json/schema/properties/errors/items/properties/errors/items/required\"},\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"developers-write\"]},{\"oauth2\":[\"private-apps-write\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"developers-read\":\"\",\"developers-write\":\"\",\"private-apps-read\":\"\",\"private-apps-write\":\"\",\"webhooks-journal-data-access\":\"\",\"webhooks-journal-snapshot-management\":\"\",\"webhooks-journal-subscription-management\":\"\",\"webhooks-journal-subscription-read\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/app-webhooks/2026-09/{appId}/subscriptions/batch/update","rename":{"param":{"appId":"app_id"}},"segments":[{"lit":"app-webhooks"},{"lit":"2026-09"},{"var":"app_id"},{"lit":"subscriptions"},{"lit":"batch"},{"lit":"update"}],"select":{"exist":["app_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["2026_09"]]},"key$":"webhooks_batch_response_subscription","name__orig":"webhooks_batch_response_subscription","Name":"WebhooksBatchResponseSubscription","name_":"webhooks_batch_response_subscription","name-":"webhooks-batch-response-subscription","NAME":"WEBHOOKS_BATCH_RESPONSE_SUBSCRIPTION","index$":2}, {"active":true,"entity":"webhooks_batch_response_subscription","key$":"BasicWebhooksBatchResponseSubscriptionFlow","kind":"basic","name":"BasicWebhooksBatchResponseSubscriptionFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"webhooks_batch_response_subscription_ref01"},"match":{"app_id":"app01"},"op":"create","spec":[],"valid":[],"index$":0}]}, 'WebhooksBatchResponseSubscription')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const webhooks_batch_response_subscription_ref01_ent = client.WebhooksBatchResponseSubscription()
    let webhooks_batch_response_subscription_ref01_data = setup.data.new.webhooks_batch_response_subscription['webhooks_batch_response_subscription_ref01']
    webhooks_batch_response_subscription_ref01_data['app_id'] = setup.idmap['app01']

    webhooks_batch_response_subscription_ref01_data = (await webhooks_batch_response_subscription_ref01_ent.create(webhooks_batch_response_subscription_ref01_data)).data()
    assert(null != webhooks_batch_response_subscription_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/webhooks_batch_response_subscription/WebhooksBatchResponseSubscriptionTestData.json')

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
    ['webhooks_batch_response_subscription01','webhooks_batch_response_subscription02','webhooks_batch_response_subscription03','2026_0901','2026_0902','2026_0903'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_BATCH_RESPONSE_SUBSCRIPTION_ENTID': idmap,
    'HUBSPOT_WEBHOOKS_TEST_LIVE': 'FALSE',
    'HUBSPOT_WEBHOOKS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_WEBHOOKS_APIKEY': '',
  })

  idmap = env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_BATCH_RESPONSE_SUBSCRIPTION_ENTID']

  const live = 'TRUE' === env.HUBSPOT_WEBHOOKS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_BATCH_RESPONSE_SUBSCRIPTION_ENTID']
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
  
