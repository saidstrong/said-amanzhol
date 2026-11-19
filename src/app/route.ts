import type { NextRequest } from "next/server";
import { localePath } from "@/lib/content";

export function GET(request: NextRequest) {
  const savedLocale = request.cookies.get("portfolio-locale")?.value;
  return new Response(null, {
    status: 307,
    headers: {
      "Cache-Control": "private, no-store",
      Location: localePath(savedLocale === "ru" ? "ru" : "en"),
    },
  });
}
