import React, { useEffect, useRef } from 'react';

import { usePresentation } from './PresentationContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Presentation: React.FC<{ children: React.ReactNode[] }> = ({ children }) => {
  const { currentSlide, totalSlides, nextSlide, prevSlide } = usePresentation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      isTransitioning.current = false;
    }, 700);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handleWheel = (e: React.WheelEvent) => {
    if (isTransitioning.current) return;
    
    if (Math.abs(e.deltaY) > 30) {
      if (e.deltaY > 0) {
        isTransitioning.current = true;
        nextSlide();
      } else {
        isTransitioning.current = true;
        prevSlide();
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isTransitioning.current) return;

    const touchEndY = e.changedTouches[0].clientY;
    const touchEndX = e.changedTouches[0].clientX;
    
    const deltaY = touchStartY.current - touchEndY;
    const deltaX = touchStartX.current - touchEndX;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (Math.abs(deltaX) > 50) {
        isTransitioning.current = true;
        if (deltaX > 0) nextSlide();
        else prevSlide();
      }
    } else {
      if (Math.abs(deltaY) > 50) {
        isTransitioning.current = true;
        if (deltaY > 0) nextSlide();
        else prevSlide();
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="w-screen h-screen overflow-hidden bg-[#0D1117] text-white relative flex flex-col selection:bg-[#F05032] selection:text-white"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 z-50">
        <motion.div 
          className="h-full bg-[#F05032]"
          initial={{ width: 0 }}
          animate={{ width: `${(currentSlide / (totalSlides - 1 || 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      <div className="flex-1 relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 md:p-16 lg:p-24"
          >
            {children[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 right-8 flex items-center space-x-4 z-50 font-jetbrains text-sm text-white/30">
        <span>{String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}</span>
      </div>
    </div>
  );
};
