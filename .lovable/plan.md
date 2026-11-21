# Telefonnummer überall ausblenden

## Was gemacht wird
- Die Telefonnummer 040 573076460 wird im **Impressum**, auf der **Kontaktseite** und im **Footer** nicht mehr angezeigt.
- Die Nummer bleibt in den Firmendaten gespeichert, damit sie sich später mit einem Schalter wieder einblenden lässt.
- Das Telefon-Eingabefeld im Kontaktformular (für Besucher) und im Bewerbungsformular bleibt unverändert.

## Technische Details
- `src/data/site.ts`: neues Feld `company.showPhone = false`.
- `impressum.tsx`, `kontakt.tsx`, `Footer.tsx`: Telefon-Zeile/-Block nur rendern, wenn `company.showPhone` true ist (Kontakt: Mail-Block bekommt dann `mt-6` statt `mt-4`).
