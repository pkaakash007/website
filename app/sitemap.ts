import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://realresult.framer.website";

  const routes = [
    "",
    "/about",
    "/solutions",
    "/ai-communication",
    "/technology",
    "/marketing",
    "/human-resources",
    "/industries",
    "/insights",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
