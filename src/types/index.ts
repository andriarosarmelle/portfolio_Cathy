export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  status: string;
  affiliation: string;
  email: string;
  phone: string;
  location: string;
  address: string;
  nationality: string;
  age: number;
  about: string;
  tagline: string;
}

export interface Language {
  name: string;
  level?: string;
  detail?: string;
}

export interface SocialLink {
  icon: React.ElementType;
  label: string;
  href: string;
}

export interface Education {
  degree: string;
  school: string;
  place: string;
  period: string;
  detail?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  techs: string[];
  highlights?: string[];
}

export interface Project {
  title: string;
  context: string;
  description: string;
  results: string;
  techs: string[];
}

export interface TechnicalSkills {
  frontend: string[];
  backend: string[];
  tools: string[];
  design: string[];
  ux: string[];
}

export interface SoftSkill {
  icon: React.ElementType;
  label: string;
}

export interface Certification {
  title: string;
  org: string;
  date: string;
  status?: string;
}
