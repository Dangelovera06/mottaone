import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Gradient Fade to Black */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/drive-download-20251119T185717Z-1-001/IMG_2835.JPG)',
          }}
        />
        
        {/* Gradient Overlay - More Image Visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent via-50% to-black to-75%"></div>
        
        {/* Bottom gradient for smooth fade to black */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
        
        {/* Side Gradients for Content Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
        
        {/* Gold Accent Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gold-500/10 to-transparent"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Main Content - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-4xl"
          >
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-red-400">⚡ Limited Slots Available</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white drop-shadow-lg">Premium Stone</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 drop-shadow-lg">
                Remodeling Done Right
              </span>
            </h1>

            {/* Value Proposition */}
            <div className="space-y-3">
              <p className="text-xl md:text-2xl text-white font-semibold drop-shadow-lg">
                Get Your Dream Kitchen or Bathroom in Just 1-2 Weeks
              </p>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl drop-shadow-md">
                Premium materials • Expert craftsmanship • Lifetime warranty
              </p>
            </div>

            {/* Benefits Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 max-w-2xl mx-auto">
              {[
                "Free In-Home Consultation",
                "Best Price Guarantee",
                "Licensed & Insured",
                "5.0★ Rated"
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-3 backdrop-blur-sm bg-black/20 p-2 rounded-lg">
                  <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base text-white font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <button
                onClick={() => {
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-gold-500 text-white text-lg font-bold rounded-lg hover:bg-gold-600 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Get FREE Quote Today →
              </button>
              <button
                onClick={() => {
                  document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white text-black text-lg font-semibold rounded-lg border-2 border-black hover:bg-gray-50 transition-all duration-300"
              >
                See Our Work
              </button>
            </div>
            
            <p className="text-sm text-gray-400">✓ No obligation • ✓ Response within 24hrs</p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
