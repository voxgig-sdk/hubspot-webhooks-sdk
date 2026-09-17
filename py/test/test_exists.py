# HubspotWebhooks SDK exists test

import pytest
from hubspotwebhooks_sdk import HubspotWebhooksSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = HubspotWebhooksSDK.test(None, None)
        assert testsdk is not None
