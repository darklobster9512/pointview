import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Clock, Euro, MapPin } from "lucide-react";
import { btn, CtaBanner, PageHero } from "@/components/site/Blocks";
import { company, jobs, type Job } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/karriere/$slug")({
  loader: ({ params }) => {
    const job = jobs.find((j) => j.slug === params.slug);
    if (!job) throw redirect({ to: "/karriere" });
    return { job };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Stelle nicht gefunden" }, { name: "robots", content: "noindex" }] };
    const { job } = loaderData;
    const base = pageMeta(`${job.title} – Job bei PointView`, job.short, `/karriere/${job.slug}`);
    return {
      ...base,
      scripts: [{ type: "application/ld+json", children: JSON.stringify(jobPosting(job)) }],
    };
  },
  component: Page,
});

function jobPosting(job: Job) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    employmentType: job.model,
    hiringOrganization: { "@type": "Organization", name: company.name },
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Hamburg", addressCountry: "DE" } },
    ...(job.location.startsWith("Remote") ? { jobLocationType: "TELECOMMUTE" } : {}),
    directApply: true,
  };
}

function Page() {
  const { job } = Route.useLoaderData();
  const sections = [
    { title: "Ihre Aufgaben", items: job.tasks },
    { title: "Ihr Profil", items: job.profile },
    { title: "Was wir bieten", items: job.offer },
  ];
  const facts = [
    { icon: MapPin, label: "Standort", value: job.location },
    { icon: Briefcase, label: "Modell", value: job.model },
    { icon: Clock, label: "Arbeitszeit", value: job.hours },
    { icon: Euro, label: "Gehalt", value: job.salary },
  ].filter((f) => f.value);

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Karriere", to: "/karriere" }, { label: job.title }]}
        title={job.title}
        subtitle={job.short}
        cta={null}
      />

      <section className="pb-14 sm:pb-20 lg:pb-28">
        <div className="container-site grid gap-4 sm:gap-6 lg:grid-cols-12">
          <aside className="order-1 lg:order-2 lg:col-span-4">
            <div className="space-y-5 rounded-3xl border bg-card p-6 sm:space-y-6 sm:p-8 lg:sticky lg:top-28">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{job.area}</span>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{job.status}</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Eckdaten</p>
              <ul className="grid grid-cols-2 gap-4 text-sm lg:grid-cols-1">
                {facts.map((f) => (
                  <li key={f.label} className="flex min-w-0 items-start gap-3">
                    <f.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wider text-muted-foreground">{f.label}</span>
                      <span className="break-words text-dark">{f.value}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <Link to="/karriere/bewerbung" search={{ stelle: job.title }} className={cn(btn.primary, "w-full")}>
                Jetzt bewerben <ArrowRight className="size-5" />
              </Link>
              <p className="text-xs text-muted-foreground">
                Direkter Ansprechpartner:{" "}
                <a href={`mailto:${company.email}`} className="break-all text-primary hover:underline">{company.email}</a>
              </p>
            </div>
          </aside>

          <article className="order-2 space-y-8 rounded-3xl border bg-card p-6 sm:space-y-10 sm:p-8 lg:order-1 lg:col-span-8 lg:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Über die Position</p>
              <p className="mt-4 leading-relaxed text-foreground/80">{job.description}</p>
            </div>
            {sections.map((s, i) => (
              <div key={s.title} className="border-t pt-8 sm:pt-10">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">0{i + 1}</p>
                <h2 className="mt-3 text-xl font-bold text-dark sm:text-2xl">{s.title}</h2>
                <ul className="mt-5 space-y-3 sm:mt-6">
                  {s.items.map((it, j) => (
                    <li key={it} className="flex gap-3 text-sm leading-relaxed text-foreground/80 sm:gap-4">
                      <span className="shrink-0 pt-0.5 text-xs font-semibold text-primary">— {String(j + 1).padStart(2, "0")}</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </article>
        </div>
      </section>

      <CtaBanner
        title="Noch Fragen zur Rolle?"
        text="Schreiben Sie uns direkt – wir antworten innerhalb von 48 Stunden."
        label="Jetzt bewerben"
        to="/karriere/bewerbung"
        search={{ stelle: job.title }}
        secondary={{ label: "Andere Stellen", to: "/karriere" }}
      />

      {/* Mobile: fixierte Bewerben-Leiste */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
        <Link to="/karriere/bewerbung" search={{ stelle: job.title }} className={cn(btn.primary, "w-full py-3")}>
          Jetzt bewerben <ArrowRight className="size-5" />
        </Link>
      </div>
      <div aria-hidden className="h-20 lg:hidden" />
    </>
  );
}
