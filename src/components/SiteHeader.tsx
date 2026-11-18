"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { copy, localePath, type Locale } from "@/lib/content";
import styles from "./SiteHeader.module.css";

type SiteHeaderProps = {
  locale: Locale;
  currentPath?: string;
};

function rememberLocale(locale: Locale) {
  document.cookie = `portfolio-locale=${locale}; max-age=31536000; path=/; samesite=lax`;
}

function HomeLink({
  locale,
  onNavigate,
}: {
  locale: Locale;
  onNavigate?: () => void;
}) {
  return (
    <Link
      prefetch={false}
      href={localePath(locale)}
      className={styles.brand}
      aria-label={copy[locale].homeLabel}
      onClick={onNavigate}
    >
      <span className={styles.brandMark} aria-hidden="true">
        SA<span>.</span>
      </span>
      <span className={styles.brandName}>{copy[locale].name.join(" ")}</span>
    </Link>
  );
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
    <div className={styles.languages}>
      <span className={styles.currentLanguage} aria-hidden="true">
        {locale.toUpperCase()}
      </span>
      {/* Native navigation preserves query strings and fragments across locales. */}
      <a
        href={localePath(other, currentPath)}
        hrefLang={other}
        onClick={(event) => {
          prepareNavigation(event.currentTarget);
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
            return;
          onNavigate?.();
        }}
        onAuxClick={(event) => {
          if (event.button === 1) prepareNavigation(event.currentTarget);
        }}
        className={styles.languageLink}
        aria-label={copy[locale].switchLanguage}
      >
        {other.toUpperCase()}
      </a>
    </div>
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
      label: c.about,
      href: currentPath ? `${home}#about` : "#about",
    },
    {
      label: c.nav.cv,
      href: localePath(locale, "/cv"),
      current: currentPath === "/cv",
    },
    {
      label: c.nav.contact,
      href: currentPath ? `${home}#contact` : "#contact",
    },
  ];

  function closeMenu() {
    dialog.current?.close();
    restoreScroll.current?.();
  }

  function openMenu() {
    const menu = dialog.current;
    if (!menu || menu.open) return;

    const scrollY = window.scrollY;
    const bodyStyle = document.body.style;
    const previous = {
      position: bodyStyle.position,
      top: bodyStyle.top,
      width: bodyStyle.width,
      overflow: bodyStyle.overflow,
    };
    menu.showModal();
    Object.assign(bodyStyle, {
      position: "fixed",
      top: `-${scrollY}px`,
      width: "100%",
      overflow: "hidden",
    });
    restoreScroll.current = () => {
      restoreScroll.current = null;
      Object.assign(bodyStyle, previous);
      window.scrollTo({ top: scrollY, behavior: "instant" });
    };
    closer.current?.focus({ preventScroll: true });
  }

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 820px)");
    const onResize = () => {
      if (desktop.matches) {
        dialog.current?.close();
        restoreScroll.current?.();
      }
    };
    desktop.addEventListener("change", onResize);
    return () => {
      desktop.removeEventListener("change", onResize);
      restoreScroll.current?.();
    };
  }, []);

  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href="#content">
        {c.skipContent}
      </a>
      <div className={styles.headerInner}>
        <HomeLink locale={locale} />
        <nav className={styles.desktopNav} aria-label={c.navigation}>
          {links.map((link) => (
            <Link
              prefetch={false}
              href={link.href}
              key={link.href}
              aria-current={link.current ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <LanguageSwitch locale={locale} currentPath={currentPath} />
          <button
            type="button"
            ref={opener}
            className={styles.menuToggle}
            aria-controls="mobile-navigation"
            aria-haspopup="dialog"
            aria-label={c.openMenu}
            onClick={openMenu}
          >
            {c.menu}
            <span className={styles.menuIcon} aria-hidden="true" />
          </button>
        </div>
      </div>
      <dialog
        ref={dialog}
        id="mobile-navigation"
        className={styles.mobileMenu}
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
          if (opener.current?.getClientRects().length) {
            opener.current.focus({ preventScroll: true });
          }
        }}
      >
        <div className={styles.dialogHeader}>
          <div className={styles.headerInner}>
            <HomeLink locale={locale} onNavigate={closeMenu} />
            <div className={styles.actions}>
              <LanguageSwitch
                locale={locale}
                currentPath={currentPath}
                onNavigate={closeMenu}
              />
              <button
                type="button"
                className={styles.closeButton}
                aria-label={c.closeMenu}
                ref={closer}
                onClick={closeMenu}
              >
                {c.close}
                <span className={styles.menuIcon} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <nav className={styles.mobileNav} aria-label={c.navigation}>
          {links.map((link) => (
            <Link
              prefetch={false}
              href={link.href}
              key={link.href}
              onClick={closeMenu}
              aria-current={link.current ? "page" : undefined}
            >
              {link.label}
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </nav>
      </dialog>
    </header>
  );
}
