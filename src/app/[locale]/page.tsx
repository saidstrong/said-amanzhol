import { notFound } from "next/navigation";
import PortfolioSite from "@/components/PortfolioSite";
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
      ? "Саид Аманжол — Портфолио и резюме"
      : "Said Amanzhol — Portfolio & CV",
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
  return <PortfolioSite locale={locale} />;
}
