import { useState, useCallback } from 'react'
import {
  BlockStack,
  Card,
  Text,
  FormLayout,
  TextField,
  Select,
  Checkbox,
  RadioButton,
  InlineStack,
} from '@shopify/polaris'

export default function FormControlsSection() {
  const [storeName, setStoreName] = useState('Riverside Outfitters')
  const [contactEmail, setContactEmail] = useState('')
  const [country, setCountry] = useState('CA')
  const [subscribeUpdates, setSubscribeUpdates] = useState(true)
  const [enableMaintenanceMode, setEnableMaintenanceMode] = useState(false)
  const [shippingSpeed, setShippingSpeed] = useState('standard')

  const handleStoreNameChange = useCallback((value) => setStoreName(value), [])
  const handleContactEmailChange = useCallback((value) => setContactEmail(value), [])
  const handleCountryChange = useCallback((value) => setCountry(value), [])
  const handleSubscribeChange = useCallback(
    (checked) => setSubscribeUpdates(checked),
    [],
  )
  const handleMaintenanceChange = useCallback(
    (checked) => setEnableMaintenanceMode(checked),
    [],
  )

  const countryOptions = [
    { label: 'Canada', value: 'CA' },
    { label: 'United States', value: 'US' },
    { label: 'United Kingdom', value: 'UK' },
    { label: 'Australia', value: 'AU' },
  ]

  return (
    <Card roundedAbove="sm">
      <BlockStack gap="400">
        <Text as="h2" variant="headingMd">
          Store details
        </Text>
        <Text as="p" tone="subdued">
          Text fields, a select menu, checkboxes, radio buttons, and a settings toggle.
        </Text>
        <FormLayout>
          <TextField
            label="Store name"
            value={storeName}
            onChange={handleStoreNameChange}
            autoComplete="organization"
            helpText="Shown to customers on receipts and order confirmation emails."
          />
          <TextField
            label="Contact email"
            type="email"
            value={contactEmail}
            onChange={handleContactEmailChange}
            autoComplete="email"
            placeholder="support@example.com"
          />
          <Select
            label="Default shipping country"
            options={countryOptions}
            onChange={handleCountryChange}
            value={country}
          />
          <FormLayout.Group>
            <Checkbox
              label="Subscribe to product updates"
              checked={subscribeUpdates}
              onChange={handleSubscribeChange}
              helpText="Occasional emails about new features."
            />
            <Checkbox
              label="Enable maintenance mode"
              checked={enableMaintenanceMode}
              onChange={handleMaintenanceChange}
              helpText="Styled as a settings toggle; hides the storefront from customers."
            />
          </FormLayout.Group>
          <BlockStack gap="200">
            <Text as="p" variant="bodyMd" fontWeight="medium">
              Preferred shipping speed
            </Text>
            <InlineStack gap="400">
              <RadioButton
                label="Standard (5-7 business days)"
                checked={shippingSpeed === 'standard'}
                id="shipping-standard"
                name="shippingSpeed"
                onChange={() => setShippingSpeed('standard')}
              />
              <RadioButton
                label="Express (2-3 business days)"
                checked={shippingSpeed === 'express'}
                id="shipping-express"
                name="shippingSpeed"
                onChange={() => setShippingSpeed('express')}
              />
              <RadioButton
                label="Overnight"
                checked={shippingSpeed === 'overnight'}
                id="shipping-overnight"
                name="shippingSpeed"
                onChange={() => setShippingSpeed('overnight')}
              />
            </InlineStack>
          </BlockStack>
        </FormLayout>
      </BlockStack>
    </Card>
  )
}
