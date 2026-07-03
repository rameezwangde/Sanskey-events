import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Star, ShieldCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 pb-28">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.png" 
          alt="Luxury Wedding Hall" 
          className="w-full h-full object-cover object-[70%_50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ivory from-30% via-brand-ivory/80 via-60% to-transparent w-full lg:w-[90%]"></div>
        {/* subtle gold overlay for warmth */}
        <div className="absolute inset-0 bg-brand-gold/5 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-12">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-bronze font-sans font-bold tracking-[0.2em] uppercase text-sm mb-4">
              We plan. You celebrate.
            </p>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-black leading-[1.1] mb-6">
              CRAFTING <br />
              <span className="text-brand-gold">UNFORGETTABLE</span> <br />
              EXPERIENCES
            </h1>
            <p className="text-lg text-gray-700 font-sans mb-10 max-w-lg leading-relaxed">
              From corporate events to fashion shows, we bring your vision to life with creativity, precision & passion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/events" className="px-8 py-4 bg-brand-gold text-white font-medium rounded-full hover:bg-brand-bronze transition-all flex items-center justify-center group shadow-xl shadow-brand-gold/20">
                Explore Events <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-4 border-2 border-brand-bronze text-brand-black font-medium rounded-full hover:bg-brand-bronze hover:text-white transition-all flex items-center justify-center group">
                <Play size={18} className="mr-2 text-brand-bronze group-hover:text-white transition-colors" /> Watch Showreel
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 w-full transform translate-y-[78%] px-4 md:px-8 z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="container mx-auto"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl shadow-brand-bronze/5 border border-brand-beige/60 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-brand-beige">
            <div className="flex items-center space-x-4 pl-0 md:pl-4">
              <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center text-brand-bronze">
                <Users size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-serif font-bold text-brand-black">15+</h4>
                <p className="text-sm text-gray-600 font-medium">Years of Experience</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 pl-4 md:pl-8">
              <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center text-brand-bronze">
                <Star size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-serif font-bold text-brand-black">500+</h4>
                <p className="text-sm text-gray-600 font-medium">Events Executed</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 pl-4 md:pl-8">
              <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center text-brand-bronze">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-serif font-bold text-brand-black">100+</h4>
                <p className="text-sm text-gray-600 font-medium">Happy Clients</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 pl-4 md:pl-8">
              <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center text-brand-bronze">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-serif font-bold text-brand-black">50+</h4>
                <p className="text-sm text-gray-600 font-medium">Brands Trust Us</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
