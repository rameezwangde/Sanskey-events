import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-3 right-3 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-6 w-6 fill-current sm:h-8 sm:w-8"
      >
        <path d="M16.04 3.2C9.04 3.2 3.34 8.86 3.34 15.82c0 2.23.59 4.41 1.72 6.33L3.2 28.8l6.82-1.79a12.7 12.7 0 0 0 6.02 1.53h.01c7 0 12.7-5.66 12.7-12.62S23.04 3.2 16.04 3.2Zm0 23.2h-.01c-1.91 0-3.79-.51-5.43-1.48l-.39-.23-4.05 1.06 1.08-3.93-.26-.4a10.42 10.42 0 0 1-1.6-5.6c0-5.78 4.78-10.48 10.66-10.48 2.84 0 5.51 1.09 7.52 3.08a10.35 10.35 0 0 1 3.12 7.5c0 5.78-4.78 10.48-10.64 10.48Zm5.84-7.85c-.32-.16-1.89-.92-2.18-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.35-.49-2.58-1.58-.95-.84-1.6-1.88-1.78-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.7-.98-2.33-.26-.61-.52-.53-.71-.54l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.63s1.14 3.05 1.3 3.26c.16.21 2.24 3.39 5.43 4.75.76.32 1.35.51 1.81.65.76.24 1.46.2 2.01.12.61-.09 1.89-.77 2.16-1.51.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </motion.a>
  );
}

