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
      headline: "One place for campus events, communities, and opportunities.",
      problemLabel: "The problem",
      problem:
        "Campus information, communities, listings, opportunities, events, and communication are fragmented across chats, social platforms, spreadsheets, and informal channels.",
      systemLabel: "System design",
      decisionsLabel: "Key decisions",
      decisions: [
        "Unified identity across modules",
        "Shared information architecture",
        "Role and permission boundaries",
        "Reusable product patterns",
      ],
      resultLabel: "Outcome",
      result:
        "The full-stack prototype is deployed. This case covers design and implementation through the prototype release, before a student launch.",
      lessonsLabel: "What I learned",
      lessons: [
        "Every campus module adds to the shared design and permissions work.",
        "Decide on the shared data model before adding more modules.",
        "A working prototype makes it possible to test whether students need the product.",
      ],
    },
    ru: {
      headline: "События, сообщества и возможности кампуса в одном месте.",
      problemLabel: "Задача",
      problem:
        "Информация кампуса, сообщества, объявления, возможности, события и коммуникация распределены между чатами, социальными сетями, таблицами и неформальными каналами.",
      systemLabel: "Устройство платформы",
      decisionsLabel: "Ключевые решения",
      decisions: [
        "Один профиль для всех разделов",
        "Общая информационная архитектура",
        "Разделение ролей и прав доступа",
        "Переиспользуемые продуктовые решения",
      ],
      resultLabel: "Результат",
      result:
        "Полнофункциональный прототип опубликован. Кейс охватывает проектирование, разработку и публикацию прототипа до возможного запуска для студентов.",
      lessonsLabel: "Что я понял",
      lessons: [
        "Каждый новый раздел добавляет работу над общей архитектурой и правами доступа.",
        "Общую модель данных стоит определить до добавления новых разделов.",
        "Рабочий прототип позволяет проверить, нужен ли продукт студентам.",
      ],
    },
  },
  "invitation-platform": {
    en: {
      headline: "An invitation builder designed for phones.",
      problemLabel: "The problem",
      problem:
        "The product explores what a real invitation-building system could look like beyond fixed templates: mobile-first editing, reusable blocks, media, RSVP, publishing, and monetization logic.",
      systemLabel: "From editing to RSVP",
      decisionsLabel: "Key decisions",
      decisions: [
        "Mobile-first creation",
        "One responsive design system",
        "Bounded customization",
        "Stable versioned publishing",
      ],
      resultLabel: "Outcome",
      result:
        "The deployed prototype includes the editor, media, guest RSVPs, publishing, sign-in, customization, and payments with paid access.",
      lessonsLabel: "What I learned",
      lessons: [
        "Product flexibility creates architectural complexity quickly.",
        "Mobile editing is harder than mobile viewing.",
        "Publishing needs a different mental model from editing.",
      ],
    },
    ru: {
      headline: "Конструктор приглашений для телефона.",
      problemLabel: "Задача",
      problem:
        "Проект исследует создание приглашений за пределами фиксированных шаблонов: удобный редактор для телефона, переиспользуемые блоки, медиа, RSVP, публикация и логика платного доступа.",
      systemLabel: "От редактора до RSVP",
      decisionsLabel: "Ключевые решения",
      decisions: [
        "Создание с телефона",
        "Единая адаптивная система",
        "Гибкая настройка с понятными границами",
        "Стабильная публикация с управлением версиями",
      ],
      resultLabel: "Результат",
      result:
        "В опубликованном прототипе работают редактор, медиа, ответы гостей, публикация, вход в аккаунт, настройки, оплата и платный доступ.",
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
        "Researching how AI agents could support quantitative trading.",
      problemLabel: "Research scope",
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
      resultLabel: "Status",
      result:
        "The project is in development. This case documents the research direction and evaluation principles.",
      lessonsLabel: "What I learned",
      lessons: [
        "Base the case study on the implementation and available evidence.",
        "Trading systems require unusually high discipline around validation and risk.",
      ],
    },
    ru: {
      headline:
        "Исследование применения ИИ-агентов в количественном трейдинге.",
      problemLabel: "Цель исследования",
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
      resultLabel: "Статус",
      result:
        "Проект в разработке. Здесь описаны направление исследования и принципы оценки.",
      lessonsLabel: "Что я понял",
      lessons: [
        "Кейс должен опираться на реализацию и доступные доказательства.",
        "Торговые системы требуют особенно строгой дисциплины валидации и управления риском.",
      ],
    },
  },
};
