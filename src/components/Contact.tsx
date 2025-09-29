import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

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
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent"
          >
            Let's Connect
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <motion.a
              href="mailto:koushikaraveti24@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 group"
            >
              <FaEnvelope className="mr-3 group-hover:animate-bounce" />
              koushikaraveti24@gmail.com
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-8 mb-16"
          >
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -10, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-blue-400 text-3xl transition-colors duration-300 relative group"
                aria-label={label}
              >
                <Icon />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="border-t border-gray-800 pt-8"
          >
            <p className="text-gray-500 flex items-center justify-center">
              Built with <FaHeart className="text-red-500 mx-2" /> using React & Framer Motion
            </p>
            <p className="text-gray-600 text-sm mt-2">
              © 2025 Araveti Sumadhar Krishna koushik. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;