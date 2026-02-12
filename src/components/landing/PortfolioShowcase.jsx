import React from "react";
import { motion } from "framer-motion";

const projects = [
  { 
    id: 1, 
    title: "Modern Kitchen", 
    image: "/drive-download-20251119T185717Z-1-001/modern kitch re.png" 
  },
  { 
    id: 2, 
    title: "Contemporary Redesign", 
    image: "/drive-download-20251119T185717Z-1-001/modern redesign.JPG" 
  },
  { 
    id: 3, 
    title: "Elegant Kitchen", 
    image: "/drive-download-20251119T185717Z-1-001/IMG_1173.jpg" 
  },
  { 
    id: 4, 
    title: "Custom Stone Feature", 
    image: "/drive-download-20251119T185717Z-1-001/IMG_2835.JPG" 
  },
  { 
    id: 5, 
    title: "Stone Accent Wall", 
    image: "/drive-download-20251119T185717Z-1-001/accetnt wall.png" 
  },
  { 
    id: 6, 
    title: "Premium Installation", 
    image: "/drive-download-20251119T185717Z-1-001/f8d9b399-67c8-4f36-b656-1234139af034.JPG" 
  },
];

export default function PortfolioShowcase() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transforming spaces with precision and artistry
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Gold accent corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-400 mb-6">
            Ready to see what we can create for you?
          </p>
          <button
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-5 bg-white text-black text-lg font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Get Your Free Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
