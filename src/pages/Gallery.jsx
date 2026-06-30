import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from 'framer-motion';

const images = [
  { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1080", width: 1080, height: 720 },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1080", width: 1080, height: 1620 },
  { src: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1080", width: 1080, height: 1080 },
  { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1080", width: 1080, height: 1620 },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1080", width: 1080, height: 720 },
  { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1080", width: 1080, height: 720 },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1080", width: 1080, height: 1620 },
  { src: "https://images.unsplash.com/photo-1478147424095-2dd1240dc501?q=80&w=1080", width: 1080, height: 1080 }
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-brand-ivory">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
           <p className="text-brand-bronze font-sans font-bold tracking-[0.2em] uppercase text-sm mb-2">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-black mb-4">Events & Shows Gallery</h1>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((image, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl shadow-md border border-brand-beige"
              onClick={() => setIndex(idx)}
            >
              <img src={image.src} alt={`Gallery ${idx}`} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-white font-serif text-lg tracking-wider">View Image</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images.map(img => ({ src: img.src }))}
      />
    </div>
  );
}
