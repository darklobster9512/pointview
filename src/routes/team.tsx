import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { btn, CtaBanner, Eyebrow, H2, PageHero, Section } from "@/components/site/Blocks";
import { company, team, teamValues } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/team")({
  head: () =>
    pageMeta(
      "Unser Team – Beraterinnen und Berater aus Hamburg",
      "Lernen Sie das Team der PointView GmbH kennen: erfahrene Beraterinnen und Berater für IT, Prozessanalyse und Digitalisierung.",
    ),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Über uns", to: "/ueber-uns" }, { label: "Team" }]}
        title="Unser Team"
        subtitle="Ein kleines, erfahrenes Team aus Hamburg. Wer bei uns ein Projekt übernimmt, bleibt vom ersten Workshop bis zum Go-live persönlich dran."
        cta={null}
      />

      <Section className="pt-0">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <article key={m.name} className="flex h-full flex-col rounded-3xl border border-t-4 border-t-primary bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:border-t-primary hover:shadow-card">
              <h2 className="text-2xl font-bold text-dark">{m.name}</h2>
              <p className="mt-1 text-sm font-semibold text-primary">{m.role}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {m.focus.map((f) => (
                  <span key={f} className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                    {f}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="max-w-3xl">
          <Eyebrow>So arbeiten wir</Eyebrow>
          <H2>Vier Grundsätze, die jedes Projekt prägen</H2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamValues.map((v) => (
            <div key={v.title} className="rounded-3xl bg-card p-8 shadow-card">
              <h3 className="text-xl font-bold text-dark">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-start gap-8 rounded-[2rem] bg-dark p-10 text-dark-foreground lg:flex-row lg:items-center lg:justify-between lg:p-14">
          <div className="max-w-2xl">
            <Eyebrow>Wir wachsen</Eyebrow>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Werden Sie Teil des Teams</h2>
            <p className="mt-4 text-dark-foreground/80">
              {company.short} sucht Menschen, die Prozesse, IT und Menschen zusammenbringen. Aktuelle Stellen und unseren Bewerbungsprozess finden Sie auf der Karriereseite.
            </p>
          </div>
          <Link to="/karriere" className={cn(btn.primary, "shrink-0")}>
            Zur Karriereseite <ArrowRight className="size-5" />
          </Link>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
