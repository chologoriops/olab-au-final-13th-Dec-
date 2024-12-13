import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQItemProps extends FAQ {
  isOpen: boolean;
  onClick: () => void;
}

const faqs: FAQ[] = [
  {
    question: 'What services does oLab provide?',
    answer: 'oLab provides comprehensive digital solutions including custom software development, data analytics, digital marketing, business automation, and strategic consulting services.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A typical software development project can take 3-6 months, while marketing campaigns can be implemented within 2-4 weeks.'
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer: 'Yes, we provide continuous support and maintenance services for all our solutions. We offer various support packages tailored to your needs.'
  },
  {
    question: 'What industries do you work with?',
    answer: "We work across various industries including technology, healthcare, education, retail, and financial services. Our solutions are adaptable to any industry's specific needs."
  },
  {
    question: 'How do you ensure project success?',
    answer: 'We follow a rigorous project management methodology, maintain transparent communication, and provide regular updates. We also use agile practices to ensure flexibility and quality.'
  },
  {
    question: 'What is your pricing model?',
    answer: 'Our pricing is project-based and depends on the scope, complexity, and timeline. We provide detailed quotes after understanding your specific requirements.'
  }
];

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <motion.div
    initial={false}
    className="border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-colors"
  >
    <button
      className="w-full px-6 py-4 flex justify-between items-center text-left"
      onClick={onClick}
      type="button"
      aria-expanded={isOpen}
    >
      <span className="text-lg text-white font-medium">{question}</span>
      <ChevronDown 
        className={`w-5 h-5 text-[#ff6b00] transform transition-transform duration-200 ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-4 text-gray-300">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-block p-8 md:p-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300">
            Find answers to common questions about our services and process
          </p>
        </div>

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-[#ff6b00] text-white rounded-lg hover:bg-[#ff8533] transition-colors"
          >
            Contact Us
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default FAQ;