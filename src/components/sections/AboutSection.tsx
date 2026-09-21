import { Heart, GraduationCap, MapPin, Globe, Award, Layers } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Profile } from "@/types";

interface AboutSectionProps {
  profile: Profile;
}

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="mb-12 scroll-mt-24 sm:mb-16">
      <SectionHeading icon={Heart} title="À propos" subtitle="Qui suis-je" />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 lg:col-span-2">
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
            {profile.about}
          </p>
        </div>
        <aside className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6" aria-label="Informations rapides">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
            En bref
          </h3>
          <ul className="mt-3 space-y-3">
            {[
              { icon: GraduationCap, text: "Master 1 — EMIT" },
              { icon: MapPin, text: "Fianarantsoa, Madagascar" },
              { icon: Globe, text: "Français & Anglais" },
              { icon: Award, text: "7 certifications" },
              { icon: Layers, text: "6 projets majeurs" },
            ].map((item) => (
              <li
                key={item.text}
                className="flex items-start gap-2.5 text-sm text-gray-600"
              >
                <item.icon size={15} className="mt-0.5 shrink-0 text-rose-400" aria-hidden="true" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
