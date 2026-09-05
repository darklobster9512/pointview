import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { type ReactNode } from "react";
import { clients, stats } from "@/data/site";
import { cn } from "@/lib/utils";

/* ---------- Buttons ---------- */

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all duration-200 hover:-translate-y-0.5";

export const btn = {
  primary: cn(btnBase, "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_12px_30px_-12px_oklch(0.70_0.15_225/0.7)]"),
  accent: cn(btnBase, "bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_12px_30px_-12px_oklch(0.34_0.16_264/0.7)]"),
  dark: cn(btnBase, "bg-dark text-dark-foreground hover:bg-dark/90"),
  ghost: cn(btnBase, "border-2 border-dark text-dark hover:bg-dark hover:text-dark-foreground"),
};

/* ---------- Circuit pattern ---------- */

export function CircuitPattern({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={cn("pointer-events-none absolute inset-y-0 left-0 h-full w-[55%] text-background/40", className)}
      viewBox="0 0 600 900"
      fill="none"
      preserveAspectRatio="none"
    >
      {[
        "M0 80 H140 L200 140 H330",
        "M0 220 H60 L110 270 H260",
        "M0 350 H180 L230 300 H300",
        "M0 520 H90 L150 580 H240",
        "M0 700 H200 L260 640 H360",
        "M0 820 H120 L170 870 H410",
      ].map((d, i) => (
        <g key={i} stroke="currentColor" strokeWidth="1.5">
          <path d={d} />
        </g>
      ))}
      {[
        [330, 140],
        [260, 270],
        [300, 300],
        [240, 580],
        [360, 640],
        [410, 870],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="5" fill="currentColor" />
      ))}
    </svg>
  );
}

/* ---------- Soft blob for subpage heroes ---------- */

export function SoftBlob() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[30%] top-[-10%] size-[520px] rounded-full bg-primary/25 blur-[90px]" />
      <div className="absolute left-[45%] top-[10%] size-[360px] rounded-full bg-accent/10 blur-[100px]" />
    </div>
  );
}

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
    <section id={id} className={cn("py-20 lg:py-28", muted && "bg-muted", className)}>
      <div className="container-site">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("mb-4 text-sm font-semibold uppercase tracking-widest text-primary", className)}>{children}</p>;
}

export function H2({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cn("text-3xl font-bold leading-[1.1] tracking-tight text-dark sm:text-4xl lg:text-5xl", className)}>
      {children}
    </h2>
  );
}

export function Breadcrumb({ items }: { items: { label: string; to?: string; params?: Record<string, string> }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
      <Link to="/" className="text-primary hover:underline">
        Start
      </Link>
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-2">
          <span aria-hidden>–</span>
          {it.to ? (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <Link {...({ to: it.to, params: it.params } as any)} className="uppercase tracking-wide text-primary hover:underline">
              {it.label}
            </Link>
          ) : (
            <span>{it.label}</span>
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
}: {
  breadcrumb?: { label: string; to?: string; params?: Record<string, string> }[];
  title: string;
  subtitle: string;
  cta?: { label: string; to: string } | null;
}) {
  return (
    <section className="relative overflow-hidden bg-background">
      <SoftBlob />
      <div className="container-site relative pb-16 pt-8 lg:pb-24 lg:pt-10">
        {breadcrumb && <Breadcrumb items={breadcrumb} />}
        <div className="mt-12 max-w-3xl lg:mt-16">
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-dark sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80 sm:text-xl">{subtitle}</p>
          {cta !== null && (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <Link to={(cta?.to ?? "/kontakt") as any} className={cn(btn.primary, "mt-8")}>
              {cta?.label ?? "Gespräch vereinbaren"}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Logo strip ---------- */

export function LogoStrip({ label = "Unternehmen, die uns vertrauen" }: { label?: string }) {
  const items = [...clients, ...clients];
  return (
    <div className="container-site relative z-10">
      <div className="overflow-hidden rounded-full border bg-card px-6 py-6 shadow-pill">
        <p className="sr-only">{label}</p>
        <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-14 [--tw-translate-x:0]">
          {items.map((c, i) => (
            <span key={i} className="whitespace-nowrap text-lg font-bold tracking-tight text-dark/45 sm:text-xl">
              {c}
            </span>
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
      className="group flex h-full flex-col rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
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
    <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      {stats.map((s) => (
        <li key={s.label} className="border-l-2 border-primary pl-5">
          <p className="text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">{s.value}</p>
          <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Benefit grid ---------- */

export function BenefitGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((b) => (
        <div key={b.title} className="rounded-3xl bg-card p-8 shadow-card">
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
    <ol className="grid gap-x-10 gap-y-8 md:grid-cols-2">
      {steps.map((s, i) => (
        <li key={s.title} className="flex gap-5">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full gradient-hero text-base font-bold text-primary-foreground">
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
}: {
  title?: string;
  text?: string;
  label?: string;
}) {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-hero px-8 py-16 text-primary-foreground sm:px-16 lg:py-20">
          <CircuitPattern className="text-background/30" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
            <p className="mt-5 text-lg text-primary-foreground/90">{text}</p>
            <Link to="/kontakt" className={cn(btn.dark, "mt-8")}>
              {label}
              <ArrowRight className="size-5" />
            </Link>
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
