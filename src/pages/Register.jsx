import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Register() {
  return (
    <div className="pt-12 pb-16 md:pt-20 md:pb-20 min-h-screen bg-brand-ivory">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <p className="text-brand-bronze font-sans font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-2">
            Join the Journey
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-black mb-6">Register Here</h1>
          <p className="text-gray-600 font-sans">
            Apply now for the upcoming South India Queen & Mrs. Garden City pageants, or register for our modeling agency.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl shadow-brand-bronze/10 border border-brand-beige p-5 sm:p-8 md:p-12"
        >
          <form className="space-y-5 md:space-y-6">
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-sans" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-sans" placeholder="Doe" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-black mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-sans" placeholder="john@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-black mb-2">Phone Number</label>
              <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-sans" placeholder="+91 98765 43210" />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-black mb-2">Applying For</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-sans bg-white">
                <option>South India Queen</option>
                <option>Mrs. Garden City</option>
                <option>Modelling Agency</option>
                <option>General Event Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-black mb-2">Additional Information</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-sans resize-none" placeholder="Tell us more about yourself..."></textarea>
            </div>

            <button type="button" className="w-full min-h-12 py-3 bg-brand-gold sm:py-4 text-white font-medium rounded-lg hover:bg-brand-bronze transition-all flex items-center justify-center group shadow-xl shadow-brand-gold/20">
              Submit Application <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
