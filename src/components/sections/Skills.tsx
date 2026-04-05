"use client";

import { IconFigma } from "@/components/icons/BrandIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILLS } from "@/lib/constants";
import { motion, useInView } from "framer-motion";
import { GitBranch, Layout, Palette, Server, Code2, Wrench } from "lucide-react";
import { useRef } from "react";

const groups = [
  {
    key: "frontend" as const,
    title: "Frontend",
    icon: Code2,
    color: "from-violet-500/30 to-fuchsia-500/20",
  },
  {
    key: "backend" as const,
    title: "Backend & APIs",
    icon: Server,
    color: "from-cyan-500/25 to-violet-500/15",
  },
  {
    key: "tools" as const,
    title: "Tools",
    icon: Wrench,
    color: "from-amber-500/20 to-orange-500/10",
  },
  {
    key: "uiux" as const,
    title: "UI / UX",
    icon: Palette,
    color: "from-pink-500/20 to-rose-500/15",
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-zinc-300">{name}</span>
        <span className="text-zinc-500">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I ship with"
          subtitle="A balanced stack for building fast UIs, integrating APIs, and collaborating across design and engineering."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {groups.map((g, gi) => {
            const list = SKILLS[g.key];
            return (
              <motion.div
                key={g.key}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: gi * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.01 }}
                className={`glass relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br ${g.color}`}
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
                <div className="relative flex items-start gap-4">
                  <span className="rounded-2xl bg-white/10 p-3 text-white">
                    <g.icon className="h-7 w-7" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-white">{g.title}</h3>
                    <div className="mt-6 space-y-5">
                      {list.map((s, si) => (
                        <SkillBar
                          key={s.name}
                          name={s.name}
                          level={s.level}
                          delay={0.1 + si * 0.08 + gi * 0.05}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-4 text-zinc-500"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
            <GitBranch className="h-4 w-4 text-violet-400" /> Git & GitHub
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
            <Layout className="h-4 w-4 text-cyan-400" /> Postman
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
            <IconFigma className="h-4 w-4 text-pink-400" /> Figma
          </span>
        </motion.div>
      </div>
    </section>
  );
}
