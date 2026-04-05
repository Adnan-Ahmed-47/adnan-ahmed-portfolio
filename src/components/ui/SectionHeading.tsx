"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 md:mb-16"
    >
      {eyebrow ? (
        <span className="mb-3 inline-block text-sm font-medium uppercase tracking-[0.2em] text-violet-400/90">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
