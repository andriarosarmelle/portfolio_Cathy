import { cn } from "@/utils/cn";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { Project } from "@/types";
import { TechBadge } from "@/components/ui/TechBadge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { ref, revealed } = useScrollReveal();
  const { title, context, description, results, techs } = project;

  return (
    <article
      ref={ref}
      className={cn(
        "scroll-reveal rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-rose-100 hover:shadow-md sm:p-6",
        revealed ? "revealed" : ""
      )}
      data-reduce-motion="true"
    >
      <header>
        <div className="mb-1 break-words text-xs font-semibold uppercase tracking-wider text-rose-500">
          {context}
        </div>
        <h3 className="break-words text-lg font-bold text-gray-900 sm:text-xl">{title}</h3>
      </header>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
      <div className="mt-3 rounded-lg border border-rose-100 bg-rose-50/50 px-3 py-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-rose-500">
          Résultats
        </span>
        <p className="mt-0.5 text-sm text-gray-700">{results}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
        {techs.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>
    </article>
  );
}
