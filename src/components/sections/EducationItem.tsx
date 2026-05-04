import { cn } from "@/utils/cn";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Clock } from "lucide-react";
import type { Education } from "@/types";

interface EducationItemProps {
  education: Education;
}

export function EducationItem({ education }: EducationItemProps) {
  const { ref, revealed } = useScrollReveal();
  const { degree, school, place, period, detail } = education;

  return (
    <div
      ref={ref}
      className={cn(
        "scroll-reveal rounded-2xl border border-gray-100 bg-white p-6 shadow-sm",
        revealed ? "revealed" : ""
      )}
      data-reduce-motion="true"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{degree}</h3>
          <p className="text-sm font-medium text-rose-500">{school}</p>
          <p className="text-xs text-gray-400">{place}</p>
          {detail && (
            <p className="mt-1 text-xs text-gray-500">{detail}</p>
          )}
        </div>
        <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-500">
          <Clock size={11} aria-hidden="true" />
          <time dateTime={period}>{period}</time>
        </span>
      </div>
    </div>
  );
}
