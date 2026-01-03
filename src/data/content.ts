import { Code, DesignNib, Flash } from 'iconoir-react';

export const PROJECTS = [
  { 
    id: 1, 
    title: 'Espaço Cinthia França', 
    tag: ['Website', 'Responsivo', 'UI/UX', 'SEO', 'Acessibilidade'], 
    description: 'Site institucional responsivo e moderno para clínica de desenvolvimento infantil neurodivergente.',
    funcao: "Fullstack & Design",
    url: "https://espacocinthiafranca.vercel.app",
    image: "/projeto1.png",
    status: "Finalizado",
  },
  { 
    id: 2, 
    title: 'Psiconnect', 
    tag: ['Web App', 'AI', 'Videochamada', 'Fullstack', 'API REST', 'Equipe'], 
    description: 'Plataforma de terapia online com funcionalidades de videochamada e acompanhamento psicológico.',
    funcao: "Product Owner & Fullstack",
    url: "https://exemplo.com/projeto2",
    image: "/projeto2.jpg",
    status: "Em andamento",
  },
  { 
    id: 3, 
    title: 'Rythym', 
    tag: ['Web App', 'AI'],
    description: 'Aplicativo de streaming de música com playlists personalizadas e recomendações baseadas em IA.',
    funcao: "Fullstack",
    url: "https://exemplo.com/projeto3",
    image: "/projeto3.png",
    status: "Em andamento",
  },
];

export const SKILLS = [
  "HTML", "CSS", "SASS", "React", "Next.js", "Angular.js",
  "JavaScript", "TypeScript", "Tailwind", "Node.js", "Nest.js", 
  "Express", "API REST", "GraphQL", "AWS", "Vercel", "Linux", 
  "PostgreSQL", "MongoDB", "MySQL", "UI/UX", "Figma", "Docker", 
  "PrismaORM", "TypesORM", "Framer Motion", "CI/CD", "Git",
  "PHP", "WordPress", "C#", ".NET", "JQuery", "Web3",
];

export const SERVICES = [
  { title: "Fullstack", icon: Code },
  { title: "Design", icon: DesignNib },
  { title: "Perf.", icon: Flash },
];

export const EducationTimeline = [
  {
    institution: "UNICID",
    degree: "Engenharia de Software",
    period: "2025 - Presente",
    details: "Bacharelado em Engenharia de Software, focando em desenvolvimento de sistemas complexos e arquitetura de software.",
  },
  {
    institution: "UNICID",
    degree: "Análise e Desenvolvimento de Sistemas",
    period: "2022 - 2023",
    details: "Tecnólogo em Análise e Desenvolvimento de Sistemas, com foco em programação, análise de sistemas e desenvolvimento web.",
  },
  {
    institution: "SENAC",
    degree: "Técnico em Informática",
    period: "2021 - 2023",
    details: "Técnico em Informática, com ênfase em programação, redes e suporte técnico.",
  },
  {
    institution: "Colégio Souza Gouveia",
    degree: "Ensino Médio",
    period: "2020 - 2022",
    details: "Ensino Médio completo, com foco em ciências e matemática.",
  },
  {
    institution: "Escola de Idiomas Cultura Inglesa",
    degree: "Língua Inglesa",
    period: "2019 - 2022",
    details: "Cursando Inglês, com foco em comunicação e leitura.",
  },
  {
    institution: "S.O.S. Cultura e Educação",
    degree: "Curso de Digitação",
    period: "2019 - 2020",
    details: "Curso de digitação para aprimorar habilidades de teclado e velocidade de escrita.",
  },
  {
    institution: "S.O.S. Cultura e Educação",
    degree: "Curso de Informática Básica",
    period: "2019 - 2020",
    details: "Curso introdutório de informática, abordando conceitos básicos de hardware e software.",
  },
];

export const professionalExperience = [
  {
    company: "Psiconnect",
    role: "Product Owner & Desenvolvedor Fullstack",
    period: "2025 - Presente",
    responsibilities: [
      "Liderança do desenvolvimento de uma plataforma de terapia online, coordenando uma equipe de 4 desenvolvedores.",
      "Implementação de funcionalidades de videochamada e agendamento utilizando Next.js e Node.js.",
      "Colaboração com designers para criar uma interface de usuário intuitiva e acessível.",
      "Garantia da conformidade com regulamentos de privacidade de dados, como LGPD e GDPR.",
      "Otimização do desempenho da aplicação, resultando em uma redução de 30% no tempo de carregamento.",
    ],
  },
  {
    company: "Espaço Cinthia França",
    role: "Desenvolvedor Fullstack",
    period: "2025 - Presente",
    responsibilities: [
      "Desenvolvimento e manutenção do site institucional utilizando Next.js e Tailwind CSS.",
      "Implementação de práticas de SEO e acessibilidade para melhorar a visibilidade online.",
      "Colaboração com a equipe de design para criar uma experiência de usuário envolvente.",
    ],
  },
  {
    company: "Teleperformance | UOL",
    role: "Suporte Técnico",
    period: "2024",
    responsibilities: [
      "Fornecimento de suporte técnico de primeiro nível para clientes.",
      "Auxilio na resolução de problemas relacionados a software e hardware.",
      "Venda de serviços adicionais e upgrades.",
    ],
  },
];