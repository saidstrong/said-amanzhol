import type { FeaturedProjectSlug, Locale } from "@/lib/content";

type ProjectDetail = {
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

export const caseStudies: Record<FeaturedProjectSlug, Record<Locale, ProjectDetail>> = {
  "nu-atrium": {
    en: {
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
      headline:
        "Exploring autonomous agents for quantitative trading workflows.",
      problemLabel: "Scope / objective",
      problem:
        "The project explores how AI agents could support market analysis, strategy reasoning, and risk assessment. The diagram presents the research direction.",
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
        "Base the case study on the implementation and available evidence.",
        "Trading systems require unusually high discipline around validation and risk.",
      ],
    },
    ru: {
      headline:
        "Исследование автономных агентов для количественных торговых процессов.",
      problemLabel: "Объем / задача",
      problem:
        "Проект исследует, как AI-агенты могут помочь с анализом рынка, разработкой стратегий и оценкой рисков. Схема отражает направление исследования.",
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
        "Кейс должен опираться на реализацию и доступные доказательства.",
        "Торговые системы требуют особенно строгой дисциплины валидации и управления риском.",
      ],
    },
  },
};
