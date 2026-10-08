export type Project = {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  url: string;
  github?: string;
  highlight?: string;
};

export const projects: Project[] = [

  {
    title: "Catálogo Iphone Store",
    description:
      "Catálogo digital para apresentação de produtos com categorias, busca e integração com WhatsApp.",
    image: "/projects/projeto-1.png",
    technologies: ["React", "Node.js", "Tailwind css"],
    url: "https://loja-iphone-smoky.vercel.app/",
    github: "https://github.com/geneses921",
  },
  {
    title: "Pagina Psicologa",
    description:
      "Página para profissionais de psicologia e agendamento de consultas.",
    image: "/projects/projeto2.png",
    technologies: ["React", "Node.js", "Tailwind css"],
    url: "https://lading-page-ranielle-guj5meqs9-geneses921-3666s-projects.vercel.app/",
    github: "https://github.com/geneses921",
  },
  {
    title: "Pagina Cantores",
    description:
      "Página profissional para divulgação de artistas, apresentação do trabalho musical e solicitação de agendamentos para shows e eventos.",
    image: "/projects/projeto3.png",
    technologies: ["React", "Node.js","Tailwind css"],
    url: "https://cantor-virid.vercel.app/",
    github: "https://github.com/geneses921",
  },

];
