import type { Profile, Language, SocialLink, Education, Experience, Project, TechnicalSkills, SoftSkill, Certification } from "@/types";
import { GithubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { Sparkles, MessageCircle, Cpu } from "lucide-react";

export const profile: Profile = {
  name: "Nomeniavo Cathy ANDRIAMANANTENA",
  title: "Développeuse Full-Stack",
  subtitle: "Automatisation des systèmes d'information",
  status: "Étudiante en première année de Master à l'EMIT Fianarantsoa",
  affiliation: "Coordinatrice des Jeunes Volontaires de l'Orange Digital Center Madagascar Fianarantsoa",
  email: "cathynomeniavo@gmail.com",
  phone: "034 16 722 54",
  location: "Fianarantsoa, Haute Matsiatra, Madagascar",
  address: "Tambohobe sud Lot IIP29",
  nationality: "Malgache",
  age: 23,
  about:
    "Étudiante en première année de Master à l'EMIT Fianarantsoa, je construis mon parcours autour du développement full-stack et de l'automatisation des systèmes d'information. J'aime transformer des besoins métier concrets en applications utiles, fiables et faciles à utiliser. Mes expériences m'ont amenée à travailler sur des plateformes SaaS, des workflows n8n, des applications mobiles et, plus récemment, sur l'interopérabilité des données de santé avec DHIS2 et OpenFn.",
  tagline:
    "Je conçois des applications web et des automatisations qui relient les outils, simplifient les processus et donnent aux utilisateurs des interfaces claires pour travailler plus efficacement.",
  // Si tu ajoutes un PDF dans public, active par exemple :
  // cvUrl: "/cv-andriamanantena-nomeniavo-cathy.pdf",
};

export const languages: Language[] = [
  { name: "Français", level: "Bilingue" },
  { name: "Anglais", level: "Courant" },
  { name: "DELF B1", detail: "90/100" },
  { name: "DELF B2", detail: "92/100" },
];

export const socialLinks: SocialLink[] = [
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nomeniavo-cathy-andriamanantena-1980b4255",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/andriarosarmelle",
  },
];

export const education: Education[] = [
  {
    degree: "Master 1 en Informatique",
    school: "École de Management et d'Innovation Technologique (EMIT)",
    place: "Fianarantsoa, Haute Matsiatra, Madagascar",
    period: "Depuis janvier 2026",
    detail: "Première année de Master, parcours Modélisation et Ingénierie Informatique (M2I).",
  },
  {
    degree: "Licence en Informatique DA2I",
    school: "École de Management et d'Innovation Technologique (EMIT)",
    place: "Fianarantsoa, Haute Matsiatra, Madagascar",
    period: "Décembre 2022 — Novembre 2025",
    detail: "Parcours Développement d'Applications Internet et Intranet.",
  },
  {
    degree: "Baccalauréat",
    school: "Lycée Saint Joseph de Cluny",
    place: "Fianarantsoa, Haute Matsiatra, Madagascar",
    period: "Octobre 2019 — 2020",
  },
];

