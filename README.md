# Portfólio — Geneses

Portfólio pessoal e profissional de **Geneses**, Desenvolvedor Full Stack.
Construído com **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4** e **Framer Motion**.

## 🚀 Como rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev

# 3. Build de produção
npm run build
npm run start
```

Acesse [http://localhost:3000](http://localhost:3000).

## 📁 Estrutura

```
.
├── app/                     # App Router (rotas, layout, metadata, sitemap, robots)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   ├── layout/              # Navbar + Footer
│   ├── sections/            # Hero, About, Technologies, Projects, Services, Timeline, Contact
│   └── ui/                  # Reveal, SectionHeading, ProjectCard, ProfilePhoto, etc.
│
├── data/                    # ⭐ Dados editáveis (profile, projects, technologies, services, timeline)
├── lib/                     # cn() helper + site config (links sociais, URL)
├── public/
│   ├── images/              # ← Coloque sua foto em profile.jpg (ver public/images/README.md)
│   └── projects/            # ← Capas dos projetos (ver public/projects/README.md)
│
└── README.md                # este arquivo
```

## ✏️ Como editar o conteúdo

### 1. Dados pessoais e sociais

Tudo fica centralizado em dois arquivos:

- **`data/profile.ts`** — nome, idade, foto, formação, bio, status.
- **`lib/site.ts`** — URL do site, e-mail, número do WhatsApp e links sociais (GitHub, LinkedIn, WhatsApp, e-mail).

Edite esses arquivos para refletir suas informações.

### 2. Foto de perfil

Salve sua foto em **`public/images/profile.jpg`** (veja `public/images/README.md`).

### 3. Projetos

Edite o array `projects` em **`data/projects.ts`**. Cada item segue a interface:

```ts
{
  title: string;
  description: string;
  image?: string;            // caminho em /public, ex.: "/projects/projeto-1.png"
  technologies: string[];   // ex.: ["Next.js", "TypeScript", "Tailwind"]
  url: string;              // link do projeto
  github?: string;          // link do repositório (opcional)
  highlight?: string;       // badge opcional ("Em produção", "Open source", etc.)
}
```

> Dica: para adicionar um novo projeto, basta incluir um novo objeto no array. A grid é renderizada dinamicamente.

### 4. Tecnologias

Edite **`data/technologies.ts`** para adicionar, remover ou reorganizar tecnologias. Ícones vêm de:

- `lucide-react` (ícones genéricos)
- `simple-icons` (logos de marcas — basta importar o slug com prefixo `si`)

### 5. Serviços / Diferenciais

Edite o array em **`data/services.ts`** (Sites, Catálogos, Sistemas, Automação, Aplicações…).

### 6. Jornada / Timeline

Edite o array em **`data/timeline.ts`**.

### 7. Contato

O formulário usa `mailto:` (abre o cliente de e-mail do usuário). Para alterar o destino, edite **`lib/site.ts`**.

Para integração real com envio de e-mails, recomendo trocar o handler `onSubmit` em `components/sections/Contact.tsx` por uma chamada a um serviço como **Resend**, **EmailJS** ou **Formspree**.

## 🎨 Design tokens

As cores, fontes e animações estão centralizadas em **`app/globals.css`** (seção `@theme inline`). Edite ali para mudar a paleta.

| Token | Valor padrão |
|---|---|
| `--color-background` | `#08080d` (preto profundo) |
| `--color-foreground` | `#f5f5f7` (branco quase puro) |
| `--color-accent` | `#a855f7` (violeta) |
| `--color-accent-2` | `#22d3ee` (ciano) |
| `--font-sans` | Inter |
| `--font-mono` | JetBrains Mono |

## 🌐 Deploy

O projeto é uma aplicação Next.js padrão e pode ser implantado em qualquer plataforma compatível:

- **Vercel** (recomendado): basta importar o repositório e seguir o wizard.
- **Netlify**, **Cloudflare Pages**, **Render** ou **build próprio** com `npm run build && npm run start`.

Defina a variável `NEXT_PUBLIC_SITE_URL` com a URL final (ex.: `https://geneses.dev`) para que `sitemap.xml` e metadados Open Graph apontem corretamente.

## 🧰 Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **lucide-react** (ícones)
- **simple-icons** (logos de marcas)
- **clsx** + **tailwind-merge** (helpers de classes)

## 📝 Licença

Este projeto é de uso pessoal. Adapte conforme necessário.
