import Image from "next/image";
import { UserRound } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

type ProfilePhotoProps = {
  size?: number;
  className?: string;
};

export function ProfilePhoto({ size = 320, className }: ProfilePhotoProps) {
  return (
    <div
      className={cn("relative inline-flex flex-col items-center", className)}
    >
      <div
        className="relative overflow-hidden rounded-full border border-border-strong bg-elevated shadow-xl shadow-black/40"
        style={{ width: size, height: size }}
      >
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-overlay via-elevated to-overlay text-muted">
          <div className="flex flex-col items-center gap-2">
            <UserRound className="size-10" aria-hidden />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Sua foto aqui
            </span>
            <span className="font-mono text-[10px] text-subtle">
              /images/profile.jpg
            </span>
          </div>
        </div>
        <Image
          src={profile.photo}
          alt={`Foto de ${profile.name}`}
          fill
          sizes="(max-width: 768px) 240px, 320px"
          priority
          className="relative z-10 object-cover"
        />
      </div>

      <span
        className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-elevated px-3 py-1.5 text-xs font-medium text-foreground shadow-md backdrop-blur whitespace-nowrap"
        aria-hidden
      >
        <span className="relative flex size-2">
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
        </span>
        {profile.status.label}
      </span>
    </div>
  );
}
