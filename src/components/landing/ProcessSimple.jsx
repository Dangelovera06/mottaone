import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Consultation",
    description: "Free in-home visit to discuss your vision and measure the space",
  },
  {
    title: "Design",
    description: "Select materials and finalize design with expert guidance",
  },
  {
    title: "Installation",
    description: "Professional installation with minimal disruption to your home",
  },
  {
    title: "Completion",
    description: "Final walkthrough and lifetime warranty activation",
  },
];

export default function ProcessSimple() {
  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-black mb-8"></div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Our Process
          </h2>
          <p className="text-2xl text-gray-400 max-w-2xl">
            Simple, transparent, professional
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-full p-8 bg-white/5 border border-white/10 hover:border-gray-800 transition-all duration-300">
                <div className="text-7xl font-bold text-black/20 mb-6">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
