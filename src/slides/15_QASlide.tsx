import React from 'react';

import { motion } from 'framer-motion';
import { Slide } from '../components/Presentation/Slide';
import { GitPullRequest } from 'lucide-react';

export const QASlide: React.FC = () => {
  return (
    <Slide className="items-center text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
        className="mb-12 p-8 rounded-full glass-panel text-[#F05032] shadow-[0_0_100px_rgba(240,80,50,0.2)]"
      >
        <GitPullRequest size={100} strokeWidth={1.5} />
      </motion.div>

      <motion.h1 
        className="text-7xl md:text-9xl font-bold tracking-tight mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Q&A
      </motion.h1>
      
      <motion.p 
        className="text-2xl text-white/60 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Thank you for your time.
      </motion.p>
    </Slide>
  );
};
