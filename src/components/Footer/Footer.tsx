"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Group,
  ActionIcon,
  TextInput,
  Button,
  rem,
  Anchor,
  Divider,
} from "@mantine/core";
import { Icon } from "@iconify/react";
import Image from "next/image";

// Logo Component (Daur ulang dari Navbar agar konsisten)
const Logo = () => (
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
        transition: "all 0.3s ease",
      }}
    >
      Supa
      <Text span c="emerald.5" fw={"bold"} size="xl">
        wazap
      </Text>
    </Text>
  </Group>
);

const SOCIAL_LINKS = [
  { icon: "tabler:brand-twitter", link: "#" },
  { icon: "tabler:brand-youtube", link: "#" },
];

const FOOTER_DATA = [
  {
    title: "Links",
    links: [
      { label: "Features", link: "#features" },
      { label: "Pricing", link: "#pricing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", link: "/privacy" },
      { label: "Terms of Service", link: "/terms" },
    ],
  },
  {
    title: "More",
    links: [],
  },
];

export function Footer() {
  return (
    <Box
      component="footer"
      style={{
        backgroundColor: "#02040a", // Warna sedikit lebih gelap dari body
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        position: "relative",
        overflow: "hidden",
        paddingTop: rem(80),
        paddingBottom: rem(40),
        marginTop: rem(100),
      }}
    >
      {/* --- 1. GIANT WATERMARK --- */}
      {/* Teks besar di background untuk estetika premium */}
      <Text
        style={{
          position: "absolute",
          bottom: -40,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "clamp(6rem, 15vw, 15rem)", // Responsive font size
          fontWeight: 900,
          color: "white",
          opacity: 0.02, // Sangat tipis
          lineHeight: 1,
          whiteSpace: "nowrap",
          pointerEvents: "none",
          zIndex: 0,
          letterSpacing: "-0.05em",
          userSelect: "none",
        }}
      >
        SUPAWAZAP
      </Text>

      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={50}>
          {/* KOLOM 1: BRAND IDENTITY */}
          <Stack gap="lg">
            <Logo />
            <Text c="dimmed" size="sm" lh={1.6} maw={300}>
              The ultimate local-first WhatsApp CRM and automation tool.
              Supercharge your workflow without compromising privacy.
            </Text>

            {/* Social Icons */}
            <Group gap="xs">
              {SOCIAL_LINKS.map((item, index) => (
                <ActionIcon
                  key={index}
                  variant="subtle"
                  color="gray"
                  size="lg"
                  radius="md"
                  component="a"
                  href={item.link}
                  style={{
                    border: "1px solid rgba(255,255,255,0.05)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                    e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.05)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.05)";
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "var(--mantine-color-gray-6)";
                  }}
                >
                  <Icon icon={item.icon} width={20} />
                </ActionIcon>
              ))}
            </Group>
          </Stack>

          {/* KOLOM 2 & 3: LINKS */}
          {FOOTER_DATA.map((group) => (
            <Stack key={group.title} gap="md">
              <Text c="white" fw={700} size="sm" tt="uppercase">
                {group.title}
              </Text>
              <Stack gap="sm">
                {group.links.map((link) => (
                  <Anchor
                    key={link.label}
                    href={link.link}
                    c="dimmed"
                    size="sm"
                    underline="never"
                    style={{
                      transition: "color 0.2s, transform 0.2s",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#34d399"; // Emerald-400
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color =
                        "var(--mantine-color-dimmed)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {link.label}
                  </Anchor>
                ))}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
