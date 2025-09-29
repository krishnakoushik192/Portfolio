import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: 'Verona Matchmaking',
      role: 'React Native Developer',
      duration: 'Sep 2025 - Present',
      location: 'Gurgaon, Haryana, India',
      highlights: [
        'Developed and maintained cross-platform mobile applications using React Native',
        'Implemented UI components and features with a focus on performance and user experience',
        'Collaborated with designers and backend developers to translate requirements into functional mobile applications',
        'Integrated third-party APIs and SDKs to enhance application functionality'
      ],
      tech: ['React Native', 'JavaScript', 'APIs', 'iOS', 'Android']
    },
    {
      company: 'BITS PILANI',
      role: 'Bachelor of Science in Computer Science',
      duration: 'Aug 2027 - Present',
      location: 'CGPA: 8.3',
      highlights: [
        'Currently pursuing Bachelor of Science in Computer Science',
        'Maintaining strong academic performance with 8.3 CGPA',
        'Focusing on mobile development and modern web technologies'
      ],
      tech: ['Computer Science', 'Mobile Development', 'Web Technologies']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional journey building innovative solutions and leading development teams
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.role}
                  </h3>
                  <h4 className="text-xl text-blue-400 mb-3">
                    {exp.company}
                  </h4>
                </div>
                
                <div className="flex flex-col md:items-end space-y-2">
                  <div className="flex items-center text-gray-400">
                    <FaCalendarAlt className="mr-2" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <FaMapMarkerAlt className="mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-6 text-gray-300">
                {exp.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.3 + i * 0.1 + 0.5 }}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {highlight}
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;