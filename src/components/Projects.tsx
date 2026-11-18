import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { DownloadSimple, GithubLogo, PlayCircle } from '@phosphor-icons/react';
import { profile, projects, type Project } from '../data/portfolio';
import ArrowIcon from './ArrowIcon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const linkClass =
  'button-sm inline-flex items-center gap-2 rounded-full border border-surface-line bg-surface px-4 py-2 text-ink transition duration-300 ease-base hover:-translate-y-0.5 hover:border-ink active:translate-y-0 active:scale-[0.98]';

const ProjectLinks: React.FC<{ project: Project }> = ({ project }) => (
  <div className="flex flex-wrap gap-2">
    <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
      <GithubLogo size={16} weight="bold" aria-hidden />
      {project.backend ? 'App code' : 'Code'}
    </a>
    {project.backend && (
      <a href={project.backend} target="_blank" rel="noopener noreferrer" className={linkClass}>
        <GithubLogo size={16} weight="bold" aria-hidden />
        Backend code
      </a>
    )}
    {project.apk && (
      <a href={project.apk} target="_blank" rel="noopener noreferrer" className={linkClass}>
        <DownloadSimple size={16} weight="bold" aria-hidden />
        Download APK
      </a>
    )}
    {project.demo && (
      <a href={project.demo} target="_blank" rel="noopener noreferrer" className={linkClass}>
        <PlayCircle size={16} weight="bold" aria-hidden />
        Watch demo
      </a>
    )}
  </div>
);

/** Image drifts against the scroll and zooms gently on hover. */
const ProjectImage: React.FC<{ project: Project; tall?: boolean }> = ({ project, tall }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-5%', '5%']);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-3xl bg-surface-sunken ${tall ? 'aspect-[4/3] md:aspect-[5/4]' : 'aspect-[4/3]'}`}
    >
      <motion.div style={{ y }} className="absolute -inset-[6%]">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-base group-hover:scale-105"
        />
      </motion.div>
      {project.logo && (
        <img src={project.logo} alt="" className="absolute left-4 top-4 h-12 w-12 rounded-2xl shadow-pill" />
      )}
      <span className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-surface text-ink opacity-0 transition duration-500 ease-base group-hover:opacity-100 motion-safe:translate-y-2 motion-safe:group-hover:translate-y-0">
        <ArrowIcon />
      </span>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number; featured?: boolean; delay?: number }> = ({
  project,
  index,
  featured,
  delay = 0,
}) => (
  <Reveal as="article" delay={delay} className="group flex flex-col gap-6">
    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`} className="block rounded-3xl">
      <ProjectImage project={project} tall={featured} />
    </a>
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className={`${featured ? 'heading-4' : 'heading-5'} text-ink`}>{project.title}</h3>
        <span className="caption-3 text-accent-ink">{String(index + 1).padStart(2, '0')}.</span>
      </div>
      <p className="title-2 text-ink-soft">{project.tagline}</p>
      <p className="body-3 text-ink-muted">{project.description}</p>
      <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
        {project.tech.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>
      <ProjectLinks project={project} />
    </div>
  </Reveal>
);

const Projects: React.FC = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" aria-labelledby="work-title" className="section">
      <SectionHeading
        id="work-title"
        eyebrow="Selected work"
        title="Turning ideas into apps on real phones"
        description="From a billing app for neighbourhood shops to a polished puzzle game, each project solves a real problem with a clean, native feel."
        aside={
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group body-2 inline-flex items-center gap-2 rounded-md text-ink transition duration-300 ease-base hover:text-accent-ink"
          >
            See everything on GitHub
            <ArrowIcon />
          </a>
        }
      />

      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {featured.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} featured delay={i * 0.1} />
        ))}
      </div>

      <div className="mt-24 grid gap-x-8 gap-y-16 md:grid-cols-3">
        {rest.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={featured.length + i} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
