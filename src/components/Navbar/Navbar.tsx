"use client";
import {
  Box,
  Button,
  Burger,
  Container,
  Drawer,
  Group,
  Stack,
  Text,
  UnstyledButton,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Chrome, Download, Zap } from "lucide-react";
import { useState } from "react";

// MatrixPay Navbar (formerly NavbarGlass)
// Full width, premium glass effect, bottom border.

const Logo = () => (
  <Group gap={8} style={{ cursor: "pointer" }}>
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
        boxShadow: "0 0 15px rgba(16, 185, 129, 0.4)",
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

const links = [
  { link: "#", label: "Features" },
  { link: "#", label: "Pricing" },
  { link: "#", label: "Solutions" },
  { link: "#", label: "Resources" },
];

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <UnstyledButton
      key={link.label}
      onClick={() => setActive(link.link)}
      style={{
        fontSize: rem(14),
        fontWeight: 500,
        color:
          active === link.link
            ? "var(--brand-emerald-400)"
            : "var(--text-secondary)",
        transition: "all 0.2s ease",
        padding: "8px 12px",
        borderRadius: "8px",
      }}
      onMouseEnter={(e) => {
        if (active !== link.link)
          e.currentTarget.style.color = "var(--text-primary)";
      }}
      onMouseLeave={(e) => {
        if (active !== link.link)
          e.currentTarget.style.color = "var(--text-secondary)";
      }}
    >
      {link.label}
    </UnstyledButton>
  ));

  return (
    <Box
      component="header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "rgba(5, 5, 5, 0.7)", // Dark semi-transparent
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container size="xl" h={64}>
        <Group justify="space-between" h="100%">
          <Logo />
          <Group gap={8} visibleFrom="sm">
            {items}
          </Group>{" "}
          <Group visibleFrom="sm">
            <Button
              variant="filled"
              color="emerald"
              size="md"
              leftSection={<Chrome size={18} />}
              style={{
                boxShadow: "0 0 20px rgba(52, 211, 153, 0.6)", // Neon glow
              }}
            >
              Install for free
            </Button>
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            color="var(--text-primary)"
          />
        </Group>
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        size="xs"
        padding="md"
        title={<Logo />}
        hiddenFrom="sm"
        styles={{
          content: { backgroundColor: "#0a0a0a", color: "white" },
          header: { backgroundColor: "#0a0a0a", color: "white" },
        }}
      >
        <Stack gap="md">
          {items}
          <Button
            fullWidth
            variant="filled"
            color="emerald"
            leftSection={<Download size={18} />}
            style={{
              boxShadow: "0 0 20px rgba(52, 211, 153, 0.4)", // Slightly softer glow for mobile
            }}
          >
            Install for free
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
}
