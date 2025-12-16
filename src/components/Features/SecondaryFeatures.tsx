"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  rem,
  Badge,
  Group,
  Button,
} from "@mantine/core";
import { Icon } from "@iconify/react";
import { SpotlightCard } from "../SpotlightCard"; // Import komponen baru
import { PremiumCard } from "../PremiumCard";

const secondaryFeatures = [
  {
    emoji: "⚡",
    title: "Smart Quick Replies",
    description:
      "Reply in milliseconds. Save text, image, video, or PDF templates and send them with a single click.",
  },
  {
    emoji: "🗓️",
    title: "Status Scheduler",
    description:
      "Automate your 'Story Selling'. Schedule WhatsApp Status updates (Text/Media) for the entire week in advance.",
  },
  {
    emoji: "👥",
    title: "Community Scraper",
    description:
      "Turn groups into leads. Extract member data from WhatsApp Groups and Communities to build your marketing database.",
  },
  {
    emoji: "✅",
    title: "Number Validator",
    description:
      "Clean your database. Bulk validate thousands of numbers to separate active accounts from invalid ones before broadcasting.",
  },
  {
    emoji: "📂",
    title: "Bulk Chat Manager",
    description:
      "Achieve Inbox Zero instantly. Archive, Pin, or Mute hundreds of chats at once to keep your workspace organized.",
  },
  {
    emoji: "🔒",
    title: "Privacy Blur",
    description:
      "Work safely in public. Blur sensitive info like contact names, photos, and message content automatically. Unblur on hover.",
  },
  {
    emoji: "👋",
    title: "Direct Chat",
    description:
      "Start conversations instantly without saving the number to your phone contacts. Supports 'Typing...' simulation.",
  },
  {
    emoji: "🔗",
    title: "Link Generator",
    description:
      "Turn traffic into chats. Generate custom `wa.me` links with pre-filled messages for your ads and social bio.",
  },
  {
    emoji: "📥",
    title: "Full Data Export",
    description:
      "You own your data. Export chat history, group members, or CRM contacts to Excel (XLSX), CSV, or JSON anytime.",
  },
  {
    emoji: "🔀",
    title: "Spintax Engine",
    description:
      "Avoid spam detection. Automatically randomize greetings and phrases (e.g., {Hi|Hello}) so every message looks unique.",
  },
  {
    emoji: "🎯",
    title: "Smart Filter Segments",
    description:
      "Target the right audience. Create dynamic rules to filter contacts by tags, country, or activity for laser-focused campaigns.",
  },
  {
    emoji: "😀",
    title: "Emoji & Formatting",
    description:
      "Express yourself clearly. Built-in emoji picker and rich text tools (Bold, Italic, Strikethrough) for perfect message composition.",
  },
  {
    emoji: "⏰",
    title: "Personal Message Scheduler",
    description:
      "Never miss a follow-up. Schedule messages for individual chats to be delivered automatically at a future time.",
  },
  {
    emoji: "✨",
    title: "AI Writer Assistant",
    description:
      "Your personal writing genius. Fix grammar, rewrite text, or change the tone of your messages instantly before sending.",
    comingSoon: true,
  },
  {
    emoji: "📁",
    title: "Custom Chat Tabs",
    description:
      "Organize your chaos. Create custom tabs (Labels) like 'Leads', 'VIP', or 'Family' to categorize your chats for easy access.",
    comingSoon: true,
  },
  {
    emoji: "📢",
    title: "Group Link Manager",
    description:
      "Track and manage your group invite links efficiently. Monitor traffic and join requests from a single dashboard.",
    comingSoon: true,
  },
  {
    emoji: "🌐",
    title: "AI Translate",
    description: "Break language barriers. Translation for incoming messages.",
    comingSoon: true,
  },
  {
    emoji: "💾",
    title: "Chat Backup",
    description:
      "Secure your business data. Automatically backup chats, media, and contacts to your computer or cloud storage.",
    comingSoon: true,
  },
];

export function SecondaryFeatures() {
  return (
    <Box py={100} style={{ position: "relative", zIndex: 1 }}>
      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <Stack align="center" mb={{ base: 40, md: 80 }}>
          <Title
            order={2}
            ta="center"
            style={{ fontSize: rem(42) }}
            className="text-gradient"
          >
            Everything You Need to Scale
          </Title>
          <Text c="dimmed" ta="center" maw={600} size="lg">
            Supawazap is packed with utility tools designed to make your
            WhatsApp marketing workflow seamless and efficient.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={20}>
          {secondaryFeatures.map((feature: any, index: number) => (
            // Implementasi SpotlightCard
            <PremiumCard key={index} className="feature-card-group">
              <Stack
                justify="space-between"
                h="100%"
                gap="sm"
                style={{ position: "relative", zIndex: 10 }}
              >
                <Box>
                  <Group justify="space-between" align="start" mb="md">
                    <ThemeIcon
                      size={50}
                      radius="md"
                      variant="light"
                      color="gray"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "#fff",
                      }}
                    >
                      <Text style={{ fontSize: rem(26) }}>{feature.emoji}</Text>
                    </ThemeIcon>
                    {feature.comingSoon && (
                      <Badge
                        variant="light"
                        color="orange"
                        size="sm"
                        style={{
                          backgroundColor: "rgba(251, 146, 60, 0.1)",
                          color: "#fb923c",
                          border: "1px solid rgba(251, 146, 60, 0.2)",
                        }}
                      >
                        Coming Soon
                      </Badge>
                    )}
                  </Group>
                  <Text fz="lg" fw={600} mb="xs" c="white">
                    {feature.title}
                  </Text>
                  <Text c="dimmed" size="sm" lh={1.6}>
                    {feature.description}
                  </Text>
                </Box>
              </Stack>

              {/* Hover Overlay */}
              <Box
                className="feature-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  backdropFilter: "blur(4px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.2s ease",
                  zIndex: 20,
                  borderRadius: "inherit",
                }}
              >
                <Button
                  size="md"
                  radius="xl"
                  className="btn-primary-action view-demo-btn"
                  leftSection={<Icon icon="tabler:eye" width={18} />}
                  style={{
                    transform: "translateY(10px)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  View Demo
                </Button>
              </Box>
            </PremiumCard>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
