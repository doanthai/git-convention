import React from 'react';

import { motion } from 'framer-motion';
import { Slide, SlideTitle } from '../components/Presentation/Slide';
import { GitBranch, Code, GitCommit, ArrowUpCircle, GitPullRequest, Eye, GitMerge, Rocket } from 'lucide-react';

const steps = [
  { icon: GitBranch, label: 'Feature Branch', color: '#58A6FF' },
  { icon: Code, label: 'Coding', color: '#8b949e' },
  { icon: GitCommit, label: 'Commit', color: '#8957e5' },
  { icon: ArrowUpCircle, label: 'Push', color: '#8b949e' },
  { icon: GitPullRequest, label: 'Pull Request', color: '#3FB950' },
  { icon: Eye, label: 'Review', color: '#D29922' },
  { icon: GitMerge, label: 'Merge', color: '#8957e5' },
  { icon: Rocket, label: 'Release', color: '#F85149' },
];

export const WorkflowSlide: React.FC = () => {
  return (
    <Slide className="items-center text-center">
      <SlideTitle>Professional Git Workflow</SlideTitle>
      
      <div className="w-full mt-16 max-w-5xl">
        <div className="flex flex-wrap justify-center items-center gap-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <React.Fragment key={index}>
                <motion.div
                  className="flex flex-col items-center relative w-32"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.4, type: "spring" }}
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 glass-panel border border-white/10"
                    style={{ color: step.color, boxShadow: `0 8px 32px ${step.color}20` }}
                  >
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-white/80">{step.label}</span>
                </motion.div>

                {!isLast && (
                  <motion.div
                    className="h-[2px] w-8 md:w-12 mx-2 bg-gradient-to-r from-white/10 to-white/40 rounded-full"
                    initial={{ scaleX: 0, opacity: 0, transformOrigin: "left" }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.4, duration: 0.3 }}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </Slide>
  );
};
