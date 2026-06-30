import { motion } from 'framer-motion';
import { Calendar, Building, HeartHandshake, Scissors, Speaker, Star, Zap, Camera, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: Calendar, title: 'Event Management', desc: 'Seamless planning & execution for every type of event.' },
  { icon: Building, title: 'Corporate Events', desc: 'Professional events that inspire & engage your workforce.' },
  { icon: HeartHandshake, title: 'Wedding Events', desc: 'Beautifully crafted weddings to cherish forever.' },
  { icon: Scissors, title: 'Fashion Shows', desc: 'Stylish, creative & perfectly executed runway shows.' },
  { icon: Speaker, title: 'Audio Visuals', desc: 'High-end AV solutions for impactful and immersive experiences.' },
  { icon: Star, title: 'Celebrity Management', desc: 'Connect, collaborate & create unforgettable star moments.' },
  { icon: Zap, title: 'Brand Activations', desc: 'Engaging campaigns that bring your brand story to life.' },
  { icon: Camera, title: 'Photography & Video', desc: 'Capturing memories with cinematic brilliance and precision.' },
];

export default function ServicesSection() {
  return (
    <section className="pt-32 pb-20 bg-brand-ivory">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <p className="text-brand-bronze font-sans font-bold tracking-[0.2em] uppercase text-sm mb-2">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-black">
              End-to-End Event Solutions
            </h2>
          </div>
          <Link to="/events" className="text-brand-bronze font-medium flex items-center hover:text-brand-gold transition-colors mt-4 md:mt-0 group">
            View All Services <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 hover:shadow-2xl hover:shadow-brand-bronze/10 transition-all group border border-brand-beige"
            >
              <div className="w-14 h-14 rounded-full bg-brand-beige flex items-center justify-center text-brand-bronze mb-6 group-hover:bg-brand-gold group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-black mb-3 group-hover:text-brand-gold transition-colors">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
