export type Project = {
  title: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  /** Optional extra repo, e.g. a backend. */
  backend?: string;
  /** Fill these in when screenshots, logos, APKs and demos are ready. */
  logo?: string;
  apk?: string;
  demo?: string;
  featured?: boolean;
};

export type ExperienceEntry = {
  kind: 'work' | 'education';
  company: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
  tech: string[];
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  credentialId?: string;
  tags: string[];
};

export const profile = {
  name: 'Araveti Sumadhar Krishna Koushik',
  shortName: 'Koushik',
  role: 'React Native developer',
  email: 'koushikaraveti24@gmail.com',
  github: 'https://github.com/krishnakoushik192',
  linkedin: 'https://www.linkedin.com/in/araveti-sumadhar-krishna-koushik/',
  availability: 'Available for work · India · Remote or on site',
  /** Pencil sketch portrait of Koushik (public/images). */
  heroImage: '/images/koushik-hero.webp',
};

export const mailto = `mailto:${profile.email}?subject=${encodeURIComponent('Role for Koushik')}`;

export const projects: Project[] = [
  {
    title: 'VaaniAI',
    tagline: 'Billing and khata for neighbourhood shops',
    description:
      'Shopkeepers record bills, track what each customer owes, and share PDF bills and UPI QR codes in a tap. A TypeScript Express API on MongoDB keeps daily, weekly and dues totals in sync, with Gemini powering the AI features.',
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tech: ['React Native', 'TypeScript', 'Node.js', 'MongoDB', 'Gemini'],
    github: 'https://github.com/krishnakoushik192/VaaniAI',
    backend: 'https://github.com/krishnakoushik192/VaaniAI-BE',
    featured: true,
  },
  {
    title: 'Game2048',
    tagline: 'The classic puzzle, rebuilt for touch',
    description:
      'Swipe to merge tiles on a 4×4 board with smooth Reanimated motion, undo, an onboarding tutorial, and a best score that survives restarts. Runs on Android and iOS.',
    image: 'https://images.pexels.com/photos/776654/pexels-photo-776654.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tech: ['React Native', 'TypeScript', 'Reanimated', 'AsyncStorage'],
    github: 'https://github.com/krishnakoushik192/Game2048',
    featured: true,
  },
  {
    title: 'Travel Journal',
    tagline: 'Trips that sync, even offline',
    description: 'Write entries offline with SQLite and sync them to Supabase once you are back online.',
    image: 'https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tech: ['React Native', 'SQLite', 'Supabase'],
    github: 'https://github.com/krishnakoushik192/Travel-Journal',
  },
  {
    title: 'Movie Flix',
    tagline: 'Find something to watch, fast',
    description: 'Browse, search and explore films through the TMDB API with a quick, focused interface.',
    image: 'https://images.pexels.com/photos/7991159/pexels-photo-7991159.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tech: ['React Native', 'TMDB API'],
    github: 'https://github.com/krishnakoushik192/Movie-flix',
  },
  {
    title: 'Calendar Events',
    tagline: 'Your Google Calendar, simplified',
    description: 'Sign in with Google and create, view and manage calendar events from one clean screen.',
    image: 'https://images.pexels.com/photos/6863253/pexels-photo-6863253.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tech: ['React Native', 'Firebase', 'Google OAuth'],
    github: 'https://github.com/krishnakoushik192/CalendarEvents',
  },
];

export const experiences: ExperienceEntry[] = [
  {
    kind: 'work',
    company: 'Verona Matchmaking',
    role: 'React Native Developer Intern',
    duration: 'Sep 2025 – Sep 2026',
    location: 'Gurgaon, Haryana, India',
    highlights: [
      'Built and maintained cross platform mobile apps in React Native for iOS and Android',
      'Shipped UI components and features with a focus on performance and smooth interactions',
      'Worked with designers and backend developers to turn requirements into working screens',
      'Integrated third party APIs and SDKs into the production app',
    ],
    tech: ['React Native', 'JavaScript', 'REST APIs', 'iOS', 'Android'],
  },
  {
    kind: 'education',
    company: 'BITS Pilani',
    role: 'BSc Computer Science',
    duration: '2024 – Present',
    location: 'CGPA 8.3',
    highlights: [
      'Studying computer science with a focus on mobile and web development',
      'Holding a CGPA of 8.3',
    ],
    tech: ['Mobile development', 'Web technologies'],
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  { title: 'Mobile', items: ['React Native', 'Reanimated', 'React Navigation', 'AsyncStorage'] },
  { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'C++', 'HTML', 'CSS'] },
  { title: 'State and web', items: ['React', 'Redux Toolkit'] },
  { title: 'Backend and data', items: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'Supabase', 'SQLite'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Jest'] },
];

export const certificates: Certificate[] = [
  {
    title: 'Megathon 2026',
    issuer: 'E Cell IIIT Hyderabad with Lloyds',
    date: '2026',
    description:
      'Certificate of recognition for taking part in Megathon 2026 with Team Alpha‑coders, showcasing exceptional coding calibre.',
    image: '/certificates/megathon-2026.png',
    credentialId: 'R1FH-XBN4-7C4S',
    tags: ['Hackathon', 'Team project'],
  },
];
