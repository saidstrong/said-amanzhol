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
| `/en/cv`, `/ru/cv` | Web CV and respective English or Russian PDF download |
| `/{locale}/projects/{slug}` | Case study for NU Atrium, Invitation Platform, or Quant-Trade AI Agent |

- Update translated site copy, project links, and statuses in [`src/lib/content.ts`](src/lib/content.ts).
- Update shared résumé and contact details in [`src/lib/resume.ts`](src/lib/resume.ts).
- Update case study copy in [`src/lib/case-studies.ts`](src/lib/case-studies.ts).
- The [NU Atrium walkthrough files](public/project-media) record the [prototype’s event pages](https://github.com/saidstrong/NU-Hub/tree/74e3540/app/(app)/events) running locally with sample data. The clip includes English and Russian captions and a transcript on the case-study page.
- The [portrait](public/portrait.jpg) also appears in the localized [link preview covers](public/share).

## Updating the CV downloads

Edit the shared content in [`src/lib/resume.ts`](src/lib/resume.ts), then build and serve the site. Print each CV page to A4 with 10 mm margins and browser headers and footers disabled. Save the English version to `public/Said-Amanzhol-CV.pdf` and the Russian version to `public/Said-Amanzhol-CV-RU.pdf`. Check that each PDF fits on one page and that the text can be selected.

The site uses the Next.js App Router, TypeScript, React, Tailwind CSS, and CSS Modules.

## Public URL

Canonical URLs, language alternates, Open Graph URLs, and the sitemap use `https://said-amanzhol.vercel.app`. If the portfolio moves to another domain, set `NEXT_PUBLIC_SITE_URL` to its absolute origin before building, such as `https://portfolio.example.com`.
