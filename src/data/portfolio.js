/* ==========================================================================
   Portfolio content — sourced from AGENTS.md
   ========================================================================== */

export const profile = {
  name: "Por",
  location: "Thailand",
  tagline: "Aspiring Software Developer | Transitioning into Tech",
  // TODO: Replace with your real email address
  email: "prongchais@gmail.com",
  // TODO: Replace with your real GitHub username
  github: "https://github.com/Prongchais-cloud",
  // TODO: Replace with your real LinkedIn profile URL
  linkedin: "https://www.linkedin.com/in/supakit-prongchai/",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const heroMeta = ["React", "Node.js", "Airflow", "dbt"];

export const goals = [
  "Actively studying toward a first software developer role",
  "Long-term: data engineering and AI/ML career paths",
  "Self-directed discipline — learning in public, shipping weekly",
];

export const companies = ["SCB Tech", "Agoda", "Grab", "PTT Digital"];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "code",
    tint: "violet",
    items: [
      "HTML5 & semantic markup",
      "CSS — Flexbox, Grid, responsive design, rem units",
      "React + Tailwind CSS",
    ],
  },
  {
    title: "JavaScript & Backend",
    icon: "database",
    tint: "pink",
    items: [
      "JavaScript — ES Modules, async/await",
      "Node.js backend basics",
      "MongoDB / MongoDB Atlas",
    ],
  },
  {
    title: "Tooling & Workflow",
    icon: "git",
    tint: "lime",
    items: [
      "Git & GitHub — version control, collaboration",
      "API integration",
      "Environment variables & secret management",
    ],
  },
  {
    title: "Currently Learning",
    icon: "book",
    tint: "green",
    items: [
      "React / Node.js ecosystem",
      "Data engineering tooling — Airflow, dbt",
      "Cloud platforms",
    ],
  },
];

export const learningPills = [
  { label: "Airflow", dot: "violet" },
  { label: "dbt", dot: "pink" },
  { label: "Cloud platforms", dot: "green" },
  { label: "React / Node.js ecosystem", dot: "lime" },
];

export const projects = [
  {
    index: "01",
    title: "Pokémon Explorer",
    stack: ["React", "Tailwind", "PokeAPI"],
    description:
      "A frontend web app that fetches and displays Pokémon data from the public PokeAPI — built to practice component-based UI design, data fetching, state management, and debugging real-world API responses.",
    highlights:
      "Practical debugging techniques · data flow between components · working with a third-party REST API",
    // TODO: Add your GitHub repo / live demo link
    link: "#",
  },
  {
    index: "02",
    title: "Animal Data Fetcher",
    stack: ["Node.js", "ES Modules", "REST API"],
    description:
      "A module-based project that fetches data from a public animal API and exports it for use elsewhere in an application.",
    highlights:
      ".env files & API key security · ES Modules vs. CommonJS · async data export patterns",
    // TODO: Add your GitHub repo link
    link: "#",
  },
  {
    index: "03",
    title: "Responsive Personal Website",
    stack: ["HTML5", "CSS3"],
    description:
      "A hand-built responsive website exploring semantic HTML, a responsive navbar with a hamburger menu for mobile, and modern CSS layout techniques.",
    highlights: "Semantic elements · Flexbox/Grid layout · rem units",
    note: "you're looking at it",
    // TODO: Add your GitHub repo / live demo link
    link: "#",
  },
];

export const contactPills = [
  { label: "Open to opportunities", dot: "lime" },
  { label: "Thailand · UTC+7", dot: "violet" },
  { label: "Learning in public", dot: "pink" },
  { label: "Data Engineering · AI/ML", dot: "green" },
];
