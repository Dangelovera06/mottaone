import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    rating: 5,
    text: "Best investment we made in our home. The kitchen looks like it belongs in a magazine!",
  },
  {
    name: "Michael Chen",
    role: "Property Developer",
    rating: 5,
    text: "We use Motta One for all our properties. Quality and reliability every single time.",
  },
  {
    name: "Jennifer Martinez",
    role: "Interior Designer",
    rating: 5,
    text: "Impeccable craftsmanship. I recommend them to all my clients without hesitation.",
  },
];

export default function SocialProof() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Gold accent */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gold-500/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/20 border border-gold-500 rounded-full mb-4">
            <span className="text-sm font-medium text-gold-400">⭐ 5.0 Rating</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Loved by Homeowners & Designers
          </h2>
          <p className="text-lg text-gray-400">
            Join hundreds of satisfied clients
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-gold-500/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gold-500 text-white text-lg font-bold rounded-lg hover:bg-gold-600 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Your Free Quote Today →
          </button>
          <p className="text-sm text-gray-400 mt-4">✓ No obligation • ✓ Free consultation • ✓ Quick response</p>
        </motion.div>
      </div>
    </section>
  );
}
