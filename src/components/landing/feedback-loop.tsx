'use client';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

const loopSteps = [
  { name: 'Issue' },
  { name: 'RCA' },
  { name: 'CAPA' },
  { name: 'Design Improvement' },
  { name: 'Reduced Defects' },
];

export function FeedbackLoop() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-glow mb-2 text-center text-3xl font-bold tracking-tight text-white relative text-glitch">
        RCA/CAPA Feedback Loop
      </h2>
      <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
        Closing the loop from in-field performance back to manufacturing for
        continuous improvement.
      </p>
      <div className="relative flex items-center justify-center w-full aspect-square max-w-lg mx-auto">
        <motion.div
          className="absolute w-full h-full border-2 border-dashed border-primary/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        ></motion.div>

        <div className="absolute flex flex-col items-center justify-center">
          <BrainCircuit className="w-16 h-16 text-secondary" />
          <h3
            className="text-xl font-bold text-secondary mt-2"
            style={{ textShadow: '0 0 10px hsl(var(--secondary) / 0.5)' }}
          >
            VEDA Loop
          </h3>
        </div>

        {loopSteps.map((step, index) => {
          const angle = (index / loopSteps.length) * 2 * Math.PI - Math.PI / 2; // angle in radians, starting from top
          const x = 50 + 45 * Math.cos(angle);
          const y = 50 + 45 * Math.sin(angle);
          
          return (
            <motion.div
              key={index}
              className="absolute flex flex-col items-center text-center"
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: 'translate(-50%, -50%)',
                width: 'max-content',
                maxWidth: '120px',
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="px-4 py-2 rounded-lg bg-card border border-border shadow-md">
                <p className="text-sm font-semibold text-white">{step.name}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}