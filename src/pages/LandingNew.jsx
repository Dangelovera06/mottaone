import React, { useState, useRef } from "react";
import QuizModal from "../components/landing/QuizModal";
import {
  MottaLuxuryHero,
  MottaTrust,
  MottaProjectShowcase,
  MottaProcess,
  MottaTestimonials,
  MottaStoneSelection,
  MottaCTASection,
  MottaFooter,
} from "../components/landing/luxury";

export default function LandingNew() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const projectsRef = useRef(null);

  const openQuiz = () => {
    setIsQuizOpen(true);
    if (window.fbq) {
      window.fbq("track", "Contact", {
        content_name: "Get Quote Button Clicked",
        content_category: "CTA",
      });
    }
  };
  const closeQuiz = () => setIsQuizOpen(false);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-[var(--luxury-black)] text-[var(--luxury-white)]">
      <QuizModal isOpen={isQuizOpen} onClose={closeQuiz} />

      {/* Minimal luxury header – black/white */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-[var(--luxury-gray-800)] bg-[var(--luxury-black)]/95 backdrop-blur-sm transition-all duration-300 ${isQuizOpen ? "z-10" : "z-50"}`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 sm:px-8 py-4">
          <div className="flex items-center gap-3">
            <img src="/motta-one-logo.png" alt="Motta One" className="h-8 w-auto" />
            <span className="font-luxury-heading font-light text-xl text-[var(--luxury-white)] tracking-tight">
              Motta One
            </span>
          </div>
          <button
            onClick={openQuiz}
            className="font-luxury-body text-sm font-medium text-[var(--luxury-white)] border border-[var(--luxury-white)] px-5 py-2.5 hover:bg-[var(--luxury-white)] hover:text-[var(--luxury-black)] transition-colors"
          >
            Get a Consultation
          </button>
        </div>
      </header>

      <MottaLuxuryHero onConsultation={openQuiz} onProjects={scrollToProjects} />
      <MottaTrust onConsultation={openQuiz} />
      <div ref={projectsRef}>
        <MottaProjectShowcase />
      </div>
      <MottaProcess />
      <MottaTestimonials onConsultation={openQuiz} />
      <MottaStoneSelection onConsultation={openQuiz} />
      <MottaCTASection onConsultation={openQuiz} />
      <MottaFooter />
    </div>
  );
}
