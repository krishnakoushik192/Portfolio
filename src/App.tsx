import Header from './components/Header';
import ScrollProgress from './components/ScrollProgress';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TaglineReveal from './components/TaglineReveal';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <a
        href="#main"
        className="button-sm fixed left-4 top-4 z-[60] -translate-y-24 rounded-lg bg-ink px-3 py-2 text-surface transition duration-300 ease-base focus:translate-y-0"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Projects />
        <TaglineReveal />
        <Experience />
        <Skills />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}

export default App;
