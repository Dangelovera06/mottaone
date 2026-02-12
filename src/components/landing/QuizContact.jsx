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
    question: "When are you looking to start?",
    options: [
      { value: "immediately", label: "Immediately" },
      { value: "1-2weeks", label: "Within 1-2 weeks" },
      { value: "1month", label: "Within a month" },
      { value: "planning", label: "Just getting quotes" },
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
    console.log("Submission:", { answers, formData });
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 md:py-32 bg-gray-50 border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-16 bg-white border border-gray-200"
          >
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-black mb-4">Thank You</h2>
            <p className="text-xl text-gray-600">
              We'll contact you within 24 hours with your personalized quote
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mb-8"></div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
            Get Your Quote
          </h2>
          <p className="text-2xl text-gray-600">
            Answer a few quick questions for a personalized estimate
          </p>
        </motion.div>

        {/* Progress */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-500 font-semibold">STEP {currentStep + 1} OF {questions.length + 1}</span>
            <span className="text-sm text-black font-semibold">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1 bg-gray-200">
            <motion.div
              className="h-full bg-black"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Quiz Container */}
        <div className="bg-white p-8 md:p-12 border border-gray-200 min-h-[400px]">
          <AnimatePresence mode="wait">
            {!isQuizComplete ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl font-bold text-black mb-10">
                  {questions[currentStep].question}
                </h3>

                <div className="space-y-4">
                  {questions[currentStep].options.map((option, index) => (
                    <motion.button
                      key={option.value}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                      className={`w-full p-5 text-left text-lg font-semibold border-2 transition-all duration-300 ${
                        answers[questions[currentStep].id] === option.value
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 bg-white text-black hover:border-gray-400'
                      }`}
                    >
                      {option.label}
                    </motion.button>
                  ))}
                </div>

                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="mt-8 text-gray-500 hover:text-black transition-colors font-semibold"
                  >
                    ← Back
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl font-bold text-black mb-8">
                  Final Step: Your Contact Information
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-none focus:outline-none focus:border-black transition-colors text-black"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-none focus:outline-none focus:border-black transition-colors text-black"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-none focus:outline-none focus:border-black transition-colors text-black"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3 bg-gray-100 text-black font-semibold rounded-none hover:bg-gray-200 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-8 py-4 bg-black text-white text-lg font-semibold rounded-none hover:bg-gray-900 transition-colors"
                    >
                      Get My Quote
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center pt-4">
                    We'll respond within 24 hours. No spam, ever.
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
