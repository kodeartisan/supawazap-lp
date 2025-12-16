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

export default function TermsOfServicePage() {
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
              Terms of Service
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
                  <Icon icon="tabler:file-text" width={20} />
                </ThemeIcon>
                <Title order={3} c="white">
                  Agreement to Terms
                </Title>
              </Group>
              <Text c="gray.4" size="md" lh={1.7}>
                By installing and using Supawazap (&quot;the Extension&quot;),
                you agree to be bound by these Terms of Service. If you do not
                agree to these terms, please do not use the Extension.
              </Text>
            </Stack>
          </Paper>

          {/* Section 1 */}
          <Stack gap="md">
            <Title order={2} c="white" size="h3">
              1. Description of Service
            </Title>
            <Text c="gray.4" lh={1.7}>
              Supawazap is a browser extension that enhances your WhatsApp Web
              experience with productivity features including:
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
                <Text c="gray.3">Broadcast messaging and automation</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">Contact management (CRM)</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">Workflow automation</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">Quick replies and templates</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">Data export and backup tools</Text>
              </List.Item>
            </List>
          </Stack>

          {/* Section 2 */}
          <Stack gap="md">
            <Title order={2} c="white" size="h3">
              2. Acceptable Use
            </Title>
            <Text c="gray.4" lh={1.7}>
              You agree to use Supawazap responsibly and in compliance with all
              applicable laws. You must NOT use the Extension to:
            </Text>
            <List
              spacing="sm"
              icon={
                <ThemeIcon color="red" size={20} radius="xl">
                  <Icon icon="tabler:x" width={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text c="gray.3">Send spam or unsolicited messages</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">Harass, abuse, or harm others</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">Violate WhatsApp&apos;s Terms of Service</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">Engage in illegal activities</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">Distribute malware or malicious content</Text>
              </List.Item>
            </List>
          </Stack>

          {/* Section 3 */}
          <Stack gap="md">
            <Title order={2} c="white" size="h3">
              3. License and Subscription
            </Title>
            <Text c="gray.4" lh={1.7}>
              Supawazap offers both Free and Pro plans:
            </Text>
            <List
              spacing="sm"
              icon={
                <ThemeIcon color="blue" size={20} radius="xl">
                  <Icon icon="tabler:info-circle" width={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text c="gray.3">
                  <strong>Free Plan:</strong> Limited features with usage
                  restrictions
                </Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">
                  <strong>Pro Plan:</strong> Full access to all features with a
                  valid license key
                </Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">
                  License keys are non-transferable and tied to your account
                </Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">
                  Refunds are subject to our refund policy (within 7 days of
                  purchase)
                </Text>
              </List.Item>
            </List>
          </Stack>

          {/* Section 4 */}
          <Stack gap="md">
            <Title order={2} c="white" size="h3">
              4. Disclaimer of Warranties
            </Title>
            <Text c="gray.4" lh={1.7}>
              Supawazap is provided &quot;as is&quot; without warranties of any
              kind. We do not guarantee:
            </Text>
            <List
              spacing="sm"
              icon={
                <ThemeIcon color="orange" size={20} radius="xl">
                  <Icon icon="tabler:alert-triangle" width={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text c="gray.3">Uninterrupted or error-free operation</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">
                  Compatibility with future WhatsApp updates
                </Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">
                  That the Extension will meet your specific requirements
                </Text>
              </List.Item>
            </List>
          </Stack>

          {/* Section 5 */}
          <Stack gap="md">
            <Title order={2} c="white" size="h3">
              5. Limitation of Liability
            </Title>
            <Text c="gray.4" lh={1.7}>
              To the maximum extent permitted by law, Supawazap and its
              developers shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including but not
              limited to:
            </Text>
            <List
              spacing="sm"
              icon={
                <ThemeIcon color="gray" size={20} radius="xl">
                  <Icon icon="tabler:minus" width={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text c="gray.3">Loss of profits or revenue</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">Loss of data or business interruption</Text>
              </List.Item>
              <List.Item>
                <Text c="gray.3">WhatsApp account restrictions or bans</Text>
              </List.Item>
            </List>
          </Stack>

          {/* Section 6 */}
          <Stack gap="md">
            <Title order={2} c="white" size="h3">
              6. Changes to Terms
            </Title>
            <Text c="gray.4" lh={1.7}>
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective immediately upon posting. Your continued
              use of the Extension after any changes constitutes acceptance of
              the new terms.
            </Text>
          </Stack>

          {/* Section 7 */}
          <Stack gap="md">
            <Title order={2} c="white" size="h3">
              7. Contact Us
            </Title>
            <Text c="gray.4" lh={1.7}>
              If you have any questions about these Terms of Service, please
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
