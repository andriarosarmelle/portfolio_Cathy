import { SkipLink } from "@/components/ui/SkipLink";
import { MobileNav } from "@/components/layout/MobileNav";
import { Sidebar } from "@/components/layout/Sidebar";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactForm } from "@/components/layout/ContactForm";
import {
  profile,
  languages,
  socialLinks,
  education,
  experiences,
  projects,
  technicalSkills,
  softSkills,
  certifications,
} from "@/data";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-gray-800">
      {/* Skip to main content for accessibility */}
      <SkipLink />

      {/* Mobile navigation */}
      <MobileNav />

      {/* Main layout */}
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row lg:gap-10 lg:px-8 xl:px-12">
        {/* Sidebar (aside) */}
        <Sidebar
          profile={profile}
          languages={languages}
          socialLinks={socialLinks}
          softSkills={softSkills}
        />

        {/* Main content */}
        <main id="main-content" className="order-1 flex-1 px-5 pb-16 pt-24 lg:order-2 lg:px-0 lg:pb-24 lg:pt-8">
          <Hero
            name={profile.name}
            title={profile.title}
            subtitle={profile.subtitle}
            tagline={profile.tagline}
            cvUrl={profile.cvUrl}
          />

          <AboutSection profile={profile} />

          <EducationSection education={education} />

          <ExperienceSection experiences={experiences} />

          <ProjectsSection projects={projects} />

          <SkillsSection technicalSkills={technicalSkills} />

          <CertificationsSection certifications={certifications} />

          <ContactForm
            email={profile.email}
            phone={profile.phone}
            address={profile.address}
            socialLinks={socialLinks}
            cvUrl={profile.cvUrl}
          />

          {/* Footer */}
          <footer className="no-print mt-20 border-t border-gray-100 pt-8 text-center" role="contentinfo" aria-label="Pied de page">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} {profile.name} — Tous droits réservés.
            </p>
            <p className="mt-1 text-xs text-gray-300">
              Développé avec passion — {profile.name.split(" ").pop()}
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
