import { useState, useCallback } from 'react'
import { BlockStack, Card, Text, Button, Collapsible } from '@shopify/polaris'
import { ChevronDownIcon, ChevronRightIcon } from '@shopify/polaris-icons'

const faqs = [
  {
    id: 'faq-shipping-zones',
    question: 'How do I add a new shipping zone?',
    answer:
      'Go to Settings > Shipping and delivery, then select Create zone. Add the countries or regions you want to cover and set a rate.',
  },
  {
    id: 'faq-refunds',
    question: 'How long do refunds take to process?',
    answer:
      'Refunds are issued to the original payment method immediately, but it can take 5-10 business days for the funds to appear depending on the customer’s bank.',
  },
  {
    id: 'faq-taxes',
    question: 'Can I set different tax rates per region?',
    answer:
      'Yes. Region-specific tax overrides can be configured from Settings > Taxes and duties for each country you sell to.',
  },
]

function FaqItem({ id, question, answer }) {
  const [open, setOpen] = useState(false)
  const toggleOpen = useCallback(() => setOpen((value) => !value), [])

  return (
    <BlockStack gap="200">
      <Button
        onClick={toggleOpen}
        ariaExpanded={open}
        ariaControls={id}
        disclosure={open ? 'up' : 'down'}
        variant="plain"
        textAlign="left"
        icon={open ? ChevronDownIcon : ChevronRightIcon}
      >
        {question}
      </Button>
      <Collapsible
        open={open}
        id={id}
        transition={{ duration: '150ms', timingFunction: 'ease-in-out' }}
        expandOnPrint
      >
        <Text as="p" tone="subdued">
          {answer}
        </Text>
      </Collapsible>
    </BlockStack>
  )
}

export default function CollapsibleSection() {
  return (
    <Card roundedAbove="sm">
      <BlockStack gap="400">
        <Text as="h2" variant="headingMd">
          Frequently asked questions
        </Text>
        <Text as="p" tone="subdued">
          Disclosure buttons that expand and collapse additional detail.
        </Text>
        <BlockStack gap="300">
          {faqs.map((faq) => (
            <FaqItem key={faq.id} {...faq} />
          ))}
        </BlockStack>
      </BlockStack>
    </Card>
  )
}
