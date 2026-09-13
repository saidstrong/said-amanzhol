import { notFound } from "next/navigation";
import type { Locale } from "@/lib/content";

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ru") notFound();
  return <div lang={locale as Locale}>{children}</div>;
}
