"use client";

import {
  ActionIcon,
  Group,
  Paper,
  Stack,
  Switch,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { EyeOff, X } from "lucide-react";

interface PrivacySidebarProps {
  onClose: () => void;
}

export function PrivacySidebar({ onClose }: PrivacySidebarProps) {
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
              <EyeOff size={20} />
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
              Privacy Lock
            </Text>
          </Group>
          <ActionIcon variant="subtle" color="gray" size="sm" onClick={onClose}>
            <X size={16} />
          </ActionIcon>
        </Group>
        <Text size="xs" c="dimmed">
          Blur sensitive information on your screen to prevent prying eyes.
        </Text>
      </Stack>

      {/* Settings Content */}
      <Stack p="md" gap="lg">
        <Stack gap="xs">
          <Text
            size="xs"
            fw={700}
            c="dimmed"
            tt="uppercase"
            style={{ letterSpacing: "0.5px" }}
          >
            General
          </Text>
          <PrivacyToggle label="Blur Profile Pictures" defaultChecked={true} />
          <PrivacyToggle label="Blur User/Group Names" defaultChecked={true} />
        </Stack>
        <Stack gap="xs">
          <Text
            size="xs"
            fw={700}
            c="dimmed"
            tt="uppercase"
            style={{ letterSpacing: "0.5px" }}
          >
            Messages
          </Text>
          <PrivacyToggle label="Blur Recent Messages" defaultChecked={true} />
          <PrivacyToggle
            label="Blur Conversation Messages"
            defaultChecked={false}
          />
          <PrivacyToggle label="Blur Media Preview" defaultChecked={false} />
          <PrivacyToggle label="Blur Input Area" defaultChecked={false} />
        </Stack>
        <Stack gap="xs">
          <Text
            size="xs"
            fw={700}
            c="dimmed"
            tt="uppercase"
            style={{ letterSpacing: "0.5px" }}
          >
            Behavior
          </Text>
          <PrivacyToggle
            label="Unblur on Hover"
            defaultChecked={true}
            description="Temporarily reveal content when you hover over it."
          />
        </Stack>
      </Stack>
    </Paper>
  );
}

function PrivacyToggle({
  label,
  description,
  defaultChecked,
}: {
  label: string;
  description?: string;
  defaultChecked?: boolean;
}) {
  return (
    <Group
      justify="space-between"
      align="flex-start" // Align top for description
      p={10}
      style={{
        backgroundColor: "rgba(255,255,255,0.03)",
        borderRadius: 8,
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <Stack gap={2} style={{ flex: 1 }}>
        <Text size="sm" fw={500} c="gray.3">
          {label}
        </Text>
        {description && (
          <Text size="xs" c="dimmed" style={{ lineHeight: 1.4 }}>
            {description}
          </Text>
        )}
      </Stack>
      <Switch
        color="emerald"
        size="sm"
        defaultChecked={defaultChecked}
        thumbIcon={
          <Text style={{ fontSize: 10 }} c="emerald.6" fw={700}>
            P
          </Text>
        }
      />
    </Group>
  );
}
