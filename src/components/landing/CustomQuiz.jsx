import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomQuiz({ onClose }) {
  const [currentStep, setCurrentStep] = useState(1);

  // Track quiz start on mount
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Quiz Started',
        content_category: 'Quote Form'
      });
    }
  }, []);
  const [formData, setFormData] = useState({
    location: "",
    projectType: "",
    timeline: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    additionalInfo: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const totalSteps = 5;

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      
      // Track step completion
      if (window.fbq) {
        window.fbq('track', 'CustomizeProduct', {
          content_name: `Quiz Step ${currentStep + 1}`,
          content_category: 'Quote Form',
          step: currentStep + 1
        });
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError("");

    try {
      // Split name into first and last
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      // Try multiple field naming conventions that GHL might expect
      const webhookData = {
        // Name variations
        name: formData.name,
        full_name: formData.name,
        fullName: formData.name,
        firstName: firstName,
        lastName: lastName,
        first_name: firstName,
        last_name: lastName,
        
        // Contact info
        email: formData.email,
        phone: formData.phone,
        
        // Custom fields
        location: formData.location,
        projectType: formData.projectType,
        project_type: formData.projectType,
        timeline: formData.timeline,
        budget: formData.budget,
        notes: formData.additionalInfo,
        additionalInfo: formData.additionalInfo,
        additional_info: formData.additionalInfo,
        
        // Source tracking
        source: "Motta One Website Quiz",
        
        // Additional fields that might help
        tags: ["Website Lead", "Quiz"],
        type: "lead"
      };

      console.log('Sending to webhook:', webhookData);

      const response = await fetch('https://services.leadconnectorhq.com/hooks/MB62qwBFPF92bXH86fGG/webhook-trigger/1e331a57-dac0-4cee-a7d5-6b9c87d80dae', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData)
      });

      const result = await response.json();
      console.log('Webhook response:', result);
      console.log('Response status:', response.status);

      if (response.ok || response.status === 200) {
        // Track successful lead submission to Meta
        if (window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: 'Quote Request Submitted',
            content_category: 'Quote Form',
            value: 0,
            currency: 'USD',
            location: formData.location,
            project_type: formData.projectType,
            budget: formData.budget
          });
        }
        
        setIsSuccess(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.location !== "";
      case 2:
        return formData.projectType !== "";
      case 3:
        return formData.timeline !== "";
      case 4:
        return formData.budget !== "";
      case 5:
        return formData.name && formData.email && formData.phone;
      default:
        return false;
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full h-full flex flex-col">
        {/* Logo Header */}
        <div className="flex-shrink-0 px-6 pt-6 pb-4 border-b border-gray-200">
          <img 
            src="/motta one.webp" 
            alt="Motta One" 
            className="h-10 md:h-12 w-auto mx-auto"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-1 flex flex-col items-center justify-center text-center px-8"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-black mb-4">Thank You!</h2>
          <p className="text-xl text-gray-600 mb-4 max-w-md">
            We've received your request and will contact you within 24 hours with a detailed quote.
          </p>
          
          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-black flex items-center justify-center text-white text-sm font-bold">
                JM
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-700 flex items-center justify-center text-white text-sm font-bold">
                SK
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-black flex items-center justify-center text-white text-sm font-bold">
                RM
              </div>
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-black">Join 1000+ Happy Clients</div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="px-8 py-4 bg-black text-white text-lg font-semibold hover:bg-gray-900 transition-colors"
          >
            Close
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Logo and Branding Header */}
        <div className="flex-shrink-0 px-6 pt-6 pb-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <img 
              src="/motta one.webp" 
              alt="Motta One" 
              className="h-10 md:h-12 w-auto"
            />
            
            {/* Social Proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-xs font-bold">
                  JM
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white text-xs font-bold">
                  SK
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white text-xs font-bold">
                  RM
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xs font-bold text-black">1000+ Happy Clients</div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex-shrink-0 px-6 pt-4 pb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-600">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-500">{Math.round((currentStep / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200">
            <motion.div
              className="h-full bg-gradient-to-r from-red-600 to-red-700"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

      {/* Question Content */}
      <div className="flex-1 px-6 py-8 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  Are you located in South Florida?
                </h2>
                <p className="text-gray-600 mb-8">We currently serve customers in South Florida only</p>
                <div className="grid grid-cols-1 gap-4 max-w-xl">
                  {[
                    { label: "Yes, I'm in South Florida", value: "yes" },
                    { label: "No, I'm outside South Florida", value: "no" }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateField("location", option.value)}
                      className={`p-6 text-left border-2 transition-all ${
                        formData.location === option.value
                          ? "border-red-600 bg-red-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span className="text-lg font-semibold text-black">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  What type of project are you interested in?
                </h2>
                <p className="text-gray-600 mb-8">Select the option that best describes your project</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Kitchen Countertops",
                    "Bathroom Vanity",
                    "Full Kitchen Remodel",
                    "Full Bathroom Remodel",
                    "Outdoor Kitchen",
                    "Fireplace Surround",
                    "Other"
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateField("projectType", option)}
                      className={`p-6 text-left border-2 transition-all ${
                        formData.projectType === option
                          ? "border-red-600 bg-red-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span className="text-lg font-semibold text-black">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  When would you like to start?
                </h2>
                <p className="text-gray-600 mb-8">Your ideal project timeline</p>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "As soon as possible",
                    "Within 1 month",
                    "1-3 months",
                    "3-6 months",
                    "Just exploring options"
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateField("timeline", option)}
                      className={`p-6 text-left border-2 transition-all ${
                        formData.timeline === option
                          ? "border-red-600 bg-red-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span className="text-lg font-semibold text-black">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  What's your budget range?
                </h2>
                <p className="text-gray-600 mb-8">This helps us recommend the best materials for your project</p>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "$3,000 - $5,000",
                    "$5,000 - $10,000",
                    "$10,000 - $20,000",
                    "$20,000+",
                    "Not sure yet"
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => updateField("budget", option)}
                      className={`p-6 text-left border-2 transition-all ${
                        formData.budget === option
                          ? "border-red-600 bg-red-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span className="text-lg font-semibold text-black">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  Almost done! How can we reach you?
                </h2>
                <p className="text-gray-600 mb-8">We'll send your personalized quote within 24 hours</p>
                <div className="space-y-6 max-w-xl">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="w-full px-4 py-4 border-2 border-gray-200 focus:border-red-600 focus:outline-none text-lg"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full px-4 py-4 border-2 border-gray-200 focus:border-red-600 focus:outline-none text-lg"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full px-4 py-4 border-2 border-gray-200 focus:border-red-600 focus:outline-none text-lg"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      value={formData.additionalInfo}
                      onChange={(e) => updateField("additionalInfo", e.target.value)}
                      rows={4}
                      className="w-full px-4 py-4 border-2 border-gray-200 focus:border-black focus:outline-none text-lg resize-none"
                      placeholder="Any specific requirements or questions?"
                    />
                  </div>
                </div>
                {error && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700">
                    {error}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex-shrink-0 px-6 py-6 border-t border-gray-200 flex justify-between items-center">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`px-6 py-3 text-lg font-semibold transition-colors ${
            currentStep === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-black hover:bg-gray-100"
          }`}
        >
          Back
        </button>

        {currentStep < totalSteps ? (
          <button
            onClick={nextStep}
            disabled={!canProceed()}
            className={`px-8 py-3 text-lg font-semibold transition-all ${
              canProceed()
                ? "bg-black text-white hover:bg-gray-900"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!canProceed() || isSubmitting}
            className={`px-8 py-3 text-lg font-semibold transition-all ${
              canProceed() && !isSubmitting
                ? "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Get My Free Quote"}
          </button>
        )}
      </div>
    </div>
  );
}
