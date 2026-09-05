export const company = {
  name: "PointView GmbH",
  short: "PointView",
  since: 2003,
  email: "kontakt@pointview.gmbh",
  street: "Elbchaussee 485",
  city: "22587 Hamburg",
  register: "Amtsgericht Hamburg, HRB 88760",
  ceo: "Sven Howest",
  domain: "pointview.gmbh",
};

export const stats = [
  { value: "seit 2003", label: "am Markt – über 20 Jahre Erfahrung" },
  { value: "150+", label: "Beratungsprojekte begleitet" },
  { value: "60+", label: "Kunden aus Mittelstand und Industrie" },
  { value: "90%", label: "unserer Kunden beauftragen uns erneut" },
];

// Platzhalter-Logos – vor Veröffentlichung durch echte Kundenlogos (mit Einverständnis) ersetzen.
export const clients: { name: string; logo: string }[] = [
  { name: "Siemens", logo: siemensLogo.url },
  { name: "SAP", logo: sapLogo.url },
  { name: "Deutsche Telekom", logo: telekomLogo.url },
  { name: "Volkswagen", logo: volkswagenLogo.url },
  { name: "BMW", logo: bmwLogo.url },
  { name: "Mercedes-Benz", logo: mercedesLogo.url },
  { name: "Bosch", logo: boschLogo.url },
  { name: "Allianz", logo: allianzLogo.url },
  { name: "Lufthansa", logo: lufthansaLogo.url },
  { name: "Deutsche Bahn", logo: dbLogo.url },
  { name: "BASF", logo: basfLogo.url },
  { name: "adidas", logo: adidasLogo.url },
];

