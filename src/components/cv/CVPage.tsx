import { useMemo, useState } from "react";
import { ArrowUp, ArrowUpRight, HeartPulse, MonitorSmartphone, Moon, Sun } from "lucide-react";
import { ContactSection } from "@/components/cv/ContactSection";
import { ExperienceCard } from "@/components/cv/ExperienceCard";
import { HeroSection } from "@/components/cv/HeroSection";
import { MembershipDemoSection } from "@/components/cv/MembershipDemoSection";
import { MadActionDemoSection } from "@/components/cv/MadActionDemoSection";
import { OneHealthDemoSection } from "@/components/cv/OneHealthDemoSection";
import { RpsAdminDemoSection } from "@/components/cv/RpsAdminDemoSection";
import { ProjectCard } from "@/components/cv/ProjectCard";
import { SkillBadge } from "@/components/cv/SkillBadge";
import { SectionNavigation } from "@/components/cv/SectionNavigation";
import { StatsSection } from "@/components/cv/StatsSection";
import { SummarySection } from "@/components/cv/SummarySection";
import { TimelineSection } from "@/components/cv/TimelineSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { SkipLink } from "@/components/ui/SkipLink";
import { useColorMode } from "@/hooks/useColorMode";
import { useLanguage } from "@/i18n/LanguageContext";
import type { CVProject, ThemeProfile } from "@/types/cv";
import { cn } from "@/utils/cn";

const profileThemes = {
  developer: {
    icon: MonitorSmartphone,
    accent: "from-cyan-500 to-blue-600",
    ring: "ring-cyan-400/70 dark:ring-cyan-300/50",
  },
  health: {
    icon: HeartPulse,
    accent: "from-teal-500 to-emerald-600",
    ring: "ring-teal-400/70 dark:ring-teal-300/50",
  },
} satisfies Record<ThemeProfile, { icon: typeof MonitorSmartphone; accent: string; ring: string }>;

const segmentedControl = "flex rounded-lg border border-slate-200 bg-slate-100 p-1 dark:border-white/10 dark:bg-white/10";
const segmentActive = "bg-white text-slate-950 shadow-sm dark:bg-slate-900 dark:text-white";
const segmentIdle = "text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white";

/** Remonte en premier les éléments dont le `focus` correspond au profil choisi (tri stable). */
function byFocus<T extends { focus?: ThemeProfile }>(theme: ThemeProfile) {
  return (a: T, b: T) => Number(b.focus === theme) - Number(a.focus === theme);
}

