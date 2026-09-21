import { cn } from "@/utils/cn";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
      className={cn("scroll-reveal mb-7 sm:mb-10", revealed ? "revealed" : "")}
      data-reduce-motion="true"
    >
      <div className="mb-2 inline-flex max-w-full items-center gap-2 rounded-full border border-rose-200 bg-rose-50/60 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-rose-500 sm:text-xs sm:tracking-widest">
        <Icon size={13} className="shrink-0" aria-hidden="true" />
        <span>{subtitle || title}</span>
      </div>
      <h2 className="break-words text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <div className="mt-3 h-0.5 w-12 rounded-full bg-rose-300" aria-hidden="true" />
    </div>
  );
}
