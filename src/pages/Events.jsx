import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import ServicesSection from '../components/home/ServicesSection';

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
  }
};

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

  const GalleryCard = ({ type, delay = 0 }) => {
    const gallery = galleries[type];
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay }}
        className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-2xl shadow-brand-black/10 aspect-[4/3] border-4 border-white"
        onClick={() => openLightbox(type, 0)}
      >
        <img
          src={gallery.images[0]}
          alt={gallery.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <Maximize2 size={40} className="mb-4 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 text-brand-gold drop-shadow-lg" />
          <h3 className="text-3xl font-serif text-center drop-shadow-md">{gallery.title}</h3>
          <p className="text-base font-sans tracking-wide mt-2 text-white/90">{gallery.subtitle}</p>
          <div className="mt-6 px-6 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs uppercase tracking-widest font-medium">
            {gallery.images.length} Photos
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-brand-ivory">
      <div className="pt-32 pb-10">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="text-brand-bronze font-sans font-bold tracking-[0.2em] uppercase text-sm mb-2">
            Our Expertise
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-black mb-6">Events By Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto font-sans">
            We provide a comprehensive suite of services and top-notch integrated solutions for corporate, entertainment, and educational events.
          </p>
        </div>
      </div>
      
      <div className="-mt-16">
        <ServicesSection />
      </div>

      {/* 2000 to 2010 Archive */}
      <div className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-black relative inline-block">
              Events from 2000 to 2010
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-brand-gold rounded-full"></div>
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <GalleryCard type="tydal" delay={0} />
            <GalleryCard type="surge" delay={0.2} />
          </div>
        </div>
      </div>

      {/* 2012 Events Section */}
      <div className="py-24 bg-brand-ivory relative border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-black relative inline-block">
              Events from 2012
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-brand-gold rounded-full"></div>
            </h2>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GalleryCard type="sagascious" delay={0} />
            <GalleryCard type="imark" delay={0.1} />
            <GalleryCard type="iift" delay={0.2} />
            <GalleryCard type="hassan" delay={0.3} />
            <GalleryCard type="newyear" delay={0.4} />
            <GalleryCard type="raichur" delay={0.5} />
            <GalleryCard type="acc" delay={0.6} />
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 md:p-12"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 backdrop-blur-md"
            >
              <X size={28} />
            </button>

            <button
              onClick={showPrev}
              className="absolute left-4 md:left-12 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 backdrop-blur-md"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.div
              key={`${activeLightbox.type}-${activeLightbox.index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-[85vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleries[activeLightbox.type].images[activeLightbox.index]}
                alt={`Gallery image ${activeLightbox.index + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md text-white text-sm font-sans">
                {activeLightbox.index + 1} / {galleries[activeLightbox.type].images.length}
              </div>
            </motion.div>

            <button
              onClick={showNext}
              className="absolute right-4 md:right-12 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 backdrop-blur-md"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
