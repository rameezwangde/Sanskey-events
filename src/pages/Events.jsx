import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowRight, Archive, Calendar, Images } from 'lucide-react';

const eventFiles = import.meta.glob('../data/events/*.json', { eager: true });
const sectionFiles = import.meta.glob('../data/event_sections/*.json', { eager: true });

const galleries = Object.values(eventFiles).reduce((acc, file) => {
  const data = file.default || file;
  if (data.id) acc[data.id] = data;
  return acc;
}, {});

const eventSections = Object.values(sectionFiles).map(f => f.default || f).sort((a, b) => {
  return parseInt(a.start) - parseInt(b.start);
});

export default function Events() {
  const [activeLightbox, setActiveLightbox] = useState(null);

  const openLightbox = (type, index) => setActiveLightbox({ type, index });
  const closeLightbox = () => setActiveLightbox(null);
  
  const showNext = (e) => {
    e.stopPropagation();
    setActiveLightbox((prev) => {
      const arr = galleries[prev.type].images;
      return { ...prev, index: prev.index === arr.length - 1 ? 0 : prev.index + 1 };
    });
  };
  
  const showPrev = (e) => {
    e.stopPropagation();
    setActiveLightbox((prev) => {
      const arr = galleries[prev.type].images;
      return { ...prev, index: prev.index === 0 ? arr.length - 1 : prev.index - 1 };
    });
  };

  const activeGallery = activeLightbox ? galleries[activeLightbox.type] : null;

  const GalleryCard = ({ type, delay = 0, index = 0 }) => {
    const gallery = galleries[type];
    if (!gallery) return null;
    const yearMatch = gallery.title.match(/\b(20\d{2})\b/) || gallery.subtitle.match(/\b(20\d{2})\b/);
    const eventPeriod = gallery.subtitle === '2000 to 2010' ? gallery.subtitle : yearMatch?.[1] || 'Archive';
    const Icon = [Calendar, ArrowRight, Archive, Images][index % 4];

    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="relative group cursor-pointer overflow-hidden aspect-[0.9] rounded-xl border border-brand-gold/25 bg-brand-black shadow-2xl shadow-brand-black/15 sm:aspect-[0.78]"
        onClick={() => openLightbox(type, 0)}
      >
        <img
          src={gallery.images[0]}
          alt={gallery.title}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/72 to-black/12"></div>
        <div className="absolute left-3 top-3 flex h-10 w-10 sm:left-4 sm:top-4 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-brand-gold text-white shadow-lg shadow-brand-gold/25">
          <Icon size={18} />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-white">
          <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.16em] text-brand-gold">
            Sankey Events Archive
          </p>
          <h3 className="text-base font-serif leading-tight text-white sm:text-lg md:text-xl">
            {gallery.title}
          </h3>

          <div className="mt-2 space-y-1 text-[10px] sm:mt-3 sm:space-y-1.5 sm:text-[11px] font-medium text-white/90">
            <div className="flex items-center gap-2">
              <Archive size={12} className="shrink-0 text-brand-gold" />
              <span>Event Gallery</span>
            </div>
            <div className="flex items-center gap-2">
              <Images size={12} className="shrink-0 text-brand-gold" />
              <span>{gallery.images.length} Photos</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={12} className="shrink-0 text-brand-gold" />
              <span>{eventPeriod}</span>
            </div>
          </div>

          <div className="mt-3 inline-flex sm:mt-4 items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-brand-gold transition-colors duration-300 group-hover:text-white">
            Explore Gallery
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>
    );
  };

  const TimelineSection = ({ section, sectionIndex }) => (
    <section className={`relative overflow-hidden ${sectionIndex % 2 === 0 ? 'bg-brand-ivory' : 'bg-white'} px-4 py-10 sm:py-12 md:px-8 md:py-16`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(182,139,74,0.12),transparent_28%),radial-gradient(circle_at_92%_35%,rgba(182,139,74,0.10),transparent_24%)]"></div>
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full border border-brand-gold/10"></div>
      <div className="pointer-events-none absolute -right-24 top-24 h-64 w-64 rounded-full border border-brand-gold/10"></div>

      <div className="relative z-10 mx-auto max-w-[1600px]">
        <div className="text-center">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] sm:text-xs sm:tracking-[0.32em] text-brand-bronze">
            {section.eyebrow}
          </p>
          <h2 className="font-serif text-3xl leading-tight text-brand-black sm:text-4xl md:text-5xl md:leading-none">
            {section.title}
          </h2>
          <div className="mx-auto my-4 flex w-24 items-center justify-center gap-2 text-brand-gold">
            <span className="h-px flex-1 bg-brand-gold/70"></span>
            <span className="h-2 w-2 rotate-45 bg-brand-gold"></span>
            <span className="h-px flex-1 bg-brand-gold/70"></span>
          </div>
          <p className="mx-auto max-w-xl text-sm leading-6 sm:leading-7 text-brand-black/65">
            {section.description}
          </p>
        </div>

        <div className="mt-8 hidden items-center gap-5 text-sm font-bold text-brand-bronze md:flex">
          <span>{section.start}</span>
          <div className="relative h-8 flex-1">
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-brand-gold/45"></div>
            {section.items.map((type, index) => {
              const typeStr = typeof type === 'string' ? type : type.event_id;
              return (
              <div
                key={typeStr}
                className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold shadow-sm shadow-brand-gold/40"
                style={{ left: `${((index + 0.5) / section.items.length) * 100}%` }}
              ></div>
            )})}
          </div>
          <span>{section.end}</span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-3 md:gap-6 lg:grid-cols-3 xl:grid-cols-5">
          {section.items.map((type, index) => {
            const typeStr = typeof type === 'string' ? type : type.event_id;
            return <GalleryCard key={typeStr} type={typeStr} index={index} delay={index * 0.08} />
          })}
        </div>

        <div className="mx-auto mt-8 flex max-w-lg flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-8 text-brand-gold/55">
            <span className="h-px w-20 bg-brand-gold/35"></span>
            <Calendar size={18} className="text-brand-gold" />
            <span className="h-px w-20 bg-brand-gold/35"></span>
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-brand-black/45">
            {section.footer}
          </p>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-brand-ivory">
      {eventSections.map((section, index) => (
        <TimelineSection key={section.title} section={section} sectionIndex={index} />
      ))}
      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightbox !== null && activeGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] overflow-hidden bg-brand-black/95 p-3 sm:p-4 text-white backdrop-blur-2xl md:p-8"
            onClick={closeLightbox}
          >
            <img
              src={activeGallery.images[activeLightbox.index]}
              alt=""
              className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-20 blur-3xl"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/95"></div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(182,139,74,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(182,139,74,0.12),transparent_34%)]"></div>

            <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-start justify-between gap-3 sm:gap-6 border-b border-white/10 pb-5 md:pb-7">
                <div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-gold md:text-xs">
                    {activeGallery.subtitle} - Gallery
                  </p>
                  <h2 className="font-serif text-xl leading-tight text-white sm:text-2xl md:text-4xl">
                    {activeGallery.title}
                  </h2>
                </div>

                <div className="flex shrink-0 items-center gap-4">
                  <div className="hidden text-xs font-bold tracking-[0.16em] text-brand-gold sm:block">
                    {String(activeLightbox.index + 1).padStart(2, '0')} / {String(activeGallery.images.length).padStart(2, '0')}
                  </div>
                  <button
                    onClick={closeLightbox}
                    className="rounded-full border border-white/10 bg-white/10 p-2 text-brand-gold sm:p-3 backdrop-blur-md transition-colors hover:border-brand-gold/50 hover:bg-brand-gold/15"
                    aria-label="Close gallery"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              <div className="relative flex min-h-0 flex-1 items-center justify-center py-4 md:py-8">
                <button
                  onClick={showPrev}
                  className="absolute left-1 z-20 rounded-full border border-white/10 bg-black/55 p-2 text-brand-gold shadow-2xl backdrop-blur-md transition-colors hover:border-brand-gold/50 hover:bg-brand-gold/15 sm:left-3 sm:p-3 md:left-6 md:p-4"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} />
                </button>

                <motion.div
                  key={`${activeLightbox.type}-${activeLightbox.index}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className="relative flex max-h-[72vh] w-full max-w-6xl items-center justify-center rounded-2xl border border-white/10 bg-black/45 p-2 shadow-2xl shadow-black/50 sm:p-3 md:p-5"
                >
                  <img
                    src={activeGallery.images[activeLightbox.index]}
                    alt={`${activeGallery.title} gallery image ${activeLightbox.index + 1}`}
                    className="max-h-[68vh] max-w-full rounded-xl object-contain shadow-2xl"
                  />
                  <div className="absolute bottom-5 right-5 rounded-md border border-brand-gold/30 bg-black/60 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-gold backdrop-blur-md sm:hidden">
                    {activeLightbox.index + 1} / {activeGallery.images.length}
                  </div>
                </motion.div>

                <button
                  onClick={showNext}
                  className="absolute right-1 z-20 rounded-full border border-white/10 bg-black/55 p-2 text-brand-gold shadow-2xl backdrop-blur-md transition-colors hover:border-brand-gold/50 hover:bg-brand-gold/15 sm:right-3 sm:p-3 md:right-6 md:p-4"
                  aria-label="Next image"
                >
                  <ChevronRight size={28} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
