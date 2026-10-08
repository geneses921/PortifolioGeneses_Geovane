export const site = {
  name: "Geneses — Portfólio",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://geneses-portfolio.vercel.app",
  email: "geneses.dev@email.com",
  whatsappNumber: "5581999999999",
  socials: {
    github: "https://github.com/geneses921",
    linkedin: "https://www.linkedin.com/in/geneses-geovane-32a933343/",
    whatsapp: "https://wa.me/5581997278565",
    email: "mailto:genesesgeovane@gmail.com",
  },
} as const;

export type SiteConfig = typeof site;
