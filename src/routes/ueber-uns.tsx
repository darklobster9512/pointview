import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import officeImg from "@/assets/office.jpg";

import workshopImg from "@/assets/workshop.jpg";
import { btn, CtaBanner, Eyebrow, H2, PageHero, Section, StatsRow } from "@/components/site/Blocks";
import { company } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ueber-uns")({
  head: () =>
    pageMeta(
      "Über uns – Beratung aus Hamburg seit 2003",
      "Die PointView GmbH berät seit 2003 Unternehmen in IT, Internet und Prozessoptimierung. Lernen Sie unser Team und unsere Werte kennen.",
    ),
  component: Page,
});

const values = [
  { title: "Neutralität", text: "Wir verkaufen keine Software und nehmen keine Provisionen. Unsere Empfehlung gehört Ihnen." },
  { title: "Praxisnähe", text: "Wir sitzen bei Ihren Mitarbeitenden, nicht nur im Besprechungsraum. Prozesse versteht man am Arbeitsplatz." },
  { title: "Klarheit", text: "Wir liefern Entscheidungsvorlagen, keine 200-seitigen Gutachten. Was zählt, passt auf wenige Seiten." },
  { title: "Verbindlichkeit", text: "Wir bleiben, bis das Ergebnis im Alltag angekommen ist – nicht nur bis zur Präsentation." },
];

const milestones = [
  { year: "2003", text: "Gründung der PointView GmbH in Hamburg mit dem Schwerpunkt EDV- und Internetberatung." },
  { year: "2008", text: "Erste große ERP-Auswahlprojekte im norddeutschen Mittelstand; Prozessanalyse wird zum Kern unserer Arbeit." },
  { year: "2014", text: "Ausbau der Beratung zu Kundenportalen und digitalen Services; Projekte in ganz Deutschland." },
  { year: "2020", text: "Begleitung zahlreicher Unternehmen bei der kurzfristigen Digitalisierung von Kernprozessen." },
  { year: "heute", text: "Über 20 Jahre Erfahrung, angewendet auf Prozessoptimierung, Softwareauswahl und Digitalisierung." },
];

function Page() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Über uns" }]}
        title="Beratung mit Haltung – seit 2003 aus Hamburg"
        subtitle="Wir sind ein inhabergeführtes Beratungsunternehmen für IT, Internet und Prozessoptimierung. Klein genug für persönliche Betreuung, erfahren genug für komplexe Vorhaben."
        cta={null}
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <img src={workshopImg} alt="Workshop-Situation mit Prozesslandkarte" width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-card sm:rounded-[2.5rem]" />
          <div>
            <Eyebrow>Unser Unternehmensgegenstand</Eyebrow>
            <H2>Die Beratung von Unternehmen im Bereich EDV und Internet</H2>
            <p className="mt-6 leading-relaxed text-foreground/80">
              So steht es im Handelsregister – und so verstehen wir uns bis heute. Was sich seit {company.since} verändert hat: Technik ist
              austauschbar geworden. Der Unterschied liegt in den Prozessen, die sie unterstützt.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Deshalb legen wir großen Wert auf Prozessanalyse und -optimierung. Bevor wir über Systeme sprechen, verstehen wir, wie Ihr
              Unternehmen arbeitet, wo Reibung entsteht und was sich Ihre Mitarbeitenden wünschen.
            </p>
          </div>
        </div>
      </Section>

      <Section muted>
        <H2 className="mb-10 sm:mb-14">PointView in Zahlen</H2>
        <StatsRow />
      </Section>

      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Geschäftsführung</Eyebrow>
          <H2>{company.ceo}</H2>
          <p className="mt-6 leading-relaxed text-foreground/80">
            Sven Howest führt die {company.name} seit ihrer Gründung. Sein Schwerpunkt liegt auf der Schnittstelle zwischen Geschäftsführung,
            Fachbereich und IT: Er übersetzt technische Fragen in unternehmerische Entscheidungen und begleitet Kunden persönlich durch
            Analyse, Auswahl und Einführung.
          </p>
          <blockquote className="mt-8 border-l-4 border-primary pl-5 text-lg font-semibold leading-snug text-dark sm:pl-6 sm:text-xl">
            „Gute Beratung erkennt man daran, dass sie sich überflüssig macht. Unser Ziel ist, dass Ihr Team die Prozesse nach dem Projekt
            selbst weiterentwickeln kann.“
          </blockquote>
          <Link to="/team" className={cn(btn.ghost, "mt-8")}>
            Unser Team kennenlernen <ArrowRight className="size-5" />
          </Link>
        </div>
      </Section>

      <Section muted>
        <div className="max-w-3xl">
          <Eyebrow>Werte</Eyebrow>
          <H2>Wofür wir stehen</H2>
        </div>
        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-3xl bg-card p-6 shadow-card sm:p-8">
              <h3 className="text-xl font-bold text-dark">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Eyebrow>Geschichte</Eyebrow>
            <H2>Über 20 Jahre Beratung im Mittelstand</H2>
            <ol className="ml-2 mt-8 space-y-6 border-l-2 border-primary/30 pl-6 sm:ml-0 sm:mt-10 sm:space-y-8 sm:pl-8">
              {milestones.map((m) => (
                <li key={m.year} className="relative">
                  <span className="absolute -left-[33px] top-1 size-4 rounded-full border-4 border-background bg-primary sm:-left-[41px]" />
                  <p className="text-sm font-bold uppercase tracking-wider text-primary">{m.year}</p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/80 sm:text-base">{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <img src={officeImg} alt="Firmensitz der PointView GmbH in Hamburg" width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-card sm:rounded-[2.5rem]" />
            <div className="mt-5 rounded-3xl border p-6 sm:mt-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-wider text-primary">Standort</p>
              <p className="mt-2 text-lg font-bold text-dark sm:text-xl">{company.street}, {company.city}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Direkt an der Elbe, gut erreichbar aus der Hamburger Innenstadt und dem Umland. Termine bei Ihnen vor Ort oder remote sind selbstverständlich.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CtaBanner title="Lernen Sie uns persönlich kennen." text="Ein Gespräch von 30 Minuten reicht meist, um zu wissen, ob wir zusammenpassen. Wir freuen uns auf Ihre Nachricht." />
    </>
  );
}
