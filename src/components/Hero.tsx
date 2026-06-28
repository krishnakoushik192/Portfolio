import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[118vh] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[92vh] bg-[radial-gradient(circle_at_48%_0%,rgba(34,211,238,0.32),transparent_34%),linear-gradient(120deg,rgba(34,211,238,0.16)_0%,rgba(14,165,233,0.08)_35%,rgba(16,185,129,0.15)_76%,transparent_100%)] [mask-image:linear-gradient(180deg,black_0%,black_42%,transparent_100%)]" />
      <div className="absolute inset-x-0 top-[22vh] h-[48vh] bg-[linear-gradient(180deg,transparent_0%,rgba(6,7,10,0.42)_55%,transparent_100%)]" />
      <div className="absolute left-1/2 top-[22%] h-72 w-72 -translate-x-1/2 rounded-full border border-cyan-300/20 bg-cyan-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-28 text-center">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-8 h-36 w-36 overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-cyan-200 via-white to-emerald-200 p-1 shadow-2xl shadow-cyan-950/60">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0d1117] text-3xl font-bold tracking-wide text-white">
            ASKK
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200">
          React Native Developer
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.2 }} className="max-w-5xl text-5xl font-semibold leading-[0.96] text-white md:text-7xl lg:text-8xl">
          Araveti Sumadhar Krishna Koushik
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.35 }} className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
          Enthusiastic mobile developer building functional, testable apps with JavaScript, React, React Native, and practical state management.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.5 }} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button onClick={() => scrollToSection('projects')} className="rounded-full bg-white px-8 py-4 text-sm font-bold text-black shadow-xl shadow-cyan-950/40 transition hover:bg-cyan-200">
            View My Work
          </button>
          <button onClick={() => scrollToSection('contact')} className="rounded-full border border-white/15 px-8 py-4 text-sm font-bold text-white transition hover:border-cyan-200 hover:text-cyan-100">
            Start a Conversation
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.65 }} className="mt-12 flex items-center gap-7">
          {[
            { Icon: FaGithub, href: 'https://github.com/krishnakoushik192', label: 'GitHub' },
            { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/araveti-sumadhar-krishna-koushik/', label: 'LinkedIn' },
          ].map(({ Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-2xl text-zinc-400 transition hover:-translate-y-1 hover:text-cyan-200">
              <Icon />
            </a>
          ))}
        </motion.div>
      </div>

      <section id="about" className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 pb-28 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(34,211,238,0.26),rgba(16,185,129,0.12)),url('https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=900')] bg-cover bg-center shadow-2xl shadow-black/50" />
          <div className="absolute -bottom-7 right-6 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.075] px-6 py-5 shadow-2xl shadow-black/25 ring-1 ring-white/10 backdrop-blur-2xl backdrop-saturate-150">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/14 via-white/[0.03] to-transparent" />
            <div className="relative z-10">
              <p className="text-4xl font-semibold text-white">3+</p>
              <p className="mt-1 text-sm text-zinc-400">mobile projects shipped</p>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-cyan-200" />
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">About</span>
          </div>
          <h2 className="max-w-xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            I turn practical product ideas into polished mobile experiences.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-zinc-300">
            <p>
              I am a Computer Science student focused on cross-platform mobile development. My work centers on building dependable React Native apps that feel clear, fast, and useful.
            </p>
            <p>
              Through projects like Travel Journal, Movie Flix, and Calendar Events, I have worked with offline storage, external APIs, authentication flows, and production-minded UI implementation.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {['React Native', 'JavaScript', 'Firebase', 'SQLite', 'Supabase'].map((item) => (
              <span key={item} className="rounded-full border border-white/15 bg-white/[0.075] px-4 py-2 text-sm text-zinc-200 shadow-sm backdrop-blur-xl ring-1 ring-white/10">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
