import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { site } from "@/lib/site";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

const items = [
  { href: site.socials.github, label: "GitHub", Icon: GithubIcon },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: site.socials.whatsapp, label: "WhatsApp", Icon: MessageCircle },
  { href: site.socials.email, label: "E-mail", Icon: Mail },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between md:gap-12 lg:px-8">
        <div className="max-w-md space-y-3">
          <Link
            href="#inicio"
            className="inline-flex items-center gap-2 text-base font-semibold"
          >
            <span
              aria-hidden
              className="grid size-8 place-items-center rounded-md border border-border bg-elevated font-mono text-xs font-bold text-foreground"
            >
              G
            </span>
            <span>{profile.name}</span>
            <span className="text-muted">— {profile.role}</span>
          </Link>
          <p className="text-sm leading-relaxed text-muted">
            Desenvolvendo soluções digitais com tecnologia e criatividade.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
            Redes & Contato
          </span>
          <ul className="flex flex-wrap items-center gap-2">
            {items.map(({ href, label, Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                  aria-label={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-elevated px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-border-strong hover:bg-overlay"
                >
                  <Icon className="size-4 text-muted" aria-hidden />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {profile.name}. Todos os direitos
            reservados.
          </p>
          <p className="font-mono">
            Construído com{" "}
            <span className="text-foreground">Next.js</span>,{" "}
            <span className="text-foreground">TypeScript</span> e{" "}
            <span className="text-foreground">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
