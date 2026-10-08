import type { LucideIcon } from "lucide-react";
import {
  Code2,
  FileCode2,
  Plug,
  Server,
  Smartphone,
  Terminal,
  Wrench,
} from "lucide-react";
import {
  siGit,
  siGithub,
  siJavascript,
  siMongodb,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siReact,
  siTailwindcss,
  siVercel,
} from "simple-icons";

type SimpleIcon = { path: string; hex: string; title: string };

export type TechIcon =
  | { kind: "lucide"; icon: LucideIcon }
  | { kind: "si"; icon: SimpleIcon };

export type TechItem = {
  name: string;
  icon: TechIcon;
};

export type TechGroup = {
  title: string;
  icon: LucideIcon;
  items: TechItem[];
};

const si = (icon: SimpleIcon): TechIcon => ({ kind: "si", icon });
const li = (icon: LucideIcon): TechIcon => ({ kind: "lucide", icon });

export const technologyGroups: TechGroup[] = [
  {
    title: "Front-end",
    icon: Code2,
    items: [
      { name: "HTML", icon: li(FileCode2) },
      { name: "CSS", icon: li(FileCode2) },
      { name: "JavaScript", icon: si(siJavascript) },
      { name: "React", icon: si(siReact) },
      { name: "Next.js", icon: si(siNextdotjs) },
      { name: "Tailwind CSS", icon: si(siTailwindcss) },
      { name: "React Native", icon: li(Smartphone) },
    ],
  },
  {
    title: "Back-end",
    icon: Server,
    items: [
      { name: "Node.js", icon: si(siNodedotjs) },
      { name: "APIs REST", icon: li(Plug) },
      { name: "NestJS", icon: si(siNestjs) },
    ],
  },
  {
    title: "Banco de dados",
    icon: Server,
    items: [
      { name: "MySQL", icon: si(siMysql) },
      { name: "PostgreSQL", icon: si(siPostgresql) },
      { name: "MongoDB", icon: si(siMongodb) },
      { name: "Prisma", icon: si(siPrisma) },
    ],
  },
  {
    title: "Ferramentas",
    icon: Wrench,
    items: [
      { name: "Git", icon: si(siGit) },
      { name: "GitHub", icon: si(siGithub) },
      { name: "VS Code", icon: li(Terminal) },
      { name: "Vercel", icon: si(siVercel) },
    ],
  },
];

export const techNameBySlug = (() => {
  const map: Record<string, TechItem> = {};
  for (const group of technologyGroups) {
    for (const item of group.items) {
      map[item.name.toLowerCase()] = item;
    }
  }
  return map;
})();
