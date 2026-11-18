import type { Metadata } from "next";
import { localePath, type Locale } from "@/lib/content";

const productionOrigin = "https://said-amanzhol.vercel.app";

const sharePreview = {
  en: {
    name: "Said Amanzhol",
    alt: "Said Amanzhol’s portrait on the cover of his portfolio and CV. Economics and software development in Astana, Kazakhstan.",
  },
  ru: {
    name: "Саид Аманжол",
    alt: "Портрет Саида Аманжола на обложке его портфолио и резюме. Экономика и разработка ПО. Астана, Казахстан.",
  },
} satisfies Record<Locale, { name: string; alt: string }>;

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

const previewHost = process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL;
const shareOrigin = previewHost ? `https://${previewHost}` : siteOrigin;

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
  const preview = sharePreview[locale];

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      siteName: preview.name,
      locale: locale === "ru" ? "ru_RU" : "en_US",
      alternateLocale: locale === "ru" ? "en_US" : "ru_RU",
      images: {
        url: new URL(`/share/portfolio-${locale}.jpg`, shareOrigin).href,
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: preview.alt,
      },
    },
  };
}
