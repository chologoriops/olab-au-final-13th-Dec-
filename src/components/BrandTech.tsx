import React, { useState, useEffect } from 'react';

const items = {
  brands: [
    { name: 'University of Sydney', logo: 'https://upload.wikimedia.org/wikipedia/en/0/04/The_University_of_Sydney_logo.svg' },
    { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' },
    { name: 'Adobe', logo: 'https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg' },
    { name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' },
    { name: 'Microsoft', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
    { name: 'Atlassian', logo: 'https://wac-cdn.atlassian.com/dam/jcr:616e6748-ad8c-48d9-ae93-e49019ed5259/Atlassian-horizontal-blue-rgb.svg' }
  ],
  technologies: [
    { name: 'WordPress', logo: 'https://s.w.org/style/images/about/WordPress-logotype-standard.png' },
    { name: 'Hotjar', logo: 'https://images.ctfassets.net/lh3zuq09vnm2/2xYHKXXWj6dL1KZYSJEpZE/35f5e0dc07bae8240bd34d873bab3095/hotjar-1.svg' },
    { name: 'Slack', logo: 'https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png' },
    { name: 'Shopify', logo: 'https://cdn.shopify.com/assets/images/logos/shopify-bag.png' },
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Node.js', logo: 'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg' },
    { name: 'MongoDB', logo: 'https://www.mongodb.com/assets/images/global/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png' }
  ]
};

export default function BrandTech() {
  const [activeTab, setActiveTab] = useState<'brands' | 'technologies'>('brands');
  const [isAutoSwitching, setIsAutoSwitching] = useState(true);

  useEffect(() => {
    if (!isAutoSwitching) return;

    const interval = setInterval(() => {
      setActiveTab(prev => prev === 'brands' ? 'technologies' : 'brands');
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoSwitching]);

  const handleTabClick = (tab: 'brands' | 'technologies') => {
    setActiveTab(tab);
    setIsAutoSwitching(false);
  };

  return (
    <section className="section-block p-8 md:p-12">
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-lg border border-gray-700 p-1 bg-gray-800/50">
          <button
            onClick={() => handleTabClick('brands')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'brands'
                ? 'bg-[#ff6b00] text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Brand Experience
          </button>
          <button
            onClick={() => handleTabClick('technologies')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'technologies'
                ? 'bg-[#ff6b00] text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Technologies
          </button>
        </div>
      </div>

      <div className="relative">
        <div className={`transition-opacity duration-500 ${
          activeTab === 'brands' ? 'opacity-100' : 'opacity-0 absolute inset-0'
        }`}>
          <h2 className="text-4xl font-light text-center text-white mb-16">Brand Experience</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {items.brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 hover:scale-110 transition-all duration-300"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        <div className={`transition-opacity duration-500 ${
          activeTab === 'technologies' ? 'opacity-100' : 'opacity-0 absolute inset-0'
        }`}>
          <h2 className="text-4xl font-light text-center text-white mb-16">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {items.technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="max-h-8 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}