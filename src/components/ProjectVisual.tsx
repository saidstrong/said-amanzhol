"use client";

import { useRef, type CSSProperties } from "react";
import { useInView } from "framer-motion";
import type { Locale, ProjectSlug } from "@/lib/content";

const labels = {
  en: {
    campus: "A connected campus",
    campusAlt:
      "NU Atrium connects profile, communities, marketplace, events, messaging, and jobs.",
    nodes: [
      "Profile",
      "Communities",
      "Marketplace",
      "Events",
      "Messaging",
      "Jobs",
    ],
    campusFooter: "One identity. Shared campus activity.",
    publishing: "From creation to response",
    publishingAlt:
      "Invitation Platform: create, customize, preview, publish, then RSVP.",
    stages: ["Create", "Customize", "Preview", "Publish", "RSVP"],
    stageNotes: [
      "Start an invitation",
      "Shape the details",
      "Review on mobile",
      "Share a published version",
      "Collect guest responses",
    ],
    publishingFooter: "Reusable blocks · A distinct published state",
    quant: "Experimental system direction",
    quantAlt:
      "Conceptual sequence: market data, analysis, agent, risk, execution, evaluation. In development; this diagram does not confirm implemented modules.",
    pipeline: [
      "Market data",
      "Analysis",
      "Agent",
      "Risk",
      "Execution",
      "Evaluation",
    ],
    development: "In development",
    quantFooter: "Conceptual direction. Implementation is not implied.",
  },
  ru: {
    campus: "Цифровая среда кампуса",
    campusAlt:
      "NU Atrium объединяет профиль, сообщества, маркетплейс, события, сообщения и вакансии.",
    nodes: [
      "Профиль",
      "Сообщества",
      "Маркетплейс",
      "События",
      "Сообщения",
      "Вакансии",
    ],
    campusFooter: "Один профиль. Общая жизнь кампуса.",
    publishing: "От создания до ответа гостя",
    publishingAlt:
      "Invitation Platform: создание, настройка, предпросмотр, публикация и RSVP.",
    stages: ["Создать", "Настроить", "Просмотреть", "Опубликовать", "RSVP"],
    stageNotes: [
      "Начать приглашение",
      "Добавить свои детали",
      "Проверить на телефоне",
      "Поделиться готовой версией",
      "Собрать ответы гостей",
    ],
    publishingFooter:
      "Переиспользуемые блоки · Отдельная опубликованная версия",
    quant: "Направление исследования",
    quantAlt:
      "Концепция: рыночные данные, анализ, агент, риск, исполнение, оценка. В разработке; схема не подтверждает реализацию модулей.",
    pipeline: [
      "Данные рынка",
      "Анализ",
      "Агент",
      "Риск",
      "Исполнение",
      "Оценка",
    ],
    development: "В разработке",
    quantFooter:
      "Концептуальное направление. Реализация модулей не подразумевается.",
  },
};

const nodePositions = [
  [50, 10],
  [20, 31],
  [80, 31],
  [20, 72],
  [80, 72],
  [50, 93],
];
const delay = (index: number): CSSProperties =>
  ({ "--step": index }) as CSSProperties;

export default function ProjectVisual({
  slug,
  locale,
  compact = false,
}: {
  slug: ProjectSlug;
  locale: Locale;
  compact?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const revealed = useInView(ref, { once: true, amount: 0.25 });
  const c = labels[locale];
  const variant =
    slug === "nu-atrium"
      ? "campus"
      : slug === "invitation-platform"
        ? "publishing"
        : "quant";
  const label =
    variant === "campus"
      ? c.campusAlt
      : variant === "publishing"
        ? c.publishingAlt
        : c.quantAlt;

  return (
    <figure
      ref={ref}
      role="img"
      aria-label={label}
      className={`visual-field visual-${variant} ${compact ? "visual-field-compact" : ""} ${revealed ? "is-revealed" : ""}`}
    >
      <div className="visual-kicker" aria-hidden="true">
        <span>{c[variant]}</span>
        <span>
          {variant === "campus" ? "01" : variant === "publishing" ? "02" : "03"}
        </span>
      </div>
      {variant === "campus" ? (
        <div className="network-stage" aria-hidden="true">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="network-links"
          >
            {nodePositions.map(([x, y], i) => (
              <path
                key={i}
                pathLength="1"
                className="network-connection"
                style={delay(i)}
                d={`M50 51 L${x} ${y}`}
              />
            ))}
            <path
              className="network-perimeter"
              d="M20 31 L50 10 L80 31 L80 72 L50 93 L20 72 Z"
            />
          </svg>
          <div className="network-core">
            <span>NU</span>
            <span>ATRIUM</span>
          </div>
          {c.nodes.map((label, index) => (
            <div
              className="network-node"
              key={label}
              style={{
                left: `${nodePositions[index][0]}%`,
                top: `${nodePositions[index][1]}%`,
                ...delay(index),
              }}
            >
              {label}
            </div>
          ))}
        </div>
      ) : variant === "publishing" ? (
        <ol className="publishing-stages" aria-hidden="true">
          {c.stages.map((stage, i) => (
            <li
              className={`publishing-stage ${i === 3 ? "publishing-stage-release" : ""}`}
              key={stage}
              style={delay(i)}
            >
              <span className="stage-number">0{i + 1}</span>
              <div className="publishing-sheet">
                <span className="publishing-title">{stage}</span>
                <span className="publishing-note">{c.stageNotes[i]}</span>
              </div>
              {i < 4 && <span className="publishing-arrow">↓</span>}
            </li>
          ))}
        </ol>
      ) : (
        <>
          <div className="quant-direction" aria-hidden="true">
            <span>01 → 06</span>
            <span className="development-stamp">{c.development}</span>
          </div>
          <ol className="quant-pipeline" aria-hidden="true">
            {c.pipeline.map((stage, i) => (
              <li
                className={`pipeline-stage ${i === 2 || i === 3 ? "pipeline-stage-emphasis" : ""}`}
                key={stage}
                style={delay(i)}
              >
                <span className="stage-number">0{i + 1}</span>
                <span>{stage}</span>
                {i < 5 && <span className="pipeline-arrow">→</span>}
              </li>
            ))}
          </ol>
        </>
      )}
      <figcaption className="visual-footer" aria-hidden="true">
        {variant === "campus"
          ? c.campusFooter
          : variant === "publishing"
            ? c.publishingFooter
            : c.quantFooter}
      </figcaption>
    </figure>
  );
}
