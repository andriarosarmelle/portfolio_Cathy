import { Globe2 } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import type { CVData } from "@/types/cv";

export const cvData: CVData = {
  profile: {
    name: "Nomeniavo Cathy Andriamanantena",
    title: "Développeuse Web & Mobile | Automatisation & SI santé",
    location: "Fianarantsoa, Madagascar",
    email: "cathynomeniavo@gmail.com",
    phone: "034 16 722 54",
    photo: "/images/profile.jpg",
    headline:
      "Je transforme des besoins métier complexes en applications web, mobiles et flux de données simples à utiliser.",
    summary:
      "Développeuse Web et Mobile en début de carrière, avec une orientation vers les systèmes d'information, l'automatisation et la santé numérique. J'aime construire des expériences claires, robustes et humaines, en reliant les besoins terrain aux technologies modernes comme Flutter, React, Angular, Next.js, NestJS, PostgreSQL, Firebase, n8n, DHIS2, OpenFn et CommCare.",
    links: [
      {
        label: "LinkedIn",
        value: "nomeniavo-cathy-andriamanantena",
        href: "https://www.linkedin.com/in/nomeniavo-cathy-andriamanantena-1980b4255",
        icon: LinkedInIcon,
      },
      {
        label: "GitHub",
        value: "andriarosarmelle",
        href: "https://github.com/andriarosarmelle",
        icon: GithubIcon,
      },
      { label: "Portfolio", value: "Portfolio personnel", href: "#projects", icon: Globe2 },
    ],
  },
  stats: [
    { value: "+200", label: "parrainages suivis chaque année", tone: "health" },
    { value: "70%", label: "de réduction des délais de traitement", tone: "developer" },
    { value: "B2B", label: "projets SaaS orientés métier", tone: "developer" },
    { value: "SI", label: "DHIS2, OpenFn, CommCare et interopérabilité", tone: "health" },
  ],
  experiences: [
    {
      id: "one-health",
      role: "Consultante en Système d'Information",
      organization: "Projet Pivot Banque mondiale / CIRAD",
      period: "Juin 2026 - Juillet 2026",
      startDate: "2026-06",
      focus: "health",
      context:
        "Contribution à un projet de santé numérique où les flux de données, les tableaux de bord et les livrables doivent rester cohérents entre plusieurs outils.",
      missions: [
        "Analyser les besoins fonctionnels et les parcours de données.",
        "Contribuer à l'architecture d'interopérabilité entre plateformes.",
        "Participer au suivi des livrables et à la structuration des tableaux de bord.",
      ],
      impact:
        "Vision plus claire des échanges entre systèmes et meilleure préparation des indicateurs de pilotage.",
      technologies: ["DHIS2", "CommCare", "OpenFn", "REST API", "JSON"],
    },
    {
      id: "site-automatise",
      role: "Développeuse site vitrine avec n8n",
      focus: "developer",
      organization: "Client international au Canada",
      period: "Depuis janvier 2026",
      startDate: "2026-01",
      context:
        "Création d'un site vitrine professionnel relié à des workflows d'automatisation pour réduire les tâches répétitives.",
      missions: [
        "Développer une interface claire pour la présentation des services.",
        "Mettre en place la validation par email et les relances automatisées.",
        "Structurer le reporting et le suivi des actions métier.",
      ],
      impact: "Processus plus fluide, traçabilité renforcée et temps opérationnel réduit.",
      technologies: ["ReactJS", "PostgreSQL", "n8n"],
    },
    {
      id: "parrainage",
      role: "Développeuse Mobile: Gestion des étudiants parrainés",
      focus: "developer",
      organization: "EMIT Fianarantsoa",
      period: "Depuis mai 2025",
      startDate: "2025-05",
      context:
        "Application mobile destinée à digitaliser le suivi des étudiants parrainés et les validations administratives.",
      missions: [
        "Concevoir l'application mobile et le modèle de données.",
        "Centraliser les inscriptions, validations et historiques.",
        "Améliorer la traçabilité du processus de parrainage.",
      ],
      impact:
        "Réduction des délais de traitement de 70% et suivi de plus de 200 parrainages annuels.",
      technologies: ["Flutter", "Firebase", "Cloud Firestore", "UML"],
    },
    {
      id: "saas-rps",
      role: "Développeuse Full Stack: Refonte d'un SaaS RPS",
      focus: "developer",
      organization: "Laroche 360 — Client international au Canada",
      period: "Depuis octobre 2026",
      startDate: "2026-10",
      context:
        "Préparation de la refonte de Laroche 360, une plateforme SaaS de gestion des risques psychosociaux (RPS) pour un client au Canada, avec modernisation des parcours utilisateur et automatisation des communications par courriel via SendGrid.",
      missions: [
        "Analyser l'application existante et les besoins métier pour préparer la refonte.",
        "Préparer la modernisation des interfaces et des parcours utilisateur.",
        "Préparer l'automatisation des courriels transactionnels avec SendGrid : notifications et relances intégrées aux parcours utilisateur.",
      ],
      impact: "Objectifs de la refonte : améliorer l'ergonomie et la maintenabilité du SaaS, réduire les envois manuels et fluidifier le suivi grâce aux courriels automatisés.",
      technologies: ["Next.js", "NestJS", "PostgreSQL", "n8n", "SendGrid"],
    },
  ],
  projects: [
    {
      title: "Application de gestion des étudiants parrainés",
      demoUrl: "#madaction",
      category: "Mobile / Éducation",
      focus: "developer",
      role: "Conception, développement mobile et modélisation des données",
      description:
        "Application Flutter et Firebase pour digitaliser l'inscription, la validation et le suivi des parrainages étudiants.",
      impact: "Plus de 200 parrainages suivis et délais réduits de 70%.",
      technologies: ["Flutter", "Dart", "Firebase"],
    },
    {
      title: "Site vitrine automatisé avec n8n",
      category: "Automatisation métier",
      focus: "developer",
      role: "Développement frontend et orchestration des workflows",
      description:
        "Site vitrine couplé à des workflows de validation email, relance et reporting automatisé.",
      impact: "Moins de tâches manuelles et une meilleure continuité opérationnelle.",
      technologies: ["ReactJS", "PostgreSQL", "n8n"],
    },
    {
      title: "Projet SI / Santé numérique",
      demoUrl: "#onehealth",
      category: "Interopérabilité",
      focus: "health",
      role: "Analyse fonctionnelle et structuration des flux de données",
      description:
        "Travail sur la circulation des données entre outils terrain, plateformes de collecte et tableaux de bord.",
      impact: "Architecture de flux plus lisible et livrables mieux suivis.",
      technologies: ["DHIS2", "OpenFn", "CommCare", "FHIR"],
    },
    {
      title: "Refonte d'un SaaS de gestion des risques psychosociaux",
      demoUrl: "#rps-demo",
      category: "SaaS / Full Stack",
      focus: "developer",
      role: "Analyse de l'existant, conception des parcours et préparation de la refonte",
      description:
        "Modernisation de l'administration d'une plateforme de sondages RPS : campagnes, résultats, signalements et courriels automatiques via SendGrid.",
      impact: "Objectif : une ergonomie plus claire et moins d'envois manuels.",
      technologies: ["Next.js", "NestJS", "PostgreSQL", "SendGrid"],
    },
  ],
  skills: [
    { title: "Frontend", focus: "developer", items: ["HTML", "CSS", "JavaScript", "React", "Angular", "Next.js"] },
    { title: "Backend", focus: "developer", items: ["NestJS", "Laravel", "Spring Boot", "REST API"] },
    { title: "Mobile", focus: "developer", items: ["Flutter", "Dart"] },
    { title: "Bases de données", focus: "developer", items: ["PostgreSQL", "Firebase", "Supabase"] },
    { title: "Automatisation", focus: "developer", items: ["n8n", "GitHub Actions"] },
    { title: "Santé numérique & interopérabilité", focus: "health", items: ["DHIS2", "OpenFn", "CommCare", "FHIR", "JSON"] },
    { title: "Conception", focus: "health", items: ["UML", "Analyse des besoins", "Architecture SI", "Prototypage", "Recherche utilisateur"] },
    { title: "Outils", items: ["Git", "GitHub", "Figma", "ClickUp"] },
    { title: "Qualités professionnelles", items: ["Autonome", "Débrouillarde", "Rigoureuse", "Curieuse", "Esprit d'équipe", "Sens de l'organisation"] },
  ],
  education: [
    {
      title: "Ingénieur en Modélisation et Ingénierie Informatique",
      organization: "EMIT Fianarantsoa",
      period: "En cours",
      detail: "Parcours orienté conception, architecture logicielle et systèmes d'information.",
    },
    {
      title: "Licence informatique",
      organization: "EMIT Fianarantsoa",
      period: "2022 - 2025",
      detail: "Développement d'Applications Internet et Intranet.",
    },
  ],
  certifications: [
    {
      title: "DHIS2 Academy",
      organization: "DHIS2",
      period: "2025",
      detail: "Cinq certifications liées aux systèmes de santé numérique.",
    },
    { title: "PIX", organization: "AUF / CEF Fianarantsoa", period: "Septembre 2025" },
    { title: "React Vite", organization: "Orange Digital Center", period: "Novembre 2024" },
    { title: "Java", organization: "Orange Digital Center Madagascar", period: "Novembre 2024" },
    { title: "Illustrator", organization: "Orange Digital Center", period: "Novembre 2024" },
  ],
  languages: [
    { name: "Français", level: "DELF B1 / B2" },
    { name: "Anglais", level: "Niveau intermédiaire" },
  ],
};
