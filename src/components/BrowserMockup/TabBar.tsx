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

interface TabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TabBar({ activeTab, onTabChange }: TabBarProps) {
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
        <TabIcon
          icon={Radio}
          label="Broadcast"
          active={activeTab === "broadcast"}
          onClick={() => onTabChange("broadcast")}
        />
        <TabIcon
          icon={Bolt}
          label="Workflow"
          active={activeTab === "workflow"}
          onClick={() => onTabChange("workflow")}
        />
        <TabIcon
          icon={Zap}
          label="Quick Reply"
          active={activeTab === "quick-reply"}
          onClick={() => onTabChange("quick-reply")}
        />
        <TabIcon
          icon={Database}
          label="CRM"
          active={activeTab === "crm"}
          onClick={() => onTabChange("crm")}
        />
        <TabIcon
          icon={MessageSquare}
          label="Direct"
          active={activeTab === "direct"}
          onClick={() => onTabChange("direct")}
        />
        <TabIcon
          icon={CalendarClock}
          label="Status"
          active={activeTab === "status"}
          onClick={() => onTabChange("status")}
        />
        <TabIcon
          icon={EyeOff}
          label="Privacy"
          active={activeTab === "privacy"}
          onClick={() => onTabChange("privacy")}
        />
      </Stack>
      <Stack mt="auto" gap={4}>
        <TabIcon
          icon={Settings}
          label="Settings"
          active={activeTab === "settings"}
          onClick={() => onTabChange("settings")}
        />
      </Stack>
    </Stack>
  );
}

// Update TabIcon to accept onClick
interface TabIconProps {
  icon: LucideIcon;
  active?: boolean;
  label: string;
  onClick?: () => void;
}

function TabIcon({ icon: Icon, active, label, onClick }: TabIconProps) {
  return (
    <Tooltip label={label} position="left" withArrow>
      <ActionIcon
        variant="transparent"
        size="xl"
        color={active ? "emerald.4" : "dimmed"}
        onClick={onClick}
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
