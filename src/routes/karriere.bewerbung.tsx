import { createFileRoute } from "@tanstack/react-router";
import { Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { btn, PageHero } from "@/components/site/Blocks";
import { jobs, type EmploymentType } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

// Externer Bewerbungsdienst (identisch zum Referenzprojekt)
const BRANDING_ID = "56aa260c-f3bc-44d3-a37b-ceb3ba01d2d9";
const API_URL = "https://laozvnaupdecerpvwzmh.supabase.co/functions/v1/submit-application";
const ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxhb3p2bmF1cGRlY2VycHZ3em1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NzEwNjUsImV4cCI6MjA5NDM0NzA2NX0.uXLnpeKILEDBoC8yCcX1ZL-hdlhFPUl-bVYcoxHKu2Y";

const employmentTypes: { value: EmploymentType; label: string }[] = [
  { value: "vollzeit", label: "Vollzeit" },
  { value: "teilzeit", label: "Teilzeit" },
  { value: "minijob", label: "Minijob" },
  { value: "werkstudium", label: "Werkstudium" },
];

export const Route = createFileRoute("/karriere/bewerbung")({
  validateSearch: (s: Record<string, unknown>): { stelle?: string } => {
    const v = s["stelle"];
    return typeof v === "string" && v ? { stelle: v } : {};
  },
  head: () =>
    pageMeta(
      "Jetzt bewerben | PointView GmbH",
      "In unter drei Minuten bei der PointView GmbH Hamburg bewerben: Kontaktdaten angeben, Stelle und Anstellungsart wählen, absenden. Wir melden uns kurzfristig.",
      "/karriere/bewerbung",
    ),
  component: Page,
});

const field =
  "w-full rounded-2xl border bg-background px-4 py-3.5 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30 sm:px-5 sm:text-sm";

function Page() {
  const { stelle } = Route.useSearch();
  const [submitting, setSubmitting] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const [position, setPosition] = useState(stelle ?? "");
  const job = jobs.find((j) => j.title === position);
  const allowed = job ? employmentTypes.filter((t) => job.employmentTypes.includes(t.value)) : employmentTypes;
  const [employment, setEmployment] = useState<string>(allowed.length === 1 ? allowed[0]!.value : "");

  function onPositionChange(title: string) {
    setPosition(title);
    const j = jobs.find((x) => x.title === title);
    const next = j ? employmentTypes.filter((t) => j.employmentTypes.includes(t.value)) : employmentTypes;
    setEmployment(next.length === 1 ? next[0]!.value : next.some((t) => t.value === employment) ? employment : "");
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    if (!get("vorname") || !get("nachname") || !get("email") || !get("telefon") || !get("anstellungsart")) {
      toast.error("Bitte alle Pflichtfelder ausfüllen.");
      return;
    }
    (window as Window & { fbq?: (...args: unknown[]) => void }).fbq?.("track", "Lead");
    setSubmitting(true);
    try {
      const body = new FormData();
      body.append("first_name", get("vorname"));
      body.append("last_name", get("nachname"));
      body.append("email", get("email"));
      body.append("phone", get("telefon"));
      body.append("employment_type", get("anstellungsart"));
      body.append("position", get("stelle"));
      body.append("branding_id", BRANDING_ID);
      body.append("street", "");
      body.append("zip", "");
      body.append("city", "");
      body.append("resume", "");
      const res = await fetch(API_URL, { method: "POST", headers: { Authorization: `Bearer ${ANON_KEY}` }, body });
      const data = (await res.json()) as { success?: boolean; error?: string };
      if (!data.success) throw new Error(data.error || "Unbekannter Fehler");
      toast.success("Bewerbung gesendet.", { description: "Wir melden uns innerhalb von 48 Stunden." });
      setFormKey((k) => k + 1);
      setPosition("");
      setEmployment("");
    } catch (err) {
      toast.error("Übermittlung fehlgeschlagen", {
        description: err instanceof Error ? err.message : "Bitte später erneut versuchen oder direkt per E-Mail.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Karriere", to: "/karriere" }, { label: "Bewerbung" }]}
        title="Bewerben Sie sich in unter drei Minuten."
        subtitle="Kurze Angaben genügen. Der Lebenslauf kann später nachgereicht werden – wir melden uns zuerst mit einem Telefonat."
        cta={null}
      />

      <section className="pb-14 sm:pb-20 lg:pb-28">
        <div className="container-site">
          <form key={formKey} onSubmit={onSubmit} className="mx-auto grid max-w-3xl gap-4 rounded-3xl border bg-card p-5 sm:grid-cols-2 sm:gap-5 sm:p-8 lg:p-12">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-dark">Vorname *</span>
              <input required name="vorname" autoComplete="given-name" className={field} />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-dark">Nachname *</span>
              <input required name="nachname" autoComplete="family-name" className={field} />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-dark">E-Mail *</span>
              <input required type="email" name="email" autoComplete="email" className={field} />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-dark">Telefon *</span>
              <input required type="tel" name="telefon" autoComplete="tel" className={field} />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-dark">Stelle</span>
              <select name="stelle" value={position} onChange={(e) => onPositionChange(e.target.value)} className={field}>
                <option value="">Bitte wählen</option>
                {jobs.map((j) => (
                  <option key={j.slug} value={j.title}>{j.title}</option>
                ))}
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-dark">Anstellungsart *</span>
              <select required name="anstellungsart" value={employment} onChange={(e) => setEmployment(e.target.value)} className={field}>
                <option value="" disabled>Bitte wählen</option>
                {allowed.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </label>
            <p className="text-xs text-muted-foreground sm:col-span-2">
              Mit dem Absenden erklären Sie sich mit der Verarbeitung Ihrer Daten gemäß unserer{" "}
              <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> einverstanden.
            </p>
            <div className="sm:col-span-2">
              <button type="submit" disabled={submitting} className={cn(btn.primary, "disabled:opacity-60")}>
                {submitting ? <><Loader2 className="size-5 animate-spin" /> Wird gesendet…</> : <>Bewerbung senden <Send className="size-5" /></>}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
