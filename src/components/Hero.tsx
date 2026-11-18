import React from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from '@phosphor-icons/react';
import { mailto, profile } from '../data/portfolio';
import { EASE_BASE } from '../lib/motion';
import ArrowIcon from './ArrowIcon';

const proof = ['1 year at Verona Matchmaking', '5 apps built', 'Megathon 2026', 'CGPA 8.3'];

// Lines of the headline; `accent` words render in tan, as in Nova.
const HEADLINE: { text: string; accent?: boolean }[][] = [
  [{ text: 'React Native apps' }],
  [{ text: 'built to ship on' }],
  [{ text: 'iOS and Android', accent: true }],
];

const Hero: React.FC = () => {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 40]);
  const imageScale = useTransform(scrollY, [0, 700], [1, reduce ? 1 : 1.05]);

  const focusIn = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 24, filter: 'blur(10px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.9, delay, ease: EASE_BASE },
  });

  return (
    <section
      id="top"
      className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-16 pt-32 md:px-12 md:pt-40 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16"
    >
      <div>
        <motion.p {...focusIn(0)} className="eyebrow">
          Mobile / React Native / iOS and Android
        </motion.p>

        <h1 className="heading-3 mt-6 max-w-[680px] text-ink sm:heading-2 lg:heading-1" aria-label={HEADLINE.flat().map((w) => w.text).join(' ')}>
          {HEADLINE.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-1" aria-hidden>
              <motion.span
                className="block"
                initial={reduce ? { opacity: 0 } : { y: '110%', filter: 'blur(6px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1, delay: 0.1 + i * 0.12, ease: EASE_BASE }}
              >
                {line.map((w) => (
                  <span key={w.text} className={w.accent ? 'text-accent' : undefined}>
                    {w.text}
                  </span>
                ))}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p {...focusIn(0.45)} className="body-3 mt-6 max-w-[560px] text-ink-muted md:body-7">
          I'm {profile.shortName}, a mobile developer and CS student at BITS Pilani. I spent a year building
          production features at Verona Matchmaking, and I'm now open to full time roles, internships, and
          freelance projects.
        </motion.p>

        <motion.div {...focusIn(0.55)} className="mt-10 flex flex-wrap items-center gap-6">
          <a href={mailto} className="group btn-primary">
            Email me about a role
            <ArrowIcon />
          </a>
          <a href="#work" className="group body-2 inline-flex items-center gap-2 rounded-md text-ink transition duration-300 ease-base hover:text-accent-ink">
            See my work
            <ArrowDown size={16} weight="bold" aria-hidden className="transition-transform duration-300 ease-base group-hover:translate-y-1" />
          </a>
        </motion.div>

        <motion.ul {...focusIn(0.7)} className="mt-12 flex flex-wrap gap-x-6 gap-y-2" aria-label="Highlights">
          {proof.map((item) => (
            <li key={item} className="caption-2 flex items-center gap-2 text-ink-muted">
              <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
              {item}
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Organic blob framed image, like Nova's hero portrait. */}
      <motion.div
        className="relative mx-auto h-[clamp(22rem,80vw,30rem)] w-full max-w-[560px] lg:h-[clamp(32rem,42vw,40rem)]"
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94, filter: 'blur(12px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, delay: 0.25, ease: EASE_BASE }}
      >
        <span
          aria-hidden
          className="absolute -right-6 -top-6 h-32 w-32 rounded-full border border-accent/40 motion-safe:animate-spinslow md:h-40 md:w-40"
          style={{ borderStyle: 'dashed' }}
        />
        <div className="relative h-full w-full overflow-hidden rounded-[42%_58%_46%_54%/38%_44%_56%_62%] bg-accent-soft">
          <motion.img
            src={profile.heroImage}
            alt={`Pencil sketch portrait of ${profile.shortName}`}
            style={{ y: imageY, scale: imageScale }}
            className="absolute inset-0 h-full w-full object-cover object-top mix-blend-multiply"
          />
        </div>

        <motion.div
          className="absolute -left-2 bottom-8 flex items-center gap-3 rounded-full bg-surface px-4 py-3 shadow-pill md:-left-8"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: EASE_BASE }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="caption-1 text-ink">{profile.availability}</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
