import type { Locale, ProjectSlug } from "@/lib/content";

export const contact = {
  email: "said.amanzhol@nu.edu.kz",
  profiles: [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/said-amanzhol-83038b315" },
    { name: "GitHub", href: "https://github.com/saidstrong" },
    { name: "Telegram", href: "https://t.me/sherlockzini" },
    { name: "Instagram", href: "https://www.instagram.com/sherlockzini/" },
  ],
};

type ResumeData = {
  summary: string;
  projects: { slug: ProjectSlug; contribution: string }[];
  experience: [date: string, role: string, details: string][];
  milestones: [title: string, details: string][];
  education: [date: string, school: string, degree: string][];
  skills: [label: string, tools: string][];
};

const languages = "TypeScript, SQL";
const webStack = "React, Next.js, Tailwind CSS, Supabase (PostgreSQL)";
const tools = "Git, Vitest, Playwright, ExcelJS";

// The web CV and portfolio share the same experience, education, and leadership history.
export const resume = {
  en: {
    summary:
      "Economics student at Nazarbayev University building full-stack applications for campus communities, events, and operations.",
    projects: [
      {
        slug: "nu-atrium",
        contribution:
          "Built marketplace posting and editing for campus listings, with shared fields for rentals and services and server-side ownership checks for edits and deletions.",
      },
      {
        slug: "invitation-platform",
        contribution:
          "Built shareable wedding invitations and an RSVP dashboard. Reused one page component while keeping each event’s content and replies separate.",
      },
      {
        slug: "hawaii-miami",
        contribution:
          "Implemented daily stock requests and Excel exports for versioned inventory reports.",
      },
    ],
    experience: [
      [
        "2026 — Present",
        "CTO / Technical Lead, SapaSpeakers L.V.O.",
        "Built a Next.js and Supabase platform for application review, event registration, attendance, and volunteer-hour tracking.",
      ],
      [
        "2024 — Present",
        "Independent Product Developer",
        "Develop and deploy full-stack applications, from responsive interfaces to data models and server-side workflows.",
      ],
    ],
    milestones: [
      [
        "Digital Bridge 2026 — Team Lead",
        "Selected as one of three team leads with an assigned group of approximately 50–70 volunteers.",
      ],
    ],
    education: [
      ["2026 — Present", "Nazarbayev University", "B.A. in Economics, Graduate School of Business"],
      ["2025 — 2026", "Nazarbayev University", "Foundation Year Program (NUFYP)"],
      ["2025", "National School of Physics & Mathematics", "High School Diploma"],
    ],
    skills: [
      ["Languages", languages],
      ["Web and data", webStack],
      ["Tools", tools],
    ],
  },
  ru: {
    summary:
      "Студент экономической программы Назарбаев Университета. Разрабатываю веб-приложения для студенческих сообществ, мероприятий и операционных задач.",
    projects: [
      {
        slug: "nu-atrium",
        contribution:
          "Разработал создание и редактирование объявлений для кампуса: общие поля для аренды и услуг и серверную проверку прав при изменении и удалении.",
      },
      {
        slug: "invitation-platform",
        contribution:
          "Разработал страницы свадебных приглашений, форму RSVP и панель ответов. Приглашения используют общий компонент, а данные и ответы хранятся отдельно для каждого события.",
      },
      {
        slug: "hawaii-miami",
        contribution:
          "Разработал ежедневные заявки на запасы и экспорт версий инвентаризационных отчётов в Excel.",
      },
    ],
    experience: [
      [
        "С 2026",
        "CTO / Технический руководитель, SapaSpeakers L.V.O.",
        "Разработал на Next.js и Supabase платформу для рассмотрения заявок, регистрации на мероприятия, учёта посещаемости и волонтёрских часов.",
      ],
      [
        "С 2024",
        "Независимый разработчик продуктов",
        "Разрабатываю и публикую полнофункциональные веб-приложения: адаптивные интерфейсы, модели данных и серверную логику.",
      ],
    ],
    milestones: [
      [
        "Digital Bridge 2026 — Руководитель команды",
        "Выбран одним из трёх руководителей команд с зоной ответственности около 50–70 волонтёров.",
      ],
    ],
    education: [
      ["С 2026", "Назарбаев Университет", "Бакалавриат по экономике, Высшая школа бизнеса"],
      ["2025 — 2026", "Назарбаев Университет", "Подготовительная программа NUFYP"],
      ["2025", "Республиканская физико-математическая школа", "Среднее образование"],
    ],
    skills: [
      ["Языки", languages],
      ["Веб и данные", webStack],
      ["Инструменты", tools],
    ],
  },
} satisfies Record<Locale, ResumeData>;
