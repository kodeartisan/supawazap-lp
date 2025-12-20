"use client";

import {
  Box,
  Container,
  Title,
  Text,
  Accordion,
  ThemeIcon,
  rem,
  SimpleGrid,
} from "@mantine/core";
import { Icon } from "@iconify/react";

const faqs = [
  {
    value: "requirements",
    question: "Do I need the WhatsApp API or a specific OS?",
    answer:
      "No API required. Supawazap works directly on top of WhatsApp Web. It works on any operating system (Windows, Mac, Linux) as long as you have the Google Chrome, Edge, or Brave browser installed.",
  },
  {
    value: "browsers",
    question: "Which browsers are supported?",
    answer:
      "Supawazap works on all Chromium-based browsers: Google Chrome, Microsoft Edge, Brave, Opera, and Arc.",
  },
  {
    value: "privacy",
    question: "Is my data safe? Do you collect my contacts or messages?",
    answer:
      "100% safe. Supawazap uses a 'Local-First' architecture—all your data (contacts, messages, templates) is stored only on your device in IndexedDB. We never collect, store, or access your personal data or your customers' information.",
  },
  {
    value: "activation",
    question: "How do I activate my Pro license?",
    answer:
      "After purchasing, you'll receive a 16-character license key (xxxx-xxxx-xxxx-xxxx) via email. Open Supawazap, click the key icon (Activate) in the sidebar, enter your license key, then click the Activate button. Your Pro features will be unlocked instantly.",
  },
  {
    value: "support",
    question: "I can't find my answer here. How can I get help?",
    answer:
      "No worries! You can reach our support team anytime at supawazap@gmail.com",
  },
];

export function FAQ() {
  return (
    <Box py={{ base: 60, md: 120 }} id="faq">
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={60}>
          {/* Left Side: Title & Context */}
          <Box style={{ position: "sticky", top: 120 }}>
            <ThemeIcon
              size={60}
              radius="xl"
              variant="light"
              color="emerald"
              mb="xl"
              style={{
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
              }}
            >
              <Icon icon="tabler:help-hexagon" width={32} />
            </ThemeIcon>

            <Title
              order={2}
              style={{ fontSize: rem(60), lineHeight: 1.1 }}
              mb="md"
            >
              Frequently Asked <br />
              <Text
                span
                inherit
                style={{
                  background: "linear-gradient(to right, #34d399, #10b981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Questions
              </Text>
            </Title>
            <Text c="dimmed" size="xl" maw={450} style={{ lineHeight: 1.6 }}>
              Everything you need to know about safety, privacy, and how
              Supawazap helps you scale your business.
            </Text>

            {/* Decor Blob */}
            <Box
              visibleFrom="md"
              style={{
                position: "absolute",
                top: 200,
                left: -100,
                width: 300,
                height: 300,
                background:
                  "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)",
                zIndex: -1,
                pointerEvents: "none",
              }}
            />
          </Box>

          {/* Right Side: Accordion */}
          <Accordion
            variant="separated"
            radius="lg"
            styles={{
              item: {
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                transition: "all 0.3s ease",
                marginBottom: rem(16),
              },
              control: {
                color: "white",
                padding: rem(24),
              },
              label: {
                fontWeight: 700,
                fontSize: rem(20),
              },
              content: {
                padding: rem(24),
                paddingTop: 0,
              },
              chevron: {
                color: "#34d399",
                width: rem(24),
                height: rem(24),
              },
            }}
            chevron={<Icon icon="tabler:chevron-down" width={24} />}
          >
            {faqs.map((faq) => (
              <Accordion.Item key={faq.value} value={faq.value}>
                <Accordion.Control>{faq.question}</Accordion.Control>
                <Accordion.Panel>
                  <Text size="lg" c="gray.4" lh={1.6}>
                    {faq.answer}
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
