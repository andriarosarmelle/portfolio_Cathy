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
  role: string;
  organization: string;
  period: string;
  context: string;
  missions: string[];
  impact: string;
  technologies: string[];
}

export interface CVProject {
  title: string;
  category: string;
  description: string;
  impact: string;
  technologies: string[];
}

export interface CVSkillCategory {
  title: string;
  items: string[];
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
