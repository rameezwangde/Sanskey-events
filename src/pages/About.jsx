import { motion } from 'framer-motion';
import aboutData from '../data/pages/about.json';

export default function About() {
  return (
    <div className="pt-12 pb-16 md:pt-20 md:pb-20 min-h-screen bg-brand-ivory">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-bronze font-sans font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
              {aboutData.eyebrow}
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-brand-black leading-tight mb-6">
              {aboutData.title1} <span className="text-brand-gold">{aboutData.titleHighlight}</span> {aboutData.title2}
            </h1>
            <article className="space-y-5 text-left text-sm leading-7 text-gray-700 sm:text-base md:space-y-6 md:text-justify md:text-lg md:leading-relaxed">
              <p>{aboutData.paragraph1}</p>
              <p>{aboutData.paragraph2}</p>
              <p className="font-medium text-brand-black border-l-4 border-brand-gold py-2 pl-4 md:pl-6">
                {aboutData.paragraph3}
              </p>
            </article>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[360px] sm:h-[460px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-brand-bronze/20 border border-brand-beige"
          >
             <img 
               src={aboutData.image} 
               alt="Premium Event Management and Corporate Events in India - Sankey Events" 
               className="w-full h-full object-cover"
               loading="lazy"
             />
             <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
