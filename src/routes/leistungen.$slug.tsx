import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BenefitGrid, btn, CtaBanner, Eyebrow, H2, LogoStrip, PageHero, ProcessSteps, RichText, Section } from "@/components/site/Blocks";
import { ContactForm } from "@/components/site/ContactForm";
import { services } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/leistungen/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageMeta(loaderData.service.title, loaderData.service.subtitle)
      : { meta: [{ title: "Leistung nicht gefunden | PointView GmbH" }, { name: "robots", content: "noindex" }] },
  component: Page,
});

function Page() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Leistungen", to: "/leistungen" }, { label: service.title }]}
        title={service.title}
        subtitle={service.subtitle}
        cta={{ label: "Gespräch vereinbaren", to: "/kontakt" }}
      />
      <LogoStrip />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          <div>
            <Eyebrow>Worum es geht</Eyebrow>
            <H2>{service.title} rund um Ihr Geschäftsproblem</H2>
          </div>
          <div className="space-y-5 text-foreground/80">
            {service.intro.map((p, i) => (
              <RichText key={i} text={p} className="text-base sm:text-lg" />
            ))}
            <p className="pt-2 font-semibold text-dark">Für jedes Vorhaben prüfen wir:</p>
            <ul className="space-y-3">
              {service.checks.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section muted>
        <div className="max-w-3xl">
          <Eyebrow>Wann hilft das?</Eyebrow>
          <H2>Typische Situationen, in denen wir unterstützen</H2>
        </div>
        <div className="mt-10 sm:mt-14">
          <BenefitGrid items={service.benefits} />
        </div>
        <div className="mt-10 flex flex-col gap-5 rounded-3xl bg-card p-6 shadow-card sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="text-lg font-bold text-dark sm:text-xl">Kostenloses Erstgespräch vereinbaren</p>
          <Link to="/kontakt" className={cn(btn.primary, "sm:shrink-0")}>
            Kontakt aufnehmen
          </Link>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Vorgehen</Eyebrow>
          <H2>So arbeiten wir zusammen</H2>
          <p className="mt-6 leading-relaxed text-foreground/80">
            Der Umfang richtet sich nach Ihrer Situation – vom kompakten Kurz-Check bis zur mehrmonatigen Begleitung. So ist unser Vorgehen in der Regel aufgebaut:
          </p>
        </div>
        <div className="mt-10 sm:mt-14">
          <ProcessSteps steps={service.process} />
        </div>
      </Section>

      <Section muted>
        <div className="max-w-3xl">
          <Eyebrow>Im Detail</Eyebrow>
          <H2>Unsere Leistungen im Bereich {service.title}</H2>
        </div>
        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2">
          {service.subservices.map((s) => (
            <div key={s.title} className="rounded-3xl border bg-card p-6 sm:p-8">
              <h3 className="text-lg font-bold text-dark sm:text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Weitere Leistungen</Eyebrow>
          <H2>Das könnte Sie auch interessieren</H2>
        </div>
        <div className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:mt-12 sm:grid sm:gap-6 sm:overflow-visible sm:px-0 md:grid-cols-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              to="/leistungen/$slug"
              params={{ slug: o.slug }}
              className="group w-[78vw] max-w-xs shrink-0 snap-start rounded-3xl border bg-card p-6 transition-colors hover:border-primary/40 sm:w-auto sm:max-w-none sm:shrink"
            >
              <span className="text-xs font-bold text-primary">{o.number}</span>
              <h3 className="mt-2 text-lg font-bold text-dark">{o.title}</h3>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold group-hover:text-primary">
                Mehr erfahren <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section muted id="kontaktformular">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <Eyebrow>Kontakt</Eyebrow>
            <H2>Sprechen wir über Ihr Vorhaben</H2>
            <p className="mt-5 leading-relaxed text-foreground/80 sm:mt-6">
              Schildern Sie uns kurz Ihre Situation. Wir melden uns innerhalb eines Werktags und schlagen einen Termin für ein unverbindliches Erstgespräch vor.
            </p>
          </div>
          <div className={cn("rounded-[1.75rem] bg-card p-5 shadow-card sm:rounded-[2rem] sm:p-8")}>
            <ContactForm />
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
