"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import Mascot from "./Mascot";
import { profile } from "@/lib/data";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "py-2.5" : "py-4"}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="border-hard shadow-hard-sm flex items-center justify-between gap-3 rounded-2xl bg-card/95 px-3 py-2 backdrop-blur sm:px-4">
          <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label="Go to the top of the page">
            <Mascot className="h-9 w-9 sm:h-10 sm:w-10" />
            <span className="text-display hidden text-sm font-extrabold uppercase tracking-tight sm:block sm:text-base">
              {profile.name.split(" ")[0]}
              <span className="text-neon-deep">.</span>
              {profile.name.split(" ").slice(-1)}
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-mono-label rounded-full px-3 py-2 text-xs font-medium uppercase text-ink-soft transition hover:bg-cream-2 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={profile.cv}
            download="Julker_Nayeen_Karim_CV.pdf"
            className="press-hard border-hard text-mono-label hidden items-center gap-2 rounded-full bg-neon px-4 py-2 text-xs font-bold uppercase text-ink lg:inline-flex"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download CV
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            className="border-hard flex h-9 w-9 items-center justify-center rounded-full bg-cream-2 lg:hidden"
          >
            <span className="relative block h-3 w-4" aria-hidden="true">
              <span className={`absolute left-0 top-0 h-[1.5px] w-4 bg-ink transition ${open ? "top-1.5 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-1.5 h-[1.5px] w-4 bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-3 h-[1.5px] w-4 bg-ink transition ${open ? "top-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </nav>

        {open && (
          <div id="mobile-navigation" className="border-hard shadow-hard-sm mt-2 flex flex-col gap-1 rounded-2xl bg-card p-3 lg:hidden">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-mono-label rounded-xl px-3 py-2.5 text-xs font-medium uppercase text-ink-soft hover:bg-cream-2 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.cv}
              download="Julker_Nayeen_Karim_CV.pdf"
              onClick={() => setOpen(false)}
              className="border-hard text-mono-label mt-1 flex items-center justify-center gap-2 rounded-full bg-neon px-4 py-2.5 text-center text-xs font-bold uppercase text-ink"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Download CV
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
