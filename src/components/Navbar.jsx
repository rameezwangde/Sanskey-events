import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import LogoMark from './LogoMark';

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
    <nav
      className={clsx(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-brand-ivory/95 py-4 shadow-sm backdrop-blur-md' : 'bg-transparent py-6',
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <Link to="/" aria-label="Sankey Events home" className="shrink-0">
          <LogoMark />
        </Link>

        <div className="hidden items-center space-x-6 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={clsx(
                'group relative text-sm font-medium transition-colors hover:text-brand-bronze',
                location.pathname === link.path ? 'text-brand-bronze' : 'text-brand-black',
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-brand-bronze"></span>
              )}
            </Link>
          ))}
        </div>

        <div className="hidden items-center space-x-4 lg:flex">
          <div className="mr-2 flex space-x-2">
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-bronze/30 text-brand-black transition-all hover:bg-brand-bronze hover:text-white"><FaFacebookF size={14} /></a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-bronze/30 text-brand-black transition-all hover:bg-brand-bronze hover:text-white"><FaInstagram size={14} /></a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-bronze/30 text-brand-black transition-all hover:bg-brand-bronze hover:text-white"><FaYoutube size={14} /></a>
          </div>
          <Link to="/register" className="group flex items-center rounded-full bg-gradient-to-r from-brand-gold to-brand-bronze px-6 py-2.5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-brand-gold/20">
            Register Now <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <button
          type="button"
          className="text-brand-black xl:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute left-0 top-full w-full overflow-hidden border-t border-brand-beige bg-brand-ivory shadow-lg xl:hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={clsx(
                    'text-lg font-medium transition-colors',
                    location.pathname === link.path ? 'text-brand-bronze' : 'text-brand-black',
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex space-x-4 border-t border-brand-beige pt-4">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-bronze/30 text-brand-black"><FaFacebookF size={18} /></a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-bronze/30 text-brand-black"><FaInstagram size={18} /></a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-bronze/30 text-brand-black"><FaYoutube size={18} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
