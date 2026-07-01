import React from 'react';

import { motion } from 'framer-motion';
import { Slide, SlideTitle } from '../components/Presentation/Slide';

const types = [
  { type: 'feat', scope: 'auth', desc: 'add google login', color: '#58A6FF' },
  { type: 'fix', scope: 'payment', desc: 'resolve checkout crash', color: '#F85149' },
  { type: 'docs', scope: 'readme', desc: 'update installation guide', color: '#8b949e' },
  { type: 'refactor', scope: 'camera', desc: 'improve capture performance', color: '#8957e5' },
  { type: 'chore', scope: 'deps', desc: 'bump react version', color: '#D29922' },
];

export const ConventionalCommitSlide: React.FC = () => {
  return (
    <Slide className="items-center text-center">
      <SlideTitle>Conventional Commits</SlideTitle>
      
      <motion.div 
        className="mt-8 mb-16 text-3xl md:text-5xl font-jetbrains font-bold tracking-tight text-white/40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-[#F05032]">type</span>
        <span>(</span>
        <span className="text-white/60">scope</span>
        <span>): </span>
        <span className="text-white/80">description</span>
      </motion.div>

      <div className="flex flex-col gap-6 w-full max-w-3xl">
        {types.map((item, i) => (
          <motion.div
            key={i}
            className="glass-panel p-6 rounded-2xl flex items-center justify-start text-left border border-white/5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.2, type: "spring" }}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
          >
            <div className="font-jetbrains text-xl md:text-2xl flex gap-1 w-full">
              <span style={{ color: item.color, fontWeight: 'bold' }}>{item.type}</span>
              <span className="text-white/40">(</span>
              <span className="text-white/60">{item.scope}</span>
              <span className="text-white/40">):</span>
              <span className="text-white ml-2">{item.desc}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
};
