# Portfolio V1 refinement review

Reviewed locally on 14 September 2026, on `build/v1-structure`.

## Scope and changes

- Kept the existing Next.js App Router architecture, dark palette, typography, project content, and editorial hierarchy. This is a refinement of the existing V1, not a new design.
- Pinned both Next.js and `eslint-config-next` to 16.3.5; adopted the matching native flat ESLint configuration. Typecheck now generates Next route types before running TypeScript, so it also works before the first build in CI.
- CI now runs `npm ci`, typecheck, lint, and build, in that order.
- Removed only the byte-identical typo asset `public/portarait.jpg`. The intended portrait and existing CV PDF are unchanged.
- Centralized the shared EN/RU resume content; localized section notes, categories, dates, experience, skills, contact labels, navigation, diagram copy, and accessible names. Proper nouns and natural technical terms remain unchanged.
- Split project status into deployed prototype (NU Atrium, Invitation Platform), in development (Quant-Trade), and deployed (the four secondary projects). Statuses are visible on the portfolio and CV.
- Replaced the mobile dropdown with a native fullscreen modal: a 68px header, remaining-viewport editorial navigation, body scroll lock/restoration, Escape, initial/return focus, explicit bidirectional Tab wrapping, route-close behavior, desktop-resize cleanup, and visible focus states.
- Language changes use native navigation and preserve path, query, and fragment. This avoids a reproduced Next 16 client-cache issue that duplicated fragments on repeated switches. Normal project and page navigation remains client-side.
- Disabled automatic background link prefetch after WebKit reported same-origin RSC prefetch errors during navigation. On-demand client navigation remains enabled; this small portfolio does not need speculative requests for every visible navigation link.
- Differentiated the three flagship diagrams: connected campus modules, a vertical invitation publishing flow, and a numbered analytical quant sequence with restrained Agent/Risk emphasis. Quant remains explicitly conceptual and in development.
- Removed generic hidden fade-up wrappers. Reading content is server-rendered; only the header and diagram visibility detection need client interaction. The React review guided these smaller client boundaries and cleanup of event listeners and scroll locks.
- Added short, one-time connection/node, publishing-stage, and pipeline animations. Reduced-motion mode disables animation, transitions, and smooth scrolling. No loops, live-data simulation, charts, or performance claims were added.
- Refined mobile/Russian wrapping, text line lengths, section rhythm, CTA emphasis, portrait crop, and secondary-project borders. Contact is five text links: Email, LinkedIn, GitHub, Telegram, Instagram; the handle stays subtle.
- Added localized route titles, descriptions, and Open Graph text/locale, along with semantic headings and a skip link.

## Exact dependency versions

Versions below are the installed/lockfile versions, not merely package.json ranges.

| Dependency | Version |
| --- | --- |
| next | 16.3.5 |
| eslint-config-next | 16.3.5 |
| react | 19.3.0 |
| react-dom | 19.3.0 |
| framer-motion | 12.43.0 |
| typescript | 5.9.3 |
| eslint | 9.39.5 |
| tailwindcss | 3.4.19 |
| postcss | 8.5.28 |
| autoprefixer | 10.6.0 |
| @types/node | 22.20.2 |
| @types/react | 19.3.0 |
| @types/react-dom | 19.3.0 |

Local runtime: Node 22.18.0, npm 10.9.3. No new application library was added. Browser tools and screenshots remain outside the application dependencies.

## Command verification

| Check | Result |
| --- | --- |
| `npm ci` | PASS: clean install, 392 packages added, 393 audited |
| `npm audit` | PASS: 0 vulnerabilities |
| `npm run typecheck` | PASS: `next typegen` then `tsc --noEmit` |
| `npm run lint` | PASS: 0 errors / 0 warnings |
| `npm run build` | PASS: optimized Next 16.3.5 Turbopack production build |
| `npm ls --depth=0 next eslint-config-next` | PASS: both exactly 16.3.5 |

The complete clean-install sequence was executed, not inferred from CI configuration. Typecheck, lint, and production build were repeated after the final browser-driven corrections.

## Browser verification

The production server (`next start`, not a dev-only render) was tested at `http://127.0.0.1:3100`.

All 10 valid routes were reviewed at 375, 390, 430, 768, and 1440px in Chromium 153 and WebKit 26.5 (mobile emulation): 100 route/width combinations, all HTTP 200, with no document horizontal overflow. The deeper element probe found only the quant connectors intentionally occupying grid gaps; all remain inside their figure. The 40 route/viewport axe-core 4.13 checks found no WCAG 2 A/AA or 2.1 AA violations. Localized titles, descriptions, document language after hydration, and Open Graph locale were checked on each route.

Browser screenshots were inspected at every requested width, including the three distinct diagrams, Russian menu, case studies, CV, and decoded portrait. Animation events confirmed one-time behavior after scrolling away and back; final connections return to solid strokes, all diagram children remain inside their figures, and no animation has infinite iterations. With JavaScript disabled, both language versions still expose reading content, all three diagrams, and contact links. Invalid locale/project URLs correctly return 404 with `noindex`; a fresh root visit defaults to English.

The initial WebKit matrix and interaction run surfaced same-origin prefetch errors; these were not ignored. Automatic prefetch was disabled, and final 50-case regressions in **both** Chromium and WebKit pass against the rebuilt app with no page/console errors. One intermediate WebKit automation session stalled and its language-state wait timed out; that attempt is not counted as passing. A fresh isolated session with interval-based language polling completed all 50 cases successfully.

