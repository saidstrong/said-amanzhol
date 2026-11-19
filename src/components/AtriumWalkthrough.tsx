import type { Locale } from "@/lib/content";
import styles from "./AtriumWalkthrough.module.css";

const media = "/project-media/nu-atrium-events";

const copy = {
  en: {
    title: "Find a campus event",
    description: "Browse the events list, open a listing, and see when and where it takes place.",
    label: "NU Atrium walkthrough using sample event data",
    caption: "Recorded from the prototype using sample event data.",
    transcript: "Read the walkthrough",
    steps: [
      "Open All Events to see published campus events.",
      "Select NU Startup Pitch Night to open its detail page.",
      "Check the date and venue. The sample event runs December 3 from 19:00 to 20:00 in C3.200 Auditorium.",
    ],
    download: "Download the walkthrough video",
  },
  ru: {
    title: "Как найти событие в кампусе",
    description: "Откройте список событий, выберите одно из них и узнайте, когда и где оно пройдёт.",
    label: "Демонстрация NU Atrium на примере тестовых событий",
    caption: "Запись работы прототипа на тестовых данных.",
    transcript: "Прочитать описание",
    steps: [
      "Откройте All Events, чтобы увидеть опубликованные события кампуса.",
      "Откройте страницу события NU Startup Pitch Night.",
      "Проверьте дату и место. Событие из примера пройдёт 3 декабря с 19:00 до 20:00 в аудитории C3.200.",
    ],
    download: "Скачать видео",
  },
} as const;

export default function AtriumWalkthrough({ locale }: { locale: Locale }) {
  const c = copy[locale];

  return (
    <section className={styles.walkthrough} id="walkthrough" aria-labelledby="walkthrough-title">
      <div className={styles.intro}>
        <h2 id="walkthrough-title" className="display">{c.title}</h2>
        <p>{c.description}</p>
      </div>
      <figure>
        <video
          aria-label={c.label}
          controls
          height={720}
          playsInline
          poster={`${media}.webp`}
          preload="none"
          width={1280}
        >
          <source src={`${media}.mp4`} type="video/mp4" />
          <track
            default={locale === "en"}
            kind="captions"
            label="English"
            src={`${media}-en.vtt`}
            srcLang="en"
          />
          <track
            default={locale === "ru"}
            kind="captions"
            label="Русский"
            src={`${media}-ru.vtt`}
            srcLang="ru"
          />
          <a href={`${media}.mp4`} download>{c.download}</a>
        </video>
        <figcaption>{c.caption}</figcaption>
      </figure>
      <details className={styles.transcript}>
        <summary>{c.transcript}</summary>
        <ol>
          {c.steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </details>
    </section>
  );
}
