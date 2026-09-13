"use client";

import Link from "next/link";
import { useState } from "react";
import { copy, localePath, type Locale } from "@/lib/content";

type SiteHeaderProps = {
  locale: Locale;
  currentPath?: string;
};

function rememberLocale(locale: Locale) {
  document.cookie = `portfolio-locale=${locale}; max-age=31536000; path=/; samesite=lax`;
}

function LanguageSwitch({ locale, currentPath }: { locale: Locale; currentPath: string }) {
  const other = locale === "en" ? "ru" : "en";
  return (
    <Link
      href={localePath(other, currentPath)}
      onClick={() => rememberLocale(other)}
      className="language-switch"
      aria-label={`Switch language to ${other === "ru" ? "Russian" : "English"}`}
    >
      {locale.toUpperCase()} <span>/</span> {other.toUpperCase()}
    </Link>
  );
}

export default function SiteHeader({ locale, currentPath = "" }: SiteHeaderProps) {
  const c = copy[locale];
  const [menuOpen, setMenuOpen] = useState(false);
  const home = localePath(locale);
  const links = [
    { label: c.nav.work, href: currentPath ? `${home}#work` : "#work" },
    { label: c.nav.milestones, href: currentPath ? `${home}#milestones` : "#milestones" },
    { label: c.nav.cv, href: localePath(locale, "/cv") },
    { label: c.nav.contact, href: currentPath ? `${home}#contact` : "#contact" }
  ];

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href={home} className="brand-mark" aria-label="Said Amanzhol home">SAID</Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => <Link href={link.href} key={link.label}>{link.label}</Link>)}
        </nav>
        <div className="header-actions">
          <LanguageSwitch locale={locale} currentPath={currentPath} />
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? c.closeMenu : c.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">{menuOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          <div className="shell mobile-nav-inner">
            {links.map((link, index) => (
              <Link href={link.href} key={link.label} onClick={() => setMenuOpen(false)}>
                <span>0{index + 1}</span>{link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
