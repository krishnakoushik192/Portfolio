import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE_BASE } from '../lib/motion';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'li' | 'article' | 'p' | 'h2';
};

/** Nova style reveal: rises, fades and comes into focus once on scroll. */
const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0, as = 'div' }) => {
  const reduce = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32, filter: 'blur(10px)' }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: reduce ? 0.3 : 0.9, delay, ease: EASE_BASE }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
