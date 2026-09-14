"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { copy, localePath, type Locale } from "@/lib/content";

type SiteHeaderProps = {
  locale: Locale;
  currentPath?: string;
};

function rememberLocale(locale: Locale) {
  document.cookie = `portfolio-locale=${locale}; max-age=31536000; path=/; samesite=lax`;
}

function LanguageSwitch({
  locale,
  currentPath,
  onNavigate,
}: {
  locale: Locale;
  currentPath: string;
  onNavigate?: () => void;
}) {
  const other = locale === "en" ? "ru" : "en";
  function prepareNavigation(link: HTMLAnchorElement) {
    rememberLocale(other);
    link.href =
      localePath(other, currentPath) +
      window.location.search +
      window.location.hash;
  }
  return (
    // A native language boundary preserves fragments without reusing a cached
    // client-router canonical URL. Other site links retain client navigation.
    <a
      href={localePath(other, currentPath)}
      hrefLang={other}
      onClick={(event) => {
        prepareNavigation(event.currentTarget);
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
          return;
        onNavigate?.();
      }}
      onAuxClick={(event) => prepareNavigation(event.currentTarget)}
      className="language-switch"
      aria-label={copy[locale].switchLanguage}
    >
      {locale.toUpperCase()} <span>/</span> {other.toUpperCase()}
    </a>
  );
}

export default function SiteHeader({
  locale,
  currentPath = "",
}: SiteHeaderProps) {
  const c = copy[locale];
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const closer = useRef<HTMLButtonElement>(null);
  const restoreScroll = useRef<(() => void) | null>(null);
  const home = localePath(locale);
  const links = [
    { label: c.nav.work, href: currentPath ? `${home}#work` : "#work" },
    {
      label: c.nav.milestones,
      href: currentPath ? `${home}#milestones` : "#milestones",
    },
    { label: c.nav.cv, href: localePath(locale, "/cv") },
    {
      label: c.nav.contact,
      href: currentPath ? `${home}#contact` : "#contact",
    },
  ];

  function closeMenu() {
    dialog.current?.close();
    restoreScroll.current?.();
    restoreScroll.current = null;
  }

  function openMenu() {
    const scrollY = window.scrollY;
    const bodyStyle = document.body.style;
    const previous = {
      position: bodyStyle.position,
      top: bodyStyle.top,
      width: bodyStyle.width,
      overflow: bodyStyle.overflow,
    };
    Object.assign(bodyStyle, {
      position: "fixed",
      top: `-${scrollY}px`,
      width: "100%",
      overflow: "hidden",
    });
    restoreScroll.current = () => {
      Object.assign(bodyStyle, previous);
      window.scrollTo({ top: scrollY, behavior: "instant" });
    };
    dialog.current?.showModal();
    closer.current?.focus();
  }

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 820px)");
    const onResize = () => {
      if (desktop.matches) {
        dialog.current?.close();
        restoreScroll.current?.();
        restoreScroll.current = null;
      }
    };
    desktop.addEventListener("change", onResize);
    return () => {
      desktop.removeEventListener("change", onResize);
      restoreScroll.current?.();
    };
  }, []);

  return (
    <header className="site-header">
      <a className="skip-link" href="#content">
        {c.skipContent}
      </a>
      <div className="shell header-inner">
        <Link
          prefetch={false}
          href={home}
          className="brand-mark"
          aria-label={c.homeLabel}
        >
          SAID
        </Link>
        <nav className="desktop-nav" aria-label={c.navigation}>
          {links.map((link) => (
            <Link prefetch={false} href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitch locale={locale} currentPath={currentPath} />
          <button
            type="button"
            ref={opener}
            className="menu-toggle"
            aria-controls="mobile-navigation"
            aria-haspopup="dialog"
            aria-label={c.openMenu}
            onClick={openMenu}
          >
            {c.menu}
          </button>
        </div>
      </div>
      <dialog
        ref={dialog}
        id="mobile-navigation"
        className="mobile-menu"
        aria-label={c.navigation}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = event.currentTarget.querySelectorAll<HTMLElement>(
            "a[href], button:not([disabled])",
          );
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClose={() => {
          restoreScroll.current?.();
          restoreScroll.current = null;
          opener.current?.focus({ preventScroll: true });
        }}
      >
        <div className="shell header-inner">
          <Link
            prefetch={false}
            href={home}
            className="brand-mark"
            aria-label={c.homeLabel}
            onClick={closeMenu}
          >
            SAID
          </Link>
          <div className="header-actions">
            <LanguageSwitch
              locale={locale}
              currentPath={currentPath}
              onNavigate={closeMenu}
            />
            <button
              type="button"
              className="menu-toggle"
              aria-label={c.closeMenu}
              ref={closer}
              onClick={closeMenu}
            >
              {c.close}
            </button>
          </div>
        </div>
        <nav className="shell mobile-nav" aria-label={c.navigation}>
          <div className="mobile-nav-inner">
            {links.map((link, index) => (
              <Link
                prefetch={false}
                href={link.href}
                key={link.label}
                onClick={closeMenu}
              >
                <span>0{index + 1}</span>
                {link.label}
              </Link>
            ))}
          </div>
          <span className="mobile-menu-handle">@sherlockzini</span>
        </nav>
      </dialog>
    </header>
  );
}
