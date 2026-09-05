import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Euro, MapPin } from "lucide-react";
import workshopImg from "@/assets/workshop.jpg";
import { BenefitGrid, CtaBanner, Eyebrow, H2, PageHero, ProcessSteps, Section } from "@/components/site/Blocks";
import { applicationSteps, careerBenefits, company, jobs } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/karriere/")({
  head: () =>
    pageMeta(
      "Karriere – Jobs in IT-Beratung & Prozessoptimierung in Hamburg",
      "Offene Stellen bei der PointView GmbH: Consultants, Online-Prozesstester, Projektleitung und Werkstudierende für Prozessanalyse, ERP und Digitalisierung.",
      "/karriere",
    ),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Karriere" }]}
        title="Karriere bei PointView"
        subtitle="Arbeiten Sie dort, wo Beratung wirklich ankommt: in kleinen Teams, direkt beim Kunden und mit Verantwortung vom ersten Tag an."
        cta={{ label: "Jetzt bewerben", to: "/karriere/bewerbung" }}
      />

      <Section className="pt-0">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img src={workshopImg} alt="Workshop im Team der PointView GmbH" width={1024} height={768} loading="lazy" className="rounded-[2rem] object-cover shadow-card" />
          <div>
            <Eyebrow>Warum PointView</Eyebrow>
            <H2>Beratung ohne Folienschlachten</H2>
            <p className="mt-6 leading-relaxed text-foreground/80">
              Seit {company.since} beraten wir Mittelstand und Industrie in IT, Internet und Prozessen. Bei uns sitzen Sie nicht in der zweiten Reihe:
              Sie nehmen Prozesse vor Ort auf, moderieren Workshops und verantworten Ergebnisse gegenüber der Geschäftsführung unserer Kunden.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Wir sind ein kleines Team mit kurzen Wegen, ehrlicher Feedbackkultur und Projekten, die selten länger als drei Monate ohne sichtbares Ergebnis bleiben.
            </p>
          </div>
        </div>
      </Section>

      <Section muted>
        <div className="max-w-3xl">
          <Eyebrow>Was wir bieten</Eyebrow>
          <H2>Sechs gute Gründe</H2>
        </div>
        <div className="mt-14">
          <BenefitGrid items={careerBenefits} />
        </div>
      </Section>

      <Section>
        <div id="stellen" className="max-w-3xl scroll-mt-28">
          <Eyebrow>Offene Stellen</Eyebrow>
          <H2>Aktuell suchen wir</H2>
        </div>
        <div className="mt-14 grid gap-6">
          {jobs.map((j) => (
            <Link
              key={j.slug}
              to="/karriere/$slug"
              params={{ slug: j.slug }}
              className="group flex flex-col gap-6 rounded-3xl border bg-card p-8 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card lg:flex-row lg:items-center lg:justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{j.area}</span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{j.status}</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-dark transition-colors group-hover:text-primary">{j.title}</h3>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><MapPin className="size-4 text-primary" />{j.location}</span>
                  <span className="inline-flex items-center gap-1.5"><Briefcase className="size-4 text-primary" />{j.model}</span>
                  {j.salary && <span className="inline-flex items-center gap-1.5"><Euro className="size-4 text-primary" />{j.salary}</span>}
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{j.short}</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-dark">
                Details ansehen <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="max-w-3xl">
          <Eyebrow>Bewerbungsprozess</Eyebrow>
          <H2>In vier Schritten zu uns</H2>
        </div>
        <div className="mt-14">
          <ProcessSteps steps={applicationSteps} />
        </div>
      </Section>

      <CtaBanner
        title="Nichts Passendes dabei?"
        text="Schreiben Sie uns initiativ. Wir melden uns innerhalb einer Woche mit einer ehrlichen Einschätzung."
        label="Initiativ bewerben"
        to="/karriere/bewerbung"
        search={{ stelle: "Initiativbewerbung" }}
      />
    </>
  );
}
