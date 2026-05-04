import { cn } from "@/utils/cn";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ReactElement } from "react";

interface SectionHeadingProps {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ icon: Icon, title, subtitle }: SectionHeadingProps) {
  const { ref, revealed } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={cn("scroll-reveal mb-10", revealed ? "revealed" : "")}
      data-reduce-motion="true"
    >
      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-rose-500">
        <Icon size={13} aria-hidden="true" />
        <span>{subtitle || title}</span>
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
        {title}
      </h2>
      <div className="mt-3 h-0.5 w-12 rounded-full bg-rose-300" aria-hidden="true" />
    </div>
  );
}
