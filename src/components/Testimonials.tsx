"use client";
import { Icon } from "@iconify/react";
import {
  Avatar,
  Box,
  Container,
  Group,
  Paper,
  Rating,
  SimpleGrid,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";

const REVIEWS = [
  {
    name: "Sarah Jenkins",
    role: "Real Estate Agent",
    content:
      "I was terrified of getting banned, but the 'Smart Batching' feature is a lifesaver. I send property updates to 500+ clients weekly without issues.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "David Chen",
    role: "E-commerce Owner",
    content:
      "The Visual Workflow Builder is insane. I set up an auto-reply for 'Price' and 'Shipping' in 5 minutes. It feels like having a 24/7 VA.",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Marcus Reid",
    role: "Event Organizer",
    content:
      "Finally, a tool that stores data LOCALLY. I don't trust other extensions with my client list. Supawazap respects privacy.",
    avatar: "https://i.pravatar.cc/150?img=53",
  },
];

export function Testimonials() {
  return (
    <Box py={{ base: 60, md: 120 }} style={{ position: "relative" }}>
      {/* Background Decorative Elements */}
      <Box
        style={{
          position: "absolute",
          top: "20%",
          left: 0,
          right: 0,
          height: "60%",
          background:
            "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.05) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <Stack align="center" mb={{ base: 40, md: 80 }}>
          <Title
            order={2}
            ta="center"
            style={{ fontSize: rem(42) }}
            className="text-gradient"
          >
            Loved by 100+ Professionals
          </Title>
          <Text c="dimmed" ta="center" maw={600} size="lg">
            Join the community of marketers, agents, and business owners who
            trust Supawazap for their daily communications.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
          {REVIEWS.map((review, index) => (
            <Paper
              key={index}
              p="xl"
              radius="lg"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              className="testimonial-card"
            >
              <Stack h="100%" justify="space-between">
                <Box>
                  <Icon
                    icon="tabler:quote"
                    style={{
                      fontSize: 40,
                      color: "var(--mantine-color-emerald-6)",
                      opacity: 0.3,
                      marginBottom: 16,
                    }}
                  />
                  <Text size="lg" c="gray.1" lh={1.6} fw={500}>
                    "{review.content}"
                  </Text>
                </Box>

                <Group mt="xl" align="center">
                  <Avatar src={review.avatar} size="lg" radius="xl" />
                  <Box>
                    <Text fw={700} c="white">
                      {review.name}
                    </Text>
                    <Group gap={6}>
                      <Text size="xs" c="dimmed">
                        {review.role}
                      </Text>
                      <Text size="xs" c="emerald.5">
                        • Verified User
                      </Text>
                    </Group>
                  </Box>
                  <Box style={{ flex: 1 }} />
                  <Rating value={5} readOnly color="emerald" size="xs" />
                </Group>
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
      <style jsx global>{`
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px -10px rgba(16, 185, 129, 0.1);
          border-color: rgba(16, 185, 129, 0.2) !important;
        }
      `}</style>
    </Box>
  );
}
