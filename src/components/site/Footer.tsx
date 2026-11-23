import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/site";
import { Logo } from "./Logo";

/* Grobe Deutschland-Silhouette als Punkteraster (Spalten-Bereiche je Zeile) */
const rows: [number, number][] = [
  [9, 12], [8, 13], [7, 14], [6, 15], [5, 16], [4, 16], [4, 16], [3, 15], [3, 15], [3, 15],
  [2, 14], [2, 14], [3, 14], [3, 15], [4, 15], [4, 16], [4, 16], [5, 16], [5, 15], [6, 15],
  [6, 14], [5, 14], [6, 13], [7, 12],
];

function DotMap() {
  const dots: { x: number; y: number }[] = [];
  rows.forEach(([a, b], y) => {
    for (let x = a; x <= b; x++) dots.push({ x, y });
  });
  return (
    <svg viewBox="0 0 200 250" className="h-56 w-auto" aria-label="Standort Hamburg">
      {dots.map((d, i) => (
        <circle key={i} cx={d.x * 10 + 5} cy={d.y * 10 + 5} r="3.2" className="fill-primary/35" />
      ))}
      <circle cx="105" cy="45" r="7" className="fill-dark-foreground" />
      <circle cx="105" cy="45" r="12" className="fill-dark-foreground/20" />
    </svg>
  );
}

const cols = [
  {
    title: "Unternehmen",
    links: [
      { to: "/ueber-uns", label: "Über uns" },
      { to: "/team", label: "Team" },
      { to: "/karriere", label: "Karriere" },
      { to: "/kontakt", label: "Kontakt" },
    ],
  },
  { title: "Unser Angebot", links: [{ to: "/leistungen", label: "Leistungen" }, { to: "/kontakt", label: "Prozess-Check" }] },
  { title: "Rechtliches", links: [{ to: "/impressum", label: "Impressum" }, { to: "/datenschutz", label: "Datenschutz" }] },
] as const;

export function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container-site grid gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-20">
        <div className="divide-y divide-dark-foreground/15">
          {[
            { to: "/kontakt", over: "Anfrage", title: "Kontakt aufnehmen", sub: `Schreiben Sie uns: ${company.email}` },
            { to: "/karriere", over: "Karriere", title: "Offene Stellen ansehen", sub: "Jobs für jedes Erfahrungslevel" },
          ].map((r) => (
            <Link key={r.title} to={r.to} className="group flex items-center justify-between gap-6 py-6">
              <span>
                <span className="block text-xs text-primary">{r.over}</span>
                <span className="mt-1 block text-xl font-semibold sm:text-2xl">{r.title}</span>
                <span className="mt-1 block text-sm text-dark-foreground/60">{r.sub}</span>
              </span>
              <ArrowRight className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
        <div className="hidden flex-col items-center lg:flex">
          <DotMap />
          <p className="mt-2 text-sm text-primary">Hamburg</p>
          <p className="text-xs text-dark-foreground/60">Deutschland</p>
        </div>
      </div>
      <div className="border-t border-dark-foreground/10">
        <div className="container-site grid gap-8 py-12 sm:grid-cols-3 lg:grid-cols-4">
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="font-semibold">{c.title}</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-dark-foreground/75 hover:text-primary">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <address className="text-sm not-italic text-dark-foreground/75">
            <p className="font-semibold text-dark-foreground">{company.name}</p>
            <p className="mt-4">{company.street}</p>
            <p>{company.city}</p>
            <a href={`mailto:${company.email}`} className="mt-2 block hover:text-primary">{company.email}</a>
          </address>
        </div>
        <div className="container-site flex flex-col gap-4 pb-10 text-xs text-dark-foreground/55 sm:flex-row sm:items-end sm:justify-between">
          <Logo light />
          <p className="break-words sm:text-right">
            © {new Date().getFullYear()} {company.name} · {company.register} · Geschäftsführer: {company.ceo}
          </p>
        </div>
      </div>
    </footer>
  );
}
