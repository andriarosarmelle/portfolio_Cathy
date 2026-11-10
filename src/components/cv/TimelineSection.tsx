import type { CVTimelineItem } from "@/types/cv";

interface TimelineSectionProps {
  id: string;
  title: string;
  kicker: string;
  items: CVTimelineItem[];
}

export function TimelineSection({ id, title, kicker, items }: TimelineSectionProps) {
  const titleId = `${id}-title`;
  return (
    <section id={id} className="timeline-section cv-section scroll-mt-24 break-inside-avoid" aria-labelledby={titleId}>
      <p className="section-kicker">{kicker}</p>
      <h2 id={titleId} className="section-title">{title}</h2>
      <div className="space-y-4 border-l border-slate-200 pl-5 dark:border-white/10">
        {items.map((item) => (
          <article key={`${item.title}-${item.period}`} className="relative">
            <span className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-cyan-500 shadow-sm dark:border-slate-950" aria-hidden="true" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-sm font-semibold text-slate-950 dark:text-white">{item.title}</h3>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{item.period}</p>
            </div>
            <p className="mt-1 text-sm text-cyan-700 dark:text-cyan-200">{item.organization}</p>
            {item.detail ? <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.detail}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
