import { ArrowDown, Mail, MapPin, Phone } from "lucide-react";
import { PrintButton } from "@/components/cv/PrintButton";
import type { CVProfile } from "@/types/cv";

interface HeroSectionProps {
  profile: CVProfile;
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="cv-section relative grid min-h-[620px] items-center gap-12 overflow-hidden pt-8 lg:grid-cols-[1fr_320px]" aria-labelledby="hero-title">
      <div className="hero-orb pointer-events-none absolute -right-28 top-8 h-80 w-80 rounded-full blur-3xl" />
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> Disponible pour de nouvelles opportunités
        </div>
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">{profile.title}</p>
          <h1 id="hero-title" className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-7xl dark:text-white">Des solutions numériques <span className="text-gradient">utiles et humaines.</span></h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{profile.headline}</p>
        </div>
        <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2 dark:text-slate-300">
          <a className="contact-chip" href={`mailto:${profile.email}`}><Mail className="h-4 w-4" aria-hidden="true" />{profile.email}</a>
          <a className="contact-chip" href={`tel:${profile.phone.replace(/\s/g, "")}`}><Phone className="h-4 w-4" aria-hidden="true" />{profile.phone}</a>
          <span className="contact-chip"><MapPin className="h-4 w-4" aria-hidden="true" />{profile.location}</span>
          {profile.links.map((link) => (
            <a key={link.label} className="contact-chip" href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <link.icon className="h-4 w-4" aria-hidden="true" />{link.label}
            </a>
          ))}
        </div>
        <PrintButton cvUrl={profile.cvUrl} />
        <a href="#projects" className="no-print inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 dark:text-cyan-300">Découvrir mes réalisations <ArrowDown className="h-4 w-4" /></a>
      </div>
      <div className="flex items-start justify-center lg:justify-end">
        <div className="relative z-10 h-80 w-72 overflow-hidden rounded-[2rem] border-4 border-white bg-slate-100 shadow-2xl shadow-cyan-900/20 dark:border-white/10 dark:bg-slate-800">
          <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-5 pt-16 text-white">
            <p className="font-semibold">{profile.name}</p>
            <p className="mt-1 text-xs text-white/70">Fianarantsoa · Madagascar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
