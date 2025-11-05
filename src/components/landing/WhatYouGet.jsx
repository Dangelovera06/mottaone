import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Gift } from "lucide-react";

const sprintFeatures = [
  "Complete course content creation & structuring",
  "High-converting sales funnel design & setup",
  "Email automation & nurture sequences",
  "Payment processing & member area setup",
  "Launch strategy & marketing materials",
  "Ongoing support until your first $10K in sales"
];

export default function WhatYouGet() {
  return (
    <section className="py-24 md:py-32 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-block mb-6">
            <span className="px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm bg-white/[0.03] text-[#006eff] border border-white/10 uppercase tracking-wider">
              What You're Getting
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 px-4 text-white">
            Everything You Need to Monetize Your Audience
          </h2>
        </motion.div>

        {/* Sprint Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {sprintFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-2 rounded-xl text-white font-bold transition-all hover:scale-105 bg-gradient-to-b from-[#0080ff] via-[#006eff] to-[#0050cc] shadow-[0_0_20px_rgba(0,110,255,0.5),0_0_40px_rgba(0,110,255,0.3),0_0_60px_rgba(0,110,255,0.2)] text-lg"
            style="width: 397.2px; height: 62.4px; max-width: 100%;"
          >
            <span 
              className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 via-transparent to-transparent"
            />
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>Apply Today</span>
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}


