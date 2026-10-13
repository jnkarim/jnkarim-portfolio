import Mascot from "./Mascot";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-8 pt-4 sm:px-6">
      <div className="border-hard shadow-hard-sm flex flex-col items-center justify-between gap-4 rounded-2xl bg-card p-6 sm:flex-row sm:flex-wrap">
        <div className="flex items-center gap-3">
          <Mascot className="h-10 w-10" />
          <div>
            <div className="text-display text-sm font-extrabold uppercase">{profile.name}</div>
            <div className="text-mono-label text-[10px] uppercase text-ink-soft">
              {profile.role} · {profile.location}
            </div>
          </div>
        </div>

        <div className="text-mono-label flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs uppercase text-ink-soft">
          <a href="#top" className="hover:text-ink">Top</a>
          <a href="#projects" className="hover:text-ink">Projects</a>
          <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="hover:text-ink">CV</a>
          <a href={profile.cv} download="Julker_Nayeen_Karim_CV.pdf" className="hover:text-ink">Download CV</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            GitHub
          </a>
        </div>

        <span className="text-mono-label text-[10px] uppercase text-ink-soft">
          © 2026 — built with next.js
        </span>
      </div>
    </footer>
  );
}
