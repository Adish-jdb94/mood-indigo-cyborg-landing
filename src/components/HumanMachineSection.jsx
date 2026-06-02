import { motion } from 'framer-motion';
import { FiHeart, FiLink, FiServer } from 'react-icons/fi';
import { MotionReveal } from './MotionReveal.jsx';

export function HumanMachineSection() {
  return (
    <section className="section-shell">
      <div className="mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
        <MotionReveal className="duality-panel border-cyan-300/20">
          <FiHeart className="text-4xl text-pink-300" />
          <h2 className="mt-8 font-display text-3xl font-black uppercase text-white">Human Creativity</h2>
          <p className="mt-5 leading-8 text-[var(--color-muted)]">
            Instinct, imperfection, rhythm, risk, and emotion. The human side creates because it cannot stay silent.
          </p>
        </MotionReveal>

        <motion.div
          className="relative mx-auto mb-14 mt-4 grid size-36 place-items-center rounded-full border border-white/15 bg-white/[0.04] shadow-[0_0_70px_rgba(34,211,238,0.22)] lg:my-0"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="absolute inset-3 rounded-full border border-cyan-300/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          />
          <FiLink className="text-4xl text-cyan-100" />
          <span className="absolute -bottom-12 w-56 text-center font-display text-[0.68rem] font-bold uppercase tracking-[0.16em] text-cyan-100 sm:text-xs sm:tracking-[0.2em]">
            Mood Indigo connects both worlds
          </span>
        </motion.div>

        <MotionReveal className="duality-panel border-pink-300/20" delay={0.12}>
          <FiServer className="text-4xl text-cyan-300" />
          <h2 className="mt-8 font-display text-3xl font-black uppercase text-white">Machine Intelligence</h2>
          <p className="mt-5 leading-8 text-[var(--color-muted)]">
            Precision, memory, pattern, speed, and scale. The machine side amplifies imagination into spectacle.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
