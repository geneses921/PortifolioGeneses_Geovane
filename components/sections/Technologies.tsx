import { technologyGroups } from "@/data/technologies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { Reveal } from "@/components/ui/Reveal";

export function Technologies() {
  return (
    <section
      id="tecnologias"
      aria-labelledby="tech-heading"
      className="relative scroll-mt-20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Stack"
          title={
            <span id="tech-heading">
              Tecnologias & Ferramentas
            </span>
          }
          subtitle="As principais tecnologias que utilizo para construir soluções web modernas, do front ao back, do banco ao deploy."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {technologyGroups.map((group, groupIdx) => (
            <Reveal key={group.title} delay={groupIdx * 0.05}>
              <article className="group h-full rounded-xl border border-border bg-elevated p-6 transition-colors hover:border-border-strong">
                <header className="mb-5 flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-overlay text-foreground">
                    <group.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">
                    {group.title}
                  </h3>
                </header>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <li key={tech.name}>
                      <TechBadge name={tech.name} icon={tech.icon} />
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
