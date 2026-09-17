-- WebhooksSubscription entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("hubspot-webhooks_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("WebhooksSubscriptionEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:WebhooksSubscription(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = webhooks_subscription_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "webhooks_subscription." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SUBSCRIPTION_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local webhooks_subscription_ref01_ent = client:WebhooksSubscription(nil)
    local webhooks_subscription_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.webhooks_subscription"), "webhooks_subscription_ref01"))
    webhooks_subscription_ref01_data["2026_09_id"] = setup.idmap["2026_0901"]

    local webhooks_subscription_ref01_data_result, err = webhooks_subscription_ref01_ent:create(webhooks_subscription_ref01_data, nil)
    assert.is_nil(err)
    webhooks_subscription_ref01_data = helpers.to_map(type(webhooks_subscription_ref01_data_result) == 'table' and webhooks_subscription_ref01_data_result.data_get and webhooks_subscription_ref01_data_result:data_get() or webhooks_subscription_ref01_data_result)
    assert.is_not_nil(webhooks_subscription_ref01_data)
    assert.is_not_nil(webhooks_subscription_ref01_data["id"])

    -- UPDATE
    local webhooks_subscription_ref01_data_up0_up = {
      id = webhooks_subscription_ref01_data["id"],
      ["2026_09_id"] = setup.idmap["2026_09_id"],
    }

    local webhooks_subscription_ref01_markdef_up0_name = "createdAt"
    local webhooks_subscription_ref01_markdef_up0_value = "Mark01-webhooks_subscription_ref01_" .. tostring(setup.now)
    webhooks_subscription_ref01_data_up0_up[webhooks_subscription_ref01_markdef_up0_name] = webhooks_subscription_ref01_markdef_up0_value

    local webhooks_subscription_ref01_resdata_up0_result, err = webhooks_subscription_ref01_ent:update(webhooks_subscription_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local webhooks_subscription_ref01_resdata_up0 = helpers.to_map(type(webhooks_subscription_ref01_resdata_up0_result) == 'table' and webhooks_subscription_ref01_resdata_up0_result.data_get and webhooks_subscription_ref01_resdata_up0_result:data_get() or webhooks_subscription_ref01_resdata_up0_result)
    assert.is_not_nil(webhooks_subscription_ref01_resdata_up0)
    assert.are.equal(webhooks_subscription_ref01_resdata_up0["id"], webhooks_subscription_ref01_data_up0_up["id"])
    assert.are.equal(webhooks_subscription_ref01_resdata_up0[webhooks_subscription_ref01_markdef_up0_name], webhooks_subscription_ref01_markdef_up0_value)

    -- LOAD
    local webhooks_subscription_ref01_match_dt0 = {
      id = webhooks_subscription_ref01_data["id"],
    }
    local webhooks_subscription_ref01_data_dt0_loaded, err = webhooks_subscription_ref01_ent:load(webhooks_subscription_ref01_match_dt0, nil)
    assert.is_nil(err)
    local webhooks_subscription_ref01_data_dt0_load_result = helpers.to_map(type(webhooks_subscription_ref01_data_dt0_loaded) == 'table' and webhooks_subscription_ref01_data_dt0_loaded.data_get and webhooks_subscription_ref01_data_dt0_loaded:data_get() or webhooks_subscription_ref01_data_dt0_loaded)
    assert.is_not_nil(webhooks_subscription_ref01_data_dt0_load_result)
    assert.are.equal(webhooks_subscription_ref01_data_dt0_load_result["id"], webhooks_subscription_ref01_data["id"])

  end)
end)

function webhooks_subscription_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/webhooks_subscription/WebhooksSubscriptionTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read webhooks_subscription test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "webhooks_subscription01", "webhooks_subscription02", "webhooks_subscription03", "2026_0901", "2026_0902", "2026_0903" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SUBSCRIPTION_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SUBSCRIPTION_ENTID"] = idmap,
    ["HUBSPOT_WEBHOOKS_TEST_LIVE"] = "FALSE",
    ["HUBSPOT_WEBHOOKS_TEST_EXPLAIN"] = "FALSE",
    ["HUBSPOT_WEBHOOKS_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SUBSCRIPTION_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["2026_09_id"] == nil then
    idmap_resolved["2026_09_id"] = idmap_resolved["2026_0901"]
  end

  if env["HUBSPOT_WEBHOOKS_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["HUBSPOT_WEBHOOKS_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["HUBSPOT_WEBHOOKS_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["HUBSPOT_WEBHOOKS_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
