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
            {/* Urgency Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block"
            >
              <div className="px-4 py-2 bg-red-500 text-white text-sm font-bold uppercase tracking-wide inline-block">
                Limited Slots Available This Month
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight tracking-tight">
              Get Your Dream Kitchen in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">
                5 Days!
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600"></div>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Premium stone countertops installed fast. No mess, no stress, just beautiful results.
            </p>

            {/* Social Proof - Profile Pics */}
            <div className="flex items-center gap-4 py-4">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-3 border-white bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white font-bold shadow-lg">
                  JM
                </div>
                <div className="w-12 h-12 rounded-full border-3 border-white bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold shadow-lg">
                  SK
                </div>
                <div className="w-12 h-12 rounded-full border-3 border-white bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-white font-bold shadow-lg">
                  RM
                </div>
                <div className="w-12 h-12 rounded-full border-3 border-white bg-gradient-to-br from-black to-gray-700 flex items-center justify-center text-white font-bold shadow-lg">
                  AL
                </div>
                <div className="w-12 h-12 rounded-full border-3 border-white bg-gradient-to-br from-gold-600 to-gold-800 flex items-center justify-center text-white font-bold shadow-lg">
                  TC
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-900">
                  Trusted by 1,000+ satisfied customers
                </p>
              </div>
            </div>

            {/* Benefits Checklist */}
            <div className="space-y-3">
              {[
                "Free in-home consultation & quote",
                "Professional installation in just 5 days",
                "Lifetime warranty on all work",
                "Licensed & insured contractors"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base md:text-lg text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={openQuiz}
                className="px-10 py-5 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xl font-bold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                style={{
                  boxShadow: '0 0 30px rgba(212, 160, 47, 0.4)'
                }}
              >
                Get Your Free Quote Now
              </button>
              <p className="text-sm text-gray-500 mt-3">No obligation • Response within 24 hours</p>
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
