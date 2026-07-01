import React from 'react';

import { motion } from 'framer-motion';
import { Slide, SlideTitle } from '../components/Presentation/Slide';

export const SemanticVersionSlide: React.FC = () => {
  return (
    <Slide className="items-center text-center">
      <SlideTitle>Semantic Versioning</SlideTitle>
      
      <div className="flex flex-col items-center mt-12 w-full max-w-4xl">
        <motion.div 
          className="text-7xl md:text-9xl font-jetbrains font-bold flex gap-4 tracking-tighter"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          <span className="text-[#F85149]">2</span>
          <span className="text-white/40">.</span>
          <span className="text-[#58A6FF]">1</span>
          <span className="text-white/40">.</span>
          <span className="text-[#3FB950]">4</span>
        </motion.div>

        <div className="flex justify-between w-full max-w-2xl mt-16 gap-4">
          <motion.div 
            className="flex flex-col items-center flex-1 glass-panel p-6 rounded-2xl border-t-4"
            style={{ borderTopColor: '#F85149' }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, type: "spring" }}
          >
            <div className="text-xl font-bold text-white mb-2">MAJOR</div>
            <div className="text-white/50 text-sm mb-6">Breaking Changes</div>
            <div className="bg-[#F85149]/20 text-[#F85149] font-jetbrains px-3 py-1 rounded text-xs">feat!</div>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center flex-1 glass-panel p-6 rounded-2xl border-t-4"
            style={{ borderTopColor: '#58A6FF' }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
          >
            <div className="text-xl font-bold text-white mb-2">MINOR</div>
            <div className="text-white/50 text-sm mb-6">New Features</div>
            <div className="bg-[#58A6FF]/20 text-[#58A6FF] font-jetbrains px-3 py-1 rounded text-xs">feat</div>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center flex-1 glass-panel p-6 rounded-2xl border-t-4"
            style={{ borderTopColor: '#3FB950' }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, type: "spring" }}
          >
            <div className="text-xl font-bold text-white mb-2">PATCH</div>
            <div className="text-white/50 text-sm mb-6">Bug Fixes</div>
            <div className="bg-[#3FB950]/20 text-[#3FB950] font-jetbrains px-3 py-1 rounded text-xs">fix</div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};
