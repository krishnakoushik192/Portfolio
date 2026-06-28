import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import type { ExperienceEntry } from '../data/portfolio';

type ExperienceTimelineItemProps = {
  experience: ExperienceEntry;
  index: number;
  variants: Variants;
};

const ExperienceTimelineItem: React.FC<ExperienceTimelineItemProps> = ({ experience, index, variants }) => {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 58%", "start 44%"],
  });
  const glowOpacity = useTransform(scrollYProgress, [0, 0.65, 1], [0, 0.35, 1]);
  const dotScale = useTransform(scrollYProgress, [0, 1], [0.84, 1.18]);
  const dotShadow = useTransform(
    glowOpacity,
    (value) => `0 0 0 ${8 + value * 10}px rgba(34,211,238,${0.08 + value * 0.18}), 0 0 ${value * 42}px rgba(34,211,238,0.75)`
  );

  return (
    <motion.div
      ref={itemRef}
      variants={variants}
      className="relative grid gap-y-8 pb-16 md:grid-cols-[minmax(0,1fr)_6rem_minmax(0,1fr)]"
    >
      <motion.span
        className="absolute left-5 top-10 z-10 hidden h-5 w-5 rounded-full border border-cyan-100 bg-[#080a0f] md:left-[calc(50%_+_0.625rem)] md:block"
        style={{
          x: "-50%",
          scale: dotScale,
          boxShadow: dotShadow,
        }}
      >
        <motion.span
          className="absolute inset-1 rounded-full bg-cyan-200"
          style={{ opacity: glowOpacity }}
        />
      </motion.span>

      <span
        className={`pointer-events-none absolute top-[3.05rem] z-[2] hidden h-px w-10 bg-gradient-to-r md:block ${
          index % 2 === 0
            ? 'left-[calc(50%_-_2.375rem)] from-transparent to-cyan-200/70'
            : 'right-[calc(50%_-_3.625rem)] from-cyan-200/70 to-transparent'
        }`}
      />

      <motion.div
        className={`relative w-full max-w-[34rem] overflow-hidden rounded-2xl border border-white/15 bg-white/[0.075] p-7 shadow-2xl shadow-black/25 ring-1 ring-white/10 backdrop-blur-2xl backdrop-saturate-150 transition hover:border-cyan-200/35 hover:bg-white/[0.095] hover:shadow-cyan-950/20 ${
          index % 2 === 0
            ? 'md:col-start-1 md:justify-self-end'
            : 'md:col-start-3 md:justify-self-start'
        }`}
        whileInView={{ borderColor: "rgba(165,243,252,0.35)", y: -4 }}
        viewport={{ once: false, amount: 0.55 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/12 via-white/[0.025] to-transparent" />
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/60 to-transparent" />
        <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">{experience.duration}</p>
          <h3 className="mt-4 text-3xl font-semibold text-white">{experience.role}</h3>
          <h4 className="mt-2 text-lg text-zinc-300">{experience.company}</h4>
          <p className="mt-1 text-sm text-zinc-500">{experience.location}</p>

          <ul className="mt-6 space-y-3 text-zinc-400">
            {experience.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 leading-7">
                <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-cyan-200" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {experience.tech.map((tech) => (
              <span key={tech} className="rounded-full bg-cyan-200/10 px-3 py-1 text-xs font-semibold text-cyan-100 ring-1 ring-cyan-200/15">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceTimelineItem;
