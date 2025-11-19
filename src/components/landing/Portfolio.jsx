import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Kitchens", "Bathrooms", "Outdoor", "Custom"];

const projects = [
  { id: 1, category: "Kitchens", title: "Modern Kitchen Remodel", description: "Marble countertops & backsplash", image: "/drive-download-20251119T185717Z-1-001/81141859-57bb-4dc3-a7f4-df52821b984f.JPG" },
  { id: 2, category: "Bathrooms", title: "Luxury Bathroom Suite", description: "Granite vanity & shower walls", image: "/drive-download-20251119T185717Z-1-001/b9d31734-1fda-4f3f-a4ad-f7b8f3e4f6eb.JPG" },
  { id: 3, category: "Kitchens", title: "Contemporary Kitchen", description: "Quartz island & counters", image: "/drive-download-20251119T185717Z-1-001/IMG_1173.jpg" },
  { id: 4, category: "Custom", title: "Statement Fireplace", description: "Natural stone feature wall", image: "/drive-download-20251119T185717Z-1-001/IMG_2835.JPG" },
  { id: 5, category: "Bathrooms", title: "Spa Bathroom", description: "Marble floors & walls", image: "/drive-download-20251119T185717Z-1-001/IMG_6992.PNG" },
  { id: 6, category: "Custom", title: "Accent Wall", description: "Stacked stone feature", image: "/drive-download-20251119T185717Z-1-001/IMG_6994.PNG" },
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-50 border border-gold-200 rounded-full mb-4">
            <span className="text-sm font-medium text-gold-700">Recent Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            See What We Can Do For You
          </h2>
          <p className="text-lg text-gray-600">
            Real transformations, real results
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                
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
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700 font-semibold mb-4">
            Your transformation could be next! 👇
          </p>
          <button
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gold-500 text-white text-lg font-bold rounded-lg hover:bg-gold-600 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Start My Project Today →
          </button>
        </motion.div>
      </div>
    </section>
  );
}


