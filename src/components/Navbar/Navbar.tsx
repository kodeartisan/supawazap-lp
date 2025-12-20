"use client";

import {
  Box,
  Button,
  Burger,
  Drawer,
  Group,
  Stack,
  Text,
  UnstyledButton,
  rem,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Chrome, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// --- Components ---

const Logo = ({ compact }: { compact?: boolean }) => (
  <Group gap={8} style={{ cursor: "pointer" }} wrap="nowrap">
    <Image
      src="/logo.png"
      alt="Supawazap Logo"
      width={compact ? 28 : 32}
      height={compact ? 28 : 32}
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
        fontSize: rem(28),
        letterSpacing: "-0.02em",
        transition: "all 0.3s ease",
      }}
    >
      Supa
      <Text span c="emerald.5" fw={"bold"} inherit>
        wazap
      </Text>
    </Text>
  </Group>
);

const links = [
  { link: "#features", label: "Features" },
  { link: "#pricing", label: "Pricing" },
];

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scroll for anchor links
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 100; // Offset for fixed navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setActive(href);
  };

  const items = links.map((link) => {
    const isExternal = link.link.startsWith("/");
    const isAnchor = link.link.startsWith("#");

    if (isExternal) {
      return (
        <Link
          key={link.label}
          href={link.link}
          style={{
            fontSize: rem(18),
            fontWeight: 600,
            color: "var(--text-secondary)",
            transition: "all 0.2s ease",
            padding: "8px 20px",
            borderRadius: "99px",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--text-primary)";
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-secondary)";
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          {link.label}
        </Link>
      );
    }

    return (
      <UnstyledButton
        key={link.label}
        onClick={(e) => isAnchor && handleSmoothScroll(e, link.link)}
        style={{
          fontSize: rem(18),
          fontWeight: 600,
          color:
            active === link.link
              ? "var(--brand-emerald-400)"
              : "var(--text-secondary)",
          transition: "all 0.2s ease",
          padding: "8px 20px",
          borderRadius: "99px",
        }}
        onMouseEnter={(e) => {
          if (active !== link.link) {
            e.currentTarget.style.color = "var(--text-primary)";
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
          }
        }}
        onMouseLeave={(e) => {
          if (active !== link.link) {
            e.currentTarget.style.color = "var(--text-secondary)";
            e.currentTarget.style.backgroundColor = "transparent";
          }
        }}
      >
        {link.label}
      </UnstyledButton>
    );
  });

  return (
    <>
      {/* Floating Navbar Container */}
      <Box
        component="header"
        style={{
          position: "fixed",
          top: scrolled ? 20 : 16, // Moves up slightly when scrolled
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          width: "100%",
          maxWidth: scrolled ? "800px" : "1152px", // Shrinks width on scroll
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)", // Smooth premium easing
          padding: "0 16px", // Safe area for mobile
        }}
      >
        <Box
          py={scrolled ? 8 : 12}
          px={scrolled ? 16 : 24}
          style={{
            backgroundColor: scrolled
              ? "rgba(10, 10, 10, 0.85)" // Darker background when scrolled
              : "rgba(15, 23, 42, 0.4)", // Lighter initially
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            borderRadius: "9999px", // Full pill shape
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: scrolled
              ? "0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.05)"
              : "0 4px 30px rgba(0, 0, 0, 0.1)",
            transition: "all 0.4s ease",
          }}
        >
          <Group justify="space-between" align="center" wrap="nowrap">
            {/* Left: Logo */}
            <Logo compact={scrolled} />

            {/* Center: Navigation Links (Desktop) */}
            <Group gap={4} visibleFrom="sm">
              {items}
            </Group>

            {/* Right: Actions */}
            <Group gap={12} wrap="nowrap">
              {/* Premium Button */}
              <Button
                variant="filled"
                color="emerald"
                size={scrolled ? "sm" : "md"}
                radius="xl"
                leftSection={<Chrome size={scrolled ? 18 : 20} />}
                visibleFrom="xs"
                className="btn-primary-action" // Menggunakan class premium yang kita bahas sebelumnya
                style={{
                  height: scrolled ? 40 : 48,
                  transition: "all 0.3s ease",
                  fontSize: scrolled ? 14 : 16,
                  fontWeight: 600,
                }}
              >
                Install Free
              </Button>

              {/* Mobile Menu Toggle */}
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
                color="white"
                aria-label="Toggle navigation"
              />
            </Group>
          </Group>
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title={<Logo />}
        hiddenFrom="sm"
        transitionProps={{
          duration: 200,
          transition: "slide-down",
        }}
        styles={{
          content: {
            backgroundColor: "#030712", // Matches global background
            color: "white",
          },
          header: {
            backgroundColor: "transparent",
            color: "white",
          },
          close: {
            color: "white",
          },
        }}
        // Add noise texture to drawer background as well for consistency
        style={{ zIndex: 200 }}
      >
        <Stack gap="xl" mt="xl" align="center">
          {links.map((link) => {
            const isExternal = link.link.startsWith("/");

            if (isExternal) {
              return (
                <Link
                  key={link.label}
                  href={link.link}
                  onClick={close}
                  style={{
                    fontSize: rem(24),
                    fontWeight: 600,
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              );
            }

            const isAnchor = link.link.startsWith("#");

            return (
              <UnstyledButton
                key={link.label}
                onClick={(e) => {
                  if (isAnchor) {
                    handleSmoothScroll(e, link.link);
                  }
                  close();
                }}
                style={{
                  fontSize: rem(24),
                  fontWeight: 600,
                  color:
                    active === link.link ? "var(--brand-emerald-400)" : "white",
                }}
              >
                {link.label}
              </UnstyledButton>
            );
          })}
          <Button
            fullWidth
            size="xl"
            variant="filled"
            color="emerald"
            radius="xl"
            leftSection={<Download size={20} />}
            mt="xl"
            className="btn-primary-action"
          >
            Install Extension
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
