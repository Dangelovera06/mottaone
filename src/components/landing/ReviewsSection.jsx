import React from "react";
import { motion } from "framer-motion";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Jennifer Martinez",
      initials: "JM",
      image: "/profile-jennifer.jpg",
      location: "Miami, FL",
      rating: 5,
      text: "Absolutely blown away! They transformed our outdated kitchen into a modern masterpiece in just 5 days. The granite countertops are stunning and the team was incredibly professional. Worth every penny!",
      project: "Kitchen Remodel",
      color: "from-gold-400 to-gold-600"
    },
    {
      name: "Sarah Kim",
      initials: "SK",
      image: "/profile-sarah.jpg",
      location: "Fort Lauderdale, FL",
      rating: 5,
      text: "Best decision we made for our home! The quartz countertops look amazing and they finished right on schedule. No mess, no stress, and the attention to detail was incredible. Highly recommend!",
      project: "Bathroom Vanity",
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Robert Miller",
      initials: "RM",
      image: "/profile-robert.jpg",
      location: "Boca Raton, FL",
      rating: 5,
      text: "I've used several contractors over the years, but Motta One stands out. Fast, professional, and the quality is unmatched. My kitchen looks like it belongs in a magazine. 10/10!",
      project: "Kitchen Countertops",
      color: "from-gold-500 to-gold-700"
    },
    {
      name: "Amanda Lopez",
      initials: "AL",
      image: "/profile-amanda.jpg",
      location: "West Palm Beach, FL",
      rating: 5,
      text: "From consultation to completion, everything was seamless. They listened to our vision and delivered beyond our expectations. The marble work in our bathroom is absolutely gorgeous!",
      project: "Full Bathroom Remodel",
      color: "from-black to-gray-700"
    },
    {
      name: "Thomas Chen",
      initials: "TC",
      image: "/profile-thomas.jpg",
      location: "Coral Springs, FL",
      rating: 5,
      text: "Quick, clean, and professional. The team was respectful of our home and the results speak for themselves. Our outdoor kitchen is now the centerpiece of our backyard. Couldn't be happier!",
      project: "Outdoor Kitchen",
      color: "from-gold-600 to-gold-800"
    },
    {
      name: "Maria Rodriguez",
      initials: "MR",
      image: "/profile-maria.jpg",
      location: "Pembroke Pines, FL",
      rating: 5,
      text: "Exceptional service from start to finish. The lifetime warranty gave us peace of mind, and the craftsmanship is evident in every detail. Our kitchen has become the heart of our home!",
      project: "Kitchen Remodel",
      color: "from-gray-700 to-black"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 px-6 py-3 bg-green-50 border-2 border-green-500">
              <div className="flex -space-x-2">
                <img 
                  src="/profile-jennifer.jpg" 
                  alt="Customer" 
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img 
                  src="/profile-sarah.jpg" 
                  alt="Customer" 
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img 
                  src="/profile-robert.jpg" 
                  alt="Customer" 
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-bold text-black">1,000+ Satisfied Customers</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
            Don't Just Take Our Word For It
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what South Florida homeowners are saying about their transformations
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-2 border-gray-200 p-8 hover:border-green-500 transition-all duration-300 hover:shadow-xl"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-base">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-black">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.location}</div>
                  <div className="text-xs text-green-600 font-semibold uppercase">{review.project}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-16 border-t-2 border-gray-200"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">1,000+</div>
            <div className="text-sm text-gray-600 font-semibold">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">5 Days</div>
            <div className="text-sm text-gray-600 font-semibold">Average Install Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">15+</div>
            <div className="text-sm text-gray-600 font-semibold">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">5.0</div>
            <div className="text-sm text-gray-600 font-semibold">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
