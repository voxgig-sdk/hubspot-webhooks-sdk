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

func TestWebhooksBatchResponseJournalFetchEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.WebhooksBatchResponseJournalFetch(nil)
		if ent == nil {
			t.Fatal("expected non-nil WebhooksBatchResponseJournalFetchEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := webhooks_batch_response_journal_fetchBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "webhooks_batch_response_journal_fetch." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_BATCH_RESPONSE_JOURNAL_FETCH_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		webhooksBatchResponseJournalFetchRef01Ent := client.WebhooksBatchResponseJournalFetch(nil)
		webhooksBatchResponseJournalFetchRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "webhooks_batch_response_journal_fetch"}), "webhooks_batch_response_journal_fetch_ref01"))
		webhooksBatchResponseJournalFetchRef01Data["batch_id"] = setup.idmap["batch01"]

		webhooksBatchResponseJournalFetchRef01DataResult, err := webhooksBatchResponseJournalFetchRef01Ent.Create(webhooksBatchResponseJournalFetchRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		webhooksBatchResponseJournalFetchRef01Data = core.ToMapAny(entityData(webhooksBatchResponseJournalFetchRef01DataResult))
		if webhooksBatchResponseJournalFetchRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LOAD
		webhooksBatchResponseJournalFetchRef01MatchDt0 := map[string]any{}
		webhooksBatchResponseJournalFetchRef01DataDt0Loaded, err := webhooksBatchResponseJournalFetchRef01Ent.Load(webhooksBatchResponseJournalFetchRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if webhooksBatchResponseJournalFetchRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func webhooks_batch_response_journal_fetchBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "webhooks_batch_response_journal_fetch", "WebhooksBatchResponseJournalFetchTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read webhooks_batch_response_journal_fetch test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse webhooks_batch_response_journal_fetch test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"webhooks_batch_response_journal_fetch01", "webhooks_batch_response_journal_fetch02", "webhooks_batch_response_journal_fetch03", "earliest01", "earliest02", "earliest03", "latest01", "latest02", "latest03", "batch01", "batch02", "batch03", "next01", "next02", "next03"},
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
	entidEnvRaw := os.Getenv("HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_BATCH_RESPONSE_JOURNAL_FETCH_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_BATCH_RESPONSE_JOURNAL_FETCH_ENTID": idmap,
		"HUBSPOT_WEBHOOKS_TEST_LIVE":      "FALSE",
		"HUBSPOT_WEBHOOKS_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_WEBHOOKS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_BATCH_RESPONSE_JOURNAL_FETCH_ENTID"])
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
