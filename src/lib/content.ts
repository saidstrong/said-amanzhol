export type Locale = "en" | "ru";

export const projects = [
  { slug: "nu-atrium", title: "NU Atrium", year: "2026", category: "Product · Design · Engineering", status: "Deployed prototype", live: "https://nu-atrium.vercel.app", github: "https://github.com/saidstrong/NU-Hub", featured: true },
  { slug: "invitation-platform", title: "Invitation Platform", year: "2026", category: "Product System · UX · Engineering", status: "Deployed prototype", live: "https://shaqyru.website", github: "https://github.com/saidstrong/wedding", featured: true },
  { slug: "quant-trade-ai", title: "Quant-Trade AI Agent", year: "2026", category: "AI · Quantitative Finance · Engineering", status: "In development", featured: true },
  { slug: "overhead-club", title: "Overhead Club", year: "2026", category: "Web Experience · Motion · Product", live: "https://tap2link.vercel.app/", github: "https://github.com/saidstrong/OverHead", featured: false },
  { slug: "hawaii-miami", title: "Hawaii–Miami Inventory System", year: "2026", category: "Operations · Inventory · Full-Stack", live: "https://hawaii-miami.vercel.app/", github: "https://github.com/saidstrong/hawaii-miami", featured: false },
  { slug: "xy-school", title: "XY-School", year: "2026", category: "EdTech · AI · Full-Stack", live: "https://xy-school.vercel.app/", github: "https://github.com/saidstrong/ent-platform", featured: false },
  { slug: "volunteer-platform", title: "Volunteer Platform", year: "2026", category: "Operations · Community · Product", live: "https://sapa-speakers.vercel.app/", github: "https://github.com/saidstrong/sapa-speakers", featured: false }
] as const;

export const copy = {
  en: {
    nav: ["Work", "Milestones", "CV", "Contact"],
    heroEyebrow: "Technology · Economics · Strategy",
    heroTitle: "SAID AMANZHOL",
    heroStatement: "Building products at the intersection of technology, economics, and strategy.",
    heroSub: "Economics student at Nazarbayev University, building products across technology, markets, and digital systems.",
    viewWork: "View Work",
    viewCV: "View CV",
    selectedWork: "Selected Work",
    moreWork: "More Work",
    milestones: "Selected Milestones",
    experience: "Experience",
    about: "About",
    education: "Education",
    contact: "Let's connect.",
    aboutBody: "I study economics and build software. My projects tend to sit between product development, operational problems, markets, and emerging technologies.",
    featured: {
      "nu-atrium": "A full-stack campus platform designed for the Nazarbayev University community, bringing communities, marketplace, events, jobs, messaging, and student activity into one system.",
      "invitation-platform": "A mobile-first event invitation builder with deep customization, reusable blocks, publishing, RSVP, media, and payment-gated access.",
      "quant-trade-ai": "An experimental autonomous trading-agent project exploring AI-driven market analysis, strategy reasoning, risk-aware execution, and quantitative evaluation."
    },
    secondary: {
      "overhead-club": "Premium bar web experience built around cinematic motion, nightlife atmosphere, events, and cocktail-inspired interactions.",
      "hawaii-miami": "Internal operations system designed to replace fragmented inventory and request workflows across bars, kitchens, restaurants, and warehouse operations.",
      "xy-school": "Online education platform with an AI tutor that answers student questions and generates exercises and explanations.",
      "volunteer-platform": "Digital system for volunteer coordination and organizational workflows."
    }
  },
  ru: {
    nav: ["Проекты", "Этапы", "CV", "Контакты"],
    heroEyebrow: "Технологии · Экономика · Стратегия",
    heroTitle: "SAID AMANZHOL",
    heroStatement: "Создаю продукты на пересечении технологий, экономики и стратегии.",
    heroSub: "Студент экономики Назарбаев Университета. Создаю цифровые продукты на стыке технологий, рынков и прикладных систем.",
    viewWork: "Смотреть проекты",
    viewCV: "Открыть CV",
    selectedWork: "Избранные проекты",
    moreWork: "Другие проекты",
    milestones: "Ключевые этапы",
    experience: "Опыт",
    about: "Обо мне",
    education: "Образование",
    contact: "Связаться со мной.",
    aboutBody: "Я изучаю экономику и создаю программные продукты. Большинство моих проектов находятся на пересечении продуктовой разработки, операционных задач, рынков и новых технологий.",
    featured: {
      "nu-atrium": "Полноценная кампус-платформа для сообщества Назарбаев Университета: сообщества, маркетплейс, события, вакансии, сообщения и студенческая активность в одной системе.",
      "invitation-platform": "Mobile-first платформа для создания приглашений с глубокой кастомизацией, блоками, публикацией, RSVP, медиа и платным доступом к публикации.",
      "quant-trade-ai": "Экспериментальный автономный торговый AI-агент для исследования анализа рынка, стратегического рассуждения, риск-контроля и количественной оценки."
    },
    secondary: {
      "overhead-club": "Премиальный сайт бара с кинематографичной анимацией, атмосферой ночной жизни, событиями и интерактивными cocktail-inspired элементами.",
      "hawaii-miami": "Внутренняя операционная система для замены фрагментированных процессов заявок и учета запасов в барах, кухнях, ресторанах и на складе.",
      "xy-school": "Онлайн-платформа обучения с AI-тьютором, который отвечает на вопросы студентов и генерирует упражнения и объяснения.",
      "volunteer-platform": "Цифровая система для координации волонтеров и организационных процессов."
    }
  }
} as const;
