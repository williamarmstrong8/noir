# Armstrong Design Agency

Single-page sales site. Next.js 16 (App Router), Tailwind v4, shadcn/ui, Motion. Deploys to Vercel.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Before you launch

Search the repo for `TODO`. Every placeholder is marked. The ones that matter most:

- `site.bookingUrl`: your Cal.com link. Every booking button reads it.
- `site.email`: shown in the final CTA and footer.
- `site.url`: your production domain. Used for the canonical URL, sitemap, robots and OG tags.
- `site.name`: confirm the brand name.
- `projects`: your real work and screenshots.
- `faqs`, `services`, `tiers`: confirm the policies and inclusions match what you sell.

## Editing content

All copy lives in [`src/data/site.ts`](src/data/site.ts). Components render from it, so you never need to touch JSX to change words.

| Export                  | What it controls                                                                                                 |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `site`                  | Brand name, positioning line, hero sentence, booking URL, email, domain, promise line, SEO title and description |
| `sections`              | Section numbers, labels, headings and intros. `inNav` decides which appear in the nav                            |
| `projects`              | Work cards. The first project is also the hero screenshot                                                        |
| `services`, `builtWith` | The Services grid and the "Built with" line                                                                      |
| `tiers`, `carePlan`     | Pricing cards and the care plan row. `featured: true` gets the accent border                                     |
| `steps`                 | The three Process rows                                                                                           |
| `faqs`                  | FAQ accordion                                                                                                    |

Keep sentences under 15 words. No em dashes.

### Adding or removing a project

Add or remove an object in `projects`. Use 4 to 6. Set `kind` honestly:

- `"Client"` for paid client work
- `"Personal project"` for something you built for yourself
- `"Concept"` for a mockup that was never live

## Swapping screenshots

Screenshots live in `public/work/`. The current files are placeholder frames.

1. Capture the site at 1600×1000 (16:10), top of the page. Desktop width around 1440px.
2. Export as `.webp` or `.png`. Next.js serves AVIF or WebP automatically.
3. Save it in `public/work/` and point `image.src` at it, e.g. `/work/my-client.webp`.
4. Write a real `image.alt` that describes the page, e.g. "Homepage of Rivera Plumbing showing the booking form".

Frames crop from the top left, so the important part of the page should sit there.

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repository and click Deploy. No settings or environment variables are needed.
3. In the project, open **Analytics** and enable Web Analytics. The `<Analytics />` component only renders on Vercel builds.
4. Add your domain under **Settings → Domains**, then set `site.url` to match and redeploy.

## Notes

- Dark only, by design. Colors are CSS variables at the top of [`src/app/globals.css`](src/app/globals.css). The accent is `--signal`.
- One radius (12px) everywhere. Type scale utilities: `text-display`, `text-heading`, `text-body`, `text-label`.
- Scroll reveals use [`src/components/motion/reveal.tsx`](src/components/motion/reveal.tsx) and switch off under `prefers-reduced-motion`.
- The OG image, Twitter image and favicon are generated from `site` at build time ([`src/lib/og.tsx`](src/lib/og.tsx)), using Geist fonts in `src/assets/fonts` (SIL Open Font License).
