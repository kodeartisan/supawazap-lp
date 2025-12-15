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
    title: "CRM & Contact Management",
    description:
      "Transform WhatsApp Web into a complete customer database. Manage leads directly from the chat interface.",
    points: [
      "Save contacts with Custom Fields (Text, Date, Select, Rating, etc.)", //
      "Organize contacts using Tags", //
      "Interaction history notes per customer", //
      "Smart Segments for dynamic contact filtering (AND/OR logic)", //
      "Edit Contact details (Name, Number) directly within the extension", //
      "Import contacts from Excel, Phone Sync, or Group Members", //
      "Quickly search contacts by name, number, tags, or custom fields", //
      "Customizable Contact View columns for better data visibility", //
    ],
    imagePosition: "right",
  },
  {
    title: "Build Intelligent Chatbots in Minutes.",
    description:
      "Automate your follow-ups, lead qualification, and customer support with our Visual Builder. Let Supawazap work while you sleep.",
    points: [
      "Trigger flows based on Incoming Message Keywords, Exact Match, or Any Message", //
      "Auto actions: Reply, Add/Remove Tags, Update CRM Fields, or Archive Chat", //
      "Personal Trigger scope for private chats or specific Group IDs", //
      "Dynamic Variables: Insert {sender_name}, {date}, {time} into automated replies", //
      "Rich Media Replies: Send Images, Videos, Audio, or Documents automatically", //
      "Wait & Delay steps to create natural conversational pacing", //,
    ],
    imagePosition: "left",
  },
  {
    title: "Smart Broadcast & Bulk Sender",
    description:
      "Our proprietary Human Simulation Engine mimics real typing speed, adds random delays, and uses smart batching to keep your number safe.",
    points: [
      "Smart Batching: Automatically splits large lists with rest periods.", //
      "Typing Presence: Shows 'Typing...' status before sending for a natural feel.", //
      "Randomized Delays between messages to simulate human behavior", //
      "Spintax support {Hi|Hello} for automatic message variation", //
      "Smart Scheduler: Schedule broadcasts for specific future dates and times", //
      "Post-Broadcast Automation: Auto-tag or Archive chat based on delivery status", //
      "Automatic Number Validation before sending to prevent errors", //
    ],
    imagePosition: "right",
  },
  {
    title: "A Database That Adapts to Your Business.",
    description:
      "Go beyond simple contact saving. Create a fully customized database with specific data types that matter to you",
    points: [
      "Support for Text, Number, Date, URL, and Toggle types", //
      "Selection fields: Dropdown and Multi-Select options", //
      "Store Images and Documents directly in contact profiles", //
      "Rating System: Score leads with 1-5 star ratings", //
      "Auto-update fields via Workflow automation actions", //
      "Toggle field visibility in the Contact Manager columns", //
      "Filter contacts using specific Custom Field values", //
    ],
    imagePosition: "left",
  },

  {
    title: "Automate Your Campaign Follow-up",
    description:
      "Don't just send messages—act on the results. Supawazap automatically cleans your list and tags users based on delivery status.",
    points: [],
    imagePosition: "right",
  },
];

export function Features() {
  return (
    <Box py={100} id="features">
      <Container size="lg">
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
                <Title order={2} style={{ fontSize: rem(42), fontWeight: 700 }}>
                  {feature.title}
                </Title>
                <Text
                  c="dimmed"
                  size="lg"
                  mt="md"
                  style={{ fontSize: rem(20) }}
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
                      <Text span c="gray.3">
                        {point}
                      </Text>
                    </List.Item>
                  ))}
                </List>
              </Stack>

              {/* Visual/Image Placeholder */}
              <Box style={{ flex: 1 }}>
                <Paper
                  radius="xl"
                  h={400}
                  style={{
                    background: "var(--bg-card-primary)",
                    border: "1px solid var(--bg-glass-overlay)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Decorative Elements mimicking the screenshot UI */}
                  <Box
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "80%",
                      height: "80%",
                      background:
                        "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)",
                      filter: "blur(40px)",
                    }}
                  />

                  {/* Mock UI Element */}
                  <Box
                    style={{
                      position: "absolute",
                      inset: 20,
                      background: "rgba(0,0,0,0.4)",
                      borderRadius: 16,
                      border: "1px solid rgba(255,255,255,0.05)",
                      backdropFilter: "blur(10px)",
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
                    background: "var(--bg-card-primary)",
                    border: "1px solid var(--bg-glass-overlay)",
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                  }}
                >
                  <Box
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "80%",
                      height: "80%",
                      background:
                        "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)",
                      filter: "blur(40px)",
                    }}
                  />
                  <Box
                    style={{
                      position: "absolute",
                      inset: 15,
                      background: "rgba(0,0,0,0.4)",
                      borderRadius: 12,
                      border: "1px solid rgba(255,255,255,0.05)",
                      backdropFilter: "blur(10px)",
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
