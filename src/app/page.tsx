import { BrowserMockup } from "@/components/BrowserMockup/BrowserMockup";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ/FAQ";
import { Features } from "@/components/Features/Features";
import { SecondaryFeatures } from "@/components/Features/SecondaryFeatures";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { PainVsGain } from "@/components/PainVsGain/PainVsGain";
import { Pricing } from "@/components/Pricing/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Typewriter } from "@/components/Typewriter";
import { Icon } from "@iconify/react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
  rem,
  AvatarGroup,
  ThemeIcon,
} from "@mantine/core";

export default function Home() {
  return (
    <Box
      pb={100}
      style={{
        backgroundColor: "#030712",
        // Grid pattern background
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        minHeight: "100vh",
        color: "white",
        position: "relative",
        overflow: "hidden", // Prevents spotlight overflow scrollbars
      }}
    >
      {/* 1. SPOTLIGHT EFFECT */}
      {/* A large radial gradient positioned behind the hero content */}
      <Box
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "140%",
          height: "1000px",
          background:
            "radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, rgba(3, 7, 18, 0) 60%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Navbar />

      <Container size="xl" mt={125} style={{ position: "relative", zIndex: 1 }}>
        <Stack gap="xl" align="center">
          {/* Hero Title */}
          <Title
            order={1}
            className="text-gradient"
            style={{
              fontSize: rem(60),
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            Turn WhatsApp Web into a <br />
            <Text
              span
              inherit
              style={{
                background: "linear-gradient(to right, #34d399, #10b981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <Typewriter
                words={[
                  "Sales Machine",
                  "Revenue Engine",
                  "24/7 Auto-Reply",
                  "Smart Broadcaster",
                  "Workflow Automator",
                ]}
                typingSpeed={75}
                deletingSpeed={50}
                pauseTime={1500}
              />
            </Text>
          </Title>

          {/* Subtitle */}
          <Text
            c="dimmed"
            size="xl"
            ta="center"
            maw={700}
            style={{ fontSize: rem(28), lineHeight: 1.6 }}
          >
            The only local-first extension that combines Smart Broadcasting,
            Visual Workflow Automation, and Deep CRM features.
          </Text>

          {/* CTA Group */}
          <Stack align="center" gap="xs">
            <Button
              size="xl"
              radius="xl"
              className="btn-primary-action"
              leftSection={<Icon icon="logos:chrome" fontSize={24} />}
              style={{
                height: rem(60),
                fontSize: rem(18),
              }}
            >
              Add to Chrome - It's Free
            </Button>
            {/* UPGRADE: Helper Text dengan Social Proof */}
            <Box
              mt="lg"
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
        </Stack>

        <BrowserMockup />
      </Container>

      <Features />
      <SecondaryFeatures />
      <PainVsGain />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </Box>
  );
}
