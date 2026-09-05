# Telefonnummer 040 573076460 ergänzen

## Ist-Zustand
- In den Firmendaten ist keine Telefonnummer hinterlegt; Impressum, Kontaktseite und Footer zeigen daher nur die E-Mail-Adresse.

## Was gemacht wird
- Telefonnummer **040 573076460** zentral in den Firmendaten hinterlegen.
- **Impressum:** Im Abschnitt „Kontakt“ eine Zeile „Telefon: 040 573076460“ über der E-Mail ergänzen (anklickbar).
- **Kontaktseite:** In der Anschrift-Box unter der Adresse einen Telefon-Eintrag mit Telefon-Symbol ergänzen (anklickbar, vor der E-Mail).
- **Footer:** In der Spalte „Kontakt“ die Telefonnummer über der E-Mail anzeigen (anklickbar).

## Technische Details
- `src/data/site.ts`: `company.phone = "040 573076460"` und `company.phoneHref = "tel:+4940573076460"`.
- `src/routes/impressum.tsx`: Abschnitt „Kontakt“ um `Telefon: <a href={company.phoneHref}>` erweitern.
- `src/routes/kontakt.tsx`: `Phone`-Icon aus lucide-react, neuer Block analog zum Mail-Block.
- `src/components/site/Footer.tsx`: zusätzliche `<p>` mit `tel:`-Link in der Adress-Spalte.
- Kontrolle: Alle drei Stellen in der Vorschau prüfen; Typcheck.
