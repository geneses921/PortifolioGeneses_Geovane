import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
};

export function ServiceCard({
  title,
  description,
  icon: Icon,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col gap-3 rounded-xl border border-border bg-elevated p-6 transition-colors hover:border-border-strong hover:bg-overlay",
        className,
      )}
    >
      <span className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-overlay text-foreground">
        <Icon className="size-5" aria-hidden />
      </span>
      <h3 className="text-base font-semibold text-foreground sm:text-lg">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
