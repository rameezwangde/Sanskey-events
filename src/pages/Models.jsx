import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const models = [
  { name: 'Aisha Sharma', title: 'Miss Sankey 2023', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop' },
  { name: 'Neha Reddy', title: 'Top Fashion Model', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1920&auto=format&fit=crop' },
  { name: 'Priya Patel', title: 'Commercial Model', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1920&auto=format&fit=crop' }
];

export default function Models() {
  return (
    <div className="pt-12 pb-16 md:pt-20 md:pb-20 min-h-screen bg-brand-ivory">
      <div className="container mx-auto px-4 md:px-8 mb-10 text-center md:mb-16">
        <p className="text-brand-bronze font-sans font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-2">
          Sankey Modelling Agency
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-black mb-6">Our Top Models</h1>
        <p className="text-gray-600 max-w-2xl mx-auto font-sans">
          Showcasing the finest talent in the industry. Our premier modelling agency represents top-tier models for fashion shows, commercial shoots, and brand endorsements.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
        {models.map((model, idx) => (
          <motion.div 
            key={model.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl shadow-xl shadow-brand-black/5 aspect-[3/4]"
          >
            <img src={model.image} alt={model.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl font-serif sm:text-2xl text-white mb-1">{model.name}</h3>
              <p className="text-brand-gold font-sans text-sm tracking-wider uppercase mb-4">{model.title}</p>
              <button className="flex items-center text-white/80 hover:text-white text-sm font-medium transition-colors">
                View Portfolio <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 md:mt-20 container mx-auto px-4 md:px-8 text-center">
         <Link to="/register" className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-brand-gold text-white font-medium rounded-full hover:bg-brand-bronze transition-all shadow-xl shadow-brand-gold/20">
            Apply as a Model <ArrowRight size={18} className="ml-2" />
         </Link>
      </div>
    </div>
  );
}
