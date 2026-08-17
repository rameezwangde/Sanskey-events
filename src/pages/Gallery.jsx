import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { motion } from 'framer-motion';
import galleryData from '../data/pages/gallery.json';

const images = galleryData.images.map((img, index) => ({
  src: img.image,
  thumb: img.thumb || img.image,
  alt: img.alt || `Sankey Events gallery image ${index + 1}`
}));

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="min-h-screen bg-brand-ivory pt-12 pb-16 md:pt-20 md:pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-8 text-center md:mb-12">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-bronze sm:text-sm">
            {galleryData.eyebrow}
          </p>
          <h1 className="mb-4 font-serif text-3xl text-brand-black sm:text-4xl md:text-5xl">
            {galleryData.title}
          </h1>
        </div>

        <div className="columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3">
          {images.map((image, idx) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="group relative break-inside-avoid cursor-pointer overflow-hidden rounded-xl border border-brand-beige bg-brand-beige/40 shadow-md"
              onClick={() => setIndex(idx)}
            >
              <img
                src={image.thumb}
                alt={image.alt}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading={idx < 6 ? 'eager' : 'lazy'}
                fetchPriority={idx < 3 ? 'high' : 'auto'}
                decoding="async"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brand-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-serif text-lg tracking-wider text-white">View Image</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images.map((image) => ({ src: image.src, alt: image.alt }))}
      />
    </div>
  );
}
