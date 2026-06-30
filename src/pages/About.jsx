import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-brand-ivory">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-bronze font-sans font-bold tracking-[0.2em] uppercase text-sm mb-4">
              About Sankey
            </p>
            <h1 className="text-4xl md:text-6xl font-serif text-brand-black leading-tight mb-6">
              Exceeding <span className="text-brand-gold">Expectations</span> Every Time
            </h1>
            <div className="space-y-6 text-gray-700 leading-relaxed font-sans text-lg">
              <p>
                Expectations are the combination of written specification and emotional needs and wants. We are achieving quality improvement in terms of improved customer satisfaction and meaningful reduction in waste of time and physical resources getting things right first time & every time & aiming for zero defects.
              </p>
              <p>
                As a result of doing right every time, we are able to provide assurance of our services so that all are treated equally, planned & controlled in a systematic manner.
              </p>
              <p className="font-medium text-brand-black border-l-4 border-brand-gold pl-6 py-2">
                Sankey provides a suite of equipment, services, audio visual products, and top-notch integrated solutions, which facilitates any kind of corporate, Entertainment & Educational Events. We also operate a premier Modelling Agency.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-brand-bronze/20 border border-brand-beige"
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
