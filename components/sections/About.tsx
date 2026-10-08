import { Award, Code2, GraduationCap, User } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: profile.age, label: "Idade", icon: User },
  { value: profile.education.year, label: "Formação", icon: GraduationCap },
  { value: "UNINASSAU", label: "Instituição", icon: Award },
  { value: "Full Stack", label: "Área de atuação", icon: Code2 },
];

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="relative scroll-mt-20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sobre mim"
          title={
            <span id="about-heading">
              Um pouco sobre quem está por trás do código
            </span>
          }
          subtitle={profile.longBio}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 0.05}>
              <StatCard {...stat} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
