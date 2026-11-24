# Bewerbungsdienst auf neue Adresse umstellen

## Was sich ändert
Bewerbungen aus `/karriere/bewerbung` werden künftig an `https://dgkailowvrbugapykyan.supabase.co` gesendet. Kennung (2de5a23d-…), Formularfelder, Ablauf und Meta Pixel bleiben unverändert.

## Wichtig
Der bisherige Zugangsschlüssel gehört zum alten Dienst. Damit das Absenden beim neuen Dienst klappt, wird dessen öffentlicher Zugangsschlüssel (anon/publishable key) benötigt. Bitte beim Freigeben mitschicken – ohne ihn wird nur die Adresse geändert, und das Absenden schlägt voraussichtlich fehl.

## Technische Details
`src/routes/karriere.bewerbung.tsx`:
- `API_URL = "https://dgkailowvrbugapykyan.supabase.co/functions/v1/submit-application"`
- `ANON_KEY` auf den Key des Projekts `dgkailowvrbugapykyan` setzen (sofern geliefert)

Danach Typprüfung und einmal testweise absenden.
