import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectPlaceholderProps = {
  title: string;
  className?: string;
};

export function ProjectPlaceholder({ title, className }: ProjectPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-elevated",
        className,
      )}
      aria-hidden
    >
      <div className="relative flex flex-col items-center gap-3 text-center">
        <span className="grid size-12 place-items-center rounded-xl border border-border bg-overlay text-subtle">
          <ImageOff className="size-5" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
          Preview do projeto
        </span>
        <span className="max-w-[80%] truncate text-sm font-medium text-muted">
          {title}
        </span>
      </div>
    </div>
  );
}
