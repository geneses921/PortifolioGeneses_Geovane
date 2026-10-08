import { cn } from "@/lib/utils";

type TimelineItemProps = {
  year: string;
  emoji: string;
  title: string;
  organization: string;
  description?: string;
  isLast?: boolean;
  index?: number;
};

export function TimelineItem({
  year,
  emoji,
  title,
  organization,
  description,
  isLast,
  index = 0,
}: TimelineItemProps) {
  return (
    <li
      className={cn(
        "relative grid grid-cols-[auto_1fr] gap-x-6 pb-10 last:pb-0",
      )}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative flex flex-col items-center">
        <span className="z-10 grid size-10 place-items-center rounded-full border border-border bg-elevated text-base">
          <span aria-hidden>{emoji}</span>
        </span>
        {!isLast && (
          <span
            aria-hidden
            className="absolute top-10 h-full w-px bg-border"
          />
        )}
      </div>
      <div className="pt-1.5">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-elevated/70 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-widest text-muted">
          {year}
        </span>
        <h3 className="mt-2 text-base font-semibold text-foreground sm:text-lg">
          {title}
        </h3>
        <p className="text-sm text-muted">{organization}</p>
        {description ? (
          <p className="mt-1 text-sm text-muted/90">{description}</p>
        ) : null}
      </div>
    </li>
  );
}