export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  subtitle: string;
  intro: string[];
  checks: string[];
  benefits: { title: string; text: string }[];
  process: { title: string; text: string }[];
  subservices: { title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "it-beratung",
    number: "01",
    title: "IT-Beratung",
    short: "Wir bewerten Ihre IT-Landschaft, Systeme und Anbieter neutral und leiten konkrete Entscheidungen ab.",
    subtitle:
      "Herstellerneutrale Beratung für IT-Strategie, Systemlandschaft und Investitionsentscheidungen – seit 2003.",
    intro: [
      "Viele Unternehmen wissen, dass ihre IT nicht optimal aufgestellt ist – aber nicht, wo sie anfangen sollen. Gewachsene Systeme, Insellösungen und unklare Verantwortlichkeiten machen jede Entscheidung schwer.",
      "Genau hier setzt unsere IT-Beratung an: **Wir schaffen Transparenz und übersetzen technische Fragen in belastbare Entscheidungsvorlagen.**",
    ],
    checks: [
      "welche Systeme heute welche Aufgaben übernehmen und wo Doppelstrukturen bestehen",
      "wie Daten zwischen Anwendungen fließen und wo Medienbrüche entstehen",
      "welche Risiken in Betrieb, Sicherheit und Lizenzierung bestehen",
      "welche Investitionen wirklich Nutzen bringen – und welche warten können",
      "wie eine realistische Roadmap für die nächsten 12 bis 36 Monate aussieht",
    ],
    benefits: [
      { title: "IT-Strategie entwickeln", text: "Wir leiten aus Ihren Unternehmenszielen eine klare IT-Strategie ab – mit Prioritäten, Budgetrahmen und Verantwortlichkeiten." },
      { title: "Systemlandschaft bewerten", text: "Wir analysieren Anwendungen, Schnittstellen und Infrastruktur und zeigen, wo Konsolidierung oder Ablösung sinnvoll ist." },
      { title: "Anbieter neutral vergleichen", text: "Wir begleiten Ausschreibungen und Anbieterauswahl – unabhängig, ohne Provisionen, mit nachvollziehbaren Kriterien." },
      { title: "IT-Sicherheit einordnen", text: "Wir bewerten Ihren Sicherheitsstand pragmatisch und priorisieren Maßnahmen nach Risiko und Aufwand." },
      { title: "Budget und Kosten steuern", text: "Wir machen laufende IT-Kosten transparent und identifizieren Einsparpotenziale bei Lizenzen, Verträgen und Betrieb." },
      { title: "Geschäftsführung beraten", text: "Wir sind Sparringspartner für Geschäftsführung und IT-Leitung – auf Augenhöhe und in verständlicher Sprache." },
    ],
    process: [
      { title: "Zielbild klären", text: "Wir verstehen Ihre Geschäftsziele, Engpässe und Rahmenbedingungen, bevor wir über Technik sprechen." },
      { title: "Ist-Analyse", text: "Wir erfassen Systeme, Schnittstellen, Verträge und Verantwortlichkeiten in strukturierten Interviews und Workshops." },
      { title: "Bewertung", text: "Wir bewerten Handlungsfelder nach Nutzen, Risiko und Aufwand und diskutieren die Ergebnisse mit Ihnen." },
      { title: "Roadmap", text: "Sie erhalten eine priorisierte Maßnahmenliste mit Zeitplan, Kostenschätzung und Entscheidungsbedarf." },
      { title: "Umsetzungsbegleitung", text: "Auf Wunsch begleiten wir Ausschreibungen, Projekte und Dienstleister in der Umsetzung." },
      { title: "Review", text: "Wir prüfen regelmäßig, ob die Maßnahmen wirken, und passen die Roadmap an neue Anforderungen an." },
    ],
    subservices: [
      { title: "IT-Strategieberatung", text: "Von der Vision zur konkreten Roadmap – abgestimmt auf Ihre Unternehmensgröße und Branche." },
      { title: "IT-Audit & Assessment", text: "Neutrale Bestandsaufnahme Ihrer IT mit klarer Bewertung und Handlungsempfehlungen." },
      { title: "Anbieter- und Systemauswahl", text: "Strukturierte Auswahlverfahren für ERP, CRM, DMS und Branchenlösungen." },
      { title: "Interims-IT-Leitung", text: "Wir übernehmen befristet Verantwortung, wenn Ihre IT-Leitung fehlt oder überlastet ist." },
    ],
  },
  {
    slug: "prozessanalyse",
    number: "02",
    title: "Prozessanalyse",
    short: "Wir machen Ihre Abläufe sichtbar, messen Durchlaufzeiten und decken Engpässe und Medienbrüche auf.",
    subtitle:
      "Wir dokumentieren und bewerten Ihre Geschäftsprozesse – und zeigen, wo Zeit, Geld und Nerven verloren gehen.",
    intro: [
      "Prozesse entstehen oft historisch: Jemand hat es irgendwann so gemacht, und seitdem läuft es so. Erst wenn Mitarbeitende wechseln, das Volumen wächst oder Fehler zunehmen, wird sichtbar, wie fragil viele Abläufe sind.",
      "Unsere Prozessanalyse bringt **Klarheit über Ist-Zustand, Schwachstellen und Potenziale** – als Grundlage für jede Optimierung oder Digitalisierung.",
    ],
    checks: [
      "wie ein Prozess tatsächlich abläuft – nicht wie er auf dem Papier steht",
      "wo Wartezeiten, Rückfragen und Doppelarbeit entstehen",
      "welche Systeme, Dokumente und Personen beteiligt sind",
      "welche Kennzahlen den Prozess beschreiben und wie sie sich messen lassen",
      "wo Medienbrüche, manuelle Übertragungen und Fehlerquellen liegen",
    ],
    benefits: [
      { title: "Prozesse dokumentieren", text: "Wir modellieren Ihre Abläufe verständlich in BPMN oder Swimlane-Darstellungen – nachvollziehbar für Fachbereich und IT." },
      { title: "Engpässe identifizieren", text: "Wir messen Durchlauf- und Liegezeiten und zeigen, an welchen Stellen Ihr Prozess wirklich stockt." },
      { title: "Schnittstellen klären", text: "Wir machen Übergaben zwischen Abteilungen, Systemen und Partnern sichtbar und bewerten deren Qualität." },
      { title: "Kennzahlen definieren", text: "Wir legen fest, wie Prozessleistung gemessen wird, damit Verbesserungen nachweisbar sind." },
      { title: "Risiken bewerten", text: "Wir erkennen Abhängigkeiten von Einzelpersonen, Tools und Wissen, das nur in Köpfen steckt." },
      { title: "Potenziale quantifizieren", text: "Wir beziffern, was Automatisierung oder Vereinfachung in Stunden und Euro bringen würde." },
    ],
    process: [
      { title: "Scope festlegen", text: "Gemeinsam wählen wir die Prozesse aus, die den größten Hebel für Ihr Unternehmen haben." },
      { title: "Beobachten & Interviewen", text: "Wir begleiten Mitarbeitende im Alltag, führen Interviews und sammeln Dokumente und Daten." },
      { title: "Modellieren", text: "Wir stellen den Ist-Prozess grafisch dar und validieren das Modell mit den Beteiligten." },
      { title: "Messen", text: "Wir erheben Durchlaufzeiten, Mengen und Fehlerquoten – aus Systemen oder per Stichprobe." },
      { title: "Bewerten", text: "Wir priorisieren Schwachstellen nach Auswirkung und Häufigkeit und bereiten Handlungsfelder auf." },
      { title: "Ergebnis präsentieren", text: "Sie erhalten eine Prozesslandkarte, eine Schwachstellenliste und konkrete Empfehlungen." },
    ],
    subservices: [
      { title: "Prozessaufnahme & Modellierung", text: "Strukturierte Erfassung Ihrer Kernprozesse in standardisierter Notation." },
      { title: "Prozess-Kennzahlen (KPI)", text: "Aufbau eines Kennzahlensystems zur laufenden Steuerung Ihrer Abläufe." },
      { title: "Schwachstellenanalyse", text: "Systematische Bewertung von Engpässen, Fehlerquellen und Abhängigkeiten." },
      { title: "Prozesslandkarte", text: "Gesamtüberblick über alle Kern-, Unterstützungs- und Führungsprozesse." },
    ],
  },
  {
    slug: "prozessoptimierung",
    number: "03",
    title: "Prozessoptimierung",
    short: "Wir gestalten Soll-Prozesse, automatisieren Routineaufgaben und verankern Verbesserungen dauerhaft im Alltag.",
    subtitle:
      "Vom analysierten Ist-Zustand zum schlanken, digital unterstützten Soll-Prozess – messbar und nachhaltig.",
    intro: [
      "Eine gute Analyse ist erst der Anfang. Der eigentliche Nutzen entsteht, wenn Prozesse tatsächlich einfacher, schneller und fehlerfreier werden – und das auch bleiben.",
      "Wir gestalten mit Ihnen **Soll-Prozesse, die im Alltag funktionieren**, wählen passende Werkzeuge aus und begleiten die Einführung bis zur Routine.",
    ],
    checks: [
      "welche Schritte entfallen, zusammengelegt oder automatisiert werden können",
      "welche Aufgaben von Software übernommen werden sollten – und welche bewusst nicht",
      "wie Verantwortlichkeiten und Freigaben schlanker geregelt werden",
      "welche Systeme angepasst oder verbunden werden müssen",
      "wie der neue Ablauf eingeführt und im Team verankert wird",
    ],
    benefits: [
      { title: "Soll-Prozesse gestalten", text: "Wir entwerfen gemeinsam mit Ihrem Team schlanke Zielprozesse – praxisnah statt theoretisch." },
      { title: "Routine automatisieren", text: "Wir identifizieren wiederkehrende Aufgaben und setzen Automatisierung mit Workflow-Tools oder Schnittstellen um." },
      { title: "Medienbrüche beseitigen", text: "Wir verbinden Systeme, ersetzen Excel-Listen und E-Mail-Ketten durch durchgängige digitale Abläufe." },
      { title: "Durchlaufzeiten verkürzen", text: "Wir reduzieren Liegezeiten und Rückfragen durch klare Zuständigkeiten und Standardisierung." },
      { title: "Qualität sichern", text: "Wir bauen Prüfschritte dort ein, wo sie Nutzen bringen, und entfernen sie dort, wo sie nur bremsen." },
      { title: "Veränderung begleiten", text: "Wir schulen Mitarbeitende, moderieren Widerstände und sorgen dafür, dass neue Abläufe gelebt werden." },
    ],
    process: [
      { title: "Ziele definieren", text: "Wir legen messbare Ziele fest: kürzere Durchlaufzeit, weniger Fehler, geringere Kosten." },
      { title: "Soll-Prozess entwerfen", text: "In Workshops entwickeln wir den Zielprozess und prüfen ihn an realen Fällen." },
      { title: "Werkzeuge auswählen", text: "Wir bewerten, ob bestehende Systeme ausreichen oder neue Tools sinnvoll sind." },
      { title: "Pilotieren", text: "Wir testen den neuen Ablauf in einem abgegrenzten Bereich und sammeln Erfahrungen." },
      { title: "Ausrollen", text: "Wir führen den Prozess unternehmensweit ein – mit Schulung, Dokumentation und Ansprechpartnern." },
      { title: "Messen & Nachsteuern", text: "Wir prüfen die Zielerreichung anhand der Kennzahlen und optimieren weiter." },
    ],
    subservices: [
      { title: "Soll-Prozessdesign", text: "Gestaltung schlanker Zielprozesse mit klaren Rollen und Verantwortlichkeiten." },
      { title: "Workflow-Automatisierung", text: "Digitalisierung von Freigaben, Formularen und Routineaufgaben." },
      { title: "Lean Office", text: "Übertragung bewährter Lean-Prinzipien auf Verwaltung und Dienstleistung." },
      { title: "Change Management", text: "Begleitung von Teams und Führungskräften durch die Veränderung." },
    ],
  },
  {
    slug: "internet-digitalisierung",
    number: "04",
    title: "Internet & Digitalisierung",
    short: "Wir konzipieren Webauftritte, Portale und digitale Services, die Ihre Prozesse nach außen verlängern.",
    subtitle:
      "Beratung und Konzeption für Websites, Kundenportale und digitale Services – strategisch gedacht, sauber umgesetzt.",
    intro: [
      "Das Internet ist längst kein Schaufenster mehr, sondern Teil Ihrer Wertschöpfung: Kunden bestellen, Partner melden Störungen, Bewerbende laden Unterlagen hoch. Jede dieser Interaktionen ist ein Prozess.",
      "Wir denken **Web und Prozesse zusammen** – von der Konzeption über die Anbieterauswahl bis zur Abnahme.",
    ],
    checks: [
      "welche digitalen Kontaktpunkte Ihre Kunden und Partner heute nutzen",
      "welche Anfragen sich über Portale und Self-Service abbilden lassen",
      "wie Webauftritt, CRM und interne Systeme verbunden werden",
      "welche Anforderungen an Datenschutz, Barrierefreiheit und Sicherheit gelten",
      "welche Agentur oder Plattform zu Ihrem Vorhaben passt",
    ],
    benefits: [
      { title: "Webauftritt konzipieren", text: "Wir entwickeln Struktur, Inhalte und Anforderungen für Ihre Website – als neutrale Instanz zwischen Ihnen und der Agentur." },
      { title: "Kundenportale planen", text: "Wir konzipieren Self-Service-Portale, die Anfragen, Bestellungen oder Störungen direkt in Ihre Prozesse leiten." },
      { title: "Systeme anbinden", text: "Wir sorgen dafür, dass Web-Formulare, Shops und Portale sauber mit ERP, CRM und Ticketsystemen sprechen." },
      { title: "Datenschutz einhalten", text: "Wir berücksichtigen DSGVO, Cookie-Regeln und Auftragsverarbeitung von Anfang an." },
      { title: "Anbieter steuern", text: "Wir begleiten Ausschreibung, Auswahl und Projektsteuerung von Agenturen und Softwareanbietern." },
      { title: "Erfolg messen", text: "Wir definieren, woran Sie den Erfolg Ihres digitalen Angebots erkennen, und richten das Reporting ein." },
    ],
    process: [
      { title: "Ziele & Zielgruppen", text: "Wir klären, was Ihr digitales Angebot leisten soll und für wen." },
      { title: "Anforderungen", text: "Wir erarbeiten ein Lastenheft mit Funktionen, Schnittstellen und rechtlichen Vorgaben." },
      { title: "Anbieterauswahl", text: "Wir holen Angebote ein, bewerten sie vergleichbar und empfehlen einen Partner." },
      { title: "Projektsteuerung", text: "Wir begleiten die Umsetzung, prüfen Zwischenstände und halten Termine und Budget im Blick." },
      { title: "Abnahme", text: "Wir testen strukturiert gegen die Anforderungen und dokumentieren offene Punkte." },
      { title: "Betrieb & Weiterentwicklung", text: "Wir unterstützen bei Betrieb, Auswertung und der kontinuierlichen Verbesserung." },
    ],
    subservices: [
      { title: "Website-Konzeption", text: "Struktur, Inhalte und Anforderungen für Unternehmenswebsites." },
      { title: "Kunden- und Partnerportale", text: "Self-Service-Lösungen, die Anfragen direkt in Ihre Abläufe leiten." },
      { title: "E-Commerce-Beratung", text: "Neutrale Beratung zu Shop-Systemen, Prozessen und Anbindung." },
      { title: "Agentursteuerung", text: "Wir vertreten Ihre Interessen gegenüber Dienstleistern." },
    ],
  },
  {
    slug: "softwareauswahl",
    number: "05",
    title: "Softwareauswahl & Einführung",
    short: "Wir finden die passende Software für Ihre Prozesse und begleiten die Einführung bis zum produktiven Betrieb.",
    subtitle:
      "Herstellerneutrale Auswahl von ERP, CRM, DMS und Branchenlösungen – strukturiert, vergleichbar, ohne Provisionen.",
    intro: [
      "Eine Softwareentscheidung begleitet Ihr Unternehmen zehn Jahre und länger. Trotzdem wird sie oft unter Zeitdruck, auf Basis von Herstellerpräsentationen und ohne klare Anforderungen getroffen.",
      "Wir sorgen dafür, dass **Ihre Prozesse die Software bestimmen – nicht umgekehrt.**",
    ],
    checks: [
      "welche Anforderungen wirklich kritisch sind und welche nur nice-to-have",
      "welche Anbieter zu Ihrer Größe, Branche und IT-Landschaft passen",
      "wie sich Angebote in Lizenz, Einführung und Betrieb vergleichen lassen",
      "welche Risiken in Migration, Schulung und Datenübernahme stecken",
      "wie die Einführung organisiert wird, ohne das Tagesgeschäft zu gefährden",
    ],
    benefits: [
      { title: "Anforderungen erheben", text: "Wir leiten aus Ihren Prozessen ein Lastenheft ab, das Anbieter wirklich vergleichbar macht." },
      { title: "Markt sondieren", text: "Wir kennen den Markt für ERP, CRM, DMS und Branchenlösungen und treffen eine fundierte Vorauswahl." },
      { title: "Angebote bewerten", text: "Wir bewerten Funktionen, Kosten und Anbieter nach transparenten Kriterien – nicht nach Präsentation." },
      { title: "Verträge prüfen", text: "Wir unterstützen bei Lizenzmodellen, SLAs und Vertragsverhandlungen aus Kundensicht." },
      { title: "Einführung steuern", text: "Wir übernehmen Projektleitung oder begleiten Ihr Projektteam durch Migration, Test und Go-live." },
      { title: "Akzeptanz sichern", text: "Wir planen Schulungen und Kommunikation, damit die neue Software auch genutzt wird." },
    ],
    process: [
      { title: "Anforderungsanalyse", text: "Wir erfassen fachliche, technische und organisatorische Anforderungen mit den Fachbereichen." },
      { title: "Marktsichtung", text: "Wir identifizieren passende Anbieter und erstellen eine Shortlist." },
      { title: "Ausschreibung", text: "Wir versenden ein strukturiertes Lastenheft und begleiten Anbieterpräsentationen." },
      { title: "Entscheidung", text: "Wir bewerten Angebote transparent und bereiten die Entscheidungsvorlage vor." },
      { title: "Einführung", text: "Wir steuern Projektplan, Datenmigration, Tests und Schulungen." },
      { title: "Go-live & Stabilisierung", text: "Wir begleiten den Produktivstart und die ersten Wochen im Betrieb." },
    ],
    subservices: [
      { title: "ERP-Auswahl", text: "Strukturierte Auswahl und Einführung von Warenwirtschafts- und ERP-Systemen." },
      { title: "CRM-Auswahl", text: "Passende Lösungen für Vertrieb, Marketing und Service." },
      { title: "Dokumentenmanagement", text: "Auswahl und Einführung von DMS- und Archivsystemen." },
      { title: "Projektleitung Einführung", text: "Wir übernehmen die Steuerung Ihres Einführungsprojekts." },
    ],
  },
];

