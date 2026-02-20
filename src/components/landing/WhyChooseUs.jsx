import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Premium Materials",
    description: "We source only the finest stone materials from trusted suppliers around the world",
  },
  {
    number: "02",
    title: "Master Craftsmen",
    description: "Our team brings 15+ years of specialized stone installation experience",
  },
  {
    number: "03",
    title: "Fast Delivery",
    description: "Complete most projects in 1-2 weeks without compromising quality",
  },
  {
    number: "04",
    title: "Lifetime Warranty",
    description: "Every installation backed by our comprehensive lifetime guarantee",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-200">
              <img
                src="/drive-download-20251119T185717Z-1-001/IMG_1173.jpg"
                alt="Quality Craftsmanship"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-800 to-black"></div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pt-12"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-black mb-8"></div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-12 tracking-tight">
              Why Choose<br />Motta One
            </h2>

            <div className="space-y-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-4 border-black pl-6"
                >
                  <div className="text-sm font-bold text-gray-800 mb-2 tracking-wider">
                    {feature.number}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
