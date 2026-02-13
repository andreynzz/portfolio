import { Approach, Category, Education, ProfessionalExperience, Project } from "./interfaces";

export const ImageNotFound = '/404_file_not_found.jpg'

export const STACK = {
  NEXT: "Next.js",
  REACT: "React",
  TS: "TypeScript",
  TAILWIND: "Tailwind",
  NEST: "Nest.js",
  NODE: "Node.js",
  AI: "AI Integration",
  DISCORD: "Discord.js",
  PHP: "PHP",
  WORDPRESS: "WordPress",
  CSHARP: ".NET",
  PYTHON: "Python",
  FASTAPI: "FastAPI",
  FIGMA: "Figma",
  AWS: "AWS",
  SQL: "SQL",
  MONGODB: "MongoDB",
  GRAPHQL: "GraphQL",
  MYSQL: "MySQL",
  POSTGRESQL: "PostgreSQL",
  SCSS: "Sass",
  CSS: "CSS",
  HTML: "HTML",
  JS: "JavaScript",
  ANGULAR: "Angular.js",
  RESTAPI: "REST API",
  LINUX: "Linux",
  EXPRESS: "Express.js",
  CHARTJS: "Chart.js",
  VITE: "Vite.js",
  GIT: "Git",
  GITHUB: "GitHub",
  DOCKER: "Docker",
  PRISMORM: "PrismORM",
  TYPEORM: "TypeORM",
  BOOTSTRAP: "Bootstrap",
  SQLITE: "SQLite",
  LENIS: "Lenis.js",
  GSAP: "GSAP",
  FM: "Framer Motion"
};

const FEATURES = {
  SEO: "SEO",
  A11Y: "Accessibility",
  PERF: "Performance",
  RESPONSIVE: "Responsive Design",
  UI_UX: "UI/UX",
  I18N: "i18n",
  AUTOMATION: "Automation",
};

export const PROJECTS: Project[] = [
  { 
    id: 1, 
    url: "https://espacocinthiafranca.vercel.app",
    githubUrl: "https://github.com/andreynzz/espacocinthiafranca",
    image: "/espacoci.png",
    category: "Website", 
    stack: [STACK.NEXT, STACK.TAILWIND, STACK.TS, STACK.NODE, STACK.FIGMA, STACK.PRISMORM, STACK.POSTGRESQL, STACK.FM],
    features: [FEATURES.RESPONSIVE, FEATURES.UI_UX, FEATURES.SEO, FEATURES.PERF],
    get tags() { return [this.category, ...this.stack, ...this.features] }
  },
  { 
    id: 2, 
    url: "#",
    githubUrl: "#",
    image: ImageNotFound,
    category: "Web App", 
    stack: [STACK.NEXT, STACK.TAILWIND, STACK.TS, STACK.AI, STACK.RESTAPI, STACK.DOCKER],
    features: [FEATURES.RESPONSIVE, FEATURES.UI_UX, FEATURES.SEO, FEATURES.PERF, FEATURES.I18N],
    get tags() { return [this.category, ...this.stack, ...this.features] }
  },
  { 
    id: 3, 
    url: "#",
    githubUrl: "https://github.com/andreynzz/rythym",
    image: ImageNotFound,
    category: "Web App", 
    stack: [STACK.NEXT, STACK.SCSS, STACK.TS, STACK.AI, STACK.RESTAPI, STACK.DOCKER, STACK.LENIS, STACK.GSAP],
    features: [FEATURES.RESPONSIVE, FEATURES.UI_UX, FEATURES.SEO, FEATURES.PERF, FEATURES.I18N],
    get tags() { return [this.category, ...this.stack, ...this.features] }
  },
  {
    id: 4,
    url: "#",
    githubUrl: "https://github.com/andreynzz/spooky_house",
    image: "/spooky_house.svg",
    category: "Website", 
    stack: [STACK.PHP, STACK.BOOTSTRAP, STACK.MYSQL, STACK.CSS, STACK.HTML, STACK.JS],
    features: [FEATURES.UI_UX, FEATURES.RESPONSIVE],
    get tags() { return [this.category, ...this.stack, ...this.features] }
  },
  {
    id: 5,
    url: "#",
    githubUrl: "https://github.com/andreynzz/botloldiscord",
    image: "/mpjlol.png",
    category: "Bot",
    stack: [STACK.DISCORD, STACK.JS],
    features: [],
    get tags() { return [this.category, ...this.stack, ...this.features] }
  },
  {
    id: 6,
    url: "#",
    githubUrl: "https://github.com/TheRedDoor-Group/oryon",
    image: ImageNotFound,
    category: "API REST",
    stack: [STACK.PYTHON, STACK.FASTAPI, STACK.SQLITE, STACK.VITE],
    features: [FEATURES.AUTOMATION],
    get tags() { return [this.category, ...this.stack, ...this.features] }
  },
  {
    id: 7,
    url: "https://finances-dashboard-lime.vercel.app",
    githubUrl: "https://github.com/andreynzz/finances-dashboard",
    image: "/finance_manager.png",
    category: "Web App",
    stack: [STACK.ANGULAR, STACK.TS, STACK.SCSS, STACK.CHARTJS, STACK.LENIS, STACK.GSAP, STACK.HTML],
    features: [FEATURES.RESPONSIVE, FEATURES.UI_UX],
    get tags() { return [this.category, ...this.stack, ...this.features] }
  }
];

// Apenas as chaves para buscar no JSON
export const SOFT_SKILLS_KEYS = [
  "teamwork", "problemsolving", "agile", "ai_integration", "performance", 
  "SEO", "Accessibility", "communication", "leadership", "creativity", "adaptability",
  "time_management", "critical_thinking", "collaboration"
];

export const EducationTimeline: Education[] = [
  {
    translationKey: "UNICID_ES",
    institution: "Universidade Cidade de São Paulo - UNICID",
    period: "2025 - 2028",
  },
  {
    translationKey: "UNICID_ADS",
    institution: "Universidade Cidade de São Paulo - UNICID",
    period: "2023 - 2024",
  },
  {
    translationKey: "SENAC",
    institution: "SENAC - Serviço Nacional de Aprendizagem Comercial",
    period: "2021 - 2023",
  },
  {
    translationKey: "CULTURA",
    institution: "Cultura Inglesa - Escola de Idiomas e Cultura",
    period: "2019 - 2022",
  }
];

export const professionalExperience: ProfessionalExperience[] = [
  {
    translationKey: "Psiconnect",
    company: "Psiconnect",
    responsibilityCount: 5, // Ajuda a iterar no componente (res1, res2...)
  },
  {
    translationKey: "EspacoCinthia",
    company: "Espaço Cinthia França",
    responsibilityCount: 3,
  },
  {
    translationKey: "Teleperformance",
    company: "Teleperformance | UOL",
    responsibilityCount: 3,
  },
];

export const MY_APPROACH: Approach[] = [
  {
    id: 1,
    icon: "user", // Vamos usar isso para escolher o ícone no componente
    translationKey: "ux_centric"
  },
  {
    id: 2,
    icon: "code",
    translationKey: "clean_code"
  },
  {
    id: 3,
    icon: "fast",
    translationKey: "performance"
  }
];

// mapeamento para múltiplas tags
export const CATEGORY_MAP: Record<string, string[]> = {
  ai: ['AI', 'BOT'],
  web_app: ['Web App', 'Website'],
  api: ['API REST', 'GraphQL'],
};

export const CATEGORIES: Category[] = [
  { id: "all", label: "Todos"},
  { id: "api", label: "API"},
  { id: "web_app", label: "Web/App"},
  { id: "ai", label: "AI & Bots"},
];