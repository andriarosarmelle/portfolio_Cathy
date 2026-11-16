import type { CVStat } from "@/types/cv";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/utils/cn";
import { CountUp } from "@/components/ui/CountUp";

interface StatsSectionProps {
  stats: CVStat[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  const { t } = useLanguage();
  return (
    <section className="stats-section cv-section" aria-label={t.stats.aria}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="premium-card p-5">
            <p className={cn("text-3xl font-semibold", stat.tone === "developer" ? "text-cyan-600 dark:text-cyan-300" : "text-teal-600 dark:text-teal-300")}><CountUp value={stat.value} /></p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
