import React from 'react';
import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8 bg-clip-text">
            Expert software automation & digital marketing solutions
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        We'll transform your business with our automation system, operation flow, and data-driven marketing solutions.
            {/* <br /> */}
~40%+ efficiency gains and ~200% ROI.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:0428770086"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#ff6b00] to-[#ff8533] text-white rounded-lg hover:from-[#ff8533] hover:to-[#ff9966] transition-all text-lg font-semibold shadow-[0_0_20px_rgba(255,107,0,0.15)] hover:shadow-[0_0_25px_rgba(255,107,0,0.25)] transform hover:scale-105 duration-200"
              aria-label="Call us now at 0428 770 086"
            >
              <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
              Call Now | 0428 770 086
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-700 text-white rounded-lg hover:bg-white/10 transition-all text-lg font-semibold shadow-lg hover:shadow-xl hover:border-gray-600 transform hover:scale-105 duration-200 backdrop-blur-sm"
              aria-label="Learn more about our services"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}