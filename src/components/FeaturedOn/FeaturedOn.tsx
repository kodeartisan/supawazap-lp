"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Title,
  rem,
  Group,
  Flex,
  Collapse,
  UnstyledButton,
} from "@mantine/core";
import { Icon } from "@iconify/react";

// Primary badges - always visible
const PRIMARY_BADGES = [
  {
    src: "https://cdn.prod.website-files.com/63d8afd87da01fb58ea3fbcb/6487e2868c6c8f93b4828827_dang-badge.png",
    alt: "Dang.ai",
    href: "https://dang.ai/",
    width: 150,
    height: 54,
  },
  {
    src: "https://submitaitools.org/static_submitaitools/images/submitaitools.png",
    alt: "Submit AI Tools",
    href: "https://submitaitools.org",
    width: 200,
    height: 60,
  },
  {
    src: "https://twelve.tools/badge1-dark.svg",
    alt: "Featured on Twelve Tools",
    href: "https://twelve.tools",
    width: 200,
    height: 54,
  },
  {
    src: "https://frogdr.com/supawazap.com/badge-white.svg",
    alt: "Monitor your Domain Rating with FrogDR",
    href: "https://frogdr.com/supawazap.com?utm_source=supawazap.com",
    width: 250,
    height: 54,
  },
  {
    src: "https://img.turbo0.com/badge-listed-light.svg",
    alt: "Listed on Turbo0",
    href: "https://turbo0.com/item/supawazap",
    width: 150,
    height: 54,
  },
  {
    src: "https://findly.tools/badges/findly-tools-badge-dark.svg",
    alt: "Featured on findly.tools",
    href: "https://findly.tools/supawazap?utm_source=supawazap",
    width: 150,
    height: 54,
  },
];

// Secondary badges - shown when "And More" is clicked
//@ts-ignore
const SECONDARY_BADGES: any[] = [];

const BadgeItem = ({ badge }: { badge: (typeof PRIMARY_BADGES)[0] }) => (
  <Box
    component="a"
    href={badge.href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      transition: "all 0.2s ease",
      opacity: 0.85,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.opacity = "1";
      e.currentTarget.style.transform = "translateY(-3px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.opacity = "0.85";
      e.currentTarget.style.transform = "translateY(0)";
    }}
  >
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={badge.src}
      alt={badge.alt}
      width={badge.width}
      height={badge.height}
      style={{
        objectFit: "contain",
        borderRadius: rem(8),
      }}
    />
  </Box>
);

export function FeaturedOn() {
  const [showMore, setShowMore] = useState(false);

  return (
    <Box py={80}>
      <Container size="lg">
        <Stack align="center" gap="xl">
          {/* Title */}
          <Stack align="center" gap="lg" ta="center">
            <Title
              order={2}
              className="text-gradient"
              style={{
                fontSize: rem(60),
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              Featured on leading startup platforms
            </Title>
            <Text
              c="dimmed"
              ta="center"
              maw={700}
              style={{ fontSize: rem(22), lineHeight: 1.6 }}
            >
              Proudly featured across startup platforms where founders and
              makers launch their ideas.
            </Text>
          </Stack>

          {/* Primary Bdges */}
          <Flex wrap="wrap" gap="lg" justify="center" align="center" maw={900}>
            {PRIMARY_BADGES.map((badge, index) => (
              <BadgeItem key={index} badge={badge} />
            ))}
          </Flex>

          {/* Secondary Badges - Collapsible */}
          <Collapse in={showMore}>
            <Flex
              wrap="wrap"
              gap="lg"
              justify="center"
              align="center"
              maw={900}
              mt="md"
            >
              {SECONDARY_BADGES.map((badge, index) => (
                <BadgeItem key={index} badge={badge} />
              ))}
            </Flex>
          </Collapse>

          {/* And More / Show Less Button */}
          <UnstyledButton
            onClick={() => setShowMore(!showMore)}
            style={{
              cursor: "pointer",
              opacity: 0.7,
              transition: "opacity 0.2s",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
            onMouseEnter={(e: any) => {
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e: any) => {
              e.currentTarget.style.opacity = "0.7";
            }}
            aria-expanded={showMore}
            aria-controls="secondary-badges-collapse"
          >
            <Text c="dimmed" size="sm">
              {showMore ? "Show Less" : "And More"}
            </Text>
            <Icon
              icon={showMore ? "tabler:minus" : "tabler:plus"}
              width={14}
              color="#9ca3af"
            />
          </UnstyledButton>
        </Stack>
      </Container>
    </Box>
  );
}
