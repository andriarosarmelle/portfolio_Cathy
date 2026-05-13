import { Palette, Code2, Cpu, Layers } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import type { TechnicalSkills } from "@/types";

interface SkillsSectionProps {
  technicalSkills: TechnicalSkills;
}

const skillGroups = [
  { title: "Front-end", key: "frontend" as const, icon: Code2 },
  { title: "Back-end", key: "backend" as const, icon: Cpu },
  {
    title: "Automatisation & Outils",
    key: "tools" as const,
    icon: Layers,
  },
  {
    title: "Design Graphique",
    key: "design" as const,
    icon: Palette,
  },
];

export function SkillsSection({ technicalSkills }: SkillsSectionProps) {
  return (
    <section id="skills" className="mb-16 scroll-mt-24">
      <SectionHeading
        icon={Layers}
        title="Compétences techniques"
        subtitle="Stack technique"
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.key}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <div className="mb-3 flex items-center gap-2">
              <group.icon size={16} className="text-rose-400" aria-hidden="true" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                {group.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technicalSkills[group.key].map((s) => (
                <TechBadge key={s} label={s} />
              ))}
            </div>
          </div>
        ))}
        {/* UI/UX full width */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="mb-3 flex items-center gap-2">
            <Palette size={16} className="text-rose-400" aria-hidden="true" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
              UI/UX Design
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {technicalSkills.ux.map((s) => (
              <TechBadge key={s} label={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
