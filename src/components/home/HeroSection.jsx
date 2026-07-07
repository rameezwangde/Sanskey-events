import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden pt-20 pb-20 md:min-h-[85vh] md:pt-28 md:pb-28" aria-label="Hero Section">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/hero.png"
          alt="Luxury Wedding Hall and Event Management Venue"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 w-full bg-brand-ivory/60"></div>
        <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay"></div>
      </div>

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 md:px-8 text-center">
        <div className="max-w-4xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-brand-bronze sm:mb-6 sm:text-base">
              We plan. You celebrate.
            </h2>
            <h1 className="mb-6 max-w-full font-serif text-[clamp(2.5rem,8vw,4rem)] leading-[1.1] text-brand-black sm:text-[clamp(3.5rem,8vw,5.5rem)] md:mb-8">
              CRAFTING <br className="hidden sm:block" />
              <span className="text-brand-gold">UNFORGETTABLE</span> EXPERIENCES
            </h1>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-800 sm:mb-10 sm:text-xl md:mb-12">
              From corporate events to fashion shows, we bring your vision to life with creativity, precision & passion. Let us craft the perfect moment for your special day.
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



