import React from "react";

const BULLETS = [
  "Licensed fabrication specialists",
  "Precision digital templating",
  "Premium stone selection",
  "Professional installation team",
];

export default function MottaTrust() {
  return (
    <section className="bg-[var(--luxury-white)] py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <div className="h-px w-16 bg-[var(--luxury-gray-300)] mx-auto mb-12" aria-hidden />
        <p className="font-luxury-body font-light text-[var(--luxury-gray-700)] text-lg leading-relaxed">
          Motta One brings architectural precision and timeless materials to every project. 
          From selection to installation, we deliver stone surfaces that meet the highest standards of craftsmanship and durability.
        </p>
        <div className="h-px w-24 bg-[var(--luxury-gray-300)] mx-auto my-12" aria-hidden />
        <ul className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-[var(--luxury-gray-600)]">
          {BULLETS.map((item, i) => (
            <li key={i} className="font-luxury-body font-light text-sm flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-[var(--luxury-gray-500)]" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <div className="h-px w-16 bg-[var(--luxury-gray-300)] mx-auto mt-12" aria-hidden />
      </div>
    </section>
  );
}
