import React from 'react';

import { motion } from 'framer-motion';
import { Slide, SlideTitle } from '../components/Presentation/Slide';
import { CheckCircle2 } from 'lucide-react';

const practices = [
  "Small, atomic commits",
  "Pull frequently before push",
  "Meaningful commit messages",
  "Clear branch naming (feat/, fix/)",
  "Code Review via PRs",
  "Rebase carefully (never on shared)",
  "Tag your releases",
  "Learn reflog for safety"
];

export const BestPracticesSlide: React.FC = () => {
  return (
    <Slide className="items-center text-center">
      <SlideTitle>Git Best Practices</SlideTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-12 w-full max-w-4xl text-left">
        {practices.map((practice, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 glass-panel p-4 rounded-xl border border-white/5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.15 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 + index * 0.15, type: "spring", stiffness: 400 }}
            >
              <CheckCircle2 className="text-[#3FB950]" size={24} />
            </motion.div>
            <span className="text-lg text-white/90 font-medium">{practice}</span>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
};
