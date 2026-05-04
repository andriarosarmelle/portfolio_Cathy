import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Calendar,
  GraduationCap,
  Briefcase,
  Code2,
  Sparkles,
  Heart,
  Send,
  ChevronDown,
  Award,
  Globe,
  Clock,
  Download,
  ArrowRight,
  Layers,
  Palette,
  Cpu,
  MessageCircle,
} from "lucide-react";

/* inline social icons */
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ---------- scroll reveal hook ---------- */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, revealed };
}

/* ---------- data ---------- */
const profile = {
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
    "Développeuse fullstack passionnée par la création d'applications web élégantes et performantes. Alliant rigueur technique et sensibilité UI/UX, je conçois des solutions numériques sur mesure — du backend robuste aux interfaces fluides. Actuellement en Master à l'EMIT, je suis à la recherche d'opportunités stimulantes en développement, design produit ou missions freelance.",
};

const languages = [
  { name: "Anglais", level: "Courant" },
  { name: "Français", level: "Bilingue" },
  { name: "DELF B1", detail: "90/100" },
  { name: "DELF B2", detail: "92/100" },
];

const socialLinks: { icon: React.ElementType; label: string; href: string }[] = [
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    href: "www.linkedin.com/in/nomeniavo-cathy-andriamanantena-1980b4255",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/andriarosarmelle",
  },
];

const education = [
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

const experiences = [
  {
    role: "Réalisation application web sondage RPS",
    company: "Laroche 360",
    location: "Montréal, Canada (Remote)",
    period: "Janvier 2026 — Avril 2026",
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
    period: "Janvier 2026 — Juin 2026",
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
    period: "Depuis Mai 2025",
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
    period: "Juillet 2024 — Août 2024",
    description:
      "Conception et développement du site web de la radio chrétienne Feon'ny Filazantsara. Interface utilisateur intuitive, gestion de contenu, diffusion des programmes.",
    techs: ["HTML", "CSS", "JavaScript", "Laravel 10"],
    highlights: [
      "Site responsive complet",
      "Gestion de contenu intégrée",
    ],
  },
];

const projects = [
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

const technicalSkills = {
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

const softSkills = [
  { icon: Sparkles, label: "Autonome et rigoureuse" },
  { icon: MessageCircle, label: "Bon sens de la communication" },
  { icon: Cpu, label: "Adaptabilité et esprit d'analyse" },
];

const certifications = [
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

/* ---------- sub-components ---------- */

function SectionHeading({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
}) {
  const { ref, revealed } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`scroll-reveal mb-10 ${revealed ? "revealed" : ""}`}
    >
      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-rose-500">
        <Icon size={13} />
        {subtitle || title}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
        {title}
      </h2>
      <div className="mt-3 h-0.5 w-12 rounded-full bg-rose-300" />
    </div>
  );
}

function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm transition hover:border-rose-200 hover:text-rose-600">
      {label}
    </span>
  );
}

function TimelineItem({
  role,
  company,
  location,
  period,
  description,
  techs,
  highlights,
}: (typeof experiences)[number]) {
  const { ref, revealed } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`scroll-reveal relative mb-10 pl-10 timeline-dot border-l border-gray-200 last:mb-0 ${revealed ? "revealed" : ""}`}
    >
      <div className="space-y-1.5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="text-lg font-bold text-gray-900">{role}</h3>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 text-sm text-gray-500">
          <span className="font-semibold text-gray-700">{company}</span>
          <span className="text-gray-300">•</span>
          <span className="inline-flex items-center gap-1">
            <MapPin size={12} />
            {location}
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-md bg-rose-50 px-2.5 py-0.5 text-xs font-medium text-rose-600">
          <Clock size={11} />
          {period}
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
      {highlights && highlights.length > 0 && (
        <ul className="mt-2 space-y-1">
          {highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-xs font-medium text-rose-600"
            >
              <span className="mt-0.5 text-rose-400">▸</span>
              {h}
            </li>
          ))}
        </ul>
      )}
      {techs && techs.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {techs.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const { ref, revealed } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`scroll-reveal group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-rose-100 ${revealed ? "revealed" : ""}`}
    >
      <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-rose-500">
        {project.context}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {project.description}
      </p>
      <div className="mt-3 rounded-lg border border-rose-100 bg-rose-50/50 px-3 py-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-rose-500">
          Résultats
        </span>
        <p className="mt-0.5 text-sm text-gray-700">{project.results}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.techs.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>
    </div>
  );
}

