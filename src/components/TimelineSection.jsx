import { motion } from 'framer-motion';
import { timelineEntries } from '../data/landingContent.js';
import { SectionHeader } from './SectionHeader.jsx';

export function TimelineSection() {
  return (
    <section id="archive" className="section-shell">
      <SectionHeader eyebrow="Memory Archive" title="Fragments from the awakening">
        The archive records the cyborg's transformation from controlled intelligence to creative consciousness.
      </SectionHeader>
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-pink-300 to-transparent md:left-1/2" />
        <div className="space-y-8">
          {timelineEntries.map((entry, index) => (
            <motion.article
              className={`relative grid gap-5 pl-12 md:grid-cols-2 md:pl-0 ${index % 2 === 0 ? '' : 'md:text-right'}`}
              key={entry.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
            >
              <div className="absolute left-[0.56rem] top-6 size-4 rounded-full border border-white bg-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.8)] md:left-1/2 md:-translate-x-1/2" />
              <div className={index % 2 === 0 ? 'md:pr-14' : 'md:col-start-2 md:pl-14'}>
                <div className="hologram-panel p-6">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.24em] text-pink-300">{entry.year}</p>
                  <h3 className="mt-4 font-display text-2xl font-black uppercase text-white">{entry.title}</h3>
                  <p className="mt-4 leading-7 text-[var(--color-muted)]">{entry.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
