import React from "react";
import { motion } from "framer-motion";

const projects = [
  { id: 1, category: "Kitchens", title: "Modern Kitchen Remodel", description: "Marble countertops & backsplash", image: "/drive-download-20251119T185717Z-1-001/modern kitch re.png" },
  { id: 2, category: "Kitchens", title: "Modern Redesign", description: "Complete kitchen transformation", image: "/drive-download-20251119T185717Z-1-001/modern redesign.JPG" },
  { id: 3, category: "Kitchens", title: "Contemporary Kitchen", description: "Quartz island & counters", image: "/drive-download-20251119T185717Z-1-001/IMG_1173.jpg" },
  { id: 4, category: "Custom", title: "Premium Stone Feature", description: "Natural stone installation", image: "/drive-download-20251119T185717Z-1-001/IMG_2835.JPG" },
  { id: 5, category: "Custom", title: "Accent Wall", description: "Stacked stone feature", image: "/drive-download-20251119T185717Z-1-001/accetnt wall.png" },
  { id: 6, category: "Custom", title: "Outdoor Stone Work", description: "Premium outdoor installation", image: "/drive-download-20251119T185717Z-1-001/f8d9b399-67c8-4f36-b656-1234139af034.JPG" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Subtle Background Gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gold-500/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gray-900 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/20 border border-gold-500 rounded-full mb-4">
            <span className="text-sm font-medium text-gold-400">Recent Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See What We Can Do For You
          </h2>
          <p className="text-lg text-gray-400">
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
          <p className="text-lg text-white font-semibold mb-4">
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


