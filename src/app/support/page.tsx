"use client";

import {
  Box,
  Container,
  Title,
  Text,
  Stack,
  rem,
  ThemeIcon,
  Paper,
  Group,
  Button,
} from "@mantine/core";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

// Logo Component (Reused for consistency)
const Logo = () => (
  <Link href="/" style={{ textDecoration: "none" }}>
    <Group gap={8} style={{ cursor: "pointer" }} wrap="nowrap">
      <Image
        src="/logo.png"
        alt="Supawazap Logo"
        width={32}
        height={32}
        style={{
          objectFit: "contain",
          filter: "drop-shadow(0 0 10px rgba(16, 185, 129, 0.4))",
        }}
      />
      <Text
        fw={"bold"}
        size={"xl"}
        c="white"
        style={{
          letterSpacing: "-0.02em",
        }}
      >
        Supa
        <Text span c="emerald.5" fw={"bold"} size="xl">
          wazap
        </Text>
      </Text>
    </Group>
  </Link>
);

export default function SupportPage() {
  return (
    <Box
      style={{
        minHeight: "100vh",
        background: "#030712",
      }}
    >
      {/* Header */}
      <Box
        py="lg"
        px="xl"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Container size="lg">
          <Group justify="space-between">
            <Logo />
            <Link
              href="/"
              style={{
                color: "var(--mantine-color-emerald-4)",
                fontSize: "var(--mantine-font-size-sm)",
                textDecoration: "none",
              }}
            >
              ← Back to Home
            </Link>
          </Group>
        </Container>
      </Box>

      {/* Content */}
      <Container size="lg" py={80}>
        <Stack gap="xl" align="center">
          {/* Hero Section */}
          <Stack gap="sm" align="center" ta="center" mb={40}>
            <Title
              order={1}
              style={{ fontSize: rem(48), lineHeight: 1.1 }}
              className="text-gradient"
            >
              How can we help you?
            </Title>
            <Text c="dimmed" size="xl" maw={600}>
              Need assistance or have questions? Our team is here to help you
              get the most out of Supawazap.
            </Text>
          </Stack>

          {/* Support Cards */}
          <Paper
            p="xl"
            radius="lg"
            w="100%"
            maw={600}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
              transition: "transform 0.2s ease",
            }}
          >
            <Stack align="start" gap="md">
              <ThemeIcon
                size={60}
                radius="md"
                variant="light"
                color="emerald"
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  color: "#34d399",
                }}
              >
                <Icon icon="tabler:mail" width={32} />
              </ThemeIcon>
              <Box>
                <Title order={3} c="white" mb="xs">
                  Email Support
                </Title>
                <Text c="gray.4" lh={1.6}>
                  Prefer email? Send us a message and we'll get back to you
                  within 24 hours.
                </Text>
              </Box>
              <Button
                component="a"
                href="mailto:supawazap@gmail.com"
                variant="light"
                color="emerald"
                fullWidth
                mt="auto"
                leftSection={<Icon icon="tabler:send" width={18} />}
              >
                Send an Email
              </Button>
            </Stack>
          </Paper>

          {/* FAQ Link */}
          <Paper
            p="xl"
            radius="lg"
            w="100%"
            maw={900}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <Group justify="space-between" align="center" wrap="wrap" gap="md">
              <Group gap="md">
                <ThemeIcon
                  size={48}
                  radius="md"
                  variant="light"
                  color="blue"
                  style={{
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    color: "#60a5fa",
                  }}
                >
                  <Icon icon="tabler:help" width={24} />
                </ThemeIcon>
                <Box>
                  <Text fw={700} c="white" size="lg">
                    Frequently Asked Questions
                  </Text>
                  <Text c="gray.4" size="sm">
                    Find answers to common questions about features and billing.
                  </Text>
                </Box>
              </Group>
              <Button
                component={Link}
                href="/#faq"
                variant="outline"
                color="gray"
                radius="md"
              >
                View FAQs
              </Button>
            </Group>
          </Paper>

          {/* Footer */}
          <Box
            ta="center"
            mt={60}
            pt="xl"
            w="100%"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <Text c="dimmed" size="sm">
              © {new Date().getFullYear()} Supawazap. All rights reserved.
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
