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

      {/* 2011 Events Section */}
      <div className="py-24 bg-brand-ivory relative border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-black relative inline-block">
              Events from 2011
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-brand-gold rounded-full"></div>
            </h2>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GalleryCard type="amet2011" delay={0} />
            <GalleryCard type="acc2011" delay={0.1} />
            <GalleryCard type="sony2011" delay={0.2} />
            <GalleryCard type="misssouth2011" delay={0.3} />
            <GalleryCard type="newyearsalem2011" delay={0.4} />
            <GalleryCard type="django2011" delay={0.5} />
            <GalleryCard type="princess2011" delay={0.6} />
          </div>
        </div>
      </div>

      {/* 2012 Events Section */}
      <div className="py-24 bg-white relative border-t border-gray-200">
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

      {/* 2013 Events Section */}
      <div className="py-24 bg-brand-ivory relative border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-black relative inline-block">
              Events from 2013
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-brand-gold rounded-full"></div>
            </h2>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GalleryCard type="salem2013" delay={0} />
            <GalleryCard type="gardencity2013" delay={0.1} />
            <GalleryCard type="hangyo2013" delay={0.2} />
            <GalleryCard type="samsung2013" delay={0.3} />
            <GalleryCard type="sony2013" delay={0.4} />
            <GalleryCard type="kerala2013" delay={0.5} />
            <GalleryCard type="itpl2013" delay={0.6} />
            <GalleryCard type="iift2013" delay={0.7} />
            <GalleryCard type="sriganesh2013" delay={0.8} />
            <GalleryCard type="shravana2013" delay={0.9} />
            <GalleryCard type="tripunithura2013" delay={1.0} />
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
