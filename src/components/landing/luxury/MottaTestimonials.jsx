import React from "react";

const TESTIMONIALS = [
  {
    quote:
      "The quality of the stone and the installation was flawless. The kitchen feels like a completely new home.",
    name: "Sarah M.",
    location: "Palm Beach",
    image: "/ELIAS WEB/Work Image elias 1.png",
  },
  {
    quote:
      "From the first consultation to the final install, Motta One was professional and precise. We couldn’t be happier.",
    name: "James & Linda K.",
    location: "Miami",
    image: "/ELIAS WEB/Elias Work 3.png",
  },
  {
    quote:
      "Our marble island is the centerpiece of the house. The team treated our home with real care.",
    name: "David R.",
    location: "Boca Raton",
    image: "/ELIAS WEB/Elias work 4.png",
  },
];

export default function MottaTestimonials({ onConsultation }) {
  return (
    <section className="bg-[var(--luxury-black)] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <div>
            <div className="h-px w-16 bg-[var(--luxury-gray-700)] mb-8" aria-hidden />
            <h2 className="font-luxury-heading font-light text-3xl sm:text-4xl text-[var(--luxury-white)] tracking-tight">
              What Homeowners Say
            </h2>
            <p className="font-luxury-body font-light text-[var(--luxury-gray-200)] mt-4 text-lg max-w-md">
              Real kitchens, real families, and projects delivered with architectural precision.
            </p>
          </div>
          <div className="md:text-right">
            <p className="font-luxury-body text-sm text-[var(--luxury-gray-400)] uppercase tracking-[0.2em] mb-3">
              Verified Reviews
            </p>
            <button
              onClick={onConsultation}
              className="font-luxury-body text-sm font-medium text-[var(--luxury-white)] border border-[var(--luxury-white)] px-6 py-3 hover:bg-[var(--luxury-white)] hover:text-[var(--luxury-black)] transition-colors"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={i}
              className="relative flex flex-col h-full bg-[var(--luxury-black)] border border-[var(--luxury-gray-800)] px-6 py-8 text-left"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={t.image}
                  alt=""
                  className="w-14 h-14 rounded-full object-cover border border-[var(--luxury-gray-700)]"
                />
                <div>
                  <p className="font-luxury-body font-medium text-sm text-[var(--luxury-white)]">
                    {t.name}
                  </p>
                  <p className="font-luxury-body text-xs text-[var(--luxury-gray-400)] mt-0.5">
                    {t.location}
                  </p>
                </div>
              </div>
              <p className="font-luxury-body font-light text-[var(--luxury-gray-100)] leading-relaxed text-base">
                "{t.quote}"
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
