import React from 'react';

const technologies = [
  { name: 'WordPress', logo: 'https://s.w.org/style/images/about/WordPress-logotype-standard.png' },
  { name: 'Hotjar', logo: 'https://images.ctfassets.net/lh3zuq09vnm2/2xYHKXXWj6dL1KZYSJEpZE/35f5e0dc07bae8240bd34d873bab3095/hotjar-1.svg' },
  { name: 'Slack', logo: 'https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png' },
  { name: 'Typeform', logo: 'https://images.ctfassets.net/lh3zuq09vnm2/6zxMbtJI8T43Ia7uHg49YB/937a8a1f2e8d87be8c7f5ed43e943f0f/typeform.svg' },
  { name: 'Udacity', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Udacity_logo.png' },
  { name: 'Shopify', logo: 'https://cdn.shopify.com/assets/images/logos/shopify-bag.png' },
  { name: 'Pipedrive', logo: 'https://www.pipedrive.com/en/press/resources/pipedrive-logo-dark.svg' },
  { name: 'Trello', logo: 'https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/brand-assets/Logos/0099ec3754bf473d2bbf317204ab6fea/trello-logo-blue.png' }
];

export default function TechnologiesWeUse() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-center text-gray-700 mb-16">Technologies We Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
              <img
                src={tech.logo}
                alt={tech.name}
                className="max-h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}