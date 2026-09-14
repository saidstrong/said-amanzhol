export type Locale = "en" | "ru";
export type ProjectSlug =
  | "nu-atrium"
  | "invitation-platform"
  | "quant-trade-ai"
  | "overhead-club"
  | "hawaii-miami"
  | "xy-school"
  | "volunteer-platform";

export type Project = {
  slug: ProjectSlug;
  title: string;
  year: string;
  category: string;
  status: "prototype" | "deployed" | "development";
  live?: string;
  github?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "nu-atrium",
    title: "NU Atrium",
    year: "2026",
    category: "Product · Design · Engineering",
    status: "prototype",
    live: "https://nu-atrium.vercel.app",
    github: "https://github.com/saidstrong/NU-Hub",
    featured: true,
  },
  {
    slug: "invitation-platform",
    title: "Invitation Platform",
    year: "2026",
    category: "Product System · UX · Engineering",
    status: "prototype",
    live: "https://shaqyru.website",
    github: "https://github.com/saidstrong/wedding",
    featured: true,
  },
  {
    slug: "quant-trade-ai",
    title: "Quant-Trade AI Agent",
    year: "2026",
    category: "AI · Quantitative Finance · Engineering",
    status: "development",
    featured: true,
  },
  {
    slug: "overhead-club",
    title: "Overhead Club",
    year: "2026",
    category: "Web Experience · Motion · Product",
    status: "deployed",
    live: "https://tap2link.vercel.app/",
    github: "https://github.com/saidstrong/OverHead",
    featured: false,
  },
  {
    slug: "hawaii-miami",
    title: "Hawaii–Miami Inventory System",
    year: "2026",
    category: "Operations · Inventory · Full-Stack",
    status: "deployed",
    live: "https://hawaii-miami.vercel.app/",
    github: "https://github.com/saidstrong/hawaii-miami",
    featured: false,
  },
  {
    slug: "xy-school",
    title: "XY-School",
    year: "2026",
    category: "EdTech · AI · Full-Stack",
    status: "deployed",
    live: "https://xy-school.vercel.app/",
    github: "https://github.com/saidstrong/ent-platform",
    featured: false,
  },
  {
    slug: "volunteer-platform",
    title: "Volunteer Platform",
    year: "2026",
    category: "Operations · Community · Product",
    status: "deployed",
    live: "https://sapa-speakers.vercel.app/",
    github: "https://github.com/saidstrong/sapa-speakers",
    featured: false,
  },
];

export const statusLabel: Record<Locale, Record<Project["status"], string>> = {
  en: {
    prototype: "Deployed prototype",
    deployed: "Deployed",
    development: "In development",
  },
  ru: {
    prototype: "Прототип опубликован",
    deployed: "Опубликован",
    development: "В разработке",
  },
};

const russianCategories: Record<ProjectSlug, string> = {
  "nu-atrium": "Продукт · Дизайн · Разработка",
  "invitation-platform": "Продуктовая система · UX · Разработка",
  "quant-trade-ai": "AI · Количественные финансы · Разработка",
  "overhead-club": "Веб · Анимация · Продукт",
  "hawaii-miami": "Операции · Учет запасов · Full-stack",
  "xy-school": "Образование · AI · Full-stack",
  "volunteer-platform": "Операции · Сообщество · Продукт",
};

export function projectCategory(project: Project, locale: Locale) {
  return locale === "ru" ? russianCategories[project.slug] : project.category;
}

export const localePath = (locale: Locale, path = "") => `/${locale}${path}`;

