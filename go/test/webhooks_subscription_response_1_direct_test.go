package sdktest

import (
	"encoding/json"
	"os"
	"strings"
	"testing"

	sdk "github.com/voxgig-sdk/hubspot-webhooks-sdk/go"
	"github.com/voxgig-sdk/hubspot-webhooks-sdk/go/core"
)

func TestWebhooksSubscriptionResponse1Direct(t *testing.T) {
	t.Run("direct-list-webhooks_subscription_response_1", func(t *testing.T) {
		setup := webhooks_subscription_response_1DirectSetup([]any{
			map[string]any{"id": "direct01"},
			map[string]any{"id": "direct02"},
		})
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		if _shouldSkip, _reason := isControlSkipped("direct", "direct-list-webhooks_subscription_response_1", _mode); _shouldSkip {
			if _reason == "" {
				_reason = "skipped via sdk-test-control.json"
			}
			t.Skip(_reason)
			return
		}
		client := setup.client


		result, err := client.Direct(map[string]any{
			"path":   "webhooks-journal/subscriptions/2026-09",
			"method": "GET",
			"params": map[string]any{},
		})
		if setup.live {
			// Live-mode leniency is a model decision
			// (main.kit.test.live.strict): synthetic IDs 4xx constantly
			// against an arbitrary public API, so the default SKIPS here.
			// A project that owns its test server sets strict and FAILS.
			if err != nil {
				t.Fatalf("list call failed (likely synthetic IDs against live API): %v", err)
			}
			if result["ok"] != true {
				t.Fatalf("list call not ok (likely synthetic IDs against live API): %v", result)
			}
			status := core.ToInt(result["status"])
			if status < 200 || status >= 300 {
				t.Fatalf("expected 2xx status, got %v", result["status"])
			}
		} else {
			if err != nil {
				t.Fatalf("direct failed: %v", err)
			}
			if result["ok"] != true {
				t.Fatalf("expected ok to be true, got %v", result["ok"])
			}
			if core.ToInt(result["status"]) != 200 {
				t.Fatalf("expected status 200, got %v", result["status"])
			}
		}

		if !setup.live {
			if dataList, ok := result["data"].([]any); ok {
				if len(dataList) != 2 {
					t.Fatalf("expected 2 items, got %d", len(dataList))
				}
			} else {
				t.Fatalf("expected data to be an array, got %T", result["data"])
			}

			if len(*setup.calls) != 1 {
				t.Fatalf("expected 1 call, got %d", len(*setup.calls))
			}
		}
	})

	t.Run("direct-load-webhooks_subscription_response_1", func(t *testing.T) {
		setup := webhooks_subscription_response_1DirectSetup(map[string]any{"id": "direct01"})
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		if _shouldSkip, _reason := isControlSkipped("direct", "direct-load-webhooks_subscription_response_1", _mode); _shouldSkip {
			if _reason == "" {
				_reason = "skipped via sdk-test-control.json"
			}
			t.Skip(_reason)
			return
		}
		client := setup.client

		params := map[string]any{}
		query := map[string]any{}
		if setup.live {
			listParams := map[string]any{}
			listResult, listErr := client.Direct(map[string]any{
				"path":   "webhooks-journal/subscriptions/2026-09",
				"method": "GET",
				"params": listParams,
			})
			if listErr != nil {
				t.Fatalf("list call failed (likely synthetic IDs against live API): %v", listErr)
			}
			if listResult["ok"] != true {
				t.Fatalf("list call not ok (likely synthetic IDs against live API): %v", listResult)
			}

			// Get first entity ID from list
			listData, _ := listResult["data"].([]any)
			if len(listData) == 0 {
				t.Skip("no entities to load in live mode")
			}
			firstEnt := core.ToMapAny(listData[0])
			params["id"] = firstEnt["id"]
			params["subscription_id"] = setup.idmap["subscription01"]
		} else {
			params["subscription_id"] = "direct01"
		}

		result, err := client.Direct(map[string]any{
			"path":   "webhooks-journal/subscriptions/2026-09/{subscription_id}",
			"method": "GET",
			"params": params,
			"query":  query,
		})
		if setup.live {
			// Live mode is lenient: synthetic IDs frequently 4xx. Skip
			// rather than fail when the load endpoint isn't reachable with
			// the IDs we can construct from setup.idmap — unless the model
			// sets main.kit.test.live.strict.
			if err != nil {
				t.Fatalf("load call failed (likely synthetic IDs against live API): %v", err)
			}
			if result["ok"] != true {
				t.Fatalf("load call not ok (likely synthetic IDs against live API): %v", result)
			}
			status := core.ToInt(result["status"])
			if status < 200 || status >= 300 {
				t.Fatalf("expected 2xx status, got %v", result["status"])
			}
		} else {
			if err != nil {
				t.Fatalf("direct failed: %v", err)
			}
			if result["ok"] != true {
				t.Fatalf("expected ok to be true, got %v", result["ok"])
			}
			if core.ToInt(result["status"]) != 200 {
				t.Fatalf("expected status 200, got %v", result["status"])
			}
			if result["data"] == nil {
				t.Fatal("expected data to be non-nil")
			}
		}

		if !setup.live {
			if dataMap, ok := result["data"].(map[string]any); ok {
				if dataMap["id"] != "direct01" {
					t.Fatalf("expected data.id to be direct01, got %v", dataMap["id"])
				}
			}

			if len(*setup.calls) != 1 {
				t.Fatalf("expected 1 call, got %d", len(*setup.calls))
			}
			call := (*setup.calls)[0]
			if initMap, ok := call["init"].(map[string]any); ok {
				if initMap["method"] != "GET" {
					t.Fatalf("expected method GET, got %v", initMap["method"])
				}
			}
			if url, ok := call["url"].(string); ok {
				if !strings.Contains(url, "direct01") {
					t.Fatalf("expected url to contain direct01, got %v", url)
				}
			}
		}
	})

}

