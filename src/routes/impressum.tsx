import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Blocks";
import { company } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/impressum")({
  head: () => pageMeta("Impressum", "Impressum der PointView GmbH, Elbchaussee 485, 22587 Hamburg: Geschäftsführung, Handelsregister und Kontakt der IT- und Prozessberatung.", "/impressum"),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero breadcrumb={[{ label: "Impressum" }]} title="Impressum" subtitle="Angaben gemäß § 5 DDG" cta={null} />
      <Section className="pt-0">
        <div className="max-w-2xl space-y-6 break-words leading-relaxed sm:space-y-8">
          <div>
            <h2 className="text-xl font-bold text-dark">Anbieter</h2>
            <p className="mt-2">
              {company.name}
              <br />
              {company.street}
              <br />
              {company.city}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-dark">Vertreten durch</h2>
            <p className="mt-2">Geschäftsführer: {company.ceo}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-dark">Kontakt</h2>
            <p className="mt-2">
              Telefon: <a href={company.phoneHref} className="text-primary hover:underline">{company.phone}</a>
              <br />
              E-Mail: <a href={`mailto:${company.email}`} className="text-primary hover:underline">{company.email}</a>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-dark">Registereintrag</h2>
            <p className="mt-2">
              Eintragung im Handelsregister
              <br />
              Registergericht: Amtsgericht Hamburg
              <br />
              Registernummer: HRB 88760
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-dark">Unternehmensgegenstand</h2>
            <p className="mt-2">Die Beratung von Unternehmen im Bereich EDV und Internet.</p>
          </div>
          {company.vatId ? (
            <div>
              <h2 className="text-xl font-bold text-dark">Umsatzsteuer-ID</h2>
              <p className="mt-2">Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: {company.vatId}</p>
            </div>
          ) : null}
          <div>
            <h2 className="text-xl font-bold text-dark">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p className="mt-2">
              {company.ceo}, {company.street}, {company.city}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-dark">Streitschlichtung</h2>
            <p className="mt-2 text-muted-foreground">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
