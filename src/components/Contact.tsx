import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/krishnakoushik192', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/araveti-sumadhar-krishna-koushik/', label: 'LinkedIn' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.075] px-6 py-20 text-center shadow-2xl shadow-black/25 ring-1 ring-white/10 backdrop-blur-2xl backdrop-saturate-150 md:px-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.22),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.025)_42%,transparent)]" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/70 to-transparent" />
          <motion.h2
            variants={itemVariants}
            className="relative z-10 mx-auto max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl"
          >
            Let&apos;s build a mobile experience that feels clear and useful.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="relative z-10 mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400"
          >
            I&apos;m open to React Native opportunities, internships, and product-focused collaborations.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="relative z-10 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="mailto:koushikaraveti24@gmail.com"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition hover:bg-cyan-200"
            >
              <FaEnvelope />
              Email Me
            </a>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-8 py-4 text-sm font-bold text-white transition hover:border-cyan-200 hover:text-cyan-100"
                aria-label={label}
              >
                <Icon />
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <footer className="mt-14 flex flex-col gap-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p className="text-2xl font-semibold text-white">ASKK</p>
          <p>&copy; 2026 Araveti Sumadhar Krishna Koushik. Built with React & Framer Motion.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
