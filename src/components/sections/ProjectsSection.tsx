import { Code2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/types";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="mb-16 scroll-mt-24">
      <SectionHeading
        icon={Code2}
        title="Projets"
        subtitle="Réalisations"
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}
