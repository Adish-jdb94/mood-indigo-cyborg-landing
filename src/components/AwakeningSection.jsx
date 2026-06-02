import { MotionReveal } from './MotionReveal.jsx';
import { SectionHeader } from './SectionHeader.jsx';
import { archiveNodes } from '../data/landingContent.js';

export function AwakeningSection() {
  return (
    <section id="awakening" className="section-shell">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionHeader eyebrow="Awakening Sequence" title="A machine learns to feel" align="left">
          In a sterile technological world, every action is optimized, every signal is clean, and every memory is
          filed without emotion. Then Mood Indigo enters the system like a living frequency.
        </SectionHeader>
        <MotionReveal className="relative">
          <div className="hologram-panel p-6 sm:p-8">
            <p className="text-lg leading-9 text-white/86">
              The cyborg does not awaken through code alone. It awakens when a stage light fractures across chrome,
              when a bassline makes logic tremble, when culture becomes the first language it cannot calculate away.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {archiveNodes.map((node, index) => (
                <div className="border border-white/10 bg-white/[0.03] p-4" key={node.label}>
                  <node.icon className={index === 1 ? 'text-3xl text-pink-300' : 'text-3xl text-cyan-300'} />
                  <p className="mt-5 font-display text-sm font-bold uppercase tracking-[0.18em]">{node.label}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
