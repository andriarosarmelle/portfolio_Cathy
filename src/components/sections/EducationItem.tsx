import { cn } from "@/utils/cn";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Clock, GraduationCap, MapPin, Building2 } from "lucide-react";
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
        "group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-rose-200 hover:shadow-lg sm:p-6 sm:hover:-translate-y-1",
        revealed ? "revealed" : ""
      )}
      data-reduce-motion="true"
    >
      {/* Background gradient decoration */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-rose-100/50 to-rose-200/30 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-60" />
      <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-gradient-to-br from-rose-50/50 to-transparent blur-3xl transition-all duration-500 group-hover:scale-125" />

      <div className="relative z-10">
        {/* Header: Icon + Period badge */}
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex min-w-0 items-start gap-3 sm:gap-4">
            {/* Icon container with glow effect */}
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-rose-400 opacity-20 blur-md transition-all duration-300 group-hover:opacity-40" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-100 to-rose-200 text-rose-600 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md sm:h-12 sm:w-12">
                <GraduationCap size={22} strokeWidth={1.5} aria-hidden="true" />
              </div>
            </div>

            {/* Degree & School */}
            <div className="min-w-0">
              <h3 className="break-words text-base font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-rose-700 sm:text-lg">
                {degree}
              </h3>
              <div className="mt-1 flex items-start gap-1.5 text-sm font-medium text-rose-600">
                <Building2 size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>{school}</span>
              </div>
              <div className="mt-0.5 flex items-start gap-1.5 text-xs text-gray-400">
                <MapPin size={12} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>{place}</span>
              </div>
            </div>
          </div>

          {/* Period badge */}
          <div className="flex flex-col items-start gap-1 sm:items-end">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm transition-all duration-300 group-hover:from-rose-50 group-hover:to-rose-100 group-hover:text-rose-700 group-hover:shadow">
              <Clock size={11} aria-hidden="true" />
              <time>{period}</time>
            </span>
          </div>
        </div>

        {/* Detail/Description */}
        {detail && (
          <div className="relative rounded-lg border-l-4 border-rose-200 bg-rose-50/50 p-3 transition-all duration-300 group-hover:border-rose-300 group-hover:bg-rose-50/70">
            <p className="text-xs leading-relaxed text-gray-600">{detail}</p>
          </div>
        )}

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r from-transparent via-rose-200 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </div>
  );
}
