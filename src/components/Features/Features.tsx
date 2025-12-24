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

const features = [
  {
    emoji: "📇",
    title: "Contact Management",
    description:
      "Manage your leads. View detailed profiles, assign tags, and keep your contact list organized directly inside WhatsApp.",
    youtubeId: "Q9Sur3myulg",
  },
  {
    emoji: "🚀",
    title: "Workflow Automation",
    description:
      "Build no-code chatbots. Visually create flows with triggers, keyword auto-replies, and actions to automate conversations 24/7.",
    youtubeId: "6FJjvpJIFto",
  },
  {
    emoji: "📡",
    title: "Smart Broadcast",
    description:
      "Reach thousands instantly. Send personalized campaigns with schedule, batching, and spintax to avoid spam detection.",
    youtubeId: "dFEg_ZxicYI",
  },
  {
    emoji: "🤖",
    title: "Post Broadcast",
    description:
      "Automate after sending. Trigger actions like adding tags, updating fields, or sending follow-ups based on delivery status.",
    youtubeId: "dFEg_ZxicYI",
  },
  {
    emoji: "💾",
    title: "Smart Lists",
    description:
      "Save recipient groups for quick reuse. Load entire contact lists like 'Webinar Attendees' or 'VIP Clients' in one click for your next broadcast.",
  },
  {
    emoji: "📋",
    title: "Live Delivery Reports",
    description:
      "Monitor delivery status real-time. See who received, failed, or is pending. Retry failed messages and export detailed reports to CSV/Excel.",
    youtubeId: "dFEg_ZxicYI",
  },
  {
    emoji: "⏰",
    title: "Schedule Message",
    description:
      "Never miss a follow-up. Draft messages now and schedule them to be sent automatically at a precise future date and time.",
  },
  {
    emoji: "🎯",
    title: "Smart Segment",
    description:
      "Target the right audience. Create dynamic rules to filter contacts by tags, country, or activity for laser-focused campaigns.",
  },
  {
    emoji: "🔧",
    title: "Custom Field",
    description:
      "Go beyond names. Store personalized data like Order IDs or preferences to segment your audience effectively.",
  },

  {
    emoji: "📝",
    title: "Notes & History",
    description:
      "Track every interaction. Add private notes to customer profiles to remember important details and history.",
  },
  {
    emoji: "🧩",
    title: "Message Templates",
    description:
      "Save time on rewriting. Create reusable templates with media, buttons, and variables for faster communication.",
  },
  {
    emoji: "⚡",
    title: "Quick Reply",
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
    emoji: "🏷️",
    title: "Tags",
    description:
      "Organize contacts with unlimited color-coded tags. Filter and broadcast to specific segments instantly.",
  },
  {
    emoji: "👥",
    title: "Group Member Scraper",
    description:
      "Turn groups into leads. Extract members from multiple groups at once, optionally include admins, and export to CSV or Excel.",
  },
  {
    emoji: "📒",
    title: "Contact Scraper",
    description:
      "Export your network. Filter contacts by type (Saved/Unsaved), account status (Business/Personal), or unread messages.",
  },
  {
    emoji: "✅",
    title: "Number Validator",
    description:
      "Clean your database. Bulk validate thousands of numbers to separate active accounts from invalid ones before broadcasting.",
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
    emoji: "🔀",
    title: "Spintax",
    description:
      "Avoid spam detection. Automatically randomize greetings and phrases (e.g., {Hi|Hello}) so every message looks unique.",
  },

  {
    emoji: "😀",
    title: "Emoji & Formatting",
    description:
      "Express yourself clearly. Built-in emoji picker and rich text tools (Bold, Italic, Strikethrough) for perfect message composition.",
  },

  {
    emoji: "📂",
    title: "Bulk Chat Archiver",
    description:
      "Declutter your inbox. Archive inactive chats in bulk to keep your workspace focused on what matters.",
  },
  {
    emoji: "📌",
    title: "Bulk Pin Manager",
    description:
      "Prioritize key conversations. Pin multiple chats to the top at once so you never lose track of VIPs.",
  },
  {
    emoji: "🔇",
    title: "Bulk Mute Manager",
    description:
      "Silence the noise. Mute noisy groups or contacts in bulk to regain your focus and productivity.",
  },
];

