import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent"
        >
          Araveti Sumadhar Krishna koushik
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl text-blue-400 mb-6 font-light"
        >
          React Native Developer
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Enthusiastic and technically skilled React Native Developer with foundational knowledge in JavaScript, React, and state management principles. Proven ability to build and test functional mobile applications through personal projects.
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(66, 133, 244, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('projects')}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 mb-16"
        >
          View My Work
        </motion.button>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center space-x-8"
        >
          {[
            { Icon: FaGithub, href: 'https://github.com/krishnakoushik192' },
            { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/araveti-sumadhar-krishna-koushik/' }
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-blue-400 text-2xl transition-colors duration-200"
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;