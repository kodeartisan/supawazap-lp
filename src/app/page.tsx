import { Features } from "@/components/Features/Features";
import { SecondaryFeatures } from "@/components/Features/SecondaryFeatures";
import { Navbar } from "@/components/Navbar/Navbar";
import { Typewriter } from "@/components/Typewriter";
import {
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";
import { CheckCircle, Chrome, PlayCircle, Star } from "lucide-react";

export default function Home() {
  return (
    <Box
      pb={100}
      style={{
        backgroundColor: "#030712", // Darker slate/gray
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Navbar />
      <Container size="xl" mt={80}>
        <Stack gap="xl" maw={900} mx="auto" align="center">
          <Title
            order={1}
            style={{
              fontSize: rem(58),
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            Turn WhatsApp Web into a <br />
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
                  "Sales Machine",
                  "Revenue-Generating CRM",
                  "24/7 Auto-Reply",
                  "Smart Broadcasting",
                  "Workflow Automation",
                ]}
                typingSpeed={75}
                deletingSpeed={50}
                pauseTime={1500}
              />
            </Text>
          </Title>

          <Text
            c="dimmed"
            size="xl"
            ta="center"
            maw={800}
            style={{ fontSize: rem(20), lineHeight: 1.6 }}
          >
            The only local-first extension that combines Smart Broadcasting,
            Visual Workflow Automation, and Deep CRM features. No monthly fees,
            no data leaks.
          </Text>

          <Group mt="md" gap="md" justify="center">
            <Button
              size="xl"
              radius="md"
              color="emerald"
              variant="filled"
              leftSection={<Chrome size={24} />}
              style={{
                boxShadow: "0 0 25px rgba(16, 185, 129, 0.5)",
                transition: "transform 0.2s ease",
              }}
            >
              Install for free
            </Button>
            <Button
              size="xl"
              radius="md"
              variant="default"
              color="gray"
              leftSection={<PlayCircle size={24} />}
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "white",
              }}
            >
              See 60-sec demo
            </Button>
          </Group>

          <Group gap="xl" mt="xl" align="center" justify="center">
            <Group gap={6}>
              <Star fill="#FACC15" color="#FACC15" size={20} />
              <Text fw={600} size="sm">
                4.9 average
              </Text>
            </Group>
            <Box
              w={4}
              h={4}
              style={{ borderRadius: "50%", background: "#4B5563" }}
            />
            <Text fw={600} size="sm">
              10,000+ active users
            </Text>
            <Box
              w={4}
              h={4}
              style={{ borderRadius: "50%", background: "#4B5563" }}
            />
            <Group gap={6}>
              <CheckCircle color="#10B981" size={20} />
              <Text fw={600} size="sm">
                Local-First Security
              </Text>
            </Group>
          </Group>
        </Stack>
      </Container>
      <Features />
      <SecondaryFeatures />
    </Box>
  );
}