type webhooks_subscription_response_1DirectSetupResult struct {
	client *sdk.HubspotWebhooksSDK
	calls  *[]map[string]any
	live   bool
	idmap  map[string]any
}

func webhooks_subscription_response_1DirectSetup(mockres any) *webhooks_subscription_response_1DirectSetupResult {
	loadEnvLocal()

	calls := &[]map[string]any{}

	env := envOverride(map[string]any{
		"HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SUBSCRIPTION_RESPONSE_1_ENTID": map[string]any{},
		"HUBSPOT_WEBHOOKS_TEST_LIVE":    "FALSE",
		"HUBSPOT_WEBHOOKS_APIKEY":       "",
	})

	live := env["HUBSPOT_WEBHOOKS_TEST_LIVE"] == "TRUE"

	if live {
		// sdk-test-control.json's test.client.options seeds the live
		// client; the generated fields below overwrite anything they name.
		mergedOpts := map[string]any{}
		for k, v := range liveClientOptions() {
			mergedOpts[k] = v
		}
		for k, v := range map[string]any{
			"apikey": env["HUBSPOT_WEBHOOKS_APIKEY"],
		} {
			mergedOpts[k] = v
		}
		client := sdk.NewHubspotWebhooksSDK(mergedOpts)

		idmap := map[string]any{}
		if entidRaw, ok := env["HUBSPOT_WEBHOOKS_TEST_WEBHOOKS_SUBSCRIPTION_RESPONSE_1_ENTID"]; ok {
			if entidStr, ok := entidRaw.(string); ok && strings.HasPrefix(entidStr, "{") {
				json.Unmarshal([]byte(entidStr), &idmap)
			} else if entidMap, ok := entidRaw.(map[string]any); ok {
				idmap = entidMap
			}
		}

		return &webhooks_subscription_response_1DirectSetupResult{client: client, calls: calls, live: true, idmap: idmap}
	}

	mockFetch := func(url string, init map[string]any) (map[string]any, error) {
		*calls = append(*calls, map[string]any{"url": url, "init": init})
		return map[string]any{
			"status":     200,
			"statusText": "OK",
			"headers":    map[string]any{},
			"json": (func() any)(func() any {
				if mockres != nil {
					return mockres
				}
				return map[string]any{"id": "direct01"}
			}),
		}, nil
	}

	client := sdk.NewHubspotWebhooksSDK(map[string]any{
		"base": "http://localhost:8080",
		"system": map[string]any{
			"fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
		},
	})

	return &webhooks_subscription_response_1DirectSetupResult{client: client, calls: calls, live: false, idmap: map[string]any{}}
}

var _ = os.Getenv
var _ = json.Unmarshal
