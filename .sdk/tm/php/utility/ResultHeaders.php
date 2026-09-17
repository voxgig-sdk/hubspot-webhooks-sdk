<?php
declare(strict_types=1);

// HubspotWebhooks SDK utility: result_headers

class HubspotWebhooksResultHeaders
{
    public static function call(HubspotWebhooksContext $ctx): ?HubspotWebhooksResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
