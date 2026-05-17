# kenneth-personal-site

Personal website for Kenny Sheridan: systems engineering, AI infrastructure, robotics, and technical field notes.

## Development

```bash
nix develop
npm install
npm run dev
```

With direnv:

```bash
direnv allow
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
nix flake check
```

Convenience commands are also available through `just` inside the dev shell:

```bash
just dev
just check
just nix-check
```

## Deployment

The site is prepared for Cloudflare Pages static hosting.

- Build command: `npm ci && npm run build`
- Build output directory: `out`
- Node.js version: `22`
- Primary domain target: `kennysheridan.io`
- Resume route: `/resume`
- Resume PDF: `/resume/resume.pdf`
- Standalone resume HTML: `/resume/standalone/index.html`

Recommended Cloudflare DNS/domain setup:

- Attach `kennysheridan.io` and `www.kennysheridan.io` as Cloudflare Pages custom domains.
- Add `resume.kennysheridan.io` as a CNAME to the Pages project target, proxied.
- Add a Cloudflare Single Redirect Rule from `resume.kennysheridan.io/*` to `https://kennysheridan.io/resume`.

Keep Cloudflare API tokens out of this repository. Prefer Cloudflare Pages Git integration for v1.

## Content model

- `src/lib/site.ts` contains the first typed content registry for focus areas, system layers, project seeds, and writing seeds.
- `src/lib/resume.ts` contains the structured resume content used by `/resume`.
- Route pages live under `src/app/` using Next.js App Router.
- The Marine emblem watermark asset lives at `public/marine-emblem-watermark.png` and is styled from `src/app/globals.css`.
- Static resume artifacts are copied from `/home/kenneth/repos/resume` into `public/resume/`.

## Direction

The site should grow as a living systems profile: part operating context, part technical archive, part project field notebook.
