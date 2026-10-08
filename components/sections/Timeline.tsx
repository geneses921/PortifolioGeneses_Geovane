import { timeline } from "@/data/timeline";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { Reveal } from "@/components/ui/Reveal";

export function Timeline() {
  return (
    <section
      id="jornada"
      aria-labelledby="journey-heading"
      className="relative scroll-mt-20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Jornada"
          title={
            <span id="journey-heading">
              Minha trajetória
            </span>
          }
          subtitle="Os principais marcos da minha caminhada como desenvolvedor."
        />

        <ol className="mt-12">
          {timeline.map((entry, idx) => (
            <Reveal key={entry.year} delay={idx * 0.05}>
              <TimelineItem
                year={entry.year}
                emoji={entry.emoji}
                title={entry.title}
                organization={entry.organization}
                description={entry.description}
                isLast={idx === timeline.length - 1}
                index={idx}
              />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
