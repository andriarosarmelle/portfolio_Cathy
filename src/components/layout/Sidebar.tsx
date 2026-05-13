import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import type { Profile, SocialLink, SoftSkill } from "@/types";

interface SidebarProps {
  profile: Profile;
  languages: { name: string; level?: string; detail?: string }[];
  socialLinks: SocialLink[];
  softSkills: SoftSkill[];
}

export function Sidebar({ profile, languages, socialLinks, softSkills }: SidebarProps) {
  return (
    <aside className="order-2 w-full lg:order-1 lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] lg:w-[340px] lg:flex-shrink-0 lg:self-start lg:overflow-y-auto" role="complementary" aria-label="Profil">
      <div className="px-4 pb-12 sm:px-6 lg:px-0 lg:pb-0 lg:pt-8">
        <div className="min-w-0 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="h-24 w-24 overflow-hidden rounded-xl ring-4 ring-rose-100">
              <img
                src="/images/profile-thumb.jpg"
                alt={profile.name}
                width={96}
                height={96}
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Titre (pas de nom – dans Hero) */}
          <div className="mt-4 text-center">
            <h2 className="break-words text-base font-bold text-gray-900">{profile.title}</h2>
            <p className="mt-1 break-words text-sm text-rose-600">{profile.subtitle}</p>
          </div>

          {/* Status */}
          <div className="mt-3 rounded-lg bg-gray-50 p-2.5 text-center">
            <p className="text-xs text-gray-600">{profile.status}</p>
            <p className="mt-1 text-[11px] leading-snug text-gray-500">{profile.affiliation}</p>
          </div>

          {/* Contacts grid 2×2 */}
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <a href={`mailto:${profile.email}`} className="flex min-w-0 items-center gap-2 rounded-md border border-gray-200 p-2 text-xs text-gray-700 hover:bg-rose-50 hover:border-rose-200">
              <Mail size={13} className="shrink-0 text-rose-500" />
              <span className="truncate">{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex min-w-0 items-center gap-2 rounded-md border border-gray-200 p-2 text-xs text-gray-700 hover:bg-rose-50 hover:border-rose-200">
              <Phone size={13} className="shrink-0 text-rose-500" />
              <span>{profile.phone}</span>
            </a>
            <div className="flex min-w-0 items-center gap-2 rounded-md border border-gray-200 p-2 text-xs text-gray-700">
              <MapPin size={13} className="shrink-0 text-rose-500" />
              <span className="truncate">{profile.location}</span>
            </div>
            <div className="flex min-w-0 items-center gap-2 rounded-md border border-gray-200 p-2 text-xs text-gray-700">
              <Calendar size={13} className="shrink-0 text-rose-500" />
              <span>{profile.age} ans</span>
            </div>
          </div>

          {/* Langues */}
          <div className="mt-4">
            <h4 className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400">Langues</h4>
            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {languages.map((lang) => (
                <div key={lang.name} className="flex min-w-0 items-center justify-between gap-2 rounded bg-gray-50 px-2 py-1.5 text-[11px]">
                  <span className="font-medium text-gray-700">{lang.name}</span>
                  <span className="shrink-0 text-[10px] text-gray-500">{lang.detail || lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mt-4">
            <h4 className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400">Soft Skills</h4>
            <div className="flex flex-wrap gap-1">
              {softSkills.map((s) => (
                <div key={s.label} className="flex max-w-full items-center gap-1 rounded-full bg-rose-50 px-2 py-0.5 text-[10px] text-rose-600">
                  <s.icon size={9} className="shrink-0" aria-hidden="true" />
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="mt-4">
            <h4 className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400">Réseaux</h4>
            <div className="flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[36px] flex-1 items-center justify-center gap-1 rounded-md border border-gray-200 px-2 py-1.5 text-[10px] font-medium text-gray-700 hover:bg-gray-900 hover:text-white"
                  aria-label={`Visiter ${s.label}`}
                >
                  {s.label === "GitHub" ? <GithubIcon size={12} /> : <LinkedInIcon size={12} />}
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
