"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectVisual from "@/components/ProjectVisual";
import SiteHeader from "@/components/SiteHeader";
import { copy, localePath, projects, statusLabel, type Locale, type Project } from "@/lib/content";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

function ExternalLinks({ project, locale, compact = false }: { project: Project; locale: Locale; compact?: boolean }) {
  const c = copy[locale];
  return (
    <div className={`project-links ${compact ? "project-links-compact" : ""}`}>
      {project.live && <a className="linkline" target="_blank" rel="noreferrer" href={project.live}>{c.live} <span aria-hidden="true">↗</span></a>}
      {project.github && <a className="linkline" target="_blank" rel="noreferrer" href={project.github}>{c.github} <span aria-hidden="true">↗</span></a>}
      {project.featured && <Link className="linkline" href={localePath(locale, `/projects/${project.slug}`)}>{c.caseStudy} <span aria-hidden="true">→</span></Link>}
    </div>
  );
}

function FeaturedProject({ project, index, locale }: { project: Project; index: number; locale: Locale }) {
  const c = copy[locale];
  const description = c.featured[project.slug as keyof typeof c.featured];
  return (
    <motion.article
      className="featured-project"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <div className="project-heading">
        <div>
          <div className="eyebrow project-index">0{index + 1}</div>
          <h2 className="display project-title">{project.title}</h2>
        </div>
        <div className="project-status eyebrow">
          <span>{project.year}</span>
          <span className={project.status === "development" ? "status-development" : ""}>{statusLabel[locale][project.status]}</span>
        </div>
      </div>
      <ProjectVisual slug={project.slug} />
      <div className="project-copy">
        <p className="project-description">{description}</p>
        <div className="project-aside">
          <div className="eyebrow">{project.category}</div>
          <ExternalLinks project={project} locale={locale} />
        </div>
      </div>
    </motion.article>
  );
}

