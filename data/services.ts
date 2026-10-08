import type { LucideIcon } from "lucide-react";
import { Bot, Globe, Settings2, ShoppingBag, Smartphone } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Sites e Landing Pages",
    description:
      "Sites modernos, responsivos e focados em apresentação profissional.",
    icon: Globe,
  },
  {
    title: "Catálogos Online",
    description:
      "Catálogos digitais para lojas e empresas apresentarem seus produtos.",
    icon: ShoppingBag,
  },
  {
    title: "Sistemas Web",
    description:
      "Sistemas personalizados para gerenciamento e automação de processos.",
    icon: Settings2,
  },
  {
    title: "Automação",
    description:
      "Soluções para automatizar tarefas e melhorar processos empresariais.",
    icon: Bot,
  },
  {
    title: "Aplicações",
    description: "Aplicações web e mobile utilizando tecnologias modernas.",
    icon: Smartphone,
  },
];
