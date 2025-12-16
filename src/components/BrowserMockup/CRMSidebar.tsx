"use client";

import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Divider,
  Group,
  MultiSelect,
  NumberInput,
  Paper,
  Rating,
  ScrollArea,
  SegmentedControl,
  Select,
  Stack,
  Switch,
  TagsInput,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { Icon } from "@iconify/react";

// Mock data
const CONTACT_DATA = {
  name: "John Doe",
  number: "15550123456",
  tags: ["VIP", "Lead", "Negotiation"],
};

const CUSTOM_FIELDS_DATA = [
  { id: 1, name: "Company", type: "text", value: "Acme Corp USA" },
  { id: 2, name: "Deal Value", type: "number", value: 50000 },
  { id: 3, name: "LinkedIn", type: "url", value: "linkedin.com/in/johndoe" },
  {
    id: 4,
    name: "Lead Source",
    type: "select",
    value: "Webinar",
    options: ["Webinar", "Ads"],
  },
  {
    id: 5,
    name: "Products",
    type: "multiSelect",
    value: ["CRM Bot", "Auto Reply"],
    options: ["CRM Bot", "Auto Reply", "Broadcast"],
  },
  { id: 6, name: "Active Customer", type: "toggle", value: true },
  { id: 7, name: "Interest Level", type: "rating", value: 4 },
  { id: 8, name: "Follow-up", type: "date", value: new Date("2025-10-15") },
  {
    id: 9,
    name: "Contract",
    type: "document",
    value: { name: "Agreement_v2.pdf" },
  },
];

// Input styles
const inputStyles = {
  input: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    color: "#f8fafc",
    fontSize: "12px",
    height: "32px",
    minHeight: "32px",
    "&:focus": {
      borderColor: "#10b981",
    },
  },
  label: {
    color: "#94a3b8",
    fontSize: "11px",
    fontWeight: 500,
    marginBottom: 4,
  },
};

