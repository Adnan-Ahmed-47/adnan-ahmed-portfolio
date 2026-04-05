"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";

const bullets = [
  "Working on MiDOC (AI-powered healthcare platform)",
  "Building scalable UI components using React.js",
  "Integrating REST APIs across product modules",
  "Owning flows for appointments, EMR, prescriptions, and billing",
  "Client interaction with doctors—demos, requirements, and iteration",
  "Contributing to backend API development",
  "Recently supporting mobile app features",
];

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I build"
          subtitle="Hands-on product work in a fast-moving team—shipping features end users rely on daily."
        />

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="glass relative overflow-hidden rounded-3xl p-8 md:p-10"
        >
          <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-violet-600/20 blur-[100px]" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white shadow-lg shadow-violet-500/30">
                <Building2 className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                  Virtus IT Pvt Ltd
                </h3>
                <p className="mt-1 text-violet-300/90">Frontend Developer</p>
                <p className="mt-2 text-sm font-medium text-zinc-500">
                  Jan 2024 – Present
                </p>
              </div>
            </div>
          </div>

          <ul className="relative mt-10 grid gap-4 sm:grid-cols-2">
            {bullets.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-3 text-sm leading-relaxed text-zinc-400"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400/90" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
}
