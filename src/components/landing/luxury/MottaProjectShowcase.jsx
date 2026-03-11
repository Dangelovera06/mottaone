import React from "react";

const PROJECTS = [
  {
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    material: "Calacatta Quartz",
    location: "Palm Beach",
    style: "Modern Kitchen",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    material: "Statuario Marble",
    location: "Miami",
    style: "Transitional",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    material: "Black Galaxy Granite",
    location: "Fort Lauderdale",
    style: "Contemporary",
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    material: "Quartzite",
    location: "Boca Raton",
    style: "Luxury Modern",
  },
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    material: "White Carrara Marble",
    location: "West Palm Beach",
    style: "Classic",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    material: "Concrete Look Quartz",
    location: "Delray Beach",
    style: "Industrial Modern",
  },
];

export default function MottaProjectShowcase() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="h-px w-16 bg-[var(--luxury-gray-300)] mx-auto mb-8" aria-hidden />
          <h2 className="font-luxury-heading font-light text-3xl sm:text-4xl text-[var(--luxury-black)] tracking-tight">
            Recent Projects
          </h2>
          <p className="font-luxury-body font-light text-[var(--luxury-gray-600)] mt-4 max-w-xl mx-auto">
            Architectural kitchens we’ve crafted across South Florida.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--luxury-gray-200)]">
          {PROJECTS.map((project, i) => (
            <article
              key={i}
              className="group bg-white overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[var(--luxury-gray-100)]">
                <img
                  src={project.image}
                  alt={`${project.style} in ${project.location}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 border-t border-[var(--luxury-gray-200)]">
                <p className="font-luxury-body text-xs font-medium text-[var(--luxury-gray-500)] tracking-wider uppercase">
                  {project.material}
                </p>
                <p className="font-luxury-heading font-light text-lg text-[var(--luxury-black)] mt-1">
                  {project.location} {project.style}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
