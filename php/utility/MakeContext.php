<?php
declare(strict_types=1);

// HubspotWebhooks SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class HubspotWebhooksMakeContext
{
    public static function call(array $ctxmap, ?HubspotWebhooksContext $basectx): HubspotWebhooksContext
    {
        return new HubspotWebhooksContext($ctxmap, $basectx);
    }
}
