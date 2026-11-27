import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { btn, CtaBanner, Eyebrow, H2, PageHero, Section } from "@/components/site/Blocks";
import { company, team, teamValues } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/team")({
  head: () =>
    pageMeta(
      "Team – Berater für IT & Prozesse | PointView GmbH",
      "Das Team der PointView GmbH Hamburg: erfahrene Beraterinnen und Berater für IT-Beratung, Prozessanalyse, ERP und Digitalisierung im Mittelstand.",
      "/team",
    ),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero image="/images/team.jpg"
        breadcrumb={[{ label: "Über uns", to: "/ueber-uns" }, { label: "Team" }]}
        title="Unser Team"
        subtitle="Ein kleines, erfahrenes Team aus Hamburg. Wer bei uns ein Projekt übernimmt, bleibt vom ersten Workshop bis zum Go-live persönlich dran."
        cta={null}
      />

      <Section className="pt-0">
        <div className="flex flex-col gap-4 sm:gap-6">
          {team.map((m) => (
            <article key={m.name} className="flex flex-col items-center gap-6 rounded-lg border bg-card p-6 text-center sm:flex-row sm:items-center sm:gap-10 sm:p-8 sm:text-left">
              <img src={m.photo} alt={m.name} width={160} height={160} loading="lazy" className="size-32 shrink-0 rounded-full border-4 border-primary object-cover sm:size-40" />
              <div className="min-w-0 flex-1">
                <h2 className="text-xl font-bold text-dark sm:text-2xl">{m.name}</h2>
                <p className="mt-1 text-sm font-semibold text-primary">{m.role}</p>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">{m.text}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
                  {m.focus.map((f) => (
                    <span key={f} className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                      {f}
                    </span>
                  ))}
                </div>
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
        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamValues.map((v) => (
            <div key={v.title} className="rounded-3xl bg-card p-6 shadow-card sm:p-8">
              <h3 className="text-xl font-bold text-dark">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-8 rounded-lg bg-dark p-6 text-dark-foreground sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
          <div className="max-w-2xl">
            <Eyebrow>Wir wachsen</Eyebrow>
            <h2 className="text-[1.75rem] font-bold leading-tight text-balance sm:text-4xl">Werden Sie Teil des Teams</h2>
            <p className="mt-4 text-dark-foreground/80">
              {company.short} sucht Menschen, die Prozesse, IT und Menschen zusammenbringen. Aktuelle Stellen und unseren Bewerbungsprozess finden Sie auf der Karriereseite.
            </p>
          </div>
          <Link to="/karriere" className={cn(btn.primary, "lg:shrink-0")}>
            Zur Karriereseite <ArrowRight className="size-5" />
          </Link>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
