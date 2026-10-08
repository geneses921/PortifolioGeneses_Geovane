import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type StatCardProps = {
  value: string | number;
  label: string;
  icon: LucideIcon;
  className?: string;
};

export function StatCard({ value, label, icon: Icon, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "group flex items-center gap-4 rounded-xl border border-border bg-elevated p-4 transition-colors hover:border-border-strong hover:bg-overlay",
        className,
      )}
    >
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-overlay text-muted">
        <Icon className="size-5" aria-hidden />
      </span>
      <div className="min-w-0">
        <div className="font-mono text-2xl font-semibold tracking-tight text-foreground">
          {value}
        </div>
        <div className="text-xs font-medium uppercase tracking-wider text-muted">
          {label}
        </div>
      </div>
    </div>
  );
}
