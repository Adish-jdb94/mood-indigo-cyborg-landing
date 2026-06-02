import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { bootMessages } from '../data/landingContent.js';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const progressTimer = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + Math.floor(Math.random() * 8) + 3, 100);
        if (next === 100) {
          window.setTimeout(() => setIsComplete(true), 520);
        }
        return next;
      });
    }, 120);

    return () => window.clearInterval(progressTimer);
  }, []);

  const activeMessages = bootMessages.slice(0, Math.max(1, Math.ceil((progress / 100) * bootMessages.length)));

  return (
    <AnimatePresence>
      {!isComplete ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black px-5"
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(18px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 cyber-grid opacity-50" />
          <div className="absolute inset-0 scanline" />
          <motion.div
            className="relative w-full max-w-2xl border border-cyan-300/25 bg-black/70 p-5 shadow-[0_0_80px_rgba(34,211,238,0.18)] backdrop-blur md:p-8"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-8 flex items-center justify-between gap-4 border-b border-white/10 pb-4 font-display text-xs uppercase tracking-[0.24em] text-cyan-200">
              <span>MI neural boot</span>
              <span>{String(progress).padStart(3, '0')}%</span>
            </div>
            <div className="space-y-4 font-mono text-sm text-cyan-100 sm:text-base">
              {activeMessages.map((message, index) => (
                <motion.p
                  key={message}
                  className={index === activeMessages.length - 1 ? 'text-pink-300' : 'text-cyan-100'}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  &gt; {message}
                </motion.p>
              ))}
            </div>
            <div className="mt-8 h-2 overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-300 via-white to-pink-400"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.18 }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