/* ---------- Team (Platzhalter – vom Kunden nachzuliefern) ---------- */

export type TeamMember = {
  name: string;
  role: string;
  text: string;
  focus: string[];
};

export const team: TeamMember[] = [
  {
    name: "Sven Howest",
    role: "Geschäftsführer",
    text: "Gründer der PointView GmbH. Übersetzt technische Fragen in unternehmerische Entscheidungen und begleitet Kunden persönlich durch Analyse, Auswahl und Einführung.",
    focus: ["IT-Strategie", "Prozessoptimierung", "Softwareauswahl"],
  },
  {
    name: "Katrin Lindemann",
    role: "Senior Consultant Prozessanalyse",
    text: "Seit 2011 bei PointView. Nimmt Prozesse dort auf, wo sie gelebt werden – in Disposition, Buchhaltung und Produktion.",
    focus: ["Prozessanalyse", "Kennzahlen", "Workshops"],
  },
  {
    name: "Jonas Petersen",
    role: "IT-Consultant ERP & Schnittstellen",
    text: "Kennt ERP-, CRM- und DMS-Systeme aus über 30 Einführungsprojekten und sorgt dafür, dass Daten sauber zwischen Anwendungen fließen.",
    focus: ["ERP", "Schnittstellen", "Datenmigration"],
  },
  {
    name: "Merle Brandt",
    role: "Consultant Digitalisierung",
    text: "Konzipiert Portale, Formulare und digitale Abläufe – immer mit Blick darauf, was Mitarbeitende und Kunden wirklich nutzen.",
    focus: ["Kundenportale", "Workflow-Automatisierung", "UX"],
  },
  {
    name: "Tobias Reimers",
    role: "Projektleiter Softwareeinführung",
    text: "Steuert Einführungsprojekte von der Anbieterauswahl bis zum Go-live und hält Zeitplan, Budget und Nerven zusammen.",
    focus: ["Projektleitung", "Vertragsprüfung", "Change Management"],
  },
  {
    name: "Tobias Krüger",
    role: "Recruiting & People",
    text: "Verantwortlich für Recruiting und Onboarding. Erster Ansprechpartner für Bewerberinnen und Bewerber – von der ersten Nachricht bis zum ersten Arbeitstag.",
    focus: ["Recruiting", "Onboarding", "Employer Branding"],
  },
];

