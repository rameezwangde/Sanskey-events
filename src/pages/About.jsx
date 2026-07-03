import { motion } from 'framer-motion';

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
            <p className="text-brand-bronze font-sans font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
              About Sankey
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-brand-black leading-tight mb-6">
              Exceeding <span className="text-brand-gold">Expectations</span> Every Time
            </h1>
            <div className="space-y-5 text-left text-sm leading-7 text-gray-700 sm:text-base md:space-y-6 md:text-justify md:text-lg md:leading-relaxed">
              <p>
                Sankey Events started in 1996 is establish business organisation that conceptualized various activities relating to today's customer & with a definite role-play tomorrow on setting standards for advancement in technical innovation.
              </p>
              <p>
                We have provided a comprehensive and unique approach vision with the tangibles to produce a distinctive and memorable event. we will develop a concept and than that achieves your objectives in a style that appeals to you and your guest and colleagues.
              </p>
              <p className="font-medium text-brand-black border-l-4 border-brand-gold py-2 pl-4 md:pl-6">
                We at Sankey maintained an exhaustive network of relationship that specialize in all your needs. Eighteen years ago right from the day of our foundation, we have been guided by one motive that is to offer satisfactory service to our clients, com what may. We have the vast experience to cater any kind of requirements, Sankey provides complete event management planing from theme development, venue selection, entertainment. Community and musics festivals,celebrity appearances, various types of events are manage like fashion shows, ad Film Making with model co ordination, annual general meeting, award ceremonies, brand promotion, exhibition stall designing, Product Promotion, Corporat films, Dealer Meets, Events and conferences, Brand Identity theme Events etc..
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[360px] sm:h-[460px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-brand-bronze/20 border border-brand-beige"
          >
             <img 
               src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop" 
               alt="Sankey Events Corporate" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
