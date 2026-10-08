import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative isolate pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <Reveal>
            <h1
              id="hero-heading"
              className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              <span className="block">{profile.name}</span>
              <span className="mt-2 block text-2xl font-medium text-muted sm:text-3xl lg:text-4xl">
                {profile.role}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Desenvolvo aplicações web modernas, funcionais e escaláveis.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Link
                href="#projetos"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Ver projetos
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
              <Link
                href="#contato"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-overlay"
              >
                Entrar em contato
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.1}
          className="order-1 mx-auto flex justify-center lg:order-2 lg:justify-end"
        >
          <ProfilePhoto size={320} />
        </Reveal>
      </div>
    </section>
  );
}
