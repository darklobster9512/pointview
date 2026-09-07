# Bewerbungsübermittlung auf neuen Dienst umstellen

## Was sich ändert

Bewerbungen aus dem Formular unter `/karriere/bewerbung` gehen künftig an den neuen Dienst `gzgfyuftjvezqjkosntu.supabase.co` und werden mit der Kennung **2de5a23d-72e1-48bc-bc0f-9e8c11f3181c** übermittelt. Formularfelder, Ablauf und Meta Pixel bleiben unverändert.

Hinweis: Der bisher hinterlegte öffentliche Zugangsschlüssel gehört zum alten Dienst. Ich behalte ihn vorerst bei; falls der neue Dienst einen eigenen Schlüssel verlangt, schlägt das Absenden fehl – dann brauche ich den neuen öffentlichen Schlüssel (anon key) des neuen Projekts.

## Technische Details

- `src/routes/karriere.bewerbung.tsx`
  - Zeile 11: `BRANDING_ID = "2de5a23d-72e1-48bc-bc0f-9e8c11f3181c"`
  - Zeile 12: `API_URL = "https://gzgfyuftjvezqjkosntu.supabase.co/functions/v1/submit-application"`
  - `ANON_KEY` unverändert, bis ein neuer Schlüssel vorliegt.
- Einzige Fundstellen im Projekt; keine weiteren Anpassungen nötig.
