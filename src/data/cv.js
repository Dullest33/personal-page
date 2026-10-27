// Alle inhoud van de site staat hier. Pas tekst aan op deze plek, niet in de componenten.

export const profile = {
  name: 'Yuk Sui Man',
  role: 'Software Engineering-student',
  tagline: 'Full-stack & mobiele ontwikkelaar',
  location: 'Beverwijk',
  email: 'yuksui.man@outlook.com',
  phone: '+31 6 84498760',
  phoneHref: '+31684498760',
  github: { label: 'github.com/dullest33', url: 'https://github.com/dullest33' },
  linkedin: { label: 'linkedin.com/in/yuksuiman', url: 'https://www.linkedin.com/in/yuksuiman' },
  summary:
    'Software Engineering-student (HvA) die complete producten bouwt, van mobiele app tot server en infrastructuur. In mijn vrije tijd werk ik aan eigen programmeerprojecten, zoals een privacyvriendelijk alternatief voor iCloud en Google Photos. Ik zoek een stage of werkplek om aan echte producten bij te dragen.',
  roles: ['Flutter-apps', 'Electron-desktopapps', 'Node.js-servers', 'Vue-webapps', 'Roblox-games'],
}

export const featured = {
  name: 'Foto-backup op eigen hardware',
  subtitle: 'Een privacyvriendelijk alternatief voor iCloud en Google Photos',
  period: '2026 – heden',
  kind: 'In ontwikkeling · in mijn vrije tijd',
  intro:
    "Op dit moment bouw ik in mijn vrije tijd, in mijn eentje, een cross-platform fotogalerij en backup-app waarmee je je foto's en video's veilig op je eigen pc bewaart in plaats van in de cloud. Opgezet als pnpm-monorepo met vijf packages: mobiele app, desktopapp, lokale server, relay-server en gedeelde types.",
  stack: ['Flutter / Dart', 'TypeScript', 'Node.js', 'Fastify', 'Electron', 'SQLite', 'libsodium', 'TLS'],
  features: [
    {
      title: 'Mobiele app voor iOS en Android',
      text: 'Snelle galerij in Flutter met foto- en videobewerking (filters, bijsnijden, trimmen), albums, herinneringen en zoeken. Werkt ook zelfstandig, zonder pc.',
      tag: 'Flutter',
    },
    {
      title: 'On-device AI',
      text: 'Gezichtsherkenning voor mensen en huisdieren, tekstherkenning, automatische categorieën en semantisch zoeken. Alles draait lokaal op de telefoon.',
      tag: 'Privacy',
    },
    {
      title: 'Desktopapp en lokale server',
      text: 'Electron-app voor Windows met tray-icoon, auto-update en installer. Fastify en SQLite met content-addressed opslag, deduplicatie, hervatbare uploads en integriteitscontrole.',
      tag: 'Electron · Fastify',
    },
    {
      title: 'Zelf gedeployde relay-server',
      text: 'De pc houdt een uitgaande verbinding open, zodat de app overal werkt zonder port forwarding. TLS blijft end-to-end met certificate pinning: de relay ziet alleen versleutelde data.',
      tag: 'Netwerk',
    },
    {
      title: 'Koppelen en beveiliging',
      text: 'Koppelen via QR-code met kortlevende, ondertekende tokens. Elk apparaat heeft een Ed25519-sleutel en elk verzoek draagt een sessietoken.',
      tag: 'Security',
    },
    {
      title: 'Onderbouwde architectuur',
      text: 'Keuzes vastgelegd en afgewogen, zoals een blinde relay in plaats van WebRTC, zodat het bestaande HTTPS-protocol, hervatbare uploads en videostreaming intact blijven.',
      tag: 'Ontwerp',
    },
  ],
  principles: [
    "Foto's zijn onvervangbaar: hervatbare uploads, deduplicatie en integriteitscontrole zijn de basis.",
    'Opslag blijft op de hardware van de gebruiker; de relay is alleen een brug.',
    'Geen netwerkkennis nodig: geen IP-adressen, poorten of Docker voor de gebruiker.',
  ],
}

