import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OtpModal({ isOpen, onClose, modelName, modelSlug, onSubmitSuccess, initialStep = 1 }) {
  const [step, setStep] = useState(initialStep); // 1: Login, 2: Confirm, 3: Success
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  // Reset state when modal is closed
  React.useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(initialStep);
        setError('');
      }, 300);
    } else {
      setStep(initialStep);
    }
  }, [isOpen, initialStep]);

  if (!isOpen) return null;

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setStep(2);
  };

  const handleConfirmVote = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      if (onSubmitSuccess) {
        const mockUser = { email: email.toLowerCase(), uid: email.toLowerCase() };
        await onSubmitSuccess(mockUser);
        setStep(3);
        // Trigger confetti animation
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#000000', '#ffffff', '#b8860b'] // Brand colors: Gold, Black, White, Bronze
        });
      }
    } catch (err) {
      setError('Failed to submit vote. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white w-full max-w-md rounded-2xl shadow-2xl relative z-10 overflow-hidden border border-brand-beige"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-brand-black transition-colors z-20"
            >
              <X size={24} />
            </button>

            <div className="p-8">
                <div className="text-center mb-8 mt-2">
                  <p className="text-brand-bronze font-sans font-bold tracking-[0.2em] uppercase text-xs mb-2">
                    Cast Your Vote
                  </p>
                  <h2 className="text-2xl font-serif text-brand-black mb-2">
                    Voting for {modelName}
                  </h2>
                  {step === 1 && <p className="text-gray-500 font-sans text-sm">Enter your email to register your vote.</p>}
                  {step === 2 && <p className="text-gray-500 font-sans text-sm">Please confirm your vote to proceed.</p>}
                </div>

                {step === 1 && (
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    {error && <p className="text-red-500 text-sm mt-2 font-sans text-center">{error}</p>}
                    <input
                      type="email"
                      placeholder="Enter your email (e.g., yourname@yahoo.com)"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold font-sans"
                      required
                    />
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center py-3 bg-brand-black text-white font-medium rounded-lg hover:bg-gray-800 transition-all shadow-sm disabled:opacity-70 mt-4"
                    >
                      Continue
                    </button>
                  </form>
                )}

                {step === 2 && (
                  <div className="space-y-4 mt-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
                      <p className="text-gray-600 font-sans text-sm text-center">
                        Voting with email:<br/>
                        <strong className="text-brand-black">{email}</strong>
                      </p>
                    </div>
                    {error && <p className="text-red-500 text-sm mt-2 font-sans text-center">{error}</p>}
                    <button 
                      onClick={handleConfirmVote} 
                      disabled={isLoading}
                      className="w-full flex items-center justify-center px-8 py-3 bg-brand-gold text-white font-medium rounded-xl hover:bg-brand-bronze transition-all shadow-lg shadow-brand-gold/20 disabled:opacity-70"
                    >
                      {isLoading ? 'Confirming...' : 'Confirm Vote'}
                    </button>
                  </div>
                )}

              {step === 3 && (
                <div className="text-center py-4">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle2 size={32} />
                  </motion.div>
                  <h3 className="text-xl font-serif text-brand-black mb-2">Vote Registered!</h3>
                  <p className="text-gray-500 font-sans mb-6">Thank you for supporting {modelName}. Your vote has been recorded successfully.</p>
                  <button 
                    onClick={onClose}
                    className="px-8 py-3 bg-brand-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors w-full"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
