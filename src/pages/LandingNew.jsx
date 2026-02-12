import React from "react";
import HeroNew from "../components/landing/HeroNew";
import WhyChooseUs from "../components/landing/WhyChooseUs";
import ProcessSimple from "../components/landing/ProcessSimple";
import PortfolioShowcase from "../components/landing/PortfolioShowcase";
import QuizContact from "../components/landing/QuizContact";

export default function LandingNew() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-black">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/90 border-b border-gray-800">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 py-4">
          <img 
            src="/motta one.webp" 
            alt="Motta One" 
            className="h-10 md:h-12 w-auto"
          />
          
          <button
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2.5 bg-gold-500 text-white text-sm font-bold rounded-lg hover:bg-gold-600 transition-all duration-300"
          >
            Get Free Quote
          </button>
        </div>
      </header>

      <HeroNew />
      <WhyChooseUs />
      <ProcessSimple />
      <PortfolioShowcase />
      <QuizContact />

      {/* Minimal Footer */}
      <footer className="py-8 w-full border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <img 
              src="/motta one.webp" 
              alt="Motta One" 
              className="h-8 w-auto"
            />
            
            <p className="text-sm text-gray-500">
              © 2025 Motta One. Premium Stone Remodeling.
            </p>

            <div className="flex gap-4 text-sm text-gray-500">
              <span>(555) 123-4567</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
