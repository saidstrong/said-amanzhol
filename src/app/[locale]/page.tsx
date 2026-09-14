import { notFound } from "next/navigation";
import PortfolioSite from "@/components/PortfolioSite";
import type { Locale } from "@/lib/content";
import { copy } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ru") notFound();
  return pageMetadata(
    locale,
    locale === "ru"
      ? "Саид Аманжол — Технологии, экономика и продукты"
      : "Said Amanzhol — Technology, Economics & Product",
    copy[locale].heroSub,
  );
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ru") notFound();
  return <PortfolioSite locale={locale as Locale} />;
}
