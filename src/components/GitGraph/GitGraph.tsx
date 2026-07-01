import React, { createContext, useContext } from 'react';

import { motion } from 'framer-motion';

interface GitGraphContextType {
  gridSizeX: number;
  gridSizeY: number;
}

const GitGraphContext = createContext<GitGraphContextType>({ gridSizeX: 80, gridSizeY: 60 });

export const useGitGraph = () => useContext(GitGraphContext);

interface GitGraphProps {
  children: React.ReactNode;
  gridSizeX?: number;
  gridSizeY?: number;
  className?: string;
}

export const GitGraph: React.FC<GitGraphProps> = ({ 
  children, 
  gridSizeX = 100, 
  gridSizeY = 80,
  className = ""
}) => {
  return (
    <GitGraphContext.Provider value={{ gridSizeX, gridSizeY }}>
      <div className={`relative ${className}`}>
        {children}
      </div>
    </GitGraphContext.Provider>
  );
};

interface GitNodeProps {
  x: number;
  y: number;
  color?: string;
  label?: string;
  delay?: number;
  active?: boolean;
}

export const GitNode: React.FC<GitNodeProps> = ({ 
  x, y, color = '#F05032', label, delay = 0, active = false 
}) => {
  const { gridSizeX, gridSizeY } = useGitGraph();
  
  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center z-10"
      style={{
        left: x * gridSizeX,
        top: y * gridSizeY,
        width: 24,
        height: 24,
        marginLeft: -12,
        marginTop: -12,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        delay 
      }}
    >
      <div 
        className="w-full h-full rounded-full border-4 shadow-lg flex items-center justify-center bg-[#0D1117]"
        style={{ borderColor: color, boxShadow: active ? `0 0 15px ${color}` : 'none' }}
      >
        {active && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />}
      </div>
      {label && (
        <motion.span 
          className="absolute -bottom-8 font-jetbrains text-xs whitespace-nowrap text-white/70"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.2 }}
        >
          {label}
        </motion.span>
      )}
    </motion.div>
  );
};

interface GitEdgeProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  color?: string;
  delay?: number;
  dashed?: boolean;
}

export const GitEdge: React.FC<GitEdgeProps> = ({
  startX, startY, endX, endY, color = '#F05032', delay = 0, dashed = false
}) => {
  const { gridSizeX, gridSizeY } = useGitGraph();
  
  const x1 = startX * gridSizeX;
  const y1 = startY * gridSizeY;
  const x2 = endX * gridSizeX;
  const y2 = endY * gridSizeY;
  
  // Calculate SVG path
  let path = '';
  if (startY === endY) {
    // Straight horizontal
    path = `M ${x1} ${y1} L ${x2} ${y2}`;
  } else if (startX === endX) {
    // Straight vertical
    path = `M ${x1} ${y1} L ${x2} ${y2}`;
  } else {
    // Curved path
    const midX = x1 + (x2 - x1) / 2;
    path = `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;
  }

  // To animate path drawing, we need to know its length. 
  // We can just use Framer Motion's pathLength magic.

  return (
    <svg className="absolute top-0 left-0 pointer-events-none z-0" style={{ width: '100%', height: '100%' }}>
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeDasharray={dashed ? "5,5" : "none"}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay }}
      />
    </svg>
  );
};

interface GitBranchProps {
  y: number;
  label: string;
  color: string;
  delay?: number;
}

export const GitBranch: React.FC<GitBranchProps> = ({ y, label, color, delay = 0 }) => {
  const { gridSizeY } = useGitGraph();
  
  return (
    <motion.div
      className="absolute left-[-150px] flex items-center h-6 z-20"
      style={{ top: y * gridSizeY - 12 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      <div 
        className="px-3 py-1 rounded-md text-xs font-jetbrains font-bold"
        style={{ backgroundColor: `${color}20`, color: color, border: `1px solid ${color}40` }}
      >
        {label}
      </div>
    </motion.div>
  );
};

interface GitTagProps {
  x: number;
  y: number;
  label: string;
  delay?: number;
}

export const GitTag: React.FC<GitTagProps> = ({ x, y, label, delay = 0 }) => {
  const { gridSizeX, gridSizeY } = useGitGraph();
  
  return (
    <motion.div
      className="absolute flex items-center z-30"
      style={{ left: x * gridSizeX - 10, top: y * gridSizeY - 40 }}
      initial={{ opacity: 0, y: -20, rotate: -10 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 15, delay }}
    >
      <div className="bg-[#D29922] text-[#0D1117] text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-lg relative font-jetbrains">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
        {label}
        {/* Triangle pointer */}
        <div className="absolute -bottom-1 left-3 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#D29922]"></div>
      </div>
    </motion.div>
  );
};

