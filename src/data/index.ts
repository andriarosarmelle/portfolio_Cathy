import type { Profile, Language, SocialLink, Education, Experience, Project, TechnicalSkills, SoftSkill, Certification } from "@/types";
import { GithubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { Sparkles, MessageCircle, Cpu } from "lucide-react";

export const profile: Profile = {
  name: "Andriamanantena Nomeniavo Cathy",
  title: "Développeuse Fullstack",
  subtitle: "UI/UX Designer",
  status: "Étudiante en Master 1 — EMIT Fianarantsoa",
  affiliation: "Coordinatrice des Jeunes Volontaires de l'Orange Digital Center Madagascar Fianarantsoa",
  email: "cathynomeniavo@gmail.com",
  phone: "034 16 722 54",
  location: "Fianarantsoa, Haute Matsiatra, Madagascar",
  address: "Tambohobe sud Lot IIP29",
  nationality: "Malgache",
  age: 23,
   about:
     "Actuellement en Master 1 Modelisation et Ingenierie Informatique (M2I) à l'EMIT Fianarantsoa, je suis passionnée par le développement web fullstack et le design d'interfaces. J'allie rigueur technique et sensibilité UI/UX pour créer des solutions numériques robustes et élégantes. Mes expériences sur des projets concrets — du SaaS B2B aux applications mobiles — m'ont permis de maîtriser un panel de technologies modernes (React, Next.js, NestJS, Flutter, n8n...) et d'adopter une approche centrée utilisateur. Toujours curieuse et en apprentissage, je cherche à relever de nouveaux défis techniques et à contribuer à des produits qui ont un impact réel.",
};

export const languages: Language[] = [
  { name: "Anglais", level: "Courant" },
  { name: "Français", level: "Bilingue" },
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
    detail: "Parcours en Modelisation et Ingenierie Informatique (M2I).",
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
    role: "Réalisation application web sondage RPS",
    company: "Laroche 360",
    location: "Montréal, Canada (Remote)",
    period: "Janvier 2026 — Mai 2026",
    description:
      "Projet SaaS B2B de gestion des risques psychosociaux. Import CSV/Excel, envoi automatisé de questionnaires, liens uniques, relances automatiques, dashboards interactifs, analyse IA des réponses ouvertes, génération PDF/Word, archivage sécurisé, déploiement sur VPS.",
    techs: ["Next.js", "NestJS", "PostgreSQL", "Strapi", "n8n"],
    highlights: [
      "Déploiement complet sur VPS",
      "Analyse IA intégrée",
      "Dashboards interactifs",
    ],
  },
  {
    role: "Développeur site vitrine avec n8n",
    company: "Anonyme",
    location: "Remote — Madagascar",
    period: "Depuis Janvier 2026",
    description:
      "Site vitrine professionnel avec automatisation métier : validation e-mail, envois automatisés, relances intelligentes et reporting.",
    techs: ["n8n", "Next.js", "PostgreSQL"],
    highlights: [
      "Automatisation métier complète",
      "Workflows n8n avancés",
    ],
  },
  {
    role: "UI/UX Designer & Développeuse — Nexora",
    company: "Nexora (Atlas Local)",
    location: "Québec, Canada (Remote)",
    period: "Janvier 2026 — Février 2026",
    description:
      "Conception UI/UX, maquettes Figma, prototypes fonctionnels, collaboration étroite avec l'équipe produit et les développeurs pour la création interfaces web et mobile.",
    techs: ["Figma", "React", "UI/UX Design", "Prototypage"],
    highlights: [
      "Design system complet",
      "Tests utilisateurs",
    ],
  },
  {
    role: "Application Gestion des Étudiants Parrainés",
    company: "EMIT Fianarantsoa",
    location: "Fianarantsoa, Madagascar",
    period: "Depuis Juillet 2025",
    description:
      "Projet de mémoire de licence. Digitalisation du processus de parrainage : réduction des délais de 70%, traçabilité pour plus de 200 parrainages annuels. Conception UML, développement mobile et cloud.",
    techs: ["Flutter", "Firebase", "UML"],
    highlights: [
      "Réduction des délais de 70%",
      "200+ parrainages tracés/an",
      "Architecture UML complète",
    ],
  },
  {
    role: "Création Site Web Radio Feon'ny Filazantsara",
    company: "Foibe Loterana momba ny Fifandraisana",
    location: "Antsirabe, Madagascar",
    period: "Juin 2024 — Août 2024",
    description:
      "Conception et développement du site web de la radio chrétienne Feon'ny Filazantsara. Interface utilisateur intuitive, gestion de contenu, diffusion des programmes.",
    techs: ["HTML", "CSS", "JavaScript", "Laravel 10"],
    highlights: [
      "Site responsive complet",
      "Gestion de contenu intégrée",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Application SaaS — Sondages RPS",
    context: "Laroche 360 — Santé au travail",
    description:
      "Plateforme B2B de gestion des risques psychosociaux en entreprise. Automatisation complète de la chaîne : import des collaborateurs, campagnes de sondage, analyse intelligente et rapports.",
    results: "Solution déployée sur VPS, +500 questionnaires gérés, rapports auto-générés.",
    techs: ["Next.js", "NestJS", "PostgreSQL", "Strapi", "n8n"],
  },
  {
    title: "Nexora — Plateforme UI/UX",
    context: "Atlas Local — Produit digital",
    description:
      "Design system complet et interfaces utilisateur pour la plateforme Nexora. Prototypes interactifs, tests utilisateurs, composants réutilisables et documentation design.",
    results: "Design system livré, maquettes validées par le client, développement front-end amorcé.",
    techs: ["Figma", "React", "UI/UX Research", "Design System"],
  },
  {
    title: "Application Parrainages EMIT",
    context: "Projet de mémoire — Licence DA2I",
    description:
      "Digitalisation complète du processus de parrainage étudiant. Inscription, suivi, validation et reporting pour la scolarité de l'EMIT.",
    results: "Réduction de 70% des délais, traçabilité 200+ parrainages/an, notation 16/20.",
    techs: ["Flutter", "Firebase", "UML", "Cloud Firestore"],
  },
  {
    title: "Radio Feon'ny Filazantsara",
    context: "FLM — Média chrétien",
    description:
      "Site web institutionnel pour la radio. Présentation des programmes, grille, podcasts, et administration des contenus.",
    results: "Site en production, interface administrateur fonctionnelle.",
    techs: ["HTML", "CSS", "JS", "Laravel 10", "MySQL"],
  },
];

export const technicalSkills: TechnicalSkills = {
  frontend: ["HTML", "CSS", "JavaScript", "Flutter", "React (Vite)", "Angular", "Next.js"],
  backend: ["Laravel 10", "CodeIgniter", "Firebase", "Supabase", "NestJS", "J2E"],
  tools: ["n8n", "Word", "Excel", "PowerPoint"],
  design: ["Illustrator", "Photoshop", "Figma", "Wireframing", "Prototypage"],
  ux: [
    "Recherche utilisateur",
    "Wireframing",
    "Prototypage Figma",
    "Design interfaces web & mobile",
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
    title: "Cinq Certification DHIS2 ",
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
