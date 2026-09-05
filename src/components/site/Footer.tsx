import { Link } from "@tanstack/react-router";
import { company, services } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container-site grid gap-8 py-12 sm:gap-12 sm:py-16 md:grid-cols-2 lg:grid-cols-4 [&>div+div]:border-t [&>div+div]:border-dark-foreground/10 [&>div+div]:pt-8 md:[&>div+div]:border-0 md:[&>div+div]:pt-0">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-dark-foreground/70">
            Beratung für IT, Internet und Prozessoptimierung. Seit {company.since} aus Hamburg – für Unternehmen in ganz Deutschland.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Leistungen</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/leistungen/$slug" params={{ slug: s.slug }} className="text-dark-foreground/80 hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Unternehmen</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/ueber-uns" className="text-dark-foreground/80 hover:text-primary">Über uns</Link></li>
            <li><Link to="/team" className="text-dark-foreground/80 hover:text-primary">Team</Link></li>
            <li><Link to="/karriere" className="text-dark-foreground/80 hover:text-primary">Karriere</Link></li>
            <li><Link to="/kontakt" className="text-dark-foreground/80 hover:text-primary">Kontakt</Link></li>
            <li><Link to="/impressum" className="text-dark-foreground/80 hover:text-primary">Impressum</Link></li>
            <li><Link to="/datenschutz" className="text-dark-foreground/80 hover:text-primary">Datenschutz</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Kontakt</h3>
          <address className="mt-4 space-y-1 text-sm not-italic text-dark-foreground/80">
            <p className="font-semibold text-dark-foreground">{company.name}</p>
            <p>{company.street}</p>
            <p>{company.city}</p>
            <p className="pt-2">
              <a href={`mailto:${company.email}`} className="hover:text-primary">{company.email}</a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-dark-foreground/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs leading-relaxed text-dark-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. Alle Rechte vorbehalten.</p>
          <p className="break-words">{company.register} · Geschäftsführer: {company.ceo}</p>
        </div>
      </div>
    </footer>
  );
}
