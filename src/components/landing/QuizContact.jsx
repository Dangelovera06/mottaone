import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    id: 1,
    question: "What type of stone project do you need?",
    options: [
      { value: "countertops", label: "Countertops" },
      { value: "backsplash", label: "Backsplash" },
      { value: "full-remodel", label: "Full Kitchen/Bath Remodel" },
      { value: "outdoor", label: "Outdoor Kitchen/Patio" },
    ]
  },
  {
    id: 2,
    question: "What material are you interested in?",
    options: [
      { value: "granite", label: "Granite" },
      { value: "marble", label: "Marble" },
      { value: "quartz", label: "Quartz" },
      { value: "not-sure", label: "Not sure yet" },
    ]
  },
  {
    id: 3,
    question: "When are you looking to start the project?",
    options: [
      { value: "immediately", label: "Immediately" },
      { value: "1-2weeks", label: "Within 1-2 weeks" },
      { value: "1month", label: "Within a month" },
      { value: "planning", label: "Just getting quotes" },
    ]
  },
  {
    id: 4,
    question: "Do you already have measurements?",
    options: [
      { value: "yes", label: "Yes, I have measurements" },
      { value: "no", label: "No, I need help with that" },
      { value: "approximate", label: "I have approximate measurements" },
    ]
  },
];

export default function QuizContact() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isQuizComplete = currentStep >= questions.length;
  const progress = ((currentStep + 1) / (questions.length + 1)) * 100;

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
    setTimeout(() => {
      setCurrentStep(currentStep + 1);
    }, 300);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quiz Results:", { answers, formData });
    setIsSubmitted(true);
    // Handle form submission here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-gray-900 to-transparent"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-gold-500/20 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-12 bg-gray-900 rounded-2xl border border-gold-500"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-xl text-gray-300 mb-2">
              We'll contact you within <span className="text-gold-400 font-bold">24 hours</span>
            </p>
            <p className="text-gray-400">
              Get ready to transform your space with Motta One!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-gold-500/20 to-transparent"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-gold-500/10 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/20 border border-gold-500 rounded-full mb-4">
            <span className="text-sm font-bold text-gold-400">Get Your Free Quote</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Find Your Perfect Solution
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-2">
            Answer a few quick questions to get your personalized quote
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-400">Question {currentStep + 1} of {questions.length}</span>
            <span className="text-sm text-gold-400 font-semibold">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-500 to-gold-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Quiz Container */}
        <div className="bg-gray-900 p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-800 min-h-[500px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-gold-500/10 to-transparent pointer-events-none"></div>

          <AnimatePresence mode="wait">
            {!isQuizComplete ? (
              // Quiz Questions
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
                  {questions[currentStep].question}
                </h3>

                <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
                  {questions[currentStep].options.map((option, index) => (
                    <motion.button
                      key={option.value}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                      className={`p-5 text-center rounded-xl border-2 transition-all duration-300 hover:scale-102 ${
                        answers[questions[currentStep].id] === option.value
                          ? 'border-gold-500 bg-gold-500/20 shadow-lg shadow-gold-500/20'
                          : 'border-gray-700 bg-gray-800/50 hover:border-gold-500/50 hover:bg-gray-800'
                      }`}
                    >
                      <span className="text-xl font-semibold text-white block">
                        {option.label}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="mt-8 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                )}
              </motion.div>
            ) : (
              // Contact Form
              <motion.div
                key="contact-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6 p-4 bg-gradient-to-r from-gold-500/20 to-gold-500/10 rounded-lg border border-gold-500">
                  <p className="text-sm font-semibold text-gold-400 text-center">
                    Almost there! Just need your contact info to send your personalized quote
                  </p>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Get Your Free Personalized Quote
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-white placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-white placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-white placeholder-gray-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none text-white placeholder-gray-500"
                      placeholder="Any specific details about your project..."
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg border-2 border-gray-700 hover:bg-gray-700 transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-8 py-4 bg-gold-500 text-white text-lg font-bold rounded-lg hover:bg-gold-600 transition-all duration-300 hover:scale-105 shadow-xl"
                    >
                      Get My Free Quote Now →
                    </button>
                  </div>

                  <p className="text-xs text-center text-gray-500">
                    By submitting, you agree to receive communication from Motta One. We respect your privacy.
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Trust Indicators Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Quick Response</h3>
              <p className="text-gray-300 text-sm">24-hour reply guarantee</p>
            </div>

            <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">No Obligation</h3>
              <p className="text-gray-300 text-sm">Free consultation & quote</p>
            </div>

            <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Your Privacy</h3>
              <p className="text-gray-300 text-sm">We respect your information</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

