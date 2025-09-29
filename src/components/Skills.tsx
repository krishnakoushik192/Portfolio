import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiReact, SiTypescript, SiNodedotjs, SiPython, 
  SiPostgresql, SiMongodb, SiDocker,
  SiGit, SiTailwindcss, SiGraphql, SiRedis
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'HTML', icon: SiReact, color: '#E34F26' },
    { name: 'CSS', icon: SiReact, color: '#1572B6' },
    { name: 'JavaScript', icon: SiReact, color: '#F7DF1E' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'React Native', icon: SiReact, color: '#61DAFB' },
    { name: 'Firebase', icon: SiReact, color: '#FFCA28' },
    { name: 'Supabase', icon: SiReact, color: '#3ECF8E' },
    { name: 'SQLite', icon: SiReact, color: '#003B57' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  boxShadow: `0 20px 40px ${skill.color}20`
                }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center group hover:border-blue-500/50 transition-all duration-300"
              >
                <IconComponent 
                  className="text-4xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                  style={{ color: skill.color }}
                />
                <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;