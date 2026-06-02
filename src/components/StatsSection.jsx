import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/landingContent.js';
import { SectionHeader } from './SectionHeader.jsx';

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return undefined;

    let frameId;
    const duration = 1500;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [hasStarted, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="section-shell">
      <SectionHeader eyebrow="Legacy Statistics" title="The signal has scale">
        The numbers feel less like data and more like proof: thousands of participants, hundreds of events, and a
        legacy that keeps rewriting campus culture.
      </SectionHeader>
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            className="stat-panel"
            key={stat.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <p className="font-display text-4xl font-black text-white sm:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
