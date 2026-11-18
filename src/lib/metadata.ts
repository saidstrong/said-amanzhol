import type { Metadata } from "next";
import { localePath, type Locale } from "@/lib/content";

const productionOrigin = "https://said-amanzhol.vercel.app";

function readSiteOrigin() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!configuredUrl) return productionOrigin;

  const url = new URL(configuredUrl);
  if (
    (url.protocol !== "https:" && url.protocol !== "http:") ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be an absolute HTTP(S) origin.");
  }
  return url.origin;
}

export const siteOrigin = readSiteOrigin();

export function localizedUrls(path = "") {
  const en = new URL(localePath("en", path), siteOrigin).href;
  const ru = new URL(localePath("ru", path), siteOrigin).href;
  return { en, ru, "x-default": en };
}

export function pageMetadata(
  locale: Locale,
  title: string,
  description: string,
  path = "",
): Metadata {
  const languages = localizedUrls(path);
  const canonical = languages[locale];

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      siteName: "Said Amanzhol",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      alternateLocale: locale === "ru" ? "en_US" : "ru_RU",
    },
  };
}
