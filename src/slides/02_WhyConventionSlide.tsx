import React, { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { Slide, SlideTitle } from '../components/Presentation/Slide';

const badCommits = ['fix', 'update', 'abc', 'final', '123', 'WIP', 'asdf', 'test'];

export const WhyConventionSlide: React.FC = () => {
  const [showGood, setShowGood] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowGood(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Slide className="items-center text-center">
      <SlideTitle>Why Git Convention?</SlideTitle>
      
      <div className="relative w-full max-w-3xl h-96 mt-8 rounded-3xl glass-panel flex items-center justify-center overflow-hidden">
        <AnimatePresence>
          {!showGood && badCommits.map((commit, i) => (
            <motion.div
              key={i}
              className="absolute font-jetbrains text-2xl font-bold px-4 py-2 rounded bg-white/5 text-white/50 border border-white/10"
              initial={{ 
                y: -300, 
                x: (Math.random() - 0.5) * 400,
                rotate: Math.random() * 45 - 22.5,
                opacity: 0
              }}
              animate={{ 
                y: 200, 
                opacity: [0, 1, 1, 0] 
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 2, 
                delay: i * 0.4, 
                ease: "linear",
                repeat: Infinity
              }}
            >
              {commit}
            </motion.div>
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {showGood && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="z-10 bg-gradient-to-r from-[#3FB950] to-[#2ea043] p-1 rounded-2xl shadow-[0_0_50px_rgba(63,185,80,0.4)]"
            >
              <div className="bg-[#0D1117] rounded-xl px-8 py-6 flex items-center gap-4">
                <span className="text-[#3FB950] font-jetbrains font-bold text-2xl">feat(auth):</span>
                <span className="text-white text-2xl">add Google Login</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Slide>
  );
};
