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
import styles from "./WorkSection.module.css";

const [leadProject, ...featuredProjects] = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

function ProjectLinks({ project, locale }: { project: Project; locale: Locale }) {
  const c = copy[locale];

  return (
    <div className={styles.links}>
      {project.featured && (
        <Link
          prefetch={false}
          className={`linkline ${styles.caseLink}`}
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
    <p className={styles.status}>
      <span>{project.year}</span>
      <span aria-hidden="true">·</span>
      <span data-status={project.status}>
        {statusLabel[locale][project.status]}
      </span>
    </p>
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
    <article className={lead ? styles.lead : styles.study}>
      <div className={styles.projectCopy}>
        <ProjectStatus project={project} locale={locale} />
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.category}>{projectCategory(project, locale)}</p>
        <p className={styles.description}>{copy[locale].featured[project.slug]}</p>
        <ProjectLinks project={project} locale={locale} />
      </div>
      <div className={styles.visual}>
        <ProjectVisual slug={project.slug} locale={locale} compact={!lead} />
      </div>
    </article>
  );
}

export function WorkSection({ locale }: { locale: Locale }) {
  const c = copy[locale];

  return (
    <section className={`shell ${styles.work}`} id="work" aria-labelledby="work-title">
      <h2 className={styles.heading} id="work-title">{c.selectedWork}</h2>
      {leadProject && <FeaturedWork project={leadProject} locale={locale} lead />}
      <div className={styles.studies}>
        {featuredProjects.map((project) => (
          <FeaturedWork key={project.slug} project={project} locale={locale} />
        ))}
      </div>
      <section className={styles.directory} aria-labelledby="more-work-title">
        <h3 className={styles.directoryHeading} id="more-work-title">{c.moreWork}</h3>
        <ul className={styles.directoryList} role="list">
          {otherProjects.map((project) => (
            <li className={styles.directoryRow} key={project.slug}>
              <div className={styles.directoryIdentity}>
                <h4>{project.title}</h4>
                <p className={styles.category}>{projectCategory(project, locale)}</p>
              </div>
              <p className={styles.description}>{c.secondary[project.slug]}</p>
              <div className={styles.directoryActions}>
                <ProjectStatus project={project} locale={locale} />
                <ProjectLinks project={project} locale={locale} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
