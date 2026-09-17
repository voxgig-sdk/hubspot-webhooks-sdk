<?php
declare(strict_types=1);

// HubspotWebhooks SDK exists test

require_once __DIR__ . '/../hubspotwebhooks_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = HubspotWebhooksSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
