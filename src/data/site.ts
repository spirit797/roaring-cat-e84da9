// Zentraler Inhaltsbaustein — alles Projektdaten an einem Ort.
// Für Bilder/Namen unten: echte Werte aus der bestehenden Kistler-IT-Site übernommen.

export const site = {
  name: 'Kistler-IT',
  domain: 'kistler-it.ch',
  tagline: 'Professioneller IT-Support für Firmen und Privatpersonen in Uster und Umgebung.',
  region: 'Region Zürich',
  location: 'Winterthurerstrasse 45, 8610 Uster',
  owner: 'Yves Kistler',
  phone: '+41 44 942 26 00',
  phoneHref: 'tel:+41449422600',
  mobile: '+41 77 938 30 88',
  mobileHref: 'tel:+41779383088',
  email: 'info@kistler-it.ch',
  emailHref: 'mailto:info@kistler-it.ch',
  calendly: 'https://calendly.com/kistler-it-info',
  nas: 'https://kistler-it.direct.quickconnect.to:5099',
};

// Echte, steuerbare Statusanzeige im Hero.
// state: 'online' | 'warning' | 'outage' | 'maintenance'  (vom Bot/Besitzer setzbar)
// message: optionale Zusatzmeldung (z. B. "Bekannte Störung im Raum Wetzikon.")
export const serviceStatus = {
  state: 'outage',
  region: site.region,
  message: 'Bekannte Störung bei Swisscom.',
  // Link wird nur bei state 'outage' (STOERUNG) eingeblendet.
  outageLink: 'https://allestörungen.ch/',
  outageLinkLabel: 'Aktuelle Netzstörungen prüfen',
};


// Abwesenheits-Banner: active auf true setzen, um den Hinweis einzublenden.
// Text einfach hier anpassen – erscheint dann oben auf der Seite.
export const absence = {
  active: false,
  text: 'Wir sind vom 24.12. bis 2.1. in den Ferien. In dieser Zeit sind wir nur eingeschränkt erreichbar – wir melden uns ab dem 3.1. bei Ihnen. Bei dringenden Anliegen schreiben Sie uns eine E-Mail, wir antworten so schnell wie möglich.',
};

export const stats = [
  { value: 4, suffix: '+', label: 'Jahre Erfahrung' },
  { value: 200, suffix: '+', label: 'Zufriedene Kunden' },
  { value: 24, suffix: 'h', label: 'Reaktionszeit' },
  { value: 100, suffix: '%', label: 'Lokaler Support' },
];

export const services = [
  { no: '01', icon: 'server', title: 'IT für Firmen',
    desc: 'Komplette IT-Betreuung für KMUs – von der Infrastruktur bis zum täglichen Support.',
    items: ['Server & Netzwerk', 'IT-Sicherheit', 'Cloud-Lösungen', 'Managed Services'] },
  { no: '02', icon: 'laptop', title: 'IT für Privatpersonen',
    desc: 'Hilfe bei allen Computer-Problemen – schnell, unkompliziert und zu fairen Preisen.',
    items: ['PC-Reparatur', 'Virenschutz', 'Datensicherung', 'Einrichtung & Setup'] },
  { no: '03', icon: 'wifi', title: 'Netzwerk & WLAN',
    desc: 'Stabile und sichere Netzwerke für Zuhause und im Büro.',
    items: ['WLAN-Optimierung', 'Router-Konfiguration', 'VPN-Setup', 'Netzwerk-Diagnose'] },
  { no: '04', icon: 'shield-check', title: 'IT-Sicherheit',
    desc: 'Schützen Sie Ihre Daten und Systeme vor Bedrohungen.',
    items: ['Antivirus & Firewall', 'Backup-Lösungen', 'Sicherheits-Audits', 'Schulungen'] },
  { no: '05', icon: 'cpu', title: 'Hardware & Reparatur',
    desc: 'Diagnose, Reparatur und Aufrüstung von PCs, Laptops und Macs.',
    items: ['Diagnose & Reparatur', 'RAM / SSD Aufrüstung', 'Bildschirm-Tausch', 'Datenrettung'] },
  { no: '06', icon: 'monitor', title: 'Fernwartung',
    desc: 'Schnelle Hilfe ohne Wartezeit – wir lösen Probleme remote in Minuten.',
    items: ['Sofort-Support', 'Software-Probleme', 'Updates & Wartung', 'Konfiguration'] },
];

