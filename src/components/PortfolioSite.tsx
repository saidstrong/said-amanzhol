import Image from "next/image";
import Link from "next/link";
import ProjectVisual from "@/components/ProjectVisual";
import SiteHeader from "@/components/SiteHeader";
import {
  copy,
  localePath,
  projectCategory,
  projects,
  statusLabel,
  type Locale,
  type Project,
} from "@/lib/content";
import { resume } from "@/lib/resume";

function ExternalLinks({
  project,
  locale,
  compact = false,
}: {
  project: Project;
  locale: Locale;
  compact?: boolean;
}) {
  const c = copy[locale];
  return (
    <div className={`project-links ${compact ? "project-links-compact" : ""}`}>
      {project.live && (
        <a
          className="linkline"
          target="_blank"
          rel="noreferrer"
          href={project.live}
        >
          {c.live} <span aria-hidden="true">↗</span>
        </a>
      )}
      {project.github && (
        <a
          className="linkline"
          target="_blank"
          rel="noreferrer"
          href={project.github}
        >
          {c.github} <span aria-hidden="true">↗</span>
        </a>
      )}
      {project.featured && (
        <Link
          prefetch={false}
          className="linkline"
          href={localePath(locale, `/projects/${project.slug}`)}
        >
          {c.caseStudy} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}

function FeaturedProject({
  project,
  index,
  locale,
}: {
  project: Project;
  index: number;
  locale: Locale;
}) {
  const c = copy[locale];
  const description = c.featured[project.slug as keyof typeof c.featured];
  return (
    <article className="featured-project">
      <div className="project-heading">
        <div>
          <div className="eyebrow project-index">0{index + 1}</div>
          <h3 className="display project-title">{project.title}</h3>
        </div>
        <div className="project-status eyebrow">
          <span>{project.year}</span>
          <span
            className={
              project.status === "development" ? "status-development" : ""
            }
          >
            {statusLabel[locale][project.status]}
          </span>
        </div>
      </div>
      <ProjectVisual slug={project.slug} locale={locale} />
      <div className="project-copy">
        <p className="project-description">{description}</p>
        <div className="project-aside">
          <div className="eyebrow">{projectCategory(project, locale)}</div>
          <ExternalLinks project={project} locale={locale} />
        </div>
      </div>
    </article>
  );
}

export default function PortfolioSite({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const r = resume[locale];
  const featured = projects.filter((project) => project.featured);
  const secondary = projects.filter((project) => !project.featured);

  return (
    <>
      <SiteHeader locale={locale} />
      <main id="content" tabIndex={-1}>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="shell hero-shell">
            <div className="eyebrow hero-eyebrow">{c.heroEyebrow}</div>
            <h1 id="hero-title" className="display hero-title">
              SAID
              <br />
              AMANZHOL
            </h1>
            <div className="hero-lower">
              <p className="display hero-statement">{c.heroStatement}</p>
              <div className="hero-support">
                <p className="muted hero-subcopy">{c.heroSub}</p>
                <div className="hero-actions">
                  <a className="linkline linkline-strong" href="#work">
                    {c.viewWork} <span aria-hidden="true">↓</span>
                  </a>
                  <Link
                    prefetch={false}
                    className="linkline"
                    href={localePath(locale, "/cv")}
                  >
                    {c.viewCV} <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hero-footerline">
              <span>01 / 07</span>
              <span>
                {c.scroll} <span aria-hidden="true">↓</span>
              </span>
            </div>
          </div>
        </section>

        <section id="work" className="section section-work">
          <div className="shell">
            <div className="section-heading">
              <div className="eyebrow">01</div>
              <h2 className="display section-title">{c.selectedWork}</h2>
              <p className="section-note muted">{c.selectedNote}</p>
            </div>
            <div className="featured-list">
              {featured.map((project, index) => (
                <FeaturedProject
                  key={project.slug}
                  project={project}
                  index={index}
                  locale={locale}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="more-work-title">
          <div className="shell">
            <div className="section-heading">
              <div className="eyebrow">02</div>
              <h2 id="more-work-title" className="display section-title">
                {c.moreWork}
              </h2>
              <p className="section-note muted">{c.moreNote}</p>
            </div>
            <div className="project-grid">
              {secondary.map((project, index) => (
                <article key={project.slug} className="secondary-project">
                  <div className="secondary-topline">
                    <span className="eyebrow">0{index + 1}</span>
                    <span className="eyebrow">
                      {project.year} · {statusLabel[locale][project.status]}
                    </span>
                  </div>
                  <h3 className="display secondary-title">{project.title}</h3>
                  <p className="muted secondary-description">
                    {c.secondary[project.slug as keyof typeof c.secondary]}
                  </p>
                  <div className="eyebrow secondary-category">
                    {projectCategory(project, locale)}
                  </div>
                  <ExternalLinks project={project} locale={locale} compact />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="milestones"
          className="section"
          aria-labelledby="milestones-title"
        >
          <div className="shell">
            <div className="section-heading">
              <div className="eyebrow">03</div>
              <h2 id="milestones-title" className="display section-title">
                {c.milestones}
              </h2>
            </div>
            <div className="record-list">
              {r.milestones.map(([title, description], index) => (
                <div key={title} className="record-row milestone-row">
                  <div className="record-number display">0{index + 1}</div>
                  <h3>{title}</h3>
                  <p className="muted">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="experience-title">
          <div className="shell">
            <div className="section-heading">
              <div className="eyebrow">04</div>
              <h2 id="experience-title" className="display section-title">
                {c.experience}
              </h2>
            </div>
            <div className="record-list">
              {r.experience.map(([date, role, organisation]) => (
                <div key={role} className="record-row experience-row">
                  <div className="eyebrow">{date}</div>
                  <h3>{role}</h3>
                  <div className="muted">{organisation}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-title">
          <div className="shell about-grid">
            <div className="about-copy">
              <div className="eyebrow">05 / {c.about}</div>
              <h2 id="about-title" className="display about-title">
                Said
                <br />
                Amanzhol
              </h2>
              <p className="about-body">{c.aboutBody}</p>
              <div className="about-handle">@sherlockzini</div>
              <Link
                prefetch={false}
                className="linkline linkline-strong about-cv-link"
                href={localePath(locale, "/cv")}
              >
                {c.viewCV} <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="portrait-frame">
              <Image
                src="/portrait.jpg"
                alt={c.portraitAlt}
                fill
                className="object-cover"
                sizes="(max-width: 819px) calc(100vw - 40px), 42vw"
              />
            </div>
          </div>
        </section>

        <section
          id="education"
          className="section"
          aria-labelledby="education-title"
        >
          <div className="shell">
            <div className="section-heading">
              <div className="eyebrow">06</div>
              <h2 id="education-title" className="display section-title">
                {c.education}
              </h2>
            </div>
            <div className="record-list">
              {r.education.map(([date, school, degree]) => (
                <div key={degree} className="record-row education-row">
                  <div className="eyebrow">{date}</div>
                  <h3>{school}</h3>
                  <div className="muted">{degree}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="section footer-section">
        <div className="shell">
          <div className="eyebrow">07 / {c.nav.contact}</div>
          <h2 className="display contact-title">{c.contact}</h2>
          <div className="contact-links">
            <a className="linkline" href="mailto:said.amanzhol@nu.edu.kz">
              {c.email} <span aria-hidden="true">↗</span>
            </a>
            <a
              className="linkline"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/said-amanzhol-83038b315"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a
              className="linkline"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/saidstrong"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              className="linkline"
              target="_blank"
              rel="noreferrer"
              href="https://t.me/sherlockzini"
            >
              Telegram <span aria-hidden="true">↗</span>
            </a>
            <a
              className="linkline"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/sherlockzini/"
            >
              Instagram <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="footer-bottom">
            <span>SAID AMANZHOL</span>
            <span>{c.footerLocation}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
