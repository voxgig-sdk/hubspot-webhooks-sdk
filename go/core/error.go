package core

type HubspotWebhooksError struct {
	IsHubspotWebhooksError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewHubspotWebhooksError(code string, msg string, ctx *Context) *HubspotWebhooksError {
	return &HubspotWebhooksError{
		IsHubspotWebhooksError: true,
		Sdk:              "HubspotWebhooks",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *HubspotWebhooksError) Error() string {
	return e.Msg
}
