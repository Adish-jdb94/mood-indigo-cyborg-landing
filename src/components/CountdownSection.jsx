import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

function getNextMoodIndigoDate() {
  const now = new Date();
  const year = now.getMonth() > 11 || (now.getMonth() === 11 && now.getDate() > 16) ? now.getFullYear() + 1 : now.getFullYear();
  return new Date(`${year}-12-16T09:00:00+05:30`);
}

function getRemaining(targetDate) {
  const difference = Math.max(targetDate.getTime() - Date.now(), 0);
  const days = Math.floor(difference / 86_400_000);
  const hours = Math.floor((difference / 3_600_000) % 24);
  const minutes = Math.floor((difference / 60_000) % 60);
  const seconds = Math.floor((difference / 1_000) % 60);
  return { days, hours, minutes, seconds };
}

export function CountdownSection() {
  const targetDate = useMemo(() => getNextMoodIndigoDate(), []);
  const [remaining, setRemaining] = useState(() => getRemaining(targetDate));

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemaining(targetDate)), 1000);
    return () => window.clearInterval(timer);
  }, [targetDate]);

  const units = [
    ['Days', remaining.days],
    ['Hours', remaining.hours],
    ['Minutes', remaining.minutes],
    ['Seconds', remaining.seconds],
  ];

  return (
    <section className="section-shell">
      <motion.div
        className="mx-auto max-w-7xl overflow-hidden border border-cyan-300/20 bg-black/45 p-6 shadow-[0_0_120px_rgba(34,211,238,0.16)] backdrop-blur sm:p-10 lg:p-14"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75 }}
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-pink-300">Countdown</p>
            <h2 className="mt-4 font-display text-4xl font-black uppercase text-white sm:text-6xl">Mood Indigo is loading</h2>
            <p className="mt-5 leading-8 text-[var(--color-muted)]">
              Targeting the next December awakening cycle at IIT Bombay.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {units.map(([label, value]) => (
              <div className="border border-white/10 bg-white/[0.04] p-4 text-center" key={label}>
                <p className="font-display text-4xl font-black text-white sm:text-5xl">
                  {String(value).padStart(2, '0')}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-cyan-100">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
