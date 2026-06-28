import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import type { Project } from '../data/portfolio';

type ProjectCardProps = {
  project: Project;
  index: number;
  variants: Variants;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, variants }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -6 }}
      className="group relative grid overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.075] shadow-2xl shadow-black/25 ring-1 ring-white/10 backdrop-blur-2xl backdrop-saturate-150 transition hover:border-cyan-200/35 hover:bg-white/[0.095] hover:shadow-cyan-950/20 md:grid-cols-2"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/12 via-white/[0.025] to-transparent" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/60 to-transparent" />
      <div className={`relative min-h-80 overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
        <img
          src={project.image}
          alt={project.title}
          className="h-full min-h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-80 flex-col justify-center p-8 md:p-14">
        <div className="mb-7 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full bg-cyan-200/10 px-3 py-1 text-xs font-semibold text-cyan-100 ring-1 ring-cyan-200/15">
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-3xl font-semibold text-white md:text-4xl">{project.title}</h3>
        <p className="mt-5 text-lg leading-8 text-zinc-400">{project.description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-cyan-200">
            <FaGithub />
            GitHub
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-200 hover:text-cyan-100">
            <FaExternalLinkAlt />
            Details
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
