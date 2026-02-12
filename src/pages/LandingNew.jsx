import React, { useState } from "react";
import HeroNew from "../components/landing/HeroNew";
import WhyChooseUs from "../components/landing/WhyChooseUs";
import CTAGlow from "../components/landing/CTAGlow";
import PortfolioShowcase from "../components/landing/PortfolioShowcase";
import ProcessSimple from "../components/landing/ProcessSimple";
import QuizModal from "../components/landing/QuizModal";

export default function LandingNew() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const openQuiz = () => {
    setIsQuizOpen(true);
    
    // Track CTA click
    if (window.fbq) {
      window.fbq('track', 'Contact', {
        content_name: 'Get Quote Button Clicked',
        content_category: 'CTA'
      });
    }
  };
  const closeQuiz = () => setIsQuizOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-white">
      {/* Quiz Modal */}
      <QuizModal isOpen={isQuizOpen} onClose={closeQuiz} />
      {/* Minimal Header */}
      <header className={`fixed top-0 left-0 right-0 bg-white border-b border-gray-200 transition-all duration-300 ${isQuizOpen ? 'z-10' : 'z-50'}`}>
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 py-4">
          <img 
            src="/motta one.webp" 
            alt="Motta One" 
            className="h-10 md:h-12 w-auto"
          />
          
          <button
            onClick={openQuiz}
            className="px-6 py-3 bg-black text-white text-sm font-semibold rounded-none hover:bg-gray-900 transition-colors duration-300"
          >
            Get Quote
          </button>
        </div>
      </header>

      <HeroNew openQuiz={openQuiz} />
      <WhyChooseUs />
      <CTAGlow variant={1} openQuiz={openQuiz} />
      <PortfolioShowcase openQuiz={openQuiz} />
      <CTAGlow variant={2} openQuiz={openQuiz} />
      <ProcessSimple />
      <CTAGlow variant={3} openQuiz={openQuiz} />

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <img 
              src="/motta one.webp" 
              alt="Motta One" 
              className="h-8 w-auto"
            />
            
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600">
                © 2025 Motta One. Premium Stone Remodeling Specialists.
              </p>
            </div>

            <div className="text-sm text-gray-600">
              (555) 123-4567
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
