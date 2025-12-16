"use client";

import {
  Box,
  Container,
  Title,
  Text,
  Stack,
  rem,
  Anchor,
  List,
  ThemeIcon,
  Paper,
  Group,
} from "@mantine/core";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

// Logo Component
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

export default function PrivacyPolicyPage() {
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
      <Container size="md" py={80}>
        <Stack gap="xl">
          {/* Header */}
          <Stack gap="sm" align="center" ta="center" mb="xl">
            <Title
              order={1}
              style={{ fontSize: rem(48) }}
              className="text-gradient"
            >
              Privacy Policy
            </Title>
            <Text c="dimmed" size="lg">
              Last updated: December 16, 2024
            </Text>
          </Stack>

          {/* Introduction */}
          <Paper
            p="xl"
            radius="lg"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <Stack gap="md">
              <Group gap="sm">
                <ThemeIcon color="emerald" size="lg" radius="xl">
                  <Icon icon="tabler:shield-check" width={20} />
                </ThemeIcon>
                <Title order={3} c="white">
                  Your Privacy is Our Priority
                </Title>
              </Group>
              <Text c="gray.4" size="md" lh={1.7}>
                Supawazap is designed with a{" "}
                <strong>local-first architecture</strong>. This means your data
                stays on YOUR device. We don&apos;t have access to your
                contacts, messages, or any personal information.
              </Text>
            </Stack>
          </Paper>

          {/* Section 1 */}
          <Stack gap="md">
            <Title order={2} c="white" size="h3">
              1. Data We Collect
            </Title>
            <Text c="gray.4" lh={1.7}>
              Supawazap operates as a browser extension and stores all data
              locally in your browser&apos;s IndexedDB. We do NOT collect:
            </Text>
            <List
              spacing="sm"
              icon={
                <ThemeIcon color="emerald" size={20} radius="xl">
                  <Icon icon="tabler:x" width={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text c="gray.3">Your WhatsApp contacts or phone numbers</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">
                  Your chat messages or conversation history
                </Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">
                  Your media files (photos, videos, documents)
                </Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">Your CRM data, tags, or custom fields</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">Your workflow automations or templates</Text>
              </List.Item>
            </List>
          </Stack>

          {/* Section 2 */}
          <Stack gap="md">
            <Title order={2} c="white" size="h3">
              2. Data Storage
            </Title>
            <Text c="gray.4" lh={1.7}>
              All data created and managed by Supawazap is stored locally on
              your device using browser storage technologies (IndexedDB). This
              includes:
            </Text>
            <List
              spacing="sm"
              icon={
                <ThemeIcon color="emerald" size={20} radius="xl">
                  <Icon icon="tabler:database" width={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text c="gray.3">Contact information and custom fields</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">Tags, segments, and filters</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">Workflow automation configurations</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">Quick reply templates</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">Extension settings and preferences</Text>
              </List.Item>
            </List>
          </Stack>

          {/* Section 3 */}
          <Stack gap="md">
            <Title order={2} c="white" size="h3">
              3. License Verification
            </Title>
            <Text c="gray.4" lh={1.7}>
              To verify your license and enable Pro features, we may collect:
            </Text>
            <List
              spacing="sm"
              icon={
                <ThemeIcon color="blue" size={20} radius="xl">
                  <Icon icon="tabler:check" width={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text c="gray.3">Email address (for license activation)</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">License key (for authentication)</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">
                  Device identifier (for multi-device limits)
                </Text>
              </List.Item>
            </List>
            <Text c="gray.5" size="sm">
              This data is processed securely through our payment provider
              (Lemon Squeezy) and is never shared with third parties.
            </Text>
          </Stack>

          {/* Section 4 */}
          <Stack gap="md">
            <Title order={2} c="white" size="h3">
              4. Third-Party Services
            </Title>
            <Text c="gray.4" lh={1.7}>
              Supawazap integrates with the following third-party services:
            </Text>
            <List
              spacing="sm"
              icon={
                <ThemeIcon color="gray" size={20} radius="xl">
                  <Icon icon="tabler:external-link" width={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text c="gray.3">
                  <strong>Lemon Squeezy</strong> – Payment processing and
                  license management
                </Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">
                  <strong>WhatsApp Web</strong> – The extension operates on top
                  of web.whatsapp.com
                </Text>
              </List.Item>
            </List>
          </Stack>

          {/* Section 5 */}
          <Stack gap="md">
            <Title order={2} c="white" size="h3">
              5. Your Rights
            </Title>
            <Text c="gray.4" lh={1.7}>
              Since all data is stored locally on your device, you have full
              control:
            </Text>
            <List
              spacing="sm"
              icon={
                <ThemeIcon color="emerald" size={20} radius="xl">
                  <Icon icon="tabler:check" width={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text c="gray.3">
                  Export your data anytime (Excel, CSV, JSON)
                </Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">
                  Delete all data by clearing browser storage
                </Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">
                  Uninstall the extension to remove all traces
                </Text>
              </List.Item>
            </List>
          </Stack>

          {/* Section 6 */}
          <Stack gap="md">
            <Title order={2} c="white" size="h3">
              6. Contact Us
            </Title>
            <Text c="gray.4" lh={1.7}>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </Text>
            <Paper
              p="md"
              radius="md"
              style={{
                background: "rgba(16, 185, 129, 0.1)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
              }}
            >
              <Group gap="sm">
                <Icon icon="tabler:mail" color="#34d399" width={20} />
                <Anchor href="mailto:supawazap@gmail.com" c="emerald.3">
                  supawazap@gmail.com
                </Anchor>
              </Group>
            </Paper>
          </Stack>

          {/* Footer */}
          <Box
            ta="center"
            mt="xl"
            pt="xl"
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
