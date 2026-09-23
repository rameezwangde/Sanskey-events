import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { signInWithRedirect } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import confetti from 'canvas-confetti';

export default function OtpModal({ isOpen, onClose, modelName, modelSlug, onSubmitSuccess, initialStep = 1, currentUser = null }) {
  const [step, setStep] = useState(initialStep); // 1: Login, 2: Confirm, 3: Success
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (err) {
      console.error("Google Sign-In Error:", err);
      setError('Authentication failed. Please try again.');
      setIsLoading(false);
    }
  };

  const handleConfirmVote = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      if (onSubmitSuccess) {
        await onSubmitSuccess(currentUser);
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
                {step === 1 && <p className="text-gray-500 font-sans text-sm">Sign in securely with Google to register your vote.</p>}
                {step === 2 && <p className="text-gray-500 font-sans text-sm">Please confirm your vote to proceed.</p>}
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  {error && <p className="text-red-500 text-sm mt-2 font-sans text-center">{error}</p>}
                  <button 
                    onClick={handleGoogleSignIn} 
                    disabled={isLoading}
                    className="w-full flex items-center justify-center py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all shadow-sm disabled:opacity-70 mt-4"
                  >
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48">
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                    </svg>
                    {isLoading ? 'Signing in...' : 'Sign in with Google'}
                  </button>
                </div>
              )}

              {step === 2 && currentUser && (
                <div className="space-y-4 mt-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
                    <p className="text-gray-600 font-sans text-sm text-center">
                      Logged in securely as:<br/>
                      <strong className="text-brand-black">{currentUser.email}</strong>
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
