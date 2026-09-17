
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

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"conditions","req":true,"short":"An array of conditions that define the criteria for the filter.","type":"`$ARRAY`","index$":0},{"active":true,"format":"int64","name":"createdAt","req":true,"short":"A Unix timestamp in milliseconds indicating when the filter was created.","type":"`$INTEGER`","index$":1},{"active":true,"name":"filter","req":true,"short":"Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against.","type":"`$OBJECT`","index$":2},{"active":true,"format":"int64","name":"filterId","req":true,"short":"The unique identifier for the created filter.","type":"`$INTEGER`","index$":3},{"active":true,"format":"int64","name":"id","req":true,"short":"The unique identifier for the filter.","type":"`$INTEGER`","index$":4},{"active":true,"format":"int64","name":"subscriptionId","req":true,"short":"The unique identifier of the subscription to which the filter will be applied.","type":"`$INTEGER`","index$":5}],"id":{"field":"id","name":"id"},"name":"webhooks_filter","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /webhooks-journal/subscriptions/2026-09/filters","json":"{\"operationId\":\"post-/webhooks-journal/subscriptions/2026-09/filters_/webhooks-journal/subscriptions/2026-03/filters\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"filter\":{\"description\":\"Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. \",\"example\":null,\"properties\":{\"conditions\":{\"description\":\"An array of conditions that define the criteria for the filter. Each condition specifies a property, an operator, and optionally a value or values.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"filterType\":{\"description\":\"A string indicating the type of filter being applied. Valid value is 'CRM_OBJECT_PROPERTY'.\",\"enum\":[\"CRM_OBJECT_PROPERTY\"],\"example\":null,\"type\":\"string\"},\"operator\":{\"description\":\"A string specifying the operation to be performed in the condition. Valid values include 'EQ', 'N_EQ', 'LT', 'GT', 'LTE', 'GTE', 'CONTAINS', 'STARTS_WITH', 'ENDS_WITH', 'IN', 'NOT_IN', 'IS_EMPTY', and 'IS_NOT_EMPTY'.\",\"enum\":[\"CONTAINS\",\"ENDS_WITH\",\"EQ\",\"GT\",\"GTE\",\"IN\",\"IS_EMPTY\",\"IS_NOT_EMPTY\",\"LT\",\"LTE\",\"N_EQ\",\"NOT_IN\",\"STARTS_WITH\"],\"example\":null,\"type\":\"string\"},\"property\":{\"description\":\"A string representing the specific property of the CRM object that the condition applies to.\",\"example\":null,\"type\":\"string\"},\"value\":{\"description\":\"A string representing the value to be compared against the specified property when using single-value operators.\",\"example\":null,\"type\":\"string\"},\"values\":{\"description\":\"An array of strings used to specify multiple values for comparison when using operators that support multiple values, such as 'IN' or 'NOT_IN'.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"filterType\",\"operator\",\"property\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"conditions\"],\"type\":\"object\"},\"subscriptionId\":{\"description\":\"The unique identifier of the subscription to which the filter will be applied. It is an integer formatted as int64.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"filter\",\"subscriptionId\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"filterId\":{\"description\":\"The unique identifier for the created filter. It is an integer formatted as int64.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"filterId\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"webhooks-journal-subscription-management\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"developers-read\":\"\",\"developers-write\":\"\",\"private-apps-read\":\"\",\"private-apps-write\":\"\",\"webhooks-journal-data-access\":\"\",\"webhooks-journal-snapshot-management\":\"\",\"webhooks-journal-subscription-management\":\"\",\"webhooks-journal-subscription-read\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/webhooks-journal/subscriptions/2026-09/filters","segments":[{"lit":"webhooks-journal"},{"lit":"subscriptions"},{"lit":"2026-09"},{"lit":"filters"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"id","orig":"filter_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /webhooks-journal/subscriptions/2026-09/filters/{filterId}","json":"{\"operationId\":\"get-/webhooks-journal/subscriptions/2026-09/filters/{filterId}_/webhooks-journal/subscriptions/2026-03/filters/{filterId}\",\"parameters\":[{\"description\":\"The unique identifier of the filter to retrieve.\",\"explode\":false,\"in\":\"path\",\"name\":\"filterId\",\"required\":true,\"schema\":{\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"createdAt\":{\"description\":\"A Unix timestamp in milliseconds indicating when the filter was created.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"filter\":{\"description\":\"Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. \",\"example\":null,\"properties\":{\"conditions\":{\"description\":\"An array of conditions that define the criteria for the filter. Each condition specifies a property, an operator, and optionally a value or values.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"filterType\":{\"description\":\"A string indicating the type of filter being applied. Valid value is 'CRM_OBJECT_PROPERTY'.\",\"enum\":[\"CRM_OBJECT_PROPERTY\"],\"example\":null,\"type\":\"string\"},\"operator\":{\"description\":\"A string specifying the operation to be performed in the condition. Valid values include 'EQ', 'N_EQ', 'LT', 'GT', 'LTE', 'GTE', 'CONTAINS', 'STARTS_WITH', 'ENDS_WITH', 'IN', 'NOT_IN', 'IS_EMPTY', and 'IS_NOT_EMPTY'.\",\"enum\":[\"CONTAINS\",\"ENDS_WITH\",\"EQ\",\"GT\",\"GTE\",\"IN\",\"IS_EMPTY\",\"IS_NOT_EMPTY\",\"LT\",\"LTE\",\"N_EQ\",\"NOT_IN\",\"STARTS_WITH\"],\"example\":null,\"type\":\"string\"},\"property\":{\"description\":\"A string representing the specific property of the CRM object that the condition applies to.\",\"example\":null,\"type\":\"string\"},\"value\":{\"description\":\"A string representing the value to be compared against the specified property when using single-value operators.\",\"example\":null,\"type\":\"string\"},\"values\":{\"description\":\"An array of strings used to specify multiple values for comparison when using operators that support multiple values, such as 'IN' or 'NOT_IN'.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"filterType\",\"operator\",\"property\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"conditions\"],\"type\":\"object\"},\"id\":{\"description\":\"The unique identifier for the filter. It is an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"createdAt\",\"filter\",\"id\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"webhooks-journal-subscription-read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"developers-read\":\"\",\"developers-write\":\"\",\"private-apps-read\":\"\",\"private-apps-write\":\"\",\"webhooks-journal-data-access\":\"\",\"webhooks-journal-snapshot-management\":\"\",\"webhooks-journal-subscription-management\":\"\",\"webhooks-journal-subscription-read\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/webhooks-journal/subscriptions/2026-09/filters/{filterId}","rename":{"param":{"filterId":"id"}},"segments":[{"lit":"webhooks-journal"},{"lit":"subscriptions"},{"lit":"2026-09"},{"lit":"filters"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.filter`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"subscription_id","orig":"subscription_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}","json":"{\"operationId\":\"get-/webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}_/webhooks-journal/subscriptions/2026-03/filters/subscription/{subscriptionId}\",\"parameters\":[{\"description\":\"The unique identifier of the subscription for which to retrieve filters.\",\"explode\":false,\"in\":\"path\",\"name\":\"subscriptionId\",\"required\":true,\"schema\":{\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"items\":{\"example\":null,\"properties\":{\"createdAt\":{\"description\":\"A Unix timestamp in milliseconds indicating when the filter was created.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"filter\":{\"description\":\"Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. \",\"example\":null,\"properties\":{\"conditions\":{\"description\":\"An array of conditions that define the criteria for the filter. Each condition specifies a property, an operator, and optionally a value or values.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"filterType\":{\"description\":\"A string indicating the type of filter being applied. Valid value is 'CRM_OBJECT_PROPERTY'.\",\"enum\":[\"CRM_OBJECT_PROPERTY\"],\"example\":null,\"type\":\"string\"},\"operator\":{\"description\":\"A string specifying the operation to be performed in the condition. Valid values include 'EQ', 'N_EQ', 'LT', 'GT', 'LTE', 'GTE', 'CONTAINS', 'STARTS_WITH', 'ENDS_WITH', 'IN', 'NOT_IN', 'IS_EMPTY', and 'IS_NOT_EMPTY'.\",\"enum\":[\"CONTAINS\",\"ENDS_WITH\",\"EQ\",\"GT\",\"GTE\",\"IN\",\"IS_EMPTY\",\"IS_NOT_EMPTY\",\"LT\",\"LTE\",\"N_EQ\",\"NOT_IN\",\"STARTS_WITH\"],\"example\":null,\"type\":\"string\"},\"property\":{\"description\":\"A string representing the specific property of the CRM object that the condition applies to.\",\"example\":null,\"type\":\"string\"},\"value\":{\"description\":\"A string representing the value to be compared against the specified property when using single-value operators.\",\"example\":null,\"type\":\"string\"},\"values\":{\"description\":\"An array of strings used to specify multiple values for comparison when using operators that support multiple values, such as 'IN' or 'NOT_IN'.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"filterType\",\"operator\",\"property\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"conditions\"],\"type\":\"object\"},\"id\":{\"description\":\"The unique identifier for the filter. It is an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"createdAt\",\"filter\",\"id\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"webhooks-journal-subscription-read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"developers-read\":\"\",\"developers-write\":\"\",\"private-apps-read\":\"\",\"private-apps-write\":\"\",\"webhooks-journal-data-access\":\"\",\"webhooks-journal-snapshot-management\":\"\",\"webhooks-journal-subscription-management\":\"\",\"webhooks-journal-subscription-read\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}","rename":{"param":{"subscriptionId":"subscription_id"}},"segments":[{"lit":"webhooks-journal"},{"lit":"subscriptions"},{"lit":"2026-09"},{"lit":"filters"},{"lit":"subscription"},{"var":"subscription_id"}],"select":{"exist":["subscription_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["subscription"]]},"key$":"webhooks_filter","name__orig":"webhooks_filter","Name":"WebhooksFilter","name_":"webhooks_filter","name-":"webhooks-filter","NAME":"WEBHOOKS_FILTER","index$":5}, {"active":true,"entity":"webhooks_filter","key$":"BasicWebhooksFilterFlow","kind":"basic","name":"BasicWebhooksFilterFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"webhooks_filter_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"webhooks_filter_ref01","srcdatavar":"webhooks_filter_ref01_data","suffix":"_dt0"},"match":{"id":"webhooks_filter01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-webhooks_filter_ref01"}}],"index$":1}]}, 'WebhooksFilter')
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
    const webhooks_filter_ref01_match_dt0 = {}
    webhooks_filter_ref01_match_dt0.id = webhooks_filter_ref01_data.id
    const webhooks_filter_ref01_data_dt0 = (await webhooks_filter_ref01_ent.load(webhooks_filter_ref01_match_dt0)).data()
    assert(webhooks_filter_ref01_data_dt0.id === webhooks_filter_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

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
    ['webhooks_filter01','webhooks_filter02','webhooks_filter03','subscription01','subscription02','subscription03'],
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
  
