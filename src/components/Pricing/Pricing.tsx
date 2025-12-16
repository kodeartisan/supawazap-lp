"use client";

import {
  Box,
  Button,
  Card,
  Container,
  Group,
  List,
  Paper,
  Progress,
  Stack,
  Text,
  ThemeIcon,
  Title,
  rem,
  Badge,
} from "@mantine/core";
import { Icon } from "@iconify/react";

const FEATURES = [
  "🔓 Unlock ALL Pro Features Instantly",
  "🚀 Unlimited Usage & Contacts (No Caps)",
  "🤝 Lifetime Updates & Support",
  "💳 No monthly fees, No subscription",
  "🔑 Pay once, access forever",
];

export function Pricing() {
  return (
    <Box
      py={{ base: 60, md: 100 }}
      id="pricing"
      style={{ position: "relative" }}
    >
      {/* Background Glow Effect (Emerald for Brand Consistency) */}
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: "800px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)", // Emerald Glow
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container size="md" style={{ position: "relative", zIndex: 1 }}>
        <Stack align="center" gap="xl">
          {/* Headlines */}
          <Stack gap="xs" align="center" ta="center">
            <Title
              order={2}
              className="text-gradient" // Menggunakan class global Anda
              style={{
                fontSize: rem(48),
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              Limited Time Offer – Save $70!
            </Title>
            <Text c="dimmed" size="lg">
              Get lifetime access to all Supawazap Pro tools for just $29
            </Text>
          </Stack>

          {/* Urgency Warning Box */}
          <Paper
            radius="md"
            p="xs"
            px="lg"
            style={{
              backgroundColor: "rgba(6, 78, 59, 0.4)", // Dark Emerald bg
              border: "1px solid rgba(16, 185, 129, 0.3)",
              backdropFilter: "blur(4px)",
            }}
          >
            <Group gap={8}>
              <Icon icon="tabler:flame" color="#34d399" />
              <Text size="sm" fw={500} c="emerald.1">
                Once these slots are gone, price goes back to $99
              </Text>
            </Group>
          </Paper>

          {/* --- MAIN PRICING CARD --- */}
          <Card
            radius={24}
            p={{ base: "xl", md: 50 }}
            w="100%"
            maw={550}
            style={{
              // Glassmorphism Premium Style sesuai theme
              backgroundColor: "rgba(10, 10, 10, 0.8)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(52, 211, 153, 0.3)", // Emerald Border Highlight
              boxShadow: "0 0 60px -20px rgba(16, 185, 129, 0.2)", // Emerald Ambient Glow
              position: "relative",
              overflow: "visible",
            }}
          >
            {/* Absolute Badge inside Card */}
            <Badge
              variant="filled"
              color="emerald"
              size="lg"
              radius="sm"
              style={{
                position: "absolute",
                top: 30,
                left: 30,
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                color: "#6ee7b7",
                border: "1px solid rgba(16, 185, 129, 0.2)",
              }}
            >
              ● Only 5 of 100 left
            </Badge>

            <Stack gap={30} mt="xl">
              {/* Price Display */}
              <Box ta="center" style={{ position: "relative" }}>
                {/* Floating Discount Tag */}
                <Badge
                  variant="gradient"
                  gradient={{ from: "emerald.6", to: "emerald.4", deg: 45 }}
                  size="lg"
                  radius="md"
                  style={{
                    position: "absolute",
                    top: -10,
                    right: 0,
                    transform: "rotate(12deg)",
                    boxShadow: "0 4px 15px rgba(16, 185, 129, 0.3)",
                    color: "#022c22", // Dark text for contrast on bright emerald
                    fontWeight: 800,
                  }}
                >
                  $70 OFF
                </Badge>

                <Group justify="center" align="center" gap="xs">
                  <Text
                    td="line-through"
                    c="dimmed"
                    fw={500}
                    style={{ fontSize: rem(32) }}
                  >
                    $99
                  </Text>
                  <Text
                    fw={800}
                    style={{
                      fontSize: rem(80),
                      lineHeight: 1,
                      // Gradient Text sesuai theme
                      background:
                        "linear-gradient(to bottom, #ffffff, #34d399)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter: "drop-shadow(0 0 20px rgba(16, 185, 129, 0.3))",
                    }}
                  >
                    $29
                  </Text>
                </Group>
                <Text
                  size="sm"
                  tt="uppercase"
                  c="dimmed"
                  fw={600}
                  mt="xs"
                  style={{ letterSpacing: "0.1em" }}
                >
                  One-time payment
                </Text>
                <Text size="xs" c="emerald.4" mt={4} fw={600}>
                  Limited to first 100 customers
                </Text>
              </Box>

              {/* Progress Bar */}
              <Stack gap={6}>
                <Group justify="space-between">
                  <Text size="xs" fw={700} c="white">
                    95 claimed
                  </Text>
                  <Text size="xs" fw={700} c="emerald.4">
                    5 remaining
                  </Text>
                </Group>
                <Progress
                  value={95}
                  size="xl"
                  radius="xl"
                  color="emerald"
                  striped
                  styles={{
                    root: { backgroundColor: "rgba(255,255,255,0.05)" },
                    section: {
                      background: "linear-gradient(90deg, #059669, #34d399)",
                      boxShadow: "0 0 10px rgba(52, 211, 153, 0.5)",
                    },
                  }}
                />
              </Stack>

              {/* Divider */}
              <Box h={1} w="100%" bg="rgba(255,255,255,0.1)" />

              {/* Features List */}
              <Box>
                <Text fw={600} mb="md" size="lg" c="white">
                  What You Get:
                </Text>
                <List
                  spacing="sm"
                  center
                  icon={
                    <ThemeIcon
                      color="emerald"
                      size={24}
                      radius="xl"
                      variant="light"
                    >
                      <Icon icon="tabler:check" width={14} strokeWidth={4} />
                    </ThemeIcon>
                  }
                >
                  {FEATURES.map((feature, index) => (
                    <List.Item key={index}>
                      <Text size="md" c="gray.3">
                        {feature}
                      </Text>
                    </List.Item>
                  ))}
                </List>
              </Box>

              {/* CTA Button */}
              <Stack gap="xs">
                <Button
                  size="xl"
                  radius="md"
                  fullWidth
                  h={64}
                  className="btn-primary-action" // Class dari globals.css
                  leftSection={<Icon icon="tabler:rocket" width={24} />}
                  style={{
                    fontSize: rem(18),
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  GET LIFETIME ACCESS
                </Button>
                <Group justify="center" gap={6} mt={4}>
                  <Icon icon="tabler:shield-check" color="#34d399" width={16} />
                  <Text size="xs" c="dimmed">
                    30-day money-back guarantee • Secure checkout via Lemon
                    Squeezy
                  </Text>
                </Group>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
