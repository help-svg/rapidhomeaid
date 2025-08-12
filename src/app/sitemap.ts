import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rapidhomeaid.com";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/water-damage`, lastModified: now },
    { url: `${base}/flood-cleanup`, lastModified: now },
    { url: `${base}/burst-pipe`, lastModified: now },
    { url: `${base}/privacy`, lastModified: now },
    { url: `${base}/terms`, lastModified: now },
    { url: `${base}/about`, lastModified: now }
  ];
}
