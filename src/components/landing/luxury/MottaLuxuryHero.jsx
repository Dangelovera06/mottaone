import React from "react";
import { Star, Shield } from "lucide-react";

const HERO_IMAGE = "/ELIAS WEB/HERO IMAGE.png";

export default function MottaLuxuryHero({ onConsultation, onProjects }) {
  return (
    <section className="relative min-h-[90vh] flex flex-col">
      {/* Cinematic full-width image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Luxury stone countertop with dramatic lighting"
          className="w-full h-full object-cover object-center scale-105 md:scale-100 animate-[hero-pan_18s_ease-in-out_infinite_alternate]"
        />
        <div
          className="absolute inset-0 bg-black/45"
          aria-hidden
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-20 pt-32 pb-24">
        <div className="max-w-3xl animate-[fade-up_700ms_ease-out]">
          <h1 className="font-luxury-heading font-light text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-tight text-white mb-6">
            Crafted Stone Surfaces That Define Your Kitchen
          </h1>
          <p className="font-luxury-body font-light text-lg sm:text-xl text-white/90 text-balance max-w-xl mb-10">
            Precision fabricated quartz, granite, and marble countertops designed to elevate your space.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onConsultation}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--luxury-black)] font-luxury-body font-medium text-sm tracking-wide hover:bg-[var(--luxury-gray-100)] transition-colors"
            >
              Get a Free Countertop Consultation
            </button>
            <button
              onClick={onProjects}
              className="inline-flex items-center justify-center px-8 py-4 border border-white/80 text-white font-luxury-body font-light text-sm tracking-wide hover:bg-white/10 transition-colors"
            >
              View Recent Projects
            </button>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="relative z-10 border-t border-white/20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-white/90">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-luxury-body text-sm font-light">5-Star Rated</span>
            </div>
            <div className="h-4 w-px bg-white/30" aria-hidden />
            <div className="font-luxury-body text-sm font-light">
              <span className="font-medium text-white">2,400+</span> Kitchens Installed
            </div>
            <div className="h-4 w-px bg-white/30" aria-hidden />
            <div className="font-luxury-body text-sm font-light">
              <span className="font-medium text-white">18</span> Years in Business
            </div>
            <div className="h-4 w-px bg-white/30" aria-hidden />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-white/90" />
              <span className="font-luxury-body text-sm font-light">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
