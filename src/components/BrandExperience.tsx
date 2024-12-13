import React from 'react';

const brands = [
  { name: 'University of Sydney', logo: 'https://upload.wikimedia.org/wikipedia/en/0/04/The_University_of_Sydney_logo.svg' },
  { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' },
  { name: 'Adobe', logo: 'https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg' },
  { name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' },
  { name: 'Tasly', logo: 'https://images.unsplash.com/photo-placeholder' },
  { name: 'Sleep', logo: 'https://images.unsplash.com/photo-placeholder' },
  { name: 'Fort', logo: 'https://images.unsplash.com/photo-placeholder' },
  { name: 'Fortuna', logo: 'https://images.unsplash.com/photo-placeholder' }
];

export default function BrandExperience() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-center text-gray-700 mb-16">Brand Experience</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}