import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "@/components/DetailPages.module.css";
import SiteHeader from "@/components/SiteHeader";
import {
  copy,
  localePath,
  projectCategory,
  projects,
  statusLabel,
} from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { contact, resume } from "@/lib/resume";

const cvPdf = "/Said-Amanzhol-CV.pdf";
const cvProfiles = contact.profiles.filter(({ name }) =>
  ["LinkedIn", "GitHub", "Telegram"].includes(name),
);

function CvSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={styles.cvSection} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className={styles.sectionTitle}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Timeline({ records }: { records: [string, string, string][] }) {
  return (
    <ul className={styles.records}>
      {records.map(([date, title, description]) => (
        <li key={`${date}-${title}`} className={styles.timelineItem}>
          <p className={styles.recordMeta}>{date}</p>
          <div>
            <h3 className={styles.recordTitle}>{title}</h3>
            <p className={styles.recordDescription}>{description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ru") notFound();
  return pageMetadata(
    locale,
    locale === "ru" ? "Саид Аманжол — CV" : "Said Amanzhol — CV",
    locale === "ru"
      ? "Образование, опыт, проекты и навыки Саида Аманжола. Скачать CV в PDF."
      : "Education, experience, projects, and skills of Said Amanzhol. Download the PDF CV.",
    "/cv",
  );
}

export default async function CVPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ru") notFound();
  const ru = locale === "ru";
  const c = copy[locale];
  const r = resume[locale];

  return (
    <>
      <SiteHeader locale={locale} currentPath="/cv" />
      <main id="content" tabIndex={-1} className={`${styles.page} ${styles.cv}`}>
        <div className="shell">
          <div className={styles.topline}>
            <Link prefetch={false} href={localePath(locale)}>
              <span aria-hidden="true">←</span> {ru ? "Портфолио" : "Portfolio"}
            </Link>
            <p>{ru ? "Резюме" : "Curriculum vitae"}</p>
          </div>
          <header className={styles.cvHero}>
            <div>
              <h1 className={styles.pageTitle}>
                {ru ? "Саид Аманжол" : "Said Amanzhol"}
              </h1>
              <p className={styles.cvTagline}>
                {ru
                  ? "Экономика · Технологии · Продукты"
                  : "Economics · Technology · Product"}
              </p>
            </div>
            <a
              className={`button button-primary ${styles.primaryLink}`}
              href={cvPdf}
              download
            >
              {ru ? "Скачать PDF" : "Download PDF"}{" "}
              <span aria-hidden="true">↓</span>
            </a>
          </header>
          <div className={styles.cvLayout}>
            <div className={styles.cvProfile}>
              <CvSection id="cv-profile" title={ru ? "Профиль" : "Profile"}>
                <p className={styles.profileLead}>{c.heroSub}</p>
                <address className={styles.cvContact}>
                  <p>{ru ? "Астана, Казахстан" : "Astana, Kazakhstan"}</p>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  <div className={styles.socialLinks}>
                    {cvProfiles.map(({ name, href }) => (
                      <a key={name} href={href} target="_blank" rel="noreferrer">
                        {name} <span className="arrow-up-right" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </address>
              </CvSection>
            </div>
            <div className={styles.cvContent}>
              <CvSection id="cv-experience" title={c.experience}>
                <Timeline records={r.experience} />
              </CvSection>
              <CvSection id="cv-education" title={c.education}>
                <Timeline records={r.education} />
              </CvSection>
              <CvSection
                id="cv-projects"
                title={ru ? "Проекты" : "Selected projects"}
              >
                <ul className={styles.records}>
                  {projects.map((project) => (
                    <li key={project.slug} className={styles.cvProject}>
                      <div>
                        <h3 className={styles.recordTitle}>
                          {project.featured ? (
                            <Link
                              href={localePath(locale, `/projects/${project.slug}`)}
                              prefetch={false}
                            >
                              {project.title} <span aria-hidden="true">→</span>
                            </Link>
                          ) : (
                            project.title
                          )}
                        </h3>
                        <p className={styles.recordDescription}>
                          {projectCategory(project, locale)}
                        </p>
                      </div>
                      <p className={styles.recordMeta}>
                        {project.year} · {statusLabel[locale][project.status]}
                      </p>
                    </li>
                  ))}
                </ul>
              </CvSection>
              <CvSection id="cv-milestones" title={c.milestones}>
                <ul className={styles.records}>
                  {r.milestones.map(([title, description]) => (
                    <li key={title}>
                      <h3 className={styles.recordTitle}>{title}</h3>
                      <p className={styles.recordDescription}>{description}</p>
                    </li>
                  ))}
                </ul>
              </CvSection>
              <CvSection id="cv-skills" title={ru ? "Навыки" : "Skills"}>
                <ul className={styles.skills}>
                  {r.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </CvSection>
            </div>
          </div>
          <div className={styles.cvBottom}>
            <Link prefetch={false} href={localePath(locale)}>
              <span aria-hidden="true">←</span>{" "}
              {ru ? "К портфолио" : "Back to portfolio"}
            </Link>
            <a href={cvPdf} download>
              {ru ? "Скачать PDF" : "Download PDF"}{" "}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
