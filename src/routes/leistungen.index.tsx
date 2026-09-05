import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner, Eyebrow, H2, LogoStrip, NumberedCard, PageHero, ProcessSteps, Section } from "@/components/site/Blocks";
import { services } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/leistungen/")({
  head: () =>
    pageMeta(
      "Leistungen – IT-Beratung, Prozessanalyse & Optimierung",
      "Unsere Beratungsleistungen im Überblick: IT-Beratung, Prozessanalyse, Prozessoptimierung, Digitalisierung und Softwareauswahl.",
    ),
  component: Page,
});

const approach = [
  { title: "Verstehen", text: "Wir hören zu, beobachten und messen – bevor wir eine Empfehlung aussprechen." },
  { title: "Bewerten", text: "Wir priorisieren Handlungsfelder nach Nutzen, Risiko und Aufwand." },
  { title: "Gestalten", text: "Wir entwerfen Lösungen gemeinsam mit den Menschen, die damit arbeiten." },
  { title: "Umsetzen", text: "Wir begleiten Auswahl, Einführung und Veränderung bis zum Ergebnis." },
];

function Page() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Leistungen" }]}
        title="Unsere Leistungen"
        subtitle="Von der Prozessanalyse bis zur Softwareeinführung: Wir begleiten Unternehmen dabei, Abläufe zu verstehen, zu vereinfachen und digital zu unterstützen."
      />
      <LogoStrip />
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Leistungsportfolio</Eyebrow>
          <H2>Fünf Felder, ein Ansatz: Prozesse zuerst</H2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <NumberedCard key={s.slug} number={s.number} title={s.title} text={s.short} to="/leistungen/$slug" params={{ slug: s.slug }} />
          ))}
        </div>
      </Section>
      <Section muted>
        <div className="max-w-3xl">
          <Eyebrow>Unsere Arbeitsweise</Eyebrow>
          <H2>So arbeiten wir mit Ihnen</H2>
        </div>
        <div className="mt-14">
          <ProcessSteps steps={approach} />
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
