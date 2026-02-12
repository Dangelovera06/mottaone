import React from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500/20 border border-gold-500 rounded-full mb-6">
            <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gold-400 uppercase tracking-wide">Limited Availability This Month</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get a <span className="text-gold-400 font-bold">complimentary consultation</span> and detailed quote within 24 hours.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            {[
              { text: "Free In-Home Consultation" },
              { text: "Price Match Guarantee" },
              { text: "Fast Project Start" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-3 p-5 bg-white/5 rounded-lg border border-white/10 hover:border-gold-500/50 transition-all duration-300">
                <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-5 bg-gold-500 text-black text-xl font-bold rounded-lg hover:bg-gold-400 transition-all duration-300 hover:scale-105 shadow-2xl mb-4"
          >
            Schedule Free Consultation Now →
          </button>

          <p className="text-sm text-gray-400">
            Response in 24 hours or less • Licensed & Insured • Lifetime Warranty
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-500">500+</div>
              <div className="text-xs text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-500">15+</div>
              <div className="text-xs text-gray-400">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-500">98%</div>
              <div className="text-xs text-gray-400">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-500">5.0★</div>
              <div className="text-xs text-gray-400">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

