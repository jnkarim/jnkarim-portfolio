import { getPortfolioProjects } from "@/lib/github";
import ProjectCard from "./ProjectCard";

export default async function Projects() {
  const projects = await getPortfolioProjects();

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-10 sm:px-6">
      <div className="mb-2 flex items-baseline gap-3">
        <span className="text-mono-label text-xs font-bold uppercase text-neon-deep">03 / Projects</span>
        <h2 className="text-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
          Selected work
        </h2>
      </div>
      <p className="mb-7 max-w-2xl text-sm text-ink-soft sm:text-base">
        {projects.length} projects with live demos, including featured builds and deployed public GitHub repositories.
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
