"use client";

import { IconGitHub, IconLinkedIn } from "@/components/icons/BrandIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/constants";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  const socials = [
    { href: `mailto:${SITE.email}`, label: "Email", icon: Mail, external: false },
    {
      href: `tel:${SITE.phone.replace(/\s/g, "")}`,
      label: SITE.phone,
      icon: Phone,
      external: false,
    },
    {
      href: SITE.github,
      label: "GitHub",
      icon: IconGitHub,
      external: true,
    },
    {
      href: SITE.linkedin,
      label: "LinkedIn",
      icon: IconLinkedIn,
      external: true,
    },
  ] as const;

  return (
    <section id="contact" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s work together"
          subtitle="Tell me about your product, timeline, and goals—I’ll get back as soon as I can."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 lg:col-span-2"
          >
            <p className="text-sm font-medium uppercase tracking-widest text-violet-400/90">
              Direct
            </p>
            <ul className="mt-8 space-y-4">
              {socials.map((s, i) => (
                <motion.li
                  key={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={s.href}
                    target={s.external ? "_blank" : undefined}
                    rel={s.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition hover:border-white/10 hover:bg-white/5"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300 transition group-hover:bg-cyan-500/15 group-hover:text-cyan-300">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm text-zinc-300 group-hover:text-white">
                      {s.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 lg:col-span-3"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="sm:col-span-1">
                <span className="mb-2 block text-sm font-medium text-zinc-400">Name</span>
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20"
                  placeholder="Your name"
                />
              </label>
              <label className="sm:col-span-1">
                <span className="mb-2 block text-sm font-medium text-zinc-400">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20"
                  placeholder="you@example.com"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-zinc-400">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20"
                  placeholder="Project details, budget, timeline…"
                />
              </label>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-glow mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3.5 text-sm font-semibold text-white sm:w-auto sm:px-10"
            >
              <Send className="h-4 w-4" />
              Send message
            </motion.button>
            {status === "sent" ? (
              <p className="mt-4 text-sm text-cyan-400/90">
                Opening your email client—if nothing opens, mail me at {SITE.email}
              </p>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
