import React from 'react';

interface HeroContentProps {
  title: string;
  description: string;
}

export default function HeroContent({ title, description }: HeroContentProps) {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-8">
        {title}
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </>
  );
}