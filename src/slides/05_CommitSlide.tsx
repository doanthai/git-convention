import React from 'react';

import { motion } from 'framer-motion';
import { Slide, SlideTitle, SlideSubtitle } from '../components/Presentation/Slide';
import { X, Check } from 'lucide-react';

export const CommitSlide: React.FC = () => {
  return (
    <Slide className="items-center text-center">
      <SlideTitle>One Commit = One Purpose</SlideTitle>
      <SlideSubtitle>Keep commits atomic, focused, and reversible.</SlideSubtitle>

      <div className="flex flex-col md:flex-row gap-16 mt-8 w-full max-w-4xl">
        {/* Bad Example */}
        <motion.div 
          className="flex-1 glass-panel rounded-3xl p-8 border border-white/5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8 text-[#F85149]">
            <X size={32} />
            <h3 className="text-2xl font-bold">The Monolith</h3>
          </div>
          
          <div className="relative pt-4">
            <motion.div 
              className="w-32 h-32 rounded-full bg-[#F85149]/20 border-4 border-[#F85149] mx-auto flex items-center justify-center relative shadow-[0_0_30px_rgba(248,81,73,0.3)]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.8 }}
            >
              <div className="text-center font-jetbrains text-xs">
                <div>+ Add auth</div>
                <div>+ Fix navbar</div>
                <div>+ Update DB</div>
                <div>+ README</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Good Example */}
        <motion.div 
          className="flex-1 glass-panel rounded-3xl p-8 border border-white/5 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex items-center gap-4 mb-8 text-[#3FB950]">
            <Check size={32} />
            <h3 className="text-2xl font-bold">Atomic Commits</h3>
          </div>

          <div className="flex flex-col gap-6 relative">
            <div className="absolute left-8 top-4 bottom-4 w-1 bg-[#3FB950]/20 rounded-full" />
            
            {[
              { m: 'feat(auth): google login', delay: 2.0 },
              { m: 'fix(nav): mobile layout', delay: 2.3 },
              { m: 'chore(db): update schema', delay: 2.6 },
              { m: 'docs: add setup guide', delay: 2.9 },
            ].map((commit, i) => (
              <motion.div 
                key={i}
                className="flex items-center gap-4 z-10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: commit.delay }}
              >
                <div className="w-4 h-4 rounded-full bg-[#3FB950] ml-[26px] ring-4 ring-[#0D1117]" />
                <div className="font-jetbrains text-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10 text-white/80 w-full text-left">
                  {commit.m}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};
