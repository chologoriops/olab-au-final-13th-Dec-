import React from 'react';
import { Phone } from 'lucide-react';
import HeroButton from './HeroButton';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <HeroContent 
            title="Expert Software Development & Digital Marketing Solutions"
            description="Transform your business with our software-driven automation, advanced personalization, and data-driven marketing solutions. Achieve up to 40% efficiency gains and 200% ROI."
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <HeroButton
              href="tel:0428770086"
              icon={Phone}
              variant="primary"
              ariaLabel="Call us now at 0428 770 086"
            >
              Call Now | 0428 770 086
            </HeroButton>
            
            <HeroButton
              href="#services"
              variant="secondary"
              ariaLabel="Learn more about our services"
            >
              Learn More
            </HeroButton>
          </div>
        </div>
      </div>
    </section>
  );
}