export const teamValues = [
  { title: "Klartext", text: "Wir sagen, was wir sehen – auch wenn es unbequem ist. Empfehlungen begründen wir nachvollziehbar." },
  { title: "Verantwortung", text: "Wer bei uns ein Projekt übernimmt, bleibt bis zum Ergebnis dran. Keine Übergabe an die zweite Reihe." },
  { title: "Pragmatismus", text: "Wir suchen die einfachste Lösung, die funktioniert – nicht die eindrucksvollste." },
  { title: "Partnerschaft", text: "Viele Kunden begleiten wir seit über zehn Jahren. Das geht nur mit Vertrauen auf beiden Seiten." },
];

/* ---------- Karriere (Platzhalter – vom Kunden nachzuliefern) ---------- */

export const careerBenefits = [
  { title: "Flexible Arbeitszeiten", text: "Vertrauensarbeitszeit und Rücksicht auf Familie, Studium oder Ehrenamt." },
  { title: "Homeoffice & Remote", text: "Arbeiten von zu Hause, aus dem Büro an der Elbchaussee oder beim Kunden – je nach Projektphase." },
  { title: "Weiterbildung", text: "Jährliches Budget für Schulungen, Zertifizierungen und Konferenzen." },
  { title: "Kurze Wege", text: "Kleines Team, direkte Kommunikation mit der Geschäftsführung, schnelle Entscheidungen." },
  { title: "Deutschlandticket", text: "Wir übernehmen das Deutschlandticket oder bezuschussen Ihr Fahrrad." },
  { title: "Moderne Ausstattung", text: "Notebook und Smartphone Ihrer Wahl, ergonomischer Arbeitsplatz, aktuelle Tools." },
];

