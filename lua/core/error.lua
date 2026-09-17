-- HubspotWebhooks SDK error

local HubspotWebhooksError = {}
HubspotWebhooksError.__index = HubspotWebhooksError


function HubspotWebhooksError.new(code, msg, ctx)
  local self = setmetatable({}, HubspotWebhooksError)
  self.is_sdk_error = true
  self.sdk = "HubspotWebhooks"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function HubspotWebhooksError:error()
  return self.msg
end


function HubspotWebhooksError:__tostring()
  return self.msg
end


return HubspotWebhooksError
