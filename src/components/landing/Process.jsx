import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We meet with you to understand your vision, measure the space, and discuss material options and budget.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Our designers create detailed plans and 3D renderings, helping you visualize the final result.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Material Selection",
    description: "Visit our showroom to handpick premium stones, colors, and finishes for your project.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Expert Installation",
    description: "Our skilled craftsmen install your stonework with precision, care, and attention to detail.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Final Inspection",
    description: "We conduct a thorough walkthrough, ensuring every detail meets our high standards and your expectations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-50 border border-gold-200 rounded-full mb-6">
            <span className="text-sm font-medium text-gold-700">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A streamlined approach from concept to completion
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-24 bottom-24 w-0.5 bg-gradient-to-b from-gold-500 via-gold-400 to-gold-500 transform -translate-x-1/2"></div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className="inline-block p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      {index % 2 === 0 ? (
                        <>
                          <div className="lg:order-2">
                            <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center text-white">
                              {step.icon}
                            </div>
                          </div>
                          <div className="lg:order-1 text-left lg:text-right">
                            <div className="text-sm font-bold text-gold-500 mb-1">{step.number}</div>
                            <h3 className="text-2xl font-bold text-black">{step.title}</h3>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center text-white">
                            {step.icon}
                          </div>
                          <div className="text-left">
                            <div className="text-sm font-bold text-gold-500 mb-1">{step.number}</div>
                            <h3 className="text-2xl font-bold text-black">{step.title}</h3>
                          </div>
                        </>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="hidden lg:flex w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 items-center justify-center shadow-xl flex-shrink-0 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-white"></div>
                </div>

                {/* Spacer */}
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule your free consultation today and let's bring your vision to life
            </p>
            <button
              onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-black text-white text-base font-semibold rounded-lg hover:bg-gold-500 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


