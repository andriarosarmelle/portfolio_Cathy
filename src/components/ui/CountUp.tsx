import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  duration?: number;
}

/** Anime la partie numérique d'une valeur ("+200", "70%") à son entrée à l'écran. Le texte non numérique reste tel quel. */
export function CountUp({ value, duration = 1400 }: CountUpProps) {
  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  const target = match ? Number(match[2]) : 0;
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!match || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    setCurrent(0);
    let frame = 0;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        setCurrent(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  if (!match) return <>{value}</>;
  return (
    <span ref={ref}>
      <span aria-hidden="true">{match[1]}{current}{match[3]}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
