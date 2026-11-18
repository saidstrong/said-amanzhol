import Link from "next/link";
import { notFound } from "next/navigation";
import AtriumWalkthrough from "@/components/AtriumWalkthrough";
import styles from "@/components/DetailPages.module.css";
import ProjectVisual from "@/components/ProjectVisual";
import SiteHeader from "@/components/SiteHeader";
import { caseDecisionSources, caseStudies } from "@/lib/case-studies";
import {
  copy,
  localePath,
  projectCategory,
  projects,
  statusLabel,
} from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

const featuredProjects = projects.filter((project) => project.featured);

export function generateStaticParams() {
  return featuredProjects.map(({ slug }) => ({ slug }));
}

function resolveCaseStudy(locale: string, slug: string) {
  if (locale !== "en" && locale !== "ru") notFound();
  const project = featuredProjects.find((item) => item.slug === slug);
  if (!project) notFound();
  return { locale, project, detail: caseStudies[project.slug][locale] } as const;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const { locale: currentLocale, project, detail } = resolveCaseStudy(locale, slug);
  return pageMetadata(
    currentLocale,
    `${project.title} — ${currentLocale === "ru" ? "Саид Аманжол" : "Said Amanzhol"}`,
    detail.headline,
    `/projects/${slug}`,
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const { locale: currentLocale, project, detail } = resolveCaseStudy(locale, slug);
  const ru = currentLocale === "ru";
  const isAtrium = project.slug === "nu-atrium";
  const isResearch = project.slug === "quant-trade-ai";
  const decisionSource = caseDecisionSources[project.slug];
  const briefLabels = ru
    ? {
        role: "Мой вклад",
        scope: "Текущее направление",
        decision: "Ключевое решение",
        concept: "Решение в концепции",
        source: "Смотреть коммит на GitHub",
        walkthrough: "Обзор прототипа",
      }
    : {
        role: "My contribution",
        scope: "Current scope",
        decision: "Key decision",
        concept: "Design choice",
        source: "See the change on GitHub",
        walkthrough: "Prototype walkthrough",
      };
  const allWork = localePath(currentLocale, "#work");
  const next = featuredProjects[featuredProjects.indexOf(project) + 1];
  const liveLabels = ru
    ? { example: "Пример приглашения", prototype: "Открыть прототип" }
    : { example: "View example invitation", prototype: "Open prototype" };
  const liveLabel = project.slug === "invitation-platform"
    ? liveLabels.example
    : liveLabels.prototype;
  const sections = [
    ...(isAtrium ? [["walkthrough", briefLabels.walkthrough]] : []),
    ["case-objective", detail.problemLabel],
    ["case-system", detail.systemLabel],
    ["case-decisions", detail.decisionsLabel],
    ["case-result", detail.resultLabel],
    ["case-lessons", detail.lessonsLabel],
  ];

  return (
    <>
      <SiteHeader
        locale={currentLocale}
        currentPath={`/projects/${project.slug}`}
      />
      <main id="content" tabIndex={-1} className={styles.page}>
        <article className="shell">
          <div className={styles.topline}>
            <Link prefetch={false} href={allWork}>
              <span aria-hidden="true">←</span>{" "}
              {ru ? "Все проекты" : "All work"}
            </Link>
            <p>{copy[currentLocale].caseStudy}</p>
          </div>
          <header className={styles.caseHero}>
            <div>
              <p className={styles.category}>
                {projectCategory(project, currentLocale)}
              </p>
              <h1 className={styles.pageTitle}>{project.title}</h1>
              <p className={styles.caseHeadline}>{detail.headline}</p>
            </div>
            <div className={styles.caseMeta}>
              <p className={styles.caseStatus}>
                {project.year} · {statusLabel[currentLocale][project.status]}
              </p>
              <div className={styles.caseLinks}>
                {project.live && (
                  <a
                    className={`button button-primary ${styles.primaryLink}`}
                    target="_blank"
                    rel="noreferrer"
                    href={project.live}
                  >
                    {liveLabel} <span className="arrow-up-right" aria-hidden="true" />
                  </a>
                )}
                {project.github && (
                  <a
                    className={styles.quietLink}
                    target="_blank"
                    rel="noreferrer"
                    href={project.github}
                  >
                    {copy[currentLocale].github} <span className="arrow-up-right" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
            <dl className={styles.caseBrief}>
              <div>
                <dt>{isResearch ? briefLabels.scope : briefLabels.role}</dt>
                <dd>{detail.contribution}</dd>
              </div>
              <div>
                <dt>{isResearch ? briefLabels.concept : briefLabels.decision}</dt>
                <dd>
                  {detail.decision}
                  {decisionSource && (
                    <a
                      className={styles.briefSource}
                      href={decisionSource}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {briefLabels.source} <span className="arrow-up-right" aria-hidden="true" />
                    </a>
                  )}
                </dd>
              </div>
            </dl>
          </header>
          {isAtrium && <AtriumWalkthrough locale={currentLocale} />}
          <div className={styles.caseLayout}>
            <nav className={styles.caseContents} aria-labelledby="case-contents">
              <p className={styles.contentsLabel} id="case-contents">
                {ru ? "В этом кейсе" : "In this case study"}
              </p>
              <ul>
                {sections.map(([id, label]) => (
                  <li key={id}>
                    <a href={`#${id}`}>{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.caseContent}>
              <section
                id="case-objective"
                className={styles.caseSection}
                aria-labelledby="case-objective-title"
              >
                <h2 id="case-objective-title" className={styles.sectionTitle}>
                  {detail.problemLabel}
                </h2>
                <p className={styles.caseProse}>{detail.problem}</p>
              </section>
              <section
                id="case-system"
                className={styles.caseSection}
                aria-labelledby="case-system-title"
              >
                <h2 id="case-system-title" className={styles.sectionTitle}>
                  {detail.systemLabel}
                </h2>
                <ProjectVisual slug={project.slug} locale={currentLocale} compact />
              </section>
              <div className={styles.caseSummary}>
                <section id="case-decisions" aria-labelledby="case-decisions-title">
                  <h2 id="case-decisions-title" className={styles.sectionTitle}>
                    {detail.decisionsLabel}
                  </h2>
                  <ul className={styles.caseList}>
                    {detail.decisions.map((decision) => (
                      <li key={decision}>{decision}</li>
                    ))}
                  </ul>
                </section>
                <section
                  id="case-result"
                  className={styles.caseResult}
                  aria-labelledby="case-result-title"
                >
                  <h2 id="case-result-title" className={styles.sectionTitle}>
                    {detail.resultLabel}
                  </h2>
                  <p className={styles.caseProse}>{detail.result}</p>
                </section>
              </div>
              <section
                id="case-lessons"
                className={styles.caseSection}
                aria-labelledby="case-lessons-title"
              >
                <h2 id="case-lessons-title" className={styles.sectionTitle}>
                  {detail.lessonsLabel}
                </h2>
                <ul className={styles.caseList}>
                  {detail.lessons.map((lesson) => (
                    <li key={lesson}>{lesson}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
          <div className={styles.caseBottom}>
            <Link prefetch={false} href={allWork} className={styles.quietLink}>
              <span aria-hidden="true">←</span>{" "}
              {ru ? "Все проекты" : "All work"}
            </Link>
            {next && (
              <Link
                prefetch={false}
                href={localePath(currentLocale, `/projects/${next.slug}`)}
                className={styles.nextCase}
              >
                <span>{ru ? "Следующий проект" : "Next project"}</span>
                <strong>{next.title}</strong>
                <span className={styles.nextArrow} aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </article>
      </main>
    </>
  );
}
