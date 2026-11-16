import { useMemo } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

/** Bandeau défilant des technologies issues des expériences et projets. */
export function TechMarquee() {
  const { t, data } = useLanguage();
  const items = useMemo(() => {
    const all = [...data.experiences, ...data.projects].flatMap((entry) => entry.technologies);
    return Array.from(new Set(all));
  }, [data]);

  return (
    <section className="tech-marquee no-print" aria-label={t.marquee.aria}>
      <ul className="sr-only">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <div className="tech-marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className="tech-marquee-group">
            {items.map((item) => (
              <span key={item} className="tech-marquee-item">{item}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
