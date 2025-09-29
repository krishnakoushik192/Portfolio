import React from 'react';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <div className="absolute inset-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-blue-500/20 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
    </div>
  );
};

export default ParticleBackground;