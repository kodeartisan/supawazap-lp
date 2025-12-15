"use client";

import {
  ActionIcon,
  Avatar,
  Box,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Tooltip,
} from "@mantine/core";
import { Bolt, CheckCheck, MoreVertical, Search } from "lucide-react";

interface ChatAreaProps {
  contactName: string;
}

// Custom Icons
const IconPlus = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    fill="none"
  >
    <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconMicrophone = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    fill="none"
  >
    <path
      d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
      strokeWidth="2"
    />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" strokeWidth="2" />
    <line x1="12" y1="19" x2="12" y2="23" strokeWidth="2" />
    <line x1="8" y1="23" x2="16" y2="23" strokeWidth="2" />
  </svg>
);

export function ChatArea({ contactName }: ChatAreaProps) {
  return (
    <Stack
      style={{ flex: 1, position: "relative", background: "#0b141a" }}
      gap={0}
    >
      {/* Chat Header */}
      <Group
        h={60}
        px="md"
        justify="space-between"
        bg="#202c33"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <Group>
          <Avatar radius="xl" color="emerald" size="sm">
            BS
          </Avatar>
          <Stack gap={0}>
            <Text size="sm" fw={600} c="white">
              {contactName}
            </Text>
            <Text size="xs" c="dimmed">
              online
            </Text>
          </Stack>
        </Group>
        <Group gap="xs">
          <Search size={18} color="#8696a0" />
          <MoreVertical size={18} color="#8696a0" />
        </Group>
      </Group>

      {/* Chat Background Pattern */}
      <Box
        style={{
          flex: 1,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          opacity: 0.5,
        }}
      />

      {/* Messages */}
      <Box
        style={{
          position: "absolute",
          bottom: 80,
          left: 0,
          right: 0,
          padding: 20,
        }}
      >
        <Stack gap="sm">
          {/* Incoming */}
          <Group align="flex-start">
            <Paper
              p="sm"
              radius="md"
              style={{
                background: "#202c33",
                color: "white",
                borderTopLeftRadius: 0,
                maxWidth: "65%",
              }}
            >
              <Text size="sm">
                Hello! I am interested in your CRM services. Can you send me the
                price list?
              </Text>
              <Text
                size="xs"
                c="dimmed"
                ta="right"
                mt={4}
                style={{ fontSize: 10 }}
              >
                10:30 AM
              </Text>
            </Paper>
          </Group>

          {/* Outgoing */}
          <Group align="flex-end" justify="flex-end">
            <Paper
              p="sm"
              radius="md"
              style={{
                background: "#005c4b",
                color: "white",
                borderTopRightRadius: 0,
                maxWidth: "65%",
              }}
            >
              <Text size="sm">
                Sure, Budi! I've attached the document. Let me know if you need
                anything else.
              </Text>
              <Group justify="flex-end" gap={4} mt={4}>
                <Text size="xs" style={{ opacity: 0.7, fontSize: 10 }}>
                  10:31 AM
                </Text>
                <CheckCheck size={12} style={{ opacity: 0.7 }} />
              </Group>
            </Paper>
          </Group>
        </Stack>
      </Box>

      {/* Input Area */}
      <Box
        h={62}
        px="md"
        bg="#202c33"
        style={{ display: "flex", alignItems: "center", gap: 12 }}
      >
        <ThemeIcon variant="transparent" color="gray">
          <IconPlus />
        </ThemeIcon>
        <Paper
          style={{
            flex: 1,
            height: 40,
            background: "#2a3942",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 16,
            paddingRight: 8,
            borderRadius: 8,
            color: "#8696a0",
            fontSize: 14,
          }}
        >
          <Text size="sm">Type a message</Text>
          <Tooltip label="Quick Reply" withArrow>
            <ActionIcon variant="light" color="emerald" radius="xl" size="sm">
              <Bolt size={14} />
            </ActionIcon>
          </Tooltip>
        </Paper>
        <ThemeIcon variant="transparent" color="gray">
          <IconMicrophone />
        </ThemeIcon>
      </Box>
    </Stack>
  );
}
