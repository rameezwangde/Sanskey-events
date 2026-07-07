import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Star, ShieldCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { icon: Users, value: '15+', label: 'Years of Experience' },
  { icon: Star, value: '500+', label: 'Events Executed' },
  { icon: ShieldCheck, value: '100+', label: 'Happy Clients' },
  { icon: Award, value: '50+', label: 'Brands Trust Us' },
];

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden pt-12 pb-8 sm:pt-16 md:min-h-[90vh] md:pt-20 md:pb-28">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.png"
          alt="Luxury Wedding Hall"
          className="h-full w-full object-cover object-[70%_50%]"
        />
        <div className="absolute inset-0 w-full bg-gradient-to-b from-brand-ivory via-brand-ivory/92 to-brand-ivory/72 sm:bg-gradient-to-r sm:from-brand-ivory sm:from-30% sm:via-brand-ivory/80 sm:via-60% sm:to-transparent lg:w-[90%]"></div>
        <div className="absolute inset-0 bg-brand-gold/5 mix-blend-overlay"></div>
      </div>

      <div className="container relative z-10 mx-auto grid gap-10 px-4 md:grid-cols-2 md:px-8">
        <div className="max-w-2xl pt-6 sm:pt-12 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-bronze sm:mb-4 sm:text-sm">
              We plan. You celebrate.
            </p>
            <h1 className="mb-5 max-w-full font-serif text-[clamp(2.05rem,8.2vw,3.35rem)] leading-[1.08] text-brand-black sm:text-[clamp(3rem,8vw,4.6rem)] md:mb-6 md:text-7xl md:leading-[1.1]">
              CRAFTING <br />
              <span className="block text-[clamp(1.9rem,7.5vw,3.25rem)] text-brand-gold sm:text-[inherit]">UNFORGETTABLE</span>
              EXPERIENCES
            </h1>
            <p className="mb-6 max-w-lg text-sm leading-7 text-gray-700 sm:mb-8 sm:text-lg md:mb-10">
              From corporate events to fashion shows, we bring your vision to life with creativity, precision & passion.
            </p>

            <div className="flex max-w-[360px] flex-col gap-3 sm:max-w-none sm:flex-row sm:gap-4">
              <Link to="/events" className="group flex min-h-12 w-full items-center justify-center rounded-full bg-brand-gold px-6 py-3 sm:w-auto font-medium text-white shadow-xl shadow-brand-gold/20 transition-all hover:bg-brand-bronze sm:px-8 sm:py-4">
                Explore Events <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <button className="group flex min-h-12 w-full items-center justify-center rounded-full border-2 border-brand-bronze px-6 py-3 sm:w-auto font-medium text-brand-black transition-all hover:bg-brand-bronze hover:text-white sm:px-8 sm:py-4">
                <Play size={18} className="mr-2 text-brand-bronze transition-colors group-hover:text-white" /> Watch Showreel
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-20 mt-10 w-full px-4 md:absolute md:bottom-0 md:left-0 md:mt-0 md:translate-y-[78%] md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="container mx-auto"
        >
          <div className="grid grid-cols-1 gap-4 rounded-2xl border border-brand-beige/60 p-4 shadow-2xl shadow-brand-bronze/5 sm:grid-cols-2 sm:p-6 md:grid-cols-4 md:gap-8 md:p-8 md:divide-x md:divide-brand-beige">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`flex items-center gap-4 ${index === 0 ? 'md:pl-4' : 'md:pl-8'}`}>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-beige text-brand-bronze sm:h-12 sm:w-12">
                  <stat.icon size={22} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-serif text-xl font-bold text-brand-black sm:text-2xl">{stat.value}</h4>
                  <p className="text-sm font-medium leading-snug text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}



