import type { MetadataRoute } from "next";

const baseUrl = "https://mohammed-kardal.vercel.app";
const routes = ["", "/about", "/skills", "/experience", "/projects", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}