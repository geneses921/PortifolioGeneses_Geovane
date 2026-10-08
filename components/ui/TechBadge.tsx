import { cn } from "@/lib/utils";
import type { TechIcon } from "@/data/technologies";

type TechBadgeProps = {
  name: string;
  icon: TechIcon;
  size?: "sm" | "md";
  className?: string;
};

export function TechBadge({ name, icon, size = "md", className }: TechBadgeProps) {
  const dim = size === "sm" ? "size-3.5" : "size-4";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-elevated px-2.5 py-1 text-xs font-medium text-muted",
        className,
      )}
    >
      {icon.kind === "lucide" ? (
        <icon.icon className={cn(dim, "text-subtle")} aria-hidden />
      ) : (
        <svg
          role="img"
          viewBox="0 0 24 24"
          aria-hidden
          className={cn(dim, "text-muted")}
          fill="currentColor"
        >
          <path d={icon.icon.path} />
        </svg>
      )}
      {name}
    </span>
  );
}
