import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowRight, Archive, Calendar, Images } from 'lucide-react';

const galleries = {
  tydal: {
    title: 'Tydal Events Archive',
    subtitle: '2000 to 2010',
    images: [
      '/tydal/image.png', '/tydal/image copy.png', '/tydal/image copy 2.png',
      '/tydal/image copy 3.png', '/tydal/image copy 4.png', '/tydal/image copy 5.png'
    ]
  },
  surge: {
    title: 'Surge Launch',
    subtitle: 'Product Showcase',
    images: [
      '/surge/image.png', '/surge/image copy.png', '/surge/image copy 2.png',
      '/surge/image copy 3.png', '/surge/image copy 4.png'
    ]
  },
  dacss: {
    title: 'Dacss Granite',
    subtitle: 'Corporate Event',
    images: [
      '/Dacss Granite/image copy 2.png', '/Dacss Granite/image copy.png', '/Dacss Granite/image.png'
    ]
  },
  eknirangan: {
    title: 'Ek Nirangan',
    subtitle: 'Movie Launch',
    images: [
      '/Ek nirangan movie launch/image copy 2.png', '/Ek nirangan movie launch/image copy.png', '/Ek nirangan movie launch/image.png'
    ]
  },
  tamanna: {
    title: 'Tamanna Event',
    subtitle: 'Live Event',
    images: [
      '/Tamanna Event/image copy 2.png', '/Tamanna Event/image copy 3.png',
      '/Tamanna Event/image copy.png', '/Tamanna Event/image.png'
    ]
  },
  sagascious: {
    title: 'Sagascious Show 2012',
    subtitle: 'Live Event',
    images: [
      '/sagascious show 2012/image copy 10.png', '/sagascious show 2012/image copy 11.png',
      '/sagascious show 2012/image copy 12.png', '/sagascious show 2012/image copy 2.png',
      '/sagascious show 2012/image copy 3.png', '/sagascious show 2012/image copy 4.png',
      '/sagascious show 2012/image copy 5.png', '/sagascious show 2012/image copy 6.png',
      '/sagascious show 2012/image copy 7.png', '/sagascious show 2012/image copy 8.png',
      '/sagascious show 2012/image copy 9.png', '/sagascious show 2012/image copy.png',
      '/sagascious show 2012/image.png'
    ]
  },
  iift: {
    title: 'IIFT Bangalore 2012',
    subtitle: 'Institution Event',
    images: [
      '/iift bangalore 2012/image copy 2.png', '/iift bangalore 2012/image copy 3.png',
      '/iift bangalore 2012/image copy 4.png', '/iift bangalore 2012/image copy 5.png',
      '/iift bangalore 2012/image copy 6.png', '/iift bangalore 2012/image copy.png',
      '/iift bangalore 2012/image.png'
    ]
  },
  newyear: {
    title: 'New Year 2012',
    subtitle: 'Celebration',
    images: [
      '/new year 2012/image copy.png', '/new year 2012/image.png'
    ]
  },
  acc: {
    title: 'ACC 2012',
    subtitle: 'Corporate Event',
    images: [
      '/acc 2012/image.png'
    ]
  },
  imark: {
    title: 'IMARK 2012',
    subtitle: 'Marketing Event',
    images: [
      '/IMARK 2012/image copy 2.png', '/IMARK 2012/image copy 3.png',
      '/IMARK 2012/image copy 4.png', '/IMARK 2012/image copy 5.png',
      '/IMARK 2012/image copy 6.png', '/IMARK 2012/image copy.png',
      '/IMARK 2012/image.png'
    ]
  },
  hassan: {
    title: 'Hassan Rainbow 2012',
    subtitle: 'Cultural Event',
    images: [
      '/Hassan Rainbow 2012/image copy 2.png', '/Hassan Rainbow 2012/image copy 3.png',
      '/Hassan Rainbow 2012/image copy 4.png', '/Hassan Rainbow 2012/image copy.png',
      '/Hassan Rainbow 2012/image.png'
    ]
  },
  raichur: {
    title: 'Raichur Show 2012',
    subtitle: 'Exhibition',
    images: [
      '/raichur show 2012/image copy.png', '/raichur show 2012/image.png'
    ]
  },
  amet2011: {
    title: 'Amet Cruise Event 2011',
    subtitle: 'Cruise Event',
    images: [
      '/Amet Cruise Event 2011/image copy 2.png', '/Amet Cruise Event 2011/image copy.png',
      '/Amet Cruise Event 2011/image.png'
    ]
  },
  acc2011: {
    title: 'ACC Cement 2011',
    subtitle: 'Corporate Event',
    images: [
      '/ACC Cement 2011/image copy 2.png', '/ACC Cement 2011/image copy 3.png',
      '/ACC Cement 2011/image copy.png', '/ACC Cement 2011/image.png'
    ]
  },
  sony2011: {
    title: 'Sony Show 2011',
    subtitle: 'Electronics Expo',
    images: [
      '/sony show 2011/image copy 2.png', '/sony show 2011/image copy 3.png',
      '/sony show 2011/image copy 4.png', '/sony show 2011/image copy.png',
      '/sony show 2011/image.png'
    ]
  },
  misssouth2011: {
    title: 'India Miss South 2011',
    subtitle: 'Beauty Pageant',
    images: [
      '/INDIA MISS SOUTH 2011/image copy 2.png', '/INDIA MISS SOUTH 2011/image copy 3.png',
      '/INDIA MISS SOUTH 2011/image copy 4.png', '/INDIA MISS SOUTH 2011/image copy 5.png',
      '/INDIA MISS SOUTH 2011/image copy.png', '/INDIA MISS SOUTH 2011/image.png'
    ]
  },
  newyearsalem2011: {
    title: 'New Year Show Salem 2011',
    subtitle: 'Celebration',
    images: [
      '/New year show salem 2011/image copy 2.png', '/New year show salem 2011/image copy 3.png',
      '/New year show salem 2011/image copy 4.png', '/New year show salem 2011/image copy 5.png',
      '/New year show salem 2011/image copy 6.png', '/New year show salem 2011/image copy 7.png',
      '/New year show salem 2011/image copy.png', '/New year show salem 2011/image.png'
    ]
  },
  django2011: {
    title: 'Django Hubli 2011',
    subtitle: 'Live Event',
    images: [
      '/Django Hubli 2011/image copy 2.png', '/Django Hubli 2011/image copy.png',
      '/Django Hubli 2011/image.png'
    ]
  },
  princess2011: {
    title: 'Princess 2011 & Miss Sankey',
    subtitle: 'Beauty Pageant',
    images: [
      '/princess 2011 & miss sankey/image copy 2.png', '/princess 2011 & miss sankey/image copy 3.png',
      '/princess 2011 & miss sankey/image copy.png', '/princess 2011 & miss sankey/image.png'
    ]
  },
  salem2013: {
    title: 'Salem Show 2013',
    subtitle: 'Live Event',
    images: [
      '/salem show 2013/image copy 2.png', '/salem show 2013/image copy 3.png',
      '/salem show 2013/image copy 4.png', '/salem show 2013/image copy 5.png',
      '/salem show 2013/image copy.png', '/salem show 2013/image.png'
    ]
  },
  gardencity2013: {
    title: 'Miss Gardencity 2013',
    subtitle: 'Fashion Event',
    images: [
      '/miss gardencity 2013/image copy 2.png', '/miss gardencity 2013/image copy 3.png',
      '/miss gardencity 2013/image copy 4.png', '/miss gardencity 2013/image copy.png',
      '/miss gardencity 2013/image.png'
    ]
  },
  hangyo2013: {
    title: 'Hangyo Ice Cream 2013',
    subtitle: 'Brand Promotion',
    images: [
      '/hangyo ice cream 2013/image copy 2.png', '/hangyo ice cream 2013/image copy 3.png',
      '/hangyo ice cream 2013/image copy 4.png', '/hangyo ice cream 2013/image copy.png',
      '/hangyo ice cream 2013/image.png'
    ]
  },
  samsung2013: {
    title: 'Samsung 2013',
    subtitle: 'Product Launch',
    images: [
      '/samsung 2013/image copy 2.png', '/samsung 2013/image copy.png', '/samsung 2013/image.png'
    ]
  },
  sony2013: {
    title: 'Sony Show 2013',
    subtitle: 'Electronics Expo',
    images: [
      '/sony show 2013/image copy 2.png', '/sony show 2013/image copy 3.png',
      '/sony show 2013/image copy 4.png', '/sony show 2013/image copy.png',
      '/sony show 2013/image.png'
    ]
  },
  kerala2013: {
    title: 'Kerala Handloom 2013',
    subtitle: 'Exhibition',
    images: [
      '/kerala hand loom technology 2013/image copy 2.png', '/kerala hand loom technology 2013/image copy 3.png',
      '/kerala hand loom technology 2013/image copy 4.png', '/kerala hand loom technology 2013/image copy.png',
      '/kerala hand loom technology 2013/image.png'
    ]
  },
  itpl2013: {
    title: 'ITPL Show on 31st',
    subtitle: 'New Year Event',
    images: [
      '/ITPL show on 31st 2013/image copy 2.png', '/ITPL show on 31st 2013/image copy.png',
      '/ITPL show on 31st 2013/image.png'
    ]
  },
  iift2013: {
    title: 'IIFT 2013',
    subtitle: 'Institution Event',
    images: [
      '/IIFT 2013/image copy 2.png', '/IIFT 2013/image copy 3.png',
      '/IIFT 2013/image copy 4.png', '/IIFT 2013/image copy.png', '/IIFT 2013/image.png'
    ]
  },
  sriganesh2013: {
    title: 'Sri Ganesh Diamonds',
    subtitle: 'Jewellery Expo',
    images: [
      '/sri ganesh diamonds & jewellery 2013/image copy.png', '/sri ganesh diamonds & jewellery 2013/image.png'
    ]
  },
  shravana2013: {
    title: 'Shravana Banthu 2013',
    subtitle: 'Cultural Fest',
    images: [
      '/shravana banthu sharavana 2013/image copy 2.png', '/shravana banthu sharavana 2013/image copy 3.png',
      '/shravana banthu sharavana 2013/image copy 4.png', '/shravana banthu sharavana 2013/image copy 5.png',
      '/shravana banthu sharavana 2013/image copy.png', '/shravana banthu sharavana 2013/image.png'
    ]
  },
  tripunithura2013: {
    title: 'Tripunithura Show 2013',
    subtitle: 'Live Event',
    images: [
      '/Tripunithura Show 2013/image.png'
    ]
  }
};

