import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-heading"
      className="relative scroll-mt-20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="O que eu desenvolvo"
          title={
            <span id="services-heading">
              Tipos de soluções que eu entrego
            </span>
          }
          subtitle="Soluções digitais pensadas para empresas, profissionais e projetos pessoais — sempre com foco em qualidade e resultado."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <Reveal key={service.title} delay={idx * 0.05}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
