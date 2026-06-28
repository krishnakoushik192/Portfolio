import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/portfolio';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Selected Work
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-400">
              Mobile projects shaped around real product constraints: offline access, authentication, APIs, and smooth discovery flows.
            </p>
          </div>
          <a href="https://github.com/krishnakoushik192" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm font-semibold text-cyan-200 hover:text-white">
            View all projects
            <FaExternalLinkAlt />
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
