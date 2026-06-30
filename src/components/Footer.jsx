import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-brand-gold/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-serif tracking-widest uppercase mb-4 text-brand-ivory">Sankey<span className="block text-sm font-sans tracking-[0.3em] text-brand-bronze mt-1">Events</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Crafting unforgettable experiences from corporate events to fashion shows, bringing your vision to life with creativity, precision & passion.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-serif mb-4 text-brand-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-brand-ivory transition-colors">About Us</Link></li>
              <li><Link to="/events" className="hover:text-brand-ivory transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-ivory transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-brand-ivory transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-serif mb-4 text-brand-gold">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@sankeyevents.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: Bengaluru, India</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Sankey Events. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
             <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
