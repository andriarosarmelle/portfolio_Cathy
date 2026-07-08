import type { CVProfile } from "@/types/cv";

interface SummarySectionProps {
  profile: CVProfile;
}

export function SummarySection({ profile }: SummarySectionProps) {
  return (
    <section className="cv-section" aria-label="Profil">
      <p className="max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300">{profile.summary}</p>
    </section>
  );
}
