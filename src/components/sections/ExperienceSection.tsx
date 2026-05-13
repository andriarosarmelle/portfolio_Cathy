import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "./TimelineItem";
import type { Experience } from "@/types";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="mb-12 scroll-mt-24 sm:mb-16">
      <SectionHeading
        icon={Briefcase}
        title="Expériences professionnelles"
        subtitle="Parcours"
      />
      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
        {experiences.map((exp, i) => (
          <TimelineItem key={i} experience={exp} />
        ))}
      </div>
    </section>
  );
}
