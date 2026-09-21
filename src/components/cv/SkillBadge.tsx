import { cn } from "@/utils/cn";

interface SkillBadgeProps {
  children: string;
  variant?: "developer" | "health" | "neutral";
}

export function SkillBadge({ children, variant = "neutral" }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center rounded-md border px-3 py-1 text-xs font-medium leading-tight",
        variant === "developer" && "border-cyan-200 bg-cyan-50 text-cyan-800 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-100",
        variant === "health" && "border-teal-200 bg-teal-50 text-teal-800 dark:border-teal-400/30 dark:bg-teal-400/10 dark:text-teal-100",
        variant === "neutral" && "border-slate-200 bg-white text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
      )}
    >
      {children}
    </span>
  );
}
