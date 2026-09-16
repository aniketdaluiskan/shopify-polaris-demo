import { useState, useCallback } from 'react'
import {
  Frame,
  TopBar,
  Navigation,
  Page,
  Layout,
  BlockStack,
} from '@shopify/polaris'
import {
  HomeIcon,
  OrderIcon,
  ProductIcon,
  PersonIcon,
  SettingsIcon,
} from '@shopify/polaris-icons'

import BannersSection from './components/BannersSection.jsx'
import FormControlsSection from './components/FormControlsSection.jsx'
import ActionsSection from './components/ActionsSection.jsx'
import TabsSection from './components/TabsSection.jsx'
import CollapsibleSection from './components/CollapsibleSection.jsx'
import DataSection from './components/DataSection.jsx'

export default function App() {
  const [userMenuActive, setUserMenuActive] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false)

  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((active) => !active),
    [],
  )

  const toggleMobileNavigationActive = useCallback(
    () => setMobileNavigationActive((active) => !active),
    [],
  )

  const handleSearchChange = useCallback((value) => setSearchValue(value), [])

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: 'Account settings' }, { content: 'Sign out' }],
        },
      ]}
      name="Jordan Blake"
      detail="Riverside Outfitters"
      initials="JB"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  )

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchChange}
      value={searchValue}
      placeholder="Search orders, products, customers"
      showFocusBorder
    />
  )

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchField={searchFieldMarkup}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  )

  const navigationMarkup = (
    <Navigation location="/">
      <Navigation.Section
        items={[
          { url: '#', label: 'Home', icon: HomeIcon, selected: true },
          { url: '#', label: 'Orders', icon: OrderIcon, badge: '4' },
          { url: '#', label: 'Products', icon: ProductIcon },
          { url: '#', label: 'Customers', icon: PersonIcon },
        ]}
      />
      <Navigation.Section
        title="Store"
        items={[{ url: '#', label: 'Settings', icon: SettingsIcon }]}
      />
    </Navigation>
  )

  return (
    <Frame
      topBar={topBarMarkup}
      navigation={navigationMarkup}
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={toggleMobileNavigationActive}
    >
      <Page
        title="Component gallery"
        subtitle="A reference page exercising a broad set of Polaris components"
        fullWidth
      >
        <Layout>
          <Layout.Section>
            <BlockStack gap="400">
              <BannersSection />
              <FormControlsSection />
              <ActionsSection />
              <TabsSection />
              <CollapsibleSection />
              <DataSection />
            </BlockStack>
          </Layout.Section>
        </Layout>
      </Page>
    </Frame>
  )
}
