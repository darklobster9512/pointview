import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, ChevronDown, Building2, Handshake, MessagesSquare, Network, Repeat, Search, Settings, Workflow } from "lucide-react";
import {
  btn,
  H2,
  LogoStrip,
  Section,
} from "@/components/site/Blocks";
import { company, services, stats } from "@/data/site";
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

const imgFor: Record<string, string> = {
  "it-beratung": "it-beratung",
  prozessanalyse: "prozessanalyse",
  prozessoptimierung: "prozessoptimierung",
  "internet-digitalisierung": "digitalisierung",
  softwareauswahl: "softwareauswahl",
};
const statIcons = [Award, Workflow, Building2, Repeat];
const serviceIcons = [Network, Search, Settings, Handshake];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark text-primary-foreground">
        <img
          src="/images/hero-home.jpg"
          alt="Modernes Büro mit Blick auf den Hamburger Hafen und die Elbphilharmonie"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="hero-zoom absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/25" />
        <div className="container-site relative flex min-h-[36rem] flex-col items-center justify-center pb-40 pt-20 text-center sm:min-h-[90vh] sm:pb-44">
          <p className="fade-up text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/85 sm:text-sm">
            IT- & Prozessberatung · Hamburg · seit {company.since}
          </p>
          <h1 className="fade-up mt-5 max-w-4xl text-[2.6rem] font-normal leading-[1.05] text-balance hyphens-auto [animation-delay:120ms] sm:text-6xl lg:text-[5.75rem]">
            Prozesse, die <span className="text-primary">funktionieren</span><span className="caret-blink ml-1 inline-block w-[3px] self-center bg-primary align-middle h-[0.9em]" aria-hidden />
          </h1>
          <p className="fade-up mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 [animation-delay:240ms] sm:text-xl">
            Wir analysieren, wie Ihr Unternehmen wirklich arbeitet – und machen Abläufe schneller, klarer und digital.
          </p>
          <div className="fade-up mt-10 flex w-full flex-col justify-center gap-3 [animation-delay:360ms] sm:w-auto sm:flex-row sm:gap-4">
            <Link to="/kontakt" className={btn.primary}>
              Jetzt beraten lassen
            </Link>
            <Link to="/leistungen" className={cn(btn.base, "border-2 border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground hover:text-dark")}>
              Unsere Leistungen
            </Link>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 border-t border-primary-foreground/15 bg-dark/50 backdrop-blur-sm">
          <div className="container-site grid grid-cols-3 divide-x divide-primary-foreground/15 py-4 text-center sm:py-6">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label} className="px-2">
                <p className="text-lg font-semibold text-primary sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-[11px] leading-tight text-primary-foreground/80 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <a href="#start" aria-label="Weiter nach unten" className="absolute bottom-28 left-1/2 hidden -translate-x-1/2 animate-bounce text-primary-foreground/70 sm:bottom-32 sm:block">
          <ChevronDown className="size-7" />
        </a>
      </section>

      {/* Blue band + service slider */}
      <section id="start" className="bg-primary text-primary-foreground">
        <div className="container-site py-14 sm:py-20">
          <div className="max-w-3xl">
            <h2 className="text-[1.75rem] font-semibold leading-tight text-balance sm:text-4xl">
              IT- & Prozessberatung für den Mittelstand – herstellerneutral.
            </h2>
            <p className="mt-5 leading-relaxed text-primary-foreground/95 sm:text-lg">
              Wir analysieren, wie Ihr Unternehmen wirklich arbeitet, hinterfragen Abläufe und treffen klare Empfehlungen –
              von der ersten Idee bis zur stabilen Umsetzung.
            </p>
            <p className="mt-4 font-semibold">So entstehen nicht nur neue Systeme, sondern Prozesse, die funktionieren.</p>
            <Link to="/leistungen" className={cn(btn.base, "mt-8 bg-background text-dark hover:bg-background/90")}>
              Unsere Leistungen
            </Link>
          </div>
          <div className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible">
            {services.map((s) => (
              <Link key={s.slug} to="/leistungen/$slug" params={{ slug: s.slug }} className="group w-64 shrink-0 snap-start text-center lg:w-auto">
                <div className="overflow-hidden">
                  <img src={`/images/${imgFor[s.slug] ?? "leistungen"}.jpg`} alt="" loading="lazy" width={600} height={600} className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why + stats */}
      <Section muted>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <H2 className="text-primary">Warum PointView GmbH?</H2>
            <p className="mt-6 leading-relaxed">
              Der Unterschied liegt nicht nur in der Lösung, sondern auch darin, wie man dorthin kommt. Bei uns beginnt jedes
              Projekt mit einem genauen Blick auf Ihre Abläufe – herstellerneutral, provisionsfrei und verständlich.
            </p>
            <p className="mt-4 leading-relaxed">
              Seit {company.since} begleiten wir Unternehmen aus Industrie, Handel, Logistik und Dienstleistung mit festen
              Ansprechpartnern, die Verantwortung übernehmen und Projekte wirklich voranbringen.
            </p>
            <Link to="/ueber-uns" className={cn(btn.primary, "mt-8")}>Über PointView</Link>
          </div>
          <img src="/images/office.jpg" alt="Büro der PointView GmbH in Hamburg" width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover" />
        </div>
        <ul className="mt-16 grid grid-cols-2 gap-8 text-center sm:mt-20 lg:grid-cols-4">
          {stats.map((st, i) => {
            const Icon = statIcons[i] ?? Award;
            return (
              <li key={st.label}>
                <Icon className="mx-auto size-12 stroke-[1.25] text-accent" />
                <p className="mt-4 text-3xl text-primary sm:text-4xl">{st.value}</p>
                <p className="mt-1 text-sm">{st.label}</p>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Career band */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-site grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            <img src="/images/karriere.jpg" alt="" loading="lazy" width={600} height={600} className="aspect-[4/5] w-full object-cover" />
            <img src="/images/workshop.jpg" alt="" loading="lazy" width={600} height={600} className="mt-10 aspect-[4/5] w-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-[1.75rem] font-semibold leading-tight sm:text-4xl">Karriere bei PointView – starte jetzt durch</h2>
            <p className="mt-5 leading-relaxed text-primary-foreground/95">
              Wir sind ein kleines, kollegiales Team mit kurzen Wegen. Bei uns übernimmst du früh Verantwortung, arbeitest direkt
              mit Kunden und gestaltest Prozesse, die im Alltag wirklich funktionieren.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/karriere/bewerbung" className={cn(btn.base, "bg-background text-dark hover:bg-background/90")}>Jetzt bewerben</Link>
              <Link to="/karriere" className={cn(btn.base, "border-2 border-primary-foreground hover:bg-primary-foreground hover:text-primary")}>Zur Karriereseite</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services on navy */}
      <section className="bg-dark text-dark-foreground">
        <div className="container-site grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-[1.75rem] font-semibold leading-tight text-primary sm:text-4xl">Unsere Leistungen für Sie</h2>
            <p className="mt-5 leading-relaxed text-dark-foreground/85">
              Digitalisierung kann komplex wirken. Deshalb erhalten Sie bei uns nicht nur Technik, sondern Analyse, Beratung und
              Begleitung aus einer Hand – vom ersten Workshop bis zur stabilen Einführung.
            </p>
            <Link to="/leistungen" className={cn(btn.primary, "mt-8")}>Alle Leistungen</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.slice(0, 4).map((s, i) => {
              const Icon = serviceIcons[i] ?? Settings;
              return (
                <Link key={s.slug} to="/leistungen/$slug" params={{ slug: s.slug }} className="group bg-muted p-6 text-foreground transition-colors hover:bg-background">
                  <Icon className="size-11 stroke-[1.25] text-accent" />
                  <h3 className="mt-6 text-lg font-semibold text-dark group-hover:text-primary">{s.title}</h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{s.short}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick check */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <img src="/images/workshop.jpg" alt="Prozess-Workshop mit Klebezetteln an einer Glaswand" width={1024} height={768} loading="lazy" className="order-2 aspect-[4/3] w-full object-cover lg:order-1" />
          <div className="order-1 lg:order-2">
            <H2 className="text-primary">Prozess-Check: erste Ergebnisse in 5 Werktagen</H2>
            <p className="mt-6 leading-relaxed">
              Nennen Sie uns einen Ablauf, der zu lange dauert oder zu oft schiefgeht – innerhalb einer Woche erhalten Sie eine
              kompakte Einschätzung mit Schwachstellen, Potenzialen und nächsten Schritten.
            </p>
            <Link to="/kontakt" className={cn(btn.primary, "mt-8")}>Prozess-Check anfragen</Link>
          </div>
        </div>
      </Section>

      {/* Clients */}
      <section className="bg-muted pt-14 sm:pt-20">
        <h2 className="container-site text-center text-[1.75rem] font-semibold text-primary sm:text-4xl">Unternehmen, die uns vertrauen</h2>
      </section>
      <LogoStrip />
      <div className="bg-muted pb-14 text-center sm:pb-20">
        <Link to="/leistungen" className={btn.primary}>Unsere Leistungen</Link>
      </div>

      {/* Contact box */}
      <section className="py-14 sm:py-20">
        <div className="container-site">
          <div className="flex flex-col items-start gap-6 bg-primary p-8 text-primary-foreground sm:p-12 lg:flex-row lg:items-center lg:gap-12">
            <MessagesSquare className="size-16 shrink-0 stroke-[1.25] text-dark" />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold sm:text-3xl">Lassen Sie uns über Ihre Prozesse sprechen.</h2>
              <p className="mt-2 text-primary-foreground/95">Kostenloses Erstgespräch – unverbindlich und auf den Punkt.</p>
            </div>
            <Link to="/kontakt" className={cn(btn.base, "bg-background text-dark hover:bg-background/90")}>Jetzt anfragen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
