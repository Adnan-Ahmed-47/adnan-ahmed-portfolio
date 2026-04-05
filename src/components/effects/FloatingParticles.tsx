"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export function FloatingParticles() {
  const dots = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: `${(i * 37) % 100}%`,
        y: `${(i * 23 + 11) % 100}%`,
        size: 1 + (i % 3),
        delay: (i % 8) * 0.4,
        duration: 8 + (i % 5),
      })),
    []
  );

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: d.x,
            top: d.y,
            width: d.size,
            height: d.size,
          }}
          animate={{ opacity: [0.15, 0.55, 0.15], y: [0, -18, 0] }}
          transition={{
            duration: d.duration,
            repeat: Infinity,
            delay: d.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
