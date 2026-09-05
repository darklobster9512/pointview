# USt-IdNr. ins Impressum eintragen

## Ist-Zustand
- Das Impressum zeigt den Abschnitt „Umsatzsteuer-ID“ nur, wenn in den Firmendaten ein Wert hinterlegt ist. Aktuell ist das Feld leer, daher fehlt der Abschnitt.

## Was gemacht wird
- Die USt-IdNr. **DE226931948** wird in den Firmendaten eingetragen.
- Dadurch erscheint im Impressum automatisch der Abschnitt:
  „Umsatzsteuer-ID – Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE226931948“

## Technische Details
- `src/data/site.ts`: `company.vatId` von `""` auf `"DE226931948"` setzen; der Hinweis-Kommentar entfällt.
- `src/routes/impressum.tsx` bleibt unverändert (rendert die Zeile bereits bei gesetztem Wert).
- Kontrolle: Impressum-Seite aufrufen und Abschnitt prüfen.
