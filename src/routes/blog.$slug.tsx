import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBanner, PageHero, Section } from "@/components/site/Blocks";
import { company, posts } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageMeta(loaderData.post.title, loaderData.post.excerpt)
      : { meta: [{ title: "Artikel nicht gefunden | PointView GmbH" }, { name: "robots", content: "noindex" }] },
  component: Page,
});

const fmt = (d: string) => new Date(d).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" });

function Page() {
  const { post } = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <PageHero breadcrumb={[{ label: "Blog", to: "/blog" }, { label: post.category }]} title={post.title} subtitle={post.excerpt} cta={null} />
      <Section className="pt-0">
        <article className="mx-auto max-w-3xl">
          <p className="text-sm text-muted-foreground">
            <time dateTime={post.date}>{fmt(post.date)}</time> · {post.readingTime} Lesezeit · {company.short}
          </p>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground/85">
            {post.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>
      </Section>
      <Section muted>
        <h2 className="text-2xl font-bold text-dark">Weitere Artikel</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {others.map((o) => (
            <Link key={o.slug} to="/blog/$slug" params={{ slug: o.slug }} className="group rounded-3xl bg-card p-8 shadow-card transition-transform hover:-translate-y-1">
              <span className="text-xs font-semibold text-primary">{o.category}</span>
              <h3 className="mt-2 text-xl font-bold text-dark">{o.title}</h3>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold group-hover:text-primary">
                Lesen <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
