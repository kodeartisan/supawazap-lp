"use client";

import { ActionIcon, Box, Stack, Tooltip } from "@mantine/core";
import {
  Bolt,
  CalendarClock,
  Database,
  EyeOff,
  MessageSquare,
  Radio,
  Settings,
  Zap,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface TabIconProps {
  icon: LucideIcon;
  active?: boolean;
  label: string;
}

function TabIcon({ icon: Icon, active, label }: TabIconProps) {
  return (
    <Tooltip label={label} position="left" withArrow>
      <ActionIcon
        variant="transparent"
        size="xl"
        color={active ? "emerald.4" : "dimmed"}
        style={{
          borderRadius: 12,
          position: "relative",
          backgroundColor: active ? "rgba(16, 185, 129, 0.1)" : "transparent",
        }}
      >
        {active && (
          <Box
            style={{
              position: "absolute",
              left: 0,
              top: "15%",
              bottom: "15%",
              width: 2,
              background: "var(--mantine-color-emerald-5)",
              borderRadius: "0 4px 4px 0",
              boxShadow: "0 0 8px var(--mantine-color-emerald-5)",
            }}
          />
        )}
        <Icon size={22} strokeWidth={1.5} />
      </ActionIcon>
    </Tooltip>
  );
}

export function TabBar() {
  return (
    <Stack
      w={50}
      h="100%"
      bg="#0f172a"
      style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}
      align="center"
      py="sm"
      gap={0}
    >
      <Stack gap={4}>
        <TabIcon icon={Radio} label="Broadcast" />
        <TabIcon icon={Bolt} label="Workflow" />
        <TabIcon icon={Zap} label="Quick Reply" />
        <TabIcon icon={Database} active label="CRM" />
        <TabIcon icon={MessageSquare} label="Direct" />
        <TabIcon icon={CalendarClock} label="Status" />
        <TabIcon icon={EyeOff} label="Privacy" />
      </Stack>
      <Stack mt="auto" gap={4}>
        <TabIcon icon={Settings} label="Settings" />
      </Stack>
    </Stack>
  );
}
