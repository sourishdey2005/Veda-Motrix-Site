"use client";

import { useEffect, useRef, useState } from 'react';

type CounterProps = {
  target: number;
  duration?: number;
};

const Counter = ({ target, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = target;
          if (start === end) return;

          const incrementTime = Math.max(10, duration / end);
          
          const timer = setInterval(() => {
            start += Math.ceil(end / (duration / incrementTime));
            if (start > end) {
              start = end;
            }
            setCount(start);
            if (start === end) {
              clearInterval(timer);
            }
          }, incrementTime);
          
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  return (
    <p ref={ref} className="text-4xl font-bold text-primary text-glow">
      {Math.ceil(count).toLocaleString()}+
    </p>
  );
};

export default Counter;
