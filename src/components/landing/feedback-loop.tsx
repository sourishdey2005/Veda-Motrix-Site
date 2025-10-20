
'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const VedaLoopIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="hsl(var(--accent))" strokeWidth="3" {...props}>
        <path d="M50 20 C65 20, 70 35, 70 35 C70 45, 60 50, 50 50 C40 50, 30 45, 30 35 C30 35, 35 20, 50 20 Z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M50 50 V 80" strokeLinecap="round"/>
        <path d="M30 55 C20 55, 15 65, 15 75" strokeLinecap="round"/>
        <path d="M70 55 C80 55, 85 65, 85 75" strokeLinecap="round"/>
        <circle cx="15" cy="75" r="4" fill="hsl(var(--accent))" />
        <circle cx="85" cy="75" r="4" fill="hsl(var(--accent))" />
        <path d="M50 80 H 40 L 35 70" strokeLinecap="round"/>
        <path d="M50 80 H 60 L 65 70" strokeLinecap="round"/>
        <circle cx="35" cy="70" r="3" fill="hsl(var(--accent))" />
        <circle cx="65" cy="70" r="3" fill="hsl(var(--accent))" />
        <path d="M30 35 C25 38, 25 45, 30 48" strokeLinecap="round"/>
        <path d="M70 35 C75 38, 75 45, 70 48" strokeLinecap="round"/>
    </svg>
);

const loopItems = [
    { name: 'Issue', angle: -90 },
    { name: 'RCA', angle: -18 },
    { name: 'CAPA', angle: 54 },
    { name: 'Design Improvement', angle: 126 },
    { name: 'Reduced Defects', angle: 198 },
];

type BinaryStream = {
  key: number;
  style: React.CSSProperties;
  content: string;
};

export default function FeedbackLoop() {
  const [binaryStreams, setBinaryStreams] = useState<BinaryStream[]>([]);

  useEffect(() => {
    const streams = Array.from({ length: 20 }).map((_, i) => ({
      key: i,
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animation: `fade-and-move ${5 + Math.random() * 5}s linear infinite`,
        animationDelay: `${Math.random() * 5}s`,
      },
      content: Array(Math.floor(Math.random() * 15) + 10).fill(0).map(() => Math.round(Math.random())).join('')
    }));
    setBinaryStreams(streams);
  }, []);


  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 relative overflow-hidden bg-background/90">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-glow text-3xl font-bold tracking-tight text-white sm:text-4xl relative">
          RCA/CAPA Feedback Loop
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
          Closing the loop from in-field performance back to manufacturing for continuous improvement.
        </p>
      </div>

      <div className="relative w-full flex items-center justify-center" style={{ minHeight: '500px' }}>
        
        {/* Central Element */}
        <div className="relative z-10 flex flex-col items-center gap-2">
            <VedaLoopIcon className="w-24 h-24 text-accent animate-pulse" style={{ animationDuration: '3s' }} />
            <h3 className="text-2xl font-bold text-accent text-glow">VEDA Loop</h3>
        </div>

        {/* Orbiting Container */}
        <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
            {/* Dashed Circle */}
            <div className="w-full h-full border-2 border-dashed border-primary/50 rounded-full"></div>
            
            {/* Orbiting Items */}
            {loopItems.map((item, index) => {
              const angleRad = (item.angle * Math.PI) / 180;
              const x = 50 + 50 * Math.cos(angleRad);
              const y = 50 + 50 * Math.sin(angleRad);
              return (
                <div
                    key={item.name}
                    className="absolute"
                    style={{
                        top: `${y}%`,
                        left: `${x}%`,
                        transform: 'translate(-50%, -50%)',
                        animation: `fade-in-node 1s ease-out ${index * 0.2}s forwards`, 
                        opacity: 0
                    }}
                >
                    <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-2 text-center shadow-lg shadow-primary/10 min-w-[120px]">
                        <span className="text-white font-semibold whitespace-pre-wrap">{item.name}</span>
                    </div>
                </div>
              )
            })}
        </div>
        
         {/* Binary code streams in background */}
         {binaryStreams.map(stream => (
            <span key={stream.key} className="absolute text-primary/20 text-xs font-mono" style={stream.style}>
                {stream.content}
            </span>
        ))}
      </div>
    </section>
  );
}
