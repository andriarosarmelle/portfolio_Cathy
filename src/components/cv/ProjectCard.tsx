import { SkillBadge } from "@/components/cv/SkillBadge";
import type { CVProject } from "@/types/cv";

interface ProjectCardProps {
  project: CVProject;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <article className="project-card group break-inside-avoid overflow-hidden">
      {project.images?.length ? (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-800">
          <img src={project.images[0].src} alt={project.images[0].alt} loading="lazy" className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]" />
          {project.images[1] ? (
            <div className="absolute bottom-3 right-3 w-32 overflow-hidden rounded-lg border-2 border-white bg-white shadow-xl sm:w-40 dark:border-slate-800">
              <img src={project.images[1].src} alt={project.images[1].alt} loading="lazy" className="aspect-video w-full object-cover object-top" />
            </div>
          ) : null}
          <span className="absolute left-3 top-3 rounded-full bg-slate-950/85 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">Démo fictive</span>
        </div>
      ) : null}
      <div className="p-7">
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
      </div>
    </article>
  );
}
