import React from "react";
import { motion } from "framer-motion";
import { BeamsBackground } from "@/components/ui/beams-background";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Hero() {

  return (
    <BeamsBackground intensity="medium">
      {/* Main Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16 pt-24 sm:pt-28">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
              We Build Your{' '}
              <span className="bg-gradient-to-r from-[#006eff] via-[#0080ff] to-[#006eff] bg-clip-text text-transparent">
                Course, Sales Funnel & Complete
              </span>
              {' '}Monetization System
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-light">
              (without needing tech skills or marketing experience)
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-white pt-2">
              If you don't make money, we don't get paid — simple as that
            </p>
          </motion.div>

          {/* Placeholder Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 mb-8 md:mb-10 max-w-4xl mx-auto w-full"
          >
            <div className="relative rounded-2xl border-2 border-[#006eff]/30 bg-gradient-to-br from-[#006eff]/10 to-transparent p-12 sm:p-16 md:p-24 backdrop-blur-sm">
              <div className="text-center text-white/40 text-xl sm:text-2xl md:text-3xl font-medium">
                Hero Visual Placeholder
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-4 md:gap-5 mb-6 md:mb-8 px-4"
          >
            <RainbowButton
              onClick={() => {
                if (window.fbq) {
                  window.fbq('track', 'Lead', {
                    content_name: 'Main Hero CTA Click',
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
        </div>
      </div>
    </BeamsBackground>
  );
}
