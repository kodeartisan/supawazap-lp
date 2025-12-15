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
  const [rotation, setRotation] = useState({ x: 10, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeCRMTab, setActiveCRMTab] = useState("profile");
  const [activeMainTab, setActiveMainTab] = useState("crm");

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = (e.clientX - centerX) / (rect.width / 2);
    const mouseY = (e.clientY - centerY) / (rect.height / 2);
    const rotateY = mouseX * 8;
    const rotateX = -mouseY * 6 + 5;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 10, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <Box
      ref={containerRef}
      mt={100}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        perspective: "1200px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
          transition: isHovering
            ? "transform 0.1s ease-out"
            : "transform 0.5s ease-out",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        {/* Browser Window Frame */}
        <Paper
          radius="lg"
          style={{
            background: "#0f172a",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.1)",
            overflow: "hidden",
          }}
        >
          {/* Browser Header */}
          <Group
            px="md"
            h={40}
            style={{
              background: "rgba(30, 41, 59, 0.5)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
            gap="xs"
          >
            <Group gap={6}>
              <Box w={10} h={10} bg="red.5" style={{ borderRadius: "50%" }} />
              <Box
                w={10}
                h={10}
                bg="yellow.5"
                style={{ borderRadius: "50%" }}
              />
              <Box w={10} h={10} bg="green.5" style={{ borderRadius: "50%" }} />
            </Group>
            <Box
              bg="rgba(0, 0, 0, 0.2)"
              px="md"
              py={4}
              style={{
                borderRadius: 6,
                fontSize: 12,
                color: "#94a3b8",
                flex: 1,
                textAlign: "center",
                fontFamily: "monospace",
              }}
            >
              web.whatsapp.com
            </Box>
          </Group>

          {/* Interface Layout */}
          <Box h={650} style={{ display: "flex", overflow: "hidden" }}>
            {/* Left: WhatsApp Chat List */}
            <WhatsAppSidebar contactName={CONTACT_NAME} />

            {/* Middle: Chat Area */}
            <ChatArea contactName={CONTACT_NAME} />

            {/* Right: Supawazap Extension Panel */}
            <Group gap={0} h="100%" align="flex-start" bg="transparent">
              {/* Content Panel based on activeMainTab */}
              <CRMSidebar
                activeTab={activeCRMTab}
                onTabChange={setActiveCRMTab}
              />

              {/* Vertical Tab Bar */}
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
