import { motion } from 'framer-motion';
import { featureCards } from '../data/landingContent.js';
import { SectionHeader } from './SectionHeader.jsx';

export function HologramFeatures() {
  return (
    <section id="experiences" className="section-shell">
      <SectionHeader eyebrow="Hologram Array" title="Five ways the signal becomes alive">
        Each experience is a different creative module in the awakening sequence, designed to pull the machine closer
        to the human side of wonder.
      </SectionHeader>
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-5">
        {featureCards.map((feature, index) => (
          <motion.article
            className="hologram-card group"
            key={feature.title}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            whileHover={{ y: -12, scale: 1.02 }}
          >
            <div className="mb-10 flex items-center justify-between">
              <feature.icon className="text-4xl text-cyan-200 transition group-hover:text-pink-300" />
              <span className="text-xs text-white/35">0{index + 1}</span>
            </div>
            <p className="mb-3 font-display text-[0.68rem] font-bold uppercase tracking-[0.22em] text-pink-300">
              {feature.eyebrow}
            </p>
            <h3 className="font-display text-2xl font-black uppercase text-white">{feature.title}</h3>
            <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">{feature.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
