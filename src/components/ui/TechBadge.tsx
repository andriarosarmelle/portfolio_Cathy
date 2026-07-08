import { cn } from "@/utils/cn";

interface TechBadgeProps {
  label: string;
}

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block max-w-full break-words rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm",
        "transition hover:border-rose-200 hover:text-rose-600"
      )}
    >
      {label}
    </span>
  );
}
