import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";
import { localizedUrls } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/cv",
    ...projects
      .filter((project) => project.featured)
      .map((project) => `/projects/${project.slug}`),
  ];

  return paths.flatMap((path) => {
    const languages = localizedUrls(path);
    return [languages.en, languages.ru].map((url) => ({
      url,
      alternates: { languages },
    }));
  });
}
