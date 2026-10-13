import Image from "next/image";
import { type Project } from "@/lib/data";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="border-hard shadow-hard group flex flex-col overflow-hidden rounded-2xl bg-card transition">
      <div className="relative h-44 overflow-hidden border-b-[1.5px] border-ink sm:h-52">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={`${project.name} project preview`}
            fill
            priority={index < 2}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-neon/70 px-8">
            <div className="pointer-events-none absolute -right-12 -top-16 h-52 w-52 rounded-full border-[20px] border-ink/10" />
            <div className="pointer-events-none absolute -bottom-24 -left-12 h-64 w-64 rounded-full border-[30px] border-ink/10" />
            <span className="text-display relative max-w-full break-words text-center text-3xl font-black uppercase leading-tight tracking-tighter text-ink/80 sm:text-4xl">
              {project.name}
            </span>
          </div>
        )}
        {project.cover && <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />}
        <span className="text-mono-label absolute left-3 top-3 max-w-[75%] truncate rounded-full border-hard bg-cream px-2.5 py-1 text-[10px] font-bold uppercase">
          {String(index + 1).padStart(2, "0")} / {project.tag}
        </span>
        {project.badge && (
          <span className="text-mono-label corner-tag absolute right-0 top-3 rounded-l-full border-hard bg-neon px-3 py-1 text-[10px] font-bold uppercase">
            {project.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-display text-xl font-extrabold leading-tight sm:text-2xl">{project.name}</h3>
          <span className="text-mono-label max-w-[45%] shrink-0 truncate rounded-full border-hard bg-neon px-3 py-1 text-xs font-bold">
            {project.price}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{project.blurb}</p>

        {project.points.length > 0 && (
          <>
            <span className="text-mono-label mt-4 text-[11px] uppercase text-ink-soft">Highlights</span>
            <ul className="mt-2 space-y-2">
              {project.points.map((point, itemIndex) => (
                <li key={itemIndex} className="flex gap-2 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neon-deep" />
                  {point}
                </li>
              ))}
            </ul>
          </>
        )}

        {project.stack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-mono-label rounded-full border border-ink/20 bg-cream-2 px-2.5 py-1 text-[10px] font-medium uppercase text-ink-soft"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex gap-2 border-t border-dashed border-ink/25 pt-4">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label}: ${project.name}`}
              className={`press-hard border-hard text-mono-label flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2.5 text-xs font-bold uppercase transition ${
                link.label === "Live Demo" ? "bg-ink text-cream" : "bg-cream-2 text-ink"
              }`}
            >
              {link.label === "Live Demo" ? (
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
