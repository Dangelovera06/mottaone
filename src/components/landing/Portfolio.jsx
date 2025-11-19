import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Kitchens", "Bathrooms", "Outdoor", "Custom"];

const projects = [
  { id: 1, category: "Kitchens", title: "Modern Kitchen Remodel", description: "Marble countertops & backsplash" },
  { id: 2, category: "Bathrooms", title: "Luxury Bathroom Suite", description: "Granite vanity & shower walls" },
  { id: 3, category: "Outdoor", title: "Patio Paradise", description: "Stone outdoor kitchen" },
  { id: 4, category: "Kitchens", title: "Contemporary Kitchen", description: "Quartz island & counters" },
  { id: 5, category: "Custom", title: "Statement Fireplace", description: "Natural stone feature wall" },
  { id: 6, category: "Bathrooms", title: "Spa Bathroom", description: "Marble floors & walls" },
  { id: 7, category: "Outdoor", title: "Garden Oasis", description: "Stone pathways & seating" },
  { id: 8, category: "Custom", title: "Accent Wall", description: "Stacked stone feature" },
  { id: 9, category: "Kitchens", title: "Classic Kitchen", description: "Granite countertops" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-50 border border-gold-200 rounded-full mb-6">
            <span className="text-sm font-medium text-gold-700">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of stunning transformations
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-black text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                <div className="text-center space-y-3 p-6 z-10">
                  <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-500">Project Image</p>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Gold accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <div className="inline-block px-3 py-1 bg-gold-500 rounded-full text-xs font-medium mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Ready to start your transformation?</p>
          <button
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-black text-white text-base font-semibold rounded-lg hover:bg-gold-500 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Your Free Estimate
          </button>
        </motion.div>
      </div>
    </section>
  );
}


