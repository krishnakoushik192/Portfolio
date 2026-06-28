import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full px-4 pt-4"
    >
      <nav
        className={`relative mx-auto flex max-w-6xl items-center justify-between overflow-hidden rounded-full border px-5 py-3 shadow-2xl backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/18 before:via-white/[0.055] before:to-white/[0.02] before:pointer-events-none after:absolute after:inset-x-8 after:top-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-cyan-100/70 after:to-transparent after:pointer-events-none md:px-8 ${
          isScrolled
            ? 'border-cyan-100/20 bg-[#101217]/72 shadow-black/35 ring-1 ring-white/10'
            : 'border-white/15 bg-white/[0.075] shadow-black/20 ring-1 ring-white/10'
        }`}
      >
        <div className="pointer-events-none absolute -left-12 top-1/2 h-24 w-48 -translate-y-1/2 rounded-full bg-cyan-200/10 blur-2xl" />
        <div className="pointer-events-none absolute -right-10 top-1/2 h-20 w-44 -translate-y-1/2 rounded-full bg-emerald-200/10 blur-2xl" />

        <div className="relative z-10 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer text-lg font-semibold tracking-wide text-white"
            onClick={() => scrollToSection('hero')}
          >
            ASKK
          </motion.div>
        </div>

        <div className="relative z-10 hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 + 0.2 }}
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-zinc-200/90 drop-shadow-sm transition-colors duration-200 hover:text-white"
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        <button
          onClick={() => scrollToSection('contact')}
          className="relative z-10 rounded-full border border-white/40 bg-white/85 px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-cyan-950/20 backdrop-blur transition hover:bg-cyan-100"
        >
          Contact
        </button>
      </nav>
    </motion.header>
  );
};

export default Header;
