import { motion } from 'framer-motion';
import { Send, Upload } from 'lucide-react';
import { useState } from 'react';
import registerData from '../data/pages/register.json';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwOgVOR-saK-1hstlDqg2UR3GVXydrOCs8AaXSW7r3Ps5yRRbfD0617nR6Yg4Ex9iKVWA/exec";

export default function Register() {
  const [portfolioFiles, setPortfolioFiles] = useState([]);
  const [fileError, setFileError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const [formData, setFormData] = useState(() => {
    const initial = {};
    if (registerData.formFields) {
      registerData.formFields.forEach(field => {
        initial[field.name] = field.type === 'select' && field.options?.length > 0 ? field.options[0] : '';
      });
    }
    return initial;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      const subject = `New Application - ${registerData.title}`;
      let body = '';
      if (registerData.formFields) {
        registerData.formFields.forEach(field => {
          body += `${field.label}: ${formData[field.name] || ''}\n`;
        });
      }
      
      const base64Files = await Promise.all(
        portfolioFiles.map(async (file) => {
          const base64 = await fileToBase64(file);
          return {
            name: file.name,
            type: file.type,
            base64: base64
          };
        })
      );

      const payload = {
        subject,
        body,
        files: base64Files
      };

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      
      if (result.status === 'success') {
        setSubmitSuccess(true);
        setPortfolioFiles([]);
        const initial = {};
        if (registerData.formFields) {
          registerData.formFields.forEach(field => {
            initial[field.name] = field.type === 'select' && field.options?.length > 0 ? field.options[0] : '';
          });
        }
        setFormData(initial);
      } else {
        throw new Error(result.message || 'Failed to submit application.');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError('An error occurred while submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field) => {
    const isFullWidth = ['textarea', 'email', 'tel', 'select'].includes(field.type);
    
    if (field.type === 'textarea') {
      return (
        <div key={field.name} className={isFullWidth ? "md:col-span-2" : ""}>
          <label className="block text-sm font-medium text-brand-black mb-2">{field.label}</label>
          <textarea 
            name={field.name} 
            value={formData[field.name] || ''} 
            onChange={handleChange} 
            rows={4} 
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-sans resize-none" 
            placeholder={field.placeholder}
          />
        </div>
      );
    }
    
    if (field.type === 'select') {
      return (
        <div key={field.name} className={isFullWidth ? "md:col-span-2" : ""}>
          <label className="block text-sm font-medium text-brand-black mb-2">{field.label}</label>
          <select 
            name={field.name} 
            value={formData[field.name] || ''} 
            onChange={handleChange} 
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-sans bg-white"
          >
            {field.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
      );
    }

    return (
      <div key={field.name} className={isFullWidth ? "md:col-span-2" : ""}>
        <label className="block text-sm font-medium text-brand-black mb-2">{field.label}</label>
        <input 
          type={field.type} 
          name={field.name} 
          value={formData[field.name] || ''} 
          onChange={handleChange} 
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-sans" 
          placeholder={field.placeholder} 
        />
      </div>
    );
  };

  return (
    <div className="pt-12 pb-16 md:pt-20 md:pb-20 min-h-screen bg-brand-ivory">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <p className="text-brand-bronze font-sans font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-2">
            {registerData.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-black mb-6">{registerData.title}</h1>
          <p className="text-gray-600 font-sans">
            {registerData.description}
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl shadow-brand-bronze/10 border border-brand-beige p-5 sm:p-8 md:p-12"
        >
          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center font-sans">
              <h3 className="font-bold text-lg mb-1">Application Submitted!</h3>
              <p>Thank you for applying. We have received your details and portfolio.</p>
              <button 
                onClick={() => setSubmitSuccess(false)}
                className="mt-3 text-sm text-green-600 hover:text-green-800 underline"
              >
                Submit another application
              </button>
            </div>
          )}
          
          {!submitSuccess && (
          <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              {registerData.formFields?.map(field => renderField(field))}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-brand-black mb-2 mt-6">Portfolio Images (Max 3)</label>
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

              {submitError && <p className="text-red-500 text-sm mt-4 font-sans text-center">{submitError}</p>}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full min-h-12 py-3 bg-brand-gold sm:py-4 text-white font-medium rounded-lg hover:bg-brand-bronze transition-all flex items-center justify-center group shadow-xl shadow-brand-gold/20 mt-4 relative z-10 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span>Sending Application...</span>
              ) : (
                <>
                  Submit Application <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
