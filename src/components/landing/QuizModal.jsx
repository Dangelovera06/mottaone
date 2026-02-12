import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuizModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      // Load the form embed script when modal opens
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      script.id = 'leadconnector-script';
      
      if (!document.getElementById('leadconnector-script')) {
        document.body.appendChild(script);
      }

      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-7xl h-[98vh] overflow-auto bg-white border-2 border-gray-200 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="sticky top-2 right-2 ml-auto mr-2 mb-2 z-10 w-10 h-10 flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Embedded Quiz - Full Height */}
              <div className="w-full" style={{ minHeight: '200vh' }}>
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/quiz/cGpUVPZJJytrRprRUM83" 
                  style={{ border: 'none', width: '100%', minHeight: '200vh' }} 
                  scrolling="no" 
                  id="cGpUVPZJJytrRprRUM83" 
                  title="Get Your Free Quote"
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
