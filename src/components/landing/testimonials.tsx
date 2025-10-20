"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    name: 'Aria Chen',
    title: 'Fleet Manager, Nexus Logistics',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-aria'),
    quote: 'VEDA-MOTRIX transformed our operations. Predictive maintenance alerts have cut our downtime by 40%. It’s like having a crystal ball for our vehicles. The interface is intuitive, and the depth of data is simply astounding.'
  },
  {
    name: 'Jaxson Riley',
    title: 'Lead Operations, AutoHaul Inc.',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-jaxson'),
    quote: 'The real-time analytics are a game-changer. We can reroute trucks based on live traffic and weather data, saving us thousands in fuel costs weekly. VEDA-MOTRIX isn\'t just a tool; it\'s our strategic partner on the road.'
  },
  {
    name: 'Zoe Iskander',
    title: 'CTO, Eco-Transit Solutions',
    image: PlaceHolderImages.find(img => img.id === 'testimonial-zoe'),
    quote: 'Security is our top priority. The enhanced security protocols and instant anomaly detection from VEDA-MOTRIX give us and our clients unparalleled peace of mind. Their system integrated flawlessly with our existing stack.'
  }
];

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12">
      <h2 className="text-glow mb-8 text-center text-3xl font-bold tracking-tight text-white relative text-glitch">Voices of the Vanguard</h2>
      <div className="relative mx-auto max-w-2xl px-4 h-80">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`card-hover-effect rounded-xl border border-primary/20 bg-background/50 p-6 backdrop-blur-sm text-center transition-all duration-500 ease-in-out ${activeSlide === index ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-8 absolute top-0 left-4 right-4'}`}
          >
            {testimonial.image && (
              <Image
                alt={testimonial.name}
                src={testimonial.image.imageUrl}
                width={96}
                height={96}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-primary/50 shadow-lg shadow-primary/20"
                data-ai-hint={testimonial.image.imageHint}
              />
            )}
            <p className="text-lg font-medium text-white">{testimonial.name}</p>
            <p className="text-sm text-accent mb-4">{testimonial.title}</p>
            <p className="text-white/80 italic">" {testimonial.quote} "</p>
          </div>
        ))}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full hover:bg-primary/70 transition-colors ${activeSlide === index ? 'bg-primary' : 'bg-primary/30'}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
