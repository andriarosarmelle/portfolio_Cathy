import { cn } from "@/utils/cn";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Clock } from "lucide-react";
import type { Certification } from "@/types";

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  const { ref, revealed } = useScrollReveal();
  const { title, org, date, status } = certification;

  return (
    <div
      ref={ref}
      className={cn(
        "scroll-reveal rounded-xl border border-gray-100 bg-white p-4 shadow-sm",
        "transition hover:border-rose-100 hover:shadow-md",
        revealed ? "revealed" : ""
      )}
      data-reduce-motion="true"
    >
      <h4 className="break-words text-sm font-bold text-gray-900">{title}</h4>
      <p className="mt-0.5 text-xs text-gray-500">{org}</p>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-2 py-0.5 text-xs text-gray-500">
          <Clock size={10} aria-hidden="true" />
          <time>{date}</time>
        </span>
        {status && (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-600">
            {status}
          </span>
        )}
      </div>
    </div>
  );
}
