export type Locale = "en" | "ru";
export type FeaturedProjectSlug =
  | "nu-atrium"
  | "invitation-platform"
  | "quant-trade-ai";

type OtherProjectSlug =
  | "overhead-club"
  | "hawaii-miami"
  | "xy-school"
  | "volunteer-platform";

export type ProjectSlug = FeaturedProjectSlug | OtherProjectSlug;

type ProjectDetails = {
  title: string;
  year: string;
  category: string;
  status: "prototype" | "deployed" | "development";
  live?: string;
  github?: string;
};

export type FeaturedProject = ProjectDetails & {
  slug: FeaturedProjectSlug;
  featured: true;
};

export type Project = FeaturedProject | (ProjectDetails & {
  slug: OtherProjectSlug;
  featured: false;
});

export const projects: Project[] = [
  {
    slug: "nu-atrium",
    title: "NU Atrium",
    year: "2026",
    category: "Campus Platform · Community",
    status: "prototype",
    live: "https://nu-atrium.vercel.app",
    github: "https://github.com/saidstrong/NU-Hub",
    featured: true,
  },
  {
    slug: "invitation-platform",
    title: "Invitation Platform",
    year: "2026",
    category: "Event Invitations · RSVP",
    status: "prototype",
    live: "https://shaqyru.website",
    github: "https://github.com/saidstrong/wedding",
    featured: true,
  },
  {
    slug: "quant-trade-ai",
    title: "Quant-Trade AI Agent",
    year: "2026",
    category: "AI · Quantitative Finance",
    status: "development",
    featured: true,
  },
  {
    slug: "overhead-club",
    title: "Overhead Club",
    year: "2026",
    category: "Live Music · Interactive Web",
    status: "deployed",
    live: "https://tap2link.vercel.app/",
    github: "https://github.com/saidstrong/OverHead",
    featured: false,
  },
  {
    slug: "hawaii-miami",
    title: "Hawaii–Miami Inventory System",
    year: "2026",
    category: "Hospitality · Inventory",
    status: "deployed",
    live: "https://hawaii-miami.vercel.app/",
    github: "https://github.com/saidstrong/hawaii-miami",
    featured: false,
  },
  {
    slug: "xy-school",
    title: "XY-School",
    year: "2026",
    category: "Education · AI Assistant",
    status: "deployed",
    live: "https://xy-school.vercel.app/",
    github: "https://github.com/saidstrong/ent-platform",
    featured: false,
  },
  {
    slug: "volunteer-platform",
    title: "Volunteer Platform",
    year: "2026",
    category: "Volunteering · Event Operations",
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
  "nu-atrium": "Кампус · Студенческие сообщества",
  "invitation-platform": "Приглашения · RSVP",
  "quant-trade-ai": "ИИ · Количественные финансы",
  "overhead-club": "Живая музыка · Интерактивный сайт",
  "hawaii-miami": "Рестораны · Учёт запасов",
  "xy-school": "Образование · ИИ-помощник",
  "volunteer-platform": "Волонтёрство · Мероприятия",
};

export function projectCategory(project: Project, locale: Locale) {
  return locale === "ru" ? russianCategories[project.slug] : project.category;
}

export const localePath = (locale: Locale, path = "") => `/${locale}${path}`;

export const copy = {
  en: {
    nav: {
      work: "Work",
      cv: "CV",
      contact: "Contact",
    },
    name: ["Said", "Amanzhol"],
    heroSub:
      "I study economics at Nazarbayev University and build full-stack software for campus life, events, and operations.",
    viewWork: "View work",
    viewCV: "View CV",
    selectedWork: "Selected work",
    moreWork: "More work",
    milestones: "Selected milestones",
    experience: "Experience",
    about: "About",
    education: "Education",
    contact: "Say hello.",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
    close: "Close",
    navigation: "Primary navigation",
    homeLabel: "Said Amanzhol — home",
    switchLanguage: "Switch to Russian",
    skipContent: "Skip to content",
    portraitAlt: "Said Amanzhol in a burgundy and blue academic robe",
    live: "Live",
    github: "GitHub",
    caseStudy: "Case study",
    concept: "Concept / system direction",
    location: "Astana, Kazakhstan",
    aboutBody:
      "I like starting with a problem I can see up close. At SapaSpeakers, that meant building software for event registration, attendance, volunteer hours, and certificates. In my independent projects, I take the same approach to campus services and everyday operations.",
    featured: {
      "nu-atrium":
        "A campus platform for Nazarbayev University students to find events and RSVP, browse listings, and join student groups.",
      "invitation-platform":
        "A shareable wedding invitation guests can open on their phones, with an RSVP form and a dashboard for the organizer.",
      "quant-trade-ai":
        "Research into how an AI trading agent could analyze markets, evaluate strategies, and check risk before execution.",
    },
    secondary: {
      "overhead-club":
        "A bar website with a scroll-driven cocktail scene, an interactive menu, and live music listings.",
      "hawaii-miami":
        "An internal app for daily stock requests, distribution, and inventory counts across bars, kitchens, and restaurants.",
      "xy-school":
        "A prep platform for Kazakhstan’s university entrance exam, with lessons, homework submissions, and an AI assistant that can cite course materials.",
      "volunteer-platform":
        "A SapaSpeakers platform for volunteer applications, event registration, attendance tracking, and certificate issuance.",
    },
  },
  ru: {
    nav: {
      work: "Проекты",
      cv: "CV",
      contact: "Контакты",
    },
    name: ["Саид", "Аманжол"],
    heroSub:
      "Я изучаю экономику в Назарбаев Университете и разрабатываю веб-приложения для жизни кампуса, мероприятий и работы команд.",
    viewWork: "Смотреть проекты",
    viewCV: "Открыть CV",
    selectedWork: "Избранные проекты",
    moreWork: "Другие проекты",
    milestones: "Ключевые этапы",
    experience: "Опыт",
    about: "Обо мне",
    education: "Образование",
    contact: "Напишите мне.",
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
    live: "Сайт",
    github: "GitHub",
    caseStudy: "Кейс",
    concept: "Концепция / направление системы",
    location: "Астана, Казахстан",
    aboutBody:
      "Я начинаю с задач, которые вижу вокруг. В SapaSpeakers я разработал систему регистрации на мероприятия, учёта посещаемости и волонтёрских часов, а также выдачи сертификатов. В самостоятельных проектах я применяю тот же подход к задачам кампуса и повседневной работы команд.",
    featured: {
      "nu-atrium":
        "Платформа для студентов Назарбаев Университета. Здесь можно найти мероприятия и отметить участие, посмотреть объявления и вступить в студенческие сообщества.",
      "invitation-platform":
        "Гости открывают свадебное приглашение по ссылке на телефоне и отмечают, смогут ли прийти. Организатор видит ответы в отдельной панели.",
      "quant-trade-ai":
        "Исследование роли ИИ-агента в анализе рынка, оценке стратегий и контроле рисков перед исполнением сделок.",
    },
    secondary: {
      "overhead-club":
        "Сайт бара с анимацией приготовления коктейля при прокрутке, интерактивным меню и афишей живой музыки.",
      "hawaii-miami":
        "Внутреннее приложение для ежедневных заявок на пополнение запасов, распределения и ревизий в барах, кухнях и ресторанах.",
      "xy-school":
        "Платформа подготовки к ЕНТ с уроками, отправкой домашних заданий и ИИ-помощником, который ссылается на материалы курса.",
      "volunteer-platform":
        "Платформа SapaSpeakers для приёма заявок от волонтёров, регистрации на мероприятия, учёта посещаемости и выдачи сертификатов.",
    },
  },
} as const;
