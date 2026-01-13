export type TranslationKey =
  | "home"
  | "skills"
  | "projects"
  | "experience"
  | "contact"
  | "toggleTheme"
  | "toggleLanguage"
  | "heroTitle"
  | "heroSubtitle"
  | "heroDescription"
  | "heroHighlight"
  | "contactButton"
  | "experienceTitle"
  | "current"
  | "achievementsSubTitle"
  | "skillsTitle"
  | "frontend"
  | "backend"
  | "design"
  | "tools"
  | "proficiencyLevels"
  | "projectsTitle"
  | "featured"
  | "code"
  | "demo"
  | "viewAllProjects"
  | "contactTitle"
  | "contactSubtitle"
  | "contactInfo"
  | "rights"
  | "madeWith"
  | "using";

export type Translations = {
  [key in TranslationKey]: string;
};

export type Language = "pt" | "en";

export const translations: Record<Language, Translations> = {
  pt: {
    // Header
    home: "Início",
    skills: "Habilidades",
    projects: "Projetos",
    experience: "Experiência",
    contact: "Contato",
    toggleTheme: "Alternar Tema",
    toggleLanguage: "PT/EN",

    // Hero
    heroTitle: "Lucas Batistão",
    heroSubtitle: "Desenvolvedor de Software",
    heroDescription:
      "Apaixonado por criar aplicações eficientes, escaláveis e bem estruturadas, com experiência em desenvolvimento de software.",
    heroHighlight:
      "Transformando ideias em aplicações poderosas que impulsionam o sucesso dos negócios.",
    contactButton: "Entre em contato",

    // Experience
    experienceTitle: "Experiência Profissional",
    current: "Presente",
    achievementsSubTitle: "Principais Conquistas",

    // Tech Skills
    skillsTitle: "Habilidades Técnicas",
    frontend: "Frontend",
    backend: "Backend",
    design: "Design",
    tools: "Ferramentas",
    proficiencyLevels: "Níveis de Proficiência",

    // Projects
    projectsTitle: "Meus Projetos",
    featured: "Destaque",
    code: "Código",
    demo: "Demo",
    viewAllProjects: "Ver Todos os Projetos",

    // Contact
    contactTitle: "Vamos Trabalhar Juntos!",
    contactSubtitle:
      "Entre em contato para discutirmos seu próximo projeto ou oportunidade de trabalho.",
    contactInfo: "Informações de Contato",

    // Footer
    rights: "Todos os direitos reservados",
    madeWith: "Feito com",
    using: "usando React, TypeScript e Tailwind CSS",
  },

  en: {
    // Header
    home: "Home",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    toggleTheme: "Toggle Theme",
    toggleLanguage: "EN/PT",

    // Hero
    heroTitle: "Lucas Batistão",
    heroSubtitle: "Software Developer",
    heroDescription:
      "Passionate about creating efficient, scalable, and well-structured applications with software development experience.",
    heroHighlight:
      "Transforming ideas into powerful applications that drive business success.",
    contactButton: "Contact Me",

    // Experience
    experienceTitle: "Professional Experience",
    current: "Present",
    achievementsSubTitle: "Key Achievements",

    // Tech Skills
    skillsTitle: "Technical Skills",
    frontend: "Frontend",
    backend: "Backend",
    design: "Design",
    tools: "Tools",
    proficiencyLevels: "Proficiency Levels",

    // Projects
    projectsTitle: "My Projects",
    featured: "Featured",
    code: "Code",
    demo: "Demo",
    viewAllProjects: "View All Projects",

    // Contact
    contactTitle: "Let's Work Together!",
    contactSubtitle:
      "Get in touch to discuss your next project or job opportunity.",
    contactInfo: "Contact Information",

    // Footer
    rights: "All rights reserved",
    madeWith: "Made with",
    using: "using React, TypeScript and Tailwind CSS",
  },
};
