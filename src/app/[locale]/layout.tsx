import type { Metadata } from "next";
import { Geist, IBM_Plex_Mono, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { siteOrigin } from "@/lib/metadata";
import "../globals.css";

const geist = Geist({
  subsets: ["latin", "cyrillic"],
  variable: "--font-geist",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  weight: "500",
  variable: "--font-mono",
});

const display = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: "Said Amanzhol — Portfolio & CV",
  description:
    "Projects, experience, and CV of Said Amanzhol, an economics student at Nazarbayev University and software developer in Astana.",
  icons: { icon: "/icon.svg" },
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }];
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ru") notFound();
  return (
    <html lang={locale} data-scroll-behavior="smooth" className={`${geist.variable} ${mono.variable} ${display.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
