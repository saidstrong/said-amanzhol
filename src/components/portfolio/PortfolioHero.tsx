import Image from "next/image";
import Link from "next/link";
import { copy, localePath, type Locale } from "@/lib/content";

export function PortfolioHero({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const [givenName, familyName] = c.name;

  return (
    <section className="portfolio-hero" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-discipline">{c.heroEyebrow}</p>
          <h1 className="display hero-name" id="hero-title">
            {givenName} <em>{familyName}</em>
          </h1>
          <p className="hero-intro">{c.heroSub}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              {c.viewWork} <span aria-hidden="true">↓</span>
            </a>
            <Link prefetch={false} className="button button-outline" href={localePath(locale, "/cv")}>
              {c.viewCV} <span className="arrow-up-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <figure className="hero-portrait">
          <div className="hero-portrait-image">
            <Image
              src="/portrait.jpg"
              alt={c.portraitAlt}
              fill
              preload
              sizes="(min-width: 1288px) 460px, (min-width: 820px) 39vw, (min-width: 640px) 50vw, calc(100vw - 36px)"
            />
          </div>
          <figcaption>{c.location}</figcaption>
        </figure>
      </div>
    </section>
  );
}
