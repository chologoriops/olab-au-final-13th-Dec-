import React from 'react';

export default function BusinessValue() {
  return (
    <section className="section-block p-8 md:p-12 my-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4">Business Value</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Through providing our clients with enhanced software solutions, we enabled them to access increased operational innovation. On average, our business customers are achieving 25% operational savings from software consultancy engagements with us.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold text-[#ff6b00]">5%</span>
              </div>
            </div>
            <p className="mt-4 text-gray-300">Initial Efficiency</p>
          </div>

          <span className="text-xl md:text-2xl font-bold text-[#ff6b00]">TO</span>

          <div className="text-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 border-4 border-[#ff6b00] rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold text-[#ff6b00]">25%</span>
              </div>
            </div>
            <p className="mt-4 text-gray-300">Improved Efficiency</p>
          </div>
        </div>
      </div>
    </section>
  );
}