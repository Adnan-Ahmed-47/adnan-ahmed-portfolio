"use client";

import { FloatingParticles } from "@/components/effects/FloatingParticles";
import { SITE } from "@/lib/constants";
import { useTypewriter } from "@/hooks/useTypewriter";
import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const { display, done } = useTypewriter(SITE.tagline, 28);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pb-20 pt-28 md:px-8 md:pb-28 md:pt-32"
    >
      <FloatingParticles />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-200/90"
        >
          <Sparkles className="h-4 w-4 text-cyan-400" />
          <span>Available for freelance & full-time</span>
        </motion.div>

        <motion.h1
          className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.55 }}
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient">{SITE.name}</span>
          <br />
          <span className="text-zinc-100">{SITE.role}</span>
        </motion.h1>

        <motion.p
          className="mt-8 min-h-[4.5rem] max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl md:min-h-[5.5rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {display}
          {!done ? (
            <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-violet-400 align-middle" />
          ) : null}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <Link
            href="#projects"
            className="btn-glow inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-3.5 text-center text-sm font-semibold text-white transition hover:brightness-110"
          >
            View Projects
          </Link>
          <a
            href={SITE.resumePath}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-violet-400/40 hover:bg-white/10"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <Link
            href="#contact"
            className="btn-glow-cyan inline-flex items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-8 py-3.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20"
          >
            Hire Me
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="#about"
            className="group flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-500"
          >
            <span>Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              <ArrowDown className="h-5 w-5 text-violet-400 transition group-hover:text-cyan-400" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
