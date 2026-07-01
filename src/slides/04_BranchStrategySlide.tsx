import React from 'react';

import { Slide, SlideTitle } from '../components/Presentation/Slide';
import { GitGraph, GitNode, GitEdge, GitBranch } from '../components/GitGraph/GitGraph';

export const BranchStrategySlide: React.FC = () => {
  return (
    <Slide className="items-center">
      <SlideTitle>Branch Strategy</SlideTitle>
      
      <div className="mt-12 p-12 glass-panel rounded-3xl w-full max-w-4xl relative overflow-visible ml-32">
        <GitGraph gridSizeX={60} gridSizeY={50} className="w-[600px] h-[300px]">
          {/* Branches */}
          <GitBranch y={1} label="main" color="#F85149" delay={0.5} />
          <GitBranch y={2} label="develop" color="#58A6FF" delay={1} />
          <GitBranch y={3} label="feature/login" color="#3FB950" delay={2} />
          <GitBranch y={4} label="hotfix/crash" color="#D29922" delay={4} />

          {/* main nodes */}
          <GitNode x={1} y={1} color="#F85149" delay={0.8} />
          <GitNode x={8} y={1} color="#F85149" delay={5.5} />

          {/* develop nodes */}
          <GitNode x={2} y={2} color="#58A6FF" delay={1.5} />
          <GitNode x={7} y={2} color="#58A6FF" delay={4.5} />

          {/* feature nodes */}
          <GitNode x={3} y={3} color="#3FB950" delay={2.5} />
          <GitNode x={4} y={3} color="#3FB950" delay={3.0} />
          <GitNode x={5} y={3} color="#3FB950" delay={3.5} />

          {/* hotfix nodes */}
          <GitNode x={2.5} y={4} color="#D29922" delay={4.2} />

          {/* main edges */}
          <GitEdge startX={1} startY={1} endX={8} endY={1} color="#F85149" delay={1.0} />

          {/* develop edges */}
          <GitEdge startX={1} startY={1} endX={2} endY={2} color="#58A6FF" delay={1.2} />
          <GitEdge startX={2} startY={2} endX={7} endY={2} color="#58A6FF" delay={1.8} />
          <GitEdge startX={7} startY={2} endX={8} endY={1} color="#58A6FF" delay={5.0} />

          {/* feature edges */}
          <GitEdge startX={2} startY={2} endX={3} endY={3} color="#3FB950" delay={2.2} />
          <GitEdge startX={3} startY={3} endX={4} endY={3} color="#3FB950" delay={2.8} />
          <GitEdge startX={4} startY={3} endX={5} endY={3} color="#3FB950" delay={3.2} />
          <GitEdge startX={5} startY={3} endX={7} endY={2} color="#3FB950" delay={4.0} />

          {/* hotfix edges */}
          <GitEdge startX={1} startY={1} endX={2.5} endY={4} color="#D29922" delay={4.0} />
          <GitEdge startX={2.5} startY={4} endX={8} endY={1} color="#D29922" delay={4.8} />

        </GitGraph>
      </div>
    </Slide>
  );
};
