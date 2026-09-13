"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { copy, projects, type Locale } from "@/lib/content";

function LanguageSwitch({ locale }: { locale: Locale }) {
  const other = locale === "en" ? "ru" : "en";
  return <Link href={`/${other}`} className="text-xs tracking-[.16em] uppercase text-muted hover:text-paper">{locale.toUpperCase()} / {other.toUpperCase()}</Link>;
}

function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "nu-atrium") return (
    <div className="visual-field">
      {[["PROFILE","10%","18%"],["COMMUNITIES","58%","14%"],["MARKETPLACE","16%","62%"],["EVENTS","63%","56%"],["MESSAGING","39%","38%"],["JOBS","69%","76%"]].map(([t,l,top]) => <div key={t} className="node" style={{left:l,top}}>{t}</div>)}
    </div>
  );
  if (slug === "invitation-platform") return (
    <div className="visual-field flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-5 text-center text-xs tracking-[.18em] uppercase">
        {["Create","Customize","Preview","Publish","RSVP"].map((x,i)=><div key={x} className="flex items-center gap-4"><span className="w-8 text-burgundy">0{i+1}</span><div className="flex-1 border border-line px-4 py-4">{x}</div></div>)}
      </div>
    </div>
  );
  return (
    <div className="visual-field flex items-center justify-center p-6">
      <div className="grid w-full max-w-3xl grid-cols-2 gap-3 text-[10px] uppercase tracking-[.16em] md:grid-cols-6">
        {["Market Data","Analysis","Agent","Risk","Execution","Evaluation"].map((x,i)=><div key={x} className="border border-line px-3 py-5 text-center"><span className="block text-burgundy mb-2">0{i+1}</span>{x}</div>)}
      </div>
    </div>
  );
}

