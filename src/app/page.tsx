import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function RootPage() {
  const cookieStore = await cookies();
  const savedLocale = cookieStore.get("portfolio-locale")?.value;
  redirect(savedLocale === "ru" ? "/ru" : "/en");
}
