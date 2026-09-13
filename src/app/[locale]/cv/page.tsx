import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import { copy, localePath, projects, statusLabel, type Locale } from "@/lib/content";

const skills = ["Product Development", "Full-Stack Development", "Project Management", "Data Analysis", "Research", "Strategic Planning", "AI Tools", "Public Communication"];

export default async function CVPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ru") notFound();
  const currentLocale = locale as Locale;
  const ru = currentLocale === "ru";
  const c = copy[currentLocale];
  return (
    <main className="cv-page">
      <SiteHeader locale={currentLocale} currentPath="/cv" />
      <div className="shell cv-shell">
        <div className="cv-topline"><Link href={localePath(currentLocale)}>← {ru ? "На главную" : "Back home"}</Link><span>{ru ? "Документ · 2026" : "Document · 2026"}</span></div>
        <div className="cv-layout">
          <aside className="cv-intro">
            <div className="eyebrow">CV / Said Amanzhol</div>
            <h1 className="display cv-title">Said<br />Amanzhol</h1>
            <p className="muted cv-tagline">{ru ? "Экономика · Технологии · Продукты" : "Economics · Technology · Product"}</p>
            <div className="cv-actions"><a className="linkline linkline-strong" href="/Said-Amanzhol-CV.pdf" download>{ru ? "Скачать PDF CV" : "Download PDF CV"} <span aria-hidden="true">↓</span></a><a className="linkline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/said-amanzhol-83038b315">LinkedIn <span aria-hidden="true">↗</span></a></div>
            <div className="cv-contact muted"><div>said.amanzhol@nu.edu.kz</div><div>@sherlockzini</div><div>{ru ? "Астана, Казахстан" : "Astana, Kazakhstan"}</div></div>
          </aside>
          <div className="cv-content">
            <section className="cv-section" aria-labelledby="cv-profile"><div id="cv-profile" className="eyebrow">{ru ? "Профиль" : "Profile"}</div><p className="cv-lead">{ru ? "Студент экономики Назарбаев Университета, создающий цифровые продукты на пересечении технологий, рынков, операционных задач и AI." : "Economics student at Nazarbayev University building digital products across technology, markets, operations, and AI."}</p></section>
            <section className="cv-section" aria-labelledby="cv-experience"><div id="cv-experience" className="eyebrow cv-section-label">{c.experience}</div><div className="cv-record-list">
              {[["2026 — Present", "CTO / Technical Lead", "SapaSpeakers L.V.O."], ["2024 — Present", "Independent Product Developer", ru ? "Full-stack продукты в образовании, операциях, сообществах и AI." : "Full-stack products across education, operations, community platforms, and AI."], ["2026 — Present", "Volunteer & Event Operations", "NU · Astana Hub · SapaSpeakers"]].map(([date, role, organisation]) => <div key={role} className="cv-record"><div className="eyebrow">{date}</div><div className="cv-record-main"><div className="text-lg">{role}</div><div className="muted cv-record-detail">{organisation}</div></div></div>)}
            </div></section>
            <section className="cv-section" aria-labelledby="cv-projects"><div id="cv-projects" className="eyebrow cv-section-label">{ru ? "Проекты" : "Selected projects"}</div><div className="cv-project-list">{projects.map((project) => <div key={project.slug} className="cv-project-row"><div><div className="text-lg">{project.title}</div><div className="eyebrow mt-2">{project.category}</div></div><div className="cv-project-meta"><span className="eyebrow">{project.year}</span><span className="eyebrow">{statusLabel[currentLocale][project.status]}</span></div></div>)}</div></section>
            <section className="cv-section" aria-labelledby="cv-milestones"><div id="cv-milestones" className="eyebrow cv-section-label">{c.milestones}</div><div className="cv-milestones"><div><div className="text-lg">Digital Bridge 2026 — Team Lead</div><p className="muted">{ru ? "Один из трех Team Lead; координация примерно 50–70 волонтеров в команде около 150–200 человек." : "Selected as one of three Team Leads; coordinated roughly 50–70 volunteers within a broader team of approximately 150–200."}</p></div><div><div className="text-lg">SapaSpeakers — CTO / Technical Lead</div><p className="muted">{ru ? "Техническое направление, внутренние цифровые системы и улучшение операционных процессов." : "Technical direction, internal digital systems, and technology-enabled operational improvement."}</p></div></div></section>
            <section className="cv-section" aria-labelledby="cv-education"><div id="cv-education" className="eyebrow cv-section-label">{c.education}</div><div className="cv-record-list">{[["2026 — Present", "Nazarbayev University", "B.A. Economics"], ["2025 — 2026", "Nazarbayev University", "NUFYP"], ["2025", "National School of Physics & Mathematics", "High School Diploma"]].map(([date, school, degree]) => <div key={degree} className="cv-record"><div className="eyebrow">{date}</div><div className="cv-record-main"><div className="text-lg">{school}</div><div className="muted cv-record-detail">{degree}</div></div></div>)}</div></section>
            <section className="cv-section" aria-labelledby="cv-skills"><div id="cv-skills" className="eyebrow cv-section-label">{ru ? "Навыки" : "Skills"}</div><div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></section>
          </div>
        </div>
        <div className="cv-bottomline"><Link className="linkline" href={localePath(currentLocale)}>← {ru ? "Все проекты" : "Back to portfolio"}</Link><a className="linkline" href="/Said-Amanzhol-CV.pdf" download>{ru ? "Скачать PDF" : "Download PDF"} ↓</a></div>
      </div>
    </main>
  );
}
