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
import { Zap } from "lucide-react";

// Logo Component (Daur ulang dari Navbar agar konsisten)
const Logo = () => (
  <Group gap={8}>
    <Box
      w={32}
      h={32}
      style={{
        background:
          "linear-gradient(135deg, var(--brand-emerald-500), var(--brand-emerald-700))",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 15px rgba(16, 185, 129, 0.2)",
      }}
    >
      <Zap color="white" size={20} fill="white" />
    </Box>
    <Text fw={700} size="lg" c="white" style={{ letterSpacing: "-0.02em" }}>
      Supa
      <Text span c="emerald.5">
        wazap
      </Text>
    </Text>
  </Group>
);

const SOCIAL_LINKS = [
  { icon: "tabler:brand-twitter", link: "#" },
  { icon: "tabler:brand-github", link: "#" },
  { icon: "tabler:brand-discord", link: "#" },
  { icon: "tabler:brand-youtube", link: "#" },
];

const FOOTER_DATA = [
  {
    title: "Product",
    links: [
      { label: "Features", link: "#features" },
      { label: "Pricing", link: "#pricing" },
      { label: "Changelog", link: "#" },
      { label: "Docs", link: "#" },
      { label: "Download", link: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", link: "#" },
      { label: "Blog", link: "#" },
      { label: "Careers", link: "#" },
      { label: "Contact", link: "#" },
      { label: "Partners", link: "#" },
    ],
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

          {/* KOLOM 4: STATUS & NEWSLETTER */}
          <Stack gap="xl">
            {/* System Status */}
            <Stack gap="xs">
              <Text c="white" fw={700} size="sm" tt="uppercase">
                System Status
              </Text>
              <Group
                gap="xs"
                p={8}
                style={{
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                  borderRadius: "8px",
                  backgroundColor: "rgba(16, 185, 129, 0.05)",
                  width: "fit-content",
                }}
              >
                {/* Pulsing Dot */}
                <Box
                  style={{
                    position: "relative",
                    width: 8,
                    height: 8,
                  }}
                >
                  <Box
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      backgroundColor: "#10b981",
                      animation: "pulse-glow 2s infinite",
                    }}
                  />
                  <Box
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      backgroundColor: "#10b981",
                    }}
                  />
                </Box>
                <Text c="emerald.4" size="xs" fw={600}>
                  All systems operational
                </Text>
              </Group>
            </Stack>

            {/* Newsletter */}
            <Stack gap="xs">
              <Text c="white" fw={700} size="sm" tt="uppercase">
                Subscribe
              </Text>
              <Text c="dimmed" size="xs">
                Get the latest updates and tips directly to your inbox.
              </Text>
              <Group gap={0} align="stretch">
                <TextInput
                  placeholder="Enter your email"
                  size="sm"
                  styles={{
                    input: {
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "white",
                      transition: "border-color 0.2s",
                      "&:focus": { borderColor: "#10b981" },
                    },
                  }}
                  style={{ flex: 1 }}
                />
                <Button
                  color="emerald"
                  size="sm"
                  variant="filled"
                  style={{
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    backgroundImage: "linear-gradient(0deg, #059669, #10b981)",
                  }}
                >
                  <Icon icon="tabler:send" width={16} />
                </Button>
              </Group>
            </Stack>
          </Stack>
        </SimpleGrid>

        <Divider my={40} color="rgba(255,255,255,0.05)" />

        {/* BOTTOM BAR */}
        <Group justify="space-between" c="dimmed" fz="xs">
          <Text size="xs">
            © {new Date().getFullYear()} Supawazap Inc. All rights reserved.
          </Text>
          <Group gap="lg">
            <Anchor
              href="#"
              c="dimmed"
              size="xs"
              underline="never"
              className="hover-white"
            >
              Privacy Policy
            </Anchor>
            <Anchor
              href="#"
              c="dimmed"
              size="xs"
              underline="never"
              className="hover-white"
            >
              Terms of Service
            </Anchor>
            <Anchor
              href="#"
              c="dimmed"
              size="xs"
              underline="never"
              className="hover-white"
            >
              Cookie Policy
            </Anchor>
          </Group>
        </Group>
      </Container>

      {/* Global Style Injection untuk hover effect sederhana */}
      <style jsx global>{`
        .hover-white:hover {
          color: white !important;
          text-decoration: underline;
        }
      `}</style>
    </Box>
  );
}
