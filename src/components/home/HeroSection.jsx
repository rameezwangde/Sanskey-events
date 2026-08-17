import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import homeData from '../../data/pages/home.json';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-brand-ivory pt-16 pb-16 md:pt-20 md:pb-24"
    >
      <div className="absolute inset-0 z-0">
        <motion.img 
          style={{ y: y1, opacity: 1 }}
          src="/hero.png"
          alt="Luxury Event Setup"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-ivory/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-ivory/70"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="max-w-4xl flex flex-col items-center text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center drop-shadow-xl"
          >
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-black sm:mb-6 sm:text-base">
              {homeData.heroEyebrow}
            </h2>
            <h1 className="mb-6 max-w-full font-serif text-[clamp(2.5rem,8vw,4rem)] leading-[1.1] text-brand-black sm:text-[clamp(3.5rem,8vw,5.5rem)] md:mb-8">
              {homeData.heroTitle1} <br className="hidden sm:block" />
              <span className="text-black">{homeData.heroTitleHighlight}</span> {homeData.heroTitle2}
            </h1>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-800 sm:mb-10 sm:text-xl md:mb-12">
              {homeData.heroDescription}
            </p>

            <div className="flex w-full max-w-[360px] flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
              <Link to="/events" className="group flex min-h-12 w-full items-center justify-center rounded-full bg-brand-gold px-8 py-4 font-medium text-white shadow-xl shadow-brand-gold/20 transition-all hover:bg-brand-bronze hover:shadow-brand-bronze/20 sm:w-auto text-lg">
                Explore Events <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <button aria-label="Watch our showreel video" className="group flex min-h-12 w-full items-center justify-center rounded-full border-2 border-brand-bronze bg-transparent px-8 py-4 font-medium text-brand-black transition-all hover:bg-brand-bronze hover:text-white sm:w-auto text-lg">
                <Play size={20} className="mr-2 text-brand-bronze transition-colors group-hover:text-white" /> Watch Showreel
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



