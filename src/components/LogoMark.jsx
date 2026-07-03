import clsx from 'clsx';

export default function LogoMark({ light = false, className = '' }) {
  return (
    <div className={clsx('inline-flex flex-col items-center leading-none', className)}>
      <span
        className={clsx(
          'font-serif text-[25px] font-normal uppercase tracking-[0.16em] sm:text-[30px] md:text-[34px]',
          light ? 'text-brand-ivory' : 'text-brand-black',
        )}
      >
        Sankey
      </span>
      <div className="mt-2 flex w-full items-center justify-center gap-2 sm:mt-3 sm:gap-3">
        <span className={clsx('h-px w-8 sm:w-11', light ? 'bg-brand-gold/70' : 'bg-brand-bronze/65')} />
        <span className="font-sans text-[9px] font-medium uppercase tracking-[0.32em] text-brand-bronze sm:text-[11px] sm:tracking-[0.36em]">
          Events
        </span>
        <span className={clsx('h-px w-8 sm:w-11', light ? 'bg-brand-gold/70' : 'bg-brand-bronze/65')} />
      </div>
    </div>
  );
}
