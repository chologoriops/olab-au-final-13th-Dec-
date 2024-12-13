import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop',
    review: 'oLab transformed our digital presence. Their software solutions increased our efficiency by 40%.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop',
    review: "The team's attention to detail and innovative approaches exceeded our expectations.", // Changed to double quotes
    rating: 5,
  },
  {
    name: 'Emma Williams',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop',
    review: 'Outstanding service! They helped us achieve a 200% increase in online conversions.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Startup Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop',
    review: 'Their data-driven approach to marketing delivered remarkable results for our startup.',
    rating: 5,
  },
  {
    name: 'Lisa Anderson',
    role: 'E-commerce Director',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&auto=format&fit=crop',
    review: 'The automation solutions they implemented saved us countless hours and resources.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Tech Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop',
    review: 'Exceptional technical expertise and professional service throughout the project.',
    rating: 5,
  },
];


const ReviewCard = ({ review }: { review: typeof testimonials[0] }) => (
  <div className="w-80 flex-shrink-0 mx-4">
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105">
      <div className="flex items-center mb-4">
        <img
          src={review.image}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-white font-semibold">{review.name}</h4>
          <p className="text-gray-400 text-sm">{review.role}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-[#ff6b00] fill-[#ff6b00]" />
        ))}
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{review.review}</p>
    </div>
  </div>
);

const ScrollingRow = ({ reviews, direction }: { reviews: typeof testimonials, direction: 'left' | 'right' }) => (
  <motion.div
    className="flex"
    initial={{ x: direction === 'left' ? 0 : '-100%' }}
    animate={{ x: direction === 'left' ? '-100%' : 0 }}
    transition={{
      duration: 80,
      repeat: Infinity,
      ease: 'linear',
    }}
  >
    {reviews.map((review, index) => (
      <ReviewCard key={index} review={review} />
    ))}
    {reviews.map((review, index) => (
      <ReviewCard key={`duplicate-${index}`} review={review} />
    ))}
  </motion.div>
);

export default function Testimonials() {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3);

  return (
    <section id="testimonials" className="section-block p-8 md:p-12 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light text-white mb-4">What Clients Say About Us</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Don't just take our word for it - hear from our satisfied clients
        </p>
      </div>

      <div className="space-y-12">
        <div className="hover:pause">
          <ScrollingRow reviews={firstRow} direction="left" />
        </div>
        {/* <div className="hover:pause">
          <ScrollingRow reviews={secondRow} direction="right" />
        </div> */}
      </div>
    </section>
  );
}