/* ---------- main app ---------- */
export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream text-gray-800">
      {/* ===== mobile nav ===== */}
      <div
        className={`fixed top-0 z-50 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur-lg transition-shadow lg:hidden ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-sm font-bold tracking-tight text-gray-900">
            Cathy Nomeniavo
          </span>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100"
          >
            <ChevronDown
              size={20}
              className={`transition-transform ${mobileMenu ? "rotate-180" : ""}`}
            />
          </button>
        </div>
        {mobileMenu && (
          <div className="border-t border-gray-100 bg-white px-5 py-3 space-y-1 animate-fade-in">
            {[
              "about",
              "education",
              "experience",
              "projects",
              "skills",
              "certifications",
              "contact",
            ].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                onClick={() => setMobileMenu(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium capitalize text-gray-600 hover:bg-rose-50 hover:text-rose-600"
              >
                {s}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="mx-auto max-w-7xl lg:flex lg:gap-10 lg:px-8 xl:px-12">
        {/* ===== left sidebar ===== */}
        <aside className="lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] lg:w-[340px] lg:flex-shrink-0 lg:self-start">
          <div className="px-5 pt-24 lg:px-0 lg:pt-8">
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm lg:shadow-md">
              {/* photo */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="h-32 w-32 overflow-hidden rounded-2xl ring-4 ring-rose-100 shadow-lg">
                    <img
                      src="/images/profile.jpg"
                      alt="Andriamanantena Nomeniavo Cathy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-rose-400 text-white shadow">
                    <Sparkles size={13} />
                  </div>
                </div>
              </div>

              {/* name + title */}
              <div className="mt-5 text-center">
                <h1 className="text-xl font-bold tracking-tight text-gray-900">
                  {profile.name.split(" ").slice(0, 2).join(" ")}
                </h1>
                <p className="text-sm text-gray-500">{profile.name.split(" ").slice(2).join(" ")}</p>
                <div className="mt-2 inline-block rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
                  {profile.title}
                </div>
                <p className="mt-1 text-xs text-rose-500 font-medium">
                  {profile.subtitle}
                </p>
              </div>

              {/* status */}
              <div className="mt-4 rounded-xl border border-gray-100 bg-gray-50/50 p-3 text-center">
                <p className="text-xs font-medium text-gray-500">
                  {profile.status}
                </p>
                <p className="mt-0.5 text-xs text-rose-500 font-medium">
                  {profile.affiliation}
                </p>
              </div>

              {/* contact */}
              <div className="mt-5 space-y-2.5">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 rounded-lg border border-gray-100 p-2.5 text-sm text-gray-600 transition hover:border-rose-200 hover:bg-rose-50/50"
                >
                  <Mail size={15} className="text-rose-400 flex-shrink-0" />
                  <span className="truncate">{profile.email}</span>
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 rounded-lg border border-gray-100 p-2.5 text-sm text-gray-600 transition hover:border-rose-200 hover:bg-rose-50/50"
                >
                  <Phone size={15} className="text-rose-400 flex-shrink-0" />
                  {profile.phone}
                </a>
                <div className="flex items-center gap-3 rounded-lg border border-gray-100 p-2.5 text-sm text-gray-600">
                  <MapPin size={15} className="text-rose-400 flex-shrink-0" />
                  {profile.location}
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-100 p-2.5 text-sm text-gray-600">
                  <Calendar size={15} className="text-rose-400 flex-shrink-0" />
                  {profile.age} ans — {profile.nationality}
                </div>
              </div>

              {/* languages */}
              <div className="mt-5">
                <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                  Langues
                </h4>
                <div className="space-y-1.5">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2 text-sm"
                    >
                      <span className="font-medium text-gray-700">
                        {lang.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        {lang.detail || lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* social */}
              <div className="mt-5 flex justify-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-xs font-medium text-gray-600 transition hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                  >
                    <s.icon size={14} />
                    {s.label}
                  </a>
                ))}
              </div>

              {/* soft skills quick */}
              <div className="mt-5">
                <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                  Soft Skills
                </h4>
                <div className="space-y-1.5">
                  {softSkills.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-600"
                    >
                      <s.icon size={14} className="text-rose-400" />
                      {s.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* ===== right main content ===== */}
        <main className="flex-1 px-5 pb-24 pt-8 lg:px-0 lg:pt-8">
          {/* ---- hero ---- */}
          <section className="mb-16 mt-8 lg:mt-0 animate-fade-in">
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-500">
                Portfolio
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                {profile.name}
              </h1>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
                  {profile.title}
                </span>
                <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600">
                  {profile.subtitle}
                </span>
              </div>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600">
                {profile.about}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 hover:shadow-lg"
                >
                  Me contacter
                  <ArrowRight size={15} />
                </a>
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:border-gray-900 hover:text-gray-900"
                >
                  Voir mes expériences
                  <ChevronDown size={15} />
                </a>
              </div>
            </div>
          </section>

          {/* ---- about ---- */}
          <section id="about" className="mb-16 scroll-mt-24">
            <SectionHeading
              icon={Heart}
              title="À propos"
              subtitle="Qui suis-je"
            />
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
                <p className="text-base leading-relaxed text-gray-600">
                  {profile.about}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                  Je combine une solide formation en informatique avec une
                  expérience pratique sur des projets réels, du design UI/UX à
                  la mise en production. Mon approche allie rigueur technique,
                  sens du détail et compréhension des besoins utilisateurs. Je
                  suis particulièrement intéressée par les technologies web
                  modernes, l'automatisation, le design d'interfaces et les
                  solutions SaaS.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                  En bref
                </h3>
                <ul className="mt-3 space-y-3">
                  {[
                    { icon: GraduationCap, text: "Master 1 — EMIT" },
                    { icon: MapPin, text: "Fianarantsoa, Madagascar" },
                    { icon: Globe, text: "Français & Anglais" },
                    { icon: Award, text: "7 certifications" },
                    { icon: Layers, text: "5 projets majeurs" },
                  ].map((item) => (
                    <li
                      key={item.text}
                      className="flex items-center gap-2.5 text-sm text-gray-600"
                    >
                      <item.icon size={15} className="text-rose-400" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ---- education ---- */}
          <section id="education" className="mb-16 scroll-mt-24">
            <SectionHeading
              icon={GraduationCap}
              title="Diplômes et formations"
              subtitle="Parcours académique"
            />
            <div className="space-y-5">
              {education.map((edu, i) => {
                const { ref, revealed } = useScrollReveal();
                return (
                  <div
                    key={i}
                    ref={ref}
                    className={`scroll-reveal rounded-2xl border border-gray-100 bg-white p-6 shadow-sm ${revealed ? "revealed" : ""}`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {edu.degree}
                        </h3>
                        <p className="text-sm font-medium text-rose-500">
                          {edu.school}
                        </p>
                        <p className="text-xs text-gray-400">{edu.place}</p>
                        {edu.detail && (
                          <p className="mt-1 text-xs text-gray-500">
                            {edu.detail}
                          </p>
                        )}
                      </div>
                      <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-500">
                        <Clock size={11} />
                        {edu.period}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ---- experience timeline ---- */}
          <section id="experience" className="mb-16 scroll-mt-24">
            <SectionHeading
              icon={Briefcase}
              title="Expériences professionnelles"
              subtitle="Parcours"
            />
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:p-8">
              {experiences.map((exp, i) => (
                <TimelineItem key={i} {...exp} />
              ))}
            </div>
          </section>

          {/* ---- projects ---- */}
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

          {/* ---- technical skills ---- */}
          <section id="skills" className="mb-16 scroll-mt-24">
            <SectionHeading
              icon={Layers}
              title="Compétences techniques"
              subtitle="Stack technique"
            />
            <div className="grid gap-5 lg:grid-cols-2">
              {[
                { title: "Front-end", items: technicalSkills.frontend, icon: Code2 },
                { title: "Back-end", items: technicalSkills.backend, icon: Cpu },
                {
                  title: "Automatisation & Outils",
                  items: technicalSkills.tools,
                  icon: Layers,
                },
                {
                  title: "Design Graphique",
                  items: technicalSkills.design,
                  icon: Palette,
                },
              ].map((group) => {
                const { ref, revealed } = useScrollReveal();
                return (
                  <div
                    key={group.title}
                    ref={ref}
                    className={`scroll-reveal rounded-2xl border border-gray-100 bg-white p-6 shadow-sm ${revealed ? "revealed" : ""}`}
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <group.icon size={16} className="text-rose-400" />
                      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                        {group.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((s) => (
                        <span
                          key={s}
                          className="inline-block rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
              {/* UI/UX full width */}
              <div className="scroll-reveal rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
                <div className="mb-3 flex items-center gap-2">
                  <Palette size={16} className="text-rose-400" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                    UI/UX Design
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.ux.map((s) => (
                    <span
                      key={s}
                      className="inline-block rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ---- certifications ---- */}
          <section id="certifications" className="mb-16 scroll-mt-24">
            <SectionHeading
              icon={Award}
              title="Certifications et formations"
              subtitle="Reconnaissances"
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {certifications.map((cert, i) => {
                const { ref, revealed } = useScrollReveal();
                return (
                  <div
                    key={i}
                    ref={ref}
                    className={`scroll-reveal rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:border-rose-100 hover:shadow-md ${revealed ? "revealed" : ""}`}
                  >
                    <h4 className="text-sm font-bold text-gray-900">
                      {cert.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-gray-500">{cert.org}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-2 py-0.5 text-xs text-gray-500">
                        <Clock size={10} />
                        {cert.date}
                      </span>
                      {cert.status && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-600">
                          {cert.status}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ---- contact ---- */}
          <section id="contact" className="scroll-mt-24">
            <SectionHeading
              icon={Send}
              title="Contact"
              subtitle="Parlons de votre projet"
            />
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm lg:p-10">
              <div className="grid gap-8 lg:grid-cols-5">
                <div className="space-y-4 lg:col-span-3">
                  <p className="text-sm leading-relaxed text-gray-600">
                    Vous avez un projet, une opportunité de stage, une mission
                    freelance ou une collaboration en tête ? N'hésitez pas à me
                    contacter. Je suis disponible pour échanger sur vos besoins.
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="space-y-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        type="text"
                        placeholder="Votre nom"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-rose-300 focus:ring-2 focus:ring-rose-100"
                      />
                      <input
                        type="email"
                        placeholder="Votre email"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-rose-300 focus:ring-2 focus:ring-rose-100"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Sujet"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-rose-300 focus:ring-2 focus:ring-rose-100"
                    />
                    <textarea
                      rows={4}
                      placeholder="Votre message..."
                      className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-rose-300 focus:ring-2 focus:ring-rose-100"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800 hover:shadow-lg"
                    >
                      Envoyer le message
                      <Send size={14} />
                    </button>
                  </form>
                </div>
                <div className="space-y-4 lg:col-span-2">
                  <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Coordonnées
                    </h4>
                    <div className="mt-3 space-y-3">
                      <a
                        href={`mailto:${profile.email}`}
                        className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-rose-500"
                      >
                        <Mail size={15} className="text-rose-400" />
                        {profile.email}
                      </a>
                      <a
                        href={`tel:${profile.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-rose-500"
                      >
                        <Phone size={15} className="text-rose-400" />
                        {profile.phone}
                      </a>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <MapPin size={15} className="text-rose-400" />
                        {profile.address}
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Réseaux
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {socialLinks.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 transition hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                        >
                          <s.icon size={14} />
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-rose-400 py-3 text-sm font-semibold text-white transition hover:bg-rose-500 hover:shadow-lg"
                  >
                    <Download size={15} />
                    Demander mon CV
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ---- footer ---- */}
          <footer className="mt-20 border-t border-gray-100 pt-8 text-center">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Andriamanantena Nomeniavo Cathy —
              Tous droits réservés.
            </p>
            <p className="mt-1 text-xs text-gray-300">
              Développé avec passion — Madagascar
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
