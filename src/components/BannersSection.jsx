import { useState } from 'react'
import { BlockStack, Banner, Card, Text } from '@shopify/polaris'

export default function BannersSection() {
  const [showInfo, setShowInfo] = useState(true)
  const [showWarning, setShowWarning] = useState(true)
  const [showCritical, setShowCritical] = useState(true)

  return (
    <Card roundedAbove="sm">
      <BlockStack gap="400">
        <Text as="h2" variant="headingMd">
          Notifications
        </Text>
        <Text as="p" tone="subdued">
          Banner components used for inline, page-level alerts of varying severity.
        </Text>
        <BlockStack gap="300">
          {showInfo && (
            <Banner
              title="Inventory sync scheduled"
              tone="info"
              onDismiss={() => setShowInfo(false)}
            >
              <p>Your next inventory sync is scheduled for tonight at 11:00 PM.</p>
            </Banner>
          )}
          <Banner title="Changes saved" tone="success">
            <p>Your store settings were updated successfully.</p>
          </Banner>
          {showWarning && (
            <Banner
              title="Shipping rate needs review"
              tone="warning"
              onDismiss={() => setShowWarning(false)}
            >
              <p>One shipping zone has no rate configured. Orders in that zone may fail at checkout.</p>
            </Banner>
          )}
          {showCritical && (
            <Banner
              title="Payment provider disconnected"
              tone="critical"
              onDismiss={() => setShowCritical(false)}
            >
              <p>Reconnect your payment provider to keep accepting orders.</p>
            </Banner>
          )}
        </BlockStack>
      </BlockStack>
    </Card>
  )
}
