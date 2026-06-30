import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-brand-ivory">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-bronze font-sans font-bold tracking-[0.2em] uppercase text-sm mb-2">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-black mb-4">Contact Sankey Events</h1>
          <p className="text-gray-600 max-w-2xl mx-auto font-sans">
            Ready to craft an unforgettable experience? Reach out to us to discuss your upcoming event, show, or campaign.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-brand-black/5 border border-brand-beige"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-beige flex flex-shrink-0 items-center justify-center text-brand-bronze">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-brand-black mb-2">Visit Us</h3>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed">
                    123 Luxury Avenue,<br />
                    Indiranagar, Bengaluru,<br />
                    Karnataka 560038
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-beige flex flex-shrink-0 items-center justify-center text-brand-bronze">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-brand-black mb-2">Call Us</h3>
                  <p className="text-gray-600 font-sans text-sm">
                    +91 98765 43210<br />
                    +91 80 1234 5678
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-brand-beige flex flex-shrink-0 items-center justify-center text-brand-bronze">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-brand-black mb-2">Email Us</h3>
                  <p className="text-gray-600 font-sans text-sm">
                    info@sankeyevents.com<br />
                    bookings@sankeyevents.com
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-brand-black/5 border border-brand-beige"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-black mb-2">Your Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-sans" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-black mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-sans" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">Subject</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-sans" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-sans resize-none"></textarea>
                </div>

                <button type="button" className="py-4 px-8 bg-brand-black text-white font-medium rounded-lg hover:bg-brand-bronze transition-all flex items-center group shadow-xl">
                  Send Message <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
