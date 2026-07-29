import { useMemo, useState } from "react";
import { ArrowUpRight, HeartPulse, MonitorSmartphone, Moon, Sun } from "lucide-react";
import { ContactSection } from "@/components/cv/ContactSection";
import { ExperienceCard } from "@/components/cv/ExperienceCard";
import { HeroSection } from "@/components/cv/HeroSection";
import { ProjectCard } from "@/components/cv/ProjectCard";
import { SkillBadge } from "@/components/cv/SkillBadge";
import { StatsSection } from "@/components/cv/StatsSection";
import { SummarySection } from "@/components/cv/SummarySection";
import { TimelineSection } from "@/components/cv/TimelineSection";
import { cvData } from "@/data/cvData";
import type { ThemeProfile } from "@/types/cv";
import { cn } from "@/utils/cn";

const profileThemes = {
  developer: { label: "Développeuse Web & Mobile", icon: MonitorSmartphone, accent: "from-cyan-500 to-blue-600" },
  health: { label: "Consultante SI / Santé numérique", icon: HeartPulse, accent: "from-teal-500 to-emerald-600" },
} satisfies Record<ThemeProfile, { label: string; icon: typeof MonitorSmartphone; accent: string }>;

export function CVPage() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [theme, setTheme] = useState<ThemeProfile>("developer");
  const activeTheme = profileThemes[theme];
  const themeEntries = useMemo(() => Object.entries(profileThemes) as Array<[ThemeProfile, typeof activeTheme]>, [activeTheme]);

  return (
    <div className={cn(mode === "dark" && "dark")}>
      <div className="min-h-screen bg-[#f8fafc] text-slate-950 transition-colors dark:bg-slate-950 dark:text-white">
        <div className="no-print sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-xs font-bold text-white dark:bg-white dark:text-slate-950">NC</span>
              <span className="hidden sm:inline">Nomeniavo Cathy</span>
            </a>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex rounded-lg border border-slate-200 bg-slate-100 p-1 dark:border-white/10 dark:bg-white/10" aria-label="Choisir le profil">
                {themeEntries.map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setTheme(key)}
                    className={cn(
                      "inline-flex h-9 items-center gap-2 rounded-md px-3 text-xs font-semibold transition",
                      theme === key
                        ? "bg-white text-slate-950 shadow-sm dark:bg-slate-900 dark:text-white"
                        : "text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    )}
                    aria-pressed={theme === key}
                  >
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </button>
                ))}
              </div>
              <a href={`mailto:${cvData.profile.email}`} className="primary-button hidden sm:inline-flex">
                Contact <ArrowUpRight className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={() => setMode((value) => (value === "light" ? "dark" : "light"))}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:text-cyan-200"
                aria-label="Changer le mode clair ou sombre"
              >
                {mode === "light" ? <Moon className="h-4 w-4" aria-hidden="true" /> : <Sun className="h-4 w-4" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        <main id="top" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-10">
          <div className="cv-shell relative overflow-hidden rounded-[2rem] bg-white p-5 shadow-2xl shadow-slate-900/[0.06] ring-1 ring-slate-200/80 sm:p-8 lg:p-12 dark:bg-slate-900 dark:ring-white/10">
            <div className={cn("pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r", activeTheme.accent)} />
            <HeroSection profile={cvData.profile} />
            <div id="about" className="scroll-mt-24"><SummarySection profile={cvData.profile} /></div>
            <StatsSection stats={cvData.stats} />

            <section id="experience" className="cv-section scroll-mt-24" aria-labelledby="experience-title">
              <p className="section-kicker">Parcours</p>
              <h2 id="experience-title" className="section-title">Expériences</h2>
              <div className="space-y-4">
                {cvData.experiences.map((experience) => <ExperienceCard key={`${experience.role}-${experience.period}`} experience={experience} />)}
              </div>
            </section>

            <section id="projects" className="cv-section" aria-labelledby="projects-title">
              <p className="section-kicker">Réalisations</p>
              <h2 id="projects-title" className="section-title">Projets sélectionnés</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {cvData.projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
              </div>
            </section>

            <section id="skills" className="cv-section scroll-mt-24" aria-labelledby="skills-title">
              <p className="section-kicker">Expertise</p>
              <h2 id="skills-title" className="section-title">Compétences</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {cvData.skills.map((category, index) => (
                  <article key={category.title} className="premium-card break-inside-avoid p-5">
                    <h3 className="text-sm font-semibold text-slate-950 dark:text-white">{category.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.items.map((item) => <SkillBadge key={item} variant={index % 2 === 0 ? "developer" : "health"}>{item}</SkillBadge>)}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <div className="grid gap-6 lg:grid-cols-2">
              <TimelineSection title="Formations" kicker="Formation" items={cvData.education} />
              <TimelineSection title="Certifications" kicker="Certifications" items={cvData.certifications} />
            </div>

            <ContactSection profile={cvData.profile} languages={cvData.languages} />
          </div>
        </main>
      </div>
    </div>
  );
}