const eventSections = [
  {
    eyebrow: 'Our Journey',
    title: 'Events from 2000 to 2010',
    description: 'A decade of unforgettable moments, extraordinary experiences and successful celebrations.',
    start: '2000',
    end: '2010',
    footer: 'Milestones that inspire. Memories that last.',
    items: ['tydal', 'surge', 'dacss', 'eknirangan', 'tamanna']
  },
  {
    eyebrow: 'Our Journey',
    title: 'Events from 2011',
    description: 'A year of energetic showcases, brand celebrations and memorable live experiences.',
    start: '2011',
    end: '2011',
    footer: 'Celebrations shaped with precision.',
    items: ['amet2011', 'acc2011', 'sony2011', 'misssouth2011', 'newyearsalem2011', 'django2011', 'princess2011']
  },
  {
    eyebrow: 'Our Journey',
    title: 'Events from 2012',
    description: 'Distinctive launches, cultural evenings and corporate experiences across the year.',
    start: '2012',
    end: '2012',
    footer: 'Experiences crafted to be remembered.',
    items: ['sagascious', 'imark', 'iift', 'hassan', 'newyear', 'raichur', 'acc']
  },
  {
    eyebrow: 'Our Journey',
    title: 'Events from 2013',
    description: 'Fashion, entertainment, exhibitions and brand moments brought together with care.',
    start: '2013',
    end: '2013',
    footer: 'Every detail. Every occasion.',
    items: ['salem2013', 'gardencity2013', 'hangyo2013', 'samsung2013', 'sony2013', 'kerala2013', 'itpl2013', 'iift2013', 'sriganesh2013', 'shravana2013', 'tripunithura2013']
  }
];

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
    const yearMatch = gallery.title.match(/\b(20\d{2})\b/) || gallery.subtitle.match(/\b(20\d{2})\b/);
    const eventPeriod = gallery.subtitle === '2000 to 2010' ? gallery.subtitle : yearMatch?.[1] || 'Archive';
    const Icon = [Calendar, ArrowRight, Archive, Images][index % 4];

    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="relative group cursor-pointer overflow-hidden rounded-xl border border-brand-gold/25 bg-brand-black shadow-2xl shadow-brand-black/15 aspect-[0.78]"
        onClick={() => openLightbox(type, 0)}
      >
        <img
          src={gallery.images[0]}
          alt={gallery.title}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/72 to-black/12"></div>
        <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-gold text-white shadow-lg shadow-brand-gold/25">
          <Icon size={18} />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.16em] text-brand-gold">
            Sankey Events Archive
          </p>
          <h3 className="text-lg font-serif leading-tight text-white md:text-xl">
            {gallery.title}
          </h3>

          <div className="mt-3 space-y-1.5 text-[11px] font-medium text-white/90">
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

          <div className="mt-4 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-brand-gold transition-colors duration-300 group-hover:text-white">
            Explore Gallery
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>
    );
  };

  const TimelineSection = ({ section, sectionIndex }) => (
    <section className={`relative overflow-hidden ${sectionIndex % 2 === 0 ? 'bg-brand-ivory' : 'bg-white'} px-4 py-14 md:px-8 md:py-16`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(182,139,74,0.12),transparent_28%),radial-gradient(circle_at_92%_35%,rgba(182,139,74,0.10),transparent_24%)]"></div>
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full border border-brand-gold/10"></div>
      <div className="pointer-events-none absolute -right-24 top-24 h-64 w-64 rounded-full border border-brand-gold/10"></div>

      <div className="relative z-10 mx-auto max-w-[1600px]">
        <div className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-brand-bronze">
            {section.eyebrow}
          </p>
          <h2 className="text-4xl font-serif leading-none text-brand-black md:text-5xl">
            {section.title}
          </h2>
          <div className="mx-auto my-4 flex w-24 items-center justify-center gap-2 text-brand-gold">
            <span className="h-px flex-1 bg-brand-gold/70"></span>
            <span className="h-2 w-2 rotate-45 bg-brand-gold"></span>
            <span className="h-px flex-1 bg-brand-gold/70"></span>
          </div>
          <p className="mx-auto max-w-xl text-sm leading-7 text-brand-black/65">
            {section.description}
          </p>
        </div>

        <div className="mt-8 hidden items-center gap-5 text-sm font-bold text-brand-bronze md:flex">
          <span>{section.start}</span>
          <div className="relative h-8 flex-1">
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-brand-gold/45"></div>
            {section.items.map((type, index) => (
              <div
                key={type}
                className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold shadow-sm shadow-brand-gold/40"
                style={{ left: `${((index + 0.5) / section.items.length) * 100}%` }}
              ></div>
            ))}
          </div>
          <span>{section.end}</span>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {section.items.map((type, index) => (
            <GalleryCard key={type} type={type} index={index} delay={index * 0.08} />
          ))}
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
            className="fixed inset-0 z-[100] overflow-hidden bg-brand-black/95 p-4 text-white backdrop-blur-2xl md:p-8"
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
              <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-5 md:pb-7">
                <div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-gold md:text-xs">
                    {activeGallery.subtitle} - Gallery
                  </p>
                  <h2 className="text-2xl font-serif leading-tight text-white md:text-4xl">
                    {activeGallery.title}
                  </h2>
                </div>

                <div className="flex shrink-0 items-center gap-4">
                  <div className="hidden text-xs font-bold tracking-[0.16em] text-brand-gold sm:block">
                    {String(activeLightbox.index + 1).padStart(2, '0')} / {String(activeGallery.images.length).padStart(2, '0')}
                  </div>
                  <button
                    onClick={closeLightbox}
                    className="rounded-full border border-white/10 bg-white/10 p-3 text-brand-gold backdrop-blur-md transition-colors hover:border-brand-gold/50 hover:bg-brand-gold/15"
                    aria-label="Close gallery"
                  >
                    <X size={28} />
                  </button>
                </div>
              </div>

              <div className="relative flex min-h-0 flex-1 items-center justify-center py-6 md:py-8">
                <button
                  onClick={showPrev}
                  className="absolute left-0 z-20 rounded-full border border-white/10 bg-black/45 p-3 text-brand-gold shadow-2xl backdrop-blur-md transition-colors hover:border-brand-gold/50 hover:bg-brand-gold/15 md:left-6 md:p-4"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={34} />
                </button>

                <motion.div
                  key={`${activeLightbox.type}-${activeLightbox.index}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className="relative flex max-h-[72vh] w-full max-w-6xl items-center justify-center rounded-[20px] border border-white/10 bg-black/45 p-3 shadow-2xl shadow-black/50 md:p-5"
                >
                  <img
                    src={activeGallery.images[activeLightbox.index]}
                    alt={`${activeGallery.title} gallery image ${activeLightbox.index + 1}`}
                    className="max-h-[66vh] max-w-full rounded-xl object-contain shadow-2xl"
                  />
                  <div className="absolute bottom-5 right-5 rounded-md border border-brand-gold/30 bg-black/60 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-gold backdrop-blur-md sm:hidden">
                    {activeLightbox.index + 1} / {activeGallery.images.length}
                  </div>
                </motion.div>

                <button
                  onClick={showNext}
                  className="absolute right-0 z-20 rounded-full border border-white/10 bg-black/45 p-3 text-brand-gold shadow-2xl backdrop-blur-md transition-colors hover:border-brand-gold/50 hover:bg-brand-gold/15 md:right-6 md:p-4"
                  aria-label="Next image"
                >
                  <ChevronRight size={34} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
