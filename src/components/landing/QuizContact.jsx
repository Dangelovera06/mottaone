import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function QuizContact() {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mb-8 mx-auto"></div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
            Get Your Free Quote
          </h2>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Answer a few questions and we'll provide a detailed estimate
          </p>
        </motion.div>

        {/* Embedded Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border-2 border-gray-200 p-8 md:p-12"
        >
          <iframe 
            src="https://api.leadconnectorhq.com/widget/quiz/cGpUVPZJJytrRprRUM83" 
            style={{ border: 'none', width: '100%', minHeight: '600px' }} 
            scrolling="no" 
            id="cGpUVPZJJytrRprRUM83" 
            title="Get Your Free Quote"
          />
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center p-6 bg-white border border-gray-200">
            <div className="text-3xl font-bold text-black mb-2">24hrs</div>
            <p className="text-sm text-gray-600">Response Time</p>
          </div>
          <div className="text-center p-6 bg-white border border-gray-200">
            <div className="text-3xl font-bold text-black mb-2">Free</div>
            <p className="text-sm text-gray-600">Consultation</p>
          </div>
          <div className="text-center p-6 bg-white border border-gray-200">
            <div className="text-3xl font-bold text-black mb-2">Licensed</div>
            <p className="text-sm text-gray-600">& Insured</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
