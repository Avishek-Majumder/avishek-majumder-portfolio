import React, { useState, useRef } from 'react';
import { GripVertical } from 'lucide-react';

interface Props {
  imageSrc: string;
}

export default function ImageComparisonSlider({ imageSrc }: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : (event as React.MouseEvent).clientX;
    const x = clientX - left;
    const newPos = Math.max(0, Math.min(100, (x / width) * 100));
    setPosition(newPos);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden cursor-ew-resize select-none bg-slate-900 border border-slate-200 dark:border-slate-800 my-5 shadow-inner"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* Base: Clean / Super-Resolution Image (SNASRNet Output) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      
      {/* Overlay: Noisy / Degraded Image (Input) */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-none pointer-events-none"
        style={{ 
          backgroundImage: `url(${imageSrc})`,
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          filter: 'blur(2px) contrast(120%) brightness(85%) grayscale(20%)'
        }}
      >
        {/* SVG Noise pattern overlay to simulate realistic sensor noise */}
        <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute inset-y-0 w-0.5 bg-emerald-400 pointer-events-none flex items-center justify-center shadow-[0_0_10px_rgba(52,211,153,0.8)] z-10"
        style={{ left: `${position}%` }}
      >
        <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg border-2 border-white absolute -translate-x-[14px]">
          <GripVertical className="w-3.5 h-3.5 text-white" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[9px] font-mono px-2 py-1 rounded font-bold uppercase tracking-wider border border-white/10 pointer-events-none z-10">
        Input (Noisy)
      </div>
      <div className="absolute top-3 right-3 bg-emerald-500/90 backdrop-blur-md text-white text-[9px] font-mono px-2 py-1 rounded font-bold uppercase tracking-wider border border-emerald-400/30 pointer-events-none shadow-[0_0_15px_rgba(16,185,129,0.3)] z-10">
        Output (SNASRNet)
      </div>
    </div>
  );
}
