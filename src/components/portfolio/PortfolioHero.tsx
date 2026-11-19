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
          <h1 className="display hero-name" id="hero-title">
            <span className="hero-line"><span>{givenName}</span></span>{" "}
            <span className="hero-line hero-family"><span>{familyName}</span></span>
          </h1>
          <p className="hero-intro">{c.heroSub}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              {c.viewWork} <span className="hero-work-arrow" aria-hidden="true">↓</span>
            </a>
            <Link prefetch={false} className="linkline hero-cv" href={localePath(locale, "/cv")}>
              {c.viewCV} <span className="arrow-up-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-orbit" aria-hidden="true" />
          <div className="hero-portrait">
            <div className="hero-portrait-image">
              <Image
                src="/portrait.jpg"
                alt={c.portraitAlt}
                fill
                preload
                sizes="(min-width: 1328px) 500px, (min-width: 700px) 42vw, calc(100vw - 52px)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
