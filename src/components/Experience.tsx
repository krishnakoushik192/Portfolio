import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, GraduationCap } from '@phosphor-icons/react';
import { experiences } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const Experience: React.FC = () => {
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 70%', 'end 50%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 28, restDelta: 0.001 });

  return (
    <section id="experience" aria-labelledby="experience-title" className="section">
      <SectionHeading
        id="experience-title"
        eyebrow="Experience and education"
        title="Where I've been building"
        description="A year of shipping production features, backed by a computer science degree in progress."
      />

      <ol ref={listRef} className="relative flex flex-col">
        {/* Tan line draws down the left edge as you scroll. */}
        <motion.span
          aria-hidden
          className="absolute bottom-0 left-0 top-0 hidden w-px origin-top bg-accent lg:block"
          style={{ scaleY: reduce ? 1 : scaleY }}
        />
        {experiences.map((exp, i) => {
          const Icon = exp.kind === 'work' ? Briefcase : GraduationCap;
          return (
            <Reveal
              as="li"
              key={exp.company}
              delay={i * 0.08}
              className="group grid gap-6 border-t border-surface-line py-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:pl-10"
            >
              <div className="flex items-start gap-4 lg:flex-col">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-accent-soft text-accent-ink transition duration-500 ease-base group-hover:bg-ink group-hover:text-surface">
                  <Icon size={20} weight="bold" aria-hidden />
                </span>
                <div>
                  <p className="eyebrow">{exp.duration}</p>
                  <p className="caption-2 mt-2 text-ink-muted">{exp.location}</p>
                </div>
              </div>

              <article>
                <h3 className="heading-4 text-ink">{exp.role}</h3>
                <p className="title-1 mt-2 text-accent-ink">{exp.company}</p>

                <ul className="mt-6 flex flex-col gap-3">
                  {exp.highlights.map((h) => (
                    <li key={h} className="body-3 flex gap-3 text-ink-muted">
                      <span className="flex h-7 flex-none items-center" aria-hidden>
                        <span className="h-1 w-1 rounded-full bg-accent" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Skills used">
                  {exp.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
};

export default Experience;
