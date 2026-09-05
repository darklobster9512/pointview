# Karriere-Detailseiten, Bewerbungsformular und Meta Pixel (nach Vorbild „codebricks“)

## Was sich ändert

**Neue Stelle: Online-Prozesstester:in (m/w/d)**
- Aus dem Referenzprojekt übernommen und auf PointView angepasst: Remote (Deutschland), Minijob/Teilzeit flexibel, 5–25 Std./Woche, 29 €/Stunde, „Sofort verfügbar“. Aufgaben: Geschäftsprozesse und digitale Anwendungen aus Nutzersicht durchtesten, Feedback dokumentieren, Verbesserungsvorschläge formulieren.
- Steht an erster Stelle der Liste.

**Stellen erweitert (alle 5 Stellen)**
- Jede Stelle erhält zusätzlich: Bereich, Arbeitsmodell, Arbeitszeit, Gehalt (Platzhalter-Spannen), Status („Sofort verfügbar“), ausführliche Beschreibung und „Was wir bieten“.

**Karriere-Übersicht (`/karriere`)**
- Die aufklappbaren Karten werden zu Stellenkarten mit Link zur Detailseite: Titel, Bereich-Pille, Status-Badge, Standort/Modell/Gehalt, Kurztext, „Details ansehen →“.

**Neu: Stellen-Detailseite (`/karriere/[stelle]`)** – für alle 5 Stellen
- Kopfbereich mit Breadcrumb (Start › Karriere › Stelle), Eyebrow „Karriere · Bereich“, Titel, Kurzbeschreibung.
- Zweispaltig: links „Über die Position“ plus nummerierte Abschnitte 01 Ihre Aufgaben / 02 Ihr Profil / 03 Was wir bieten (Listen mit nummerierten Strichen); rechts eine mitlaufende Eckdaten-Karte (Standort, Modell, Arbeitszeit, Gehalt) mit Button „Jetzt bewerben“ (führt zur Bewerbungsseite mit vorausgewählter Stelle) und E-Mail-Kontakt.
- CTA-Banner „Noch Fragen zur Rolle?“ mit „Jetzt bewerben“ und „Andere Stellen“.
- Unbekannte Stelle → Weiterleitung auf `/karriere`.

**Neu: Bewerbungsseite (`/karriere/bewerbung`)**
- Kopfbereich „Bewerben Sie sich in unter drei Minuten.“ im PointView-Stil.
- Formular in einer Karte: Vorname*, Nachname*, E-Mail*, Telefon*, Stelle (Auswahl, aus der Detailseite vorbelegt), Anstellungsart* (Vollzeit, Teilzeit, Minijob, Werkstudium), Datenschutzhinweis, Button „Bewerbung senden“ mit Ladezustand.
- Übermittlung an denselben externen Bewerbungsdienst wie im Referenzprojekt (gleicher Endpunkt, gleiche Branding-ID). Erfolg/Fehler als Toast-Meldung; nach Erfolg wird das Formular geleert.
- Beim Absenden wird das Meta-Pixel-Ereignis „Lead“ ausgelöst.

**Meta Pixel (sitewide)**
- Pixel-ID 1055052437112922 wird auf allen Seiten geladen (PageView) – wie im Referenzprojekt.

**Suchmaschinen/Vorschau**
- Detailseiten: Titel „{Stelle} – Job bei PointView“, Beschreibung = Kurztext, og:title/og:description, canonical/og:url auf die jeweilige Stelle, JSON-LD `JobPosting`.
- Bewerbungsseite: eigener Titel/Beschreibung.

Alle Gehälter, Arbeitszeiten und Stellentexte bleiben Platzhalter – vom Kunden zu bestätigen.

## Technische Details
- `src/data/site.ts`: `Job`-Typ um `area`, `model`, `hours?`, `salary?`, `status`, `description`, `offer` erweitern; Stelle `online-prozesstester` ergänzen (Texte aus `karriereStellen.ts` des Referenzprojekts, an Prozess-Fokus angepasst).
- Neue Routen: `src/routes/karriere.index.tsx` (bisherige `karriere.tsx` wird zur Index-Route), `src/routes/karriere.$slug.tsx`, `src/routes/karriere.bewerbung.tsx` (statische Route hat Vorrang vor `$slug`). `head()` über `pageMeta` plus zusätzliche `links`/`scripts` für canonical und JSON-LD; `pageMeta` optional um `path`-Parameter erweitern.
- Detailseite: `jobs.find(slug)` im `loader`, `notFound()`/`redirect` auf `/karriere` bei unbekanntem Slug.
- Bewerbung: Suchparameter `stelle` per `validateSearch`; Formular mit bestehenden Feld-Styles aus `ContactForm` (pillenförmig/rounded-2xl) und shadcn `Select`; `fetch` per `FormData` an `https://laozvnaupdecerpvwzmh.supabase.co/functions/v1/submit-application` mit `Authorization: Bearer <anon key>` und `branding_id` (Werte 1:1 aus dem Referenzprojekt; ist ein externer Dienst, kein eigenes Backend nötig). Toasts über `sonner`.
- Meta Pixel: Snippet in `__root.tsx` über `head().scripts` (inline `fbevents.js`-Loader, `init` + `PageView`), `<noscript>`-Pixel im `<body>`; globale Typdeklaration `window.fbq` in `src/vite-env.d.ts`; `window.fbq?.('track','Lead')` im Submit-Handler.
- Header/Footer bleiben; Karriere-CTA „Initiativ bewerben“ verlinkt künftig auf `/karriere/bewerbung`.
- Farben ausschließlich über Tokens (`primary`, `accent`, `dark`), keine grünen Akzente.
