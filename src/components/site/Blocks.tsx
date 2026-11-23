import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { type ReactNode } from "react";
import { clients, stats } from "@/data/site";
import { cn } from "@/lib/utils";

/* ---------- Buttons ---------- */

const btnBase =
  "inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-semibold transition-colors duration-200 sm:w-auto sm:px-9";

export const btn = {
  primary: cn(btnBase, "bg-primary text-primary-foreground hover:bg-primary/90"),
  accent: cn(btnBase, "bg-accent text-accent-foreground hover:bg-accent/90"),
  dark: cn(btnBase, "bg-dark text-dark-foreground hover:bg-dark/90"),
  ghost: cn(btnBase, "border-2 border-dark text-dark hover:bg-dark hover:text-dark-foreground"),
};

/* ---------- Layout primitives ---------- */

export function Section({
  children,
  className,
  muted = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-14 sm:py-20 lg:py-28", muted && "bg-muted", className)}>
      <div className="container-site">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("mb-3 text-xs font-semibold uppercase tracking-widest text-primary sm:mb-4 sm:text-sm", className)}>{children}</p>;
}

export function H2({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cn("text-[1.75rem] font-semibold leading-[1.15] text-dark text-balance hyphens-auto sm:text-4xl lg:text-5xl", className)}>
      {children}
    </h2>
  );
}

export function Breadcrumb({ items }: { items: { label: string; to?: string; params?: Record<string, string> }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 overflow-hidden whitespace-nowrap text-sm text-muted-foreground">
      <Link to="/" className="shrink-0 text-primary hover:underline">
        Start
      </Link>
      {items.map((it, i) => (
        <span key={i} className={cn("flex items-center gap-2", it.to ? "shrink-0" : "min-w-0")}>
          <span aria-hidden className="shrink-0">–</span>
          {it.to ? (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <Link {...({ to: it.to, params: it.params } as any)} className="uppercase tracking-wide text-primary hover:underline">
              {it.label}
            </Link>
          ) : (
            <span className="truncate">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

/* ---------- Subpage hero ---------- */

export function PageHero({
  breadcrumb,
  title,
  subtitle,
  cta,
  image = "/images/hero.jpg",
}: {
  image?: string;
  breadcrumb?: { label: string; to?: string; params?: Record<string, string> }[];
  title: string;
  subtitle: string;
  cta?: { label: string; to: string } | null;
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-dark text-primary-foreground">
        <img src={image} alt="" aria-hidden width={1920} height={1080} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="container-site relative py-16 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-[2.25rem] font-semibold leading-[1.1] text-balance hyphens-auto sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/90 sm:mt-6 sm:text-lg lg:text-xl">{subtitle}</p>
            {cta !== null && (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              <Link to={(cta?.to ?? "/kontakt") as any} className={cn(btn.primary, "mt-8")}>
                {cta?.label ?? "Gespräch vereinbaren"}
              </Link>
            )}
          </div>
        </div>
      </section>
      {breadcrumb && (
        <div className="border-b bg-muted">
          <div className="container-site py-3">
            <Breadcrumb items={breadcrumb} />
          </div>
        </div>
      )}
    </>
  );
}

/* ---------- Logo strip ---------- */

export function LogoStrip({ label = "Unternehmen, die uns vertrauen" }: { label?: string }) {
  const items = [...clients, ...clients];
  return (
    <div className="relative border-b bg-background">
      <div className="container-site overflow-hidden py-6 sm:py-8">
        <p className="sr-only">{label}</p>
        <div className="flex w-max items-center animate-[marquee_50s_linear_infinite] gap-10 sm:gap-16 [--tw-translate-x:0]">
          {items.map((c, i) => (
            <img
              key={i}
              src={c.logo}
              alt={c.name}
              loading="lazy"
              className="h-7 w-auto max-w-[120px] shrink-0 object-contain sm:h-9 sm:max-w-[140px]"
            />
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

/* ---------- Numbered service card ---------- */

export function NumberedCard({
  number,
  title,
  text,
  to,
  params,
  linkLabel = "Mehr erfahren",
}: {
  number: string;
  title: string;
  text: string;
  to: string;
  params?: Record<string, string>;
  linkLabel?: string;
}) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...({ to, params } as any)}
      className="group flex h-full flex-col rounded-3xl border bg-card p-6 transition-all duration-300 hover:border-primary hover:shadow-card sm:p-8"
    >
      <span className="text-sm font-bold text-primary">{number}</span>
      <h3 className="mt-4 text-xl font-bold text-dark">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-dark group-hover:text-primary">
        {linkLabel}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

/* ---------- Stats ---------- */

export function StatsRow() {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-8 lg:grid-cols-4">
      {stats.map((s) => (
        <li key={s.label} className="min-w-0 border-l-2 border-primary pl-4 sm:pl-5">
          <p className="text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl">{s.value}</p>
          <p className="mt-1.5 text-xs text-muted-foreground sm:mt-2 sm:text-sm">{s.label}</p>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Benefit grid ---------- */

export function BenefitGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((b) => (
        <div key={b.title} className="rounded-3xl bg-card p-6 shadow-card sm:p-8">
          <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary-soft text-primary">
            <Check className="size-5" />
          </span>
          <h3 className="mt-5 text-lg font-bold text-dark">{b.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- Process steps ---------- */

export function ProcessSteps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="grid gap-x-10 gap-y-6 sm:gap-y-8 md:grid-cols-2">
      {steps.map((s, i) => (
        <li key={s.title} className="flex gap-4 sm:gap-5">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full gradient-hero text-sm font-bold text-primary-foreground sm:size-12 sm:text-base">
            {i + 1}
          </span>
          <div>
            <h3 className="text-lg font-bold text-dark">{s.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ---------- CTA banner ---------- */

export function CtaBanner({
  title = "Lassen Sie uns über Ihre Prozesse sprechen.",
  text = "In einem kostenlosen Erstgespräch klären wir, wo der größte Hebel in Ihrem Unternehmen liegt – unverbindlich und auf den Punkt.",
  label = "Erstgespräch vereinbaren",
  to = "/kontakt",
  search,
  secondary,
}: {
  title?: string;
  text?: string;
  label?: string;
  to?: string;
  search?: Record<string, string>;
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-site py-14 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <h2 className="text-[1.75rem] font-semibold leading-tight text-balance sm:text-4xl lg:text-[2.75rem]">{title}</h2>
          <p className="mt-4 text-base text-primary-foreground/90 sm:mt-5 sm:text-lg">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <Link {...({ to, search } as any)} className={btn.dark}>
              {label}
              <ArrowRight className="size-5" />
            </Link>
            {secondary && (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              <Link to={secondary.to as any} className={cn(btnBase, "border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary")}>
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Rich text with **bold** ---------- */

export function RichText({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p className={cn("leading-relaxed", className)}>
      {parts.map((p, i) =>
        p.startsWith("**") ? (
          <strong key={i} className="font-semibold text-dark">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </p>
  );
}
