import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most kitchen or bathroom remodeling projects take 1-2 weeks from start to finish. We'll give you an exact timeline during your free consultation."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes! We partner with leading financing companies to offer flexible payment plans with approved credit. Ask about our current promotional rates."
  },
  {
    question: "What's included in the free consultation?",
    answer: "We'll visit your home, measure the space, discuss your vision, show you material samples, and provide a detailed written quote—all at no cost or obligation."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. We're fully licensed, bonded, and insured. All our work comes with a lifetime craftsmanship warranty."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve the entire metropolitan area and surrounding counties. Contact us to confirm we service your location."
  },
  {
    question: "Can I see your work in person?",
    answer: "Yes! We'd love to show you completed projects nearby or invite you to our showroom to see material samples and examples of our craftsmanship."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We've got answers.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-black text-lg pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gold-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 p-8 bg-gold-50 rounded-2xl border border-gold-200"
        >
          <h3 className="text-2xl font-bold text-black mb-3">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            We're here to help! Get in touch and we'll answer all your questions.
          </p>
          <button
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-black text-white text-base font-bold rounded-lg hover:bg-gold-500 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Contact Us Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}

