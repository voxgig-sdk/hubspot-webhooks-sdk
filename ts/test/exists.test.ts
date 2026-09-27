
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { HubspotWebhooksSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = HubspotWebhooksSDK.test()
    equal(testsdk instanceof HubspotWebhooksSDK, true,
      'HubspotWebhooksSDK.test() must return a client synchronously')
  })

})
