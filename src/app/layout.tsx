import type { Metadata } from "next";
import { Geist, IBM_Plex_Mono } from "next/font/google";
import DocumentLanguage from "@/components/DocumentLanguage";
import "./globals.css";

const geist = Geist({
  subsets: ["latin", "cyrillic"],
  variable: "--font-geist",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  weight: "500",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Said Amanzhol — Portfolio & CV",
  description:
    "Projects and CV of Said Amanzhol, an economics student and software developer in Astana.",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geist.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <DocumentLanguage />
        {children}
      </body>
    </html>
  );
}
