package sdktest

import (
	"encoding/json"
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

func TestWebhooksFilterEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.WebhooksFilter(nil)
		if ent == nil {
			t.Fatal("expected non-nil WebhooksFilterEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := webhooks_filterBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "webhooks_filter." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_FILTER_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		webhooksFilterRef01Ent := client.WebhooksFilter(nil)
		webhooksFilterRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "webhooks_filter"}), "webhooks_filter_ref01"))

		webhooksFilterRef01DataResult, err := webhooksFilterRef01Ent.Create(webhooksFilterRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		webhooksFilterRef01Data = core.ToMapAny(entityData(webhooksFilterRef01DataResult))
		if webhooksFilterRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if webhooksFilterRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LOAD
		webhooksFilterRef01MatchDt0 := map[string]any{
			"id": webhooksFilterRef01Data["id"],
		}
		webhooksFilterRef01DataDt0Loaded, err := webhooksFilterRef01Ent.Load(webhooksFilterRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		webhooksFilterRef01DataDt0LoadResult := core.ToMapAny(entityData(webhooksFilterRef01DataDt0Loaded))
		if webhooksFilterRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if webhooksFilterRef01DataDt0LoadResult["id"] != webhooksFilterRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func webhooks_filterBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "webhooks_filter", "WebhooksFilterTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read webhooks_filter test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse webhooks_filter test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"webhooks_filter01", "webhooks_filter02", "webhooks_filter03", "subscription01", "subscription02", "subscription03"},
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
	entidEnvRaw := os.Getenv("HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_FILTER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_FILTER_ENTID": idmap,
		"HUBSPOT_WEBHOOKS_TEST_LIVE":      "FALSE",
		"HUBSPOT_WEBHOOKS_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_WEBHOOKS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_FILTER_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
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
