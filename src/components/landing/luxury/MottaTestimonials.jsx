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

export default function MottaTestimonials() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="h-px w-16 bg-[var(--luxury-gray-300)] mx-auto mb-8" aria-hidden />
          <h2 className="font-luxury-heading font-light text-3xl sm:text-4xl text-[var(--luxury-black)] tracking-tight">
            What Homeowners Say
          </h2>
          <p className="font-luxury-body font-light text-[var(--luxury-gray-600)] mt-4">
            Trusted by families across South Florida.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {TESTIMONIALS.map((t, i) => (
            <blockquote key={i} className="text-center">
              <div className="flex justify-center mb-6">
                <img
                  src={t.image}
                  alt=""
                  className="w-20 h-20 rounded-full object-cover border-2 border-[var(--luxury-gray-200)] transition-transform duration-500 ease-out will-change-transform group-hover:scale-105"
                />
              </div>
              <p className="font-luxury-body font-light text-[var(--luxury-gray-700)] italic leading-relaxed">
                "{t.quote}"
              </p>
              <footer className="mt-6">
                <p className="font-luxury-body font-medium text-sm text-[var(--luxury-black)]">
                  {t.name}
                </p>
                <p className="font-luxury-body text-xs text-[var(--luxury-gray-500)] mt-0.5">
                  {t.location}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
