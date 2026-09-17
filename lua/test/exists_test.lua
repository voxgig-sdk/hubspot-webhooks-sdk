-- HubspotWebhooks SDK exists test

local sdk = require("hubspot-webhooks_sdk")

describe("HubspotWebhooksSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
