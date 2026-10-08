export const profile = {
  name: "Geneses",
  age: 24,
  role: "Desenvolvedor Full Stack",
  tagline: "Transformando ideias em soluções digitais.",
  shortBio:
    "Sou Geneses, desenvolvedor Full Stack formado em Análise e Desenvolvimento de Sistemas pela UNINASSAU Caruaru. Desenvolvo sites, sistemas, catálogos online e soluções digitais utilizando tecnologias modernas.",
  longBio:
    "Sou desenvolvedor Full Stack formado em Análise e Desenvolvimento de Sistemas pela UNINASSAU Caruaru, com formação concluída em 2024. Tenho interesse em criar soluções digitais que unam boa experiência de usuário, organização de código e funcionalidades úteis para pessoas e empresas. Trabalho com desenvolvimento web e busco constantemente evoluir minhas habilidades, criando projetos próprios e soluções personalizadas.",
  photo: "/images/profile.jpg",
  education: {
    year: 2024,
    institution: "UNINASSAU Caruaru",
    course: "Análise e Desenvolvimento de Sistemas",
  },
  status: {
    label: "Disponível para projetos",
    available: true,
  },
} as const;

export type Profile = typeof profile;