export default function PortfolioSite({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const featured = projects.filter(p=>p.featured);
  const secondary = projects.filter(p=>!p.featured);
  return <main>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-ink/75 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between">
        <Link href={`/${locale}`} className="font-semibold tracking-[.14em]">SAID</Link>
        <nav className="hidden items-center gap-7 text-xs uppercase tracking-[.14em] md:flex">
          <a href="#work">{c.nav[0]}</a><a href="#milestones">{c.nav[1]}</a><Link href={`/${locale}/cv`}>{c.nav[2]}</Link><a href="#contact">{c.nav[3]}</a>
        </nav>
        <LanguageSwitch locale={locale}/>
      </div>
    </header>

    <section className="min-h-[100svh] flex items-end pt-24 pb-10 md:pb-16">
      <div className="shell w-full">
        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="eyebrow mb-6">{c.heroEyebrow}</motion.div>
        <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.08}} className="display text-[19vw] leading-[.78] md:text-[11vw]">SAID<br/>AMANZHOL</motion.h1>
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-end">
          <p className="display max-w-2xl text-3xl leading-tight md:text-5xl">{c.heroStatement}</p>
          <div className="md:justify-self-end md:max-w-md"><p className="muted leading-7">{c.heroSub}</p><div className="mt-6 flex gap-6 text-sm uppercase tracking-[.12em]"><a className="linkline" href="#work">{c.viewWork} →</a><Link className="linkline" href={`/${locale}/cv`}>{c.viewCV}</Link></div></div>
        </div>
      </div>
    </section>

    <section id="work" className="section"><div className="shell"><div className="eyebrow mb-14">{c.selectedWork}</div><div className="space-y-28">
      {featured.map((p,i)=><article key={p.slug}><div className="mb-8 flex items-start justify-between gap-6"><div><div className="eyebrow mb-3">0{i+1}</div><h2 className="display text-5xl md:text-8xl">{p.title}</h2></div><div className="eyebrow text-right">{p.year}<br/>{p.status}</div></div><ProjectVisual slug={p.slug}/><div className="mt-7 grid gap-6 md:grid-cols-2"><p className="text-xl leading-8">{c.featured[p.slug as keyof typeof c.featured]}</p><div className="md:text-right"><div className="eyebrow mb-4">{p.category}</div><div className="flex flex-wrap gap-5 md:justify-end">{p.live&&<a className="linkline" target="_blank" href={p.live}>Live ↗</a>}{p.github&&<a className="linkline" target="_blank" href={p.github}>GitHub ↗</a>}<Link className="linkline" href={`/${locale}/projects/${p.slug}`}>Case Study →</Link></div></div></div></article>)}
    </div></div></section>

    <section className="section"><div className="shell"><div className="eyebrow mb-12">{c.moreWork}</div><div className="project-grid">{secondary.map(p=><article key={p.slug} className="border border-line p-6 md:p-8"><div className="flex justify-between gap-4"><h3 className="display text-3xl md:text-4xl">{p.title}</h3><span className="eyebrow">{p.year}</span></div><p className="muted mt-8 min-h-24 leading-7">{c.secondary[p.slug as keyof typeof c.secondary]}</p><div className="eyebrow mt-8">{p.category}</div><div className="mt-5 flex gap-5 text-sm">{p.live&&<a className="linkline" target="_blank" href={p.live}>Live ↗</a>}{p.github&&<a className="linkline" target="_blank" href={p.github}>GitHub ↗</a>}</div></article>)}</div></div></section>

    <section id="milestones" className="section"><div className="shell"><div className="eyebrow mb-12">{c.milestones}</div><div className="space-y-0">{[
      ["01","Digital Bridge 2026 — Team Lead",locale==="en"?"Selected as one of three Team Leads, coordinating roughly 50–70 volunteers within a broader team of approximately 150–200 people.":"Один из трех Team Lead: координация примерно 50–70 волонтеров в более широкой команде около 150–200 человек."],
      ["02","SapaSpeakers — CTO / Technical Lead",locale==="en"?"Technical direction, internal digital systems, process improvement, and technology-enabled operational development.":"Техническое направление, внутренние цифровые системы, улучшение процессов и развитие операционной работы через технологии."]
    ].map(([n,t,d])=><div key={n} className="grid gap-4 border-t border-line py-9 md:grid-cols-[80px_1fr_1fr]"><div className="display text-4xl text-burgundy">{n}</div><h3 className="text-2xl">{t}</h3><p className="muted leading-7">{d}</p></div>)}</div></div></section>

    <section className="section"><div className="shell"><div className="eyebrow mb-12">{c.experience}</div><div className="space-y-0">{[
      ["2026 — Present","CTO / Technical Lead","SapaSpeakers L.V.O."],
      ["2024 — Present","Independent Product Developer",locale==="en"?"Building full-stack products across education, community, operations, and AI.":"Создание full-stack продуктов в образовании, сообществах, операционных системах и AI."],
      ["2026 — Present","Volunteer & Event Operations","NU · Astana Hub · SapaSpeakers"]
    ].map(([date,role,org])=><div key={role} className="grid gap-3 border-t border-line py-8 md:grid-cols-[180px_1fr_1fr]"><div className="eyebrow">{date}</div><h3 className="text-2xl">{role}</h3><div className="muted">{org}</div></div>)}</div></div></section>

    <section className="section"><div className="shell grid gap-10 md:grid-cols-[.9fr_1.1fr] md:items-center"><div><div className="eyebrow mb-6">{c.about}</div><h2 className="display text-5xl md:text-7xl">Said Amanzhol</h2><p className="mt-7 max-w-xl text-xl leading-8">{c.aboutBody}</p><div className="mt-7 text-sm text-muted">@sherlockzini</div><Link className="linkline mt-8" href={`/${locale}/cv`}>{c.viewCV} →</Link></div><div className="relative aspect-[4/5] overflow-hidden border border-line"><Image src="/portrait.jpg" alt="Said Amanzhol" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority={false}/></div></div></section>

    <section className="section"><div className="shell"><div className="eyebrow mb-12">{c.education}</div>{[
      ["2026 — Present","Nazarbayev University","B.A. Economics"],
      ["2025 — 2026","Nazarbayev University","NUFYP"],
      ["2025","National School of Physics & Mathematics","High School Diploma"]
    ].map(([date,school,degree])=><div key={degree} className="grid gap-3 border-t border-line py-8 md:grid-cols-[180px_1fr_1fr]"><div className="eyebrow">{date}</div><h3 className="text-xl">{school}</h3><div className="muted">{degree}</div></div>)}</div></section>

    <footer id="contact" className="section pb-10"><div className="shell"><div className="eyebrow mb-8">Contact</div><h2 className="display text-6xl md:text-8xl">{c.contact}</h2><div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 text-lg"><a className="linkline" href="mailto:said.amanzhol@nu.edu.kz">Email</a><a className="linkline" target="_blank" href="https://www.linkedin.com/in/said-amanzhol-83038b315">LinkedIn</a><a className="linkline" target="_blank" href="https://github.com/saidstrong">GitHub</a><a className="linkline" target="_blank" href="https://t.me/sherlockzini">Telegram</a><span className="linkline">Instagram · @sherlockzini</span></div><div className="mt-24 flex justify-between border-t border-line pt-6 text-xs uppercase tracking-[.14em] text-muted"><span>SAID AMANZHOL</span><span>Astana, Kazakhstan · 2026</span></div></div></footer>
  </main>;
}
