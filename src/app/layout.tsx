import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";
import { theme } from "@/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Ambil URL dari Environment Variable (Fallback ke localhost jika belum diset)
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Supawazap: The All-in-One WhatsApp CRM & Marketing Toolkit",
    template: "%s | Supawazap",
  },
  description:
    "Stop paying for separate subscriptions. The All-in-One WhatsApp CRM & Marketing Toolkit to organize leads, automate follow-ups, and broadcast campaigns.",
  // --- KEYWORDS SEO IMPLEMENTATION ---
  keywords: [
    // Primary Keywords (English)
    "WhatsApp CRM",
    "WhatsApp Automation Tool",
    "WhatsApp Bulk Sender",
    "All-in-One WhatsApp Marketing Tool", // NEW
    "WhatsApp Marketing Toolkit", // NEW
    "WhatsApp CRM Extension", // NEW
    "Chrome Extension for WhatsApp",
    "WhatsApp Business Tool",
    // Feature Specific
    "WhatsApp Auto Reply Bot",
    "WhatsApp Schedule Message",
    "WhatsApp Group Scraper",
    "Export WhatsApp Contacts",
    "WhatsApp Privacy Blur",
    "Direct Chat WhatsApp",
    "Send bulk messages without saving number",
    "WhatsApp Web Plus Alternative",
    "Cooby Alternative",
    "Wali Alternative",
    "WAWCD Alternative",
    "No Monthly Fee WhatsApp Tool",
    "Lifetime Deal WhatsApp CRM",
  ],
  authors: [{ name: "Supawazap Team", url: BASE_URL }],
  creator: "Supawazap",
  publisher: "Supawazap",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Supawazap: Supercharge your WhatsApp™ Web",
    description:
      "The all-in-one CRM and Automation tool for professionals. Features include Bulk Sender, CRM, Auto-reply, and more. Privacy-focused and local-first.",
    url: BASE_URL,
    siteName: "Supawazap",
    images: [
      {
        url: "/og-image.png", // Pastikan file ini ada di public/og-image.png
        width: 1200,
        height: 630,
        alt: "Supawazap Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supawazap: #1 CRM & Automation for WhatsApp™",
    description:
      "Organize leads, automate follow-ups, and broadcast messages directly from WhatsApp Web.",
    images: ["/og-image.png"],
    creator: "@budiaaji", // Ganti dengan username twitter asli jika ada
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "GpIWAnvP9L5qM7cv-FIDrqAhdZtRJGa_iOmIYD9_ISI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
