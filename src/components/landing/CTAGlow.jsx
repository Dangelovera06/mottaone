import React from "react";
import { motion } from "framer-motion";

export default function CTAGlow({ variant = 1, openQuiz }) {
  const variants = {
    1: {
      title: "Ready to Transform Your Space?",
      subtitle: "Get your free quote in under 60 seconds",
      buttonText: "Start Your Project",
    },
    2: {
      title: "See What's Possible",
      subtitle: "Book a free consultation with our stone experts",
      buttonText: "Schedule Consultation",
    },
    3: {
      title: "Limited Availability",
      subtitle: "Only 3 project slots remaining this month",
      buttonText: "Claim Your Spot",
    },
  };

  const config = variants[variant];

  return (
    <section className={`py-20 md:py-24 ${variant === 2 ? 'bg-white' : 'bg-gray-50'} relative overflow-hidden`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* CTA Box */}
          <div className="relative p-12 md:p-16 bg-white border-2 border-gray-200 overflow-hidden group">            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
                {config.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {config.subtitle}
              </p>

              {/* Red Button */}
              <motion.button
                onClick={openQuiz}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-12 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white text-xl font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg"
              >
                {config.buttonText}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
