"use client";

import {
  Avatar,
  Badge,
  Box,
  Button,
  Group,
  Paper,
  ScrollArea,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Tooltip,
  ActionIcon,
  rem,
} from "@mantine/core";
import {
  BarChart3,
  Bolt,
  CalendarClock,
  CheckCheck,
  Database,
  EyeOff,
  FileText,
  MessageSquare,
  MoreVertical,
  Radio,
  Search,
  Send,
  Settings,
  Users,
  X,
  Zap,
} from "lucide-react";

export function BrowserMockup() {
  return (
    <Box
      mt={100}
      style={{
        perspective: "1200px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          transform: "rotateX(10deg) rotateY(0deg)",
          transformStyle: "preserve-3d",
          animation: "float-card 6s ease-in-out infinite",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        {/* The Window Frame */}
        <Paper
          radius="lg"
          style={{
            background: "#0f172a", // Dark slate background matching WA Dark Mode
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.1)",
            overflow: "hidden",
          }}
        >
          {/* Browser Header */}
          <Group
            px="md"
            h={40}
            style={{
              background: "rgba(30, 41, 59, 0.5)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
            gap="xs"
          >
            <Group gap={6}>
              <Box w={10} h={10} bg="red.5" style={{ borderRadius: "50%" }} />
              <Box
                w={10}
                h={10}
                bg="yellow.5"
                style={{ borderRadius: "50%" }}
              />
              <Box w={10} h={10} bg="green.5" style={{ borderRadius: "50%" }} />
            </Group>
            <Box
              bg="rgba(0, 0, 0, 0.2)"
              px="md"
              py={4}
              style={{
                borderRadius: 6,
                fontSize: 12,
                color: "#94a3b8",
                flex: 1,
                textAlign: "center",
                fontFamily: "monospace",
              }}
            >
              web.whatsapp.com
            </Box>
          </Group>

          {/* The Interface Mockup */}
          <Box h={600} style={{ display: "flex", overflow: "hidden" }}>
            {/* 1. LEFT SIDEBAR (Standard WhatsApp List) */}
            <Stack
              w={280}
              h="100%"
              gap={0}
              style={{
                borderRight: "1px solid rgba(255,255,255,0.05)",
                background: "#111b21", // WA Dark Sidebar
              }}
              visibleFrom="sm"
            >
              {/* WA Header */}
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
              <Box
                p="sm"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
              >
                <TextInput
                  placeholder="Search or start new chat"
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

              {/* Chat List with Privacy Blur Effect */}
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
                        {/* FEATURE: Privacy Blur on Names */}
                        <Box
                          style={{
                            filter: i !== 1 ? "blur(4px)" : "none", // Active chat unblurred
                            width: "fit-content",
                          }}
                        >
                          <Text size="sm" fw={500} c="white">
                            {i === 1 ? "John Doe (Lead)" : "Hidden Contact"}
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

            {/* 2. MIDDLE (Active Chat Area) */}
            <Stack
              style={{
                flex: 1,
                position: "relative",
                background: "#0b141a", // WA Dark Chat BG
              }}
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
                  <Avatar
                    radius="xl"
                    src="https://i.pravatar.cc/150?img=33"
                    size="sm"
                  />
                  <Stack gap={0}>
                    <Text size="sm" fw={600} c="white">
                      John Doe (Lead)
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
                        Hi! I'm interested in the Broadcast feature. Does it
                        support scheduling?
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
                        background: "#005c4b", // WA Green
                        color: "white",
                        borderTopRightRadius: 0,
                        maxWidth: "65%",
                      }}
                    >
                      <Text size="sm">
                        Yes! Supawazap allows you to schedule broadcasts for any
                        future date.
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

              {/* Input Area with Quick Reply Feature */}
              <Box
                h={62}
                px="md"
                bg="#202c33"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <ThemeIcon variant="transparent" color="gray">
                  <IconPlus />
                </ThemeIcon>

                {/* Message Input Box */}
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

                  {/* FEATURE: Quick Reply Icon (Lightning Bolt) */}
                  <Tooltip label="Quick Reply" withArrow>
                    <ActionIcon
                      variant="light"
                      color="emerald"
                      radius="xl"
                      size="sm"
                    >
                      <Bolt size={14} />
                    </ActionIcon>
                  </Tooltip>
                </Paper>

                <ThemeIcon variant="transparent" color="gray">
                  <IconMicrophone />
                </ThemeIcon>
              </Box>
            </Stack>

            {/* 3. RIGHT SIDEBAR (THE EXTENSION - Supawazap) */}
            {/* Matches src/components/App.tsx layout */}
            <Group gap={0} h="100%" align="flex-start" bg="transparent">
              {/* Extension Panel Content (Glassmorphism) */}
              <Paper
                w={320}
                h="100%"
                radius={0}
                style={{
                  // Transparent black for high contrast
                  backgroundColor: "rgba(0, 0, 0, 0.85)",
                  // Strong blur to obscure WA chat behind it (simulated here since it's side-by-side)
                  backdropFilter: "blur(24px)",
                  borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Header matching src/components/Layout/LayoutPage.tsx */}
                <Group
                  justify="space-between"
                  p="md"
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.02), transparent)",
                  }}
                >
                  <Group gap={10}>
                    <Box
                      p={6}
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: 8,
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <Zap size={18} color="#34d399" fill="#34d399" />
                    </Box>
                    <Stack gap={0}>
                      <Text
                        size="sm"
                        fw={700}
                        style={{
                          background:
                            "linear-gradient(to right, #a7f3d0, #34d399)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Broadcast
                      </Text>
                      <Badge
                        size="xs"
                        variant="gradient"
                        gradient={{ from: "emerald", to: "green" }}
                        radius="sm"
                      >
                        Pro
                      </Badge>
                    </Stack>
                  </Group>
                  <ActionIcon variant="subtle" color="gray" size="sm">
                    <X size={16} />
                  </ActionIcon>
                </Group>

                {/* Content Body (Simulating Broadcast Form) */}
                <ScrollArea style={{ flex: 1 }} p="md">
                  <Stack gap="md">
                    {/* Recipient Selector */}
                    <Paper
                      p="xs"
                      withBorder
                      bg="rgba(255,255,255,0.02)"
                      style={{ borderColor: "rgba(255,255,255,0.1)" }}
                    >
                      <Group justify="space-between" mb={8}>
                        <Text size="xs" fw={600} c="dimmed">
                          RECIPIENTS
                        </Text>
                        <Badge size="xs" variant="outline" color="emerald">
                          1,240 Selected
                        </Badge>
                      </Group>
                      <Group gap={6}>
                        <Button
                          size="xs"
                          variant="light"
                          color="emerald"
                          radius="md"
                          leftSection={<Users size={12} />}
                          styles={{ root: { flex: 1 } }}
                        >
                          CRM
                        </Button>
                        <Button
                          size="xs"
                          variant="default"
                          radius="md"
                          styles={{
                            root: {
                              flex: 1,
                              background: "transparent",
                              border: "1px solid rgba(255,255,255,0.1)",
                              color: "#9ca3af",
                            },
                          }}
                          leftSection={<FileText size={12} />}
                        >
                          Excel
                        </Button>
                      </Group>
                    </Paper>

                    {/* Message Input */}
                    <Stack gap={4}>
                      <Group justify="space-between">
                        <Text size="xs" fw={600} c="dimmed">
                          MESSAGE
                        </Text>
                        <Text
                          size="xs"
                          c="emerald.4"
                          style={{ cursor: "pointer" }}
                        >
                          Select Template
                        </Text>
                      </Group>
                      <TextInput
                        placeholder="Hello {name}..."
                        variant="filled"
                        styles={{
                          input: {
                            backgroundColor: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "white",
                            minHeight: 100,
                            paddingTop: 10,
                          },
                        }}
                      />
                      <Group gap={6}>
                        <Badge size="xs" variant="outline" color="gray">
                          {"{name}"}
                        </Badge>
                        <Badge size="xs" variant="outline" color="gray">
                          {"{date}"}
                        </Badge>
                      </Group>
                    </Stack>

                    {/* Settings Toggles */}
                    <Stack gap="xs" mt="xs">
                      <Group justify="space-between">
                        <Group gap={6}>
                          <Text size="sm">Random Delay</Text>
                          <Tooltip label="Anti-ban protection">
                            <ThemeIcon
                              size={14}
                              radius="xl"
                              variant="transparent"
                              c="dimmed"
                            >
                              <span style={{ fontSize: 10 }}>?</span>
                            </ThemeIcon>
                          </Tooltip>
                        </Group>
                        <Badge variant="light" color="emerald">
                          5-15s
                        </Badge>
                      </Group>

                      <Group justify="space-between">
                        <Text size="sm">Batching</Text>
                        <Badge variant="outline" color="yellow" size="xs">
                          50 msgs / 5 min
                        </Badge>
                      </Group>
                    </Stack>

                    {/* Action Button */}
                    <Button
                      fullWidth
                      size="md"
                      color="emerald"
                      variant="gradient"
                      gradient={{ from: "emerald.6", to: "emerald.4", deg: 45 }}
                      mt="md"
                      leftSection={<Send size={16} />}
                      style={{
                        boxShadow: "0 0 20px rgba(16, 185, 129, 0.2)",
                      }}
                    >
                      Start Broadcast
                    </Button>
                  </Stack>
                </ScrollArea>
              </Paper>

              {/* Vertical Tab Bar (Rightmost Edge) */}
              {/* Based on src/components/App.tsx renderTabList */}
              <Stack
                w={50}
                h="100%"
                bg="#0f172a" // Darker than panel
                style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}
                align="center"
                py="sm"
                gap={0}
              >
                {/* Main Tabs */}
                <Stack gap={4}>
                  <TabIcon icon={Radio} active label="Broadcast" />
                  <TabIcon icon={Bot} label="Workflow" />
                  <TabIcon icon={Bolt} label="Quick Reply" />
                  <TabIcon icon={Database} label="CRM" />
                  <TabIcon icon={MessageSquare} label="Direct" />
                  <TabIcon icon={CalendarClock} label="Status" />
                  <TabIcon icon={EyeOff} label="Privacy" />
                </Stack>

                {/* Bottom Tabs */}
                <Stack mt="auto" gap={4}>
                  <TabIcon icon={Settings} label="Settings" />
                </Stack>
              </Stack>
            </Group>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

// Helper Components for clean markup

function TabIcon({
  icon: Icon,
  active,
  label,
}: {
  icon: any;
  active?: boolean;
  label: string;
}) {
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

// Simple Icons for WA UI
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

const Bot = ({ size, ...props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v2" />
    <path d="M9 13v2" />
  </svg>
);
