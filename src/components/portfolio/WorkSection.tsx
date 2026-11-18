import Link from "next/link";
import ProjectVisual from "@/components/ProjectVisual";
import {
  copy,
  localePath,
  projectCategory,
  projects,
  statusLabel,
  type FeaturedProject,
  type Locale,
  type Project,
} from "@/lib/content";

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

function ProjectLinks({ project, locale }: { project: Project; locale: Locale }) {
  const c = copy[locale];

  return (
    <div className="work-links">
      {project.featured && (
        <Link
          prefetch={false}
          className="linkline work-case-link"
          href={localePath(locale, `/projects/${project.slug}`)}
          aria-label={`${c.caseStudy} · ${project.title}`}
        >
          {c.caseStudy} <span aria-hidden="true">→</span>
        </Link>
      )}
      {project.live && (
        <a
          className="linkline"
          href={project.live}
          target="_blank"
          rel="noreferrer"
          aria-label={`${c.live} · ${project.title}`}
        >
          {c.live} <span className="arrow-up-right" aria-hidden="true" />
        </a>
      )}
      {project.github && (
        <a
          className="linkline"
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`${c.github} · ${project.title}`}
        >
          {c.github} <span className="arrow-up-right" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

function ProjectStatus({ project, locale }: { project: Project; locale: Locale }) {
  return (
    <div className="work-status">
      <span className="work-year">{project.year}</span>
      <span className="work-status-label" data-status={project.status}>
        {statusLabel[locale][project.status]}
      </span>
    </div>
  );
}

function FeaturedWork({
  project,
  locale,
  lead = false,
}: {
  project: FeaturedProject;
  locale: Locale;
  lead?: boolean;
}) {
  return (
    <article className={lead ? "work-card work-card-lead" : "work-card"}>
      <div className="work-visual">
        <ProjectVisual slug={project.slug} locale={locale} />
      </div>
      <div className="work-copy">
        <ProjectStatus project={project} locale={locale} />
        <h3 className="display work-title">{project.title}</h3>
        <p className="work-category eyebrow">{projectCategory(project, locale)}</p>
        <p className="work-description">{copy[locale].featured[project.slug]}</p>
        <ProjectLinks project={project} locale={locale} />
      </div>
    </article>
  );
}

export function WorkSection({ locale }: { locale: Locale }) {
  const c = copy[locale];

  return (
    <>
      <section className="portfolio-section shell" id="work" aria-labelledby="work-title">
        <div className="portfolio-section-heading">
          <h2 className="display portfolio-heading" id="work-title">{c.selectedWork}</h2>
        </div>
        <div className="work-grid">
          {featuredProjects.map((project, index) => (
            <FeaturedWork key={project.slug} project={project} locale={locale} lead={index === 0} />
          ))}
        </div>
      </section>
      <section className="portfolio-section portfolio-more" aria-labelledby="more-work-title">
        <div className="shell">
          <div className="portfolio-section-heading">
            <h2 className="display portfolio-heading" id="more-work-title">{c.moreWork}</h2>
            <p>{c.moreNote}</p>
          </div>
          <div className="more-work-grid">
            {otherProjects.map((project) => (
              <article className="more-work-card" key={project.slug}>
                <ProjectStatus project={project} locale={locale} />
                <h3 className="display work-title">{project.title}</h3>
                <p className="work-category eyebrow">{projectCategory(project, locale)}</p>
                <p className="work-description">{c.secondary[project.slug]}</p>
                <ProjectLinks project={project} locale={locale} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
