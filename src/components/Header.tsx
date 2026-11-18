import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { mailto, profile } from '../data/portfolio';
import { EASE_BASE } from '../lib/motion';
import ArrowIcon from './ArrowIcon';

const navItems = [
  { name: 'Work', id: 'work' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Certificates', id: 'certificates' },
  { name: 'Contact', id: 'contact' },
];

const Header: React.FC = () => {
  const [active, setActive] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  // Highlight the section in view, and give the bar a surface once the hero is passed.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['top', ...navItems.map((n) => n.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const sentinel = document.getElementById('top');
    const barObserver = new IntersectionObserver(([entry]) => setScrolled(entry.intersectionRatio < 0.9), {
      threshold: [0, 0.9, 1],
    });
    if (sentinel) barObserver.observe(sentinel);

    return () => {
      observer.disconnect();
      barObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const lineTransition = { duration: reduce ? 0 : 0.5, ease: EASE_BASE };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition duration-500 ease-base ${
          scrolled && !open ? 'bg-surface/85 shadow-[0_1px_0_0_#E6E2DB] backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <nav aria-label="Main" className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-12 md:py-6">
          <a href="#top" className="title-2 rounded-md uppercase tracking-[0.3em] text-ink" aria-label="Back to top">
            {profile.shortName}
          </a>

          <div className="flex items-center gap-4 md:gap-6">
            <a href={mailto} className="group btn-primary button-sm hidden px-6 py-3 sm:inline-flex">
              Email me
              <ArrowIcon size={14} />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative flex h-12 w-12 items-center justify-center rounded-full transition duration-300 ease-base hover:bg-surface-sunken active:scale-[0.98]"
            >
              <motion.span
                className="absolute h-0.5 w-6 rounded-full bg-ink"
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                transition={lineTransition}
              />
              <motion.span
                className="absolute h-0.5 w-6 rounded-full bg-ink"
                animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                transition={lineTransition}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Full screen menu, on every screen size, like Nova. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            className="fixed inset-0 z-40 flex flex-col bg-surface/95 px-6 pb-12 pt-32 backdrop-blur-2xl md:px-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_BASE }}
          >
            <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col">
              <p className="eyebrow">Menu</p>
              <ul className="mt-6 flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, delay: Math.min(i * 0.06, 0.4), ease: EASE_BASE }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={active === item.id ? 'true' : undefined}
                      className={`group flex items-baseline gap-4 rounded-lg py-1 transition duration-300 ease-base hover:translate-x-2 ${
                        active === item.id ? 'text-accent' : 'text-ink'
                      }`}
                    >
                      <span className="caption-3 text-ink-muted">0{i + 1}</span>
                      <span className="heading-3 md:heading-1">{item.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                className="mt-auto flex flex-col gap-6 pt-12 sm:flex-row sm:items-end sm:justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35, ease: EASE_BASE }}
              >
                <a href={mailto} onClick={() => setOpen(false)} className="group btn-primary w-fit">
                  Email me about a role
                  <ArrowIcon />
                </a>
                <div className="flex gap-6">
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="body-5 text-ink-muted hover:text-ink">
                    GitHub
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="body-5 text-ink-muted hover:text-ink">
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
