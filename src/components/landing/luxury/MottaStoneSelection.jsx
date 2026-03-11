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

export default function MottaStoneSelection() {
  return (
    <section className="bg-[var(--luxury-white)] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="h-px w-16 bg-[var(--luxury-gray-300)] mx-auto mb-8" aria-hidden />
          <h2 className="font-luxury-heading font-light text-3xl sm:text-4xl text-[var(--luxury-black)] tracking-tight">
            Materials We Offer
          </h2>
          <p className="font-luxury-body font-light text-[var(--luxury-gray-600)] mt-4 max-w-xl mx-auto">
            Premium stone options to match your style and performance needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--luxury-gray-200)]">
          {MATERIALS.map((m, i) => (
            <div
              key={i}
              className="bg-[var(--luxury-white)] p-8 border border-[var(--luxury-gray-200)] sm:border-0"
            >
              <h3 className="font-luxury-heading font-light text-xl text-[var(--luxury-black)]">
                {m.name}
              </h3>
              <div className="h-px w-8 bg-[var(--luxury-gray-400)] my-4" aria-hidden />
              <p className="font-luxury-body font-light text-sm text-[var(--luxury-gray-600)] leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
