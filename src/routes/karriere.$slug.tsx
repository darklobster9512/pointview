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

      <section className="pb-20 lg:pb-28">
        <div className="container-site grid gap-6 lg:grid-cols-12">
          <article className="space-y-10 rounded-3xl border bg-card p-8 lg:col-span-8 lg:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Über die Position</p>
              <p className="mt-4 leading-relaxed text-foreground/80">{job.description}</p>
            </div>
            {sections.map((s, i) => (
              <div key={s.title} className="border-t pt-10">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">0{i + 1}</p>
                <h2 className="mt-3 text-2xl font-bold text-dark">{s.title}</h2>
                <ul className="mt-6 space-y-3">
                  {s.items.map((it, j) => (
                    <li key={it} className="flex gap-4 text-sm leading-relaxed text-foreground/80">
                      <span className="shrink-0 pt-0.5 text-xs font-semibold text-primary">— {String(j + 1).padStart(2, "0")}</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </article>

          <aside className="lg:col-span-4">
            <div className="space-y-6 rounded-3xl border bg-card p-8 lg:sticky lg:top-28">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{job.area}</span>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{job.status}</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Eckdaten</p>
              <ul className="space-y-4 text-sm">
                {facts.map((f) => (
                  <li key={f.label} className="flex items-start gap-3">
                    <f.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-muted-foreground">{f.label}</span>
                      <span className="text-dark">{f.value}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <Link to="/karriere/bewerbung" search={{ stelle: job.title }} className={cn(btn.primary, "w-full")}>
                Jetzt bewerben <ArrowRight className="size-5" />
              </Link>
              <p className="text-xs text-muted-foreground">
                Direkter Ansprechpartner:{" "}
                <a href={`mailto:${company.email}`} className="text-primary hover:underline">{company.email}</a>
              </p>
            </div>
          </aside>
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
    </>
  );
}
