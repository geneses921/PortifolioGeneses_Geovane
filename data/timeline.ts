export type TimelineEntry = {
  year: string;
  emoji: string;
  title: string;
  organization: string;
  description?: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: "2024",
    emoji: "🎓",
    title: "Formação em Análise e Desenvolvimento de Sistemas",
    organization: "UNINASSAU Caruaru",
    description: "Conclusão do curso técnico / superior.",
  },
  {
    year: "2024 — Atualmente",
    emoji: "💻",
    title: "Desenvolvimento de projetos e evolução como Full Stack",
    organization: "Projetos próprios e soluções personalizadas",
    description:
      "Criação de sites, sistemas, catálogos online e outras soluções digitais.",
  },
];
