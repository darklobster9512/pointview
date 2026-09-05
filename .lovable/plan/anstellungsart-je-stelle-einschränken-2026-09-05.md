# Anstellungsart je Stelle einschränken

Auf der Bewerbungsseite zeigt „Anstellungsart“ derzeit für jede Stelle alle vier Optionen (Vollzeit, Teilzeit, Minijob, Werkstudium). Künftig richtet sich die Auswahl nach der gewählten Stelle:

| Stelle | Auswahl |
| --- | --- |
| Online-Prozesstester:in | Minijob, Teilzeit |
| Senior Consultant Prozessoptimierung | Vollzeit |
| IT-Consultant ERP & Softwareauswahl | Vollzeit, Teilzeit |
| Werkstudent:in Digitalisierung | Werkstudium |
| Initiativbewerbung / keine Stelle gewählt | alle vier |

Verhalten:
- Wird die Stelle im Formular gewechselt, aktualisiert sich die Liste sofort; eine nicht mehr passende Auswahl wird zurückgesetzt.
- Gibt es nur eine Option, ist sie vorausgewählt.
- Die Stellen-Detailseiten und der Versand bleiben unverändert.

## Technische Details
- `src/data/site.ts`: `Job` um `employmentTypes: ("vollzeit" | "teilzeit" | "minijob" | "werkstudium")[]` erweitern und bei allen fünf Stellen pflegen.
- `src/routes/karriere.bewerbung.tsx`: Stellen-Select wird kontrolliert (`useState`, initial aus `stelle`-Suchparameter); Anstellungsart-Optionen aus dem passenden Job gefiltert, sonst Vollliste; Anstellungsart ebenfalls kontrolliert, damit sie bei Stellenwechsel zurückgesetzt bzw. bei nur einer Option vorbelegt wird.