export default function PortfolioSite({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const featured = projects.filter((project) => project.featured);
  const secondary = projects.filter((project) => !project.featured);

  return (
    <main>
      <SiteHeader locale={locale} />

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="shell hero-shell">
          <motion.div className="eyebrow hero-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55 }}>
            {c.heroEyebrow}
          </motion.div>
          <motion.h1 id="hero-title" className="display hero-title" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}>
            SAID<br />AMANZHOL
          </motion.h1>
          <div className="hero-lower">
            <motion.p className="display hero-statement" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}>
              {c.heroStatement}
            </motion.p>
            <motion.div className="hero-support" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" }}>
              <p className="muted hero-subcopy">{c.heroSub}</p>
              <div className="hero-actions">
                <a className="linkline linkline-strong" href="#work">{c.viewWork} <span aria-hidden="true">↓</span></a>
                <Link className="linkline" href={localePath(locale, "/cv")}>{c.viewCV} <span aria-hidden="true">↗</span></Link>
              </div>
            </motion.div>
          </div>
          <div className="hero-footerline"><span>01 / 07</span><span>{c.scroll} <span aria-hidden="true">↓</span></span></div>
        </div>
      </section>

      <section id="work" className="section section-work">
        <div className="shell">
          <div className="section-heading"><div className="eyebrow">01</div><h2 className="display section-title">{c.selectedWork}</h2><p className="section-note muted">Three systems, each at a different stage of proof.</p></div>
          <div className="featured-list">
            {featured.map((project, index) => <FeaturedProject key={project.slug} project={project} index={index} locale={locale} />)}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="more-work-title">
        <div className="shell">
          <div className="section-heading"><div className="eyebrow">02</div><h2 id="more-work-title" className="display section-title">{c.moreWork}</h2><p className="section-note muted">A wider set of product and operational experiments.</p></div>
          <div className="project-grid">
            {secondary.map((project, index) => (
              <motion.article key={project.slug} className="secondary-project" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: index * 0.04 }}>
                <div className="secondary-topline"><span className="eyebrow">0{index + 1}</span><span className="eyebrow">{project.year}</span></div>
                <h3 className="display secondary-title">{project.title}</h3>
                <p className="muted secondary-description">{c.secondary[project.slug as keyof typeof c.secondary]}</p>
                <div className="eyebrow secondary-category">{project.category}</div>
                <ExternalLinks project={project} locale={locale} compact />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="milestones" className="section" aria-labelledby="milestones-title">
        <div className="shell">
          <div className="section-heading"><div className="eyebrow">03</div><h2 id="milestones-title" className="display section-title">{c.milestones}</h2></div>
          <div className="record-list">
            <div className="record-row milestone-row"><div className="record-number display">01</div><h3>{locale === "en" ? "Digital Bridge 2026 — Team Lead" : "Digital Bridge 2026 — Team Lead"}</h3><p className="muted">{locale === "en" ? "Selected as one of three Team Leads, coordinating roughly 50–70 volunteers within a broader team of approximately 150–200 people." : "Один из трех Team Lead: координация примерно 50–70 волонтеров в более широкой команде около 150–200 человек."}</p></div>
            <div className="record-row milestone-row"><div className="record-number display">02</div><h3>SapaSpeakers — CTO / Technical Lead</h3><p className="muted">{locale === "en" ? "Technical direction, internal digital systems, process improvement, and technology-enabled operational development." : "Техническое направление, внутренние цифровые системы, улучшение процессов и развитие операционной работы через технологии."}</p></div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="experience-title">
        <div className="shell">
          <div className="section-heading"><div className="eyebrow">04</div><h2 id="experience-title" className="display section-title">{c.experience}</h2></div>
          <div className="record-list">
            {[
              ["2026 — Present", "CTO / Technical Lead", "SapaSpeakers L.V.O."],
              ["2024 — Present", "Independent Product Developer", locale === "en" ? "Building full-stack products across education, community, operations, and AI." : "Создание full-stack продуктов в образовании, сообществах, операционных системах и AI."],
              ["2026 — Present", "Volunteer & Event Operations", "NU · Astana Hub · SapaSpeakers"]
            ].map(([date, role, organisation]) => <div key={role} className="record-row experience-row"><div className="eyebrow">{date}</div><h3>{role}</h3><div className="muted">{organisation}</div></div>)}
          </div>
        </div>
      </section>

      <section id="about" className="section" aria-labelledby="about-title">
        <div className="shell about-grid">
          <div className="about-copy"><div className="eyebrow">05 / {c.about}</div><h2 id="about-title" className="display about-title">Said<br />Amanzhol</h2><p className="about-body">{c.aboutBody}</p><div className="about-handle">@sherlockzini</div><Link className="linkline linkline-strong about-cv-link" href={localePath(locale, "/cv")}>{c.viewCV} <span aria-hidden="true">↗</span></Link></div>
          <div className="portrait-frame"><Image src="/portrait.jpg" alt="Said Amanzhol in a burgundy and blue academic robe" fill className="object-cover" sizes="(max-width: 819px) 100vw, 48vw" /></div>
        </div>
      </section>

      <section id="education" className="section" aria-labelledby="education-title">
        <div className="shell">
          <div className="section-heading"><div className="eyebrow">06</div><h2 id="education-title" className="display section-title">{c.education}</h2></div>
          <div className="record-list">
            {[["2026 — Present", "Nazarbayev University", "B.A. Economics"], ["2025 — 2026", "Nazarbayev University", "NUFYP"], ["2025", "National School of Physics & Mathematics", "High School Diploma"]].map(([date, school, degree]) => <div key={degree} className="record-row education-row"><div className="eyebrow">{date}</div><h3>{school}</h3><div className="muted">{degree}</div></div>)}
          </div>
        </div>
      </section>

      <footer id="contact" className="section footer-section">
        <div className="shell">
          <div className="eyebrow">07 / Contact</div>
          <h2 className="display contact-title">{c.contact}</h2>
          <div className="contact-links"><a className="linkline" href="mailto:said.amanzhol@nu.edu.kz">Email <span aria-hidden="true">↗</span></a><a className="linkline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/said-amanzhol-83038b315">LinkedIn <span aria-hidden="true">↗</span></a><a className="linkline" target="_blank" rel="noreferrer" href="https://github.com/saidstrong">GitHub <span aria-hidden="true">↗</span></a><a className="linkline" target="_blank" rel="noreferrer" href="https://t.me/sherlockzini">Telegram <span aria-hidden="true">↗</span></a></div>
          <div className="footer-bottom"><span>SAID AMANZHOL</span><span>{c.footerLocation}</span></div>
        </div>
      </footer>
    </main>
  );
}
