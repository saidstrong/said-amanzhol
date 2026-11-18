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
          <p className="eyebrow hero-location">{c.location}</p>
          <h1 className="hero-name" id="hero-title">
            <span className="hero-line"><span>{givenName}</span></span>{" "}
            <span className="hero-line hero-family"><span>{familyName}</span></span>
          </h1>
          <p className="hero-intro">{c.heroSub}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              {c.viewWork} <span className="hero-work-arrow" aria-hidden="true">↓</span>
            </a>
            <Link prefetch={false} className="linkline hero-cv" href={localePath(locale, "/cv")}>
              {c.viewCV} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="hero-portrait-image">
            <Image
              src="/portrait.jpg"
              alt={c.portraitAlt}
              fill
              preload
              sizes="(min-width: 1288px) 390px, (min-width: 700px) 36vw, (min-width: 500px) 465px, calc(100vw - 36px)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
