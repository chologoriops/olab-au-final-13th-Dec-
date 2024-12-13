import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users2, Lightbulb, CheckCircle2 } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Projects Completed', value: '200+' },
  { label: 'Team Members', value: '10+' },
  { label: 'Client Satisfaction', value: '98%' }
];

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We push boundaries and embrace cutting-edge solutions'
  },
  {
    icon: Users2,
    title: 'Client Partnership',
    description: 'Your success is our success - we grow together'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Delivering outstanding quality in everything we do'
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description: 'Always evolving, always improving our expertise'
  }
];

export default function About() {
  return (
    <section id="about" className="section-block p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-light text-white">About <span className="text-[#ff6b00]">oLab</span></h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Founded in 2015, oLab has been at the forefront of digital innovation, helping businesses transform and thrive in the digital age.
            </p>
            <div className="space-y-4">
              {['Industry-leading expertise in software development', 'Data-driven marketing solutions', 'Innovative business automation', 'Strategic consulting services'].map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ff6b00]" />
                  <span className="text-gray-300">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#ff6b00] transition-colors">
                <div className="text-3xl font-bold text-[#ff6b00] mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#ff6b00] transition-all duration-300"
            >
              <value.icon className="w-10 h-10 text-[#ff6b00] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}