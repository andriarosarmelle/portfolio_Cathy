import { SkillBadge } from "@/components/cv/SkillBadge";
import type { CVProject } from "@/types/cv";

interface ProjectCardProps {
  project: CVProject;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <article className="project-card group break-inside-avoid p-7">
      <span className="float-right text-sm font-semibold text-slate-300 dark:text-slate-600">0{index + 1}</span>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-300">{project.category}</p>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
      <p className="mt-4 border-l-2 border-cyan-500 pl-4 text-sm font-medium leading-6 text-slate-700 dark:text-slate-200">{project.impact}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <SkillBadge key={technology} variant="health">{technology}</SkillBadge>
        ))}
      </div>
    </article>
  );
}
