import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { Eyebrow, H2, PageHero, Section } from "@/components/site/Blocks";
import { ContactForm } from "@/components/site/ContactForm";
import { company } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/kontakt")({
  head: () =>
    pageMeta(
      "Kontakt – PointView GmbH, Elbchaussee Hamburg",
      "Kontakt zur PointView GmbH: Elbchaussee 485, 22587 Hamburg. Kostenloses Erstgespräch zu IT-Beratung, Prozessanalyse und Prozessoptimierung anfragen.",
      "/kontakt",
    ),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Kontakt" }]}
        title="Sprechen wir über Ihre Prozesse"
        subtitle="Schreiben Sie uns, worum es geht. Wir melden uns innerhalb eines Werktags mit einem Terminvorschlag für ein unverbindliches Erstgespräch."
        cta={null}
      />
      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
          <div className="space-y-4 sm:space-y-8">
            <div className="rounded-3xl bg-muted p-6 sm:p-8">
              <Eyebrow>Anschrift</Eyebrow>
              <div className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-primary" />
                <address className="not-italic leading-relaxed">
                  <p className="font-bold text-dark">{company.name}</p>
                  <p>{company.street}</p>
                  <p>{company.city}</p>
                </address>
              </div>
              <div className="mt-6 flex gap-4">
                <Mail className="mt-1 size-5 shrink-0 text-primary" />
                <a href={`mailto:${company.email}`} className="break-all font-semibold text-dark hover:text-primary">
                  {company.email}
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border">
              <iframe
                title="Standort PointView GmbH, Elbchaussee 485, Hamburg"
                src="https://www.openstreetmap.org/export/embed.html?bbox=9.8300%2C53.5500%2C9.8500%2C53.5600&layer=mapnik&marker=53.5550%2C9.8400"
                className="h-56 w-full sm:h-72"
                loading="lazy"
              />
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-card p-5 shadow-card sm:rounded-[2rem] sm:p-8 lg:p-10">
            <H2 className="text-2xl sm:text-3xl lg:text-4xl">Anfrage senden</H2>
            <p className="mt-3 text-sm text-muted-foreground">Felder mit * sind Pflichtfelder.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
