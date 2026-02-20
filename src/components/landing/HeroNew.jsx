import React from "react";
import { motion } from "framer-motion";

export default function HeroNew({ openQuiz }) {
  return (
    <section className="relative min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
              South Florida's Most Capable
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                Stone Fabricators
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700"></div>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Transform your kitchen or bathroom with expert craftsmanship. Premium quality, professional results.
            </p>

            {/* Social Proof - Profile Pics */}
            <div className="flex flex-wrap items-center gap-4 py-4">
              <div className="flex -space-x-3">
                <img 
                  src="/profile-jennifer.jpg" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full border-3 border-white shadow-lg object-cover"
                />
                <img 
                  src="/profile-sarah.jpg" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full border-3 border-white shadow-lg object-cover"
                />
                <img 
                  src="/profile-robert.jpg" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full border-3 border-white shadow-lg object-cover"
                />
                <img 
                  src="/profile-amanda.jpg" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full border-3 border-white shadow-lg object-cover"
                />
                <img 
                  src="/profile-thomas.jpg" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full border-3 border-white shadow-lg object-cover"
                />
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                  Trusted by 1,000+ satisfied customers
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={openQuiz}
                className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-lg font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Free Quote
              </button>
              <button
                onClick={() => {
                  document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-10 py-4 bg-white text-black text-lg font-semibold border-2 border-black hover:bg-gray-50 transition-all duration-300"
              >
                View Projects
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8 border-t border-gray-200">
              {[
                { value: "15+", label: "Years" },
                { value: "1000+", label: "Projects" },
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
                src="/drive-download-20251119T185717Z-1-001/modern kitch re.png"
                alt="Motta One Stone Work"
                className="w-full h-full object-cover"
              />
              
              {/* Red accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 to-red-700"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
