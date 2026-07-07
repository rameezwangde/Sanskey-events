import { motion } from 'framer-motion';
import { Users, Star, ShieldCheck, Award } from 'lucide-react';

const stats = [
  { icon: Users, value: '15+', label: 'Years of Experience' },
  { icon: Star, value: '500+', label: 'Events Executed' },
  { icon: ShieldCheck, value: '100+', label: 'Happy Clients' },
  { icon: Award, value: '50+', label: 'Brands Trust Us' },
];

export default function StatsSection() {
  return (
    <section className="bg-brand-ivory py-12 md:py-16 px-4 md:px-8 border-b border-brand-beige/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-1 gap-6 rounded-2xl border border-brand-beige/60 bg-white/80 p-6 shadow-xl shadow-brand-bronze/5 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 md:p-8 md:divide-x md:divide-brand-beige backdrop-blur-sm">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`flex items-center justify-center gap-4 ${index !== 0 ? 'md:pl-8' : ''}`}>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-beige/50 text-brand-bronze">
                <stat.icon size={26} />
              </div>
              <div className="min-w-0 text-left">
                <h4 className="font-serif text-2xl font-bold text-brand-black">{stat.value}</h4>
                <p className="text-sm font-medium leading-snug text-gray-700">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
