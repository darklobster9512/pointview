# Referenzen & Blog entfernen, Team- und Karriere-Seite ergänzen

## Was sich ändert

**Entfernt**
- Seiten `/referenzen`, `/referenzen/…`, `/blog`, `/blog/…` samt Links in Kopf- und Fußzeile.
- Die zugehörigen Beispieldaten (Fallstudien, Artikel) werden aus der Datenbasis gelöscht.

**Neu: Unser Team (`/team`)**
- Kopfbereich im bekannten Stil (Breadcrumb, Titel, Untertitel).
- Kurzer Intro-Absatz: „Ein kleines, erfahrenes Team aus Hamburg“.
- Raster mit 6 Team-Mitgliedern (Platzhalter-Namen), je Karte: Foto-Platzhalter (Initialen auf Verlauf), Name, Rolle, 1–2 Sätze, Schwerpunkte als Pillen. Der Geschäftsführer (bereits in den Firmendaten hinterlegt) steht an erster Stelle und bekommt das vorhandene Portraitbild.
- Abschnitt „So arbeiten wir“ mit 3–4 Werten (Klartext, Verantwortung, Pragmatismus, Partnerschaft).
- Hinweis-Kasten mit Link auf die Karriere-Seite („Wir wachsen – werden Sie Teil des Teams“).
- Abschließendes CTA-Banner.

**Neu: Karriere (`/karriere`)**
- Kopfbereich + Einleitung, warum PointView als Arbeitgeber.
- Vorteile-Raster (6 Punkte, z. B. flexible Arbeitszeiten, Homeoffice, Weiterbildung, kurze Wege, HVV-Ticket, moderne Ausstattung).
- Liste mit 4 offenen Stellen (Platzhalter): z. B. Senior Consultant Prozessoptimierung (m/w/d), IT-Consultant ERP (m/w/d), Werkstudent:in Digitalisierung, Initiativbewerbung. Je Karte: Titel, Standort/Pensum/Start, Kurzbeschreibung, aufklappbare Details (Aufgaben, Profil), Button „Jetzt bewerben“ (Mailto an die Kontaktadresse mit vorbelegtem Betreff).
- Bewerbungsprozess in 4 Schritten (bestehende Prozess-Schritte-Komponente).
- CTA-Banner „Nichts Passendes dabei? Initiativ bewerben“.

**Navigation**
- Kopfzeile: Leistungen · Über uns · Team · Karriere · Kontakt.
- Fußzeile: Referenzen/Blog durch Team/Karriere ersetzen.
- „Über uns“ erhält einen Link/Button „Unser Team kennenlernen“.

Alle Namen, Stellen und Vorteile sind Mock-Daten und als solche im Code markiert – vom Kunden nachzuliefern.

## Technische Details
- Löschen: `src/routes/referenzen.index.tsx`, `referenzen.$slug.tsx`, `blog.index.tsx`, `blog.$slug.tsx`; `caseStudies`, `posts` und deren Typen aus `src/data/site.ts`.
- Neu: `src/routes/team.tsx`, `src/routes/karriere.tsx` mit eigenem `head()` über `pageMeta`.
- Daten: `team: TeamMember[]`, `jobs: Job[]`, `benefits`, `values` in `src/data/site.ts`.
- Wiederverwendung von `PageHero`, `Section`, `Eyebrow`, `H2`, `BenefitGrid`, `ProcessSteps`, `CtaBanner`; Farben ausschließlich über Tokens (`primary`, `accent`, `dark`), keine grünen Akzente.
- Stellen-Details als `<details>`/Accordion, kein Backend nötig.
- `Header.tsx`, `Footer.tsx`, `ueber-uns.tsx` anpassen; `routeTree.gen.ts` regeneriert sich automatisch.
