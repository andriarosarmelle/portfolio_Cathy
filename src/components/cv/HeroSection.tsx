import { Mail, MapPin, Phone } from "lucide-react";
import { PrintButton } from "@/components/cv/PrintButton";
import type { CVProfile } from "@/types/cv";

interface HeroSectionProps {
  profile: CVProfile;
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="cv-section grid gap-8 pt-6 lg:grid-cols-[1fr_220px]" aria-labelledby="hero-title">
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 id="hero-title" className="max-w-4xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl dark:text-white">{profile.name}</h1>
          <p className="max-w-3xl text-xl font-medium leading-8 text-slate-700 dark:text-slate-200">{profile.title}</p>
          <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">{profile.headline}</p>
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
      </div>
      <div className="flex items-start justify-center lg:justify-end">
        <div className="relative h-52 w-52 overflow-hidden rounded-lg border border-white bg-slate-100 shadow-xl shadow-cyan-900/10 dark:border-white/10 dark:bg-slate-800">
          <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
