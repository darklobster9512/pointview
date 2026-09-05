import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Blocks";
import { company } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/datenschutz")({
  head: () => pageMeta("Datenschutzerklärung", "Informationen zum Datenschutz auf der Website der PointView GmbH."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero breadcrumb={[{ label: "Datenschutz" }]} title="Datenschutzerklärung" subtitle="Informationen zur Verarbeitung personenbezogener Daten auf dieser Website." cta={null} />
      <Section className="pt-0">
        <div className="max-w-2xl space-y-6 break-words leading-relaxed sm:space-y-8">
          <div className="rounded-3xl bg-primary-soft p-6 text-sm">
            <strong className="text-dark">Hinweis:</strong> Dieser Text ist ein Platzhalter und wird durch die finale, rechtlich geprüfte Datenschutzerklärung ersetzt.
          </div>
          <div>
            <h2 className="text-xl font-bold text-dark">1. Verantwortlicher</h2>
            <p className="mt-2">
              {company.name}, {company.street}, {company.city}
              <br />
              E-Mail: {company.email}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-dark">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p className="mt-2">
              Beim Besuch dieser Website werden durch den Browser automatisch Informationen an den Server übermittelt und temporär in Logfiles gespeichert (IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browsertyp). Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-dark">3. Kontaktformular</h2>
            <p className="mt-2">
              Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zur Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-dark">4. Ihre Rechte</h2>
            <p className="mt-2">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenden Sie sich dazu an die oben genannte Adresse. Sie haben zudem das Recht, sich bei einer Aufsichtsbehörde zu beschweren.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-dark">5. Externe Inhalte</h2>
            <p className="mt-2">
              Auf der Kontaktseite wird eine Karte von OpenStreetMap eingebunden. Beim Laden der Karte wird Ihre IP-Adresse an die OpenStreetMap Foundation übermittelt. Schriften werden von Google Fonts geladen; dabei wird Ihre IP-Adresse an Google übermittelt.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
