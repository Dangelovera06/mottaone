import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-50 border border-gold-200 rounded-full">
              <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gold-700">Premium Stone Specialists</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-black">Craft Your</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">
                Dream Space
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Transform your home with expertly crafted stone installations and premium remodeling services. 
              Where luxury meets precision.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-black">15+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-black">500+</div>
                <div className="text-sm text-gray-500">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-black">98%</div>
                <div className="text-sm text-gray-500">Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => {
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-black text-white text-base font-semibold rounded-lg hover:bg-gold-500 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Your Project
              </button>
              <button
                onClick={() => {
                  document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white text-black text-base font-semibold rounded-lg border-2 border-black hover:bg-gray-50 transition-all duration-300"
              >
                View Portfolio
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              {/* Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <svg className="w-24 h-24 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-500 font-medium">Luxury Stone Work</p>
                  <p className="text-sm text-gray-400">Add your hero image here</p>
                </div>
              </div>
              
              {/* Decorative Border */}
              <div className="absolute inset-0 border-4 border-gold-500/20 rounded-2xl pointer-events-none"></div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100"
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
