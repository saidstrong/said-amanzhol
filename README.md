# Said Amanzhol

Personal portfolio of Said Amanzhol, an economics student at Nazarbayev University building digital products. Case studies, experience, and the web CV are available in English and Russian. Visitors can also download the CV as a PDF. [Visit the portfolio](https://said-amanzhol.vercel.app)

## Development

Use Node.js 22, which matches GitHub Actions, and install dependencies from the committed lockfile.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). The root route opens English by default and remembers the language selected in the site navigation.

Run the same checks as CI from the project directory.

```sh
npm run typecheck
npm run lint
npm run build
```

Run `npm start` to serve the production build locally.

## Routes and content

| Route | Content |
| --- | --- |
| `/en`, `/ru` | Portfolio, projects, milestones, experience, and contact links |
| `/en/cv`, `/ru/cv` | Web CV and the PDF download |
| `/{locale}/projects/{slug}` | Case study for NU Atrium, Invitation Platform, or Quant-Trade AI Agent |

- Update translated site copy, project links, and statuses in [`src/lib/content.ts`](src/lib/content.ts).
- Update shared résumé and contact details in [`src/lib/resume.ts`](src/lib/resume.ts).
- Update case study copy in [`src/lib/case-studies.ts`](src/lib/case-studies.ts).
- Replace the [portrait](public/portrait.jpg) or [downloadable CV](public/Said-Amanzhol-CV.pdf) in `public/` when their content changes.

The site uses the Next.js App Router, TypeScript, React, Tailwind CSS, and CSS Modules.

## Public URL

Canonical URLs, language alternates, Open Graph URLs, and the sitemap use `https://said-amanzhol.vercel.app`. If the portfolio moves to another domain, set `NEXT_PUBLIC_SITE_URL` to its absolute origin before building, such as `https://portfolio.example.com`.
