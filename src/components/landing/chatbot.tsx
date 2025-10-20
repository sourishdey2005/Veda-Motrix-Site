'use client';

import { useState } from 'react';
import { X, Bot, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const chatbotData = [
    {
      question: "What is VEDA-MOTRIX AI?",
      answer: "VEDA-MOTRIX AI is an advanced intelligent vehicle management platform. It uses AI and machine learning to provide predictive maintenance, performance analytics, enhanced security, and real-time tracking to optimize vehicle and fleet operations."
    },
    {
      question: "How does predictive maintenance work?",
      answer: "Our AI ingests terabytes of data from vehicle sensors, identifying subtle patterns that precede system failures. By cross-referencing this with a vast historical database, it forecasts maintenance needs with over 95% accuracy."
    },
    {
      question: "Is VEDA-MOTRIX compatible with my vehicles?",
      answer: "VEDA-MOTRIX is designed for universal integration. Our adaptive API seamlessly interfaces with standard OBD-II ports, CAN bus systems, and proprietary data protocols from major automotive manufacturers. We also offer custom integration solutions."
    },
    {
      question: "What are the core capabilities?",
      answer: "Our core capabilities include Predictive Maintenance, Performance Analytics, Enhanced Security, User Management, Real-Time Tracking, and Efficiency Optimization."
    },
    {
      question: "Who is on the team behind VEDA-MOTRIX?",
      answer: "Our team consists of industry visionaries: Ethan Carter (Chief Visionary Officer), Olivia Bennett (Chief Technology Officer), and Noah Thompson (Head of Engineering)."
    },
    {
      question: "How does the RCA/CAPA feedback loop work?",
      answer: "The VEDA Loop closes the gap between in-field vehicle performance and manufacturing. It identifies issues, performs Root Cause Analysis (RCA), implements Corrective and Preventive Actions (CAPA), and informs design improvements to reduce future defects."
    },
    {
      question: "What kind of support can I expect?",
      answer: "We offer comprehensive support through our encrypted communication channels and dedicated command center. Our team is ready to assist with integration, operation, and any inquiries you may have."
    },
    {
      question: "How do you ensure data privacy and security?",
      answer: "We employ multi-layered defense systems, end-to-end encryption, and strict data segregation. Operators retain full control over their data with rights to access, purge, and manage consent, as detailed in our Privacy Protocol."
    },
    {
      question: "Can I get a live demonstration?",
      answer: "Yes, we offer live demonstrations to showcase the full power of the VEDA-MOTRIX platform. You can request access through our main interface to schedule a session with a solutions architect."
    },
    {
      question: "How can I subscribe to updates?",
      answer: "You can subscribe to our Intelligence Briefings via the form on our landing page to receive classified updates, industry analysis, and platform intel directly to your inbox."
    }
  ];
  

type ChatbotProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const handleQuestionSelect = (index: number) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed bottom-24 right-4 z-50 w-[90vw] max-w-sm h-[70vh] max-h-[600px] chatbot-container"
        >
          <div className="h-full w-full rounded-xl border-2 border-primary/30 bg-background/80 backdrop-blur-lg shadow-2xl shadow-primary/20 flex flex-col">
            <header className="flex items-center justify-between p-4 border-b border-primary/20">
              <div className="flex items-center gap-3">
                <Bot className="h-7 w-7 text-primary animate-glow" />
                <h2 className="text-lg font-bold text-glow">VEDA Assistant</h2>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full text-white/70 hover:bg-primary/20 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            <div className="flex-grow p-4 overflow-y-auto space-y-3">
              {chatbotData.map((item, index) => (
                <div key={index} className="chatbot-question" style={{animationDelay: `${index * 100}ms`}}>
                  <button
                    onClick={() => handleQuestionSelect(index)}
                    className="w-full text-left p-3 rounded-lg bg-background/70 border border-primary/20 hover:bg-primary/10 transition-all duration-300 group flex justify-between items-center"
                  >
                    <span className="text-sm text-white/90">{item.question}</span>
                    <ChevronRight className={`h-5 w-5 text-primary/70 transition-transform duration-300 ${selectedQuestion === index ? 'rotate-90' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {selectedQuestion === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: '0.5rem' }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="chatbot-answer overflow-hidden"
                      >
                         <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 text-sm text-white/80">
                            {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <footer className="p-3 text-center text-xs text-white/50 border-t border-primary/20">
                Powered by VEDA-MOTRIX AI
            </footer>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
