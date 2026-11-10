import type { HTMLAttributes, ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/utils/cn";

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/** Fait apparaître son contenu en douceur à l'entrée dans la fenêtre (désactivé si `prefers-reduced-motion`). */
export function ScrollReveal({ children, className, ...props }: ScrollRevealProps) {
  const { ref, revealed } = useScrollReveal();
  return (
    <div ref={ref} className={cn("scroll-reveal", revealed && "revealed", className)} {...props}>
      {children}
    </div>
  );
}
