import React from 'react';
import { motion, useInView, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { experiences } from '../data/portfolio';
import ExperienceTimelineItem from './ExperienceTimelineItem';

const Experience: React.FC = () => {
  const ref = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 35%"],
  });
  const lineScaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Experience & Education
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            A concise timeline of professional work, academic focus, and the mobile engineering foundation behind my projects.
          </p>
        </motion.div>

        <motion.div
          ref={timelineRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative mx-auto max-w-5xl"
        >
          <div className="absolute left-5 top-0 hidden h-full w-px bg-white/10 md:left-[calc(50%_+_0.625rem)] md:block" />
          <motion.div
            className="absolute left-5 top-0 z-[1] hidden h-full w-px origin-top bg-gradient-to-b from-cyan-200 via-emerald-200 to-cyan-400 shadow-[0_0_24px_rgba(34,211,238,0.55)] md:left-[calc(50%_+_0.625rem)] md:block"
            style={{ scaleY: lineScaleY }}
          />

          {experiences.map((exp, index) => (
            <ExperienceTimelineItem key={exp.role} experience={exp} index={index} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
