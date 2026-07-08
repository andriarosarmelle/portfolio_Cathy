import { SkillBadge } from "@/components/cv/SkillBadge";
import type { CVProject } from "@/types/cv";

interface ProjectCardProps {
  project: CVProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="premium-card break-inside-avoid p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-300">{project.category}</p>
      <h3 className="mt-3 text-base font-semibold text-slate-950 dark:text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
      <p className="mt-3 text-sm font-medium leading-6 text-slate-700 dark:text-slate-200">{project.impact}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <SkillBadge key={technology} variant="health">{technology}</SkillBadge>
        ))}
      </div>
    </article>
  );
}
