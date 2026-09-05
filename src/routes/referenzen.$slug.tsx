import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBanner, Eyebrow, H2, PageHero, Section } from "@/components/site/Blocks";
import { caseStudies } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/referenzen/$slug")({
  loader: ({ params }) => {
    const study = caseStudies.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageMeta(`${loaderData.study.title} – Referenz`, loaderData.study.teaser)
      : { meta: [{ title: "Referenz nicht gefunden | PointView GmbH" }, { name: "robots", content: "noindex" }] },
  component: Page,
});

function Page() {
  const { study } = Route.useLoaderData();
  const others = caseStudies.filter((c) => c.slug !== study.slug);

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Referenzen", to: "/referenzen" }, { label: study.client }]}
        title={study.title}
        subtitle={study.teaser}
        cta={null}
      />

      <Section className="pt-0">
        <div className="grid gap-6 rounded-[2rem] bg-dark p-8 text-dark-foreground sm:grid-cols-3 sm:p-12">
          {study.results.map((r) => (
            <div key={r.label}>
              <p className="text-4xl font-bold text-primary lg:text-5xl">{r.value}</p>
              <p className="mt-2 text-sm text-dark-foreground/75">{r.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Kunde</Eyebrow>
            <p className="text-2xl font-bold text-dark">{study.client}</p>
            <p className="mt-1 text-muted-foreground">{study.industry}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {study.services.map((s) => (
                <span key={s} className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <H2 className="text-3xl sm:text-3xl lg:text-4xl">Ausgangslage</H2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">{study.challenge}</p>
            <H2 className="mt-12 text-3xl sm:text-3xl lg:text-4xl">Vorgehen</H2>
            <ol className="mt-6 space-y-4">
              {study.approach.map((a, i) => (
                <li key={a} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full gradient-hero text-sm font-bold text-primary-foreground">{i + 1}</span>
                  <p className="pt-1.5 leading-relaxed text-foreground/80">{a}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {study.quote && (
        <Section>
          <blockquote className="mx-auto max-w-4xl text-center">
            <p className="text-2xl font-semibold leading-snug text-dark sm:text-3xl">„{study.quote.text}“</p>
            <footer className="mt-6 text-sm text-muted-foreground">{study.quote.author}</footer>
          </blockquote>
        </Section>
      )}

      <Section muted>
        <Eyebrow>Weitere Referenzen</Eyebrow>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {others.map((o) => (
            <Link key={o.slug} to="/referenzen/$slug" params={{ slug: o.slug }} className="group rounded-3xl bg-card p-8 shadow-card transition-transform hover:-translate-y-1">
              <p className="text-sm font-semibold text-muted-foreground">{o.client}</p>
              <h3 className="mt-2 text-xl font-bold text-dark">{o.title}</h3>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold group-hover:text-primary">
                Ansehen <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBanner title="Ähnliche Herausforderung?" text="Erzählen Sie uns von Ihrem Prozess. Wir sagen Ihnen ehrlich, ob und wie wir helfen können." />
    </>
  );
}