export function CVPage() {
  const { lang, setLang, t, data: cvData } = useLanguage();
  const { mode, toggleMode } = useColorMode();
  const [theme, setTheme] = useState<ThemeProfile>("developer");
  const activeTheme = profileThemes[theme];
  const themeEntries = Object.entries(profileThemes) as Array<[ThemeProfile, typeof activeTheme]>;

  const experiences = useMemo(
    () => [...cvData.experiences].sort((a, b) => b.startDate.localeCompare(a.startDate)),
    [cvData]
  );
  const skills = useMemo(() => [...cvData.skills].sort(byFocus(theme)), [cvData, theme]);
  const projects = useMemo(() => {
    const focusOrder = byFocus<CVProject>(theme);
    return [...cvData.projects].sort(
      (a, b) => Number(Boolean(b.images?.length)) - Number(Boolean(a.images?.length)) || focusOrder(a, b)
    );
  }, [cvData, theme]);

  return (
    <div id="top" className="portfolio-root min-h-screen text-slate-950 transition-colors dark:text-white">
      <SkipLink />
      <header className="site-header no-print sticky top-0 z-40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-xs font-bold text-white dark:bg-white dark:text-slate-950">NC</span>
            <span className="hidden sm:inline">Nomeniavo Cathy</span>
          </a>

          <div className="flex flex-wrap items-center gap-2">
            <div className={segmentedControl} role="group" aria-label={t.nav.chooseProfile}>
              {themeEntries.map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTheme(key)}
                  className={cn(
                    "inline-flex h-9 items-center gap-2 rounded-md px-3 text-xs font-semibold transition",
                    theme === key ? segmentActive : segmentIdle
                  )}
                  aria-pressed={theme === key}
                  aria-label={t.nav[key]}
                  title={t.nav[key]}
                >
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                  <span className="hidden xl:inline">{t.nav[key]}</span>
                </button>
              ))}
            </div>
            <a href={`mailto:${cvData.profile.email}`} className="primary-button hidden sm:inline-flex">
              {t.nav.contact} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <div className={segmentedControl} role="group" aria-label={t.nav.switchLang}>
              {(["fr", "en"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                  lang={code}
                  className={cn("h-8 rounded-md px-2.5 text-xs font-bold uppercase transition", lang === code ? segmentActive : segmentIdle)}
                >
                  {code}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={toggleMode}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:text-cyan-200 dark:focus:ring-offset-slate-950"
              aria-label={t.nav.toggleMode}
              aria-pressed={mode === "dark"}
            >
              {mode === "light" ? <Moon className="h-4 w-4" aria-hidden="true" /> : <Sun className="h-4 w-4" aria-hidden="true" />}
            </button>
          </div>
        </div>
        <SectionNavigation />
      </header>

      <main id="main-content" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-10">
        <div className="cv-shell relative">
          <HeroSection profile={cvData.profile} theme={theme} />

          <ScrollReveal id="about" className="scroll-mt-24">
            <SummarySection profile={cvData.profile} />
          </ScrollReveal>

          <ScrollReveal>
            <StatsSection stats={cvData.stats} />
          </ScrollReveal>

          <ScrollReveal>
            <section id="experience" className="cv-section scroll-mt-24" aria-labelledby="experience-title">
              <p className="section-kicker">{t.experience.kicker}</p>
              <h2 id="experience-title" className="section-title">{t.experience.title}</h2>
              <div className="experience-list">
                {experiences.map((experience) => (
                  <ExperienceCard key={experience.id} experience={experience} />
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="projects" className="cv-section scroll-mt-24" aria-labelledby="projects-title">
              <p className="section-kicker">{t.projects.kicker}</p>
              <h2 id="projects-title" className="section-title">{t.projects.title}</h2>
              <div className="project-grid grid items-start gap-5 md:grid-cols-2">
                {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <MadActionDemoSection />
          </ScrollReveal>

          <ScrollReveal>
            <OneHealthDemoSection />
          </ScrollReveal>

          <ScrollReveal>
            <RpsAdminDemoSection />
          </ScrollReveal>

          <ScrollReveal>
            <MembershipDemoSection />
          </ScrollReveal>

          <ScrollReveal>
            <section id="skills" className="cv-section scroll-mt-24" aria-labelledby="skills-title">
              <p className="section-kicker">{t.skills.kicker}</p>
              <h2 id="skills-title" className="section-title">{t.skills.title}</h2>
              <div className="expertise-grid grid gap-4 md:grid-cols-2">
                {skills.map((category) => {
                  const highlighted = category.focus === theme;
                  return (
                    <article
                      key={category.title}
                      className={cn("premium-card break-inside-avoid p-5", highlighted && cn("ring-2", activeTheme.ring))}
                    >
                      <h3 className="text-sm font-semibold text-slate-950 dark:text-white">
                        {category.title}
                        {highlighted ? <span className="sr-only"> ({t.skills.focused})</span> : null}
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {category.items.map((item) => (
                          <SkillBadge key={item} variant={category.focus ?? "neutral"}>{item}</SkillBadge>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal className="grid gap-6 lg:grid-cols-2">
            <TimelineSection id="education" title={t.education.title} kicker={t.education.kicker} items={cvData.education} />
            <TimelineSection id="certifications" title={t.certifications.title} kicker={t.certifications.kicker} items={cvData.certifications} />
          </ScrollReveal>

          <ScrollReveal id="contact" className="scroll-mt-24">
            <ContactSection profile={cvData.profile} languages={cvData.languages} />
          </ScrollReveal>
        </div>
      </main>

      <footer className="no-print mx-auto max-w-7xl px-4 pb-10 sm:px-6">
        <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} {cvData.profile.name}. {t.footer.rights}
          </p>
          <p>{t.footer.builtWith}</p>
          <a href="#top" className="inline-flex items-center gap-1 font-semibold text-slate-700 transition hover:text-cyan-700 dark:text-slate-200 dark:hover:text-cyan-300">
            {t.footer.backToTop} <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </footer>
      <BackToTopButton />
    </div>
  );
}
