"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Title,
  rem,
  ThemeIcon,
  Group,
  Badge,
  Paper,
} from "@mantine/core";
import { Icon } from "@iconify/react";
import { PremiumCard } from "@/components/PremiumCard"; // Pastikan path ini sesuai

const TRANSFORMATIONS = [
  {
    icon: "tabler:keyboard-off",
    title: "Manual Typing",
    pain: "Wasting 2 hours daily typing the same welcome message.",
    gain: "Reply in milliseconds with Quick Replies & Spintax.",
    stat: "10x Faster",
  },
  {
    icon: "tabler:clock-bolt",
    title: "Follow-up Timing",
    pain: "Forgetting to follow up and losing warm leads.",
    gain: "Never miss a beat with Scheduled Messages & Reminders.",
    stat: "0 Missed Leads",
  },
  {
    icon: "tabler:repeat",
    title: "Repetitive Tasks",
    pain: "Copy-pasting the same info to every new contact.",
    gain: "Automate workflows once, let them run forever.",
    stat: "90% Less Work",
  },
  {
    icon: "tabler:broadcast",
    title: "Mass Messaging",
    pain: "Manually forwarding updates to hundreds of customers one by one.",
    gain: "Broadcast personalized campaigns to unlimited contacts instantly.",
    stat: "Unlimited Reach",
  },
  {
    icon: "tabler:address-book",
    title: "Messy Contacts",
    pain: "Losing track of leads mixed with family and friends chats.",
    gain: "Organize with CRM tags, custom fields, and smart labels.",
    stat: "Total Clarity",
  },
  {
    icon: "tabler:eye-off",
    title: "Prying Eyes",
    pain: "Sensitive customer data visible to everyone when working in public.",
    gain: "Auto-blur messages and names for complete privacy.",
    stat: "100% Private",
  },
  {
    icon: "tabler:message-plus",
    title: "Phone Clutter",
    pain: "Saving temporary numbers to contacts just to send one message.",
    gain: "Message any number instantly without saving to your phone.",
    stat: "Clean Contacts",
  },
  {
    icon: "tabler:users-group",
    title: "Manual Copying",
    pain: "Manually copying hundreds of group members into a spreadsheet.",
    gain: "Scrape and export all group participants to Excel in one click.",
    stat: "Instant Leads",
  },
  {
    icon: "tabler:calendar-star",
    title: "Missed Prime Time",
    pain: "Posting status updates manually at odd hours when no one watches.",
    gain: "Schedule WhatsApp Statuses (Text/Media) for the entire week.",
    stat: "Max Views",
  },
];

export function PainVsGain() {
  return (
    <Box py={{ base: 60, md: 120 }} style={{ position: "relative" }}>
      {/* Background Decor: Subtle gradient beam behind the section */}
      <Box
        style={{
          position: "absolute",
          top: "0%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.05) 0%, transparent 60%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Stack align="center" mb={{ base: 50, md: 80 }} gap="sm">
          <Title
            order={2}
            ta="center"
            style={{ fontSize: rem(42) }}
            className="text-gradient"
          >
            Stop The Manual Grind.
          </Title>
          <Text c="dimmed" ta="center" maw={600} size="lg">
            See exactly how Supawazap replaces your daily headaches with
            automated efficiency.
          </Text>
        </Stack>

        {/* Transformation Grid */}
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={30}>
          {TRANSFORMATIONS.map((item, index) => (
            <PremiumCard key={index}>
              <Stack h="100%" justify="space-between" gap="lg">
                {/* Header Icon */}
                <Group justify="space-between" align="start">
                  <ThemeIcon
                    size={56}
                    radius="xl"
                    variant="gradient"
                    gradient={{ from: "emerald.9", to: "emerald.6", deg: 135 }}
                    style={{
                      boxShadow: "0 8px 20px rgba(16, 185, 129, 0.2)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <Icon icon={item.icon} width={28} />
                  </ThemeIcon>
                  <Badge
                    size="md"
                    variant="light"
                    color="emerald"
                    style={{
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                      color: "#34d399",
                    }}
                  >
                    {item.stat}
                  </Badge>
                </Group>

                <Stack gap="md" style={{ flex: 1 }}>
                  <Text fw={700} size="xl" c="white">
                    {item.title}
                  </Text>

                  {/* The Pain (Old Way) */}
                  <Group
                    gap="sm"
                    align="start"
                    wrap="nowrap"
                    style={{ opacity: 0.6 }}
                  >
                    <Icon
                      icon="tabler:x"
                      color="#ef4444"
                      width={20}
                      style={{ marginTop: 4, flexShrink: 0 }}
                    />
                    <Text size="sm" c="gray.5" lh={1.5}>
                      {item.pain}
                    </Text>
                  </Group>

                  {/* Visual Connector Line */}
                  <Box
                    pl={9} // Align with icons
                    py={2}
                  >
                    <Box
                      w={2}
                      h={20}
                      bg="linear-gradient(to bottom, #ef4444 0%, #10b981 100%)"
                      style={{ opacity: 0.3 }}
                    />
                  </Box>

                  {/* The Gain (New Way) */}
                  <Group gap="sm" align="start" wrap="nowrap">
                    <ThemeIcon
                      size={20}
                      radius="xl"
                      color="emerald"
                      variant="filled"
                      style={{ marginTop: 2, flexShrink: 0 }}
                    >
                      <Icon icon="tabler:check" width={12} />
                    </ThemeIcon>
                    <Text
                      size="md"
                      fw={600}
                      c="emerald.3" // Lighter emerald for text readability on dark bg
                      lh={1.4}
                      style={{
                        textShadow: "0 0 20px rgba(52, 211, 153, 0.2)",
                      }}
                    >
                      {item.gain}
                    </Text>
                  </Group>
                </Stack>
              </Stack>
            </PremiumCard>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