export const experiences: Experience[] = [
  {
    role: "Intégration DHIS2 avec OpenFn",
    company: "Projet personnel",
    location: "Madagascar",
    period: "Depuis avril 2026",
    description:
      "Exploration de l'automatisation des flux de données de santé à travers DHIS2 et OpenFn. Ce projet me permet de tester la synchronisation de données via API, la transformation de données avec JavaScript et les principes d'interopérabilité utilisés dans les systèmes de santé numérique.",
    techs: ["OpenFn", "DHIS2", "JavaScript", "API REST"],
    highlights: [
      "Automatisation des flux de données de santé",
      "Tests de synchronisation et de transformation via API",
      "Découverte des architectures d'interopérabilité",
    ],
  },
  {
    role: "Réalisation d'une application web de sondage RPS",
    company: "Laroche 360",
    location: "Montréal, Canada (remote)",
    period: "Janvier 2026 — Avril 2026",
    description:
      "Développement full-stack d'une plateforme SaaS B2B dédiée à la gestion des risques psychosociaux. La solution permet aux entreprises d'importer leurs listes d'employés, d'envoyer des sondages avec des liens uniques, de suivre la participation et d'analyser les résultats dans des tableaux de bord interactifs.",
    techs: ["Next.js", "NestJS", "PostgreSQL", "Strapi", "n8n"],
    highlights: [
      "Import CSV/Excel et relances automatisées",
      "Analyse IA des réponses ouvertes",
      "Génération de rapports PDF/Word et déploiement sur VPS",
    ],
  },
  {
    role: "Développeuse site vitrine avec n8n",
    company: "Anonyme",
    location: "Remote — Madagascar",
    period: "Depuis janvier 2026",
    description:
      "Conception d'un site vitrine professionnel accompagné de workflows n8n pour automatiser les étapes métier: validation par e-mail, diffusion, relances et reporting. L'objectif est de réduire les tâches répétitives tout en gardant un parcours clair pour les utilisateurs.",
    techs: ["n8n", "Next.js", "PostgreSQL"],
    highlights: [
      "Validation par e-mail avant diffusion",
      "Automatisation des envois et des relances",
      "Reporting automatisé",
    ],
  },
  {
    role: "UI/UX Designer & Développeuse — Nexora",
    company: "Nexora (Atlas Local)",
    location: "Québec, Canada (remote)",
    period: "Janvier 2026 — Février 2026",
    description:
      "Conception d'interfaces web et mobiles pour la plateforme Nexora: maquettes Figma, prototypes, composants réutilisables et échanges réguliers avec l'équipe produit pour rapprocher le design des contraintes de développement.",
    techs: ["Figma", "React", "UI/UX Design", "Prototypage"],
    highlights: [
      "Design system complet",
      "Prototypes fonctionnels",
    ],
  },
  {
    role: "Application de gestion des étudiants parrainés",
    company: "EMIT Fianarantsoa",
    location: "Fianarantsoa, Madagascar",
    period: "Depuis juillet 2025",
    description:
      "Projet de mémoire de licence visant à digitaliser le processus de parrainage étudiant. L'application facilite l'inscription, le suivi, la validation et la traçabilité des parrainages pour l'administration.",
    techs: ["Flutter", "Firebase", "UML"],
    highlights: [
      "Réduction des délais de traitement",
      "Suivi de plus de 200 parrainages annuels",
      "Conception UML et développement mobile",
    ],
  },
  {
    role: "Création du site web Radio Feon'ny Filazantsara",
    company: "Foibe Loterana momba ny Fifandraisana",
    location: "Antsirabe, Madagascar",
    period: "Juin 2024 — Août 2024",
    description:
      "Conception et développement d'un site web institutionnel pour présenter la radio, ses programmes et ses contenus. Le projet m'a permis de renforcer mes bases en développement web, gestion de contenu et intégration responsive.",
    techs: ["HTML", "CSS", "JavaScript", "Laravel 10"],
    highlights: [
      "Site responsive complet",
      "Gestion de contenu intégrée",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Automatisation DHIS2 avec OpenFn",
    context: "Projet personnel — Santé numérique",
    description:
      "Exploration de l'intégration entre DHIS2 et OpenFn pour comprendre comment automatiser, synchroniser et transformer des données de santé entre plusieurs systèmes.",
    results: "Scénarios de synchronisation testés, scripts JavaScript préparés et meilleure compréhension des architectures d'interopérabilité.",
    techs: ["OpenFn", "DHIS2", "JavaScript", "API REST"],
  },
  {
    title: "Application SaaS — Sondages RPS",
    context: "Laroche 360 — Santé au travail",
    description:
      "Plateforme B2B de gestion des risques psychosociaux en entreprise: import des collaborateurs, campagnes de sondage, suivi de participation, analyse intelligente et rapports.",
    results: "Solution déployée sur VPS, questionnaires gérés, rapports automatisés et tableaux de bord d'analyse.",
    techs: ["Next.js", "NestJS", "PostgreSQL", "Strapi", "n8n"],
  },
  {
    title: "Site vitrine automatisé avec n8n",
    context: "Client anonyme — Automatisation métier",
    description:
      "Site vitrine professionnel connecté à des workflows n8n pour gérer la validation e-mail, les envois automatiques, les relances et le reporting.",
    results: "Processus de diffusion plus fluide, réduction des actions manuelles et meilleure traçabilité des échanges.",
    techs: ["n8n", "Next.js", "PostgreSQL"],
  },
  {
    title: "Nexora — Plateforme UI/UX",
    context: "Atlas Local — Produit digital",
    description:
      "Design system, interfaces utilisateur, prototypes interactifs et composants réutilisables pour accompagner la construction d'une plateforme web et mobile.",
    results: "Maquettes validées, documentation design préparée et base front-end amorcée.",
    techs: ["Figma", "React", "UI/UX Research", "Design System"],
  },
  {
    title: "Application Parrainages EMIT",
    context: "Projet de mémoire — Licence DA2I",
    description:
      "Digitalisation du processus de parrainage étudiant: inscription, suivi, validation et reporting pour la scolarité de l'EMIT.",
    results: "Processus plus rapide, traçabilité renforcée et notation 16/20.",
    techs: ["Flutter", "Firebase", "UML", "Cloud Firestore"],
  },
  {
    title: "Radio Feon'ny Filazantsara",
    context: "FLM — Média chrétien",
    description:
      "Site web institutionnel pour présenter la radio, ses programmes, sa grille, ses podcasts et l'administration de ses contenus.",
    results: "Site responsive livré avec une interface d'administration fonctionnelle.",
    techs: ["HTML", "CSS", "JavaScript", "Laravel 10", "MySQL"],
  },
];

export const technicalSkills: TechnicalSkills = {
  frontend: ["HTML", "CSS", "JavaScript", "React (Vite)", "Next.js", "Angular", "Flutter"],
  backend: ["Laravel 10", "CodeIgniter", "NestJS", "PostgreSQL", "Firebase", "Supabase", "Java EE"],
  tools: ["n8n", "OpenFn", "DHIS2", "API REST", "Word", "Excel", "PowerPoint"],
  design: ["Figma", "Illustrator", "Photoshop", "Wireframing", "Prototypage"],
  ux: [
    "Recherche utilisateur",
    "Wireframing",
    "Prototypage Figma",
    "Design d'interfaces web & mobile",
    "Collaboration développeurs/clients",
  ],
};

export const softSkills: SoftSkill[] = [
  { icon: Sparkles, label: "Autonome et rigoureuse" },
  { icon: MessageCircle, label: "Bon sens de la communication" },
  { icon: Cpu, label: "Adaptabilité et esprit d'analyse" },
];

export const certifications: Certification[] = [
  {
    title: "Certification PIX",
    org: "AUF DR Afrique Australe et Océan Indien / CEF Fianarantsoa",
    date: "Septembre 2025",
  },
  {
    title: "Parcours TAFA",
    org: "Université de Fianarantsoa — Projet TAFA",
    date: "Juin 2025",
    status: "En cours",
  },
  {
    title: "Certificat avancé en stratégies Web Business et E-commerce (Dropshipping)",
    org: "Stone International Institute",
    date: "Octobre — Décembre 2023",
  },
  {
    title: "Cinq certifications DHIS2",
    org: "DHIS2 Academy",
    date: "Septembre — Novembre 2025",
  },
  {
    title: "Formation Java",
    org: "Orange Digital Center Madagascar",
    date: "Novembre 2024",
  },
  {
    title: "Formation Illustrator",
    org: "Orange Digital Center",
    date: "Novembre 2024",
  },
  {
    title: "Formation React Vite",
    org: "Orange Digital Center",
    date: "Novembre 2024",
  },
];
