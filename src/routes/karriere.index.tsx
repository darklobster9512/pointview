import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Calendar, ChevronDown, MapPin } from "lucide-react";
import workshopImg from "@/assets/workshop.jpg";
import { BenefitGrid, btn, CtaBanner, Eyebrow, H2, PageHero, ProcessSteps, Section } from "@/components/site/Blocks";
import { applicationSteps, careerBenefits, company, jobs } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/karriere/")({
  head: () =>
    pageMeta(
      "Karriere – Jobs in IT-Beratung & Prozessoptimierung in Hamburg",
      "Offene Stellen bei der PointView GmbH: Consultants, Projektleitung und Werkstudierende für Prozessanalyse, ERP und Digitalisierung in Hamburg.",
    ),
  component: Page,
});

const mailto = (subject: string) => `mailto:${company.email}?subject=${encodeURIComponent(`Bewerbung: ${subject}`)}`;

function Page() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Karriere" }]}
        title="Karriere bei PointView"
        subtitle="Arbeiten Sie dort, wo Beratung wirklich ankommt: in kleinen Teams, direkt beim Kunden und mit Verantwortung vom ersten Tag an."
        cta={{ label: "Initiativ bewerben", to: "/kontakt" }}
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
        <div className="mt-14 space-y-6">
          {jobs.map((j) => (
            <details key={j.slug} className="group rounded-3xl border bg-card p-8 transition-colors open:border-primary/40 open:shadow-card">
              <summary className="flex cursor-pointer list-none flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-dark">{j.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><MapPin className="size-4 text-primary" />{j.location}</span>
                    <span className="inline-flex items-center gap-1.5"><Briefcase className="size-4 text-primary" />{j.type}</span>
                    <span className="inline-flex items-center gap-1.5"><Calendar className="size-4 text-primary" />{j.start}</span>
                  </div>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{j.short}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-dark">
                  Details <ChevronDown className="size-5 transition-transform group-open:rotate-180" />
                </span>
              </summary>
              <div className="mt-8 grid gap-10 border-t pt-8 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Ihre Aufgaben</h4>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/80">
                    {j.tasks.map((t) => (
                      <li key={t} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />{t}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Ihr Profil</h4>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/80">
                    {j.profile.map((t) => (
                      <li key={t} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <a href={mailto(j.title)} className={cn(btn.primary, "mt-8")}>
                Jetzt bewerben <ArrowRight className="size-5" />
              </a>
            </details>
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
      />
    </>
  );
}
