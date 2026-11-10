import { Languages, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { CVLanguage, CVProfile } from "@/types/cv";

interface ContactSectionProps {
  profile: CVProfile;
  languages: CVLanguage[];
}

export function ContactSection({ profile, languages }: ContactSectionProps) {
  const { t } = useLanguage();
  const rows = [
    { icon: Mail, label: t.contact.email, value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: t.contact.phone, value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: t.contact.location, value: profile.location },
  ];
  const socials = profile.links.filter((link) => link.href.startsWith("http"));

  return (
    <section className="contact-section cv-section grid gap-4 md:grid-cols-2" aria-label={t.contact.aria}>
      <div className="premium-card p-5">
        <p className="section-kicker">{t.contact.kicker}</p>
        <h2 className="section-title">{t.contact.title}</h2>
        <dl className="space-y-3 text-sm">
          {rows.map((row) => (
            <div key={row.label} className="flex items-start gap-3">
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-cyan-50 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300">
                <row.icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">{row.label}</dt>
                <dd className="mt-0.5 break-words font-medium text-slate-800 dark:text-slate-100">
                  {row.href ? (
                    <a href={row.href} className="transition hover:text-cyan-700 dark:hover:text-cyan-300">{row.value}</a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            </div>
          ))}
        </dl>
        {socials.length ? (
          <div className="mt-5 border-t border-slate-100 pt-4 dark:border-white/10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">{t.contact.socials}</p>
            <div className="flex flex-wrap gap-2">
              {socials.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="contact-chip">
                  <link.icon className="h-4 w-4" aria-hidden="true" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      <div className="premium-card p-5">
        <div className="flex items-center gap-2">
          <Languages className="h-4 w-4 text-teal-600 dark:text-teal-300" aria-hidden="true" />
          <p className="section-kicker mb-0">{t.contact.languagesKicker}</p>
        </div>
        <h2 className="section-title">{t.contact.languagesTitle}</h2>
        <div className="space-y-3">
          {languages.map((language) => (
            <div key={language.name} className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm dark:border-white/10 dark:bg-white/5">
              <span className="font-semibold text-slate-800 dark:text-white">{language.name}</span>
              <span className="text-slate-500 dark:text-slate-300">{language.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
