import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { Slide, SlideTitle } from '../components/Presentation/Slide';
import { GitGraph, GitNode, GitEdge, GitBranch } from '../components/GitGraph/GitGraph';

export const MergeVsRebaseSlide: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1000); // Start Merge
    const timer2 = setTimeout(() => setStep(2), 6000); // Start Rebase transition
    const timer3 = setTimeout(() => setStep(3), 8000); // Complete Rebase
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <Slide className="items-center text-center">
      <SlideTitle>Merge vs Rebase</SlideTitle>
      
      <div className="mt-8 flex justify-center w-full gap-8">
        {/* MERGE GRAPH */}
        <div className="glass-panel p-8 rounded-3xl w-full max-w-lg relative border border-white/5 opacity-100 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-12 text-[#8957e5]">Merge</h3>
          <GitGraph gridSizeX={50} gridSizeY={50} className="w-[300px] h-[200px]">
            <GitBranch y={1} label="main" color="#F85149" />
            <GitBranch y={3} label="feature" color="#58A6FF" delay={0.5} />

            {/* main base */}
            <GitNode x={1} y={1} color="#F85149" label="A" />
            <GitNode x={3} y={1} color="#F85149" label="B" delay={1} />
            <GitNode x={6} y={1} color="#8957e5" label="M" delay={3} /> {/* Merge commit */}

            {/* feature branch */}
            <GitNode x={2} y={3} color="#58A6FF" label="C" delay={1.5} />
            <GitNode x={4} y={3} color="#58A6FF" label="D" delay={2} />

            <GitEdge startX={1} startY={1} endX={3} endY={1} color="#F85149" />
            <GitEdge startX={3} startY={1} endX={6} endY={1} color="#F85149" delay={1.2} />

            <GitEdge startX={1} startY={1} endX={2} endY={3} color="#58A6FF" delay={1.0} />
            <GitEdge startX={2} startY={3} endX={4} endY={3} color="#58A6FF" delay={1.7} />
            
            <GitEdge startX={4} startY={3} endX={6} endY={1} color="#8957e5" delay={2.8} />
          </GitGraph>
        </div>

        {/* REBASE GRAPH */}
        <div className="glass-panel p-8 rounded-3xl w-full max-w-lg relative border border-white/5 opacity-100 flex flex-col items-center overflow-hidden">
          <h3 className="text-2xl font-bold mb-12 text-[#3FB950]">Rebase</h3>
          <GitGraph gridSizeX={50} gridSizeY={50} className="w-[300px] h-[200px]">
            <GitBranch y={1} label="main" color="#F85149" />
            
            {/* The feature branch label moves up during rebase */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: step >= 2 ? -100 : 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute w-full h-full"
            >
              <GitBranch y={3} label="feature" color="#58A6FF" delay={0.5} />
            </motion.div>

            {/* main base */}
            <GitNode x={1} y={1} color="#F85149" label="A" />
            <GitNode x={3} y={1} color="#F85149" label="B" delay={1} />

            {/* Original feature branch nodes (fade out during rebase) */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: step >= 2 ? 0.2 : 1 }}
              transition={{ duration: 0.5 }}
            >
              <GitNode x={2} y={3} color="#58A6FF" label="C" delay={1.5} />
              <GitNode x={4} y={3} color="#58A6FF" label="D" delay={2} />
              <GitEdge startX={1} startY={1} endX={2} endY={3} color="#58A6FF" delay={1.0} dashed={step >= 2} />
              <GitEdge startX={2} startY={3} endX={4} endY={3} color="#58A6FF" delay={1.7} dashed={step >= 2} />
            </motion.div>

            {/* Rebased nodes (appear on main line) */}
            {step >= 2 && (
              <>
                <GitNode x={5} y={1} color="#3FB950" label="C'" delay={0.5} active />
                <GitNode x={7} y={1} color="#3FB950" label="D'" delay={1.0} active />
                <GitEdge startX={3} startY={1} endX={5} endY={1} color="#3FB950" delay={0.2} />
                <GitEdge startX={5} startY={1} endX={7} endY={1} color="#3FB950" delay={0.7} />
              </>
            )}
            
            {/* Main line edge from A to B */}
            <GitEdge startX={1} startY={1} endX={3} endY={1} color="#F85149" />

          </GitGraph>
        </div>
      </div>
    </Slide>
  );
};
