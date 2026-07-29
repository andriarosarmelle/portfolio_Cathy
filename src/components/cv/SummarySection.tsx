import type { CVProfile } from "@/types/cv";

interface SummarySectionProps {
  profile: CVProfile;
}

export function SummarySection({ profile }: SummarySectionProps) {
  return (
    <section className="cv-section grid gap-6 lg:grid-cols-[0.35fr_0.65fr]" aria-label="Profil">
      <div>
        <p className="section-kicker">À propos</p>
        <h2 className="section-title">Relier la technologie aux vrais besoins.</h2>
      </div>
      <p className="max-w-4xl text-lg leading-9 text-slate-600 dark:text-slate-300">{profile.summary}</p>
    </section>
  );
}
