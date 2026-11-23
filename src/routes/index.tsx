import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  btn,
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
      <section className="relative overflow-hidden bg-dark text-primary-foreground">
        <img
          src="/images/hero.jpg"
          alt="Zwei Berater der PointView GmbH arbeiten gemeinsam am Laptop"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-dark/60" />
        <div className="container-site relative flex min-h-[32rem] flex-col items-center justify-center py-20 text-center sm:min-h-[40rem] lg:min-h-[46rem]">
          <h1 className="max-w-4xl text-[2.5rem] font-normal leading-[1.08] text-balance hyphens-auto sm:text-6xl lg:text-[5.5rem]">
            Prozesse, die <span className="text-primary">funktionieren</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/95 sm:text-2xl">
            IT-Beratung und Prozessoptimierung aus Hamburg – seit {company.since}.
          </p>
          <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <Link to="/kontakt" className={btn.primary}>
              Jetzt beraten lassen
            </Link>
          </div>
        </div>
      </section>

      {/* Blue band */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-site grid gap-6 py-12 sm:py-16 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
          <div>
            <h2 className="text-[1.75rem] font-semibold leading-tight text-balance sm:text-4xl">
              IT- & Prozessberatung für den Mittelstand – herstellerneutral.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
              Wir analysieren, wie Ihr Unternehmen wirklich arbeitet, hinterfragen Abläufe und treffen klare Empfehlungen –
              von der ersten Idee bis zur stabilen Umsetzung.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Link to="/leistungen" className={btn.dark}>
              Unsere Leistungen
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      <LogoStrip />

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
            className="group flex h-full flex-col justify-between rounded-3xl bg-dark p-6 text-dark-foreground transition-colors duration-300 hover:bg-primary sm:p-8"
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
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-card"
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
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-card"
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
