import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: "💎",
    title: "Premium Materials",
    description: "Only the finest granite, marble, and quartz for lasting beauty"
  },
  {
    icon: "⚡",
    title: "Fast Turnaround",
    description: "Most projects completed in 1-2 weeks, not months"
  },
  {
    icon: "🛡️",
    title: "Lifetime Warranty",
    description: "Our craftsmanship is guaranteed for as long as you own your home"
  },
  {
    icon: "💰",
    title: "Best Price Guarantee",
    description: "We'll match or beat any competitor's quote"
  },
];

export default function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Why Choose Motta One?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            15+ years of excellence in stone remodeling. Here's what sets us apart.
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
              className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-black mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-black rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

