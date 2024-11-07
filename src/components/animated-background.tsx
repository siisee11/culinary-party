"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

interface AnimatedBackgroundProps {
  submitted: boolean;
}

export function AnimatedBackground({ submitted }: AnimatedBackgroundProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useAnimationFrame((t) => {
    const path = pathRef.current;
    if (path) {
      const waveAmplitude = 2; // Adjust the wave height
      const waveFrequency = 0.0004; // Adjust the wave speed
      const waveLength = 1000; // Adjust the wave length

      // Generate the wave path
      const points = [];
      const numPoints = 100; // Number of points along the path

      for (let i = 0; i <= numPoints; i++) {
        const x = (i / numPoints) * 100; // x ranges from 0 to 100
        const sineOffset =
          Math.sin(t * waveFrequency + (x / waveLength) * 2 * Math.PI) *
          waveAmplitude;
        const y = (i / numPoints) * 100; // y ranges from 0 to 100

        // Adjust x by the sine offset to create the wave effect
        const adjustedX = 100 + sineOffset;

        points.push(`${adjustedX},${y}`);
      }

      // Construct the SVG path data
      const d = `
        M 0,0
        L 100,0
        L ${points.join(" ")}
        L 0,100
        Z
      `;

      path.setAttribute("d", d);
    }
  });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Right half background (white) */}
      <div className="absolute inset-0 bg-white" />

      {/* Left half background with animated wave */}
      <motion.div
        className="absolute inset-0"
        initial={{ x: "-100%" }}
        animate={submitted ? { x: "0%" } : { x: "-100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 200 100"
          preserveAspectRatio="none"
          className="h-full w-[300%]"
        >
          <path
            ref={pathRef}
            fill="black"
            d="
              M 0,0
              L 100,0
              L 100,100
              L 0,100
              Z
            "
          />
        </svg>
      </motion.div>
    </div>
  );
}
