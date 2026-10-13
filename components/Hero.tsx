import Mascot from "./Mascot";
import { profile } from "@/lib/data";
import { ArrowUpRight, Download, FileText, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
      <div className="text-mono-label mb-4 flex items-center gap-2 text-xs uppercase text-ink-soft">
        <span className="h-1.5 w-1.5 rounded-full bg-neon-deep" />
        Full-stack development / AI-powered products
      </div>

      <div className="border-hard shadow-hard-lg grid grid-cols-1 overflow-hidden rounded-3xl bg-card lg:grid-cols-[1.05fr_1.4fr]">
        <div className="relative flex flex-col items-center justify-center gap-6 border-b-[1.5px] border-ink bg-neon p-8 sm:p-10 lg:border-b-0 lg:border-r-[1.5px]">
          <div className="text-mono-label absolute left-4 top-4 rounded-full border-hard bg-cream px-3 py-1 text-[10px] font-bold uppercase">
            Profile / 01
          </div>
          <div className="animate-float mt-6">
            <Mascot className="h-44 w-44 sm:h-52 sm:w-52" />
          </div>
          <div className="border-hard shadow-hard-sm flex items-center gap-2 rounded-full bg-cream px-4 py-2">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-mono-label text-[11px] font-semibold uppercase">{profile.location}</span>
          </div>
        </div>

        <div className="flex flex-col p-6 sm:p-9">
          <span className="text-mono-label text-xs uppercase text-ink-soft">Software developer / CSE final year</span>
          <h1 className="text-display mt-2 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-xl text-base text-ink-soft sm:text-lg">{profile.tagline}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="press-hard border-hard shadow-hard-sm text-mono-label flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold uppercase text-cream"
            >
              View projects <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="press-hard border-hard shadow-hard-sm text-mono-label flex items-center gap-2 rounded-full bg-cream-2 px-5 py-3 text-sm font-bold uppercase"
            >
              <FileText className="h-4 w-4" aria-hidden="true" /> View CV
            </a>
            <a
              href={profile.cv}
              download="Julker_Nayeen_Karim_CV.pdf"
              className="text-mono-label flex items-center gap-1.5 rounded-full px-2 py-3 text-xs font-bold uppercase underline underline-offset-4 hover:text-ink-soft"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Download
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 border-t border-dashed border-ink/30 pt-6 sm:grid-cols-3">
            {[
              { label: "Professional experience", value: "1 year" },
              { label: "Featured projects", value: "15+" },
              { label: "Blockchain Olympiad 2026", value: "7th Place" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-cream-2/70 p-3">
                <div className="text-display text-lg font-extrabold sm:text-xl">{stat.value}</div>
                <div className="text-mono-label mt-1 text-[10px] uppercase text-ink-soft">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
