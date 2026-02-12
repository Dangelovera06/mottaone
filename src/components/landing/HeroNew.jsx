import React from "react";
import { motion } from "framer-motion";

export default function HeroNew() {
  return (
    <section className="relative min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-none tracking-tighter">
                Luxury Stone
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black">
                  Remodeling
                </span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600"></div>
              
              <p className="text-2xl text-gray-600 leading-relaxed max-w-lg">
                Transform your home with expert stone craftsmanship
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-black text-white text-lg font-semibold rounded-none hover:bg-gray-900 transition-all duration-300"
              >
                Request Quote
              </button>
              <button
                onClick={() => {
                  document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white text-black text-lg font-semibold border-2 border-black rounded-none hover:bg-gray-50 transition-all duration-300"
              >
                View Projects
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8 border-t border-gray-200">
              {[
                { value: "15+", label: "Years" },
                { value: "500+", label: "Projects" },
                { value: "5.0", label: "Rating" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-black">{stat.value}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/drive-download-20251119T185717Z-1-001/header-image.jpg"
                alt="Motta One Stone Work"
                className="w-full h-full object-cover"
              />
              
              {/* Gold accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-gold-500 to-gold-600"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
