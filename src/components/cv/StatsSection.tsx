import type { CVStat } from "@/types/cv";
import { cn } from "@/utils/cn";

interface StatsSectionProps {
  stats: CVStat[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="cv-section" aria-label="Chiffres clés">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="premium-card p-5">
            <p className={cn("text-3xl font-semibold", stat.tone === "developer" ? "text-cyan-600 dark:text-cyan-300" : "text-teal-600 dark:text-teal-300")}>{stat.value}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
