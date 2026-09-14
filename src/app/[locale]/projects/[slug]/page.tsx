import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectVisual from "@/components/ProjectVisual";
import SiteHeader from "@/components/SiteHeader";
import {
  copy,
  localePath,
  projects,
  statusLabel,
  type Locale,
  type ProjectSlug,
} from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

type ProjectDetail = {
  eyebrow: string;
  headline: string;
  problemLabel: string;
  problem: string;
  systemLabel: string;
  decisionsLabel: string;
  decisions: string[];
  resultLabel: string;
  result: string;
  lessonsLabel: string;
  lessons: string[];
};

const details: Partial<Record<ProjectSlug, Record<Locale, ProjectDetail>>> = {
  "nu-atrium": {
    en: {
      eyebrow: "Selected work / 01",
      headline: "A unified digital layer for campus life.",
      problemLabel: "Problem / objective",
      problem:
        "Campus information, communities, listings, opportunities, events, and communication are fragmented across chats, social platforms, spreadsheets, and informal channels.",
      systemLabel: "System direction",
      decisionsLabel: "Key decisions",
      decisions: [
        "Unified identity across modules",
        "Shared information architecture",
        "Role and permission boundaries",
        "Reusable product patterns",
      ],
      resultLabel: "Result / status",
      result:
        "The project reached the stage of a deployed full-stack prototype. It was not launched to a real student user base, so no adoption, retention, or usage metrics are claimed.",
      lessonsLabel: "What I learned",
      lessons: [
        "Scope compounds quickly across product domains.",
        "Architecture matters earlier than expected.",
        "A working product is not the same thing as a validated product.",
      ],
    },
    ru: {
      eyebrow: "Избранный проект / 01",
      headline: "Единый цифровой слой для жизни кампуса.",
      problemLabel: "Проблема / задача",
      problem:
        "Информация кампуса, сообщества, объявления, возможности, события и коммуникация распределены между чатами, социальными сетями, таблицами и неформальными каналами.",
      systemLabel: "Направление системы",
      decisionsLabel: "Ключевые решения",
      decisions: [
        "Один профиль для всех разделов",
        "Общая информационная архитектура",
        "Разделение ролей и прав доступа",
        "Переиспользуемые продуктовые решения",
      ],
      resultLabel: "Результат / статус",
      result:
        "Полнофункциональный прототип опубликован. Запуска на реальную студенческую аудиторию еще не было, поэтому данные о привлечении, удержании и активности пользователей не заявляются.",
      lessonsLabel: "Что я понял",
      lessons: [
        "Каждый новый раздел увеличивает сложность всей системы.",
        "Архитектура становится важной раньше, чем ожидаешь.",
        "Работоспособность продукта еще не доказывает спрос на него.",
      ],
    },
  },
  "invitation-platform": {
    en: {
      eyebrow: "Selected work / 02",
      headline: "Flexibility without uncontrolled complexity.",
      problemLabel: "Problem / objective",
      problem:
        "The product explores what a real invitation-building system could look like beyond fixed templates: mobile-first editing, reusable blocks, media, RSVP, publishing, and monetization logic.",
      systemLabel: "Product flow",
      decisionsLabel: "Key decisions",
      decisions: [
        "Mobile-first creation",
        "One responsive design system",
        "Bounded customization",
        "Stable versioned publishing",
      ],
      resultLabel: "Result / status",
      result:
        "The project reached the stage of a deployed product prototype. Core editor, publishing, media, RSVP, authentication, customization, and payment/entitlement systems were implemented. No traction or revenue claims are made.",
      lessonsLabel: "What I learned",
      lessons: [
        "Product flexibility creates architectural complexity quickly.",
        "Mobile editing is harder than mobile viewing.",
        "Publishing needs a different mental model from editing.",
      ],
    },
    ru: {
      eyebrow: "Избранный проект / 02",
      headline: "Гибкость без неконтролируемой сложности.",
      problemLabel: "Проблема / задача",
      problem:
        "Проект исследует создание приглашений за пределами фиксированных шаблонов: удобный редактор для телефона, переиспользуемые блоки, медиа, RSVP, публикация и логика платного доступа.",
      systemLabel: "Продуктовый поток",
      decisionsLabel: "Ключевые решения",
      decisions: [
        "Создание с телефона",
        "Единая адаптивная система",
        "Гибкая настройка с понятными границами",
        "Стабильная публикация с управлением версиями",
      ],
      resultLabel: "Результат / статус",
      result:
        "Продуктовый прототип опубликован. Реализованы редактор, публикация, медиа, RSVP, аутентификация, настройка и логика оплаты и прав доступа. Подтвержденные данные о спросе и выручке не заявляются.",
      lessonsLabel: "Что я понял",
      lessons: [
        "Гибкость продукта быстро усложняет архитектуру.",
        "Удобный редактор для телефона создать сложнее, чем страницу для просмотра.",
        "Редактирование и публикация требуют разных подходов к состоянию данных.",
      ],
    },
  },
  "quant-trade-ai": {
    en: {
      eyebrow: "Selected work / 03",
      headline:
        "Exploring autonomous agents for quantitative trading workflows.",
      problemLabel: "Scope / objective",
      problem:
        "This project is still in development. The current portfolio deliberately avoids claiming architecture, profitability, live-capital deployment, or performance that has not been verified.",
      systemLabel: "Conceptual pipeline",
      decisionsLabel: "Working principles",
      decisions: [
        "Evidence before claims",
        "Risk-aware system direction",
        "Separation of analysis and execution",
        "Quantitative evaluation",
      ],
      resultLabel: "Result / status",
      result:
        "In development. No live demo, public repository, returns, or backtest statistics are claimed yet.",
      lessonsLabel: "What I learned",
      lessons: [
        "The implementation and evidence should define the case study, not the project name.",
        "Trading systems require unusually high discipline around validation and risk.",
      ],
    },
    ru: {
      eyebrow: "Избранный проект / 03",
      headline:
        "Исследование автономных агентов для количественных торговых процессов.",
      problemLabel: "Объем / задача",
      problem:
        "Проект находится в разработке. В текущем портфолио намеренно не заявляются архитектура, прибыльность, работа с реальным капиталом или неподтвержденные результаты.",
      systemLabel: "Концептуальный поток",
      decisionsLabel: "Рабочие принципы",
      decisions: [
        "Доказательства важнее заявлений",
        "Риск-ориентированное направление",
        "Разделение анализа и исполнения",
        "Количественная оценка",
      ],
      resultLabel: "Результат / статус",
      result:
        "В разработке. Публичный демо-доступ, репозиторий, доходность и статистика бэктестов пока не заявляются.",
      lessonsLabel: "Что я понял",
      lessons: [
        "Реализация и доказательства должны определять кейс, а не название проекта.",
        "Торговые системы требуют особенно строгой дисциплины валидации и управления риском.",
      ],
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (locale !== "en" && locale !== "ru") notFound();
  const project = projects.find((item) => item.slug === slug && item.featured);
  const detail = details[slug as ProjectSlug]?.[locale];
  if (!project || !detail) notFound();
  return pageMetadata(
    locale,
    `${project.title} — ${locale === "ru" ? "Саид Аманжол" : "Said Amanzhol"}`,
    detail.headline,
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if ((locale !== "en" && locale !== "ru") || !(slug in details)) notFound();
  const currentLocale = locale as Locale;
  const project = projects.find((item) => item.slug === slug);
  const detail = details[slug as ProjectSlug]?.[currentLocale];
  if (!project || !detail) notFound();
  return (
    <>
      <SiteHeader
        locale={currentLocale}
        currentPath={`/projects/${project.slug}`}
      />
      <main id="content" tabIndex={-1} className="case-page">
        <div className="shell case-shell">
          <div className="case-topline">
            <Link prefetch={false} href={localePath(currentLocale, "#work")}>
              ← {currentLocale === "ru" ? "Назад к проектам" : "Back to work"}
            </Link>
            <span>
              {project.year} · {statusLabel[currentLocale][project.status]}
            </span>
          </div>
          <section className="case-hero">
            <div className="eyebrow">{detail.eyebrow}</div>
            <h1 className="display case-title">{project.title}</h1>
            <p className="display case-headline">{detail.headline}</p>
            <div className="case-links">
              {project.live && (
                <a
                  className="linkline"
                  target="_blank"
                  rel="noreferrer"
                  href={project.live}
                >
                  {currentLocale === "ru"
                    ? "Открыть прототип"
                    : "Open prototype"}{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              )}
              {project.github && (
                <a
                  className="linkline"
                  target="_blank"
                  rel="noreferrer"
                  href={project.github}
                >
                  {copy[currentLocale].github} <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </section>
          <section className="case-section">
            <div className="case-grid">
              <h2 className="eyebrow">{detail.problemLabel}</h2>
              <p className="case-large-copy">{detail.problem}</p>
            </div>
          </section>
          <section className="case-section">
            <h2 className="eyebrow case-section-label">{detail.systemLabel}</h2>
            <ProjectVisual slug={project.slug} locale={currentLocale} compact />
          </section>
          <section className="case-section">
            <div className="case-grid">
              <h2 className="eyebrow">{detail.decisionsLabel}</h2>
              <div className="case-records">
                {detail.decisions.map((decision, index) => (
                  <div key={decision} className="case-record">
                    <span className="eyebrow">0{index + 1}</span>
                    <span>{decision}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="case-section">
            <div className="case-grid">
              <h2 className="eyebrow">{detail.resultLabel}</h2>
              <p className="case-large-copy">{detail.result}</p>
            </div>
          </section>
          <section className="case-section">
            <div className="case-grid">
              <h2 className="eyebrow">{detail.lessonsLabel}</h2>
              <div className="case-records">
                {detail.lessons.map((lesson) => (
                  <p key={lesson} className="case-record case-lesson">
                    {lesson}
                  </p>
                ))}
              </div>
            </div>
          </section>
          <div className="case-bottom">
            <Link
              prefetch={false}
              className="linkline"
              href={localePath(currentLocale, "#work")}
            >
              ← {currentLocale === "ru" ? "Все проекты" : "All work"}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
