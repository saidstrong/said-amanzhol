import Link from "next/link";
import ProjectVisual from "@/components/ProjectVisual";
import { caseStudies } from "@/lib/case-studies";
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

const featuredProjects = projects.filter((project) => project.featured);
const [leadProject, ...prototypeStudies] = featuredProjects.filter(
  (project) => project.status === "prototype",
);
const researchProject = featuredProjects.find((project) => project.slug === "quant-trade-ai");
const otherProjects = projects.filter((project) => !project.featured);

const labels = {
  en: {
    watchWalkthrough: "Watch walkthrough",
    openPrototype: "Open prototype",
    invitationExample: "View example invitation",
    researchStatus: "In progress",
    researchQuestion:
      "How could AI agents help analyze markets, develop trading strategies, and assess risk?",
    researchNotes: "Research notes",
  },
  ru: {
    watchWalkthrough: "Смотреть видеообзор",
    openPrototype: "Открыть прототип",
    invitationExample: "Пример приглашения",
    researchStatus: "В работе",
    researchQuestion:
      "Как ИИ-агенты могут помочь в анализе рынков, разработке торговых стратегий и оценке рисков?",
    researchNotes: "Заметки об исследовании",
  },
} satisfies Record<Locale, Record<string, string>>;

function ProjectLinks({
  project,
  locale,
  caseLabel = copy[locale].caseStudy,
}: {
  project: Project;
  locale: Locale;
  caseLabel?: string;
}) {
  const c = copy[locale];
  const { watchWalkthrough, openPrototype, invitationExample } = labels[locale];
  const casePath = localePath(locale, `/projects/${project.slug}`);
  const liveLabel =
    project.slug === "nu-atrium"
      ? openPrototype
      : project.slug === "invitation-platform"
        ? invitationExample
        : c.live;

  return (
    <div className={styles.links}>
      {project.slug === "nu-atrium" && (
        <Link
          prefetch={false}
          className={`linkline ${styles.walkthroughLink}`}
          href={`${casePath}#walkthrough`}
          aria-label={`${watchWalkthrough} · ${project.title}`}
        >
          <span className={styles.playIcon} aria-hidden="true" />
          {watchWalkthrough}
        </Link>
      )}
      {project.featured && (
        <Link
          prefetch={false}
          className={`linkline ${styles.caseLink}`}
          href={casePath}
          aria-label={`${caseLabel} · ${project.title}`}
        >
          {caseLabel} <span aria-hidden="true">→</span>
        </Link>
      )}
      {project.live && (
        <a
          className="linkline"
          href={project.live}
          target="_blank"
          rel="noreferrer"
          aria-label={`${liveLabel} · ${project.title}`}
        >
          {liveLabel} <span className="arrow-up-right" aria-hidden="true" />
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
      <span>{statusLabel[locale][project.status]}</span>
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
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <ProjectStatus project={project} locale={locale} />
        <p className={styles.category}>{projectCategory(project, locale)}</p>
        <p className={styles.description}>{copy[locale].featured[project.slug]}</p>
        <p className={styles.contribution}>{caseStudies[project.slug][locale].contribution}</p>
        <ProjectLinks project={project} locale={locale} />
      </div>
      <div className={styles.visual}>
        <ProjectVisual slug={project.slug} locale={locale} compact={!lead} />
      </div>
    </article>
  );
}

function ResearchEntry({ project, locale }: { project: FeaturedProject; locale: Locale }) {
  const c = labels[locale];

  return (
    <article className={`${styles.directoryRow} ${styles.research}`}>
      <div>
        <p className={styles.researchStatus}>{c.researchStatus}</p>
        <h3 className={styles.rowTitle}>{project.title}</h3>
      </div>
      <p className={styles.description}>{c.researchQuestion}</p>
      <div className={styles.directoryActions}>
        <ProjectLinks project={project} locale={locale} caseLabel={c.researchNotes} />
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
      {prototypeStudies.map((project) => (
        <FeaturedWork key={project.slug} project={project} locale={locale} />
      ))}
      {researchProject && <ResearchEntry project={researchProject} locale={locale} />}
      <section className={styles.directory} aria-labelledby="more-work-title">
        <h3 className={styles.directoryHeading} id="more-work-title">{c.moreWork}</h3>
        <ul className={styles.directoryList} role="list">
          {otherProjects.map((project) => (
            <li className={styles.directoryRow} key={project.slug}>
              <div>
                <h4 className={styles.rowTitle}>{project.title}</h4>
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
