import { cn } from "@/utils/cn";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ReactNode, HTMLAttributes } from "react";

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function ScrollReveal({ children, className, ...props }: ScrollRevealProps) {
  const { ref, revealed } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={cn("scroll-reveal", className, revealed ? "revealed" : "")}
      data-reduce-motion="true"
      {...props}
    >
      {children}
    </div>
  );
}
