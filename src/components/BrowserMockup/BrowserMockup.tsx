"use client";

import { Box, Group, Paper } from "@mantine/core";
import { useRef, useState, MouseEvent } from "react";
import { WhatsAppSidebar } from "./WhatsAppSidebar";
import { ChatArea } from "./ChatArea";
import { CRMSidebar } from "./CRMSidebar";
import { TabBar } from "./TabBar";

const CONTACT_NAME = "John Doe";

export function BrowserMockup() {
  const containerRef = useRef<HTMLDivElement>(null);

  // State untuk rotasi 3D
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // State untuk posisi kilau cahaya (Glare)
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const [activeCRMTab, setActiveCRMTab] = useState("profile");
  const [activeMainTab, setActiveMainTab] = useState("crm");

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    // Hitung posisi mouse relatif terhadap element (0 sampai 1)
    const xPct = (e.clientX - rect.left) / rect.width;
    const yPct = (e.clientY - rect.top) / rect.height;

    // Hitung Rotasi (Maksimal 5 derajat agar elegan, tidak pusing)
    // xPct 0 (kiri) -> rotateY -5deg
    // xPct 1 (kanan) -> rotateY 5deg
    const rotateY = (xPct - 0.5) * 10;
    const rotateX = (0.5 - yPct) * 10;

    setRotation({ x: rotateX, y: rotateY });

    // Hitung posisi Glare (Cahaya)
    // Cahaya bergerak berlawanan arah sedikit untuk efek kedalaman
    setGlare({
      x: xPct * 100,
      y: yPct * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    // Reset ke posisi diam
    setRotation({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <Box
      ref={containerRef}
      mt={10}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px", // Perspektif kamera
        display: "flex",
        justifyContent: "center",
        padding: "40px 0", // Ruang untuk animasi naik/turun
      }}
    >
      <Box
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out", // Smooth follow
          width: "100%",
          maxWidth: "1100px",
          position: "relative",
        }}
      >
        {/* --- PREMIUM SHADOW LAYER --- */}
        {/* Bayangan yang bergerak berlawanan dengan objek untuk efek melayang */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 20,
            right: 20,
            bottom: -30,
            background: "rgba(0,0,0,0.5)",
            filter: "blur(40px)",
            transform: `translateZ(-50px) translateX(${
              rotation.y * -1.5
            }px) translateY(${rotation.x * 1.5}px)`,
            transition: "transform 0.1s ease-out",
            borderRadius: "50%",
            zIndex: -1,
          }}
        />

        {/* --- MAIN BROWSER FRAME --- */}
        <Paper
          radius="lg"
          style={{
            background: "#0f172a", // Slate-900 base
            // Border gradient halus
            border: "1px solid rgba(255, 255, 255, 0.1)",
            overflow: "hidden",
            position: "relative",
            // Glass reflection static overlay
            boxShadow: `
              0 0 0 1px rgba(255,255,255,0.05),
              0 1px 2px 0 rgba(0,0,0,0.5)
            `,
          }}
        >
          {/* --- DYNAMIC GLARE OVERLAY (KILAU) --- */}
          {/* Layer ini memberikan efek sorotan lampu senter di atas kaca */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 50,
              pointerEvents: "none",
              mixBlendMode: "overlay", // Kunci agar menyatu dengan warna di bawahnya
              background: `
                radial-gradient(
                  circle at ${glare.x}% ${glare.y}%, 
                  rgba(255,255,255,0.15) 0%, 
                  rgba(255,255,255,0.05) 30%, 
                  transparent 70%
                )
              `,
              opacity: glare.opacity,
              transition: "opacity 0.3s ease",
            }}
          />

          {/* --- TOP REFLECTION (SHEEN) --- */}
          {/* Garis kilau statis di bagian atas untuk kesan material keras/kaca */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              zIndex: 51,
            }}
          />

          {/* Browser Header (Traffic Lights) */}
          <Group
            px="md"
            h={42}
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
            gap="xs"
          >
            {/* Mac Traffic Lights */}
            <Group gap={8}>
              <Box
                w={11}
                h={11}
                bg="#FF5F56"
                style={{
                  borderRadius: "50%",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
                }}
              />
              <Box
                w={11}
                h={11}
                bg="#FFBD2E"
                style={{
                  borderRadius: "50%",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
                }}
              />
              <Box
                w={11}
                h={11}
                bg="#27C93F"
                style={{
                  borderRadius: "50%",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
                }}
              />
            </Group>

            {/* URL Bar */}
            <Box
              bg="rgba(0, 0, 0, 0.3)"
              px="md"
              py={5}
              style={{
                borderRadius: 8,
                fontSize: 12,
                color: "#64748b",
                flex: 1,
                textAlign: "center",
                fontFamily: "var(--font-geist-mono), monospace",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                border: "1px solid rgba(255,255,255,0.05)",
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.2)", // Inner shadow for depth
              }}
            >
              <span style={{ color: "#10b981" }}>🔒</span> web.whatsapp.com
            </Box>
          </Group>

          {/* Interface Layout */}
          <Box h={650} style={{ display: "flex", overflow: "hidden" }}>
            <WhatsAppSidebar contactName={CONTACT_NAME} />
            <ChatArea contactName={CONTACT_NAME} />
            <Group gap={0} h="100%" align="flex-start" bg="transparent">
              <CRMSidebar
                activeTab={activeCRMTab}
                onTabChange={setActiveCRMTab}
              />
              <TabBar
                activeTab={activeMainTab}
                onTabChange={setActiveMainTab}
              />
            </Group>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
