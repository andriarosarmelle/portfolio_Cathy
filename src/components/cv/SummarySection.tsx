import type { CVProfile } from "@/types/cv";
import { useLanguage } from "@/i18n/LanguageContext";

interface SummarySectionProps {
  profile: CVProfile;
}

export function SummarySection({ profile }: SummarySectionProps) {
  const { t } = useLanguage();
  return (
    <section className="summary-section cv-section grid gap-6 lg:grid-cols-[0.35fr_0.65fr]" aria-label={t.summary.aria}>
      <div>
        <p className="section-kicker">{t.summary.kicker}</p>
        <h2 className="section-title">{t.summary.title}</h2>
      </div>
      <p className="max-w-4xl text-lg leading-9 text-slate-600 dark:text-slate-300">{profile.summary}</p>
    </section>
  );
}
