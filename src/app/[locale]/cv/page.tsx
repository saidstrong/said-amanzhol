import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import {
  copy,
  localePath,
  projectCategory,
  projects,
  statusLabel,
  type Locale,
} from "@/lib/content";
import { resume } from "@/lib/resume";
import { pageMetadata } from "@/lib/metadata";

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
  );
}

export default async function CVPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ru") notFound();
  const currentLocale: Locale = locale;
  const ru = locale === "ru";
  const c = copy[locale];
  const r = resume[locale];

  return (
    <>
      <SiteHeader locale={currentLocale} currentPath="/cv" />
      <main id="content" tabIndex={-1} className="cv-page">
        <div className="shell cv-shell">
          <div className="cv-topline">
            <Link prefetch={false} href={localePath(currentLocale)}>
              ← {ru ? "На главную" : "Back home"}
            </Link>
            <span>{ru ? "CV · 2026" : "Document · 2026"}</span>
          </div>
          <div className="cv-layout">
            <aside className="cv-intro">
              <div className="eyebrow">CV / Said Amanzhol</div>
              <h1 className="display cv-title">
                Said
                <br />
                Amanzhol
              </h1>
              <p className="muted cv-tagline">
                {ru
                  ? "Экономика · Технологии · Продукты"
                  : "Economics · Technology · Product"}
              </p>
              <div className="cv-actions">
                <a
                  className="linkline linkline-strong"
                  href="/Said-Amanzhol-CV.pdf"
                  download
                >
                  {ru ? "Скачать CV · PDF" : "Download CV · PDF"}{" "}
                  <span aria-hidden="true">↓</span>
                </a>
                <a
                  className="linkline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/said-amanzhol-83038b315"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="cv-contact muted">
                <a href="mailto:said.amanzhol@nu.edu.kz">
                  said.amanzhol@nu.edu.kz
                </a>
                <div>@sherlockzini</div>
                <div>{ru ? "Астана, Казахстан" : "Astana, Kazakhstan"}</div>
              </div>
            </aside>
            <div className="cv-content">
              <section className="cv-section" aria-labelledby="cv-profile">
                <h2 id="cv-profile" className="eyebrow cv-section-label">
                  {ru ? "Профиль" : "Profile"}
                </h2>
                <p className="cv-lead">{c.heroSub}</p>
              </section>
              <section className="cv-section" aria-labelledby="cv-experience">
                <h2 id="cv-experience" className="eyebrow cv-section-label">
                  {c.experience}
                </h2>
                <div className="cv-record-list">
                  {r.experience.map(([date, role, organisation]) => (
                    <div key={role} className="cv-record">
                      <div className="eyebrow">{date}</div>
                      <div className="cv-record-main">
                        <h3 className="text-lg">{role}</h3>
                        <div className="muted cv-record-detail">
                          {organisation}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <section className="cv-section" aria-labelledby="cv-projects">
                <h2 id="cv-projects" className="eyebrow cv-section-label">
                  {ru ? "Проекты" : "Selected projects"}
                </h2>
                <div className="cv-project-list">
                  {projects.map((project) => (
                    <div key={project.slug} className="cv-project-row">
                      <div>
                        <h3 className="text-lg">{project.title}</h3>
                        <div className="eyebrow mt-2">
                          {projectCategory(project, currentLocale)}
                        </div>
                      </div>
                      <div className="cv-project-meta">
                        <span className="eyebrow">{project.year}</span>
                        <span
                          className={`eyebrow ${project.status === "development" ? "status-development" : ""}`}
                        >
                          {statusLabel[currentLocale][project.status]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <section className="cv-section" aria-labelledby="cv-milestones">
                <h2 id="cv-milestones" className="eyebrow cv-section-label">
                  {c.milestones}
                </h2>
                <div className="cv-milestones">
                  {r.milestones.map(([title, description]) => (
                    <div key={title}>
                      <h3 className="text-lg">{title}</h3>
                      <p className="muted">{description}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section className="cv-section" aria-labelledby="cv-education">
                <h2 id="cv-education" className="eyebrow cv-section-label">
                  {c.education}
                </h2>
                <div className="cv-record-list">
                  {r.education.map(([date, school, degree]) => (
                    <div key={degree} className="cv-record">
                      <div className="eyebrow">{date}</div>
                      <div className="cv-record-main">
                        <h3 className="text-lg">{school}</h3>
                        <div className="muted cv-record-detail">{degree}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <section className="cv-section" aria-labelledby="cv-skills">
                <h2 id="cv-skills" className="eyebrow cv-section-label">
                  {ru ? "Навыки" : "Skills"}
                </h2>
                <ul className="skill-list">
                  {r.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
          <div className="cv-bottomline">
            <Link
              prefetch={false}
              className="linkline"
              href={localePath(currentLocale)}
            >
              ← {ru ? "К портфолио" : "Back to portfolio"}
            </Link>
            <a className="linkline" href="/Said-Amanzhol-CV.pdf" download>
              {ru ? "Скачать PDF" : "Download PDF"} ↓
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
