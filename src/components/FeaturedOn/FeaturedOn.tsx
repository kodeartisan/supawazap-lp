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
  {
    src: "https://wired.business/badge1-dark.svg",
    alt: "Featured on Wired Business",
    href: "https://wired.business",
    width: 200,
    height: 54,
  },
  {
    src: "https://toolfame.com/badge-dark.svg",
    alt: "Featured on toolfame.com",
    href: "https://toolfame.com/item/supawazap",
    width: 150,
    height: 54,
  },
  {
    src: "/badges/indie-deals-badge.svg",
    alt: "Find us on Indie.Deals",
    href: "https://indie.deals?ref=https%3A%2F%2Fsupawazap.com",
    width: 180,
    height: 60,
  },
  {
    src: "https://dofollow.tools/badge/badge_dark.svg",
    alt: "Featured on Dofollow.Tools",
    href: "https://dofollow.tools",
    width: 200,
    height: 54,
  },
  {
    src: "https://auraplusplus.com/images/badges/featured-on-dark.svg",
    alt: "Featured on Aura++",
    href: "https://auraplusplus.com/projects/supawazap",
    width: 200,
    height: 54,
  },
  {
    src: "https://acidtools.com/assets/images/badge-dark.png",
    alt: "Acid Tools",
    href: "https://acidtools.com",
    width: 150,
    height: 54,
  },
  {
    src: "https://cdn.startupslab.site/site-images/badge-dark.png",
    alt: "Featured on Startups Lab",
    href: "https://startupslab.site",
    width: 200,
    height: 54,
  },
  {
    src: "/badges/agenthunter-badge.svg",
    alt: "Featured AI Agent on AgentHunter",
    href: "https://www.agenthunter.io?utm_source=badge&utm_medium=embed&utm_campaign=Supawazap",
    width: 200,
    height: 54,
  },
  {
    src: "https://dayslaunch.com/badages-awards.svg",
    alt: "Featured on Days Launch",
    href: "https://dayslaunch.com",
    width: 150,
    height: 54,
  },
  {
    src: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1053964&theme=light",
    alt: "Supawazap - Featured on Product Hunt",
    href: "https://www.producthunt.com/products/supawazap?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-supawazap",
    width: 250,
    height: 54,
  },
  {
    src: "https://assets.bestsky.tools/badges/featured-light.svg",
    alt: "Featured on BestskyTools",
    href: "https://bestsky.tools?utm_source=badge",
    width: 150,
    height: 54,
  },
  {
    src: "https://startupbenchmarks.com/assets/images/badge-dark.png",
    alt: "Startup Benchmarks",
    href: "https://startupbenchmarks.com",
    width: 150,
    height: 54,
  },
  {
    src: "https://www.proofstories.io/directory/badges/l/supawazap.svg",
    alt: "Featured on Proof Stories",
    href: "https://www.proofstories.io/directory/products/supawazap/",
    width: 150,
    height: 60,
  },
  {
    src: "https://toolfinddir.com/assets/images/badge-dark.png",
    alt: "Tool Find Dir",
    href: "https://toolfinddir.com",
    width: 150,
    height: 54,
  },
  {
    src: "https://toolsunderradar.com/assets/images/badge-dark.png",
    alt: "Tools Under Radar",
    href: "https://toolsunderradar.com",
    width: 150,
    height: 54,
  },
  {
    src: "https://thatappshow.com/assets/images/badge-dark.png",
    alt: "That App Show",
    href: "https://thatappshow.com",
    width: 150,
    height: 54,
  },
  {
    src: "https://solvertools.com/assets/images/badge-dark.png",
    alt: "Solver Tools",
    href: "https://solvertools.com",
    width: 150,
    height: 54,
  },
  {
    src: "https://saasfield.com/assets/images/badge-dark.png",
    alt: "SaaS Field",
    href: "https://saasfield.com",
    width: 150,
    height: 54,
  },
  {
    src: "https://mystarttools.com/assets/images/badge-dark.png",
    alt: "My Start Tools",
    href: "https://mystarttools.com",
    width: 150,
    height: 54,
  },
  {
    src: "https://mylaunchstash.com/assets/images/badge-dark.png",
    alt: "My Launch Stash",
    href: "https://mylaunchstash.com",
    width: 150,
    height: 54,
  },
  {
    src: "https://latestaiupdates.com/assets/images/badge-dark.png",
    alt: "Latest AI Updates",
    href: "https://latestaiupdates.com",
    width: 150,
    height: 54,
  },
  {
    src: "https://huntfortools.com/assets/images/badge-dark.png",
    alt: "Hunt for Tools",
    href: "https://huntfortools.com",
    width: 150,
    height: 54,
  },
  {
    src: "https://goodaitools.com/assets/images/badge-dark.png",
    alt: "Good AI Tools",
    href: "https://goodaitools.com",
    width: 150,
    height: 54,
  },
  {
    src: "https://besttoolvault.com/assets/images/badge-dark.png",
    alt: "Best Tool Vault",
    href: "https://besttoolvault.com",
    width: 150,
    height: 54,
  },
  {
    src: "https://submitdeck.com/bage.png",
    alt: "Featured on submitdeck.com",
    href: "https://submitdeck.com",
    width: 150,
    height: 54,
  },
  {
    src: "https://startuptrusted.com/api/badge?type=featured&style=dark",
    alt: "Supawazap on StartupTrusted",
    href: "https://startuptrusted.com?ref=supawazap.com",
    width: 240,
    height: 54,
  },
  {
    src: "https://www.justsimple.tools/badge.svg",
    alt: "Listed on JustSimple Tools",
    href: "https://www.justsimple.tools",
    width: 150,
    height: 54,
  },
  {
    src: "https://producthot.com/badages-awards.svg",
    alt: "Featured on Product Hot",
    href: "https://producthot.com",
    width: 150,
    height: 54,
  },
  {
    src: "https://toolcosmos.com/assets/images/badge-dark.png",
    alt: "Tool Cosmos",
    href: "https://toolcosmos.com",
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
