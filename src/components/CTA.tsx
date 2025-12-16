"use client";

import {
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
  rem,
  ThemeIcon,
  Paper,
  Badge,
} from "@mantine/core";
import { Icon } from "@iconify/react";

export function CTA() {
  return (
    <Box py={{ base: 60, md: 120 }} px="md" style={{ position: "relative" }}>
      {/* Ambient Background Glow - Memberikan kedalaman di belakang kartu */}
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: "900px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 60%)",
          filter: "blur(60px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <Paper
          radius={32}
          p={{ base: 40, md: 80 }}
          style={{
            // Premium Dark Glass Background
            backgroundColor: "rgba(2, 6, 23, 0.7)", // Very dark slate (almost black)
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            // Gradient Border halus
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow:
              "0 0 0 1px rgba(16, 185, 129, 0.1), 0 20px 60px -20px rgba(0, 0, 0, 0.5)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* --- DECORATIVE: BACKGROUND GRID PATTERN --- */}
          <Box
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              opacity: 0.4,
              pointerEvents: "none",
            }}
          />

          {/* --- DECORATIVE: TOP GLOW BEAM --- */}
          <Box
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "60%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, #10b981, transparent)",
              boxShadow: "0 0 30px 2px rgba(16, 185, 129, 0.4)",
            }}
          />

          {/* --- CONTENT --- */}
          <Stack
            align="center"
            gap="xl"
            style={{ position: "relative", zIndex: 2 }}
          >
            {/* Headline */}
            <Title
              order={2}
              ta="center"
              style={{
                fontSize: rem(52), // Lebih besar
                fontWeight: 800,
                lineHeight: 1.1,
                color: "white",
                letterSpacing: "-0.02em",
              }}
            >
              10x Your Workflow. <br />
              <Text
                span
                inherit
                style={{
                  // Gradient Text Emerald Premium
                  background:
                    "linear-gradient(to right, #6ee7b7, #10b981, #34d399)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 20px rgba(16, 185, 129, 0.3))",
                }}
              >
                Zero Extra Effort.
              </Text>
            </Title>

            {/* Subtext */}
            <Text c="dimmed" ta="center" maw={600} size="xl" lh={1.6}>
              Ditch the manual copy-pasting. Automate your follow-ups, organize
              your leads, and reclaim 10+ hours of your week.
            </Text>

            {/* Action Buttons */}
            <Group mt="md" gap="md">
              <Button
                size="xl"
                radius="xl"
                h={60}
                className="btn-primary-action" // Menggunakan class global yang sudah ada
                leftSection={<Icon icon="logos:chrome" fontSize={24} />}
                style={{
                  fontSize: rem(18),
                  paddingLeft: rem(32),
                  paddingRight: rem(32),
                }}
              >
                Get Supawazap for Chrome
              </Button>
            </Group>

            {/* Trust Signals / Footer Text */}
            <Group gap="xl" mt="sm" c="dimmed" style={{ opacity: 0.7 }}>
              <Group gap={6}>
                <Icon icon="tabler:bolt" color="#10b981" width={18} />
                <Text size="sm">2-Minute Setup</Text>
              </Group>

              <Box w={1} h={16} bg="rgba(255,255,255,0.1)" />

              <Group gap={6}>
                <Icon icon="tabler:shield-lock" color="#10b981" width={18} />
                <Text size="sm">100% Secure</Text>
              </Group>

              <Box w={1} h={16} bg="rgba(255,255,255,0.1)" />

              <Group gap={6}>
                <Icon icon="tabler:circle-check" color="#10b981" width={18} />
                <Text size="sm">Cancel Anytime</Text>
              </Group>
            </Group>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
