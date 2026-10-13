
import { skills } from "@/lib/data";

const skillDetails: Record<string, string> = {
  Languages: "Programming & problem solving",
  Frameworks: "Frontend & backend development",
  Databases: "Storage & data management",
  "AI / ML": "Machine learning & applied AI",
  Tools: "Development & deployment",
};

export default function Skills() {
  const skillGroups = Object.entries(skills);

  const totalSkills = skillGroups.reduce(
    (total, [, items]) => total + items.length,
    0
  );

  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl scroll-mt-28 px-4 py-14 sm:px-6 sm:py-20"
    >
      {/* SECTION HEADING */}
      <div className="mb-8 flex flex-wrap items-baseline gap-3">
        <span className="text-mono-label text-xs font-bold uppercase text-neon-deep">
          04 / Skills
        </span>

        <h2 className="text-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
          Toolbox
        </h2>

        <span className="ml-auto hidden font-mono text-[11px] font-bold uppercase tracking-wider text-[#74756A] sm:block">
          Engineering / Development / AI
        </span>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.82fr_1.68fr]">

        {/* LEFT — FEATURE PANEL */}
        <div className="border-hard shadow-hard-sm relative flex flex-col overflow-hidden rounded-2xl bg-[#C9FF32] p-7 sm:p-8">

          {/* TOP BAR */}
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full border border-[#171A12] bg-[#F9F6E9] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider">
              Engineering Stack
            </span>

            <span className="font-mono text-xs font-bold">
              [04]
            </span>
          </div>

          {/* BIG HEADING */}
          <div className="mt-12">
            <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-[#414D16]">
              Tools of the trade
            </p>

            <h3 className="text-display text-[clamp(2.6rem,4vw,4.1rem)] font-black uppercase leading-[0.98] tracking-[-0.065em] text-[#171A12]">
              BUILD.
              <br />
              TEST.
              <br />
              SHIP<span className="text-white">.</span>
            </h3>

            <p className="mt-6 max-w-[300px] text-sm leading-7 text-[#343B20]">
              The technologies I use to turn ideas into
              reliable applications, useful products,
              and intelligent systems.
            </p>
          </div>

          {/* FOCUS AREAS */}
          <div className="mt-12 border-t border-[#171A12]/40 pt-6 lg:mt-auto">
            <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-widest">
              Core Focus
            </p>

            <div className="space-y-3">
              {[
                "Full-stack Development",
                "API & Database Engineering",
                "Applied AI / ML",
              ].map((focus, index) => (
                <div
                  key={focus}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#171A12] bg-[#171A12] font-mono text-[10px] font-bold text-[#C9FF32]">
                    {index + 1}
                  </span>

                  <span className="text-[13px] font-semibold text-[#171A12]">
                    {focus}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ACCENT DETAIL */}
          <div
            className="mt-8 flex gap-1.5"
            aria-hidden="true"
          >
            <span className="h-1.5 w-14 rounded-full bg-[#171A12]" />
            <span className="h-1.5 w-7 rounded-full bg-[#00C8DE]" />
            <span className="h-1.5 w-3 rounded-full bg-[#F9F6E9]" />
          </div>
        </div>

        {/* RIGHT — SKILL DIRECTORY */}
        <div className="border-hard shadow-hard-sm overflow-hidden rounded-2xl bg-card">

          {/* DIRECTORY HEADER */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#171A12] bg-[#F6F3E8] px-6 py-5 sm:px-7">

            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#171A12] bg-[#171A12] font-mono text-xs font-bold text-[#C9FF32]">
                {skillGroups.length.toString().padStart(2, "0")}
              </span>

              <span className="font-mono text-[12px] font-bold uppercase tracking-wider">
                Technical Directory
              </span>
            </div>

            <span className="font-mono text-[10px] font-semibold uppercase tracking-wide text-[#77776A]">
              {totalSkills} Technologies
            </span>
          </div>

          {/* SKILL ROWS */}
          {skillGroups.map(([group, items], index) => (
            <div
              key={group}
              className="group border-b border-dashed border-[#C8C6B8] px-6 py-6 transition-colors duration-200 last:border-b-0 hover:bg-[#F9FBEF] sm:px-7"
            >
              <div className="grid gap-4 sm:grid-cols-[165px_minmax(0,1fr)] sm:gap-6">

                {/* CATEGORY */}
                <div className="flex items-start gap-3">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#171A12] font-mono text-[11px] font-bold ${
                      index % 2 === 0
                        ? "bg-[#C9FF32]"
                        : "bg-[#00C8DE]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="pt-0.5">
                    <h3 className="text-display text-sm font-extrabold uppercase tracking-tight text-[#171A12]">
                      {group}
                    </h3>

                    <p className="mt-1.5 text-[11px] leading-5 text-[#77776A]">
                      {skillDetails[group] ?? "Technical expertise"}
                    </p>
                  </div>
                </div>

                {/* TECHNOLOGY TAGS */}
                <div className="flex flex-wrap content-start items-start gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#171A12] bg-[#F6F3E8] px-3 py-1.5 font-mono text-[11px] font-semibold text-[#171A12] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C9FF32] hover:shadow-[2px_2px_0px_#171A12]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

          {/* DIRECTORY FOOTER */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#171A12] bg-[#F6F3E8] px-6 py-4 sm:px-7">

            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.13em] text-[#77776A]">
              From concept to production
            </span>

            <div
              className="flex items-center gap-1"
              aria-hidden="true"
            >
              <span className="h-2 w-2 rounded-full bg-[#171A12]" />
              <span className="h-2 w-2 rounded-full bg-[#C9FF32]" />
              <span className="h-2 w-2 rounded-full bg-[#00C8DE]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
