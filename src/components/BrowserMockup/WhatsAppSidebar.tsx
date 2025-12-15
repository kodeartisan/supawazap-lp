"use client";

import {
  Avatar,
  Box,
  Group,
  ScrollArea,
  Skeleton,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { MessageSquare, MoreVertical, Search, Users } from "lucide-react";

interface WhatsAppSidebarProps {
  contactName: string;
}

export function WhatsAppSidebar({ contactName }: WhatsAppSidebarProps) {
  return (
    <Stack
      w={280}
      h="100%"
      gap={0}
      style={{
        borderRight: "1px solid rgba(255,255,255,0.05)",
        background: "#111b21",
      }}
      visibleFrom="sm"
    >
      {/* Header */}
      <Group
        h={60}
        px="md"
        justify="space-between"
        bg="#202c33"
        style={{ borderRight: "1px solid rgba(255,255,255,0.05)" }}
      >
        <Avatar size="md" src="https://i.pravatar.cc/150?img=11" />
        <Group gap="sm">
          <ThemeIcon variant="transparent" c="dimmed">
            <Users size={20} />
          </ThemeIcon>
          <ThemeIcon variant="transparent" c="dimmed">
            <MessageSquare size={20} />
          </ThemeIcon>
          <ThemeIcon variant="transparent" c="dimmed">
            <MoreVertical size={20} />
          </ThemeIcon>
        </Group>
      </Group>

      {/* Search Bar */}
      <Box p="sm" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <TextInput
          placeholder="Search"
          leftSection={<Search size={14} />}
          radius="md"
          styles={{
            input: {
              backgroundColor: "#202c33",
              border: "none",
              color: "#fff",
              fontSize: 13,
            },
          }}
        />
      </Box>

      {/* Chat List with Privacy Blur */}
      <ScrollArea style={{ flex: 1 }}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Group
            key={i}
            p="sm"
            style={{
              cursor: "pointer",
              backgroundColor: i === 1 ? "#2a3942" : "transparent",
              borderBottom: "1px solid rgba(255,255,255,0.03)",
            }}
          >
            <Skeleton
              height={40}
              width={40}
              circle
              animate={false}
              opacity={0.3}
            />
            <Stack gap={4} style={{ flex: 1 }}>
              <Group justify="space-between">
                <Box style={{ filter: i !== 1 ? "blur(4px)" : "none" }}>
                  <Text size="sm" fw={500} c="white">
                    {i === 1 ? contactName : "Hidden Contact"}
                  </Text>
                </Box>
                <Text size="xs" c="dimmed">
                  10:3{i} AM
                </Text>
              </Group>
              <Box style={{ filter: "blur(4px)" }}>
                <Text size="xs" c="dimmed" lineClamp={1}>
                  Hey, I was wondering if you could send me...
                </Text>
              </Box>
            </Stack>
          </Group>
        ))}
      </ScrollArea>
    </Stack>
  );
}
