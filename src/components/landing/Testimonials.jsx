import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "/SOCIAL PROOF/3 copy.png",
    rating: 5,
    text: "Motta One transformed our kitchen beyond our wildest dreams. The marble countertops are absolutely stunning, and their attention to detail was impeccable. Highly recommend!",
  },
  {
    name: "Michael Chen",
    role: "Property Developer",
    image: "/SOCIAL PROOF/4 copy.png",
    rating: 5,
    text: "We've worked with Motta One on multiple properties. Their professionalism, quality of work, and timely delivery are unmatched. They're our go-to for all stone work.",
  },
  {
    name: "Jennifer Martinez",
    role: "Interior Designer",
    image: "/SOCIAL PROOF/5 copy.png",
    rating: 5,
    text: "As a designer, I'm particular about craftsmanship. Motta One consistently delivers exceptional results. Their team is skilled, reliable, and a pleasure to work with.",
  },
  {
    name: "David Thompson",
    role: "Homeowner",
    image: "/SOCIAL PROOF/6 copy.png",
    rating: 5,
    text: "Our bathroom renovation was flawless. The granite installation is perfect, and the team was respectful of our home. Worth every penny!",
  },
  {
    name: "Lisa Anderson",
    role: "Restaurant Owner",
    image: "/SOCIAL PROOF/3 copy.png",
    rating: 5,
    text: "Motta One created a stunning stone feature wall for our restaurant. It's become the centerpiece that customers always comment on. Outstanding work!",
  },
  {
    name: "Robert Williams",
    role: "Homeowner",
    image: "/SOCIAL PROOF/4 copy.png",
    rating: 5,
    text: "From consultation to completion, the experience was seamless. Our outdoor kitchen is gorgeous and built to last. Thank you, Motta One!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-black text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/20 border border-gold-500/30 rounded-full mb-6">
            <span className="text-sm font-medium text-gold-400">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it—hear from those who've experienced the Motta One difference
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-gold-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/10"
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
              <p className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                {testimonial.image ? (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold-500"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "15+", label: "Years Experience" },
            { number: "5★", label: "Average Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
