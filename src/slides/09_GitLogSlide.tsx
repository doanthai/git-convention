import React, { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { Slide, SlideTitle } from '../components/Presentation/Slide';

export const GitLogSlide: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 3000);
    const t2 = setTimeout(() => setStep(2), 6000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <Slide className="items-center text-center">
      <SlideTitle>Visualize History</SlideTitle>
      
      <div className="w-full max-w-4xl mt-8 bg-[#010409] rounded-xl border border-white/10 overflow-hidden shadow-2xl text-left font-jetbrains text-sm md:text-base">
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="mx-auto text-white/40 text-xs">user@macbook: ~/project</div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 h-[400px] overflow-hidden relative">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="cmd1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <span className="text-[#3FB950]">$</span> <span className="text-white">git log</span>
                <motion.div className="mt-4 text-white/80" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                  <div className="text-[#D29922]">commit 9fceb02 (HEAD -&gt; main)</div>
                  <div>Author: Dev &lt;dev@team.com&gt;</div>
                  <div>Date:   Mon Oct 12 14:20:00 2026 +0000</div>
                  <div className="mt-2 ml-4">feat(auth): add google login</div>
                  <br/>
                  <div className="text-[#D29922]">commit 4a2b1c3</div>
                  <div>Author: Dev &lt;dev@team.com&gt;</div>
                  <div>Date:   Mon Oct 12 10:15:00 2026 +0000</div>
                  <div className="mt-2 ml-4">fix(nav): responsive layout</div>
                </motion.div>
              </motion.div>
            )}

            {step >= 1 && (
              <motion.div key="cmd2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <span className="text-[#3FB950]">$</span> <span className="text-white">git log --graph --oneline --all</span>
                <motion.div className="mt-4 font-jetbrains" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                  <div className="text-white/80">
                    <span className="text-[#D29922]">*</span> <span className="text-[#D29922]">9fceb02</span> <span className="text-[#58A6FF]">(HEAD -&gt; main)</span> feat(auth): add google login<br/>
                    <span className="text-[#F85149]">| *</span> <span className="text-[#D29922]">b3c4d5e</span> <span className="text-[#3FB950]">(feature/payment)</span> feat(stripe): integrate checkout<br/>
                    <span className="text-[#F85149]">| *</span> <span className="text-[#D29922]">e5f6a7b</span> refactor(api): payment endpoint<br/>
                    <span className="text-[#F85149]">|/</span>  <br/>
                    <span className="text-[#F85149]">*</span> <span className="text-[#D29922]">4a2b1c3</span> fix(nav): responsive layout<br/>
                    <span className="text-[#F85149]">*</span> <span className="text-[#D29922]">1c2d3e4</span> <span className="text-[#3FB950]">(tag: v1.0.0)</span> Initial release<br/>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Slide>
  );
};
