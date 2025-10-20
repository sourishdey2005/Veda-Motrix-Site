'use client';

import { useState, useEffect } from 'react';
import LandingContent from '@/components/landing/landing-content';
import LoadingScreen from '@/components/landing/loading-screen';
import ParticleCanvas from '@/components/landing/particle-canvas';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isVisible={loading} />
      <div className={`relative flex min-h-screen w-full flex-col ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <ParticleCanvas />
        <div id="data-stream-container" className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"></div>
        <main className="flex-grow z-10">
          <LandingContent />
        </main>
      </div>
    </>
  );
}