The 57 Chromium interaction checks pass, with no console/page errors: fullscreen menu bounds and tap targets at 375/390/430/768; forward/backward focus wrap; Escape and scroll restoration; same-page anchors; CV navigation; desktop resize; every locale route switch in both directions with query/hash retention; modal locale switching; saved-locale root redirects; skip-to-main; actual browser PDF download; reduced-motion computed styles; and successful portrait decode/rendering. Two open-menu axe checks also pass.

The final WebKit run passes all 20 interaction checks in EN/RU: tap-opened modal geometry/scroll lock, forward/backward keyboard wrap, Escape/focus/scroll restoration, menu-to-CV navigation, cross-route section anchors, client-side case-study navigation, locale/query/hash preservation, and reduced motion. No console/page errors or failed requests were recorded. Its two open-menu axe checks also pass, giving 44 automated accessibility checks across the review.

The downloaded PDF matches the retained original byte-for-byte (SHA-256 `B44311259F09F05621833A9C165D3B3E9670AFC7FFB650235F75B1B72425327E`). Portrait SHA-256 remains `D4264096C75645CA4EEDC02264B08360DC292891CD3E680FDEA7289D477012E3`.

All six supplied live-project URLs and six project GitHub URLs returned HTTP 200 after redirects. This establishes link reachability, not the correctness of their authenticated applications, payments, or business claims. No external project was modified.

## Known limitations and intentional non-changes

- No final domain was invented. Canonical URLs, `og:url`, and search-engine language alternates are intentionally deferred until a public origin is confirmed. Google's hreflang guidance requires fully qualified URLs; emitting root-relative SEO alternates here would be misleading. Localized navigation links still have `hreflang` and preserve routes. [Google's localized-version guidance](https://developers.google.com/search/docs/specialty/international/localized-versions).
- Kept the existing language architecture: the server-rendered page wrapper has the correct locale; the root HTML starts with `lang="en"` and `DocumentLanguage` updates it after hydration. A root-layout/middleware restructure solely for perfect initial root language was intentionally avoided, as requested.
- `npm ci` emits ESLint 9's upstream end-of-support/deprecation warning. Lint itself has no warnings. An unrelated ESLint major migration was not included.
- After a clean Windows install, `npm ls --depth=0` lists two optional transitive packages as extraneous: `@img/sharp-wasm32@0.35.4` and `@emnapi/runtime@1.11.3`. Both are present in the lockfile's optional platform dependency graph; install, audit, build, and actual image optimization/rendering pass. No manual lockfile pruning or forced dependency override was introduced.
- The supplied Invitation Platform URL currently opens a published example wedding invitation, not an editor landing page. The supplied URL was retained; no replacement destination was guessed.
- Browser emulation does not establish physical iPhone Safari, assistive-technology, or real-user usability coverage. No manual deployment or merge to main was performed.
- The existing PDF contents, project screenshots prohibition, project evidence boundaries, fonts, core architecture, and cautious Quant-Trade copy were preserved. No analytics, auth, CMS, social cards, fake trading metrics, decorative loops, or new UI library were added.

## Files changed

| File | Purpose |
| --- | --- |
| `.github/workflows/ci.yml` | Reproducible install and all verification stages |
| `package.json` | Matching Next/ESLint configuration versions; route type generation |
| `package-lock.json` | Matching dependency lockfile |
| `eslint.config.mjs` | Next 16 native flat configuration and generated-artifact exclusions |
| `next-env.d.ts` | Preserve Next 16-generated route/root parameter type imports |
| `tsconfig.json` | Preserve Next-generated JSX/development-type settings |
| `public/portarait.jpg` | Deleted duplicate typo asset; recoverable from Git history |
| `src/lib/content.ts` | Localized UI/categories and distinct project statuses |
| `src/lib/resume.ts` | New shared EN/RU resume content |
| `src/lib/metadata.ts` | New localized metadata helper without invented origin |
| `src/components/SiteHeader.tsx` | Fullscreen accessible menu and locale navigation |
| `src/components/PortfolioSite.tsx` | Server-rendered reading content, contact/status/semantic refinements |
| `src/components/ProjectVisual.tsx` | Distinct localized diagrams and one-time visibility detection |
| `src/app/globals.css` | Targeted composition, responsive, focus, portrait, and motion refinements |
| `src/app/[locale]/page.tsx` | Localized homepage metadata |
| `src/app/[locale]/cv/page.tsx` | Localized/shared CV content and metadata |
| `src/app/[locale]/projects/[slug]/page.tsx` | Localized case studies, metadata, and section headings |
| `src/app/layout.tsx` | Formatting only; root language architecture unchanged |
| `src/app/[locale]/layout.tsx` | Formatting only; locale validation/wrapper unchanged |
| `docs/REFINEMENT_REVIEW.md` | This verification and handoff record |

`next-env.d.ts` and `tsconfig.json` already contained Next-generated local changes at the start; those were retained. No unrelated user edits were discarded.

Local screenshots, diagnostic scripts, and JSON results are in ignored `output/playwright/`; they are not shipped as portfolio assets.

Final `git diff --check` and a scoped secret-signature scan of source, configuration, and documentation passed.

## Implementation references

- [Next.js ESLint configuration](https://nextjs.org/docs/app/api-reference/config/eslint)
- [Next.js CLI and route type generation](https://nextjs.org/docs/app/api-reference/cli/next)
- [Motion accessibility](https://motion.dev/docs/react-accessibility)
