import { FiArrowUpRight } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-black uppercase tracking-[0.2em] text-white">Mood Indigo</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--color-muted)]">
            Cyborg Awakening is a digital tribute to the moment technology discovers culture, art, and the human pulse.
          </p>
        </div>
        <a className="cyber-button cyber-button-ghost w-fit" href="#top">
          Return to signal <FiArrowUpRight />
        </a>
      </div>
    </footer>
  );
}
