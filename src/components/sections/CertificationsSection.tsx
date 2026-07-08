import { Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificationCard } from "./CertificationCard";
import type { Certification } from "@/types";

interface CertificationsSectionProps {
  certifications: Certification[];
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <section id="certifications" className="mb-12 scroll-mt-24 sm:mb-16">
      <SectionHeading
        icon={Award}
        title="Certifications et formations"
        subtitle="Reconnaissances"
      />
      <div className="grid gap-3 md:grid-cols-2">
        {certifications.map((cert, i) => (
          <CertificationCard key={i} certification={cert} />
        ))}
      </div>
    </section>
  );
}