import { useState } from "react";
import { Modal } from "@mantine/core";

export function Features() {
  const [activeFeature, setActiveFeature] = useState<any | null>(null);

  return (
    <Box id="features" py={100} style={{ position: "relative", zIndex: 1 }}>
      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <Stack align="center" mb={{ base: 40, md: 80 }}>
          <Title
            order={2}
            className="text-gradient" // Menggunakan class global Anda
            style={{
              fontSize: rem(60),
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            The Swiss Army Knife for WhatsApp.
          </Title>
          <Text
            c="dimmed"
            ta="center"
            maw={700}
            size="xl"
            style={{ lineHeight: 1.6 }}
          >
            Why install multiple extensions? Get every utility you need for
            WhatsApp marketing in a single, lightweight toolkit.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={20}>
          {features.map((feature: any, index: number) => (
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
                      size={60}
                      radius="md"
                      variant="light"
                      color="gray"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "#fff",
                      }}
                    >
                      <Text style={{ fontSize: rem(32) }}>{feature.emoji}</Text>
                    </ThemeIcon>
                    {feature.comingSoon && (
                      <Badge
                        variant="light"
                        color="orange"
                        size="md"
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
                  <Text fz={22} fw={700} mb="xs" c="white">
                    {feature.title}
                  </Text>
                  <Text c="dimmed" size="md" lh={1.6}>
                    {feature.description}
                  </Text>
                </Box>
              </Stack>

              {/* Hover Overlay */}
              {/* Hover Overlay */}
              {feature.youtubeId && (
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
                    onClick={() => setActiveFeature(feature)}
                    style={{
                      transform: "translateY(10px)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    Watch Demo
                  </Button>
                </Box>
              )}
            </PremiumCard>
          ))}
        </SimpleGrid>
      </Container>

      {/* Video Modal */}
      <Modal
        opened={!!activeFeature}
        onClose={() => setActiveFeature(null)}
        title={
          <Group gap="xs">
            <Text size="xl">{activeFeature?.emoji}</Text>
            <Text fw={700} size="lg" c="white">
              {activeFeature?.title}
            </Text>
          </Group>
        }
        size="70%"
        centered
        padding={0} // Remove default padding to let video/footer touch edges
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        styles={{
          content: {
            backgroundColor: "#1A1B1E",
            border: "1px solid rgba(255,255,255,0.1)",
            overflow: "hidden", // Ensure footer radius works
          },
          header: {
            backgroundColor: "#1A1B1E",
            color: "white",
            padding: "16px 20px",
          },
          body: {
            padding: 0, // Custom padding for body parts
          },
          close: {
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
            },
          },
        }}
      >
        <Stack gap={0}>
          {/* Video Section */}
          <Box
            style={{
              position: "relative",
              paddingBottom: "56.25%", // 16:9 Aspect Ratio
              backgroundColor: "#000",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${
                activeFeature?.youtubeId || "dQw4w9WgXcQ"
              }?autoplay=1&mute=1`} // Dynamic ID with fallback
              title="Video Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </Box>

          {/* Footer Section - Matches the screenshot layout */}
          <Group
            justify="space-between"
            align="center"
            p="md"
            style={{
              backgroundColor: "#25262B", // Slightly lighter dark background for footer
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <Text c="dimmed" size="sm" style={{ flex: 1, lineHeight: 1.4 }}>
              {activeFeature?.description}
            </Text>
            <Button
              component="a"
              href="https://chromewebstore.google.com/detail/supawazap-whatsapp-web-wi/elepijhjinijhgkcdhkpheojnpheelhl"
              target="_blank"
              color="emerald"
              size="md"
              radius="xl"
            >
              Install
            </Button>
          </Group>
        </Stack>
      </Modal>
    </Box>
  );
}
