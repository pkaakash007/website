import type { MetadataRoute } from "next";
import { INDEXABLE_ROUTES } from "@/config/routes";
import { absoluteUrl } from "@/lib/seo";

// Generated at build time from the route registry, so the sitemap can never
// list a URL that doesn't exist (or miss one that does).
export const dynamic = "force-static";

const BUILD_DATE = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: BUILD_DATE,
    changeFrequency: route.sitemap?.changeFrequency ?? "monthly",
    priority: route.sitemap?.priority ?? 0.5,
    ...(route.image ? { images: [absoluteUrl(route.image)] } : {}),
  }));
}
