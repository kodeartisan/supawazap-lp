"use client";

import {
  Box,
  Container,
  Group,
  List,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  rem,
  Paper,
} from "@mantine/core";
import { Icon } from "@iconify/react";

const features = [
  {
    title: "Your CRM, Built Into WhatsApp",
    description:
      "Transform WhatsApp Web into a complete customer database. Manage leads directly from the chat interface—no switching apps.",
    points: [
      "Save contacts with Custom Fields (Text, Date, Select, Rating, etc.)",
      "Organize contacts using Tags for instant categorization",
      "Interaction history notes per customer",
      "Smart Segments for dynamic contact filtering (AND/OR logic)",
      "Import contacts from Excel, Phone Sync, or Group Members",
      "Quickly search contacts by name, number, tags, or custom fields",
      "Customizable Contact View columns for your workflow",
    ],
    imagePosition: "right",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    title: "Build Once, Automate Forever",
    description:
      "Create intelligent chatbots in minutes, not months. Our Visual Builder turns your ideas into 24/7 automated assistants.",
    points: [
      "Trigger flows based on Incoming Message Keywords, Exact Match, or Any Message",
      "Auto actions: Reply, Add/Remove Tags, Update CRM Fields, or Archive Chat",
      "Personal Trigger scope for personal chats or specific Group IDs",
      "Dynamic Variables: Insert {sender_name}, {date}, {time} into automated replies",
      "Rich Media Replies: Send Images, Videos, Audio, or Documents automatically",
      "Wait & Delay steps to create natural conversational pacing",
    ],
    imagePosition: "left",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    title: "Bulk Messaging, Zero Risk",
    description:
      "Transform tedious manual messaging into one-click campaigns. Our intelligent engine handles timing, pacing, and safety.",
    points: [
      "Smart Batching: Automatically splits large lists with rest periods.",
      "Typing Presence: Shows 'Typing...' status before sending for a natural feel.",
      "Randomized Delays between messages to simulate human behavior",
      "Smart Scheduler: Schedule broadcasts for specific future dates and times",
      "Post-Broadcast Automation: Auto-tag or Archive chat based on delivery status",
      "Automatic Number Validation before sending to prevent errors",
      "Track delivery status for each recipient",
      "Export delivery reports for team analysis",
    ],
    imagePosition: "right",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
];

export function Features() {
  return (
    <Box py={100} id="features">
      <Container size="lg">
        <Stack align="center" mb={{ base: 60, md: 100 }}>
          <Title
            order={2}
            ta="center"
            style={{ fontSize: rem(60) }}
            className="text-gradient"
          >
            Automate. Organize. Scale.
          </Title>
          <Text
            c="dimmed"
            ta="center"
            maw={700}
            size="xl"
            style={{ lineHeight: 1.6 }}
          >
            Built for power users who need more than just a chat app. Experience
            the next evolution of WhatsApp Web.
          </Text>
        </Stack>

        <Stack gap={120}>
          {features.map((feature, index) => (
            <Group
              key={index}
              gap={80}
              align="center"
              style={{
                flexDirection:
                  feature.imagePosition === "right" ? "row" : "row-reverse",
              }}
              visibleFrom="md"
            >
              {/* Text Content */}
              <Stack style={{ flex: 1 }}>
                <Title order={2} style={{ fontSize: rem(42), fontWeight: 800 }}>
                  {feature.title}
                </Title>
                <Text
                  c="dimmed"
                  size="xl"
                  mt="md"
                  style={{ fontSize: rem(22), lineHeight: 1.6 }}
                >
                  {feature.description}
                </Text>

                <List
                  mt={30}
                  spacing="md"
                  size="lg"
                  icon={
                    <ThemeIcon color="emerald" size={24} radius="xl">
                      <Icon icon="tabler:check" width={14} />
                    </ThemeIcon>
                  }
                >
                  {feature.points.map((point, idx) => (
                    <List.Item key={idx} c="white">
                      <Text
                        span
                        c="gray.3"
                        size="lg"
                        style={{ lineHeight: 1.6 }}
                      >
                        {point}
                      </Text>
                    </List.Item>
                  ))}
                </List>
              </Stack>

              {/* YouTube Video Embed */}
              <Box style={{ flex: 1 }}>
                <Paper
                  radius="xl"
                  h={400}
                  p={0}
                  style={{
                    background: "#000",
                    border: "1px solid var(--bg-glass-overlay)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${feature.videoId}?autoplay=1&mute=1&loop=1&playlist=${feature.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                    title={feature.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "177.78%", // 16:9 aspect ratio compensation
                      height: "177.78%",
                      transform: "translate(-50%, -50%)",
                      borderRadius: "inherit",
                      pointerEvents: "none",
                    }}
                  />
                </Paper>
              </Box>
            </Group>
          ))}

          {/* Mobile View (Consistent Order) */}
          <Stack gap={100} hiddenFrom="md">
            {features.map((feature, index) => (
              <Stack key={index} gap="xl">
                {/* Visual First on Mobile for Impact, or Text First? Text First is usually safer for context. Let's do Text First. */}
                <Stack>
                  <Title order={2} fz={32} fw={800} lh={1.2}>
                    {feature.title}
                  </Title>
                  <Text c="dimmed" size="md">
                    {feature.description}
                  </Text>
                </Stack>

                <Paper
                  radius="xl"
                  h={250}
                  style={{
                    background: "#000",
                    border: "1px solid var(--bg-glass-overlay)",
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                  }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${feature.videoId}?autoplay=1&mute=1&loop=1&playlist=${feature.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                    title={feature.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "177.78%",
                      height: "177.78%",
                      transform: "translate(-50%, -50%)",
                      borderRadius: "inherit",
                      pointerEvents: "none",
                    }}
                  />
                </Paper>

                <List
                  spacing="sm"
                  size="md"
                  icon={
                    <ThemeIcon color="emerald" size={20} radius="xl">
                      <Icon icon="tabler:check" width={12} />
                    </ThemeIcon>
                  }
                >
                  {feature.points.map((point, idx) => (
                    <List.Item key={idx} c="white">
                      <Text span c="gray.3" size="sm">
                        {point}
                      </Text>
                    </List.Item>
                  ))}
                </List>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
