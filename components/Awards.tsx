import { awards } from "@/lib/data";
import { Trophy } from "lucide-react";

export default function Awards() {
  return (
    <section id="awards" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-10 sm:px-6">
      <div className="mb-7 flex items-baseline gap-3">
        <span className="text-mono-label text-xs font-bold uppercase text-neon-deep">
          05 / Awards
        </span>
        <h2 className="text-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
          Notable awards
        </h2>
      </div>

      <div className="border-hard shadow-hard overflow-hidden rounded-2xl bg-card">
        {awards.map((a, i) => (
          <div
            key={a.title}
            className={`flex items-start gap-4 p-5 sm:items-center sm:p-6 ${
              i !== awards.length - 1 ? "border-b border-dashed border-ink/25" : ""
            }`}
          >
            <div className="border-hard flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neon">
              <Trophy className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-display text-base font-extrabold leading-snug sm:text-lg">
                {a.title}
              </div>
              <div className="text-sm text-ink-soft">{a.org}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
