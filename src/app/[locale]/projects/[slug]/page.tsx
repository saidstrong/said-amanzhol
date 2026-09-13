import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";

const details = {
  "nu-atrium": {
    headline: "A unified digital layer for campus life.",
    problem: "Campus information, communities, listings, opportunities, events, and communication are fragmented across chats, social platforms, spreadsheets, and informal channels.",
    decisions: ["Unified identity across modules", "Shared information architecture", "Role and permission boundaries", "Reusable product patterns"],
    system: ["Profiles","Communities","Marketplace","Events","Messaging","Jobs","Notifications","Admin"],
    result: "The project reached the stage of a deployed full-stack prototype. It was not launched to a real student user base, so no adoption, retention, or usage metrics are claimed.",
    lessons: ["Scope compounds quickly across product domains.", "Architecture matters earlier than expected.", "A working product is not the same thing as a validated product."]
  },
  "invitation-platform": {
    headline: "Flexibility without uncontrolled complexity.",
    problem: "The product explores what a real invitation-building system could look like beyond fixed templates: mobile-first editing, reusable blocks, media, RSVP, publishing, and monetization logic.",
    decisions: ["Mobile-first creation", "One responsive design", "Bounded customization", "Stable versioned publishing"],
    system: ["Create","Customize","Preview","Publish","Share","RSVP"],
    result: "The project reached the stage of a deployed product prototype. Core editor, publishing, media, RSVP, authentication, customization, and payment/entitlement systems were implemented. No traction or revenue claims are made.",
    lessons: ["Product flexibility creates architectural complexity quickly.", "Mobile editing is harder than mobile viewing.", "Publishing needs a different mental model from editing."]
  },
  "quant-trade-ai": {
    headline: "Exploring autonomous agents for quantitative trading workflows.",
    problem: "This project is still in development. The current portfolio deliberately avoids claiming architecture, profitability, live-capital deployment, or performance that has not been verified.",
    decisions: ["Evidence before claims", "Risk-aware system direction", "Separation of analysis and execution", "Quantitative evaluation"],
    system: ["Market Data","Analysis","Agent","Risk","Execution","Evaluation"],
    result: "In development. No live demo, public repository, returns, or backtest statistics are claimed yet.",
    lessons: ["The implementation and evidence should define the case study, not the project name.", "Trading systems require unusually high discipline around validation and risk."]
  }
} as const;

export default async function ProjectPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if ((locale !== "en" && locale !== "ru") || !(slug in details)) notFound();
  const p = projects.find(x=>x.slug===slug);
  if (!p) notFound();
  const d = details[slug as keyof typeof details];
  return <main className="pb-20 pt-8"><div className="shell">
    <div className="flex justify-between border-b border-line pb-5 text-xs uppercase tracking-[.14em]"><Link href={`/${locale}#work`}>← Back to work</Link><span>{p.year} · {p.status}</span></div>
    <section className="py-20"><div className="eyebrow mb-5">Selected Work</div><h1 className="display max-w-5xl text-6xl leading-[.88] md:text-9xl">{p.title}</h1><p className="display mt-10 max-w-3xl text-3xl leading-tight md:text-5xl">{d.headline}</p><div className="mt-10 flex flex-wrap gap-6 text-sm">{p.live&&<a className="linkline" target="_blank" href={p.live}>Live Demo ↗</a>}{p.github&&<a className="linkline" target="_blank" href={p.github}>GitHub ↗</a>}</div></section>
    <section className="section"><div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]"><div className="eyebrow">Problem / Objective</div><p className="max-w-3xl text-2xl leading-9">{d.problem}</p></div></section>
    <section className="section"><div className="eyebrow mb-10">System Direction</div><div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">{d.system.map((x,i)=><div key={x} className="border border-line p-5"><div className="eyebrow text-burgundy">0{i+1}</div><div className="mt-6 text-lg">{x}</div></div>)}</div></section>
    <section className="section"><div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]"><div className="eyebrow">Key Decisions</div><div>{d.decisions.map((x,i)=><div key={x} className="grid grid-cols-[50px_1fr] border-t border-line py-5"><span className="text-burgundy">0{i+1}</span><span className="text-xl">{x}</span></div>)}</div></div></section>
    <section className="section"><div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]"><div className="eyebrow">Result / Status</div><p className="max-w-3xl text-2xl leading-9">{d.result}</p></div></section>
    <section className="section"><div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]"><div className="eyebrow">What I learned</div><div>{d.lessons.map(x=><p key={x} className="border-t border-line py-5 text-xl leading-8">{x}</p>)}</div></div></section>
    <div className="border-t border-line pt-8"><Link className="linkline" href={`/${locale}#work`}>← All work</Link></div>
  </div></main>;
}
