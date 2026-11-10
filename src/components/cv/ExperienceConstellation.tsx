import { useState, type CSSProperties } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export function ExperienceConstellation() {
  const { t, data } = useLanguage();
  const [active, setActive] = useState<number | null>(null);
  const experiences = [...data.experiences].sort((a, b) => b.startDate.localeCompare(a.startDate));
  const focused = active === null ? null : experiences[active];

  return (
    <nav className="experience-constellation no-print" aria-label={t.hero.constellationTitle}>
      <p className="constellation-heading">{t.hero.constellationTitle}</p>
      <div className="constellation-sky">
        <div className="constellation-sun" aria-hidden="true"><span /></div>
        {experiences.map((experience, index) => {
          const diameter = 46 + index * (54 / Math.max(experiences.length - 1, 1));
          const duration = 26 + index * 14;
          const phase = (360 / experiences.length) * index + 40;
          const style = {
            inset: `${(100 - diameter) / 2}%`,
            "--orbit-duration": `${duration}s`,
            "--phase": `${phase}deg`,
            "--phase-delay": `${-(duration * phase) / 360}s`,
          } as CSSProperties;
          return (
            <div key={experience.id} className="constellation-orbit" style={style}>
              <a
                href={`#experience-${experience.id}`}
                className="constellation-star"
                aria-label={`${t.hero.constellationLink} : ${experience.role}, ${experience.organization}`}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(index)}
                onBlur={() => setActive(null)}
              >
                <span className="constellation-star-glow" aria-hidden="true" />
              </a>
            </div>
          );
        })}
      </div>
      <p className="constellation-caption" aria-hidden="true">
        {focused ? (
          <>
            <strong>{focused.role}</strong>
            <span>{focused.organization}</span>
          </>
        ) : (
          t.hero.constellationHint
        )}
      </p>
    </nav>
  );
}
