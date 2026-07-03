import { Link } from 'react-router-dom';
import LogoMark from './LogoMark';

export default function Footer() {
  return (
    <footer className="border-t border-brand-gold/20 bg-brand-dark pt-12 pb-8 text-white md:pt-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-10 grid grid-cols-1 gap-8 text-center md:mb-12 md:grid-cols-3 md:text-left">
          <div>
            <LogoMark light className="mb-5 items-center md:items-start" />
            <p className="mx-auto max-w-xs text-sm leading-relaxed text-gray-400 md:mx-0">
              Crafting unforgettable experiences from corporate events to fashion shows, bringing your vision to life with creativity, precision & passion.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-serif text-brand-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="transition-colors hover:text-brand-ivory">About Us</Link></li>
              <li><Link to="/events" className="transition-colors hover:text-brand-ivory">Our Services</Link></li>
              <li><Link to="/gallery" className="transition-colors hover:text-brand-ivory">Gallery</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-brand-ivory">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-serif text-brand-gold">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@sankeyevents.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: Bengaluru, India</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-t border-white/10 pt-6 text-center text-sm text-gray-500 md:flex-row md:pt-8">
          <p>(c) {new Date().getFullYear()} Sankey Events. All Rights Reserved.</p>
          <div className="mt-4 flex gap-4 md:mt-0">
            <a href="#" className="transition-colors hover:text-brand-gold">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-brand-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
