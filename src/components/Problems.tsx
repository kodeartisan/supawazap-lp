import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  rem,
} from "@mantine/core";
import { Icon } from "@iconify/react";

const problems = [
  "Getting banned for sending blasts too fast.",
  "Manually forwarding messages one by one.",
  "Losing customer context & history.",
  "Can't filter leads by status (Cold/Warm).",
  "Typing the same answers repeatedly.",
  "Standard Quick Replies limit media/files.",
  "Waking up odd hours to send messages.",
  "Losing sales due to missed follow-ups.",
  "Data locked in phone, no Excel export.",
  "Prying eyes reading sensitive chats.",
  "Mixing personal chats with business.",
  "Drowning in manual admin work.",
  "Saving every number just to send a chat.",
  "Chat list is a messy unorganized chaos.",
  "Manually adding group members one by one.",
  "No AI assistant to fix grammar or tone.",
  "Posting status updates manually every day.",
  "Can't backup specific chats to PDF/HTML.",
];

export function Problems() {
  return (
    <Box py={{ base: 60, md: 100 }} style={{ position: "relative" }}>
      {/* Background Element */}
      <Box
        style={{
          position: "absolute",
          top: "10%",
          right: "0%",
          width: "40%",
          height: "80%",
          background:
            "radial-gradient(circle at center, rgba(239, 68, 68, 0.08) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={60} verticalSpacing={40}>
          {/* Left Side: Title & Context */}
          <Stack justify="center">
            <Title
              order={2}
              style={{
                fontSize: rem(42),
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              Are you <span style={{ color: "#ef4444" }}>struggling</span> with
              these daily issues?
            </Title>
            <Text c="dimmed" size="lg" mt="md">
              WhatsApp Web is great for chatting, but it wasn't built for
              business. Without the right tools, scaling your sales becomes a
              nightmare of manual work and missed opportunities.
            </Text>

            <Box mt={30} hiddenFrom="md">
              <Icon icon="noto:weary-face" width={120} />
            </Box>
          </Stack>

          {/* Right Side: The List */}
          <Box
            p="xl"
            style={{
              borderRadius: rem(24),
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Stack gap="md">
              {problems.map((item, index) => (
                <Stack
                  key={index}
                  align="flex-start"
                  style={{ flexDirection: "row", gap: rem(12) }}
                >
                  <ThemeIcon
                    color="red"
                    size={24}
                    radius="xl"
                    variant="light"
                    style={{ flexShrink: 0 }}
                  >
                    <Icon icon="tabler:x" width={14} />
                  </ThemeIcon>
                  <Text size="md" c="gray.3" lh={1.4}>
                    {item}
                  </Text>
                </Stack>
              ))}
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
