import React from "react";

const MATERIALS = [
  {
    name: "Quartz",
    description:
      "Engineered for durability and consistency. Low maintenance, wide range of colors and patterns.",
  },
  {
    name: "Granite",
    description:
      "Natural stone with unique veining and depth. Heat and scratch resistant for lasting beauty.",
  },
  {
    name: "Marble",
    description:
      "Timeless elegance and classic veining. Ideal for those who prioritize aesthetics and are committed to care.",
  },
  {
    name: "Quartzite",
    description:
      "Natural stone with the look of marble and the toughness of granite. Premium choice for high-traffic areas.",
  },
];

export default function MottaStoneSelection({ onConsultation }) {
  return (
    <section className="bg-[var(--luxury-black)] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="h-px w-16 bg-[var(--luxury-gray-700)] mx-auto mb-8" aria-hidden />
          <h2 className="font-luxury-heading font-light text-3xl sm:text-4xl text-[var(--luxury-white)] tracking-tight">
            Materials We Offer
          </h2>
          <p className="font-luxury-body font-light text-[var(--luxury-gray-200)] mt-4 max-w-xl mx-auto text-lg">
            Premium stone options to match your style and performance needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--luxury-gray-800)]">
          {MATERIALS.map((m, i) => (
            <div
              key={i}
              className="bg-[var(--luxury-black)] p-8 border border-[var(--luxury-gray-800)] sm:border-0"
            >
              <h3 className="font-luxury-heading font-light text-xl text-[var(--luxury-white)]">
                {m.name}
              </h3>
              <div className="h-px w-8 bg-[var(--luxury-gray-700)] my-4" aria-hidden />
              <p className="font-luxury-body font-light text-base text-[var(--luxury-gray-200)] leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <button
            onClick={onConsultation}
            className="font-luxury-body text-sm font-medium text-[var(--luxury-white)] border border-[var(--luxury-white)] px-8 py-3 hover:bg-[var(--luxury-white)] hover:text-[var(--luxury-black)] transition-colors"
          >
            Get a Free Countertop Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
