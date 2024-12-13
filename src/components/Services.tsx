import React, { useState } from 'react';
import { Code, LineChart, Megaphone, Rocket, Users, Zap } from 'lucide-react';
import ServiceModal from './ServiceModal';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored solutions that automate and streamline your business processes.',
    details: 'Our expert team develops custom software solutions using cutting-edge technologies. We focus on creating scalable, maintainable, and secure applications that solve your specific business challenges.'
  },
  {
    icon: LineChart,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights and growth opportunities.',
    details: 'Leverage the power of data analytics to make informed decisions. We help you collect, process, and visualize data to uncover valuable insights and drive business growth.'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven strategies that deliver measurable results.',
    details: 'Our digital marketing experts create and execute comprehensive strategies that increase your online presence and drive conversions through SEO, content marketing, and paid advertising.'
  },
  {
    icon: Rocket,
    title: 'Business Growth',
    description: 'Comprehensive solutions to scale your business effectively.',
    details: 'We provide end-to-end business growth solutions that combine technology, marketing, and strategy to help your business reach new heights.'
  },
  {
    icon: Users,
    title: 'Customer Experience',
    description: 'Create meaningful connections with your audience.',
    details: 'Enhance your customer experience through personalized interactions, efficient support systems, and data-driven improvements to build lasting relationships.'
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation solutions.',
    details: 'Automate repetitive tasks and streamline workflows to increase efficiency and reduce costs while maintaining quality and consistency.'
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="section-block p-8 md:p-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          We deliver comprehensive digital solutions that help businesses grow and succeed in the modern marketplace.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            onClick={() => setSelectedService(service)}
          >
            <service.icon className="w-12 h-12 text-[#ff6b00] mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService!}
      />
    </section>
  );
}