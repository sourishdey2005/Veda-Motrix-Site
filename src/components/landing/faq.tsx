'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "What is VEDA-MOTRIX AI?",
    answer: "VEDA-MOTRIX AI is an advanced intelligent vehicle management platform. It uses AI and machine learning to provide predictive maintenance, performance analytics, enhanced security, and real-time tracking to optimize vehicle and fleet operations. It is the central nervous system for modern automotive ecosystems."
  },
  {
    id: 2,
    question: "How does predictive maintenance work?",
    answer: "Our AI ingests terabytes of data from vehicle sensors, identifying subtle patterns and anomalies that precede system failures. By cross-referencing this real-time data with a vast historical database of component performance, it forecasts maintenance needs with over 95% accuracy, turning reactive repairs into proactive optimizations."
  },
  {
    id: 3,
    question: "Is VEDA-MOTRIX compatible with my vehicles?",
    answer: "VEDA-MOTRIX is designed for universal integration. Our adaptive API seamlessly interfaces with standard OBD-II ports, CAN bus systems, and proprietary data protocols from major automotive manufacturers. For bespoke systems, our special projects division can architect a custom integration solution. Contact a solutions architect for a compatibility assessment."
  }
];

const FaqItem = ({ faq, isOpen, onToggle }: { faq: typeof faqData[0], isOpen: boolean, onToggle: () => void }) => {
  return (
    <div className="rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm transition-all duration-300">
      <button onClick={onToggle} className="flex w-full items-center justify-between p-4 text-left group">
        <span className="text-base font-semibold text-white group-hover:text-primary transition-colors">{faq.question}</span>
        <Plus className={`h-6 w-6 text-primary transition-transform duration-300 ${isOpen ? 'rotate-45 text-accent' : ''}`} />
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{ maxHeight: isOpen ? '500px' : '0px' }}
      >
        <div className="p-4 pt-0 text-white/80">
          <p>{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="text-glow mb-8 text-center text-3xl font-bold tracking-tight text-white relative text-glitch">Declassified Information</h2>
      <div className="mx-auto max-w-3xl space-y-4">
        {faqData.map((faq) => (
          <FaqItem key={faq.id} faq={faq} isOpen={openFaq === faq.id} onToggle={() => handleToggle(faq.id)} />
        ))}
      </div>
    </section>
  );
}
