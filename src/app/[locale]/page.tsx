import { notFound } from "next/navigation";
import PortfolioSite from "@/components/PortfolioSite";
import type { Locale } from "@/lib/content";

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ru") notFound();
  return <PortfolioSite locale={locale as Locale} />;
}
