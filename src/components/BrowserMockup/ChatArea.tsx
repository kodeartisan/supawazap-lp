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
import { Icon } from "@iconify/react";

interface ChatAreaProps {
  contactName: string;
}

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
            JD
          </Avatar>
          <Stack gap={0}>
            <Text size="sm" fw={600} c="white">
              {contactName}
            </Text>
            <Text size="xs" c="gray.5">
              online
            </Text>
          </Stack>
        </Group>
        <Group gap="xs">
          <Icon icon="tabler:search" width={18} color="#8696a0" />
          <Icon icon="tabler:dots-vertical" width={18} color="#8696a0" />
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
                Hi! I noticed that I can send bulk messages using Supawazap. Is
                it safe for my number?
              </Text>
              <Text
                size="xs"
                c="gray.5"
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
                Absolutely, John! We use 'Smart Batching' and random delays to
                mimic human behavior, keeping your account safe.
              </Text>
              <Group justify="flex-end" gap={4} mt={4}>
                <Text size="xs" style={{ opacity: 0.9, fontSize: 10 }}>
                  10:31 AM
                </Text>
                <Icon
                  icon="tabler:checks"
                  width={12}
                  style={{ opacity: 0.7 }}
                />
              </Group>
            </Paper>
          </Group>
        </Stack>
      </Box>

      {/* Extension Menu Overlay */}
      <Stack
        gap="xs"
        style={{
          position: "absolute",
          bottom: 70,
          left: 10,
          zIndex: 10,
        }}
      >
        <Tooltip label="Quick Reply" position="right">
          <ActionIcon
            variant="filled"
            size={28}
            radius="xl"
            color="emerald"
            aria-label="Quick Reply"
            style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.3)" }}
          >
            <Icon icon="tabler:bolt" width={15} />
          </ActionIcon>
        </Tooltip>

        <Tooltip label="Copy Number" position="right">
          <ActionIcon
            variant="filled"
            size={28}
            radius="xl"
            color="emerald"
            aria-label="Copy Number"
            style={{
              boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            }}
          >
            <Icon icon="tabler:copy" width={15} />
          </ActionIcon>
        </Tooltip>

        <Tooltip label="Contact Profile" position="right">
          <ActionIcon
            variant="filled"
            size={28}
            radius="xl"
            color="emerald"
            aria-label="Contact Profile"
            style={{
              boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            }}
          >
            <Icon icon="tabler:address-book" width={15} />
          </ActionIcon>
        </Tooltip>

        <Tooltip label="Schedule Message" position="right">
          <ActionIcon
            variant="filled"
            size={28}
            radius="xl"
            color="emerald"
            aria-label="Schedule Message"
            style={{
              boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            }}
          >
            <Icon icon="tabler:calendar-time" width={15} />
          </ActionIcon>
        </Tooltip>
      </Stack>

      {/* Input Area */}
      <Box
        h={62}
        px="md"
        bg="#202c33"
        style={{ display: "flex", alignItems: "center", gap: 12 }}
      >
        <ThemeIcon variant="transparent" color="gray">
          <Icon icon="tabler:plus" width={24} />
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
            <ActionIcon
              variant="light"
              color="emerald"
              radius="xl"
              size="sm"
              aria-label="Quick Reply"
            >
              <Icon icon="tabler:bolt" width={14} />
            </ActionIcon>
          </Tooltip>
        </Paper>
        <ThemeIcon variant="transparent" color="gray">
          <Icon icon="tabler:microphone" width={20} />
        </ThemeIcon>
      </Box>
    </Stack>
  );
}
