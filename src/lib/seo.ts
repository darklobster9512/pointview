export function pageMeta(title: string, description: string, path?: string) {
  const full = title.includes("PointView") ? title : `${title} | PointView GmbH`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      ...(path ? [{ property: "og:url", content: path }] : []),
    ],
    links: path ? [{ rel: "canonical", href: path }] : [],
  };
}
