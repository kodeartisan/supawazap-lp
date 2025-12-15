"use client";

import { Box, Paper, PaperProps } from "@mantine/core";
import { useState } from "react";

interface PremiumCardProps extends PaperProps {
  children: React.ReactNode;
}

export function PremiumCard({ children, ...props }: PremiumCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        height: "100%",
        borderRadius: "1rem", // 16px (matches radius="lg")
        // Background container (agar border terlihat)
        padding: "1px", // Ketebalan border
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 10px 40px -10px rgba(16, 185, 129, 0.3)" // Emerald Glow
          : "0 0 0 0 transparent",
        cursor: "default",
        isolation: "isolate", // Membuat stacking context baru
      }}
    >
      {/* 1. ANIMATED ROTATING BORDER LAYER */}
      <div
        style={{
          position: "absolute",
          inset: "-50%", // Membuat layer jauh lebih besar dari kartu
          background:
            "conic-gradient(from 0deg, transparent 0 340deg, #10b981 360deg)", // Emerald Tail
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          animation: "rotate-border 4s linear infinite", // Animasi putaran
          zIndex: 0,
        }}
      />

      {/* 2. STATIC BORDER LAYER (Saat tidak di-hover) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255, 255, 255, 0.1)", // Border abu-abu diam
          zIndex: 0,
          borderRadius: "1rem",
        }}
      />

      {/* 3. INNER CONTENT CARD */}
      <Paper
        radius="lg"
        p="xl"
        style={{
          position: "relative",
          height: "100%",
          zIndex: 1, // Di atas animasi border
          backgroundColor: "#0b1016", // Background kartu (harus solid/dark agar menutupi tengah animasi)
          // Opsional: Sedikit transparan jika mau background page terlihat dikit
          // backgroundColor: "rgba(11, 16, 22, 0.95)",
        }}
        {...props}
      >
        {children}
      </Paper>

      {/* INJECT KEYFRAMES untuk animasi putar */}
    </Box>
  );
}
