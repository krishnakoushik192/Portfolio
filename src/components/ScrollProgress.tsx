import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin amber bar along the top edge that fills as the page is read. */
const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[55] h-0.5 origin-left bg-accent"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
