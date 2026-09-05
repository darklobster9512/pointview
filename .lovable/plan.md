# PointView GmbH – Website im Scalo-Stil

Neue Unternehmenswebsite für die PointView GmbH (Hamburg, seit 2003, IT- und Internetberatung mit Fokus auf Prozessanalyse und -optimierung). Look & Feel orientiert sich an scalosoft.com; Inhalte auf Deutsch.

## Style-Analyse scalosoft.com

Was die Seite (Startseite + Unterseiten wie AI Consulting, Services) ausmacht:

**Farben**
- Mintgrün (ca. #33D48A) als Markenfarbe: Logo-Akzent, primäre Buttons ("Let's Talk"), Breadcrumb-Links, Verlaufsstart im Hero
- Royalblau (ca. #1E3AE6): zweiter Button im Hero, Verlaufsende, Hover-Zustände
- Anthrazit (ca. #333333): Überschriften, sekundärer Button ("Contact" / "Discuss project"), Fließtext
- Hintergründe: reines Weiß und sehr helles Grau (#F7F8FA) im Wechsel; nur die Hero-Fläche der Startseite ist flächig farbig (Grün→Blau-Verlauf über Foto mit Farbüberlagerung)

**Typografie**
- Eine Schrift durchgehend: Poppins (geometrische Sans). Überschriften Bold, sehr groß (Hero ca. 64px, Sektions-H2 ca. 56px), enge Zeilenhöhe; Fließtext Regular 16–18px, luftig
- Kleine Eyebrow-Labels über H2 ("Who We Are", "Geographic Focus")

**Formen & Komponenten**
- Alles pillenförmig: Buttons (voll gerundet, ca. 56px hoch, kräftiges Padding), Logo-Leiste als weiße Pille mit weichem Schatten, Karten mit großem Radius (24px+)
- Dekorative Elemente: feine "Leiterbahn"-Linien mit Punkten (Circuit-Muster) im Hero; auf Unterseiten weiche, unscharfe grüne Bogen-/Blob-Formen hinter der Überschrift
- Nummerierte Leistungs-Karten (01, 02, 03 …) mit Titel, Kurztext und "Explore"-Link
- Kennzahlen-Block ("Scalo in Numbers": 19+, 750+, 600+ …) in großer Zahl + kleiner Beschreibung
- Zitat-Sektion mit Portraitfoto, Auszeichnungs-Logos, Kunden-Logo-Slider
- Sticky weiße Navigation: Logo links, Menüpunkte mit Dropdown-Pfeilen, rechts dunkle Pillen-Schaltfläche "Contact" + Sprachwahl
- Unterseiten-Aufbau: Breadcrumb → große H1 links + Untertitel + grüner Button → Logo-Leiste → lange Text-Sektionen mit H2, Listen, 6er-Raster aus Nutzen-Karten, nummerierter Prozess (1.–6.), Kontaktformular am Seitenende
- Footer dunkel (Anthrazit) mit mehreren Linkspalten, Adresse, Zertifikaten

## Übertragung auf PointView

Gleiche Sprache, eigene Inhalte:
- Hero: „Ihr Partner für IT-Beratung und Prozessoptimierung" o. ä., zwei Buttons (Blau: „Projekt besprechen", Anthrazit: „Leistungen ansehen"), Grün→Blau-Verlauf mit Circuit-Muster, Foto mit Farbüberlagerung (generiertes Bild)
- Kennzahlen: „seit 2003", „20+ Jahre Erfahrung" – weitere Zahlen (Projekte, Kunden) bitte nachreichen, ich setze Platzhalter
- Nummerierte Leistungskarten für die Kernleistungen
- Zitat von Sven Howest (Geschäftsführer) mit Portrait-Platzhalter
- Kunden-Logo-Leiste als Platzhalter-Slider (Logos nachreichen)
- Standort-Sektion „Aus Hamburg. Für Unternehmen in ganz Deutschland."

## Seitenstruktur (volle Struktur)

```text
/                         Startseite
/leistungen               Leistungs-Übersicht (Karten-Raster)
/leistungen/it-beratung          Detailseite
/leistungen/prozessanalyse       Detailseite
/leistungen/prozessoptimierung   Detailseite
/leistungen/internet-digitalisierung  Detailseite
/leistungen/softwareauswahl      Detailseite
/ueber-uns                Team, Geschichte seit 2003, Werte
/referenzen               Projektbeispiele (Kartenliste, 3 Beispiele als Platzhalter)
/referenzen/$slug         Einzelne Referenz
/blog                     Artikelliste (3 Platzhalter-Artikel)
/blog/$slug               Artikelseite
/kontakt                  Kontaktformular, Adresse, Karte-Platzhalter
/impressum                Pflichtangaben (HRB 88760, Amtsgericht Hamburg, GF Sven Howest)
/datenschutz              Platzhalter-Text
```

Navigation: Leistungen (Dropdown mit den 5 Detailseiten), Über uns, Referenzen, Blog, dunkle Pille „Kontakt". Mobile: Burger-Menü mit Akkordeon.

Leistungsdetailseiten folgen alle demselben Scalo-Muster: Breadcrumb, H1 + Untertitel + grüner Button, Logo-Leiste, Einleitung, „Wann hilft das?"-Raster (6 Karten), Prozess in 6 Schritten, Unterleistungen, Kontakt-CTA.

## Technische Umsetzung

- Design-Tokens in `src/styles.css` (oklch): `--primary` Mintgrün, `--accent` Royalblau, `--foreground` Anthrazit, `--muted` Hellgrau; zusätzlich `--gradient-hero`, `--shadow-pill`; `--radius` 1.5rem, Buttons `rounded-full`
- Poppins per `<link>` in `src/routes/__root.tsx`, `--font-sans` im `@theme`
- Gemeinsame Bausteine in `src/components/site/`: `Header` (sticky, Dropdown), `Footer`, `Hero`, `CircuitPattern` (SVG), `LogoStrip`, `NumberedServiceCard`, `StatsRow`, `QuoteBlock`, `ProcessSteps`, `BenefitGrid`, `CtaBanner`, `ContactForm` (Formular vorerst ohne Versand-Backend; kann später an Lovable Cloud/E-Mail angebunden werden)
- Inhalte (Leistungen, Referenzen, Blog) als statische Daten in `src/data/` – Detailrouten `$slug` lesen daraus
- Jede Route mit eigenem `head()` (Titel, Beschreibung, og-Tags, Deutsch)
- Bilder: Hero-Foto, Team-/Büro-Bild, Portrait-Platzhalter per Bildgenerierung in `src/assets/`
- Root-Layout in `__root.tsx` rendert Header + Footer um `<Outlet />`

## Offene Punkte (Platzhalter, bitte später liefern)

- Logo der PointView GmbH (sonst Wortmarke „POINTVIEW" mit grünem Akzent im Scalo-Stil)
- Echte Kennzahlen, Kundenlogos, Referenztexte, Portraitfoto
- Telefonnummer und Datenschutztext
