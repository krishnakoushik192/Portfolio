import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#06070a] text-white selection:bg-cyan-300 selection:text-black">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(180deg,rgba(7,28,35,0.96)_0%,rgba(6,23,26,0.72)_16%,rgba(6,7,10,0.95)_40%,rgba(6,18,19,0.82)_64%,#06070a_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_48%_0%,rgba(34,211,238,0.28),transparent_30%),radial-gradient(circle_at_86%_28%,rgba(16,185,129,0.13),transparent_24%),radial-gradient(circle_at_16%_72%,rgba(14,165,233,0.12),transparent_28%)]" />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
