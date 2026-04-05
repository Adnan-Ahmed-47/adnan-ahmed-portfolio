"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Rocket, Users } from "lucide-react";

const points = [
  {
    icon: Briefcase,
    text: "Business websites, portfolio sites, and e-commerce platforms tailored to your brand.",
  },
  {
    icon: Rocket,
    text: "Modern UI, strong performance, and architecture that scales as you grow.",
  },
  {
    icon: Users,
    text: "Open to freelance projects, collaborations, and full-time roles that fit.",
  },
];

export function Freelance() {
  return (
    <section id="freelance" className="relative px-4 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Collaborate"
          title="Open to Freelance & Full-Time Opportunities"
          subtitle="Let’s build something sharp, fast, and maintainable—whether it’s a launch site or a long-term product partnership."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-950/50 via-[#0a0618] to-cyan-950/30 p-8 md:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-600/25 via-transparent to-transparent" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <ul className="space-y-6">
              {points.map((p, i) => (
                <motion.li
                  key={p.text}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
                    {p.text}
                  </p>
                </motion.li>
              ))}
            </ul>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex justify-center lg:justify-end"
            >
              <Link
                href="#contact"
                className="btn-glow inline-flex min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-10 py-4 text-center text-base font-bold text-white shadow-xl transition hover:brightness-110"
              >
                Hire Me
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