export type Job = {
  slug: string;
  title: string;
  location: string;
  type: string;
  start: string;
  short: string;
  tasks: string[];
  profile: string[];
};

export const jobs: Job[] = [
  {
    slug: "senior-consultant-prozessoptimierung",
    title: "Senior Consultant Prozessoptimierung (m/w/d)",
    location: "Hamburg / Remote",
    type: "Vollzeit",
    start: "ab sofort",
    short: "Sie analysieren Geschäftsprozesse im Mittelstand, gestalten Soll-Abläufe und begleiten die Umsetzung bis ins Tagesgeschäft.",
    tasks: [
      "Aufnahme und Bewertung von Geschäftsprozessen gemeinsam mit den Fachbereichen unserer Kunden",
      "Moderation von Workshops und Erarbeitung priorisierter Maßnahmenpläne",
      "Begleitung der Umsetzung inklusive Kennzahlen und Erfolgskontrolle",
      "Fachliche Führung kleiner Projektteams",
    ],
    profile: [
      "Mindestens fünf Jahre Erfahrung in Prozessberatung, Organisation oder Operations",
      "Sicherer Umgang mit BPMN, Kennzahlensystemen und gängigen Analyse-Tools",
      "Freude daran, mit Menschen in Disposition, Produktion und Verwaltung zu arbeiten",
      "Sehr gute Deutschkenntnisse, Reisebereitschaft innerhalb Norddeutschlands",
    ],
  },
  {
    slug: "it-consultant-erp",
    title: "IT-Consultant ERP & Softwareauswahl (m/w/d)",
    location: "Hamburg",
    type: "Vollzeit oder Teilzeit",
    start: "ab 01.01.2027",
    short: "Sie begleiten Kunden herstellerneutral bei Auswahl und Einführung von ERP-, CRM- und DMS-Systemen.",
    tasks: [
      "Erhebung von Anforderungen und Erstellung von Lastenheften",
      "Marktsichtung, Anbietervergleich und Vorbereitung von Entscheidungsvorlagen",
      "Projektleitung in Einführungsprojekten inklusive Datenmigration und Tests",
      "Prüfung von Angeboten und Verträgen gemeinsam mit unseren Kunden",
    ],
    profile: [
      "Erfahrung mit mindestens einem ERP-System auf Beratungs- oder Anwenderseite",
      "Verständnis für Schnittstellen, Datenmodelle und Betriebsmodelle (On-Premises, Cloud)",
      "Strukturierte Arbeitsweise und klare Kommunikation gegenüber Geschäftsführung und Fachbereich",
      "Abgeschlossenes Studium oder vergleichbare Qualifikation",
    ],
  },
  {
    slug: "werkstudent-digitalisierung",
    title: "Werkstudent:in Digitalisierung & Prozessanalyse",
    location: "Hamburg / Remote",
    type: "15–20 Std./Woche",
    start: "ab sofort",
    short: "Sie unterstützen unser Team bei Prozessaufnahmen, Datenauswertungen und der Vorbereitung von Kundenterminen.",
    tasks: [
      "Aufbereitung von Prozessdokumentationen und Kennzahlen",
      "Recherche zu Software-Anbietern und Marktentwicklungen",
      "Vorbereitung von Workshops und Präsentationen",
      "Mitarbeit an internen Digitalisierungsprojekten",
    ],
    profile: [
      "Laufendes Studium in Wirtschaftsinformatik, BWL, Wirtschaftsingenieurwesen oder ähnlich",
      "Sicherer Umgang mit Excel bzw. Google Sheets, idealerweise erste Erfahrung mit BPMN",
      "Neugier auf Abläufe in Unternehmen und Freude an klarer Dokumentation",
      "Mindestens noch zwei Semester Studiendauer",
    ],
  },
  {
    slug: "initiativbewerbung",
    title: "Initiativbewerbung",
    location: "Hamburg / Remote",
    type: "flexibel",
    start: "jederzeit",
    short: "Keine passende Stelle dabei? Wenn Sie Prozesse, IT und Menschen zusammenbringen möchten, freuen wir uns auf Ihre Nachricht.",
    tasks: [
      "Erzählen Sie uns, welche Themen Sie antreiben und was Sie bei PointView bewegen möchten",
      "Wir melden uns innerhalb einer Woche mit einer ehrlichen Einschätzung",
    ],
    profile: [
      "Erfahrung in Beratung, IT, Organisation oder Projektmanagement",
      "Lust auf ein kleines Team mit direktem Kundenkontakt",
    ],
  },
];

export const applicationSteps = [
  { title: "Bewerbung", text: "Lebenslauf und ein paar Sätze zu Ihrer Motivation per E-Mail – ein Anschreiben brauchen wir nicht." },
  { title: "Kennenlernen", text: "Ein 30-minütiges Videogespräch mit der Geschäftsführung, um gegenseitige Erwartungen zu klären." },
  { title: "Fachgespräch", text: "Wir besprechen einen echten Fall aus unserer Praxis – gemeinsam mit einem Mitglied des Teams." },
  { title: "Entscheidung", text: "Innerhalb einer Woche nach dem Fachgespräch erhalten Sie eine Rückmeldung und ein Angebot." },
];
