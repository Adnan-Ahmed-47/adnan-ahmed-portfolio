"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Brain, Code2, Layers, MessageCircle, Smartphone, Server } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend core",
    text: "React.js, JavaScript, HTML5, and CSS3 for polished, scalable interfaces.",
  },
  {
    icon: Layers,
    title: "MiDOC platform",
    text: "Shipping features on an AI-powered healthcare product used in real clinical workflows.",
  },
  {
    icon: Server,
    title: "APIs & integration",
    text: "Comfortable integrating REST APIs and collaborating on backend endpoints.",
  },
  {
    icon: Smartphone,
    title: "Mobile exposure",
    text: "Contributing to mobile app features alongside responsive web experiences.",
  },
  {
    icon: MessageCircle,
    title: "Client collaboration",
    text: "Doctor demos, requirement gathering, and feedback loops that shape the product.",
  },
  {
    icon: Brain,
    title: "Growth mindset",
    text: "Actively growing toward full-stack development with strong product thinking.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Crafting interfaces that scale"
          subtitle="Frontend developer with 2+ years building real-world products—focused on clarity, performance, and users who depend on the UI every day."
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-3xl text-lg leading-relaxed text-zinc-400"
        >
          I specialize in React.js, REST API integration, and building scalable UI for
          complex domains. On MiDOC, I translate healthcare workflows into fast, intuitive
          experiences—balancing technical constraints with what doctors and staff need at
          the point of care.
        </motion.p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass group rounded-2xl p-6 transition-shadow hover:shadow-lg hover:shadow-violet-500/10"
            >
              <div className="mb-4 inline-flex rounded-xl bg-violet-500/15 p-3 text-violet-300 transition group-hover:bg-cyan-500/15 group-hover:text-cyan-300">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