export const copy = {
  en: {
    nav: {
      work: "Work",
      milestones: "Milestones",
      cv: "CV",
      contact: "Contact",
    },
    heroEyebrow: "Technology · Economics · Strategy",
    heroStatement:
      "Building products at the intersection of technology, economics, and strategy.",
    heroSub:
      "Economics student at Nazarbayev University, building products across technology, markets, and digital systems.",
    viewWork: "View work",
    viewCV: "View CV",
    selectedWork: "Selected work",
    selectedNote: "Three systems. Three different product questions.",
    moreNote: "Further work in education, hospitality, and operations.",
    moreWork: "More work",
    milestones: "Selected milestones",
    experience: "Experience",
    about: "About",
    education: "Education",
    contact: "Let’s connect.",
    scroll: "Scroll to explore",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
    close: "Close",
    navigation: "Primary navigation",
    homeLabel: "Said Amanzhol — home",
    switchLanguage: "Switch to Russian",
    skipContent: "Skip to content",
    portraitAlt: "Said Amanzhol in a burgundy and blue academic robe",
    email: "Email",
    live: "Live",
    github: "GitHub",
    caseStudy: "Case study",
    concept: "Concept / system direction",
    footerLocation: "Astana, Kazakhstan · 2026",
    aboutBody:
      "I study economics and build software. My projects sit between product development, operational problems, markets, and emerging technologies.",
    featured: {
      "nu-atrium":
        "A full-stack campus platform designed for the Nazarbayev University community, bringing communities, marketplace, events, jobs, messaging, and student activity into one system.",
      "invitation-platform":
        "A mobile-first event invitation builder with deep customization, reusable blocks, publishing, RSVP, media, and payment-gated access.",
      "quant-trade-ai":
        "An experimental autonomous trading-agent project exploring AI-driven market analysis, strategy reasoning, risk-aware execution, and quantitative evaluation.",
    },
    secondary: {
      "overhead-club":
        "Premium bar web experience built around cinematic motion, nightlife atmosphere, events, and cocktail-inspired interactions.",
      "hawaii-miami":
        "Internal operations system designed to replace fragmented inventory and request workflows across bars, kitchens, restaurants, and warehouse operations.",
      "xy-school":
        "Online education platform with an AI tutor that answers student questions and generates exercises and explanations.",
      "volunteer-platform":
        "Digital system for volunteer coordination and organizational workflows.",
    },
  },
  ru: {
    nav: {
      work: "Проекты",
      milestones: "Этапы",
      cv: "CV",
      contact: "Контакты",
    },
    heroEyebrow: "Технологии · Экономика · Стратегия",
    heroStatement:
      "Создаю продукты на пересечении технологий, экономики и стратегии.",
    heroSub:
      "Студент экономики Назарбаев Университета. Создаю цифровые продукты на стыке технологий, рынков и прикладных систем.",
    viewWork: "Смотреть проекты",
    viewCV: "Открыть CV",
    selectedWork: "Избранные проекты",
    selectedNote: "Три системы. Три разные продуктовые задачи.",
    moreNote:
      "Другие работы в образовании, гостеприимстве и операционных процессах.",
    moreWork: "Другие проекты",
    milestones: "Ключевые этапы",
    experience: "Опыт",
    about: "Обо мне",
    education: "Образование",
    contact: "Связаться со мной.",
    scroll: "Листать дальше",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    menu: "Меню",
    close: "Закрыть",
    navigation: "Основная навигация",
    homeLabel: "Саид Аманжол — главная",
    switchLanguage: "Переключить на английский",
    skipContent: "Перейти к содержимому",
    portraitAlt:
      "Саид Аманжол в синей академической мантии с бордовыми деталями",
    email: "Почта",
    live: "Сайт",
    github: "GitHub",
    caseStudy: "Кейс",
    concept: "Концепция / направление системы",
    footerLocation: "Астана, Казахстан · 2026",
    aboutBody:
      "Я изучаю экономику и создаю программные продукты. Большинство моих проектов находятся на пересечении продуктовой разработки, операционных задач, рынков и новых технологий.",
    featured: {
      "nu-atrium":
        "Полноценная кампус-платформа для сообщества Назарбаев Университета: сообщества, маркетплейс, события, вакансии, сообщения и студенческая активность в одной системе.",
      "invitation-platform":
        "Платформа для создания приглашений с телефона: гибкая настройка, переиспользуемые блоки, медиа, публикация, RSVP и управление платным доступом.",
      "quant-trade-ai":
        "Экспериментальный автономный торговый AI-агент: исследование анализа рынка, принятия стратегических решений, исполнения с учетом рисков и количественной оценки.",
    },
    secondary: {
      "overhead-club":
        "Сайт бара с кинематографичной анимацией, афишей событий и интерактивными элементами, вдохновленными коктейльной культурой.",
      "hawaii-miami":
        "Внутренняя операционная система для замены фрагментированных процессов заявок и учета запасов в барах, кухнях, ресторанах и на складе.",
      "xy-school":
        "Онлайн-платформа обучения с AI-тьютором, который отвечает на вопросы студентов и генерирует упражнения и объяснения.",
      "volunteer-platform":
        "Цифровая система для координации волонтеров и организационных процессов.",
    },
  },
} as const;

export type Copy = (typeof copy)[Locale];
