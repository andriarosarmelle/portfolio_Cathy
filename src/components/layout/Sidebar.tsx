import { Mail, Phone, MapPin, Calendar, Github, Linkedin, Star } from "lucide-react";
import type { Profile, SocialLink, SoftSkill } from "@/types";

interface SidebarProps {
  profile: Profile;
  languages: { name: string; level?: string; detail?: string }[];
  socialLinks: SocialLink[];
  softSkills: SoftSkill[];
}

export function Sidebar({ profile, languages, socialLinks, softSkills }: SidebarProps) {
  return (
    <aside className="lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] lg:w-[360px] lg:flex-shrink-0 lg:self-start" role="complementary" aria-label="Profil">
      <div className="px-5 pt-24 lg:px-0 lg:pt-8">
        <div className="group relative overflow-hidden rounded-3xl border border-gray-800/30 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-7 shadow-2xl transition-all duration-500 hover:shadow-cyan-500/20">
          {/* Animated background orbs */}
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl transition-all duration-700 group-hover:scale-110 group-hover:bg-cyan-500/25" />
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-rose-500/15 blur-3xl transition-all duration-700 group-hover:scale-110 group-hover:bg-rose-500/25" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative z-20">
            {/* Photo avec halo animé */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Rotating gradient ring */}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-cyan-400 via-rose-400 to-purple-400 opacity-80 blur-lg transition-all duration-500 group-hover:opacity-100 group-hover:blur-xl">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-rose-400 to-purple-400 animate-spin [animation-duration:3s]" />
                </div>
                <div className="relative h-28 w-28 overflow-hidden rounded-2xl ring-4 ring-gray-800 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                  <img
                    src="/images/profile.jpg"
                    alt={`Photo de ${profile.name}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Status indicator */}
                <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 ring-2 ring-gray-900 shadow-lg">
                  <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                </div>
              </div>
            </div>

            {/* Titre only (nom retiré – déjà dans Hero) */}
            <div className="mt-5 text-center">
              <div className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-cyan-300 border border-cyan-500/40 shadow-lg shadow-cyan-500/20">
                <Star size={10} fill="currentColor" />
                {profile.title}
              </div>
              <p className="mt-2 text-sm font-semibold text-rose-300 tracking-wide">{profile.subtitle}</p>
            </div>

            {/* Status card */}
            <div className="mt-4 rounded-xl border border-gray-700/50 bg-gray-800/40 p-3.5 text-center backdrop-blur-md transition-all duration-300 group-hover:border-cyan-500/50 group-hover:bg-cyan-900/20">
              <p className="text-xs font-semibold text-gray-200">{profile.status}</p>
              <p className="mt-0.5 text-xs text-rose-300">{profile.affiliation}</p>
            </div>

            {/* Contacts – grid horizontale futuriste */}
            <div className="mt-5 grid grid-cols-2 gap-2">
              <a href={`mailto:${profile.email}`} className="group flex min-h-[42px] items-center gap-2 rounded-lg border border-gray-700/50 bg-gray-800/40 p-2.5 text-[11px] text-gray-300 transition-all hover:border-cyan-500/60 hover:bg-cyan-900/30 hover:text-cyan-100 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02]">
                <Mail size={13} className="text-cyan-400 transition-all group-hover:scale-110 group-hover:rotate-6" />
                <span className="truncate">{profile.email}</span>
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="group flex min-h-[42px] items-center gap-2 rounded-lg border border-gray-700/50 bg-gray-800/40 p-2.5 text-[11px] text-gray-300 transition-all hover:border-rose-500/60 hover:bg-rose-900/30 hover:text-rose-100 hover:shadow-lg hover:shadow-rose-500/30 hover:scale-[1.02]">
                <Phone size={13} className="text-rose-400 transition-all group-hover:scale-110 group-hover:rotate-6" />
                <span>{profile.phone}</span>
              </a>
              <div className="group flex min-h-[42px] items-center gap-2 rounded-lg border border-gray-700/50 bg-gray-800/40 p-2.5 text-[11px] text-gray-300">
                <MapPin size={13} className="text-purple-400 transition-all group-hover:scale-110" />
                <span className="truncate">{profile.location}</span>
              </div>
              <div className="group flex min-h-[42px] items-center gap-2 rounded-lg border border-gray-700/50 bg-gray-800/40 p-2.5 text-[11px] text-gray-300">
                <Calendar size={13} className="text-amber-400 transition-all group-hover:scale-110" />
                <span>{profile.age} ans — {profile.nationality}</span>
              </div>
            </div>

            {/* Langues – cards compactes */}
            <div className="mt-5">
              <h4 className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400/90">Langues</h4>
              <div className="grid grid-cols-2 gap-1.5">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="group flex items-center justify-between rounded-lg border border-gray-700/40 bg-gray-800/30 px-2.5 py-2 text-[11px] transition-all hover:border-cyan-500/50 hover:bg-cyan-900/20"
                  >
                    <span className="font-semibold text-gray-200">{lang.name}</span>
                    <span className="text-[10px] text-cyan-300/80">{lang.detail || lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills – pills futuristes */}
            <div className="mt-5">
              <h4 className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-rose-400/90">Soft Skills</h4>
              <div className="flex flex-wrap gap-1.5">
                {softSkills.map((s) => (
                  <div
                    key={s.label}
                    className="group flex items-center gap-1 rounded-full border border-rose-500/40 bg-rose-900/30 px-2.5 py-1 text-[10px] font-medium text-rose-200 transition-all hover:border-rose-400 hover:bg-rose-900/50 hover:shadow-lg hover:shadow-rose-500/30 hover:scale-105"
                  >
                    <s.icon size={10} className="text-rose-400 transition-transform group-hover:rotate-12" />
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Réseaux – boutons horizontaux */}
            <div className="mt-5">
              <h4 className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400/90">Réseaux</h4>
              <div className="flex gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-1 flex-col items-center justify-center gap-1 rounded-lg border border-gray-700/50 bg-gray-800/40 px-3 py-2.5 text-[10px] font-semibold text-gray-300 transition-all hover:scale-105 hover:border-purple-500/60 hover:bg-purple-900/30 hover:text-purple-100 hover:shadow-lg hover:shadow-purple-500/30"
                    aria-label={`Visiter ${s.label}`}
                  >
                    {s.label === "GitHub" ? (
                      <GithubIcon size={14} className="transition-all group-hover:rotate-6" />
                    ) : (
                      <LinkedInIcon size={14} className="transition-all group-hover:rotate-6" />
                    )}
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom cyber line */}
            <div className="mt-5 flex items-center gap-1 opacity-60">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              <div className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse" />
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
