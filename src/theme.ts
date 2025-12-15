import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  colors: {
    // Custom emerald scale based on brand colors
    emerald: [
      "#ecfdf5", // 0
      "#d1fae5", // 1
      "#a7f3d0", // 2
      "#6ee7b7", // 3 (Brand 300)
      "#34d399", // 4 (Brand 400 - Accent)
      "#10b981", // 5 (Brand 500 - Primary)
      "#059669", // 6 (Brand 600)
      "#047857", // 7
      "#065f46", // 8
      "#064e3b", // 9
    ],
  },
  primaryColor: "emerald",
  primaryShade: 5,

  fontFamily: "var(--font-geist-sans), 'Inter', system-ui, sans-serif",
  fontFamilyMonospace: "'Space Mono', var(--font-geist-mono), monospace",
  headings: {
    fontFamily: "var(--font-geist-sans), 'Inter', system-ui, sans-serif",
    sizes: {
      h1: { fontSize: rem(60), lineHeight: "1", fontWeight: "400" }, // 3.75rem
      h2: { fontSize: rem(36), lineHeight: rem(40), fontWeight: "500" }, // 2.25rem
    },
  },

  defaultRadius: "md",

  components: {
    Button: {
      defaultProps: {
        radius: "xl", // Pill shape from design system
      },
    },
    Card: {
      defaultProps: {
        radius: "lg",
      },
    },
  },

  other: {
    aesthetic: "Cyber-Organic Fintech",
  },
});
