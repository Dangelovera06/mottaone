import React from "react";

export default function MottaCTASection({ onConsultation }) {
  return (
    <section className="bg-[var(--luxury-black)] py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <div className="h-px w-16 bg-white/30 mx-auto mb-10" aria-hidden />
        <h2 className="font-luxury-heading font-light text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
          Upgrade Your Kitchen With Precision Crafted Stone
        </h2>
        <p className="font-luxury-body font-light text-white/70 mt-6 text-lg">
          Schedule a free consultation and let us help you choose the perfect surface for your home.
        </p>
        <div className="mt-12">
          <button
            onClick={onConsultation}
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-[var(--luxury-black)] font-luxury-body font-medium text-sm tracking-wide hover:bg-[var(--luxury-gray-100)] transition-colors"
          >
            Book Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
