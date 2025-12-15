"use client";

import { Box, Paper, PaperProps } from "@mantine/core";
import { useRef, useState, MouseEvent } from "react";

interface SpotlightCardProps extends PaperProps {
  children: React.ReactNode;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  spotlightColor = "rgba(16, 185, 129, 0.35)", // Emerald glow default
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <Paper
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      radius="lg"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgba(2, 6, 23, 0.6)", // Dark transparent bg
        border: "1px solid rgba(255, 255, 255, 0.1)", // Base subtle border
        ...props.style,
      }}
      {...props}
    >
      {/* 1. Spotlight BORDER Layer */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: -1, // Extends slightly outside to cover border
          opacity: opacity,
          transition: "opacity 0.3s",
          zIndex: 10,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
          // Masking technique to only show the gradient on the border area
          maskImage: `
            linear-gradient(black, black), 
            linear-gradient(black, black)
          `,
          maskClip: "content-box, border-box",
          padding: "1px", // Thickness of the spotlight border
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      />

      {/* 2. Spotlight INNER GLOW Layer (Optional: Adds depth inside) */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          opacity: opacity,
          transition: "opacity 0.3s",
          zIndex: 1,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.06), transparent 40%)`,
        }}
      />

      {/* Content */}
      <Box style={{ position: "relative", zIndex: 20 }}>{children}</Box>
    </Paper>
  );
}
