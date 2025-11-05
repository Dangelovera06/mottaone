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
                      <h1 className="text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight px-2">
                        From Content Creator to <br className="hidden sm:inline" />
                        <span className="relative inline-block overflow-hidden bg-gradient-to-b from-[#0080ff] via-[#006eff] to-[#0050cc] bg-clip-text text-transparent">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent bg-clip-text text-transparent" style={{ left: '30%', width: '40%' }}></span>
                          <span className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent bg-clip-text text-transparent"></span>
                          Six-Figure Business Owner
                        </span> in 30 Days
                      </h1>

                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light px-2">
                        <span className="relative inline-block overflow-hidden bg-gradient-to-b from-[#0080ff] via-[#006eff] to-[#0050cc] bg-clip-text text-transparent">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent bg-clip-text text-transparent" style={{ left: '30%', width: '40%' }}></span>
                          <span className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent bg-clip-text text-transparent"></span>
                          (without needing tech skills or marketing experience)
                        </span>
                      </p>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white pt-2 px-2">
              If you don't make money, we don't get paid — simple as that
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 mb-8 md:mb-10 max-w-5xl mx-auto w-full px-4"
          >
            <div className="relative overflow-hidden border-2 border-[#006eff]/30 shadow-2xl shadow-[#006eff]/20">
              <wistia-player media-id="w4p6cr6l8l" aspect="1.7777777777777777" style={{ transform: 'scale(1.02)' }}></wistia-player>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-4 md:gap-5 mb-12 md:mb-16 px-4"
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
              className="text-base sm:text-lg font-bold w-full sm:w-auto"
              style={{ maxWidth: '397.2px', height: '62.4px', minWidth: '280px' }}
            >
              Apply Today
            </RainbowButton>
          </motion.div>

          {/* Performance Image Section */}
          <div className="mt-12 md:mt-16 mb-6 md:mb-8 max-w-5xl mx-auto w-full px-4">
            <img 
              src="/Momoento Perfom.png" 
              alt="Performance Results" 
              className="w-full h-auto rounded-2xl shadow-[0_0_40px_rgba(0,110,255,0.5),0_0_80px_rgba(0,110,255,0.3),0_0_120px_rgba(0,110,255,0.2)]"
            />
          </div>
        </div>
      </div>
    </BeamsBackground>
  );
}
