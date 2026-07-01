import React from 'react';

import { motion } from 'framer-motion';
import { Slide, SlideTitle } from '../components/Presentation/Slide';

const steps = [
  { label: 'Branch', color: '#58A6FF' },
  { label: 'Commit', color: '#8b949e' },
  { label: 'PR', color: '#8957e5' },
  { label: 'Review', color: '#D29922' },
  { label: 'Merge', color: '#8957e5' },
  { label: 'Release', color: '#F85149' },
  { label: 'Version', color: '#3FB950' },
  { label: 'Deploy', color: '#58A6FF' },
];

export const SummarySlide: React.FC = () => {
  return (
    <Slide className="items-center text-center">
      <SlideTitle>Putting It All Together</SlideTitle>
      
      <div className="mt-24 w-full max-w-5xl relative">
        {/* Connection Line Background */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full" />
        
        {/* Animated Connection Line */}
        <motion.div 
          className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#58A6FF] via-[#8957e5] to-[#3FB950] -translate-y-1/2 rounded-full z-0"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />

        <div className="flex justify-between relative z-10 w-full px-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center group cursor-default"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (index * (3 / steps.length)), type: "spring" }}
            >
              <motion.div 
                className="w-12 h-12 rounded-full flex items-center justify-center bg-[#0D1117] border-4 transition-transform group-hover:scale-125"
                style={{ borderColor: step.color }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 + (index * (3 / steps.length)), type: "spring" }}
              />
              <motion.span 
                className="absolute top-16 text-sm font-jetbrains font-bold whitespace-nowrap"
                style={{ color: step.color }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 + (index * (3 / steps.length)) }}
              >
                {step.label}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
};
