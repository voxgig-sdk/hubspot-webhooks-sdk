<?php
declare(strict_types=1);

// HubspotWebhooks SDK utility: result_body

class HubspotWebhooksResultBody
{
    public static function call(HubspotWebhooksContext $ctx): ?HubspotWebhooksResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
