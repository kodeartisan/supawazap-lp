"use client";

import { Icon } from "@iconify/react";
import {
  Avatar,
  Box,
  Container,
  Group,
  Paper,
  Rating,
  Stack,
  Text,
  Title,
  rem,
  ThemeIcon,
} from "@mantine/core";

// Data diperbanyak agar marquee terlihat penuh
const REVIEWS = [
  {
    name: "David Reus",
    role: "E-commerce Owner",
    content:
      "The Visual Workflow Builder is insane. I set up an auto-reply for 'Price' and 'Shipping' in 5 minutes. It feels like having a 24/7 VA.",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Marcus Reid",
    role: "Event Organizer",
    content:
      "Finally, a tool that stores data LOCALLY. I don't trust other extensions with my client list. Supawazap respects privacy.",
    avatar: "https://i.pravatar.cc/150?img=53",
  },
  {
    name: "Elena Rodriguez",
    role: "Digital Marketer",
    content:
      "The Spintax engine is brilliant. My open rates increased by 40% because messages don't look like generic spam anymore.",
    avatar: "https://i.pravatar.cc/150?img=24",
  },
  {
    name: "James Wilson",
    role: "SaaS Founder",
    content:
      "Direct Chat and Link Generator save me hours every week. The best productivity tool for WhatsApp Web hands down.",
    avatar: "https://i.pravatar.cc/150?img=60",
  },
  {
    name: "Liam Chen",
    role: "Startup Founder",
    content:
      "Supawazap has completely transformed our outreach process. It's a game changer for connecting with potential partners.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sophia Patel",
    role: "Senior Recruiter",
    content:
      "I was worried about safety, but the batching feature is rock solid. My candidate response rates have doubled.",
    avatar: "https://i.pravatar.cc/150?img=44",
  },
  {
    name: "Noah Kim",
    role: "Sales Lead",
    content:
      "The CRM features are surprisingly robust. Being able to tag and segment leads directly in WhatsApp is invaluable.",
    avatar: "https://i.pravatar.cc/150?img=68",
  },
  {
    name: "Olivia Davis",
    role: "Event Planner",
    content:
      "Broadcasting event updates used to take all day. Now I can reach hundreds of attendees in minutes with personalized messages.",
    avatar: "https://i.pravatar.cc/150?img=36",
  },
  {
    name: "Ethan Wright",
    role: "Education Consultant",
    content:
      "My students appreciate the quick responses. The automation tools save me at least 10 hours a week.",
    avatar: "https://i.pravatar.cc/150?img=59",
  },
  {
    name: "Ava Wilson",
    role: "Agency Director",
    content:
      "Managing multiple client profiles was a nightmare before. Supawazap makes it effortless to switch and stay organized.",
    avatar: "https://i.pravatar.cc/150?img=25",
  },
  {
    name: "Mason Thompson",
    role: "Freelance Developer",
    content:
      "Incredible ROI. It's affordable, powerful, and simpler to use than the complex enterprise tools I've tried.",
    avatar: "https://i.pravatar.cc/150?img=53",
  },
  {
    name: "Isabella Martinez",
    role: "Customer Success",
    content:
      "The Quick Replies and Spintax features are lifesavers. I can clear my support queue in half the time.",
    avatar: "https://i.pravatar.cc/150?img=16",
  },
  {
    name: "Lucas Brown",
    role: "Gym Owner",
    content:
      "Automated class reminders have reduced our no-show rate by nearly 50%. Essential tool for any local business.",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Mia Garcia",
    role: "Real Estate Broker",
    content:
      "Being able to send personalized property listings to hot leads instantly has directly increased my closings.",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
];

// Komponen Kartu Testimonial
const TestimonialCard = ({ review }: { review: (typeof REVIEWS)[0] }) => (
  <Paper
    p="xl"
    radius="lg"
    w={350} // Lebar fix agar marquee rapi
    style={{
      background: "rgba(255, 255, 255, 0.03)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      transition:
        "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s",
      height: "100%",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.3)";
      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
    }}
  >
    <Stack justify="space-between" h="100%" gap="lg">
      <Stack gap="md">
        <Group justify="space-between" align="start">
          <ThemeIcon
            variant="light"
            color="emerald"
            size="lg"
            radius="xl"
            style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
          >
            <Icon icon="tabler:quote" width={20} />
          </ThemeIcon>
          <Rating value={5} readOnly color="emerald" size="xs" />
        </Group>
        <Text size="md" c="gray.3" lh={1.6} style={{ fontStyle: "italic" }}>
          "{review.content}"
        </Text>
      </Stack>

      <Group gap="md">
        <Avatar src={review.avatar} size="md" radius="xl" />
        <Box>
          <Text fw={600} c="white" size="sm">
            {review.name}
          </Text>
          <Text size="xs" c="dimmed">
            {review.role}
          </Text>
        </Box>
      </Group>
    </Stack>
  </Paper>
);

export function Testimonials() {
  return (
    <Box
      py={{ base: 60, md: 120 }}
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#030712", // Background gelap konsisten
      }}
    >
      {/* Background Glow Effect */}
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          height: "100%",
          background:
            "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.05) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container size="lg" style={{ position: "relative", zIndex: 1 }} mb={60}>
        <Stack align="center" gap="xs">
          <Title
            order={2}
            ta="center"
            style={{ fontSize: rem(42) }}
            className="text-gradient"
          >
            Loved by Professionals
          </Title>
          <Text c="dimmed" ta="center" maw={600} size="lg">
            Join the community of marketers, agents, and business owners who
            trust Supawazap.
          </Text>
        </Stack>
      </Container>

      {/* --- MARQUEE ROWS --- */}
      <Stack gap={30}>
        {/* Row 1: Bergerak ke Kiri */}
        <div className="marquee-container">
          <div className="marquee-content animate-scroll-left">
            {/* Render 2x untuk looping seamless */}
            {[...REVIEWS, ...REVIEWS].map((review, index) => (
              <TestimonialCard key={`row1-${index}`} review={review} />
            ))}
          </div>
        </div>

        {/* Row 2: Bergerak ke Kanan (Opsional: reverse data agar variatif) */}
        <div className="marquee-container">
          <div className="marquee-content animate-scroll-right">
            {[...REVIEWS, ...REVIEWS].reverse().map((review, index) => (
              <TestimonialCard key={`row2-${index}`} review={review} />
            ))}
          </div>
        </div>
      </Stack>
    </Box>
  );
}
