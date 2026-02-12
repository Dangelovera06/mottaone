import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "Schedule a complimentary in-home consultation. We measure, discuss your vision, and provide expert recommendations.",
  },
  {
    number: "02",
    title: "Select Materials",
    description: "Choose from premium granite, marble, or quartz. We help you select the perfect stone for your space and budget.",
  },
  {
    number: "03",
    title: "Professional Installation",
    description: "Our expert craftsmen complete your project with precision. Most installations finished in 1-2 weeks.",
  },
  {
    number: "04",
    title: "Enjoy Your Space",
    description: "Backed by our lifetime warranty, enjoy your beautiful new space with complete peace of mind.",
  },
];

export default function ProcessSimple() {
  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
        <div className="w-full h-full bg-gradient-to-r from-gold-500/5 via-gold-500/10 to-gold-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple Process, Beautiful Results
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From first meeting to final installation, we make it easy
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
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(100%+1rem)] w-8 h-0.5 bg-gradient-to-r from-gold-500 to-transparent"></div>
              )}

              <div className="text-center">
                {/* Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full text-black font-bold text-2xl mb-6">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-5 bg-gold-500 text-black text-lg font-bold rounded-lg hover:bg-gold-400 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Start Your Project Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
