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
				"webhooks_crm_object_snapshot_batch": map[string]any{},
				"webhooks_filter": map[string]any{},
				"webhooks_setting": map[string]any{},
				"webhooks_snapshot_status": map[string]any{},
				"webhooks_subscription": map[string]any{},
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
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/journal-local/2026-09/offset/{offset}/next",
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
								"parts": []any{
									"webhooks-journal",
									"journal-local",
									"2026-09",
									"offset",
									"{offset_id}",
									"next",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"offset": "offset_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "offset_id",
											"orig": "offset",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"install_portal_id",
										"offset_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/journal/2026-09/offset/{offset}/next",
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
								"parts": []any{
									"webhooks-journal",
									"journal",
									"2026-09",
									"offset",
									"{offset_id}",
									"next",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"offset": "offset_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "offset_id",
											"orig": "offset",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"install_portal_id",
										"offset_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"webhooks-journal",
									"journal-local",
									"2026-09",
									"earliest",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"install_portal_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"webhooks-journal",
									"journal-local",
									"2026-09",
									"latest",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"install_portal_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"webhooks-journal",
									"journal",
									"2026-09",
									"earliest",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"install_portal_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"webhooks-journal",
									"journal",
									"2026-09",
									"latest",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"install_portal_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}",
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
								"parts": []any{
									"app-webhooks",
									"2026-09",
									"{app_id}",
									"subscriptions",
									"{subscription_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"subscriptionId": "subscription_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "app_id",
											"orig": "app_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/app-webhooks/2026-09/{appId}/settings",
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
								"parts": []any{
									"app-webhooks",
									"2026-09",
									"{app_id}",
									"settings",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "app_id",
											"orig": "app_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/webhooks-journal/subscriptions/2026-09/filters/{filterId}",
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
								"parts": []any{
									"webhooks-journal",
									"subscriptions",
									"2026-09",
									"filters",
									"{filter_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"filterId": "filter_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "filter_id",
											"orig": "filter_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/webhooks-journal/subscriptions/2026-09/portals/{portalId}",
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
								"parts": []any{
									"webhooks-journal",
									"subscriptions",
									"2026-09",
									"portals",
									"{portal_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"portalId": "portal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "portal_id",
											"orig": "portal_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"portal_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/webhooks-journal/subscriptions/2026-09/{subscriptionId}",
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
								"parts": []any{
									"webhooks-journal",
									"subscriptions",
									"2026-09",
									"{subscription_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriptionId": "subscription_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"webhooks_batch_response_journal_fetch": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "completedAt",
						"title": "Completed At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the batch operation was completed, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "inputs",
						"title": "Inputs",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of strings to be processed.",
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$OBJECT`",
						"short": "A map of link names to associated URIs related to the batch operation.",
					},
					map[string]any{
						"name": "requestedAt",
						"title": "Requested At",
						"type": "`$STRING`",
						"short": "The date and time when the batch operation was requested, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of results from the batch operation, each represented as a JournalFetchResponse object.",
					},
					map[string]any{
						"name": "startedAt",
						"title": "Started At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the batch operation started, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The current status of the batch operation.",
					},
				},
				"name": "webhooks_batch_response_journal_fetch",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"webhooks-journal",
									"journal-local",
									"2026-09",
									"batch",
									"read",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"install_portal_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"webhooks-journal",
									"journal",
									"2026-09",
									"batch",
									"read",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"install_portal_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/journal-local/2026-09/batch/{offset}/next/{count}",
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
								"parts": []any{
									"webhooks-journal",
									"journal-local",
									"2026-09",
									"batch",
									"{batch_id}",
									"next",
									"{count}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"offset": "batch_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "batch_id",
											"orig": "offset",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
										map[string]any{
											"name": "count",
											"orig": "count",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"batch_id",
										"count",
										"install_portal_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/journal/2026-09/batch/{offset}/next/{count}",
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
								"parts": []any{
									"webhooks-journal",
									"journal",
									"2026-09",
									"batch",
									"{batch_id}",
									"next",
									"{count}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"offset": "batch_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "batch_id",
											"orig": "offset",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
										map[string]any{
											"name": "count",
											"orig": "count",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"batch_id",
										"count",
										"install_portal_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"webhooks-journal",
									"journal-local",
									"2026-09",
									"batch",
									"earliest",
									"{count}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "count",
											"orig": "count",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"count",
										"install_portal_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"webhooks-journal",
									"journal-local",
									"2026-09",
									"batch",
									"latest",
									"{count}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "count",
											"orig": "count",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"count",
										"install_portal_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"webhooks-journal",
									"journal",
									"2026-09",
									"batch",
									"earliest",
									"{count}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "count",
											"orig": "count",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"count",
										"install_portal_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"webhooks-journal",
									"journal",
									"2026-09",
									"batch",
									"latest",
									"{count}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "count",
											"orig": "count",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "install_portal_id",
											"orig": "install_portal_id",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"count",
										"install_portal_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"webhooks_batch_response_subscription": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "completedAt",
						"title": "Completed At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the batch operation was completed, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "inputs",
						"title": "Inputs",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated.",
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$OBJECT`",
						"short": "A map of link names to associated URIs providing additional information about the batch operation.",
					},
					map[string]any{
						"name": "requestedAt",
						"title": "Requested At",
						"type": "`$STRING`",
						"short": "The date and time when the batch operation was requested, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array containing the results of the batch operation, with each item representing an individual subscription response.",
					},
					map[string]any{
						"name": "startedAt",
						"title": "Started At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the batch operation started, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The current status of the batch operation.",
					},
				},
				"name": "webhooks_batch_response_subscription",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/app-webhooks/2026-09/{appId}/subscriptions/batch/update",
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
								"parts": []any{
									"app-webhooks",
									"2026-09",
									"{app_id}",
									"subscriptions",
									"batch",
									"update",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "app_id",
											"orig": "app_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
									},
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
						"title": "Snapshot Requests",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object.",
					},
					map[string]any{
						"name": "snapshotResponses",
						"title": "Snapshot Responses",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object.",
					},
				},
				"name": "webhooks_crm_object_snapshot_batch",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"webhooks-journal",
									"snapshots",
									"2026-09",
									"crm",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Conditions",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of conditions that define the criteria for the filter.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "A Unix timestamp in milliseconds indicating when the filter was created.",
						"format": "int64",
					},
					map[string]any{
						"name": "filter",
						"title": "Filter",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against.",
					},
					map[string]any{
						"name": "filterId",
						"title": "Filter Id",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The unique identifier for the created filter.",
						"format": "int64",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The unique identifier for the filter.",
						"format": "int64",
					},
					map[string]any{
						"name": "subscriptionId",
						"title": "Subscription Id",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The unique identifier of the subscription to which the filter will be applied.",
						"format": "int64",
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
								"parts": []any{
									"webhooks-journal",
									"subscriptions",
									"2026-09",
									"filters",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/subscriptions/2026-09/filters/{filterId}",
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
								"parts": []any{
									"webhooks-journal",
									"subscriptions",
									"2026-09",
									"filters",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"filterId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.filter`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "filter_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}",
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
								"parts": []any{
									"webhooks-journal",
									"subscriptions",
									"2026-09",
									"filters",
									"subscription",
									"{subscription_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriptionId": "subscription_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"webhooks_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "maxConcurrentRequests",
						"title": "Max Concurrent Requests",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The maximum number of concurrent requests allowed.",
						"format": "int32",
					},
					map[string]any{
						"name": "targetUrl",
						"title": "Target Url",
						"type": "`$STRING`",
						"req": true,
						"short": "The URL to which webhook events will be sent.",
					},
					map[string]any{
						"name": "throttling",
						"title": "Throttling",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"name": "webhooks_setting",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/app-webhooks/2026-09/{appId}/settings",
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
								"parts": []any{
									"app-webhooks",
									"2026-09",
									"{app_id}",
									"settings",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.throttling`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "app_id",
											"orig": "app_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/app-webhooks/2026-09/{appId}/settings",
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
								"parts": []any{
									"app-webhooks",
									"2026-09",
									"{app_id}",
									"settings",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.throttling`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "app_id",
											"orig": "app_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"webhooks_snapshot_status": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "completedAt",
						"title": "Completed At",
						"type": "`$INTEGER`",
						"short": "The timestamp indicating when the snapshot operation was completed, represented as a Unix timestamp in milliseconds.",
						"format": "int64",
					},
					map[string]any{
						"name": "errorCode",
						"title": "Error Code",
						"type": "`$STRING`",
						"short": "A code representing the error that occurred, if any.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the snapshot operation, represented as a UUID.",
						"format": "uuid",
					},
					map[string]any{
						"name": "initiatedAt",
						"title": "Initiated At",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The timestamp indicating when the snapshot operation was initiated, represented as a Unix timestamp in milliseconds.",
						"format": "int64",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"short": "A descriptive message providing additional information about the snapshot operation or error.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The current status of the snapshot.",
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
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/journal-local/2026-09/status/{statusId}",
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
								"parts": []any{
									"webhooks-journal",
									"journal-local",
									"2026-09",
									"status",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"statusId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "status_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/journal/2026-09/status/{statusId}",
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
								"parts": []any{
									"webhooks-journal",
									"journal",
									"2026-09",
									"status",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"statusId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "status_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Active",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "A boolean indicating whether the subscription is currently active.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the subscription was created, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "eventType",
						"title": "Event Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The type of event that triggers the subscription.",
					},
					map[string]any{
						"name": "eventTypeName",
						"title": "Event Type Name",
						"type": "`$STRING`",
						"short": "The name of the event type for the subscription.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the subscription.",
					},
					map[string]any{
						"name": "objectTypeId",
						"title": "Object Type Id",
						"type": "`$STRING`",
						"short": "The identifier for the object type associated with the subscription.",
					},
					map[string]any{
						"name": "propertyName",
						"title": "Property Name",
						"type": "`$STRING`",
						"short": "The name of the property associated with the subscription event, if applicable.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "The date and time when the subscription was last updated, in ISO 8601 format.",
						"format": "date-time",
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
								"kind": "http",
								"method": "POST",
								"orig": "/app-webhooks/2026-09/{appId}/subscriptions",
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
								"parts": []any{
									"app-webhooks",
									"2026-09",
									"{app_id}",
									"subscriptions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "app_id",
											"orig": "app_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/app-webhooks/2026-09/{appId}/subscriptions",
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
								"parts": []any{
									"app-webhooks",
									"2026-09",
									"{app_id}",
									"subscriptions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "app_id",
											"orig": "app_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}",
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
								"parts": []any{
									"app-webhooks",
									"2026-09",
									"{app_id}",
									"subscriptions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"subscriptionId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "app_id",
											"orig": "app_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}",
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
								"parts": []any{
									"app-webhooks",
									"2026-09",
									"{app_id}",
									"subscriptions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"subscriptionId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "app_id",
											"orig": "app_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"webhooks_subscription_response_1": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "actionOverrides",
						"title": "Action Overrides",
						"type": "`$OBJECT`",
						"short": "An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object.",
					},
					map[string]any{
						"name": "actions",
						"title": "Actions",
						"type": "`$ARRAY`",
						"req": true,
						"short": "A list of actions that trigger the subscription.",
					},
					map[string]any{
						"name": "appId",
						"title": "App Id",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The unique identifier for the app associated with the subscription.",
						"format": "int64",
					},
					map[string]any{
						"name": "associatedObjectTypeIds",
						"title": "Associated Object Type Ids",
						"type": "`$ARRAY`",
						"short": "A list of associated object type IDs.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the subscription was created, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "createdBy",
						"title": "Created By",
						"type": "`$INTEGER`",
						"short": "The ID of the user who created the subscription.",
						"format": "int64",
					},
					map[string]any{
						"name": "deletedAt",
						"title": "Deleted At",
						"type": "`$STRING`",
						"short": "The date and time when the subscription was deleted, in ISO 8601 format, if applicable.",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The unique identifier for the subscription.",
						"format": "int64",
					},
					map[string]any{
						"name": "listIds",
						"title": "List Ids",
						"type": "`$ARRAY`",
						"short": "A list of list IDs associated with the subscription.",
					},
					map[string]any{
						"name": "objectIds",
						"title": "Object Ids",
						"type": "`$ARRAY`",
						"short": "A list of object IDs associated with the subscription.",
					},
					map[string]any{
						"name": "objectTypeId",
						"title": "Object Type Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The identifier for the object type associated with the subscription.",
					},
					map[string]any{
						"name": "portalId",
						"title": "Portal Id",
						"type": "`$INTEGER`",
						"short": "The unique identifier for the portal associated with the subscription.",
						"format": "int64",
					},
					map[string]any{
						"name": "properties",
						"title": "Properties",
						"type": "`$ARRAY`",
						"short": "A list of property names associated with the subscription.",
					},
					map[string]any{
						"name": "subscriptionType",
						"title": "Subscription Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the subscription was last updated, in ISO 8601 format.",
						"format": "date-time",
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
								"parts": []any{
									"webhooks-journal",
									"subscriptions",
									"2026-09",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"webhooks-journal",
									"subscriptions",
									"2026-09",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks-journal/subscriptions/2026-09/{subscriptionId}",
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
								"parts": []any{
									"webhooks-journal",
									"subscriptions",
									"2026-09",
									"{subscription_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscriptionId": "subscription_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
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
