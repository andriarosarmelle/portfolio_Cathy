import type { ElementType } from "react";

export type ThemeProfile = "developer" | "health";

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: ElementType;
}

export interface CVProfile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  photo: string;
  headline: string;
  summary: string;
  cvUrl?: string;
  links: ContactLink[];
}

export interface CVStat {
  value: string;
  label: string;
  tone: ThemeProfile;
}

export interface CVExperience {
  id: string;
  role: string;
  organization: string;
  period: string;
  /** Date de début ISO (AAAA-MM) utilisée pour le classement chronologique. */
  startDate: string;
  context: string;
  missions: string[];
  impact: string;
  technologies: string[];
  /** Profil pour lequel cette expérience est la plus pertinente (tri de la page). */
  focus?: ThemeProfile;
}

export interface CVProject {
  demoUrl?: string;
  title: string;
  category: string;
  role: string;
  description: string;
  impact: string;
  technologies: string[];
  focus?: ThemeProfile;
  images?: Array<{
    src: string;
    alt: string;
  }>;
}

export interface CVSkillCategory {
  title: string;
  items: string[];
  focus?: ThemeProfile;
}

export interface CVTimelineItem {
  title: string;
  organization: string;
  period: string;
  detail?: string;
}

export interface CVLanguage {
  name: string;
  level: string;
}

export interface CVData {
  profile: CVProfile;
  stats: CVStat[];
  experiences: CVExperience[];
  projects: CVProject[];
  skills: CVSkillCategory[];
  education: CVTimelineItem[];
  certifications: CVTimelineItem[];
  languages: CVLanguage[];
}
