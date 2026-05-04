import { Heart, GraduationCap, MapPin, Globe, Award, Layers } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Profile } from "@/types";

interface AboutSectionProps {
  profile: Profile;
}

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="mb-16 scroll-mt-24">
      <SectionHeading icon={Heart} title="À propos" subtitle="Qui suis-je" />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
          <p className="text-base leading-relaxed text-gray-600">
            {profile.about}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            Je combine une solide formation en informatique avec une
            expérience pratique sur des projets réels, du design UI/UX à
            la mise en production. Mon approche allie rigueur technique,
            sens du détail et compréhension des besoins utilisateurs. Je
            suis particulièrement intéressée par les technologies web
            modernes, l'automatisation, le design d'interfaces et les
            solutions SaaS.
          </p>
        </div>
        <aside className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm" aria-label="Informations rapides">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
            En bref
          </h3>
          <ul className="mt-3 space-y-3">
            {[
              { icon: GraduationCap, text: "Master 1 — EMIT" },
              { icon: MapPin, text: "Fianarantsoa, Madagascar" },
              { icon: Globe, text: "Français & Anglais" },
              { icon: Award, text: "7 certifications" },
              { icon: Layers, text: "5 projets majeurs" },
            ].map((item) => (
              <li
                key={item.text}
                className="flex items-center gap-2.5 text-sm text-gray-600"
              >
                <item.icon size={15} className="text-rose-400" aria-hidden="true" />
                {item.text}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
