import { useState, useCallback } from 'react'
import {
  BlockStack,
  Card,
  Text,
  Button,
  ButtonGroup,
  Popover,
  ActionList,
  Modal,
  TextContainer,
} from '@shopify/polaris'
import {
  EditIcon,
  DeleteIcon,
  ExportIcon,
  PlusIcon,
} from '@shopify/polaris-icons'

export default function ActionsSection() {
  const [popoverActive, setPopoverActive] = useState(false)
  const [modalActive, setModalActive] = useState(false)
  const [lastAction, setLastAction] = useState('No action taken yet.')

  const togglePopoverActive = useCallback(
    () => setPopoverActive((active) => !active),
    [],
  )

  const toggleModalActive = useCallback(
    () => setModalActive((active) => !active),
    [],
  )

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      More actions
    </Button>
  )

  return (
    <Card roundedAbove="sm">
      <BlockStack gap="400">
        <Text as="h2" variant="headingMd">
          Buttons and actions
        </Text>
        <Text as="p" tone="subdued">
          Primary, secondary, destructive, and plain buttons, an action menu, and a confirmation modal.
        </Text>

        <BlockStack gap="300">
          <ButtonGroup>
            <Button variant="primary" icon={PlusIcon} onClick={() => setLastAction('Created a new product.')}>
              Add product
            </Button>
            <Button onClick={() => setLastAction('Opened export dialog.')} icon={ExportIcon}>
              Export
            </Button>
            <Button
              variant="primary"
              tone="critical"
              icon={DeleteIcon}
              onClick={toggleModalActive}
            >
              Delete
            </Button>
            <Button variant="plain" icon={EditIcon} onClick={() => setLastAction('Editing enabled.')}>
              Edit
            </Button>
            <Button disabled>Archived</Button>
          </ButtonGroup>

          <Popover
            active={popoverActive}
            activator={activator}
            autofocusTarget="first-node"
            onClose={togglePopoverActive}
          >
            <ActionList
              actionRole="menuitem"
              items={[
                {
                  content: 'Duplicate',
                  onAction: () => {
                    setLastAction('Duplicated the current record.')
                    setPopoverActive(false)
                  },
                },
                {
                  content: 'Archive',
                  onAction: () => {
                    setLastAction('Archived the current record.')
                    setPopoverActive(false)
                  },
                },
                {
                  content: 'Delete',
                  destructive: true,
                  onAction: () => {
                    setLastAction('Deleted the current record.')
                    setPopoverActive(false)
                  },
                },
              ]}
            />
          </Popover>

          <Text as="p" tone="subdued">
            {lastAction}
          </Text>
        </BlockStack>

        <Modal
          open={modalActive}
          onClose={toggleModalActive}
          title="Delete product?"
          primaryAction={{
            content: 'Delete product',
            destructive: true,
            onAction: () => {
              setLastAction('Confirmed deletion from the modal.')
              setModalActive(false)
            },
          }}
          secondaryActions={[
            {
              content: 'Cancel',
              onAction: toggleModalActive,
            },
          ]}
        >
          <Modal.Section>
            <TextContainer>
              <p>
                This will permanently remove the product and its variants from your
                catalog. This action cannot be undone.
              </p>
            </TextContainer>
          </Modal.Section>
        </Modal>
      </BlockStack>
    </Card>
  )
}
