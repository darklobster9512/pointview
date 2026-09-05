export function pageMeta(title: string, description: string, path: string = "/", ogType: string = "website") {
  const full = title.includes("PointView") ? title : `${title} | PointView GmbH`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:url", content: path },
      { property: "og:type", content: ogType },
      { name: "twitter:title", content: full },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
