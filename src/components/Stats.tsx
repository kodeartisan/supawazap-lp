import { Container, SimpleGrid, Stack, Text, Title, rem } from "@mantine/core";

const stats = [
  { value: "98%", label: "Open Rate (vs 20% Email)" },
  { value: "45%", label: "Response Rate (vs 2% Email)" },
  { value: "90s", label: "Avg Response (vs 90 mins)" },
  { value: "5x", label: "Higher Conversion" },
];

export function Stats() {
  return (
    <Container size="lg" py={100}>
      <Stack align="center" gap="lg" mb={60}>
        <Title
          order={2}
          ta="center"
          className="text-gradient"
          style={{
            fontSize: rem(42),
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          Emails can't compete with these numbers
        </Title>
        <Text
          c="dimmed"
          ta="center"
          maw={700}
          style={{ fontSize: rem(20), lineHeight: 1.6 }}
        >
          Don't let your hard work end up in the spam folder. Compare the raw
          power of WhatsApp marketing against traditional email campaigns.
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 2, sm: 4 }} spacing={40} verticalSpacing={40}>
        {stats.map((stat) => (
          <Stack key={stat.label} align="center" gap={4}>
            <Text
              fw={800}
              style={{
                fontSize: rem(56),
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: "#10b981", // Emerald-500 matching the theme
              }}
            >
              {stat.value}
            </Text>
            <Text
              size="lg"
              c="dimmed"
              fw={600}
              mt="xs"
              style={{ fontSize: rem(18) }}
            >
              {stat.label}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Container>
  );
}
