"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DocumentLanguage() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = pathname.split("/")[1];
    document.documentElement.lang = locale === "ru" ? "ru" : "en";
  }, [pathname]);

  return null;
}
