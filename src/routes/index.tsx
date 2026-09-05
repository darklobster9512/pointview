import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  btn,
  CircuitPattern,
  CtaBanner,
  Eyebrow,
  H2,
  LogoStrip,
  NumberedCard,
  Section,
  StatsRow,
} from "@/components/site/Blocks";
import { company, services } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "PointView GmbH – IT-Beratung & Prozessoptimierung Hamburg",
      "IT-Beratung aus Hamburg seit 2003: Prozessanalyse, Prozessoptimierung, Softwareauswahl und Digitalisierung für den Mittelstand. Jetzt Erstgespräch vereinbaren.",
      "/",
    ),
  component: Index,
});

const reasons = [
  {
    title: "Prozesse zuerst, Technik danach",
    text: "Wir analysieren, wie Ihr Unternehmen wirklich arbeitet, bevor wir über Software sprechen. Ein schlechter Prozess wird durch Digitalisierung nicht besser – nur schneller schlecht.",
  },
  {
    title: "Herstellerneutral und provisionsfrei",
    text: "Wir verkaufen keine Software und erhalten keine Provisionen. Unsere Empfehlungen richten sich ausschließlich nach Ihrem Nutzen.",
  },
  {
    title: "Über 20 Jahre Erfahrung im Mittelstand",
    text: "Seit 2003 begleiten wir Unternehmen aus Industrie, Handel, Logistik und Dienstleistung – von der Geschäftsführung bis zum Sachbearbeiter.",
  },
  {
    title: "Verständlich statt technisch",
    text: "Wir übersetzen IT-Fragen in Entscheidungsvorlagen, die Geschäftsführung und Fachbereiche ohne Fachchinesisch verstehen.",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-primary-foreground">
        <img
          src="/images/hero.jpg"
          alt="Zwei Berater der PointView GmbH arbeiten gemeinsam am Laptop"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover object-center sm:object-right"
        />
        <div className="absolute inset-0 gradient-hero opacity-85 mix-blend-multiply" />
        <div className="absolute inset-0 gradient-hero opacity-40" />
        <CircuitPattern className="hidden sm:block" />
        <div className="container-site relative py-16 sm:py-28 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-[2.25rem] font-bold leading-[1.05] tracking-tight text-balance hyphens-auto sm:text-5xl lg:text-7xl">
              Ihr Partner für IT-Beratung und Prozessoptimierung
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/90 sm:mt-8 sm:text-lg lg:text-xl">
              Seit {company.since} helfen wir Unternehmen, Abläufe zu verstehen, zu vereinfachen und digital zu unterstützen.
              Herstellerneutral, praxisnah und auf messbare Ergebnisse ausgerichtet.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link to="/kontakt" className={btn.primary}>
                Projekt besprechen
              </Link>
              <Link to="/leistungen" className={btn.dark}>
                Leistungen ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Logo strip overlapping */}
      <div className="bg-background pb-4 sm:-mt-12">
        <LogoStrip />
      </div>

      {/* Services */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Was wir tun</Eyebrow>
          <H2>Beratung, die bei Ihren Abläufen anfängt</H2>
        </div>
        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <NumberedCard key={s.slug} number={s.number} title={s.title} text={s.short} to="/leistungen/$slug" params={{ slug: s.slug }} />
          ))}
          <Link
            to="/leistungen"
            className="group flex h-full flex-col justify-between rounded-3xl bg-dark p-6 text-dark-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-accent sm:p-8"
          >
            <ArrowRight className="size-8 text-primary" />
            <div>
              <h3 className="mt-6 text-xl font-bold">Alle Leistungen</h3>
              <p className="mt-3 text-sm leading-relaxed text-dark-foreground/75">
                IT-Strategie, Interims-IT-Leitung, Agentursteuerung und mehr – unser gesamtes Leistungsportfolio im Überblick.
              </p>
            </div>
            <span className="mt-6 text-sm font-semibold">Zur Übersicht →</span>
          </Link>
        </div>
      </Section>

      {/* Who we are */}
      <Section muted>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Eyebrow>Wer wir sind</Eyebrow>
            <H2>Beratungserfahrung aus über 20 Jahren – angewendet auf Ihre Prozesse</H2>
            <p className="mt-6 leading-relaxed text-foreground/80">
              Die {company.name} ist ein inhabergeführtes Beratungsunternehmen aus Hamburg. Seit {company.since} beraten wir
              Unternehmen im Bereich EDV und Internet – mit einem klaren Schwerpunkt auf Prozessanalyse und -optimierung.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Wir glauben, dass gute IT-Entscheidungen mit einem Verständnis der Abläufe beginnen. Deshalb sitzen wir zuerst bei
              Ihren Mitarbeitenden, bevor wir Empfehlungen aussprechen. Sicherheit, Wirtschaftlichkeit und Akzeptanz im Team sind
              von Anfang an Teil der Diskussion.
            </p>
            <Link to="/ueber-uns" className={cn(btn.ghost, "mt-8")}>
              Mehr über PointView
            </Link>
          </div>
          <div className="relative">
            <img
              src="/images/office.jpg"
              alt="Bürogebäude der PointView GmbH an der Elbchaussee in Hamburg"
              width={1024}
              height={768}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-card sm:rounded-[2.5rem]"
            />
            <div className="mt-4 inline-block rounded-3xl bg-card p-5 shadow-card sm:absolute sm:-bottom-6 sm:-left-6 sm:mt-0 sm:p-6">
              <p className="text-2xl font-bold text-dark sm:text-3xl">seit 2003</p>
              <p className="text-sm text-muted-foreground">Elbchaussee, Hamburg</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Quote */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Aus der Praxis</Eyebrow>
          <blockquote className="text-xl font-semibold leading-snug text-dark text-balance sm:text-3xl lg:text-4xl">
            „Digitalisierung ist zuerst eine Prozessfrage. Wer versteht, wie sein Unternehmen wirklich arbeitet, trifft bessere
            Technologieentscheidungen – und spart sich teure Umwege.“
          </blockquote>
          <p className="mt-8 font-bold text-dark">{company.ceo}</p>
          <p className="text-sm text-muted-foreground">Geschäftsführer, {company.name}</p>
        </div>
      </Section>

      {/* Stats */}
      <Section muted>
        <H2 className="mb-10 sm:mb-14">PointView in Zahlen</H2>
        <StatsRow />
      </Section>

      {/* Quick check offer */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <img
              src="/images/workshop.jpg"
              alt="Prozess-Workshop mit Klebezetteln an einer Glaswand"
              width={1024}
              height={768}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-card sm:rounded-[2.5rem]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>Schneller Einstieg</Eyebrow>
            <H2>Prozess-Check: Erste Ergebnisse in 5 Werktagen</H2>
            <p className="mt-6 leading-relaxed text-foreground/80">
              Sie haben einen Ablauf, der zu lange dauert, zu oft schiefgeht oder zu viele Menschen beschäftigt? Nennen Sie uns
              den Prozess – innerhalb einer Woche erhalten Sie eine kompakte Einschätzung mit Schwachstellen, Potenzialen und
              einem Vorschlag für die nächsten Schritte.
            </p>
            <Link to="/kontakt" className={cn(btn.primary, "mt-8")}>
              Prozess-Check anfragen
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Location */}
      <Section muted>
        <div className="max-w-3xl">
          <Eyebrow>Standort</Eyebrow>
          <H2>Aus Hamburg. Für Unternehmen in ganz Deutschland.</H2>
          <p className="mt-6 leading-relaxed text-foreground/80">
            Unser Büro liegt an der Elbchaussee in Hamburg. Von hier aus betreuen wir Kunden in Norddeutschland persönlich vor
            Ort und Unternehmen im gesamten Bundesgebiet – in Workshops bei Ihnen oder remote. Wir arbeiten auf Deutsch und
            Englisch und kennen die Anforderungen von DSGVO, Betriebsrat und Mittelstand aus zwei Jahrzehnten Praxis.
          </p>
        </div>
      </Section>

      {/* Why */}
      <Section>
        <H2 className="max-w-3xl">Warum Unternehmen mit PointView arbeiten</H2>
        <div className="mt-10 grid gap-x-12 gap-y-8 sm:mt-14 sm:gap-y-10 md:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="border-t-2 border-primary pt-5 sm:pt-6">
              <h3 className="text-lg font-bold text-dark sm:text-xl">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">{r.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
