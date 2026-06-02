import { motion } from 'framer-motion';
import { FiArrowDown, FiPlay } from 'react-icons/fi';

const floatTransition = {
  duration: 5,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 py-24 sm:px-8">
      <div className="absolute inset-0 cyber-grid" />
      <div className="absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10 bg-cyan-300/5 blur-3xl" />
      <div className="absolute right-[-8rem] top-24 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute bottom-8 left-[-8rem] h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

      <motion.div
        className="pointer-events-none absolute left-6 top-28 hidden w-52 border border-cyan-300/25 bg-black/35 p-4 text-xs text-cyan-100 backdrop-blur md:block"
        animate={{ y: [-8, 14], opacity: [0.55, 0.95] }}
        transition={floatTransition}
      >
        <p className="font-display uppercase tracking-[0.2em] text-pink-300">Emotion scan</p>
        <p className="mt-3">anomaly: creativity rising</p>
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-24 right-8 hidden w-64 border border-pink-300/25 bg-black/35 p-4 text-xs text-pink-100 backdrop-blur lg:block"
        animate={{ y: [14, -10], opacity: [0.55, 0.95] }}
        transition={{ ...floatTransition, delay: 0.5 }}
      >
        <p className="font-display uppercase tracking-[0.2em] text-cyan-200">Culture uplink</p>
        <div className="mt-4 grid grid-cols-12 gap-1">
          {Array.from({ length: 36 }).map((_, index) => (
            <span
              className={`h-1 ${index % 4 === 0 ? 'bg-pink-300' : 'bg-cyan-300/60'}`}
              key={index}
              style={{ opacity: 0.25 + (index % 6) * 0.12 }}
            />
          ))}
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            className="mb-5 font-display text-xs font-bold uppercase tracking-[0.32em] text-[var(--color-cyan)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Cyborg Awakening
          </motion.p>
          <motion.h1
            className="hero-title font-display text-5xl font-black uppercase leading-[0.88] text-white sm:text-7xl lg:text-8xl xl:text-9xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Human. Machine. Art.
          </motion.h1>
          <motion.p
            className="mt-7 max-w-2xl text-xl leading-8 text-[var(--color-muted)] sm:text-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.45 }}
          >
            When circuits discover creativity.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.6 }}
          >
            <motion.a className="cyber-button cyber-button-primary" href="#awakening" whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
              <FiPlay /> Begin Awakening
            </motion.a>
            <motion.a className="cyber-button cyber-button-ghost" href="#archive" whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
              <FiArrowDown /> Open Archive
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto aspect-square w-full max-w-[34rem]"
          initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="absolute inset-8 rounded-full border border-cyan-300/20" />
          <div className="absolute inset-16 rounded-full border border-pink-300/20" />
          <motion.div
            className="absolute inset-0 rounded-full border border-white/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-[18%] rounded-[2rem] border border-cyan-300/30 bg-black/40 shadow-[0_0_120px_rgba(34,211,238,0.24)] backdrop-blur"
            animate={{ y: [-8, 8] }}
            transition={floatTransition}
          >
            <div className="absolute left-1/2 top-8 h-16 w-16 -translate-x-1/2 rounded-full border border-pink-300/50 bg-pink-300/10 shadow-[0_0_42px_rgba(244,114,182,0.55)]" />
            <div className="absolute bottom-10 left-1/2 h-40 w-28 -translate-x-1/2 rounded-t-full border border-cyan-300/40 bg-cyan-300/10" />
            <div className="absolute left-10 top-1/2 h-px w-24 bg-cyan-300/60" />
            <div className="absolute right-10 top-1/2 h-px w-24 bg-pink-300/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
