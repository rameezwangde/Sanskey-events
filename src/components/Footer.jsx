import { Link } from 'react-router-dom';
import LogoMark from './LogoMark';
import footerData from '../data/globals/footer.json';

export default function Footer() {
  return (
    <footer className="border-t border-brand-gold/20 bg-brand-dark pt-12 pb-8 text-white md:pt-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-10 grid grid-cols-1 gap-8 text-center md:mb-12 md:grid-cols-3 md:text-left">
          <div>
            <LogoMark light className="mb-5 items-center md:items-start" />
            <p className="mx-auto max-w-xs text-sm leading-relaxed text-gray-400 md:mx-0">
              {footerData.description}
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-serif text-brand-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {footerData.quickLinks.map((link) => (
                <li key={link.label}><Link to={link.url} className="transition-colors hover:text-brand-ivory">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-serif text-brand-gold">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: <a href={`mailto:${footerData.email}`} className="hover:text-brand-ivory transition-colors">{footerData.email}</a></li>
              <li>Phone: <a href={`tel:${footerData.phone.replace(/[\s\-]/g, '')}`} className="hover:text-brand-ivory transition-colors">{footerData.phone}</a></li>
              <li>Location: {footerData.location}</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-t border-white/10 pt-6 text-center text-sm text-gray-500 md:flex-row md:pt-8 gap-6 md:gap-0">
          <div className="flex flex-col items-center md:items-start">
            <p>&copy; {new Date().getFullYear()} {footerData.copyright}</p>
            {footerData.legalLinks && footerData.legalLinks.length > 0 && (
              <div className="mt-2 flex gap-4">
                {footerData.legalLinks.map((link) => (
                  <a key={link.label} href={link.url} className="transition-colors hover:text-brand-gold">{link.label}</a>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-1.5 p-4 rounded-xl bg-white/5 border border-white/5">
            <p className="text-gray-400">
              Developed by <span className="text-brand-gold font-serif text-base tracking-wide">Rameez Wangde</span>
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 text-xs">
              <a href="tel:+9710506019431" className="hover:text-brand-ivory transition-colors">+971 050 601 9431</a>
              <span className="text-brand-gold/30">|</span>
              <a href="mailto:rameezwang@gmail.com" className="hover:text-brand-ivory transition-colors">rameezwang@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
