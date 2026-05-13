import { cn } from "@/utils/cn";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Clock } from "lucide-react";
import type { Experience } from "@/types";

interface TimelineItemProps {
  experience: Experience;
}

export function TimelineItem({ experience }: TimelineItemProps) {
  const { ref, revealed } = useScrollReveal();
  const { role, company, location, period, description, techs, highlights } = experience;

  return (
    <article
      ref={ref}
      className={cn(
        "scroll-reveal relative mb-10 pl-10 timeline-dot border-l border-gray-200 last:mb-0",
        revealed ? "revealed" : ""
      )}
      data-reduce-motion="true"
    >
      <div className="space-y-1.5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="text-lg font-bold text-gray-900">{role}</h3>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 text-sm text-gray-500">
          <span className="font-semibold text-gray-700">{company}</span>
          <span className="text-gray-300" aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-1">
            <MapPin size={12} aria-hidden="true" />
            <span>{location}</span>
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-md bg-rose-50 px-2.5 py-0.5 text-xs font-medium text-rose-600">
          <Clock size={11} aria-hidden="true" />
          <time>{period}</time>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
      {highlights && highlights.length > 0 && (
        <ul className="mt-2 space-y-1" aria-label="Points forts">
          {highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-xs font-medium text-rose-600"
            >
              <span className="mt-0.5 text-rose-400" aria-hidden="true">▸</span>
              {h}
            </li>
          ))}
        </ul>
      )}
      {techs && techs.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies utilisées">
          {techs.map((t) => (
            <span key={t} className="inline-block rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600">
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
