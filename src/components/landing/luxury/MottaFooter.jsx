import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const INSTAGRAM_PREVIEW = [
  "/ELIAS WEB/Work Image elias 1.png",
  "/ELIAS WEB/Elias Work 3.png",
  "/ELIAS WEB/Elias work 4.png",
  "/ELIAS WEB/Elias Work 5.png",
  "/ELIAS WEB/elias out work 2.png",
  "/ELIAS WEB/ELIAS work 2.png",
];

const SERVICE_AREAS = [
  "Palm Beach",
  "Miami",
  "Fort Lauderdale",
  "Boca Raton",
  "West Palm Beach",
  "Delray Beach",
  "South Florida",
];

export default function MottaFooter() {
  return (
    <footer className="bg-[var(--luxury-white)] border-t border-[var(--luxury-gray-200)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <p className="font-luxury-heading font-light text-2xl text-[var(--luxury-black)]">
              Motta One
            </p>
            <p className="font-luxury-body text-sm text-[var(--luxury-gray-600)] mt-2">
              Precision stone fabrication and installation.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="font-luxury-body text-xs font-medium text-[var(--luxury-gray-500)] tracking-wider uppercase mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 font-luxury-body text-sm text-[var(--luxury-gray-700)]">
                <Phone className="w-4 h-4 text-[var(--luxury-gray-500)]" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-3 font-luxury-body text-sm text-[var(--luxury-gray-700)]">
                <Mail className="w-4 h-4 text-[var(--luxury-gray-500)]" />
                hello@mottaone.com
              </li>
              <li className="flex items-start gap-3 font-luxury-body text-sm text-[var(--luxury-gray-700)]">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[var(--luxury-gray-500)]" />
                Serving South Florida
              </li>
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <p className="font-luxury-body text-xs font-medium text-[var(--luxury-gray-500)] tracking-wider uppercase mb-4">
              Service Areas
            </p>
            <p className="font-luxury-body text-sm text-[var(--luxury-gray-600)] leading-relaxed">
              {SERVICE_AREAS.join(" · ")}
            </p>
          </div>

          {/* Instagram + Reviews */}
          <div>
            <p className="font-luxury-body text-xs font-medium text-[var(--luxury-gray-500)] tracking-wider uppercase mb-4">
              Follow & Reviews
            </p>
            <div className="grid grid-cols-3 gap-1 mb-6">
              {INSTAGRAM_PREVIEW.map((src, i) => (
                <a
                  key={i}
                  href="#"
                  className="aspect-square overflow-hidden bg-[var(--luxury-gray-200)] block"
                  aria-label="Instagram"
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                  />
                </a>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-2 border border-[var(--luxury-gray-300)]">
              <span className="font-luxury-body text-sm text-[var(--luxury-gray-700)]">
                Google Reviews
              </span>
              <span className="font-luxury-heading font-light text-[var(--luxury-black)]">
                4.9 ★
              </span>
            </div>
          </div>
        </div>

        <div className="h-px bg-[var(--luxury-gray-200)] mt-12 mb-8" aria-hidden />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-luxury-body text-xs text-[var(--luxury-gray-500)]">
            © {new Date().getFullYear()} Motta One. All rights reserved.
          </p>
          <p className="font-luxury-body text-xs text-[var(--luxury-gray-500)]">
            Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
}
