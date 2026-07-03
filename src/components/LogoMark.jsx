import clsx from 'clsx';

export default function LogoMark({ light = false, className = '' }) {
  return (
    <div className={clsx('inline-flex flex-col items-center leading-none', className)}>
      <span
        className={clsx(
          'font-serif text-[32px] font-normal uppercase tracking-[0.18em] md:text-[34px]',
          light ? 'text-brand-ivory' : 'text-brand-black',
        )}
      >
        Sankey
      </span>
      <div className="mt-3 flex w-full items-center justify-center gap-3">
        <span className={clsx('h-px w-11', light ? 'bg-brand-gold/70' : 'bg-brand-bronze/65')} />
        <span className="font-sans text-[11px] font-medium uppercase tracking-[0.36em] text-brand-bronze">
          Events
        </span>
        <span className={clsx('h-px w-11', light ? 'bg-brand-gold/70' : 'bg-brand-bronze/65')} />
      </div>
    </div>
  );
}
