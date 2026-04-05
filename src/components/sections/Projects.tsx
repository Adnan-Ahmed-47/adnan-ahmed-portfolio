"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowUpRight, Stethoscope, PenTool, Plus } from "lucide-react";

const icons = [Stethoscope, PenTool] as const;

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          subtitle="Production healthcare engineering alongside product-minded design work—more case studies coming soon."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {PROJECTS.map((project, i) => {
            const Icon = icons[i] ?? PenTool;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-8 shadow-xl transition-shadow hover:border-violet-500/30 hover:shadow-violet-500/10"
              >
                <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-violet-600/20 blur-3xl transition group-hover:bg-cyan-500/15" />
                <div className="relative mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20 text-violet-200">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="relative flex flex-1 flex-col">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    {project.featured ? (
                      <span className="rounded-full bg-cyan-500/15 px-2.5 py-0.5 text-xs font-semibold text-cyan-300">
                        Featured
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm font-medium text-violet-300/80">
                    {project.subtitle}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.span
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-violet-400 opacity-0 transition group-hover:opacity-100"
                    initial={false}
                  >
                    Case study soon <ArrowUpRight className="h-4 w-4" />
                  </motion.span>
                </div>
              </motion.article>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex min-h-[280px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center"
          >
            <div className="mb-4 rounded-full bg-white/5 p-4 text-zinc-500">
              <Plus className="h-8 w-8" />
            </div>
            <p className="font-display text-lg font-semibold text-zinc-300">
              More projects incoming
            </p>
            <p className="mt-2 max-w-xs text-sm text-zinc-500">
              Next case studies will highlight upcoming builds—check back or reach out for a
              walkthrough of private work.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
