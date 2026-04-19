export const projects = [
  {
    id: 1,
    slug: 'broedrene-loevehjerte',
    title: 'Brødrene Løvehjerte',
    category: 'primary',
    type: 'case',
    year: '2025',
    label: 'Webdesign og front-end · studieprojekt',
    description:
      'Gruppebaseret skoleprojekt med afsæt i Astrid Lindgrens roman. Jeg stod for UI-design, SoMe poster, koden og SEO. Gruppen kodede hjemmesiden i HTML/CSS med fokus på typografi, hierarki og en stemning tro mod bogens univers.',
    tags: ['Webdesign', 'HTML/CSS', 'UI-design', 'SEO', 'SoMe'],
    shortDescription:
      'Gruppe — UI-design, visuel retning, front-end (HTML/CSS) og SEO',
    coverImage: '/images/broedrene-loevehjerte-cover.jpg',
    link: 'https://www.figma.com/deck/zROTQil6pqyZft1vFliswk/Digital-design-case--Figma-?node-id=8-34&t=4tIHrguYosDesSLM-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    featured: true,
  },
  {
    id: 2,
    slug: 'green-street',
    title: 'Green Street',
    category: 'primary',
    type: 'case',
    year: '2026',
    label: 'Motion og konceptudvikling · workshopprojekt',
    description:
      'Workshopbaseret teamprojekt om bæredygtig byudvikling. Gruppen udviklede et visuelt koncept og en motion-præsentation til et kommunalt initiativ — projektet vandt konkurrencen.',
    tags: ['Konceptudvikling', 'Motion', 'Teamprojekt', 'Visuel retning'],
    shortDescription:
      'Gruppe — konceptudvikling, video og motion-produktion',
    coverImage: '/images/green-street-cover.jpg',
    link: '',
    featured: true,
  },
  {
    id: 3,
    slug: 'quick-plate',
    title: 'QuickPlate',
    category: 'primary',
    type: 'case',
    year: '2025',
    label: 'Mobile UI · studieprojekt',
    description:
      'Mobil-first konceptdesign til en opskriftsapp. Fokus på hurtig navigation, enkel filtrering og et klart madlavningsflow — fra ingredienssøgning til første skridt i køkkenet.',
    tags: ['UX', 'UI', 'Figma'],
    shortDescription: 'Solo — UX/UI-design, visuel retning',
    coverImage: '/images/quick-plate-cover.jpg',
    link: '',
    featured: true,
  },
  {
    id: 4,
    slug: 'ribe-mini-case',
    title: 'Ribe Mini-case',
    category: 'other',
    type: 'case',
    year: '2025',
    label: 'Lokalt designprojekt',
    description:
      'Et designprojekt med udgangspunkt i Ribes kulturarv og turisme. Opgaven var at skabe en digital tilstedeværelse med respekt for historisk æstetik.',
    tags: [],
    shortDescription: 'Gruppe — research, design og præsentation',
    coverImage: '/images/ribe-mini-case-cover.jpg',
    link: '',
    featured: false,
  },
  {
    id: 5,
    slug: 'art-service',
    title: 'ART-Service',
    category: 'other',
    type: 'case',
    year: '2026',
    label: 'Grafisk identitet og digitalt layout',
    description:
      'Visuel identitet og digitale materialer til en servicevirksomhed. Fokus på overskuelig kommunikation og konsistent grafisk udtryk.',
    tags: [],
    shortDescription: 'Solo — research, design og præsentation',
    coverImage: '/images/art-service-cover.jpg',
    link: '',
    featured: false,
  },
  {
    id: 6,
    slug: 'visuelle-projekter',
    title: 'Visuelle projekter',
    category: 'visual',
    type: 'gallery',
    year: '2026',
    label: 'Visuelle projekter · plakatserie',
    description:
      'En samling af visuelle arbejder, som vises som galleri med pilenavigation og fullscreen-visning uden separat underside.',
    tags: ['Poster Design', 'Visual Design', 'Layout'],
    shortDescription: 'Visuelle arbejder — galleri med fullscreen-visning',
    coverImage: '/images/visual/visuelle-projekter-cover.jpg',
    link: '',
    featured: false,
    images: [
      {
        id: 1,
        src: '/images/visual/international-day-01.jpg',
        alt: 'International Day poster 1',
      },
      {
        id: 2,
        src: '/images/visual/international-day-02.jpg',
        alt: 'International Day poster 2',
      },
      {
        id: 3,
        src: '/images/visual/international-day-03.jpg',
        alt: 'International Day poster 3',
      },
      {
        id: 4,
        src: '/images/visual/international-day-04.jpg',
        alt: 'International Day poster 4',
      },
      {
        id: 5,
        src: '/images/visual/international-day-05.jpg',
        alt: 'International Day poster 5',
      },
      {
        id: 6,
        src: '/images/visual/international-day-06.jpg',
        alt: 'International Day poster 6',
      },
    ],
  },
]

export const primaryProjects = projects.filter(
  (project) => project.category === 'primary'
)

export const otherProjects = projects.filter(
  (project) => project.category === 'other'
)

export const visualProjects = projects.filter(
  (project) => project.category === 'visual'
)

export const visualGallery = projects.find(
  (project) => project.type === 'gallery'
)