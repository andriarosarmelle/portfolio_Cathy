import { cn } from "@/utils/cn";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Clock, GraduationCap } from "lucide-react";
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
        "group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-rose-200",
        revealed ? "revealed" : ""
      )}
      data-reduce-motion="true"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/0 to-rose-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10">
        <div className="flex flex-wrap items-start justify-between gap-3">
          {/* Left side: degree & school with icon */}
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-600 transition-transform duration-300 group-hover:scale-110">
              <GraduationCap size={20} aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-rose-600">
                {degree}
              </h3>
              <p className="text-sm font-medium text-rose-500">{school}</p>
              <p className="text-xs text-gray-400">{place}</p>
              {detail && (
                <p className="mt-1 text-xs leading-relaxed text-gray-500">{detail}</p>
              )}
            </div>
          </div>

          {/* Right side: period badge */}
          <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors duration-300 group-hover:bg-rose-50 group-hover:text-rose-600">
            <Clock size={11} aria-hidden="true" />
            <time dateTime={period}>{period}</time>
          </span>
        </div>
      </div>
    </div>
  );
}
