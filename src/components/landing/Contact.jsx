import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll contact you shortly.");
    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Elegant Gradient Accents */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-gold-500/10 to-transparent"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-gold-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-50 border border-gold-200 rounded-full mb-4">
            <span className="text-sm font-bold text-gold-700">📞 Get Your Free Quote</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Let's Get Started
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            Fill out the form below and we'll contact you within <span className="text-gold-600 font-bold">24 hours</span>
          </p>
          <p className="text-sm text-gray-500">
            ✓ No obligation • ✓ Free consultation • ✓ Detailed quote
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 relative overflow-hidden"
          >
            {/* Subtle gradient in form */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-gold-500/5 to-transparent pointer-events-none"></div>
            
            <div className="mb-6 p-4 bg-gradient-to-r from-gold-50 to-gold-50/50 rounded-lg border border-gold-200 relative">
              <p className="text-sm font-semibold text-gold-700 text-center">
                🎉 Special Offer: Free material upgrade on projects booked this month!
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a project type</option>
                  <option value="kitchen">Kitchen Remodeling</option>
                  <option value="bathroom">Bathroom Renovation</option>
                  <option value="outdoor">Outdoor Spaces</option>
                  <option value="custom">Custom Stonework</option>
                  <option value="restoration">Restoration & Repair</option>
                  <option value="consultation">Design Consultation</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-5 bg-gold-500 text-white text-lg font-bold rounded-lg hover:bg-gold-600 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Get My Free Quote Now →
              </button>
              
              <p className="text-xs text-center text-gray-500">
                By submitting, you agree to receive communication from Motta One. We respect your privacy.
              </p>
            </form>
          </motion.div>

          {/* Contact Info - Centered Below Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Phone */}
              <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-black mb-1">Call Us</h3>
                <p className="text-gray-600">(555) 123-4567</p>
                <p className="text-sm text-gray-500 mt-1">Mon-Fri 8AM-6PM</p>
              </div>

              {/* Email */}
              <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-black mb-1">Email Us</h3>
                <p className="text-gray-600">info@mottaone.com</p>
                <p className="text-sm text-gray-500 mt-1">Response in 24hrs</p>
              </div>

              {/* Location */}
              <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-black mb-1">Visit Us</h3>
                <p className="text-gray-600">123 Stone Avenue</p>
                <p className="text-gray-600">Your City, ST 12345</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


