import type { Locale } from "@/lib/content";

// Shared by the portfolio and CV so dates and translations stay consistent.
export const resume = {
  en: {
    experience: [
      ["2026 — Present", "CTO / Technical Lead", "SapaSpeakers L.V.O."],
      [
        "2024 — Present",
        "Independent Product Developer",
        "Building full-stack products across education, community, operations, and AI.",
      ],
      [
        "2026 — Present",
        "Volunteer & Event Operations",
        "NU · Astana Hub · SapaSpeakers",
      ],
    ],
    milestones: [
      [
        "Digital Bridge 2026 — Team Lead",
        "Selected as one of three Team Leads and responsible for approximately 50–70 volunteers within a broader team of 150–200 people.",
      ],
      [
        "SapaSpeakers — CTO / Technical Lead",
        "Technical direction, internal digital systems, operational improvement, and technology strategy.",
      ],
    ],
    education: [
      ["2026 — Present", "Nazarbayev University", "B.A. Economics"],
      ["2025 — 2026", "Nazarbayev University", "NUFYP"],
      [
        "2025",
        "National School of Physics & Mathematics",
        "High School Diploma",
      ],
    ],
    skills: [
      "Product development",
      "Full-stack development",
      "Project management",
      "Data analysis",
      "Research",
      "Strategic planning",
      "AI tools",
      "Public communication",
    ],
  },
  ru: {
    experience: [
      ["С 2026", "CTO / Технический руководитель", "SapaSpeakers L.V.O."],
      [
        "С 2024",
        "Независимый разработчик продуктов",
        "Разработка цифровых продуктов для образования, сообществ, операционных задач и AI.",
      ],
      [
        "С 2026",
        "Волонтерство и организация мероприятий",
        "NU · Astana Hub · SapaSpeakers",
      ],
    ],
    milestones: [
      [
        "Digital Bridge 2026 — Руководитель команды",
        "Выбран одним из трех руководителей команд. Зона ответственности — около 50–70 волонтеров в общей команде из 150–200 человек.",
      ],
      [
        "SapaSpeakers — CTO / Технический руководитель",
        "Техническое руководство, внутренние цифровые системы, улучшение операционных процессов и технологическая стратегия.",
      ],
    ],
    education: [
      ["С 2026", "Назарбаев Университет", "Бакалавриат по экономике"],
      [
        "2025 — 2026",
        "Назарбаев Университет",
        "Подготовительная программа NUFYP",
      ],
      [
        "2025",
        "Республиканская физико-математическая школа",
        "Среднее образование",
      ],
    ],
    skills: [
      "Разработка продуктов",
      "Full-stack разработка",
      "Управление проектами",
      "Анализ данных",
      "Исследования",
      "Стратегическое планирование",
      "AI-инструменты",
      "Публичная коммуникация",
    ],
  },
} satisfies Record<
  Locale,
  {
    experience: string[][];
    milestones: string[][];
    education: string[][];
    skills: string[];
  }
>;
