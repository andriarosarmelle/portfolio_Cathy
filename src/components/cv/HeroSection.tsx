import { ArrowDown, Mail, MapPin, Phone } from "lucide-react";
import { PrintButton } from "@/components/cv/PrintButton";
import { ExperienceConstellation } from "@/components/cv/ExperienceConstellation";
import { useLanguage } from "@/i18n/LanguageContext";
import type { CVProfile, ThemeProfile } from "@/types/cv";

interface HeroSectionProps {
  profile: CVProfile;
  theme: ThemeProfile;
}

export function HeroSection({ profile, theme }: HeroSectionProps) {
  const { t } = useLanguage();
  const title = t.hero.titles[theme];

  return (
    <section className="hero-section cv-section relative grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr]" aria-labelledby="hero-title">
      <div className="hero-copy space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
          <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" /> {t.hero.available}
        </div>
        <div className="space-y-4">
          <p className="hero-name">{profile.name}</p>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">{profile.title}</p>
          <h1 id="hero-title" className="hero-title text-slate-950 dark:text-white">
            {title.a}
            <span className="text-gradient">{title.b}</span>
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{profile.headline}</p>
        </div>
        <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2 dark:text-slate-300">
          <a className="contact-chip" href={`mailto:${profile.email}`}><Mail className="h-4 w-4" aria-hidden="true" />{profile.email}</a>
          <a className="contact-chip" href={`tel:${profile.phone.replace(/\s/g, "")}`}><Phone className="h-4 w-4" aria-hidden="true" />{profile.phone}</a>
          <span className="contact-chip"><MapPin className="h-4 w-4" aria-hidden="true" />{profile.location}</span>
          {profile.links.map((link) => {
            const external = link.href.startsWith("http");
            return (
              <a key={link.label} className="contact-chip" href={link.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
                <link.icon className="h-4 w-4" aria-hidden="true" />{link.label}
              </a>
            );
          })}
        </div>
        <div className="hero-actions">
          <a href="#projects" className="hero-discover no-print inline-flex items-center gap-2 text-sm font-semibold">
            {t.hero.discover} <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
          <PrintButton cvUrl={profile.cvUrl} />
        </div>
      </div>
      <div className="hero-art">
        <ExperienceConstellation />
        <div className="hero-portrait relative z-10 overflow-hidden">
          <img
            src={profile.photo}
            alt={`${t.hero.photoAlt} ${profile.name}`}
            width={800}
            height={1208}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-5 pt-16 text-white">
            <p className="font-semibold">{profile.name}</p>
            <p className="mt-1 text-xs text-white/70">{t.hero.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
