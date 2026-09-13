import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, type Locale } from "@/lib/content";

export default async function CVPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ru") notFound();
  const ru = locale === "ru";
  return <main className="pb-20 pt-8">
    <div className="shell">
      <div className="flex items-center justify-between border-b border-line pb-5 text-xs uppercase tracking-[.14em]"><Link href={`/${locale}`}>← SAID</Link><Link href={`/${ru?"en":"ru"}/cv`}>{ru?"RU / EN":"EN / RU"}</Link></div>
      <div className="grid gap-12 py-16 md:grid-cols-[.75fr_1.25fr]">
        <aside className="md:sticky md:top-10 md:self-start">
          <div className="eyebrow mb-5">CV</div><h1 className="display text-6xl md:text-7xl">Said<br/>Amanzhol</h1>
          <p className="muted mt-6 max-w-sm leading-7">{ru?"Экономика · Технологии · Продукты":"Economics · Technology · Product"}</p>
          <div className="mt-8 flex flex-col items-start gap-4"><a className="linkline" href="/Said-Amanzhol-CV.pdf" download>{ru?"Скачать PDF CV ↓":"Download PDF CV ↓"}</a><a className="linkline" target="_blank" href="https://www.linkedin.com/in/said-amanzhol-83038b315">LinkedIn ↗</a></div>
          <div className="mt-12 space-y-2 text-sm text-muted"><div>said.amanzhol@nu.edu.kz</div><div>@sherlockzini</div><div>Astana, Kazakhstan</div></div>
        </aside>
        <div>
          <section className="border-t border-line py-9"><div className="eyebrow mb-5">{ru?"Профиль":"Profile"}</div><p className="max-w-2xl text-xl leading-8">{ru?"Студент экономики Назарбаев Университета, создающий цифровые продукты на пересечении технологий, рынков, операционных задач и AI.":"Economics student at Nazarbayev University building digital products across technology, markets, operations, and AI."}</p></section>
          <section className="border-t border-line py-9"><div className="eyebrow mb-7">{ru?"Опыт":"Experience"}</div>{[
            ["2026 — Present","CTO / Technical Lead","SapaSpeakers L.V.O."],
            ["2024 — Present","Independent Product Developer",ru?"Full-stack продукты в образовании, операциях, сообществах и AI.":"Full-stack products across education, operations, community platforms, and AI."],
            ["2026 — Present","Volunteer & Event Operations","NU · Astana Hub · SapaSpeakers"]
          ].map(([d,r,o])=><div key={r} className="grid gap-2 border-t border-line/60 py-6 md:grid-cols-[150px_1fr_1fr]"><div className="eyebrow">{d}</div><div className="text-lg">{r}</div><div className="muted">{o}</div></div>)}</section>
          <section className="border-t border-line py-9"><div className="eyebrow mb-7">{ru?"Проекты":"Selected Projects"}</div>{projects.map(p=><div key={p.slug} className="flex items-center justify-between gap-6 border-t border-line/60 py-5"><div><div className="text-lg">{p.title}</div><div className="eyebrow mt-2">{p.category}</div></div><div className="eyebrow">{p.year}</div></div>)}</section>
          <section className="border-t border-line py-9"><div className="eyebrow mb-7">{ru?"Ключевые этапы":"Selected Milestones"}</div><div className="space-y-5"><div><div className="text-lg">Digital Bridge 2026 — Team Lead</div><p className="muted mt-2 leading-7">{ru?"Один из трех Team Lead; координация примерно 50–70 волонтеров в команде около 150–200 человек.":"Selected as one of three Team Leads; coordinated roughly 50–70 volunteers within a broader team of approximately 150–200."}</p></div><div><div className="text-lg">SapaSpeakers — CTO / Technical Lead</div><p className="muted mt-2 leading-7">{ru?"Техническое направление, внутренние цифровые системы и улучшение операционных процессов.":"Technical direction, internal digital systems, and technology-enabled operational improvement."}</p></div></div></section>
          <section className="border-t border-line py-9"><div className="eyebrow mb-7">{ru?"Образование":"Education"}</div>{[["2026 — Present","Nazarbayev University","B.A. Economics"],["2025 — 2026","Nazarbayev University","NUFYP"],["2025","National School of Physics & Mathematics","High School Diploma"]].map(([d,s,g])=><div key={g} className="grid gap-2 border-t border-line/60 py-5 md:grid-cols-[150px_1fr_1fr]"><div className="eyebrow">{d}</div><div>{s}</div><div className="muted">{g}</div></div>)}</section>
          <section className="border-t border-line py-9"><div className="eyebrow mb-7">{ru?"Навыки":"Skills"}</div><div className="flex flex-wrap gap-2">{["Product Development","Full-Stack Development","Project Management","Data Analysis","Research","Strategic Planning","AI Tools","Public Communication"].map(x=><span key={x} className="border border-line px-3 py-2 text-sm">{x}</span>)}</div></section>
        </div>
      </div>
    </div>
  </main>;
}
