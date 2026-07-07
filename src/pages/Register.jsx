import { motion } from 'framer-motion';
import { Send, Upload } from 'lucide-react';
import { useState } from 'react';

export default function Register() {
  const [portfolioFiles, setPortfolioFiles] = useState([]);
  const [fileError, setFileError] = useState('');

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    
    if (files.length > 3) {
      setFileError('You can only upload a maximum of 3 images.');
      e.target.value = '';
      setPortfolioFiles([]);
      return;
    }
    
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    const invalidFile = files.find(f => !validTypes.includes(f.type));
    if (invalidFile) {
      setFileError('Only JPG, PNG and WebP images are allowed.');
      e.target.value = '';
      setPortfolioFiles([]);
      return;
    }
    
    setFileError('');
    setPortfolioFiles(files);
  };

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
            
            <div>
              <label className="block text-sm font-medium text-brand-black mb-2">Portfolio Images (Max 3)</label>
              <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-brand-gold transition-colors text-center cursor-pointer bg-gray-50/50">
                <input 
                  type="file" 
                  multiple 
                  accept="image/jpeg, image/png, image/webp"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center justify-center pointer-events-none">
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600 font-sans">
                    {portfolioFiles.length > 0 
                      ? `${portfolioFiles.length} file(s) selected` 
                      : 'Click or drag to upload portfolio images'}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">JPG, PNG, WebP (Up to 3 images)</p>
                </div>
              </div>
              {fileError && <p className="text-red-500 text-sm mt-2 font-sans">{fileError}</p>}
              {portfolioFiles.length > 0 && !fileError && (
                <div className="mt-3 flex flex-col gap-2">
                  {portfolioFiles.map((f, i) => (
                    <div key={i} className="text-xs text-gray-600 bg-gray-50 p-2 rounded border border-gray-100 flex items-center">
                      <span className="truncate w-full">{f.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button type="button" className="w-full min-h-12 py-3 bg-brand-gold sm:py-4 text-white font-medium rounded-lg hover:bg-brand-bronze transition-all flex items-center justify-center group shadow-xl shadow-brand-gold/20 mt-4">
              Submit Application <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
