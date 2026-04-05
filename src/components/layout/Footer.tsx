import { IconGitHub, IconLinkedIn } from "@/components/icons/BrandIcons";
import { SITE } from "@/lib/constants";
import { Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-[#050010]/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-8">
        <p className="text-center text-sm text-zinc-500 md:text-left">
          © {year} {SITE.name}. Crafted with React & Next.js.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={`mailto:${SITE.email}`}
            className="text-zinc-400 transition hover:text-violet-400"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
          <Link
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition hover:text-violet-400"
            aria-label="GitHub"
          >
            <IconGitHub className="h-5 w-5" />
          </Link>
          <Link
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition hover:text-violet-400"
            aria-label="LinkedIn"
          >
            <IconLinkedIn className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
