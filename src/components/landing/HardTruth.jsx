import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";

const benefits = [
  {
    title: "YOU DON'T NEED TECH SKILLS",
    description: "Building a profitable info product doesn't require coding or technical expertise—we handle all the technical setup, platforms, and integrations so you can focus on your content and audience.",
    icon: "/website icons/29.png"
  },
  {
    title: "YOU DON'T NEED TO BE A COURSE CREATOR",
    description: "Momento transforms your existing knowledge and content into structured courses and products. We handle the curriculum design, formatting, and delivery—you just provide the expertise.",
    icon: "/website icons/30.png"
  },
  {
    title: "YOU DON'T NEED MARKETING EXPERIENCE",
    description: "Our proven sales funnel templates convert visitors into paying customers automatically. We build email sequences, landing pages, and checkout flows that have generated millions in revenue.",
    icon: "/website icons/31.png"
  },
  {
    title: "YOU DON'T NEED A MASSIVE AUDIENCE",
    description: "With Momento, even a modest engaged following can generate serious revenue. We've helped creators with just 5,000 followers build six-figure businesses through strategic monetization.",
    icon: "/website icons/32.png"
  }
];

export default function HardTruth() {
  return (
    <section className="py-16 md:py-24 relative bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-[#006eff]" />
            <span className="text-sm text-[#006eff] uppercase tracking-wider">
              Good News
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            Stop Leaving Money on the Table
          </h2>

          <p className="text-lg sm:text-xl text-white/80 mb-4 max-w-3xl mx-auto">
            Until now, monetizing your audience required technical skills, marketing expertise, and months of trial and error.
          </p>

          <p className="text-xl sm:text-2xl font-bold text-[#006eff] mb-12 max-w-3xl mx-auto">
            Momento handles everything so you can focus on what you do best.
          </p>

          <div className="space-y-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl text-left bg-white/[0.02] border border-white/10 backdrop-blur-sm"
              >
                <img 
                  src={benefit.icon} 
                  alt="" 
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain opacity-90 mb-6"
                />
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#006eff] mb-3">
                  {benefit.title}
                </p>
                <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center px-4"
          >
            <RainbowButton
              onClick={() => {
                if (window.fbq) {
                  window.fbq('track', 'Lead', {
                    content_name: 'Benefits Section CTA Click',
                    content_category: 'CTA Button'
                  });
                }
                window.open('#', '_blank');
              }}
              className="text-lg font-bold"
              style={{ width: '397.2px', height: '62.4px', maxWidth: '100%' }}
            >
              Apply Today
            </RainbowButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
