import React from 'react';
import { Lightbulb, Building2, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const consultingServices = [
  {
    icon: Building2,
    title: 'Business Consulting',
    description: 'Strategic guidance for business growth, operational efficiency, and market expansion. Our CEO brings extensive experience in helping companies scale and succeed.',
    benefits: [
      'Business Strategy Development',
      'Market Analysis & Positioning',
      'Growth & Scaling Solutions',
      'Operational Optimization'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Technology Consulting',
    description: 'Expert advice on technology implementation, digital transformation, and IT strategy. Transform your business with cutting-edge tech solutions.',
    benefits: [
      'Digital Transformation Strategy',
      'Technology Stack Optimization',
      'IT Infrastructure Planning',
      'Innovation Implementation'
    ]
  },
  {
    icon: Heart,
    title: 'Life Consulting',
    description: 'Personal development and life strategy consulting to help individuals achieve their goals and maintain work-life harmony.',
    benefits: [
      'Personal Growth Strategy',
      'Work-Life Balance',
      'Goal Setting & Achievement',
      'Leadership Development'
    ]
  }
];

export default function Consulting() {
  return (
    <section id="consulting" className="section-block p-8 md:p-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4">Executive Consulting</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business and life with expert guidance from our CEO
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {consultingServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 hover:bg-gray-700/50 transition-all duration-300 group h-full border border-gray-700 hover:border-gray-600"
            >
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <service.icon className="w-8 h-8 text-[#ff6b00] mr-3" />
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <span className="w-1.5 h-1.5 bg-[#ff6b00] rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full text-white border border-[#ff6b00] rounded-lg px-6 py-3 hover:bg-[#ff6b00] transition-colors duration-300"
                >
                  Book Consultation
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}