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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-2 border-gray-200 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mb-6"></div>
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
                    Get Your Free Quote
                  </h2>
                  <p className="text-xl text-gray-600">
                    Quick answers for a personalized estimate
                  </p>
                </div>

                {/* Embedded Quiz */}
                <div className="bg-white">
                  <iframe 
                    src="https://api.leadconnectorhq.com/widget/quiz/cGpUVPZJJytrRprRUM83" 
                    style={{ border: 'none', width: '100%', minHeight: '600px' }} 
                    scrolling="no" 
                    id="cGpUVPZJJytrRprRUM83" 
                    title="Get Your Free Quote"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
