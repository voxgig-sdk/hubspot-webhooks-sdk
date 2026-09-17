<?php
declare(strict_types=1);

// HubspotWebhooks SDK base feature

class HubspotWebhooksBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(HubspotWebhooksContext $ctx, array $options): void {}
    public function PostConstruct(HubspotWebhooksContext $ctx): void {}
    public function PostConstructEntity(HubspotWebhooksContext $ctx): void {}
    public function SetData(HubspotWebhooksContext $ctx): void {}
    public function GetData(HubspotWebhooksContext $ctx): void {}
    public function GetMatch(HubspotWebhooksContext $ctx): void {}
    public function SetMatch(HubspotWebhooksContext $ctx): void {}
    public function PrePoint(HubspotWebhooksContext $ctx): void {}
    public function PreSpec(HubspotWebhooksContext $ctx): void {}
    public function PreRequest(HubspotWebhooksContext $ctx): void {}
    public function PreResponse(HubspotWebhooksContext $ctx): void {}
    public function PreResult(HubspotWebhooksContext $ctx): void {}
    public function PreDone(HubspotWebhooksContext $ctx): void {}
    public function PreUnexpected(HubspotWebhooksContext $ctx): void {}
}
