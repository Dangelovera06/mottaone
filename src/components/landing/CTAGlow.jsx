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
          {/* Glowing CTA Box */}
          <div className="relative p-12 md:p-16 bg-white border-2 border-green-500 overflow-hidden group">
            {/* Animated Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0 animate-shimmer"></div>
            
            {/* Corner Glows */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-green-500/30 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-500/30 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
                {config.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {config.subtitle}
              </p>

              {/* Glowing Button */}
              <motion.button
                onClick={openQuiz}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-12 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white text-xl font-bold rounded-none overflow-hidden group/btn"
                style={{
                  boxShadow: '0 0 40px rgba(34, 197, 94, 0.6), 0 0 80px rgba(34, 197, 94, 0.3)',
                }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                
                <span className="relative z-10">{config.buttonText}</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
