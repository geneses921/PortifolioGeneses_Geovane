"use client";

import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLink } from "@/components/ui/SocialLink";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const initialState = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof typeof initialState, string>>>({});
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof typeof initialState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((s) => ({ ...s, [key]: e.target.value }));
      setErrors((s) => ({ ...s, [key]: undefined }));
    };

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Informe seu nome.";
    if (!form.email.trim()) e.email = "Informe seu e-mail.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "E-mail inválido.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Conte um pouco mais sobre o que você precisa (mín. 10 caracteres).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(
      form.subject.trim() || `Contato pelo portfólio — ${form.name}`,
    );
    const body = encodeURIComponent(
      `Nome: ${form.name}\nE-mail: ${form.email}\n\n${form.message}`,
    );
    const mailto = `${site.socials.email}?subject=${subject}&body=${body}`;

    const link = document.createElement("a");
    link.href = mailto;
    link.rel = "noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setSent(true);
  };

  const socials = [
    { label: "GitHub", href: site.socials.github, icon: GithubIcon },
    { label: "LinkedIn", href: site.socials.linkedin, icon: LinkedinIcon },
    { label: "WhatsApp", href: site.socials.whatsapp, icon: MessageCircle },
    { label: "E-mail", href: site.socials.email, icon: Mail },
  ];

  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contato"
          title={
            <span id="contact-heading">
              Vamos criar algo <span className="text-muted">juntos?</span>
            </span>
          }
          subtitle="Tem uma ideia, projeto ou negócio que precisa de uma solução digital? Entre em contato comigo."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <form
              onSubmit={onSubmit}
              noValidate
              aria-label="Formulário de contato"
              className="rounded-2xl border border-border bg-elevated p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field
                  label="Nome"
                  name="name"
                  value={form.name}
                  onChange={update("name")}
                  error={errors.name}
                  placeholder="Seu nome"
                  autoComplete="name"
                  required
                />
                <Field
                  label="E-mail"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  error={errors.email}
                  placeholder="voce@email.com"
                  autoComplete="email"
                  required
                />
                <Field
                  label="Assunto"
                  name="subject"
                  value={form.subject}
                  onChange={update("subject")}
                  placeholder="Sobre o que vamos conversar?"
                  className="sm:col-span-2"
                />
                <Field
                  label="Mensagem"
                  name="message"
                  value={form.message}
                  onChange={update("message")}
                  error={errors.message}
                  placeholder="Descreva brevemente sua ideia ou necessidade..."
                  textarea
                  required
                  className="sm:col-span-2"
                />
              </div>

              <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted">
                  Ao enviar, seu cliente de e-mail será aberto com a mensagem
                  pré-preenchida.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                >
                  {sent ? "Abrindo e-mail..." : "Enviar mensagem"}
                  <Send className="size-4" aria-hidden />
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-2xl border border-border bg-elevated p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                  Encontre-me também em
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  {socials.map(({ label, href, icon }) => (
                    <SocialLink
                      key={label}
                      label={label}
                      href={href}
                      icon={icon}
                      external={!href.startsWith("mailto:")}
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-elevated p-6">
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                  Resposta rápida
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Geralmente respondo em até <strong className="text-foreground">24h</strong>{" "}
                  em dias úteis. Para algo urgente, prefira o WhatsApp.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  error?: string;
  autoComplete?: string;
  className?: string;
};

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  textarea,
  required,
  error,
  autoComplete,
  className,
}: FieldProps) {
  const id = `field-${name}`;
  const errorId = error ? `${id}-error` : undefined;
  const baseClass = cn(
    "w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-subtle outline-none transition-colors",
    "focus:border-foreground",
    error ? "border-red-500/60" : "border-border",
    className,
  );
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-mono text-xs uppercase tracking-wider text-subtle"
      >
        {label}
        {required ? <span aria-hidden className="ml-0.5 text-foreground">*</span> : null}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={5}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className={cn(baseClass, "min-h-32 resize-y")}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className={baseClass}
        />
      )}
      {error ? (
        <span id={errorId} role="alert" className="text-xs text-red-400">
          {error}
        </span>
      ) : null}
    </div>
  );
}
