import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/utils";

type SocialLinkProps = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  external?: boolean;
  className?: string;
};

export function SocialLink({
  label,
  href,
  icon: Icon,
  external = true,
  className,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      aria-label={label}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full border border-border bg-elevated px-4 py-2.5 text-sm text-foreground transition-colors hover:border-border-strong hover:bg-overlay",
        className,
      )}
    >
      <span className="grid size-8 place-items-center rounded-full bg-overlay text-muted transition-colors group-hover:text-foreground">
        <Icon className="size-4" aria-hidden />
      </span>
      <span className="font-medium">{label}</span>
    </a>
  );
}
