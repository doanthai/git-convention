import React, { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { Slide, SlideTitle } from '../components/Presentation/Slide';
import { GitGraph, GitNode, GitEdge } from '../components/GitGraph/GitGraph';
import { AlertTriangle, Smile } from 'lucide-react';

export const GitReflogSlide: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 2000); // Reset happens
    const t2 = setTimeout(() => setStep(2), 5000); // Reflog command
    const t3 = setTimeout(() => setStep(3), 7000); // Recovered
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <Slide className="items-center text-center">
      <SlideTitle>The Safety Net: Reflog</SlideTitle>
      
      <div className="flex flex-col items-center mt-12 w-full max-w-2xl">
        <div className="h-16 mb-4 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {step === 0 && <motion.div key="1" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="text-white/60 text-xl">Working normally...</motion.div>}
            {step === 1 && (
              <motion.div key="2" initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} exit={{opacity:0}} className="flex items-center gap-2 text-[#F85149] text-xl font-bold">
                <AlertTriangle /> Oops! git reset --hard HEAD~2
              </motion.div>
            )}
            {step === 2 && (
              <motion.div key="3" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="font-jetbrains text-[#3FB950] text-xl">
                $ git reflog
              </motion.div>
            )}
            {step === 3 && (
              <motion.div key="4" initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} className="flex items-center gap-2 text-[#58A6FF] text-xl font-bold">
                <Smile /> git reset --hard HEAD@{'{'}1{'}'} (Recovered!)
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="glass-panel p-12 rounded-3xl w-full border border-white/5 relative flex justify-center mt-4 h-64 overflow-visible">
          <GitGraph gridSizeX={70} gridSizeY={60} className="w-[400px] h-[100px] mt-12">
            <GitNode x={1} y={1} color="#8b949e" label="A" />
            <GitNode x={2} y={1} color="#8b949e" label="B" />
            
            <GitEdge startX={1} startY={1} endX={2} endY={1} color="#8b949e" />

            <AnimatePresence>
              {(step === 0 || step >= 3) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: 50, scale: 0.5 }}
                  transition={{ duration: 0.5 }}
                >
                  <GitNode x={3} y={1} color="#58A6FF" label="C" />
                  <GitNode x={4} y={1} color="#58A6FF" label="D" />
                  <GitEdge startX={2} startY={1} endX={3} endY={1} color="#58A6FF" />
                  <GitEdge startX={3} startY={1} endX={4} endY={1} color="#58A6FF" />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              className="absolute bg-[#F85149] text-white text-[10px] font-jetbrains font-bold px-2 py-1 rounded shadow-lg z-30"
              initial={{ left: 4 * 70 - 15, top: 1 * 60 - 45 }}
              animate={{ 
                left: step === 1 || step === 2 ? 2 * 70 - 15 : 4 * 70 - 15,
                top: 1 * 60 - 45
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              HEAD
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#F85149]"></div>
            </motion.div>
          </GitGraph>
        </div>
      </div>
    </Slide>
  );
};
