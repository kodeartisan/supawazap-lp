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
    src: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=YOUR_POST_ID&theme=dark",
    alt: "Product Hunt",
    href: "https://www.producthunt.com/",
    width: 200,
    height: 45,
  },
  {
    src: "https://www.tinylaunch.com/tinylaunch_badge_1.svg",
    alt: "TinyLaunch",
    href: "https://www.tinylaunch.com/",
    width: 160,
    height: 40,
  },
  {
    src: "https://fazier.com/api/v1/public/badges/embed_image.svg?launch_id=YOUR_LAUNCH_ID&badge_type=daily&theme=dark",
    alt: "Fazier",
    href: "https://fazier.com/",
    width: 215,
    height: 50,
  },
  {
    src: "https://www.uneed.best/POTD2.png",
    alt: "Uneed",
    href: "https://www.uneed.best/",
    width: 180,
    height: 50,
  },
];

// Secondary badges - shown when "And More" is clicked
const SECONDARY_BADGES = [
  {
    src: "https://www.founderplug.com/badges/2TopProduct.png",
    alt: "FounderPlug",
    href: "https://www.founderplug.com/",
    width: 160,
    height: 50,
  },
  {
    src: "https://rankinpublic.xyz/api/badges/badge3.png?site=supawazap",
    alt: "RankInPublic",
    href: "https://rankinpublic.xyz/",
    width: 140,
    height: 40,
  },
  {
    src: "https://saasboilerplates.dev/badges/Neutral.png",
    alt: "Best SaaS Boilerplates",
    href: "https://saasboilerplates.dev/",
    width: 200,
    height: 50,
  },
];

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
          <Stack align="center" gap="xs" ta="center">
            <Title
              order={2}
              style={{ fontSize: rem(36) }}
              className="text-gradient"
            >
              Featured on leading startup platforms
            </Title>
            <Text c="dimmed" size="lg" maw={600}>
              Proudly featured across startup platforms where founders and
              makers launch their ideas.
            </Text>
          </Stack>

          {/* Primary Badges */}
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
