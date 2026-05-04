import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EducationItem } from "./EducationItem";
import type { Education } from "@/types";

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="mb-16 scroll-mt-24">
      <SectionHeading
        icon={GraduationCap}
        title="Diplômes et formations"
        subtitle="Parcours académique"
      />
      <div className="space-y-5">
        {education.map((edu, i) => (
          <EducationItem key={i} education={edu} />
        ))}
      </div>
    </section>
  );
}
