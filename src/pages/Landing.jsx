import React from "react";
import Hero from "../components/landing/Hero";
import Benefits from "../components/landing/Benefits";
import SocialProof from "../components/landing/SocialProof";
import Portfolio from "../components/landing/Portfolio";
import CTASection from "../components/landing/CTASection";
import Contact from "../components/landing/Contact";
import FAQSection from "../components/landing/FAQSection";

export default function Landing() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-white">
      {/* Sticky CTA Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/95 border-b border-gray-200 shadow-sm">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-black">
              MOTTA <span className="text-gold-500">ONE</span>
            </span>
          </div>

          {/* Urgency Badge - Desktop */}
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-red-700">Limited Slots This Month</span>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2.5 bg-gold-500 text-white text-sm font-bold rounded-lg hover:bg-gold-600 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Free Quote
          </button>
        </div>
      </header>

      <Hero />
      <Benefits />
      <SocialProof />
      <Portfolio />
      <CTASection />
      <Contact />
      <FAQSection />

      {/* Floating CTA Button - Mobile */}
      <button
        onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }}
        className="md:hidden fixed bottom-6 right-6 z-50 px-6 py-4 bg-gold-500 text-white text-base font-bold rounded-full hover:bg-gold-600 transition-all duration-300 hover:scale-110 shadow-2xl animate-pulse"
      >
        Get Quote →
      </button>

      {/* Minimal Footer */}
      <footer className="py-8 w-full border-t border-gray-200 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-lg font-bold">
                MOTTA <span className="text-gold-500">ONE</span>
              </span>
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © 2025 Motta One. Premium Stone Remodeling Specialists.
              </p>
            </div>

            <div className="flex gap-4 text-sm text-gray-400">
              <span>(555) 123-4567</span>
              <span>•</span>
              <span>info@mottaone.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
