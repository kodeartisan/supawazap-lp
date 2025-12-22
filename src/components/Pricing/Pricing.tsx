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
  Avatar,
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
                fontSize: rem(60),
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              Limited Time Offer – Save $70!
            </Title>
            <Text c="dimmed" size="xl" mt="md" fw={500}>
              Get lifetime access to all Supawazap Pro tools for just $29
            </Text>
          </Stack>

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
              ● Only 5 of 30 left
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
                    style={{ fontSize: rem(42) }}
                  >
                    $99
                  </Text>
                  <Text
                    fw={800}
                    style={{
                      fontSize: rem(100),
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
                  Limited to first 30 customers
                </Text>
              </Box>

              {/* Progress Bar */}
              <Stack gap={6}>
                <Group justify="space-between">
                  <Text size="xs" fw={700} c="white">
                    🔥 25 claimed
                  </Text>
                  <Text size="xs" fw={700} c="emerald.4">
                    5 remaining
                  </Text>
                </Group>
                <Progress
                  value={75}
                  size="xl"
                  radius="xl"
                  color="emerald"
                  striped
                  aria-label="Slots claimed"
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
                      size={28}
                      radius="xl"
                      variant="light"
                    >
                      <Icon icon="tabler:check" width={18} strokeWidth={4} />
                    </ThemeIcon>
                  }
                >
                  {FEATURES.map((feature, index) => (
                    <List.Item key={index}>
                      <Text size="lg" c="gray.3" fw={500}>
                        {feature}
                      </Text>
                    </List.Item>
                  ))}
                </List>
              </Box>

              {/* CTA Button */}
              <Stack gap="xs">
                <Button
                  component="a"
                  href={process.env.NEXT_PUBLIC_LEMON_SQUEEZY_URL || "#"}
                  target="_blank"
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
                    7-day money-back guarantee • Secure checkout via Lemon
                    Squeezy
                  </Text>
                </Group>
              </Stack>
            </Stack>
          </Card>

          <Paper
            p="xl"
            radius="xl"
            w="100%"
            style={{
              background:
                "linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Icon
              icon="tabler:quote"
              color="white"
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                opacity: 0.03,
                fontSize: 120,
                transform: "rotate(10deg)",
              }}
            />

            <Stack gap="lg" style={{ position: "relative", zIndex: 1 }}>
              <Text
                size="xl"
                c="white"
                fw={500}
                style={{ lineHeight: 1.4, fontStyle: "italic" }}
              >
                "Stopped paying $50/month for separate CRM and another whatsapp
                marketing tools. Supawazap replaced them with a single lifetime
                payment.{" "}
                <Text
                  span
                  c="emerald.4"
                  inherit
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "rgba(52, 211, 153, 0.3)",
                  }}
                >
                  Unbeatable value for my agency.
                </Text>
                "
              </Text>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
