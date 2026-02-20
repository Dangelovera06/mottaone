import React from "react";
import { motion } from "framer-motion";

const projects = [
  { 
    id: 1, 
    title: "Modern Kitchen", 
    category: "Kitchen",
    image: "/drive-download-20251119T185717Z-1-001/modern kitch re.png" 
  },
  { 
    id: 2, 
    title: "Contemporary Redesign", 
    category: "Kitchen",
    image: "/drive-download-20251119T185717Z-1-001/modern redesign.JPG" 
  },
  { 
    id: 3, 
    title: "Elegant Kitchen", 
    category: "Kitchen",
    image: "/drive-download-20251119T185717Z-1-001/IMG_1173.jpg" 
  },
  { 
    id: 4, 
    title: "Custom Feature", 
    category: "Custom",
    image: "/drive-download-20251119T185717Z-1-001/IMG_2835.JPG" 
  },
  { 
    id: 5, 
    title: "Accent Wall", 
    category: "Custom",
    image: "/drive-download-20251119T185717Z-1-001/accetnt wall.png" 
  },
  { 
    id: 6, 
    title: "Premium Work", 
    category: "Custom",
    image: "/drive-download-20251119T185717Z-1-001/f8d9b399-67c8-4f36-b656-1234139af034.JPG" 
  },
];

export default function PortfolioShowcase({ openQuiz }) {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-black mb-8"></div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
            Featured Work
          </h2>
          <p className="text-2xl text-gray-600 max-w-2xl">
            Every project tells a story of transformation
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">View Project</span>
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-500 uppercase tracking-wider">{project.category}</p>
                <h3 className="text-xl font-bold text-black">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <button
            onClick={openQuiz}
            className="px-10 py-5 bg-black text-white text-lg font-semibold rounded-none hover:bg-gray-900 transition-all duration-300"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
