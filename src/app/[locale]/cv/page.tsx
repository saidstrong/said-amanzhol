import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "@/components/Resume.module.css";
import SiteHeader from "@/components/SiteHeader";
import { copy, localePath, projects } from "@/lib/content";
import { localizedUrls, pageMetadata } from "@/lib/metadata";
import { contact, resume } from "@/lib/resume";

const cvProfiles = contact.profiles.filter(({ name }) =>
  name === "GitHub" || name === "LinkedIn",
);
const cvPdf = "/Said-Amanzhol-CV.pdf";

function ResumeSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      {children}
    </section>
  );
}

function Timeline({ records }: { records: [string, string, string][] }) {
  return (
    <ul className={styles.records} role="list">
      {records.map(([date, title, description]) => (
        <li key={`${date}-${title}`}>
          <div className={styles.recordHeader}>
            <h3>{title}</h3>
            <p className={styles.date}>{date}</p>
          </div>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  );
}

function ContactLink({ href, name }: { href: string; name: string }) {
  return (
    <a href={href}>
      <span className={styles.screenLabel}>{name}</span>
      <span className={styles.printPath}>{href.replace(/^https?:\/\//, "")}</span>
    </a>
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
  const portfolioLabel = ru ? "Портфолио" : "Portfolio";

  return (
    <>
      <SiteHeader locale={locale} currentPath="/cv" />
      <main id="content" tabIndex={-1} className={styles.resume}>
        <header className={styles.masthead}>
          <div className={`shell ${styles.mastheadInner}`}>
            <div className={styles.topline}>
              <Link prefetch={false} href={localePath(locale)} className="linkline">
                <span aria-hidden="true">←</span> {portfolioLabel}
              </Link>
              <p>{ru ? "Резюме" : "Curriculum vitae"}</p>
            </div>
            <div className={styles.header}>
              <div className={styles.intro}>
                <h1>{ru ? "Саид Аманжол" : "Said Amanzhol"}</h1>
                <p>{r.summary}</p>
              </div>
              <a className={`button ${styles.download}`} href={cvPdf} download>
                {ru ? "Скачать PDF (EN)" : "Download PDF"}{" "}
                <span aria-hidden="true">↓</span>
              </a>
              <div className={styles.portrait}>
                <Image
                  src="/portrait.jpg"
                  alt={c.portraitAlt}
                  fill
                  preload
                  sizes="(min-width: 1200px) 336px, (min-width: 840px) 32vw, 26vw"
                />
              </div>
              <address className={styles.contacts}>
                <div>
                  <span>{c.location}</span>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  <ContactLink name={portfolioLabel} href={localizedUrls()[locale]} />
                </div>
                <div>
                  {cvProfiles.map(({ name, href }) => (
                    <ContactLink key={name} name={name} href={href} />
                  ))}
                </div>
              </address>
            </div>
          </div>
        </header>
        <div className={`shell ${styles.sheet}`}>
          <div className={styles.primary}>
            <ResumeSection id="cv-projects" title={ru ? "Избранные проекты" : "Selected projects"}>
              <ul className={styles.records} role="list">
                {r.projects.map(({ slug, contribution }) => {
                  const project = projects.find((entry) => entry.slug === slug);
                  if (!project) return null;
                  const href = project.featured
                    ? localePath(locale, `/projects/${slug}`)
                    : project.github;
                  const printHref = project.featured
                    ? localizedUrls(`/projects/${slug}`)[locale]
                    : href;
                  return (
                    <li key={slug}>
                      <div className={styles.recordHeader}>
                        <h3>
                          {href && printHref ? (
                            <>
                              <Link className={styles.screenLabel} prefetch={false} href={href}>
                                {project.title} <span className="arrow-up-right" aria-hidden="true" />
                              </Link>
                              <a className={styles.printPath} href={printHref}>{project.title}</a>
                            </>
                          ) : project.title}
                        </h3>
                        <p className={styles.date}>{project.year}</p>
                      </div>
                      <p>{contribution}</p>
                    </li>
                  );
                })}
              </ul>
            </ResumeSection>
            <ResumeSection id="cv-experience" title={c.experience}>
              <Timeline records={r.experience} />
            </ResumeSection>
          </div>
          <div className={styles.secondary}>
            <ResumeSection id="cv-milestones" title={ru ? "Руководство командой" : "Leadership"}>
              <ul className={styles.records} role="list">
                {r.milestones.map(([title, description]) => (
                  <li key={title}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
            </ResumeSection>
            <ResumeSection id="cv-education" title={c.education}>
              <Timeline records={r.education} />
            </ResumeSection>
            <ResumeSection id="cv-skills" title={ru ? "Технические навыки" : "Technical skills"}>
              <dl className={styles.skills}>
                {r.skills.map(([label, tools]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{tools}</dd>
                  </div>
                ))}
              </dl>
            </ResumeSection>
          </div>
        </div>
      </main>
    </>
  );
}
