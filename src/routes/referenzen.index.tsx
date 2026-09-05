import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBanner, Eyebrow, H2, LogoStrip, PageHero, Section } from "@/components/site/Blocks";
import { caseStudies } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/referenzen/")({
  head: () =>
    pageMeta(
      "Referenzen – Projekte aus Prozessoptimierung & IT-Beratung",
      "Ausgewählte Projekte der PointView GmbH: Prozessanalyse in der Logistik, ERP-Auswahl im Maschinenbau, Kundenportal in der Medizintechnik.",
    ),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Referenzen" }]}
        title="Referenzen"
        subtitle="Ausgewählte Projekte, die zeigen, wie wir arbeiten – und was dabei herauskommt. Kundennamen sind auf Wunsch anonymisiert."
        cta={null}
      />
      <LogoStrip />
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Projekte</Eyebrow>
          <H2>Ergebnisse, die im Alltag ankommen</H2>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <Link
              key={c.slug}
              to="/referenzen/$slug"
              params={{ slug: c.slug }}
              className="group flex h-full flex-col rounded-3xl border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
            >
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">{c.industry}</span>
                {c.services.map((s) => (
                  <span key={s} className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm font-semibold text-muted-foreground">{c.client}</p>
              <h3 className="mt-2 text-2xl font-bold leading-tight text-dark">{c.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.teaser}</p>
              <div className="mt-6 grid grid-cols-3 gap-2 border-t pt-6">
                {c.results.map((r) => (
                  <div key={r.label}>
                    <p className="text-lg font-bold text-dark">{r.value}</p>
                    <p className="text-[11px] leading-tight text-muted-foreground">{r.label}</p>
                  </div>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold group-hover:text-primary">
                Projekt ansehen <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
