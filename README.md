# realresult.in

Marketing site for Real Result Marketing (Paramathi Velur, Namakkal district). Next.js static export served by a Cloudflare Worker.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Static export to `out/` |
| `npm run validate:seo` | Audits `out/`: titles, descriptions, canonicals, one H1, JSON-LD, dead links, NAP, sitemap, llms.txt |
| `npm run typecheck` | Type-checks the site and the worker |
| `npm run deploy` | Build → SEO audit → `wrangler deploy` (deploy stops if the audit fails) |

## Where SEO lives

| File | Role |
| --- | --- |
| `src/config/seo.ts` | **Single source of truth** for business facts: name, address, phone, email, hours, socials, and the city/service-area data. Change NAP here only. |
| `src/config/routes.ts` | Every indexable URL with its title, description, breadcrumb parent and schema type, plus permanent redirects for retired URLs. |
| `src/lib/seo.ts` | Builds Next.js metadata and the schema.org JSON-LD graph (Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage). |
| `src/content/locationFaqs.ts` | FAQ copy for city pages, used by both the visible FAQ and the FAQPage schema. |
| `src/app/sitemap.ts`, `src/app/robots.txt/`, `src/app/llms.txt/` | Generated at build time from the registry above. |
| `worker/` | Redirects, 410s for spam URLs, security headers, Markdown versions of pages for AI agents (`Accept: text/markdown`). |

## Adding a page

1. Add a row to `ROUTES` in `src/config/routes.ts`.
2. Create `src/app/<path>/page.tsx` using `buildMetadata(getRoute(path))` and `<JsonLd data={pageSchema(route)} />`, following any existing page.
3. `npm run build && npm run validate:seo`.

## Adding a city

Add an entry to `TAMIL_NADU_LOCATIONS` (`src/config/seo.ts`), its FAQs to `src/content/locationFaqs.ts`, a route row, and a page. Only add a street address for a real office that has its own Google Business Profile.
