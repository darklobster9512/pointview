# Bewerbungsübermittlung auf vic-automation umstellen

## Was sich ändert

Bewerbungen aus dem Formular unter `/karriere/bewerbung` gehen künftig an den Dienst des Referenzprojekts „vic-automation" und werden mit der Kennung **2de5a23d-72e1-48bc-bc0f-9e8c11f3181c** übermittelt. Der passende öffentliche Zugangsschlüssel des neuen Projekts wird mit übernommen, damit das Absenden funktioniert. Formularfelder, Ablauf und Meta Pixel bleiben unverändert.

## Technische Details

`src/routes/karriere.bewerbung.tsx` (einzige Fundstellen im Projekt):

- `BRANDING_ID = "2de5a23d-72e1-48bc-bc0f-9e8c11f3181c"`
- `API_URL = "https://gzgfyuftjvezqjkosntu.supabase.co/functions/v1/submit-application"`
- `ANON_KEY` auf den publishable/anon-Key des Projekts `gzgfyuftjvezqjkosntu` setzen (aus dem Referenzprojekt übernommen; öffentlicher Key, darf im Code stehen)

Die Funktion `submit-application` existiert im Referenzprojekt, die Feldnamen (`first_name`, `last_name`, `email`, `phone`, `employment_type`, `position`, `branding_id`, `street`, `zip`, `city`, `resume`) bleiben wie bisher.

Danach: Typprüfung laufen lassen und das Formular im Browser einmal absenden, um die Antwort des Dienstes zu bestätigen.
