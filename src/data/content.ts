export const PROJECTS = [
  { 
    id: 1, 
    url: "https://espacocinthiafranca.vercel.app",
    image: "/projeto1.png",
    tag: ['Website', 'Responsivo', 'UI/UX', 'SEO', 'Acessibilidade'],
  },
  { 
    id: 2, 
    url: "https://exemplo.com/projeto2",
    image: "/projeto2.jpg",
    tag: ['Web App', 'AI', 'Videochamada', 'Fullstack', 'API REST', 'Equipe'], 
  },
  { 
    id: 3, 
    url: "https://github.com/drey-dev/rythym",
    image: "/projeto3.png",
    tag: ['Web App', 'AI', 'API REST'],
  },
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
    institution: "UNICID",
    period: "2025 - Presente",
  },
  {
    translationKey: "UNICID_ADS",
    institution: "UNICID",
    period: "2022 - 2023",
  },
  {
    translationKey: "SENAC",
    institution: "SENAC",
    period: "2021 - 2023",
  },
  {
    translationKey: "SOUZA",
    institution: "Colégio Souza Gouveia",
    period: "2020 - 2022",
  },
  {
    translationKey: "CULTURA",
    institution: "Escola de Idiomas Cultura Inglesa",
    period: "2019 - 2022",
  },
  {
    translationKey: "SOS_DIG",
    institution: "S.O.S. Cultura e Educação",
    period: "2019 - 2020",
  },
  {
    translationKey: "SOS_INFO",
    institution: "S.O.S. Cultura e Educação",
    period: "2019 - 2020",
  },
];

export const professionalExperience = [
  {
    translationKey: "Psiconnect",
    company: "Psiconnect",
    period: "2025 - Presente",
    responsibilityCount: 5, // Ajuda a iterar no componente (res1, res2...)
  },
  {
    translationKey: "EspacoCinthia",
    company: "Espaço Cinthia França",
    period: "2025 - Presente",
    responsibilityCount: 3,
  },
  {
    translationKey: "Teleperformance",
    company: "Teleperformance | UOL",
    period: "2024",
    responsibilityCount: 3,
  },
];