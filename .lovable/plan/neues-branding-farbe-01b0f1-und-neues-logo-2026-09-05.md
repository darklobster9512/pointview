# Neues Branding: Farbe #01B0F1 und neues Logo

## Farben

Kein Grün mehr – überall. Die neue Markenfarbe **#01B0F1** (helles Blau) übernimmt alle bisherigen Grün-Stellen:
- Buttons („Gespräch vereinbaren", „Prozess-Check anfragen", Formular-Button)
- Eyebrow-Labels, Breadcrumb-Links, Nummern der Leistungskarten, Aufzählungspunkte, Häkchen-Kreise, Zeitleisten-Punkte
- Kategorie-Badges, Linksfarbe im Footer, aktive Menüpunkte, Hover-Zustände
- Verlaufsstart im Hero und in den CTA-Bannern
- weicher Schein hinter den Unterseiten-Überschriften
- Fokus-Ring der Formularfelder, Schatten der Buttons

Das bisherige Royalblau (zweiter Button im Hero, Verlaufsende, Hover) wird ebenfalls ersetzt. Damit der Verlauf nicht einfarbig wird, läuft er von **#01B0F1** ins **dunkle Logo-Blau (Navy, aus dem neuen Logo)**. Der blaue Hero-Button wird #01B0F1, der zweite Button bleibt anthrazit. Falls du lieber gar kein Navy willst und alles nur #01B0F1 sein soll, sag kurz Bescheid – dann wird der Verlauf ein Hell-/Dunkel-Verlauf derselben Farbe.

Anthrazit-Text, Weiß und Hellgrau bleiben unverändert.

## Logo

- Das hochgeladene Logo ersetzt die bisherige Wortmarke „POINTVIEW" mit grünem Punkt in Kopfzeile und Footer.
- Im dunklen Footer bekommt das Logo eine helle Variante (weiß/hellblau), damit es lesbar bleibt.
- Favicon (Browser-Tab-Symbol) wird aus dem Logo erzeugt.
- Die 404-/Fehlerseiten-Buttons nutzen automatisch die neue Farbe.

## Technische Umsetzung

- `src/styles.css`: `--primary`, `--primary-soft`, `--ring` auf oklch von #01B0F1; `--accent` auf Logo-Navy (ca. #0A1F5C); `--gradient-hero` neu (Hellblau → Navy); Button-Schattenfarben in `Blocks.tsx` anpassen
- Logo per `lovable-assets` aus dem Upload einbinden; `Logo.tsx` rendert das Bild (Header) bzw. eine per Bildbearbeitung erzeugte helle Variante (Footer)
- Favicon: quadratische PNG in `public/favicon.png`, Eintrag in `__root.tsx`, altes `favicon.ico` entfernen
- Prüfung: keine Verwendung von `bg-primary`-Grün mehr durch Token-Wechsel automatisch; hartkodierte oklch-Grünwerte in `Blocks.tsx` (Button-Shadow) ersetzen
