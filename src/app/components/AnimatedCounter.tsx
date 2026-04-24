import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({ value, suffix = '', duration = 2 }: AnimatedCounterProps) {
  const [display, setDisplay] = useState<number>(0);

  useEffect(() => {
    if (value === 0) {
      setDisplay(0);
      return;
    }
    const start = performance.now();
    const from = 0;
    const total = duration * 1000;
    let raf = 0;

    const step = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / total);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(from + (value - from) * eased));
      if (t < 1) raf = requestAnimationFrame(step);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(step);

    const safety = setTimeout(() => setDisplay(value), total + 300);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(safety);
    };
  }, [value, duration]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}
