import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { services } from "@/data/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const navLinks = [
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/team", label: "Team" },
  { to: "/karriere", label: "Karriere" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background/95 backdrop-blur transition-shadow",
        scrolled && "shadow-[0_8px_30px_-16px_oklch(0.32_0.005_260/0.25)]",
      )}
    >
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <Link to="/" aria-label="PointView Startseite" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          <div className="group relative">
            <Link
              to="/leistungen"
              className="flex items-center gap-1 text-sm font-semibold transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              Leistungen
              <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="w-80 rounded-3xl border bg-card p-3 shadow-card">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/leistungen/$slug"
                    params={{ slug: s.slug }}
                    className="flex items-start gap-3 rounded-2xl px-4 py-3 transition-colors hover:bg-muted"
                  >
                    <span className="mt-0.5 text-xs font-bold text-primary">{s.number}</span>
                    <span>
                      <span className="block text-sm font-semibold">{s.title}</span>
                    </span>
                  </Link>
                ))}
                <Link
                  to="/leistungen"
                  className="mt-1 block rounded-2xl px-4 py-3 text-sm font-semibold text-accent hover:bg-muted"
                >
                  Alle Leistungen →
                </Link>
              </div>
            </div>
          </div>
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-semibold transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/kontakt"
            className="rounded-full bg-dark px-6 py-3 text-sm font-semibold text-dark-foreground transition-colors hover:bg-accent"
          >
            Kontakt
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-full p-2 lg:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-background lg:hidden">
          <nav className="container-site flex flex-col py-4" aria-label="Mobile Navigation">
            <button
              type="button"
              className="flex items-center justify-between py-3 text-base font-semibold"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              Leistungen
              <ChevronDown className={cn("size-5 transition-transform", servicesOpen && "rotate-180")} />
            </button>
            {servicesOpen && (
              <div className="mb-2 flex flex-col gap-1 rounded-2xl bg-muted p-2">
                <Link to="/leistungen" className="rounded-xl px-4 py-2 text-sm font-semibold" onClick={() => setOpen(false)}>
                  Übersicht
                </Link>
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/leistungen/$slug"
                    params={{ slug: s.slug }}
                    className="rounded-xl px-4 py-2 text-sm"
                    onClick={() => setOpen(false)}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="py-3 text-base font-semibold" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="mt-3 rounded-full bg-dark px-6 py-3 text-center text-sm font-semibold text-dark-foreground"
              onClick={() => setOpen(false)}
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
