import type { Metadata } from "next";
import { Geist } from "next/font/google";
import DocumentLanguage from "@/components/DocumentLanguage";
import "./globals.css";

const geist = Geist({
  subsets: ["latin", "cyrillic"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Said Amanzhol — Technology, Economics & Product",
  description:
    "Portfolio and CV of Said Amanzhol: products, engineering, economics, strategy, and leadership.",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans antialiased">
        <DocumentLanguage />
        {children}
      </body>
    </html>
  );
}
