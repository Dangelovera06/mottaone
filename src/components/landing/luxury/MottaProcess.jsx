import React from "react";
import {
  MessageCircle,
  Layers,
  Ruler,
  Box,
  Truck,
} from "lucide-react";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Consultation",
    description: "We discuss your vision, layout, and budget to recommend the best stone and edge profile.",
  },
  {
    icon: Layers,
    title: "Stone Selection",
    description: "Choose from our premium inventory of quartz, granite, marble, and quartzite at our showroom.",
  },
  {
    icon: Ruler,
    title: "Digital Measurement",
    description: "Precision digital templating ensures a perfect fit for your space.",
  },
  {
    icon: Box,
    title: "Precision Fabrication",
    description: "Our licensed specialists fabricate your countertops to exact specifications.",
  },
  {
    icon: Truck,
    title: "Professional Installation",
    description: "Our experienced team installs with care and leaves your kitchen ready to use.",
  },
];

export default function MottaProcess() {
  return (
    <section className="bg-[var(--luxury-gray-100)] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <div className="h-px w-16 bg-[var(--luxury-gray-400)] mx-auto mb-8" aria-hidden />
          <h2 className="font-luxury-heading font-light text-3xl sm:text-4xl text-[var(--luxury-black)] tracking-tight">
            The Process
          </h2>
          <p className="font-luxury-body font-light text-[var(--luxury-gray-600)] mt-4">
            From first visit to final install, we keep every detail precise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative text-center">
                {i < STEPS.length - 1 && (
                  <div
                    className="hidden md:block absolute top-6 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-[var(--luxury-gray-300)]"
                    aria-hidden
                  />
                )}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[var(--luxury-gray-400)] text-[var(--luxury-gray-600)] mb-6">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <p className="font-luxury-body text-xs font-medium text-[var(--luxury-gray-500)] tracking-wider">
                  Step {i + 1}
                </p>
                <h3 className="font-luxury-heading font-light text-xl text-[var(--luxury-black)] mt-2">
                  {step.title}
                </h3>
                <p className="font-luxury-body font-light text-sm text-[var(--luxury-gray-600)] mt-3 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
