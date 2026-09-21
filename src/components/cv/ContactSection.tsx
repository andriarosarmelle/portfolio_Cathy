import { Languages } from "lucide-react";
import type { CVLanguage, CVProfile } from "@/types/cv";

interface ContactSectionProps {
  profile: CVProfile;
  languages: CVLanguage[];
}

export function ContactSection({ profile, languages }: ContactSectionProps) {
  return (
    <section className="cv-section grid gap-4 md:grid-cols-2" aria-label="Contact et langues">
      <div className="premium-card p-5">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Coordonnées</h2>
        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <p>{profile.location}</p>
          <p>{profile.email}</p>
          <p>{profile.phone}</p>
        </div>
      </div>
      <div className="premium-card p-5">
        <div className="flex items-center gap-2">
          <Languages className="h-4 w-4 text-teal-600 dark:text-teal-300" aria-hidden="true" />
          <p className="section-kicker mb-0">Langues</p>
        </div>
        <h2 className="section-title">Communication</h2>
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
