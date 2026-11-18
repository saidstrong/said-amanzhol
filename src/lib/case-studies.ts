import type { FeaturedProjectSlug, Locale } from "@/lib/content";

type ProjectDetail = {
  headline: string;
  contribution: string;
  decision: string;
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

export const caseDecisionSources: Partial<Record<FeaturedProjectSlug, string>> = {
  "nu-atrium": "https://github.com/saidstrong/NU-Hub/commit/3cf1c2c53b8883102111f989b314a57b17311342",
  "invitation-platform": "https://github.com/saidstrong/wedding/commit/c36b29ae76cfcd46b4ed443c4183cd1895de4c94",
};

export const caseStudies: Record<FeaturedProjectSlug, Record<Locale, ProjectDetail>> = {
  "nu-atrium": {
    en: {
      headline: "One place for campus events, communities, and opportunities.",
      contribution: "I built marketplace posting and editing flows, including shared fields for rentals and services.",
      decision: "I limited listing edits and removal to the owner, with ownership checked on the server.",
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
      contribution: "Я разработал формы создания и редактирования объявлений, включая общие поля для аренды и услуг.",
      decision: "Редактировать и удалять объявление может его владелец. Право на изменение проверяется на сервере.",
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
      headline: "Shareable wedding invitations with a built-in RSVP flow.",
      contribution: "I built the invitation pages, RSVP form, and guest-response dashboard.",
      decision: "I reused one page component across invitations, with separate content and response lists for each event.",
      problemLabel: "The problem",
      problem:
        "Guests need the event details and an easy way to reply from their phones. Organizers need one place to review those replies for their event.",
      systemLabel: "Invitation and RSVP",
      decisionsLabel: "Key decisions",
      decisions: [
        "Responsive invitation page",
        "Venue directions on the invitation page",
        "Attendance and guest-count choices in the RSVP form",
        "Sign-in for the guest-response dashboard",
      ],
      resultLabel: "Outcome",
      result:
        "The deployed prototype includes shareable invitation pages, an RSVP form, and a dashboard where organizers can review replies.",
      lessonsLabel: "Implementation notes",
      lessons: [
        "Each route has its own invitation title and description for sharing.",
        "An organizer’s dashboard session is scoped to a specific invitation.",
      ],
    },
    ru: {
      headline: "Свадебные приглашения с формой ответа для гостей.",
      contribution: "Я разработал страницы приглашений, форму ответа и панель для просмотра ответов гостей.",
      decision: "Для приглашений я использовал общий компонент страницы. У каждого события свои данные и отдельный список ответов.",
      problemLabel: "Задача",
      problem:
        "Гостям нужно узнать детали события и ответить с телефона. Организаторам нужно видеть ответы по своему событию в одном месте.",
      systemLabel: "Приглашение и ответы гостей",
      decisionsLabel: "Ключевые решения",
      decisions: [
        "Адаптивная страница приглашения",
        "Ссылка на маршрут до места проведения",
        "Выбор ответа и числа гостей в форме RSVP",
        "Вход в панель для просмотра ответов гостей",
      ],
      resultLabel: "Результат",
      result:
        "В опубликованном прототипе есть страницы приглашений, которыми можно делиться, форма ответа и панель для просмотра ответов гостей.",
      lessonsLabel: "Детали реализации",
      lessons: [
        "У каждой ссылки на приглашение свои заголовок и описание.",
        "Сессия организатора в панели привязана к конкретному приглашению.",
      ],
    },
  },
  "quant-trade-ai": {
    en: {
      headline:
        "Researching how AI agents could support quantitative trading.",
      contribution: "The research focuses on market analysis, strategy reasoning, and risk assessment.",
      decision: "In the proposed workflow, risk checks sit between the agent’s proposal and execution.",
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
      contribution: "Исследование посвящено анализу рынка, выбору стратегии и оценке рисков.",
      decision: "В концептуальной схеме проверка рисков следует после предложения агента и перед исполнением сделки.",
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
