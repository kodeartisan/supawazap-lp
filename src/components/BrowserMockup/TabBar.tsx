"use client";

import { ActionIcon, Box, Stack, Tooltip } from "@mantine/core";
import { Icon } from "@iconify/react";

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
          icon="tabler:broadcast"
          label="Broadcast"
          active={activeTab === "broadcast"}
          onClick={() => onTabChange("broadcast")}
        />
        <TabIcon
          icon="tabler:robot"
          label="Workflow"
          active={activeTab === "workflow"}
          onClick={() => onTabChange("workflow")}
        />
        <TabIcon
          icon="tabler:bolt"
          label="Quick Reply"
          active={activeTab === "quick-reply"}
          onClick={() => onTabChange("quick-reply")}
        />
        <TabIcon
          icon="tabler:address-book"
          label="CRM"
          active={activeTab === "crm"}
          onClick={() => onTabChange("crm")}
        />
        <TabIcon
          icon="tabler:message-plus"
          label="Direct"
          active={activeTab === "direct"}
          onClick={() => onTabChange("direct")}
        />
        <TabIcon
          icon="tabler:tools"
          label="Tools"
          active={activeTab === "tools"}
          onClick={() => onTabChange("tools")}
        />
        <TabIcon
          icon="tabler:history-toggle"
          label="Status"
          active={activeTab === "status"}
          onClick={() => onTabChange("status")}
        />
        <TabIcon
          icon="tabler:eye-off"
          label="Privacy"
          active={activeTab === "privacy"}
          onClick={() => onTabChange("privacy")}
        />
      </Stack>
      <Stack mt="auto" gap={4}>
        <TabIcon
          icon="tabler:settings"
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
  icon: string;
  active?: boolean;
  label: string;
  onClick?: () => void;
}

function TabIcon({ icon, active, label, onClick }: TabIconProps) {
  return (
    <Tooltip label={label} position="right" withArrow>
      <ActionIcon
        variant="transparent"
        size={40}
        onClick={onClick}
        style={{
          color: active ? "#10b981" : "#94a3b8",
          // Add a subtle background for active state if desired
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
        <Icon icon={icon} width={22} strokeWidth={1.5} />
      </ActionIcon>
    </Tooltip>
  );
}
