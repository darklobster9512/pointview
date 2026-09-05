import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBanner, PageHero, Section } from "@/components/site/Blocks";
import { posts } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageMeta(
      "Blog – Prozessoptimierung, IT-Beratung & Digitalisierung",
      "Praxiswissen aus über 20 Jahren Beratung: Artikel zu Prozessanalyse, Softwareauswahl und Digitalisierung im Mittelstand.",
    ),
  component: Page,
});

const fmt = (d: string) => new Date(d).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" });

function Page() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Blog" }]}
        title="Blog"
        subtitle="Praxiswissen zu Prozessen, Software und Digitalisierung – ohne Buzzwords, dafür mit Erfahrung aus über 20 Jahren Beratung."
        cta={null}
      />
      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex h-full flex-col rounded-3xl border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary-soft px-3 py-1 font-semibold text-primary">{p.category}</span>
                <time dateTime={p.date}>{fmt(p.date)}</time>
              </div>
              <h2 className="mt-6 text-2xl font-bold leading-tight text-dark">{p.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{p.readingTime} Lesezeit</span>
                <span className="inline-flex items-center gap-1 font-semibold group-hover:text-primary">
                  Lesen <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
