import { useState, useCallback } from 'react'
import { BlockStack, Card, Text, Tabs } from '@shopify/polaris'

const tabs = [
  {
    id: 'overview',
    content: 'Overview',
    panelID: 'overview-panel',
  },
  {
    id: 'fulfillment',
    content: 'Fulfillment',
    panelID: 'fulfillment-panel',
  },
  {
    id: 'analytics',
    content: 'Analytics',
    panelID: 'analytics-panel',
  },
]

const panelContent = {
  overview: 'This store has 128 active products across 6 collections, with 14 orders awaiting fulfillment.',
  fulfillment: 'Two shipments are delayed at the regional carrier hub. Estimated delivery has moved by 1-2 days.',
  analytics: 'Sessions are up 12% week over week, with conversion rate holding steady at 2.4%.',
}

export default function TabsSection() {
  const [selected, setSelected] = useState(0)

  const handleTabChange = useCallback((selectedTabIndex) => {
    setSelected(selectedTabIndex)
  }, [])

  const activeTabId = tabs[selected].id

  return (
    <Card roundedAbove="sm">
      <BlockStack gap="400">
        <Text as="h2" variant="headingMd">
          Store summary tabs
        </Text>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
          <div style={{ padding: 'var(--p-space-400) 0' }}>
            <Text as="p">{panelContent[activeTabId]}</Text>
          </div>
        </Tabs>
      </BlockStack>
    </Card>
  )
}
