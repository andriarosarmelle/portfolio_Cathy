import { SkillBadge } from "@/components/cv/SkillBadge";
import type { CVExperience } from "@/types/cv";

interface ExperienceCardProps {
  experience: CVExperience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="premium-card break-inside-avoid p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{experience.role}</h3>
          <p className="mt-1 text-sm font-medium text-cyan-700 dark:text-cyan-200">{experience.organization}</p>
        </div>
        <p className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500 dark:border-white/10 dark:text-slate-300">{experience.period}</p>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{experience.context}</p>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
        {experience.missions.map((mission) => (
          <li key={mission} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
            <span>{mission}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 rounded-lg bg-slate-50 p-4 text-sm font-medium leading-6 text-slate-700 dark:bg-white/5 dark:text-slate-200">Impact : {experience.impact}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {experience.technologies.map((technology) => (
          <SkillBadge key={technology} variant="developer">{technology}</SkillBadge>
        ))}
      </div>
    </article>
  );
}
