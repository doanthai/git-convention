import React from 'react';

import { motion } from 'framer-motion';
import { Slide } from '../components/Presentation/Slide';
import { GitBranch } from 'lucide-react';

export const IntroSlide: React.FC = () => {
  return (
    <Slide className="items-center text-center relative">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
        className="mb-8 p-6 rounded-3xl glass-panel text-[#F05032]"
      >
        <GitBranch size={80} strokeWidth={1.5} />
      </motion.div>
      
      <motion.h1 
        className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Git Best Practices
      </motion.h1>
      
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, staggerChildren: 0.1 }}
      >
        {["Git Workflow", "Conventional Commits", "Semantic Versioning"].map((item, i) => (
          <motion.span 
            key={i}
            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-lg text-white/80 font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.1 }}
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </Slide>
  );
};
