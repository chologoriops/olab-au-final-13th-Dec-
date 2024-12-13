import React, { useEffect, useState } from 'react';

const metrics = [
  {
    title: 'Conversion',
    value: 23,
    symbol: '+',
    suffix: '%',
    description: '23.13% avg. increase in on site conversion',
    color: 'text-[#ff6b00]',
    fillColor: '#ff6b00'
  },
  {
    title: 'Acquisition',
    value: 14,
    symbol: '+',
    suffix: '%',
    description: '14% avg. lift in paid media performance',
    color: 'text-blue-500',
    fillColor: '#3b82f6'
  },
  {
    title: 'Retention',
    value: 10,
    symbol: 'x',
    suffix: '',
    description: '10x return on client investment',
    color: 'text-indigo-900',
    fillColor: '#312e81'
  }
];

const CountUp = ({ end, symbol, suffix }: { end: number; symbol: string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('metrics-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [end, isVisible]);

  return (
    <span>
      {symbol}{count}{suffix}
    </span>
  );
};

export default function MarketingROI() {
  return (
    <section id="metrics-section" className="section-block p-8 md:p-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4">Marketing ROI</h2>
          <p className="text-xl text-gray-300">
            We are generating over 800% life time ROI from marketing campaigns for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="60"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="8"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="60"
                    fill="none"
                    stroke={metric.fillColor}
                    strokeWidth="8"
                    strokeDasharray="377"
                    strokeDashoffset="377"
                    className="transition-all duration-1000 ease-out group-hover:stroke-dashoffset-0"
                  />
                </svg>
                <div className={`absolute inset-0 flex items-center justify-center text-4xl font-bold ${metric.color}`}>
                  <CountUp end={metric.value} symbol={metric.symbol} suffix={metric.suffix} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{metric.title}</h3>
              <p className="text-gray-300">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}