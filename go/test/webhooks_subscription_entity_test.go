package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/hubspot-webhooks-sdk/go"
	"github.com/voxgig-sdk/hubspot-webhooks-sdk/go/core"

	vs "github.com/voxgig-sdk/hubspot-webhooks-sdk/go/utility/struct"
)

func TestWebhooksSubscriptionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.WebhooksSubscription(nil)
		if ent == nil {
			t.Fatal("expected non-nil WebhooksSubscriptionEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := webhooks_subscriptionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "webhooks_subscription." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SUBSCRIPTION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		webhooksSubscriptionRef01Ent := client.WebhooksSubscription(nil)
		webhooksSubscriptionRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "webhooks_subscription"}), "webhooks_subscription_ref01"))
		webhooksSubscriptionRef01Data["app_id"] = setup.idmap["app01"]

		webhooksSubscriptionRef01DataResult, err := webhooksSubscriptionRef01Ent.Create(webhooksSubscriptionRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		webhooksSubscriptionRef01Data = core.ToMapAny(entityData(webhooksSubscriptionRef01DataResult))
		if webhooksSubscriptionRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if webhooksSubscriptionRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		webhooksSubscriptionRef01DataUp0Up := map[string]any{
			"id": webhooksSubscriptionRef01Data["id"],
			"app_id": setup.idmap["app_id"],
		}

		webhooksSubscriptionRef01MarkdefUp0Name := "createdAt"
		webhooksSubscriptionRef01MarkdefUp0Value := fmt.Sprintf("Mark01-webhooks_subscription_ref01_%d", setup.now)
		webhooksSubscriptionRef01DataUp0Up[webhooksSubscriptionRef01MarkdefUp0Name] = webhooksSubscriptionRef01MarkdefUp0Value

		webhooksSubscriptionRef01ResdataUp0Result, err := webhooksSubscriptionRef01Ent.Update(webhooksSubscriptionRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		webhooksSubscriptionRef01ResdataUp0 := core.ToMapAny(entityData(webhooksSubscriptionRef01ResdataUp0Result))
		if webhooksSubscriptionRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if webhooksSubscriptionRef01ResdataUp0["id"] != webhooksSubscriptionRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if webhooksSubscriptionRef01ResdataUp0[webhooksSubscriptionRef01MarkdefUp0Name] != webhooksSubscriptionRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", webhooksSubscriptionRef01MarkdefUp0Name, webhooksSubscriptionRef01ResdataUp0[webhooksSubscriptionRef01MarkdefUp0Name])
		}

		// LOAD
		webhooksSubscriptionRef01MatchDt0 := map[string]any{
			"id": webhooksSubscriptionRef01Data["id"],
		}
		webhooksSubscriptionRef01DataDt0Loaded, err := webhooksSubscriptionRef01Ent.Load(webhooksSubscriptionRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		webhooksSubscriptionRef01DataDt0LoadResult := core.ToMapAny(entityData(webhooksSubscriptionRef01DataDt0Loaded))
		if webhooksSubscriptionRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if webhooksSubscriptionRef01DataDt0LoadResult["id"] != webhooksSubscriptionRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func webhooks_subscriptionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "webhooks_subscription", "WebhooksSubscriptionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read webhooks_subscription test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse webhooks_subscription test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"webhooks_subscription01", "webhooks_subscription02", "webhooks_subscription03", "2026_0901", "2026_0902", "2026_0903", "app01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SUBSCRIPTION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SUBSCRIPTION_ENTID": idmap,
		"HUBSPOT_WEBHOOKS_TEST_LIVE":      "FALSE",
		"HUBSPOT_WEBHOOKS_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_WEBHOOKS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SUBSCRIPTION_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add app_id alias for update test.
	if idmapResolved["app_id"] == nil {
		idmapResolved["app_id"] = idmapResolved["app01"]
	}

	if env["HUBSPOT_WEBHOOKS_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["HUBSPOT_WEBHOOKS_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewHubspotWebhooksSDK(core.ToMapAny(mergedOpts))
	}

	live := env["HUBSPOT_WEBHOOKS_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["HUBSPOT_WEBHOOKS_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
