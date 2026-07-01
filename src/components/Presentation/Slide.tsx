import React from 'react';

import { motion } from 'framer-motion';

interface SlideProps {
  children: React.ReactNode;
  className?: string;
}

export const Slide: React.FC<SlideProps> = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full max-w-6xl mx-auto flex flex-col justify-center ${className}`}>
      {children}
    </div>
  );
};

export const SlideTitle: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.h1 
    className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.h1>
);

export const SlideSubtitle: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0.1 }) => (
  <motion.h2 
    className="text-2xl md:text-3xl text-white/60 font-medium mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.h2>
);
