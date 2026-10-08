import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { techNameBySlug } from "@/data/technologies";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./BrandIcons";
import { ProjectPlaceholder } from "./ProjectPlaceholder";
import { TechBadge } from "./TechBadge";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-elevated transition-colors hover:border-border-strong",
        className,
      )}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-video w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]">
          {project.image ? (
            <Image
              src={project.image}
              alt={`Preview do projeto ${project.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          ) : (
            <ProjectPlaceholder title={project.title} />
          )}
        </div>

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />

        {project.highlight ? (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-background/70 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-foreground" aria-hidden />
            {project.highlight}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-1.5">
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => {
            const found = techNameBySlug[tech.toLowerCase()];
            return found ? (
              <TechBadge
                key={tech}
                name={tech}
                icon={found.icon}
                size="sm"
              />
            ) : (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-border bg-elevated px-2.5 py-1 text-xs font-medium text-muted"
              >
                {tech}
              </span>
            );
          })}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-2">
          <Link
            href={project.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border-strong bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Ver projeto
            <ArrowUpRight
              className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              aria-hidden
            />
          </Link>
          {project.github ? (
            <Link
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Repositório no GitHub de ${project.title}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-elevated px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-overlay"
            >
              <GithubIcon className="size-4" aria-hidden />
              GitHub
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
