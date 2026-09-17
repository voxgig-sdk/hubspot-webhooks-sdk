package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "HubspotWebhooks",
			"slug": "hubspot-webhooks",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.hubapi.com",
			"auth": map[string]any{
				"prefix": "",
				"in": "query",
				"name": "hapikey",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"basic": map[string]any{},
				"webhooks_batch_response_journal_fetch": map[string]any{},
				"webhooks_batch_response_subscription": map[string]any{},
				"webhooks_collection_response_subscription_response_no_paging": map[string]any{},
				"webhooks_crm_object_snapshot_batch": map[string]any{},
				"webhooks_filter": map[string]any{},
				"webhooks_setting": map[string]any{},
				"webhooks_snapshot_status": map[string]any{},
				"webhooks_subscription": map[string]any{},
				"webhooks_subscription_list": map[string]any{},
				"webhooks_subscription_response_1": map[string]any{},
			},
		},
		"entity": map[string]any{
			"basic": map[string]any{
				"fields": []any{},
				"name": "basic",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "offset_id",
											"orig": "offset",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/journal-local/2026-09/offset/{offset}/next",
								"rename": map[string]any{
									"param": map[string]any{
										"offset": "offset_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "journal-local",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "offset",
									},
									map[string]any{
										"var": "offset_id",
									},
									map[string]any{
										"lit": "next",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"install_portal_id",
										"offset_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"journal-local",
									"2026-09",
									"offset",
									"{offset_id}",
									"next",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "offset_id",
											"orig": "offset",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/journal/2026-09/offset/{offset}/next",
								"rename": map[string]any{
									"param": map[string]any{
										"offset": "offset_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "journal",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "offset",
									},
									map[string]any{
										"var": "offset_id",
									},
									map[string]any{
										"lit": "next",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"install_portal_id",
										"offset_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"journal",
									"2026-09",
									"offset",
									"{offset_id}",
									"next",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/journal-local/2026-09/earliest",
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "journal-local",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "earliest",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"install_portal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"journal-local",
									"2026-09",
									"earliest",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/journal-local/2026-09/latest",
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "journal-local",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "latest",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"install_portal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"journal-local",
									"2026-09",
									"latest",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/journal/2026-09/earliest",
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "journal",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "earliest",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"install_portal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"journal",
									"2026-09",
									"earliest",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/journal/2026-09/latest",
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "journal",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "latest",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"install_portal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"journal",
									"2026-09",
									"latest",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "subscription_id",
											"orig": "subscription_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"subscriptionId": "subscription_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "app-webhooks",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"subscription_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"app-webhooks",
									"2026-09",
									"{app_id}",
									"subscriptions",
									"{subscription_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/app-webhooks/2026-09/{appId}/settings",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "app-webhooks",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"app-webhooks",
									"2026-09",
									"{app_id}",
									"settings",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "filter_id",
											"orig": "filter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/webhooks-journal/subscriptions/2026-09/filters/{filterId}",
								"rename": map[string]any{
									"param": map[string]any{
										"filterId": "filter_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "filters",
									},
									map[string]any{
										"var": "filter_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"subscriptions",
									"2026-09",
									"filters",
									"{filter_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "portal_id",
											"orig": "portal_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/webhooks-journal/subscriptions/2026-09/portals/{portalId}",
								"rename": map[string]any{
									"param": map[string]any{
										"portalId": "portal_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "portals",
									},
									map[string]any{
										"var": "portal_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"portal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"subscriptions",
									"2026-09",
									"portals",
									"{portal_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "subscription_id",
											"orig": "subscription_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/webhooks-journal/subscriptions/2026-09/{subscriptionId}",
								"rename": map[string]any{
									"param": map[string]any{
										"subscriptionId": "subscription_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "subscription_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"subscriptions",
									"2026-09",
									"{subscription_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"offset",
						},
						[]any{
							"filter",
						},
						[]any{
							"portal",
						},
						[]any{
							"2026_09",
						},
						[]any{
							"2026_09",
							"subscription",
						},
					},
				},
			},
			"webhooks_batch_response_journal_fetch": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "completedAt",
						"req": true,
						"short": "The date and time when the batch operation was completed, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inputs",
						"req": true,
						"short": "An array of strings to be processed.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "links",
						"short": "A map of link names to associated URIs related to the batch operation.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "date-time",
						"name": "requestedAt",
						"short": "The date and time when the batch operation was requested, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"short": "An array of results from the batch operation, each represented as a JournalFetchResponse object.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "startedAt",
						"req": true,
						"short": "The date and time when the batch operation started, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the batch operation.",
						"type": "`$STRING`",
					},
				},
				"name": "webhooks_batch_response_journal_fetch",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks-journal/journal-local/2026-09/batch/read",
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "journal-local",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "read",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"install_portal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"journal-local",
									"2026-09",
									"batch",
									"read",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks-journal/journal/2026-09/batch/read",
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "journal",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "read",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"install_portal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"journal",
									"2026-09",
									"batch",
									"read",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "batch_id",
											"orig": "offset",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "count",
											"orig": "count",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/journal-local/2026-09/batch/{offset}/next/{count}",
								"rename": map[string]any{
									"param": map[string]any{
										"offset": "batch_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "journal-local",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"var": "batch_id",
									},
									map[string]any{
										"lit": "next",
									},
									map[string]any{
										"var": "count",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"batch_id",
										"count",
										"install_portal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"journal-local",
									"2026-09",
									"batch",
									"{batch_id}",
									"next",
									"{count}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "batch_id",
											"orig": "offset",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "count",
											"orig": "count",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/journal/2026-09/batch/{offset}/next/{count}",
								"rename": map[string]any{
									"param": map[string]any{
										"offset": "batch_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "journal",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"var": "batch_id",
									},
									map[string]any{
										"lit": "next",
									},
									map[string]any{
										"var": "count",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"batch_id",
										"count",
										"install_portal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"journal",
									"2026-09",
									"batch",
									"{batch_id}",
									"next",
									"{count}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "count",
											"orig": "count",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/journal-local/2026-09/batch/earliest/{count}",
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "journal-local",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "earliest",
									},
									map[string]any{
										"var": "count",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"count",
										"install_portal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"journal-local",
									"2026-09",
									"batch",
									"earliest",
									"{count}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "count",
											"orig": "count",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/journal-local/2026-09/batch/latest/{count}",
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "journal-local",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "latest",
									},
									map[string]any{
										"var": "count",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"count",
										"install_portal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"journal-local",
									"2026-09",
									"batch",
									"latest",
									"{count}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "count",
											"orig": "count",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/journal/2026-09/batch/earliest/{count}",
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "journal",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "earliest",
									},
									map[string]any{
										"var": "count",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"count",
										"install_portal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"journal",
									"2026-09",
									"batch",
									"earliest",
									"{count}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "count",
											"orig": "count",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/journal/2026-09/batch/latest/{count}",
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "journal",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "latest",
									},
									map[string]any{
										"var": "count",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"count",
										"install_portal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"journal",
									"2026-09",
									"batch",
									"latest",
									"{count}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"earliest",
						},
						[]any{
							"latest",
						},
						[]any{
							"batch",
							"next",
						},
					},
				},
			},
			"webhooks_batch_response_subscription": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "completedAt",
						"req": true,
						"short": "The date and time when the batch operation was completed, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inputs",
						"req": true,
						"short": "An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "links",
						"short": "A map of link names to associated URIs providing additional information about the batch operation.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "date-time",
						"name": "requestedAt",
						"short": "The date and time when the batch operation was requested, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"short": "An array containing the results of the batch operation, with each item representing an individual subscription response.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "startedAt",
						"req": true,
						"short": "The date and time when the batch operation started, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the batch operation.",
						"type": "`$STRING`",
					},
				},
				"name": "webhooks_batch_response_subscription",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/app-webhooks/2026-09/{appId}/subscriptions/batch/update",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "app-webhooks",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "update",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"app-webhooks",
									"2026-09",
									"{app_id}",
									"subscriptions",
									"batch",
									"update",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"webhooks_collection_response_subscription_response_no_paging": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "actionOverrides",
						"short": "An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "actions",
						"req": true,
						"short": "A list of actions that trigger the subscription.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "int64",
						"name": "appId",
						"req": true,
						"short": "The unique identifier for the app associated with the subscription.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "associatedObjectTypeIds",
						"short": "A list of associated object type IDs.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date and time when the subscription was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "createdBy",
						"short": "The ID of the user who created the subscription.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "deletedAt",
						"short": "The date and time when the subscription was deleted, in ISO 8601 format, if applicable.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "id",
						"req": true,
						"short": "The unique identifier for the subscription.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "listIds",
						"short": "A list of list IDs associated with the subscription.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "objectIds",
						"short": "A list of object IDs associated with the subscription.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "objectTypeId",
						"req": true,
						"short": "The identifier for the object type associated with the subscription.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "portalId",
						"short": "The unique identifier for the portal associated with the subscription.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "properties",
						"short": "A list of property names associated with the subscription.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "subscriptionType",
						"req": true,
						"short": "The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"short": "The date and time when the subscription was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "webhooks_collection_response_subscription_response_no_paging",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/subscriptions/2026-09",
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"lit": "2026-09",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"parts": []any{
									"webhooks-journal",
									"subscriptions",
									"2026-09",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"webhooks_crm_object_snapshot_batch": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "snapshotRequests",
						"req": true,
						"short": "An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "snapshotResponses",
						"req": true,
						"short": "An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object.",
						"type": "`$ARRAY`",
					},
				},
				"name": "webhooks_crm_object_snapshot_batch",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks-journal/snapshots/2026-09/crm",
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "snapshots",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "crm",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"snapshots",
									"2026-09",
									"crm",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"webhooks_filter": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "conditions",
						"req": true,
						"short": "An array of conditions that define the criteria for the filter.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "int64",
						"name": "createdAt",
						"req": true,
						"short": "A Unix timestamp in milliseconds indicating when the filter was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "filter",
						"req": true,
						"short": "Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "int64",
						"name": "filterId",
						"req": true,
						"short": "The unique identifier for the created filter.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "int64",
						"name": "id",
						"req": true,
						"short": "The unique identifier for the filter.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "int64",
						"name": "subscriptionId",
						"req": true,
						"short": "The unique identifier of the subscription to which the filter will be applied.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "webhooks_filter",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks-journal/subscriptions/2026-09/filters",
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "filters",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"subscriptions",
									"2026-09",
									"filters",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "filter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/subscriptions/2026-09/filters/{filterId}",
								"rename": map[string]any{
									"param": map[string]any{
										"filterId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "filters",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.filter`",
								},
								"parts": []any{
									"webhooks-journal",
									"subscriptions",
									"2026-09",
									"filters",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "subscription_id",
											"orig": "subscription_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}",
								"rename": map[string]any{
									"param": map[string]any{
										"subscriptionId": "subscription_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "filters",
									},
									map[string]any{
										"lit": "subscription",
									},
									map[string]any{
										"var": "subscription_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"subscriptions",
									"2026-09",
									"filters",
									"subscription",
									"{subscription_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"subscription",
						},
					},
				},
			},
			"webhooks_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "int32",
						"name": "maxConcurrentRequests",
						"req": true,
						"short": "The maximum number of concurrent requests allowed.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "targetUrl",
						"req": true,
						"short": "The URL to which webhook events will be sent.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "throttling",
						"req": true,
						"type": "`$OBJECT`",
					},
				},
				"name": "webhooks_setting",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/app-webhooks/2026-09/{appId}/settings",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "app-webhooks",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.throttling`",
								},
								"parts": []any{
									"app-webhooks",
									"2026-09",
									"{app_id}",
									"settings",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/app-webhooks/2026-09/{appId}/settings",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "app-webhooks",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.throttling`",
								},
								"parts": []any{
									"app-webhooks",
									"2026-09",
									"{app_id}",
									"settings",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"webhooks_snapshot_status": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "int64",
						"name": "completedAt",
						"short": "The timestamp indicating when the snapshot operation was completed, represented as a Unix timestamp in milliseconds.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "errorCode",
						"short": "A code representing the error that occurred, if any.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "id",
						"req": true,
						"short": "The unique identifier for the snapshot operation, represented as a UUID.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "initiatedAt",
						"req": true,
						"short": "The timestamp indicating when the snapshot operation was initiated, represented as a Unix timestamp in milliseconds.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "message",
						"short": "A descriptive message providing additional information about the snapshot operation or error.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the snapshot.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "webhooks_snapshot_status",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "status_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/journal-local/2026-09/status/{statusId}",
								"rename": map[string]any{
									"param": map[string]any{
										"statusId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "journal-local",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "status",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"journal-local",
									"2026-09",
									"status",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "status_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/journal/2026-09/status/{statusId}",
								"rename": map[string]any{
									"param": map[string]any{
										"statusId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "journal",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "status",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"journal",
									"2026-09",
									"status",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"webhooks_subscription": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "A boolean indicating whether the subscription is currently active.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date and time when the subscription was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "eventType",
						"req": true,
						"short": "The type of event that triggers the subscription.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "eventTypeName",
						"short": "The name of the event type for the subscription.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the subscription.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "objectTypeId",
						"short": "The identifier for the object type associated with the subscription.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "propertyName",
						"short": "The name of the property associated with the subscription event, if applicable.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"short": "The date and time when the subscription was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "webhooks_subscription",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/app-webhooks/2026-09/{appId}/subscriptions",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "app-webhooks",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"app-webhooks",
									"2026-09",
									"{app_id}",
									"subscriptions",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "subscription_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"subscriptionId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "app-webhooks",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"app-webhooks",
									"2026-09",
									"{app_id}",
									"subscriptions",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "subscription_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"subscriptionId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "app-webhooks",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"app-webhooks",
									"2026-09",
									"{app_id}",
									"subscriptions",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"webhooks_subscription_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"req": true,
						"short": "A boolean indicating whether the subscription is currently active.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date and time when the subscription was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "eventType",
						"req": true,
						"short": "The type of event that triggers the subscription.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "eventTypeName",
						"short": "The name of the event type for the subscription.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the subscription.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "objectTypeId",
						"short": "The identifier for the object type associated with the subscription.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "propertyName",
						"short": "The name of the property associated with the subscription event, if applicable.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"short": "The date and time when the subscription was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "webhooks_subscription_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/app-webhooks/2026-09/{appId}/subscriptions",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "app-webhooks",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"parts": []any{
									"app-webhooks",
									"2026-09",
									"{app_id}",
									"subscriptions",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"webhooks_subscription_response_1": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "actionOverrides",
						"short": "An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "actions",
						"req": true,
						"short": "A list of actions that trigger the subscription.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "int64",
						"name": "appId",
						"req": true,
						"short": "The unique identifier for the app associated with the subscription.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "associatedObjectTypeIds",
						"short": "A list of associated object type IDs.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date and time when the subscription was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "createdBy",
						"short": "The ID of the user who created the subscription.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "deletedAt",
						"short": "The date and time when the subscription was deleted, in ISO 8601 format, if applicable.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "id",
						"req": true,
						"short": "The unique identifier for the subscription.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "listIds",
						"short": "A list of list IDs associated with the subscription.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "objectIds",
						"short": "A list of object IDs associated with the subscription.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "objectTypeId",
						"req": true,
						"short": "The identifier for the object type associated with the subscription.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "portalId",
						"short": "The unique identifier for the portal associated with the subscription.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "properties",
						"short": "A list of property names associated with the subscription.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "subscriptionType",
						"req": true,
						"short": "The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"short": "The date and time when the subscription was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "webhooks_subscription_response_1",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks-journal/subscriptions/2026-09",
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"lit": "2026-09",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"subscriptions",
									"2026-09",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "subscription_id",
											"orig": "subscription_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/subscriptions/2026-09/{subscriptionId}",
								"rename": map[string]any{
									"param": map[string]any{
										"subscriptionId": "subscription_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "webhooks-journal",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "subscription_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks-journal",
									"subscriptions",
									"2026-09",
									"{subscription_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
