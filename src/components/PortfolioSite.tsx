import SiteHeader from "@/components/SiteHeader";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { ProfileSection } from "@/components/portfolio/ProfileSection";
import { WorkSection } from "@/components/portfolio/WorkSection";
import type { Locale } from "@/lib/content";
import "@/components/portfolio/portfolio.css";

export default function PortfolioSite({ locale }: { locale: Locale }) {
  return (
    <>
      <SiteHeader locale={locale} />
      <main id="content" tabIndex={-1}>
        <PortfolioHero locale={locale} />
        <WorkSection locale={locale} />
        <ProfileSection locale={locale} />
      </main>
      <ContactSection locale={locale} />
    </>
  );
}
