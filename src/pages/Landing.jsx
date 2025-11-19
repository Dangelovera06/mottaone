import React from "react";
import Hero from "../components/landing/Hero";
import Services from "../components/landing/Services";
import About from "../components/landing/About";
import Portfolio from "../components/landing/Portfolio";
import Process from "../components/landing/Process";
import Testimonials from "../components/landing/Testimonials";
import Contact from "../components/landing/Contact";

export default function Landing() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-white">
      {/* Elegant Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-black">
              MOTTA <span className="text-gold-500">ONE</span>
            </span>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-gold-500 transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-sm font-medium text-gray-700 hover:text-gold-500 transition-colors">
              Portfolio
            </a>
            <a href="#process" className="text-sm font-medium text-gray-700 hover:text-gold-500 transition-colors">
              Process
            </a>
            <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-gold-500 transition-colors">
              Reviews
            </a>
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gold-500 transition-all duration-300 hover:scale-105"
          >
            Get Quote
          </button>
        </div>
      </header>

      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />

      {/* Footer */}
      <footer className="py-12 w-full border-t border-gray-200 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <span className="text-xl font-bold">
                  MOTTA <span className="text-gold-500">ONE</span>
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Transforming spaces with premium stone craftsmanship and expert remodeling services.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-gold-500">Quick Links</h3>
              <div className="space-y-2">
                <a href="#services" className="block text-sm text-gray-400 hover:text-white transition-colors">Services</a>
                <a href="#portfolio" className="block text-sm text-gray-400 hover:text-white transition-colors">Portfolio</a>
                <a href="#process" className="block text-sm text-gray-400 hover:text-white transition-colors">Our Process</a>
                <a href="#testimonials" className="block text-sm text-gray-400 hover:text-white transition-colors">Testimonials</a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-gold-500">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@mottaone.com</p>
                <p>Hours: Mon-Fri 8AM-6PM</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © 2025 Motta One. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
