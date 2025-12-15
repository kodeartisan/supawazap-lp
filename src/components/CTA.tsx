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
} from "@mantine/core";
import { Icon } from "@iconify/react";
import { Zap } from "lucide-react";

export function CTA() {
  return (
    <Box py={80} px="md">
      <Container size="lg">
        <Box
          p={60}
          style={{
            borderRadius: 32,
            background: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 20px 60px -20px rgba(16, 185, 129, 0.5)",
            border: "1px solid rgba(52, 211, 153, 0.3)",
          }}
        >
          {/* Decorative Circles */}
          <Box
            style={{
              position: "absolute",
              top: -50,
              right: -50,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(52, 211, 153, 0.2) 0%, transparent 70%)",
            }}
          />

          <Stack
            align="center"
            gap="xl"
            style={{ position: "relative", zIndex: 2 }}
          >
            <Title
              order={2}
              ta="center"
              c="white"
              style={{ fontSize: rem(42) }}
            >
              Ready to Supercharge your WhatsApp?
            </Title>
            <Text c="emerald.1" ta="center" maw={600} size="lg">
              Join thousands of users automating their business today. No credit
              card required to start.
            </Text>

            <Group>
              <Button
                size="xl"
                radius="xl"
                className="btn-primary-action"
                leftSection={<Icon icon="logos:chrome" fontSize={24} />}
              >
                Add to Chrome
              </Button>
              <Button
                size="xl"
                variant="outline"
                color="white"
                leftSection={<Zap size={20} />}
                style={{ borderColor: "rgba(255,255,255,0.3)" }}
              >
                View Demo
              </Button>
            </Group>

            <Text size="xs" c="emerald.2" mt="sm">
              * Works on Free & Business WhatsApp accounts
            </Text>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
