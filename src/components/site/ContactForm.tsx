import { useState } from "react";
import { toast } from "sonner";
import { btn } from "./Blocks";
import { cn } from "@/lib/utils";

const field =
  "w-full rounded-2xl border bg-card px-4 py-3.5 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30 sm:px-5 sm:text-sm";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-4 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        toast.success("Vielen Dank! Wir melden uns innerhalb eines Werktags.");
        (e.currentTarget as HTMLFormElement).reset();
      }}
    >
      <label className="block">
        <span className="sr-only">Name</span>
        <input required name="name" placeholder="Ihr Name *" className={field} />
      </label>
      <label className="block">
        <span className="sr-only">Unternehmen</span>
        <input name="company" placeholder="Unternehmen" className={field} />
      </label>
      <label className="block">
        <span className="sr-only">E-Mail</span>
        <input required type="email" name="email" placeholder="E-Mail-Adresse *" className={field} />
      </label>
      <label className="block">
        <span className="sr-only">Telefon</span>
        <input type="tel" name="phone" placeholder="Telefon" className={field} />
      </label>
      <label className="block sm:col-span-2">
        <span className="sr-only">Nachricht</span>
        <textarea required name="message" rows={5} placeholder="Worum geht es? *" className={cn(field, "resize-y")} />
      </label>
      <label className="flex items-start gap-3 text-xs text-muted-foreground sm:col-span-2">
        <input required type="checkbox" className="mt-0.5 size-4 shrink-0 accent-primary" />
        <span>Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu. *</span>
      </label>
      <div className="sm:col-span-2">
        <button type="submit" className={btn.primary}>
          {sent ? "Erneut senden" : "Nachricht senden"}
        </button>
      </div>
    </form>
  );
}
