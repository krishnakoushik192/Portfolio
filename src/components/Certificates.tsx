import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import { certificates } from '../data/portfolio';

const Certificates: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certificates" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Certificates & Achievements
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Hackathons and recognitions from building under pressure with a team.
          </p>
        </motion.div>

        <div className="space-y-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.15 + index * 0.2, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="group relative grid overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.075] shadow-2xl shadow-black/25 ring-1 ring-white/10 backdrop-blur-2xl backdrop-saturate-150 transition hover:border-cyan-200/35 hover:bg-white/[0.095] hover:shadow-cyan-950/20 md:grid-cols-2"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/12 via-white/[0.025] to-transparent" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/60 to-transparent" />

              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center overflow-hidden bg-black/30 p-6 md:p-8"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full rounded-xl object-contain shadow-xl shadow-black/40 transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </a>

              <div className="relative z-10 flex flex-col justify-center p-8 md:p-14">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-200/10 text-xl text-cyan-100 ring-1 ring-cyan-200/20">
                  <FaAward />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">{cert.date}</p>
                <h3 className="mt-3 text-3xl font-semibold text-white">{cert.title}</h3>
                <h4 className="mt-2 text-lg text-zinc-300">{cert.issuer}</h4>
                <p className="mt-5 text-lg leading-8 text-zinc-400">{cert.description}</p>
                {cert.credentialId && (
                  <p className="mt-4 text-sm text-zinc-500">
                    Credential ID: <span className="font-mono text-zinc-300">{cert.credentialId}</span>
                  </p>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-cyan-200/10 px-3 py-1 text-xs font-semibold text-cyan-100 ring-1 ring-cyan-200/15">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-200 hover:text-cyan-100"
                >
                  <FaExternalLinkAlt />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
