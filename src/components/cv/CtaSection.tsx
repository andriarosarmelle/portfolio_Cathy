import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

/** Bandeau final d'appel à l'action. */
export function CtaSection({ email }: { email: string }) {
  const { t } = useLanguage();
  return (
    <section className="cta-section no-print" aria-labelledby="cta-title">
      <div className="cta-glow" aria-hidden="true" />
      <p className="cta-kicker">{t.cta.kicker}</p>
      <h2 id="cta-title" className="cta-title">{t.cta.title}</h2>
      <p className="cta-text">{t.cta.text}</p>
      <a href={`mailto:${email}`} className="cta-button">
        {t.cta.button} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </section>
  );
}
