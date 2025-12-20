import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  Title,
  rem,
  Group,
  ThemeIcon,
} from "@mantine/core";
import { Icon } from "@iconify/react";

export function CTA() {
  return (
    <Box py={{ base: 80, md: 120 }} style={{ position: "relative" }}>
      {/* Background Decor */}
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <Box
          p={{ base: 40, md: 80 }}
          style={{
            borderRadius: rem(32),
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            textAlign: "center",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Inner Glow */}
          <Box
            style={{
              position: "absolute",
              top: 0,
              left: "0",
              right: "0",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.5), transparent)",
            }}
          />

          <Stack align="center" gap="xl">
            <Stack gap="xs">
              <Title
                order={2}
                className="text-gradient"
                style={{
                  fontSize: rem(60),
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Stop Wasting Time on Manual Chats.
              </Title>
              <Text c="dimmed" size="xl" maw={600} mx="auto">
                Automate your daily WhatsApp routine. From smart broadcasts to
                quick replies, let Supawazap handle the busywork so you can
                focus on growing your business.
              </Text>
            </Stack>

            <Button
              size="xl"
              radius="xl"
              className="btn-primary-action"
              leftSection={<Icon icon="logos:chrome" fontSize={24} />}
              style={{
                height: rem(72),
                fontSize: rem(22),
                paddingLeft: rem(48),
                paddingRight: rem(48),
              }}
            >
              Add to Chrome - It's Free
            </Button>

            {/* Social Proof Pill */}
            <Box
              mt="md"
              py={10}
              px={24}
              style={{
                borderRadius: 999,
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                display: "inline-block",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              <Group gap="xl" wrap="wrap" justify="center">
                {/* No Credit Card */}
                <Group gap={8}>
                  <ThemeIcon
                    size={22}
                    color="gray"
                    variant="light"
                    radius="xl"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <Text size="xs">💳</Text>
                  </ThemeIcon>
                  <Text size="sm" c="gray.2" fw={500}>
                    No credit card
                  </Text>
                </Group>

                {/* Divider */}
                <Box w={1} h={20} bg="rgba(255,255,255,0.1)" visibleFrom="xs" />

                {/* No Sign Up */}
                <Group gap={8}>
                  <ThemeIcon
                    size={22}
                    color="gray"
                    variant="light"
                    radius="xl"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <Text size="xs">👤</Text>
                  </ThemeIcon>
                  <Text size="sm" c="gray.2" fw={500}>
                    No sign up
                  </Text>
                </Group>

                {/* Divider */}
                <Box w={1} h={20} bg="rgba(255,255,255,0.1)" visibleFrom="xs" />

                {/* Trusted */}
                <Group gap={8}>
                  <ThemeIcon
                    size={22}
                    color="gray"
                    variant="light"
                    radius="xl"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <Text size="xs">⭐</Text>
                  </ThemeIcon>
                  <Text size="sm" c="gray.2" fw={500}>
                    Trusted by{" "}
                    <Text span fw={700} c="white">
                      Professionals
                    </Text>
                  </Text>
                </Group>
              </Group>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
