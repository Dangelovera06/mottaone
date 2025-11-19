import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Gradient Fade */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/drive-download-20251119T185717Z-1-001/IMG_2835.JPG)',
          }}
        />
        
        {/* Gradient Overlay - Fades to White */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-white/95 to-white"></div>
        
        {/* Additional Side Gradients for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80"></div>
        
        {/* Gold Accent Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gold-500/5 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-red-700">⚡ Limited Slots Available</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-black">Premium Stone</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">
                Remodeling Done Right
              </span>
            </h1>

            {/* Value Proposition */}
            <div className="space-y-3">
              <p className="text-xl md:text-2xl text-black font-semibold">
                Get Your Dream Kitchen or Bathroom in Just 1-2 Weeks
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Premium materials • Expert craftsmanship • Lifetime warranty
              </p>
            </div>

            {/* Benefits Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 max-w-xl mx-auto lg:mx-0">
              {[
                "Free In-Home Consultation",
                "Best Price Guarantee",
                "Licensed & Insured",
                "5.0★ Rated"
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
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
            
            <p className="text-sm text-gray-500 text-center lg:text-left">✓ No obligation • ✓ Response within 24hrs</p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              {/* Secondary Hero Image */}
              <img 
                src="/drive-download-20251119T185717Z-1-001/IMG_1173.jpg" 
                alt="Premium stone remodeling work by Motta One"
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Decorative Border */}
              <div className="absolute inset-0 border-4 border-gold-500/30 rounded-2xl pointer-events-none"></div>
            </div>

            {/* Floating Trust Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl border border-gold-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">Licensed & Insured</div>
                  <div className="text-xs text-gray-500">Certified Professionals</div>
                </div>
              </div>
            </motion.div>
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
