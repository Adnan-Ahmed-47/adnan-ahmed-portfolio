"use client";

import { motion } from "framer-motion";

export function GradientMesh() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden mesh-gradient animate-mesh"
      aria-hidden
    >
      <motion.div
        className="absolute -left-1/4 top-1/4 h-[520px] w-[520px] rounded-full bg-violet-600/25 blur-[120px] animate-pulse-glow"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-1/4 bottom-1/4 h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[100px]"
        animate={{ scale: [1, 1.05, 1], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}
