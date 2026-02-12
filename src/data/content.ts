export const PROJECTS = [
  { 
    id: 1, 
    url: "https://espacocinthiafranca.vercel.app",
    githubUrl: "https://github.com/andreynzz/espacocinthiafranca",
    image: "/projeto1.png",
    tags: ['Website', 'Responsivo', 'UI/UX', 'SEO', 'Accessibility', 'Performance'],
  },
  { 
    id: 2, 
    url: "#",
    githubUrl: "#",
    image: "",
    tags: ['Web App', 'AI', 'Real-time Video', 'Fullstack', 'API REST', 'Equipe', 'Performance', 'Accessibility', 'SEO', 'Responsive Design'], 
  },
  { 
    id: 3, 
    url: "#",
    githubUrl: "https://github.com/andreynzz/rythym",
    image: "",
    tags: ['Web App', 'AI', 'API REST', 'Fullstack', 'Performance', 'Accessibility', 'SEO', 'Responsive Design'],
  },
  {
    id: 4,
    url: "#",
    githubUrl: "https://github.com/andreynzz/spooky_house",
    image: "/spooky_house.svg",
    tags: ['Website', 'Ecommerce', 'Responsivo', 'UI/UX', 'SEO', 'Accessibility', 'Performance']
  },
  {
    id: 5,
    url: "#",
    githubUrl: "https://github.com/andreynzz/botloldiscord",
    image: "/mpjlol.png",
    tags: ['BOT', 'Discord', 'JavaScript', 'API REST', ]
  },
  {
    id: 6,
    url: "#",
    githubUrl: "https://github.com/TheRedDoor-Group/oryon",
    image: "",
    tags: ['Web App', 'AI', 'Scraping', 'Automation', 'Fullstack']
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
  "teamwork", "problemsolving", "agile", "ai_integration", "performance", 
  "SEO", "Accessibility", "communication", "leadership", "creativity", "adaptability",
  "time_management", "critical_thinking", "collaboration"
];

export const EducationTimeline = [
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