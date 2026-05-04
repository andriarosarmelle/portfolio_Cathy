import type { Profile, SocialLink, SoftSkill } from "@/types";

interface SidebarProps {
  profile: Profile;
  languages: { name: string; level?: string; detail?: string }[];
  socialLinks: SocialLink[];
  softSkills: SoftSkill[];
}

export function Sidebar({ profile, languages, socialLinks, softSkills }: SidebarProps) {
  const splitName = (name: string) => {
    const parts = name.split(" ");
    return {
      first: parts.slice(0, 2).join(" "),
      rest: parts.slice(2).join(" "),
    };
  };

  const { first: firstName, rest: lastName } = splitName(profile.name);

  return (
    <aside className="lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] lg:w-[340px] lg:flex-shrink-0 lg:self-start" role="complementary" aria-label="Profil">
      <div className="px-5 pt-24 lg:px-0 lg:pt-8">
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm lg:shadow-md">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="h-32 w-32 overflow-hidden rounded-2xl ring-4 ring-rose-100 shadow-lg">
                <img
                  src="/images/profile.jpg"
                  alt={`Photo de profil de ${profile.name}, ${profile.title}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-rose-400 text-white shadow" aria-hidden="true">
                ★
              </div>
            </div>
          </div>

            {/* Name + Title */}
            <div className="mt-5 text-center">
              <p className="text-xl font-bold tracking-tight text-gray-900">
                {firstName}
              </p>
              {lastName && <p className="text-sm text-gray-500">{lastName}</p>}
              <div className="mt-2 inline-block rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
                {profile.title}
              </div>
              <p className="mt-1 text-xs text-rose-500 font-medium">
                {profile.subtitle}
              </p>
            </div>

          {/* Status */}
          <div className="mt-4 rounded-xl border border-gray-100 bg-gray-50/50 p-3 text-center">
            <p className="text-xs font-medium text-gray-500">
              {profile.status}
            </p>
            <p className="mt-0.5 text-xs text-rose-500 font-medium">
              {profile.affiliation}
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-5 space-y-2.5">
            <a
              href={`mailto:${profile.email}`}
              className="flex min-h-[44px] items-center gap-3 rounded-lg border border-gray-100 p-2.5 text-sm text-gray-600 transition hover:border-rose-200 hover:bg-rose-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:rounded"
            >
              <span className="text-rose-400" aria-hidden="true">✉</span>
              <span className="truncate">{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex min-h-[44px] items-center gap-3 rounded-lg border border-gray-100 p-2.5 text-sm text-gray-600 transition hover:border-rose-200 hover:bg-rose-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:rounded"
            >
              <span className="text-rose-400" aria-hidden="true">📞</span>
              {profile.phone}
            </a>
            <div className="flex min-h-[44px] items-center gap-3 rounded-lg border border-gray-100 p-2.5 text-sm text-gray-600">
              <span className="text-rose-400" aria-hidden="true">📍</span>
              {profile.location}
            </div>
            <div className="flex min-h-[44px] items-center gap-3 rounded-lg border border-gray-100 p-2.5 text-sm text-gray-600">
              <span className="text-rose-400" aria-hidden="true">📅</span>
              {profile.age} ans — {profile.nationality}
            </div>
          </div>

          {/* Languages */}
          <div className="mt-5">
            <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-400">
              Langues
            </h4>
            <div className="space-y-1.5">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2 text-sm"
                >
                  <span className="font-medium text-gray-700">{lang.name}</span>
                  <span className="text-xs text-gray-500">{lang.detail || lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <ul className="mt-5 flex justify-center gap-3 list-none" aria-label="Réseaux sociaux">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-gray-200 px-4 py-3 text-xs font-medium text-gray-600 transition hover:border-gray-900 hover:bg-gray-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
                  aria-label={`Visiter ${s.label}`}
                >
                  <s.icon size={14} aria-hidden="true" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Soft Skills Quick */}
          <div className="mt-5">
            <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-400">
              Soft Skills
            </h4>
            <div className="space-y-1.5">
              {softSkills.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-600"
                >
                  <s.icon size={14} className="text-rose-400" aria-hidden="true" />
                  {s.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
