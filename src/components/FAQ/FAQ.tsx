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
    value: "privacy",
    question: "Do you store my contacts or chat history?",
    answer:
      "Never. Supawazap operates on a 'Local-First' architecture. All your CRM data, contacts, and message templates are stored locally in your browser's database (IndexedDB). We have zero access to your personal data or your customers' information.",
  },
  {
    value: "requirements",
    question: "Do I need the WhatsApp API or a specific OS?",
    answer:
      "No API required. Supawazap works directly on top of WhatsApp Web. It works on any operating system (Windows, Mac, Linux) as long as you have the Google Chrome, Edge, or Brave browser installed.",
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
              style={{ fontSize: rem(42), lineHeight: 1.1 }}
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
            <Text c="dimmed" size="lg" maw={450}>
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
                "&[data-active]": {
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(16, 185, 129, 0.3)",
                  boxShadow: "0 0 20px rgba(16, 185, 129, 0.05)",
                },
                marginBottom: rem(16),
              },
              control: {
                color: "white",
                padding: rem(20),
                "&:hover": {
                  backgroundColor: "transparent",
                },
              },
              label: {
                fontWeight: 600,
                fontSize: rem(16),
              },
              content: {
                padding: rem(20),
                paddingTop: 0,
              },
              chevron: {
                color: "#34d399",
              },
            }}
            chevron={<Icon icon="tabler:chevron-down" width={20} />}
          >
            {faqs.map((faq) => (
              <Accordion.Item key={faq.value} value={faq.value}>
                <Accordion.Control>{faq.question}</Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm" c="gray.4" lh={1.6}>
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
