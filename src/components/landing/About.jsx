import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              {/* Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <svg className="w-24 h-24 mx-auto text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-gray-600 font-medium">Company Photo</p>
                  <p className="text-sm text-gray-500">Add your team or workspace image</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-50 border border-gold-200 rounded-full">
              <span className="text-sm font-medium text-gold-700">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Crafting Excellence Since 2008
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              At Motta One, we don't just install stone—we craft timeless masterpieces that elevate your living spaces. 
              With over 15 years of expertise in premium stone work and remodeling, we've become the trusted choice for 
              homeowners who demand nothing but the best.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of skilled artisans combines traditional craftsmanship with modern techniques to deliver 
              exceptional results on every project. From selecting the perfect materials to the final polish, we're 
              with you every step of the way.
            </p>

            {/* Feature List */}
            <div className="space-y-4 pt-6">
              {[
                "Licensed & fully insured professionals",
                "Premium quality materials",
                "Lifetime craftsmanship warranty",
                "On-time, on-budget delivery"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-black mb-2">500+</div>
                <div className="text-sm text-gray-600">Completed Projects</div>
              </div>
              <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-black mb-2">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