// Field Renderer Component
const FieldRenderer = ({ field }: { field: any }) => {
  switch (field.type) {
    case "text":
      return (
        <TextInput
          id={`crm-field-${field.id}`}
          label={field.name}
          defaultValue={field.value}
          styles={inputStyles}
        />
      );
    case "number":
      return (
        <NumberInput
          id={`crm-field-${field.id}`}
          label={field.name}
          defaultValue={field.value}
          thousandSeparator=","
          leftSection={
            <Text size="xs" c="dimmed">
              $
            </Text>
          }
          styles={inputStyles}
        />
      );
    case "url":
      return (
        <TextInput
          id={`crm-field-${field.id}`}
          label={field.name}
          defaultValue={field.value}
          rightSection={
            <ActionIcon size="xs" variant="transparent" c="blue.4">
              <Icon icon="tabler:external-link" width={12} />
            </ActionIcon>
          }
          styles={inputStyles}
        />
      );
    case "select":
      return (
        <Select
          id={`crm-field-${field.id}`}
          label={field.name}
          defaultValue={field.value}
          data={field.options}
          styles={inputStyles}
          comboboxProps={{ withinPortal: false }}
        />
      );
    case "multiSelect":
      return (
        <MultiSelect
          id={`crm-field-${field.id}`}
          label={field.name}
          defaultValue={field.value}
          data={field.options}
          styles={{
            ...inputStyles,
            pill: {
              backgroundColor: "rgba(56, 189, 248, 0.15)",
              color: "#7dd3fc",
              fontSize: "10px",
              height: "18px",
            },
            input: { ...inputStyles.input, height: "auto", minHeight: "32px" },
          }}
          comboboxProps={{ withinPortal: false }}
        />
      );
    case "toggle":
      return (
        <Group
          justify="space-between"
          mt="xs"
          p={8}
          style={{
            backgroundColor: "rgba(255,255,255,0.02)",
            borderRadius: 6,
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <Text size="xs" fw={500} c="gray.3">
            {field.name}
          </Text>
          <Switch
            id={`crm-field-${field.id}`}
            defaultChecked={field.value}
            color="emerald"
            size="sm"
            thumbIcon={
              field.value ? (
                <Icon
                  icon="tabler:check"
                  width={10}
                  color="var(--mantine-color-emerald-6)"
                />
              ) : (
                <Icon icon="tabler:x" width={10} color="gray" />
              )
            }
          />
        </Group>
      );
    case "rating":
      return (
        <Stack gap={4}>
          <Text size="xs" fw={500} c="gray.5" style={{ fontSize: "11px" }}>
            {field.name}
          </Text>
          <Group
            p={6}
            style={{
              backgroundColor: "rgba(255,255,255,0.02)",
              borderRadius: 6,
            }}
          >
            <Rating
              name={`crm-rating-${field.id}`}
              defaultValue={field.value}
              color="yellow"
              size="sm"
            />
          </Group>
        </Stack>
      );
    case "date":
      return null;
    case "document":
      return (
        <Stack gap={4}>
          <Text size="xs" fw={500} c="gray.5" style={{ fontSize: "11px" }}>
            {field.name}
          </Text>
          <Group
            p={6}
            style={{
              border: "1px dashed rgba(255,255,255,0.2)",
              borderRadius: 6,
              backgroundColor: "rgba(0,0,0,0.2)",
            }}
          >
            <ThemeIcon variant="light" color="blue" size="md">
              <Icon icon="tabler:file-text" width={14} />
            </ThemeIcon>
            <Stack gap={0} style={{ flex: 1 }}>
              <Text size="xs" truncate>
                {field.value.name}
              </Text>
              <Text size="xs" c="dimmed" style={{ fontSize: 9 }}>
                PDF Document
              </Text>
            </Stack>
            <ActionIcon variant="subtle" color="red" size="sm">
              <Icon icon="tabler:trash" width={12} />
            </ActionIcon>
          </Group>
        </Stack>
      );
    default:
      return null;
  }
};

interface CRMSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function CRMSidebar({ activeTab, onTabChange }: CRMSidebarProps) {
  return (
    <Paper
      w={340}
      h="100%"
      radius={0}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(24px)",
        borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Stack
        p="md"
        gap="sm"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.02), transparent)",
        }}
      >
        <Group justify="space-between" align="center">
          <Group gap={10}>
            <ThemeIcon variant="light" size="lg" color="emerald" radius="md">
              <Icon icon="tabler:user-circle" width={20} />
            </ThemeIcon>
            <Text
              fw={700}
              size="md"
              style={{
                background: "linear-gradient(to right, #a7f3d0, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Contact Info
            </Text>
          </Group>
          <ActionIcon variant="subtle" color="gray" size="sm">
            <Icon icon="tabler:x" width={16} />
          </ActionIcon>
        </Group>

        {/* Navigation Tabs */}
        <SegmentedControl
          name="crm-tabs"
          value={activeTab}
          onChange={onTabChange}
          fullWidth
          size="xs"
          radius="md"
          color="emerald"
          data={[
            { value: "profile", label: "Profile" },
            { value: "notes", label: "Notes" },
            { value: "tasks", label: "Tasks" },
          ]}
          className="crm-tabs"
          styles={{
            root: { backgroundColor: "rgba(255, 255, 255, 0.05)" },
            label: { color: "#94a3b8" },
          }}
        />
        <style jsx global>{`
          .crm-tabs .mantine-SegmentedControl-label[data-active] {
            color: #ffffff !important;
          }
        `}</style>
      </Stack>

      {/* Form Content */}
      <ScrollArea style={{ flex: 1 }} p="md">
        <Stack gap="md">
          {/* Identity */}
          <Group align="flex-start" wrap="nowrap" gap="sm">
            <Avatar size="lg" radius="xl" color="emerald" variant="filled">
              JD
            </Avatar>
            <Stack gap={6} style={{ flex: 1 }}>
              <TextInput
                id="crm-name"
                label="Name"
                defaultValue={CONTACT_DATA.name}
                variant="filled"
                styles={inputStyles}
              />
              <TextInput
                id="crm-number"
                label="Number"
                defaultValue={CONTACT_DATA.number}
                variant="filled"
                rightSection={
                  <Icon
                    icon="tabler:copy"
                    width={12}
                    style={{ opacity: 0.5 }}
                  />
                }
                styles={inputStyles}
              />
            </Stack>
          </Group>

          {/* Tags */}
          <TagsInput
            id="crm-tags"
            label="Tags"
            placeholder="Add tag..."
            defaultValue={CONTACT_DATA.tags}
            variant="filled"
            styles={{
              ...inputStyles,
              pill: {
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                color: "#6ee7b7",
                fontWeight: 600,
                textTransform: "uppercase",
                fontSize: "9px",
                letterSpacing: "0.05em",
                height: "20px",
              },
              input: {
                ...inputStyles.input,
                minHeight: "auto",
                padding: "4px",
              },
            }}
          />

          <Divider
            color="rgba(255,255,255,0.1)"
            label="Custom Fields"
            labelPosition="center"
          />

          {/* Custom Fields */}
          {CUSTOM_FIELDS_DATA.map((field) => (
            <FieldRenderer key={field.id} field={field} />
          ))}

          <Box h={20} />
        </Stack>
      </ScrollArea>

      {/* Footer */}
      <Box p="md" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <Button
          fullWidth
          variant="outline"
          color="emerald"
          size="xs"
          leftSection={<Icon icon="tabler:settings" width={14} />}
          style={{
            borderColor: "rgba(16, 185, 129, 0.3)",
            color: "#34d399",
          }}
        >
          Manage Fields
        </Button>
      </Box>
    </Paper>
  );
}
