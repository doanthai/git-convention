import React from 'react';

import { Slide, SlideTitle, SlideSubtitle } from '../components/Presentation/Slide';
import { GitGraph, GitNode, GitEdge, GitTag } from '../components/GitGraph/GitGraph';

export const GitTagSlide: React.FC = () => {
  return (
    <Slide className="items-center text-center">
      <SlideTitle>Tags & Releases</SlideTitle>
      <SlideSubtitle>Marking specific points in history as important</SlideSubtitle>

      <div className="mt-16 w-full max-w-4xl p-12 glass-panel rounded-3xl border border-white/5 flex justify-center">
        <GitGraph gridSizeX={100} gridSizeY={80} className="w-[600px] h-[100px] mt-16">
          <GitNode x={1} y={1} color="#8b949e" delay={0.2} />
          <GitNode x={2} y={1} color="#58A6FF" delay={0.4} />
          <GitNode x={3} y={1} color="#8b949e" delay={0.6} />
          <GitNode x={4} y={1} color="#3FB950" delay={0.8} />
          <GitNode x={5} y={1} color="#8b949e" delay={1.0} />
          <GitNode x={6} y={1} color="#F85149" delay={1.2} />

          <GitEdge startX={1} startY={1} endX={6} endY={1} color="#8b949e" delay={0.3} />

          <GitTag x={2} y={1} label="v1.0.0" delay={1.5} />
          <GitTag x={4} y={1} label="v1.1.0" delay={2.0} />
          <GitTag x={6} y={1} label="v2.0.0" delay={2.5} />
        </GitGraph>
      </div>
    </Slide>
  );
};
