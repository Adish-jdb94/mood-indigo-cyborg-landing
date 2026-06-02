import { MotionReveal } from './MotionReveal.jsx';

export function SectionHeader({ eyebrow, title, children, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <MotionReveal className={`mx-auto mb-12 flex max-w-3xl flex-col ${alignment}`}>
      <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-cyan)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-black uppercase leading-tight text-white sm:text-5xl">{title}</h2>
      {children ? <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)]">{children}</p> : null}
    </MotionReveal>
  );
}
