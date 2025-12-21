import { BrowserMockup } from "@/components/BrowserMockup/BrowserMockup";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ/FAQ";
import { FeaturedOn } from "@/components/FeaturedOn/FeaturedOn";
import { Features } from "@/components/Features/Features";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { PainVsGain } from "@/components/PainVsGain/PainVsGain";
import { Pricing } from "@/components/Pricing/Pricing";
import { Problems } from "@/components/Problems";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Typewriter } from "@/components/Typewriter";
import { Icon } from "@iconify/react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
  rem,
  AvatarGroup,
  ThemeIcon,
} from "@mantine/core";

// Ambil URL dari Environment Variable (Fallback ke localhost jika belum diset)
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function Home() {
  // Definisi Schema JSON-LD untuk SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Supawazap",
    url: BASE_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Chrome, Edge, Brave, Opera",
    offers: {
      "@type": "Offer",
      price: "29.00",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "120",
    },
    description:
      "The #1 WhatsApp CRM and Automation extension. Features include bulk sender, auto-reply, and contact management.",
  };

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
      {/* --- SEO: JSON-LD Schema Script --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

      <Container size="xl" mt={150} style={{ position: "relative", zIndex: 1 }}>
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
            WhatsApp with Superpowers <br />
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
                  "Workflow Automation",
                  "CRM",
                  "24/7 Auto-Reply",
                  "Smart Broadcasting",
                  "Quick Reply",
                  "Direct Chat",
                  "Custom Field",
                  "Smart Segment",
                  "Export Contact",
                  "Privacy Blur",
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
            style={{ fontSize: rem(26), lineHeight: 1.6 }}
          >
            One extension to replace your CRM, Auto-reply Bot, and Bulk Sender.
            Organize leads, automate follow-ups, and broadcast messages without
            switching tabs.
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
        <Stats />
      </Container>
      <Features />
      {/* <PainVsGain /> */}
      {/* <Testimonials /> */}
      <Pricing />
      {/* <FeaturedOn /> */}
      <FAQ />
      <CTA />
      <Footer />
    </Box>
  );
}
