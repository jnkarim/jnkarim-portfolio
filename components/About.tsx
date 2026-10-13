import { summary, experience, profile } from "@/lib/data";
import { Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-6 sm:px-6">
      <div className="mb-6 flex items-baseline gap-3">
        <span className="text-mono-label text-xs font-bold uppercase text-neon-deep">
          02 / About
        </span>
        <h2 className="text-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
          About
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.3fr_1fr]">
        <div className="border-hard shadow-hard rounded-2xl bg-card p-6 sm:p-7">
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg">{summary}</p>

          <div className="mt-6 flex items-start gap-3 rounded-xl bg-cream-2/70 p-4">
            <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-neon-deep" strokeWidth={2.5} />
            <div>
              <div className="text-display text-sm font-bold">{profile.degree}</div>
              <div className="text-sm text-ink-soft">{profile.university}</div>
              <div className="text-mono-label mt-1 text-xs uppercase text-ink-soft">
                {profile.eduRange} · CGPA: {profile.cgpa}
              </div>
            </div>
          </div>
        </div>

        <div className="border-hard shadow-hard rounded-2xl bg-neon p-6 sm:p-7">
          <div className="mb-4 flex items-center gap-2">
            <Briefcase className="h-5 w-5" strokeWidth={2.5} />
            <span className="text-mono-label text-xs font-bold uppercase">
              Work experience
            </span>
          </div>
          {experience.map((job) => (
            <div key={job.org} className="border-hard rounded-xl bg-cream p-4">
              <div className="text-display text-lg font-extrabold leading-tight">
                {job.role}
              </div>
              <div className="text-sm font-semibold text-ink-soft">
                {job.org} — {job.location}
              </div>
              <div className="text-mono-label mb-3 mt-1 text-[11px] uppercase text-neon-deep">
                {job.period}
              </div>
              <ul className="space-y-2">
                {job.points.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
