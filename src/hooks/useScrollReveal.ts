import { useRef, useState, useEffect } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      setRevealed(true);
      return;
    }
    const onMotionChange = () => {
      if (reducedMotion.matches) setRevealed(true);
    };
    reducedMotion.addEventListener("change", onMotionChange);
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -24px 0px" }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      reducedMotion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return { ref, revealed };
}
