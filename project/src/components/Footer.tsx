import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Leak Detection & Repair',
      'Pipe Installation',
      'Drain Cleaning',
      'Emergency Plumbing',
      'Water Heater Repair',
      'Bathroom Plumbing'
    ],
    company: [
      'About Us',
      'Our Team',
      'Service Areas',
      'Testimonials',
      'Blog',
      'Careers'
    ],
    support: [
      'Contact Us',
      'FAQ',
      'Emergency Service',
      'Warranty',
      'Privacy Policy',
      'Terms of Service'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center group">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">Victor Plumbs</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional plumbing services you can trust. We're dedicated to solving 
              your plumbing problems with quality workmanship and reliable service.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300 group hover:text-white transition-colors duration-300">
                <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                (555) 123-4567
              </div>
              <div className="flex items-center text-sm text-gray-300 group hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                info@shylofixi.com
              </div>
              <div className="flex items-center text-sm text-gray-300 group hover:text-white transition-colors duration-300">
                <MapPin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                123 Main Street, City, State 12345
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 text-sm hover:translate-x-1 inline-block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 text-sm hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 text-sm hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Victor Plumbs. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;