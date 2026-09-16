import { BlockStack, Card, Text, DataTable, IndexTable, useIndexResourceState, Badge } from '@shopify/polaris'

const dataTableRows = [
  ['Classic canvas tote', '128', '$24.00', '$3,072.00'],
  ['Insulated water bottle', '86', '$18.50', '$1,591.00'],
  ['Trail running cap', '54', '$16.00', '$864.00'],
  ['Merino wool socks (3-pack)', '210', '$22.00', '$4,620.00'],
]

const orders = [
  {
    id: '1020',
    name: '#1020',
    customer: 'Morgan Reyes',
    date: 'Sep 12, 2026',
    total: '$96.00',
    status: 'Fulfilled',
  },
  {
    id: '1021',
    name: '#1021',
    customer: 'Priya Chandran',
    date: 'Sep 13, 2026',
    total: '$54.20',
    status: 'Unfulfilled',
  },
  {
    id: '1022',
    name: '#1022',
    customer: 'Diego Fuentes',
    date: 'Sep 14, 2026',
    total: '$212.00',
    status: 'Partially fulfilled',
  },
  {
    id: '1023',
    name: '#1023',
    customer: 'Amara Okafor',
    date: 'Sep 15, 2026',
    total: '$38.75',
    status: 'Fulfilled',
  },
]

const statusTone = {
  Fulfilled: 'success',
  Unfulfilled: 'attention',
  'Partially fulfilled': 'warning',
}

export default function DataSection() {
  const resourceName = { singular: 'order', plural: 'orders' }

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(orders)

  const rowMarkup = orders.map(({ id, name, customer, date, total, status }, index) => (
    <IndexTable.Row
      id={id}
      key={id}
      selected={selectedResources.includes(id)}
      position={index}
    >
      <IndexTable.Cell>
        <Text as="span" fontWeight="semibold">
          {name}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>{customer}</IndexTable.Cell>
      <IndexTable.Cell>{date}</IndexTable.Cell>
      <IndexTable.Cell>{total}</IndexTable.Cell>
      <IndexTable.Cell>
        <Badge tone={statusTone[status]}>{status}</Badge>
      </IndexTable.Cell>
    </IndexTable.Row>
  ))

  return (
    <BlockStack gap="400">
      <Card roundedAbove="sm">
        <BlockStack gap="400">
          <Text as="h2" variant="headingMd">
            Top selling products
          </Text>
          <DataTable
            columnContentTypes={['text', 'numeric', 'numeric', 'numeric']}
            headings={['Product', 'Units sold', 'Price', 'Total revenue']}
            rows={dataTableRows}
            totals={['', '478', '', '$10,147.00']}
            showTotalsInFooter
          />
        </BlockStack>
      </Card>

      <Card roundedAbove="sm" padding="0">
        <BlockStack gap="0">
          <div style={{ padding: 'var(--p-space-400) var(--p-space-400) 0' }}>
            <Text as="h2" variant="headingMd">
              Recent orders
            </Text>
          </div>
          <IndexTable
            resourceName={resourceName}
            itemCount={orders.length}
            selectedItemsCount={
              allResourcesSelected ? 'All' : selectedResources.length
            }
            onSelectionChange={handleSelectionChange}
            headings={[
              { title: 'Order' },
              { title: 'Customer' },
              { title: 'Date' },
              { title: 'Total' },
              { title: 'Status' },
            ]}
          >
            {rowMarkup}
          </IndexTable>
        </BlockStack>
      </Card>
    </BlockStack>
  )
}
