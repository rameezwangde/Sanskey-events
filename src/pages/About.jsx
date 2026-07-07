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
            <h2 className="text-brand-bronze font-sans font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
              Top Event Management Company in India
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-brand-black leading-tight mb-6">
              Exceeding <span className="text-brand-gold">Expectations</span> Every Time
            </h1>
            <article className="space-y-5 text-left text-sm leading-7 text-gray-700 sm:text-base md:space-y-6 md:text-justify md:text-lg md:leading-relaxed">
              <p>
                Established in 1996, Sankey Events has grown to become one of the premier event planning and management companies in India. We specialize in conceptualizing and executing bespoke experiences tailored to the modern customer, constantly setting new industry standards through technical innovation and creative excellence.
              </p>
              <p>
                Whether you are hosting a luxury wedding, a high-profile corporate conference, or a pan-India brand promotion, our comprehensive approach ensures a seamless and memorable event. We develop unique concepts that align perfectly with your objectives, delivering a distinctive style that captivates your guests and colleagues across India.
              </p>
              <p className="font-medium text-brand-black border-l-4 border-brand-gold py-2 pl-4 md:pl-6">
                With nearly three decades of expertise, Sankey Events maintains an exhaustive network of elite vendors and venues nationwide. We provide end-to-end event management services, including theme development, luxury wedding planning, corporate events, fashion shows, ad film making, celebrity coordination, and large-scale music festivals. Guided by our foundational motive to offer uncompromising service, we are your trusted partners in crafting extraordinary moments across India.
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
               src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop" 
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