export const experience = [
  {
    role: 'Product design & marketing',
    org: 'SafeWays (startup)',
    period: 'feb 2026 – aug 2026',
    points: [
      'Navigatie-app voor vrouwenveiligheid: UI-ontwerp en interactieve mockups gemaakt in Figma.',
      'Het concept gevalideerd bij de doelgroep en de marketing opgezet.',
    ],
    tags: ['Figma', 'Product design', 'Validatie', 'Marketing'],
  },
  {
    role: 'Android-ontwikkelaar (themasemester)',
    org: 'Forward Football',
    period: 'feb 2025 – jun 2025',
    points: [
      'Kotlin-app gebouwd voor het uitlezen en beheren van UWB-trackers via Bluetooth LE (GATT, TLV-protocol).',
      'Opgezet met MVVM en Jetpack Compose; beoordeeld met een 8,5.',
    ],
    tags: ['Kotlin', 'Jetpack Compose', 'BLE', 'MVVM'],
    highlight: '8,5',
  },
  {
    role: 'Software Engineering-projecten',
    org: 'Hogeschool van Amsterdam',
    period: '2023 – heden',
    points: [
      'Webapplicaties gebouwd in Scrum-teams met TypeScript, Vue.js, Lit, Java en Spring Boot; UI/UX-prototypes in Figma.',
    ],
    tags: ['Vue.js', 'Lit', 'Spring Boot', 'Scrum'],
  },
  {
    role: 'Bezorger / bediening',
    org: 'Eetcafé Dikke Truus, Alkmaar',
    period: '2019 – heden',
    points: [
      'Bijbaan naast studie: gasten bediend, maaltijden bezorgd en betalingen afgehandeld, ook tijdens drukke piekmomenten.',
    ],
    tags: [],
  },
]

export const projects = [
  {
    title: 'Roblox-games',
    period: '2026 – heden',
    kind: 'Persoonlijk',
    text: 'Eigen games ontwikkelen in Roblox Studio met Luau, met aandacht voor gameplay, game-logica en spelerservaring.',
    tags: ['Luau', 'Roblox Studio', 'Game design'],
  },
  {
    title: 'WordPress-websites',
    period: '2020 – heden',
    kind: 'Persoonlijk en voor kleine bedrijven',
    text: 'Responsieve websites gebouwd en geoptimaliseerd voor snelheid en SEO met WordPress en Elementor.',
    tags: ['WordPress', 'Elementor', 'SEO'],
  },
]

export const skills = [
  { area: 'Talen', items: ['TypeScript', 'JavaScript', 'Dart', 'Kotlin', 'Java', 'Luau', 'HTML', 'CSS'] },
  { area: 'Mobiel', items: ['Flutter (iOS & Android)', 'Jetpack Compose', 'MVVM', 'Bluetooth LE'] },
  { area: 'Front-end & desktop', items: ['Vue.js', 'Lit', 'Tailwind CSS', 'Electron'] },
  { area: 'Back-end & data', items: ['Node.js', 'Fastify', 'Spring Boot', "REST API's", 'SQLite'] },
  { area: 'Netwerk & security', items: ['TLS & certificate pinning', 'libsodium', 'Ed25519', 'WebSockets'] },
  { area: 'Tools & werkwijze', items: ['Git', 'GitHub', 'GitLab', 'pnpm-monorepo', 'Scrum', 'Figma', 'WordPress'] },
]

export const education = [
  {
    title: 'HBO-ICT, Software Engineering (BSc)',
    org: 'Hogeschool van Amsterdam',
    period: '2023 – heden',
    text: 'Full-stack ontwikkeling, software-engineeringprincipes en UI/UX-design, in projectgroepen volgens Scrum.',
  },
  {
    title: 'Havo, profiel Economie & Maatschappij',
    org: 'Kennemer College, Beverwijk',
    period: '2022',
    text: '',
  },
]

export const languages = [
  { name: 'Nederlands', level: 'Moedertaal' },
  { name: 'Engels', level: 'Vloeiend' },
  { name: 'Kantonees', level: '' },
]