export const plans = [
  { name: 'Privat', featured: true,
    desc: 'Für Privatpersonen mit gelegentlichem Bedarf',
    price: 130, unit: 'Pro Stunde',
    items: ['PC-Diagnose & Reparatur', 'Virenschutz einrichten', 'Software-Installation', 'WLAN-Einrichtung', 'Drucker-Einrichtung', 'Beratung Neugeräte'] },
  { name: 'Firmen', featured: false,
    desc: 'Perfekt für Ihr Unternehmen',
    price: 140, unit: 'Pro Stunde',
    items: ['Server-Betreuung', 'Netzwerk-Administration', 'IT-Sicherheitsberatung', 'Prioritäts-Support', 'Regelmässige Wartung', 'Internetzugänge, Netzwerkgeräte'] },
  { name: 'Fernwartung', featured: false,
    desc: 'Schnell und einfach zu einer Lösung Ihres Problems',
    price: 30, unit: 'Pro 15 Minuten',
    items: ['Unbegrenzter Support', 'Präventive Wartung', 'Hardware-Beschaffung', 'Notfall-Pikettdienst', 'Software-Installation', 'Persönlicher IT-Betreuer'] },
];

export const priceFootnote = '* Alle Preise in CHF inkl. MwSt. Gratis bis 10 km ab Uster, ab 10 km CHF 2.80 / Kilometer.';

export const fernwartung = {
  lead: 'Kein Problem ist zu klein. Wir verbinden uns sicher mit Ihrem Computer und lösen Ihr Problem direkt – ohne Wartezeit und ohne Anfahrt.',
  points: ['Sofortige Hilfe ohne Wartezeit', 'Sichere & verschlüsselte Verbindung', 'Sie sehen alles live auf Ihrem Bildschirm', 'Verbindung jederzeit trennbar'],
  app: { name: 'Supremo Remote Desktop', recommended: true,
    desc: 'Einfache und sichere Fernwartungssoftware. Bitte herunterladen und starten – wir verbinden uns dann mit Ihnen.',
    download: '/Supremo.exe',
    how: 'Laden Sie die App herunter, starten Sie sie und teilen Sie uns die angezeigte ID und das Passwort mit. Wir verbinden uns dann sicher mit Ihrem Gerät.' },
};

export const values = [
  { icon: 'zap', title: 'Schnell', desc: 'Kurze Reaktionszeiten und schnelle Lösungen – wir wissen, dass Zeit Geld ist.' },
  { icon: 'badge-check', title: 'Zuverlässig', desc: 'Sie können sich auf uns verlassen. Versprochen ist versprochen.' },
  { icon: 'message-circle', title: 'Persönlich', desc: 'Kein Callcenter, kein Ticketsystem – ein direkter Ansprechpartner für Sie.' },
  { icon: 'map-pin', title: 'Lokal', desc: 'Wir sind in Uster und Umgebung vor Ort – kurze Wege, schnelle Hilfe.' },
];

export const about = [
  'Kistler-IT ist ein lokales IT-Unternehmen mit Sitz in Uster. Seit über 4 Jahren betreuen wir Firmen und Privatpersonen in der Region Zürich mit persönlichem und kompetenten IT-Support.',
  'Unsere Stärke ist die persönliche Betreuung. Bei uns sind Sie keine Ticketnummer – wir kennen Sie und Ihre IT-Infrastruktur.',
  'Sauber unterwegs, sauber gelöst. Kistler-IT ist für Sie 100 % ökologisch unterwegs mit ÖV, E-Bike und E-Scooter.',
];
