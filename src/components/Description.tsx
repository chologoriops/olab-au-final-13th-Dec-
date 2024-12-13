import React from 'react';
import { Code, LineChart, Megaphone } from 'lucide-react';

export default function Description() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          <span className="font-bold">oLab</span> is a software development and data focused digital marketing company. We specialise in business growth with software-driven automation, advanced personalisation, and data-driven marketing solutions.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
            <Code className="w-10 h-10 text-[#ff6b00] mb-4" />
            <h3 className="text-xl font-bold mb-2">Software Development</h3>
            <p className="text-gray-600">Custom software solutions tailored to your business needs.</p>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
            <LineChart className="w-10 h-10 text-[#ff6b00] mb-4" />
            <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
            <p className="text-gray-600">Turn your data into actionable insights and growth opportunities.</p>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
            <Megaphone className="w-10 h-10 text-[#ff6b00] mb-4" />
            <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
            <p className="text-gray-600">Data-driven marketing strategies that deliver results.</p>
          </div>
        </div>
      </div>
    </div>
  );
}