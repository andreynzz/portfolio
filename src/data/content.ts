export const PROJECTS = [
  { 
    id: 1, 
    url: "https://espacocinthiafranca.vercel.app",
    image: "/projeto1.png",
    tag: ['Website', 'Responsivo', 'UI/UX', 'SEO', 'Acessibilidade'],
  },
  { 
    id: 2, 
    url: "#",
    image: "",
    tag: ['Web App', 'AI', 'Videochamada', 'Fullstack', 'API REST', 'Equipe'], 
  },
  { 
    id: 3, 
    url: "https://github.com/andreynzz/rythym",
    image: "",
    tag: ['Web App', 'AI', 'API REST'],
  },
  {
    id: 4,
    url: "https://github.com/andreynzz/spooky_house",
    image: "/spooky_house.svg",
    tag: ['Website', 'Ecommerce', 'Responsivo']
  },
  {
    id: 5,
    url: "https:github.com/andreynzz/botloldiscord",
    image: "/mpjlol.png",
    tag: ['BOT', 'Discord']
  }
];

// Separa skills técnicas (universais) das comportamentais (traduzíveis)
export const TECH_SKILLS = [
  "HTML", "CSS", "SASS", "React", "Next.js", "Angular.js", "Bootstrap",
  "JavaScript", "TypeScript", "Tailwind", "Node.js", "Nest.js", "NoSQL",
  "Express", "API REST", "GraphQL", "AWS", "Vercel", "Linux",
  "PostgreSQL", "MongoDB", "MySQL", "Docker", "PrismaORM", "Git",
  "PHP", "WordPress", "C#", ".NET", "Python", "Figma"
];

// Apenas as chaves para buscar no JSON
export const SOFT_SKILLS_KEYS = [
  "teamwork", "problemsolving", "agile", "ai_integration", "performance", "SEO", "Accessibility"
];

export const EducationTimeline = [
  {
    translationKey: "UNICID_ES",
    institution: "Universidade Cidade de São Paulo - UNICID",
    period: "2025 - Presente",
  },
  {
    translationKey: "UNICID_ADS",
    institution: "Universidade Cidade de São Paulo - UNICID",
    period: "2023 - 2024",
  },
  {
    translationKey: "SENAC",
    institution: "SENAC",
    period: "2021 - 2023",
  },
  {
    translationKey: "CULTURA",
    institution: "Escola de Idiomas Cultura Inglesa",
    period: "2019 - 2022",
  }
];

export const professionalExperience = [
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

export const MY_APPROACH = [
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