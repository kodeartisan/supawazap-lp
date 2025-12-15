"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  Paper,
  rem,
} from "@mantine/core";

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
];

export function SecondaryFeatures() {
  return (
    <Box py={100} style={{ position: "relative", zIndex: 1 }}>
      <Container size="xl">
        <Stack gap="xl" align="center" mb={60}>
          <Title
            order={2}
            ta="center"
            style={{ fontSize: rem(42), fontWeight: 700 }}
          >
            Everything You Need to <br />
            <Text
              span
              inherit
              style={{
                background: "linear-gradient(to right, #34d399, #10b981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Dominate WhatsApp
            </Text>
          </Title>
          <Text c="dimmed" ta="center" maw={600} size="lg">
            Powerful utilities built directly into your browser to handle strict
            business requirements.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={30}>
          {secondaryFeatures.map((feature, index) => (
            <Paper
              key={index}
              p="xl"
              radius="lg"
              style={{
                backgroundColor: "var(--bg-card-secondary)", // Darker glass style from globals.css
                border: "1px solid var(--border-subtle)",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--brand-emerald-500)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <ThemeIcon
                size={50}
                radius="md"
                variant="light"
                color="gray"
                mb="md"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <Text style={{ fontSize: rem(26) }}>{feature.emoji}</Text>
              </ThemeIcon>

              <Text fz="lg" fw={600} mb="xs" c="white">
                {feature.title}
              </Text>
              <Text c="dimmed" size="sm" lh={1.6}>
                {feature.description}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
