import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Sankey', path: '/about' },
  { name: 'Models', path: '/models' },
  { name: 'Register Here', path: '/register' },
  { name: 'Event by us', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={clsx(
      'fixed w-full top-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-brand-ivory/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    )}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center">
          <span className="text-3xl font-serif text-brand-black tracking-widest uppercase leading-none">Sankey</span>
          <div className="flex items-center mt-2 w-full">
            <div className="h-px bg-brand-bronze/50 flex-grow"></div>
            <span className="text-[10px] font-sans tracking-[0.3em] text-brand-bronze px-2 uppercase">Events</span>
            <div className="h-px bg-brand-bronze/50 flex-grow"></div>
          </div>
        </Link>
        
        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-brand-bronze relative group",
                location.pathname === link.path ? "text-brand-bronze" : "text-brand-black"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-bronze rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Social & CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex space-x-2 mr-2">
            <a href="#" className="w-8 h-8 rounded-full border border-brand-bronze/30 flex items-center justify-center text-brand-black hover:bg-brand-bronze hover:text-white transition-all"><FaFacebookF size={14} /></a>
            <a href="#" className="w-8 h-8 rounded-full border border-brand-bronze/30 flex items-center justify-center text-brand-black hover:bg-brand-bronze hover:text-white transition-all"><FaInstagram size={14} /></a>
            <a href="#" className="w-8 h-8 rounded-full border border-brand-bronze/30 flex items-center justify-center text-brand-black hover:bg-brand-bronze hover:text-white transition-all"><FaYoutube size={14} /></a>
          </div>
          <Link to="/register" className="px-6 py-2.5 bg-gradient-to-r from-brand-gold to-brand-bronze text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-brand-gold/20 transition-all flex items-center group">
            Register Now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden text-brand-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-brand-ivory shadow-lg border-t border-brand-beige xl:hidden overflow-hidden"
          >
            <div className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={clsx(
                    "text-lg font-medium transition-colors",
                    location.pathname === link.path ? "text-brand-bronze" : "text-brand-black"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-brand-beige flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-brand-bronze/30 flex items-center justify-center text-brand-black"><FaFacebookF size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-brand-bronze/30 flex items-center justify-center text-brand-black"><FaInstagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-brand-bronze/30 flex items-center justify-center text-brand-black"><FaYoutube size={18} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
