import { Maximize2 } from "lucide-react";
import { SkillBadge } from "@/components/cv/SkillBadge";
import type { CVProject } from "@/types/cv";

interface ProjectCardProps {
  project: CVProject;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const isFeatured = Boolean(project.images?.length);

  return (
    <article className={`project-card group break-inside-avoid overflow-hidden ${isFeatured ? "md:col-span-2 lg:grid lg:grid-cols-[1.35fr_0.65fr]" : ""}`}>
      {project.images?.length ? (
        <div className="relative min-h-72 overflow-hidden border-b border-slate-200 bg-slate-100 sm:min-h-96 lg:border-b-0 lg:border-r dark:border-white/10 dark:bg-slate-800">
          <a href={project.images[0].src} target="_blank" rel="noreferrer" aria-label="Ouvrir la démonstration du tableau de bord en plein écran">
            <img src={project.images[0].src} alt={project.images[0].alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.015]" />
          </a>
          {project.images[1] ? (
            <a href={project.images[1].src} target="_blank" rel="noreferrer" className="absolute bottom-4 right-4 w-40 overflow-hidden rounded-xl border-4 border-white bg-white shadow-2xl transition hover:-translate-y-1 sm:w-56 dark:border-slate-800" aria-label="Ouvrir la démonstration de connexion en plein écran">
              <img src={project.images[1].src} alt={project.images[1].alt} loading="lazy" className="aspect-video w-full object-cover object-top" />
            </a>
          ) : null}
          <span className="absolute left-4 top-4 rounded-full bg-slate-950/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur">Démo fictive</span>
          <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-slate-900 shadow-lg" aria-hidden="true"><Maximize2 className="h-4 w-4" /></span>
        </div>
      ) : null}
      <div className={`p-7 ${isFeatured ? "flex flex-col justify-center sm:p-9" : ""}`}>
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
        {isFeatured ? <p className="mt-6 text-xs font-medium text-slate-400">Cliquez sur une capture pour l’agrandir.</p> : null}
      </div>
    </article>
  );
}
