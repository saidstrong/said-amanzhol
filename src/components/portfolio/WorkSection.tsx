import Image from "next/image";
import Link from "next/link";
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
const leadProject = featuredProjects.find((project) => project.slug === "nu-atrium");
const invitationProject = featuredProjects.find(
  (project) => project.slug === "invitation-platform",
);
const researchProject = featuredProjects.find((project) => project.slug === "quant-trade-ai");
const otherProjects = projects.filter((project) => !project.featured);

const labels = {
  en: {
    watchWalkthrough: "Watch walkthrough",
    openPrototype: "Open prototype",
    invitationExample: "View example invitation",
    eventScreenAlt: "The NU Atrium screen listing campus events, dates, and locations",
    eventScreenCaption: "Events screen with sample data",
    invitationAlt: "Wedding stationery arranged as an invitation suite",
    invitationCaption: "Wedding invitation illustration",
    researchStatus: "In progress",
    researchQuestion:
      "How could AI agents help analyze markets, develop trading strategies, and assess risk?",
    researchNotes: "Research notes",
  },
  ru: {
    watchWalkthrough: "Смотреть видеообзор",
    openPrototype: "Открыть прототип",
    invitationExample: "Пример приглашения",
    eventScreenAlt: "Список мероприятий в NU Atrium с датами и местами проведения",
    eventScreenCaption: "Список мероприятий с демонстрационными данными",
    invitationAlt: "Свадебное приглашение с сопутствующими печатными материалами",
    invitationCaption: "Иллюстрация свадебного приглашения",
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
  const { openPrototype, invitationExample } = labels[locale];
  const casePath = localePath(locale, `/projects/${project.slug}`);
  const liveLabel =
    project.slug === "nu-atrium"
      ? openPrototype
      : project.slug === "invitation-platform"
        ? invitationExample
        : c.live;

  return (
    <div className={styles.links}>
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

function ProjectHeader({ project, locale }: { project: FeaturedProject; locale: Locale }) {
  return (
    <header className={styles.projectHeader}>
      <ProjectStatus project={project} locale={locale} />
      <h3 className={styles.projectTitle} id={`work-${project.slug}`}>{project.title}</h3>
    </header>
  );
}

function ProjectInfo({ project, locale }: { project: FeaturedProject; locale: Locale }) {
  return (
    <div className={styles.projectInfo}>
      <p className={styles.description}>{copy[locale].featured[project.slug]}</p>
      <p className={styles.contribution}>{caseStudies[project.slug][locale].contribution}</p>
      <ProjectLinks project={project} locale={locale} />
    </div>
  );
}

function CampusSpread({ project, locale }: { project: FeaturedProject; locale: Locale }) {
  const c = labels[locale];
  const walkthroughPath = localePath(locale, `/projects/${project.slug}#walkthrough`);

  return (
    <article className={styles.lead} aria-labelledby={`work-${project.slug}`}>
      <ProjectHeader project={project} locale={locale} />
      <figure className={styles.campusFigure}>
        <Link
          prefetch={false}
          className={styles.walkthroughLink}
          href={walkthroughPath}
          aria-label={`${c.watchWalkthrough} · ${project.title}`}
        >
          <div className={styles.screen}>
            <Image
              src="/project-media/nu-atrium-events.webp"
              alt={c.eventScreenAlt}
              width={1280}
              height={720}
              sizes="(max-width: 819px) calc(100vw - 80px), (max-width: 1279px) 53vw, 700px"
            />
          </div>
          <span className={styles.watchLabel}>
            <span className={styles.playIcon} aria-hidden="true" />
            {c.watchWalkthrough}
            <span className={styles.watchArrow} aria-hidden="true">→</span>
          </span>
        </Link>
        <figcaption className={styles.campusCaption}>{c.eventScreenCaption}</figcaption>
      </figure>
      <ProjectInfo project={project} locale={locale} />
    </article>
  );
}

function InvitationSpread({ project, locale }: { project: FeaturedProject; locale: Locale }) {
  const c = labels[locale];

  return (
    <article className={styles.study} aria-labelledby={`work-${project.slug}`}>
      <ProjectHeader project={project} locale={locale} />
      <figure className={styles.invitationFigure}>
        <div className={styles.invitationImage}>
          <Image
            src="/project-media/invitation-cover.webp"
            alt={c.invitationAlt}
            fill
            sizes="(max-width: 819px) calc(100vw - 36px), (max-width: 1279px) 54vw, 690px"
          />
        </div>
        <figcaption className={styles.invitationCaption}>{c.invitationCaption}</figcaption>
      </figure>
      <ProjectInfo project={project} locale={locale} />
    </article>
  );
}

function ResearchEntry({ project, locale }: { project: FeaturedProject; locale: Locale }) {
  const c = labels[locale];

  return (
    <article className={styles.research} aria-labelledby={`work-${project.slug}`}>
      <div>
        <p className={styles.researchStatus}>{c.researchStatus}</p>
        <h3 className={styles.rowTitle} id={`work-${project.slug}`}>{project.title}</h3>
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
      {leadProject && <CampusSpread project={leadProject} locale={locale} />}
      {invitationProject && <InvitationSpread project={invitationProject} locale={locale} />}
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
