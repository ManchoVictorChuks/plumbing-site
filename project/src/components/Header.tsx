import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Service', href: '#services' },
    { name: 'Contact us', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center group">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-600 rounded-full flex items-center justify-center mr-2 lg:mr-3 transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm lg:text-base">S</span>
              </div>
              <span className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Victor Plumbs
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Call Now Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-gray-900 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-md text-sm lg:text-base font-medium hover:bg-gray-800 transition-all duration-300 flex items-center transform hover:scale-105 hover:shadow-lg">
              <Phone className="w-4 h-4 mr-2 animate-pulse" />
              Call now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2 rounded-md transition-all duration-300 transform hover:scale-110"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`} />
                <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white border-t transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-3 rounded-md text-base font-medium transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                opacity: isMobileMenuOpen ? 1 : 0,
                transition: `all 300ms ease-out ${index * 50}ms`
              }}
            >
              {item.name}
            </a>
          ))}
          <button className="w-full bg-gray-900 text-white px-4 py-3 rounded-md text-base font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center mt-4 transform hover:scale-105">
            <Phone className="w-4 h-4 mr-2" />
            Call now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;