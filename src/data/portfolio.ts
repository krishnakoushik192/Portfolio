export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
};

export type ExperienceEntry = {
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

export const projects: Project[] = [
  {
    title: 'VaaniAI',
    description: 'Billing and khata app for small shopkeepers: record bills, track customer dues, share PDF bills and UPI QR codes, backed by a TypeScript Express + MongoDB API with Gemini-powered AI features.',
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tech: ['React Native', 'TypeScript', 'Node.js', 'MongoDB', 'Gemini'],
    github: 'https://github.com/krishnakoushik192/VaaniAI',
    live: 'https://github.com/krishnakoushik192/VaaniAI-BE',
  },
  {
    title: 'Game2048',
    description: 'Polished 2048 puzzle game with swipe gestures, smooth tile animations, undo, onboarding tutorial, and best-score persistence on Android and iOS.',
    image: 'https://images.pexels.com/photos/776654/pexels-photo-776654.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tech: ['React Native', 'TypeScript', 'Reanimated', 'AsyncStorage'],
    github: 'https://github.com/krishnakoushik192/Game2048',
    live: 'https://github.com/krishnakoushik192/Game2048',
  },
  {
    title: 'Travel Journal',
    description: 'Cross-platform travel journal with offline access, local persistence, and cloud synchronization for mobile-first explorers.',
    image: 'https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tech: ['React Native', 'SQLite', 'Supabase'],
    github: 'https://github.com/krishnakoushik192/Travel-Journal',
    live: 'https://github.com/krishnakoushik192/Travel-Journal',
  },
  {
    title: 'Movie Flix',
    description: 'Movie discovery app for browsing, searching, and exploring entertainment content through a fast TMDB-powered interface.',
    image: 'https://images.pexels.com/photos/7991159/pexels-photo-7991159.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tech: ['React Native', 'TMDB API'],
    github: 'https://github.com/krishnakoushik192/Movie-flix',
    live: 'https://github.com/krishnakoushik192/Movie-flix',
  },
  {
    title: 'Calendar App',
    description: 'Calendar Events app with Google Calendar integration, OAuth authentication, and focused event management flows.',
    image: 'https://images.pexels.com/photos/6863253/pexels-photo-6863253.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tech: ['React Native', 'Firebase', 'Google OAuth'],
    github: 'https://github.com/krishnakoushik192/CalendarEvents',
    live: 'https://github.com/krishnakoushik192/CalendarEvents',
  },
];

export const experiences: ExperienceEntry[] = [
  {
    company: 'Verona Matchmaking',
    role: 'React Native Developer Intern',
    duration: 'Sep 2025 - Sep 2026',
    location: 'Gurgaon, Haryana, India',
    highlights: [
      'Developed and maintained cross-platform mobile applications using React Native',
      'Implemented UI components and features with a focus on performance and user experience',
      'Collaborated with designers and backend developers to translate requirements into functional mobile applications',
      'Integrated third-party APIs and SDKs to enhance application functionality',
    ],
    tech: ['React Native', 'JavaScript', 'APIs', 'iOS', 'Android'],
  },
  {
    company: 'BITS PILANI',
    role: 'Bachelor of Science in Computer Science',
    duration: '2024 - Present',
    location: 'CGPA: 8.3',
    highlights: [
      'Currently pursuing Bachelor of Science in Computer Science',
      'Maintaining strong academic performance with 8.3 CGPA',
      'Focusing on mobile development and modern web technologies',
    ],
    tech: ['Computer Science', 'Mobile Development', 'Web Technologies'],
  },
];

export const certificates: Certificate[] = [
  {
    title: 'Megathon 2026 - Certificate of Recognition',
    issuer: 'E-Cell IIIT Hyderabad x Lloyds',
    date: '2026',
    description: 'Recognized as a participant in Megathon 2026 with Team Alpha-coders, showcasing exceptional coding calibre.',
    image: '/certificates/megathon-2026.png',
    credentialId: 'R1FH-XBN4-7C4S',
    tags: ['Hackathon', 'Team Alpha-coders'],
  },
];
