# HubspotWebhooks SDK utility: make_context

from projectname_sdk.core.context import HubspotWebhooksContext


def make_context_util(ctxmap, basectx):
    return HubspotWebhooksContext(ctxmap, basectx)
