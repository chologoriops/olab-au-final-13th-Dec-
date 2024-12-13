import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/olabhq/' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/bappygolder' },
  ];

  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
      <div className="section-block p-8 md:p-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="https://web.archive.org/web/20231026041914im_/https://olab.com.au/dist/images/olab-1.svg"
                alt="oLab Logo"
                className="h-10 w-auto transition-transform hover:scale-105"
              />
            </div>
            <p className="text-gray-300">
              Software development and data focused digital marketing solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {['Software Development', 'Digital Marketing', 'Data Analytics', 'Business Automation'].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-[#ff6b00] transition-colors block py-1"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Work', href: '#services' },
                { name: 'Contact', href: '#contact' },
                { name: 'FAQ', href: '#faq' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-[#ff6b00] transition-colors block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
            <ul className="space-y-2">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-[#ff6b00] transition-colors py-1"
                  >
                    <social.icon className="h-5 w-5" />
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} oLab. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#ff6b00] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ff6b00] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ff6b00] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}