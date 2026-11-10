import { cvData as fr } from "@/data/cvData";
import type { CVData } from "@/types/cv";

export const cvDataEn: CVData = {
  profile: {
    ...fr.profile,
    title: "Web & Mobile Developer | Automation & Health IS",
    headline:
      "I turn complex business needs into web and mobile applications and data flows that are simple to use.",
    summary:
      "Early-career Web and Mobile Developer focused on information systems, automation and digital health. I enjoy building clear, robust and human experiences, connecting field needs with modern technologies such as Flutter, React, Angular, Next.js, NestJS, PostgreSQL, Firebase, n8n, DHIS2, OpenFn and CommCare.",
    links: fr.profile.links.map((link) =>
      link.label === "Portfolio" ? { ...link, value: "Personal portfolio" } : link
    ),
  },
  stats: [
    { ...fr.stats[0], label: "sponsorships tracked each year" },
    { ...fr.stats[1], label: "reduction in processing time" },
    { ...fr.stats[2], label: "business-oriented SaaS projects" },
    { ...fr.stats[3], label: "DHIS2, OpenFn, CommCare and interoperability" },
  ],
  experiences: [
    {
      ...fr.experiences[0],
      role: "Information Systems Consultant",
      organization: "World Bank Pivot Project / CIRAD",
      period: "June 2026 - July 2026",
      context:
        "Contribution to a digital health project where data flows, dashboards and deliverables must stay consistent across several tools.",
      missions: [
        "Analyse functional needs and data journeys.",
        "Contribute to the interoperability architecture between platforms.",
        "Help track deliverables and structure dashboards.",
      ],
      impact: "Clearer view of exchanges between systems and better preparation of steering indicators.",
    },
    {
      ...fr.experiences[1],
      role: "Showcase website developer with n8n",
      organization: "International client in Canada",
      period: "Since January 2026",
      context:
        "Creation of a professional showcase website connected to automation workflows to reduce repetitive tasks.",
      missions: [
        "Develop a clear interface to present the services.",
        "Set up email validation and automated reminders.",
        "Structure reporting and tracking of business actions.",
      ],
      impact: "Smoother process, stronger traceability and reduced operational time.",
    },
    {
      ...fr.experiences[2],
      role: "Mobile Developer - Sponsored students management",
      organization: "EMIT Fianarantsoa",
      period: "Since May 2025",
      context:
        "Mobile application to digitise the follow-up of sponsored students and administrative approvals.",
      missions: [
        "Design the mobile application and the data model.",
        "Centralise registrations, approvals and histories.",
        "Improve the traceability of the sponsorship process.",
      ],
      impact: "70% reduction in processing time and over 200 sponsorships tracked each year.",
    },
    {
      ...fr.experiences[3],
      role: "Full Stack Developer — Psychosocial Risk SaaS Redesign",
      organization: "Laroche 360 — International client in Canada",
      period: "Since October 2026",
      context:
        "Preparing the redesign of Laroche 360, a psychosocial risk management SaaS platform for a client in Canada, with modernised user journeys and automated email communications through SendGrid.",
      missions: [
        "Analyse the existing application and business needs to prepare the redesign.",
        "Prepare the modernisation of interfaces and user journeys.",
        "Plan transactional email automation with SendGrid, including notifications and reminders integrated into user journeys.",
      ],
      impact: "Redesign objectives: improve SaaS usability and maintainability, reduce manual email sending and streamline follow-up through automated emails.",
    },
  ],
  projects: [
    {
      ...fr.projects[0],
      title: "Sponsored students management application",
      category: "Mobile / Education",
      role: "Design, mobile development and data modelling",
      description:
        "Flutter and Firebase application to digitise the registration, approval and follow-up of student sponsorships.",
      impact: "Over 200 sponsorships tracked and processing time reduced by 70%.",
    },
    {
      ...fr.projects[1],
      title: "Automated showcase website with n8n",
      category: "Business automation",
      role: "Frontend development and workflow orchestration",
      description:
        "Showcase website coupled with workflows for email validation, reminders and automated reporting.",
      impact: "Fewer manual tasks and better operational continuity.",
    },
    {
      ...fr.projects[2],
      title: "IS / Digital health project",
      category: "Interoperability",
      role: "Functional analysis and structuring of data flows",
      description:
        "Work on how data moves between field tools, collection platforms and dashboards.",
      impact: "More readable flow architecture and better-tracked deliverables.",
    },
    {
      ...fr.projects[3],
      title: "Psychosocial risk management SaaS redesign",
      category: "SaaS / Full Stack",
      role: "Analysis of the existing product, journey design and redesign preparation",
      description:
        "Modernisation of the admin side of a psychosocial-risk survey platform: campaigns, results, reports and automated emails through SendGrid.",
      impact: "Goal: clearer usability and fewer manual email sends.",
    },
  ],
  skills: [
    fr.skills[0],
    fr.skills[1],
    fr.skills[2],
    { ...fr.skills[3], title: "Databases" },
    { ...fr.skills[4], title: "Automation" },
    { ...fr.skills[5], title: "Digital health & interoperability" },
    {
      title: "Design",
      focus: "health",
      items: ["UML", "Requirements analysis", "IS architecture", "Prototyping", "User research"],
    },
    { ...fr.skills[7], title: "Tools" },
    {
      title: "Professional qualities",
      items: ["Independent", "Resourceful", "Rigorous", "Curious", "Team player", "Well-organised"],
    },
  ],
  education: [
    {
      ...fr.education[0],
      title: "Engineer in Modelling and Computer Engineering",
      period: "In progress",
      detail: "Programme focused on design, software architecture and information systems.",
    },
    {
      ...fr.education[1],
      title: "Bachelor's degree in Computer Science",
      detail: "Internet and Intranet Application Development.",
    },
  ],
  certifications: [
    { ...fr.certifications[0], detail: "Five certifications related to digital health systems." },
    { ...fr.certifications[1], period: "September 2025" },
    { ...fr.certifications[2], period: "November 2024" },
    { ...fr.certifications[3], period: "November 2024" },
    { ...fr.certifications[4], period: "November 2024" },
  ],
  languages: [
    { name: "French", level: "DELF B1 / B2" },
    { name: "English", level: "Intermediate level" },
  ],
};
