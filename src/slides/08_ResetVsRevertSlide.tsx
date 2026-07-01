import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { Slide, SlideTitle } from '../components/Presentation/Slide';
import { GitGraph, GitNode, GitEdge } from '../components/GitGraph/GitGraph';

export const ResetVsRevertSlide: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 2000);
    const t2 = setTimeout(() => setStep(2), 4000);
    const t3 = setTimeout(() => setStep(3), 6000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <Slide className="items-center text-center">
      <SlideTitle>Reset vs Revert</SlideTitle>
      
      <div className="mt-8 flex justify-center w-full gap-8">
        {/* RESET */}
        <div className="glass-panel p-8 rounded-3xl w-full max-w-lg relative border border-white/5 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4 text-[#F85149]">Reset</h3>
          <p className="text-white/60 mb-12 h-12">Moves HEAD backwards.<br/>Alters history.</p>
          
          <GitGraph gridSizeX={60} gridSizeY={50} className="w-[300px] h-[100px]">
            <GitNode x={1} y={1} color="#58A6FF" label="A" />
            <GitNode x={2.5} y={1} color="#58A6FF" label="B" delay={0.5} />
            <motion.div animate={{ opacity: step >= 2 ? 0.3 : 1 }}>
              <GitNode x={4} y={1} color="#58A6FF" label="C" delay={1} />
            </motion.div>

            <GitEdge startX={1} startY={1} endX={2.5} endY={1} color="#58A6FF" />
            <motion.div animate={{ opacity: step >= 2 ? 0.3 : 1 }}>
              <GitEdge startX={2.5} startY={1} endX={4} endY={1} color="#58A6FF" delay={0.7} dashed={step >= 2} />
            </motion.div>

            {/* HEAD Pointer */}
            <motion.div
              className="absolute bg-[#F85149] text-white text-[10px] font-jetbrains font-bold px-2 py-1 rounded shadow-lg z-30 flex items-center justify-center whitespace-nowrap"
              initial={{ left: 4 * 60 - 20, top: -30 }}
              animate={{ left: step >= 2 ? 2.5 * 60 - 20 : 4 * 60 - 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25, delay: step >= 2 ? 0 : 1.5 }}
            >
              HEAD
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#F85149]"></div>
            </motion.div>
          </GitGraph>
        </div>

        {/* REVERT */}
        <div className="glass-panel p-8 rounded-3xl w-full max-w-lg relative border border-white/5 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4 text-[#3FB950]">Revert</h3>
          <p className="text-white/60 mb-12 h-12">Creates a new commit<br/>that undoes changes. Safe.</p>
          
          <GitGraph gridSizeX={60} gridSizeY={50} className="w-[300px] h-[100px]">
            <GitNode x={0.5} y={1} color="#58A6FF" label="A" />
            <GitNode x={2} y={1} color="#58A6FF" label="B" delay={0.5} />
            <GitNode x={3.5} y={1} color="#58A6FF" label="C" delay={1} />
            
            {step >= 3 && (
              <GitNode x={5} y={1} color="#3FB950" label="Revert C" delay={0.2} active />
            )}

            <GitEdge startX={0.5} startY={1} endX={2} endY={1} color="#58A6FF" />
            <GitEdge startX={2} startY={1} endX={3.5} endY={1} color="#58A6FF" delay={0.7} />
            
            {step >= 3 && (
              <GitEdge startX={3.5} startY={1} endX={5} endY={1} color="#3FB950" delay={0.1} />
            )}

            {/* HEAD Pointer */}
            <motion.div
              className="absolute bg-[#3FB950] text-white text-[10px] font-jetbrains font-bold px-2 py-1 rounded shadow-lg z-30 flex items-center justify-center whitespace-nowrap"
              initial={{ left: 3.5 * 60 - 20, top: -30 }}
              animate={{ left: step >= 3 ? 5 * 60 - 20 : 3.5 * 60 - 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25, delay: step >= 3 ? 0.5 : 1.5 }}
            >
              HEAD
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#3FB950]"></div>
            </motion.div>
          </GitGraph>
        </div>
      </div>
    </Slide>
  );
};
