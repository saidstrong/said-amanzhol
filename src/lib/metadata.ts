import type { Metadata } from "next";
import type { Locale } from "@/lib/content";

export function pageMetadata(
  locale: Locale,
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    // SEO language alternates need absolute URLs. Leave them, the canonical,
    // and OG URL unset until the public origin is confirmed.
    openGraph: {
      type: "website",
      title,
      description,
      siteName: "Said Amanzhol",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      alternateLocale: locale === "ru" ? "en_US" : "ru_RU",
    },
  };
}
