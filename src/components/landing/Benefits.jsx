import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Premium Materials",
    description: "Only the finest granite, marble, and quartz for lasting beauty"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast Turnaround",
    description: "Most projects completed in 1-2 weeks, not months"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Lifetime Warranty",
    description: "Our craftsmanship is guaranteed for as long as you own your home"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Best Price Guarantee",
    description: "We'll match or beat any competitor's quote"
  },
];

export default function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Subtle Gradient Accents */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gold-500/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Why Choose Motta One
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            15+ years of excellence in stone remodeling
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 bg-gray-900 rounded-xl border border-gray-800 shadow-sm hover:shadow-xl hover:border-gold-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center text-white mb-6 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Gold accent gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gold-500/10 to-transparent"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">500+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">98%</div>
              <div className="text-sm text-gray-400">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">15+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">5★</div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

