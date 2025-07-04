import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const clientAvatars = [
    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
    'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-8 sm:py-12 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Satisfied Clients Badge */}
            <div className={`flex items-center space-x-3 transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="flex -space-x-2">
                {clientAvatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Client ${index + 1}`}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover transform hover:scale-110 transition-transform duration-300"
                    style={{ animationDelay: `${index * 200}ms` }}
                  />
                ))}
              </div>
              <span className="text-sm sm:text-base text-gray-600 font-medium">1000+ satisfied clients</span>
            </div>

            {/* Main Headline */}
            <div className={`space-y-4 transform transition-all duration-700 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight relative">
                {/* Business Name with fade-out mask effect */}
                <span
                  className="block relative"
                  style={{
                    WebkitMaskImage:
                      'linear-gradient(to bottom, black 60%, transparent 100%)',
                    maskImage:
                      'linear-gradient(to bottom, black 60%, transparent 100%)',
                  }}
                >
                  Victor Plumbs
                </span>
                <span className="block animate-fade-in-up">Fixing Your</span>
                <span className="block text-blue-600 animate-fade-in-up animation-delay-300">Plumbing Woes</span>
                <span className="block animate-fade-in-up animation-delay-600">with Care</span>
              </h1>
              <div className="flex items-center">
                <div className="w-12 sm:w-16 h-1 bg-blue-600 rounded-full animate-expand-width"></div>
                <div className="w-6 sm:w-8 h-6 sm:h-8 ml-4 flex items-center justify-center">
                  <svg className="w-4 sm:w-6 h-4 sm:h-6 text-gray-400 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className={`text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg transform transition-all duration-700 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              At Victor Plumbs, we're dedicated to providing top-notch plumbing services 
              that you can rely on. Whether it's a leaky faucet, a clogged drain, or a 
              full-scale installation.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-700 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center group transform hover:scale-105 hover:shadow-lg"
              >
                Book Our Service
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <button className="border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md">
                Learn more
              </button>
            </div>

            {/* Trust Indicators */}
            <div className={`pt-6 sm:pt-8 border-t border-gray-200 transform transition-all duration-700 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <p className="text-sm text-gray-600 mb-4">Thousands of home owners and companies trust us</p>
              <div className="flex flex-wrap items-center gap-8 sm:gap-12">
                <div className="flex items-center justify-center bg-white rounded-lg shadow-sm p-2" style={{ width: 120, height: 48 }}>
                  <img
                    src="data:image/png;base64,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"
                    alt="IKEA"
                    className="object-contain"
                    style={{ width: 96, height: 32 }}
                  />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg shadow-sm p-2" style={{ width: 120, height: 48 }}>
                  <img
                    src="https://www.infinityinstruments.com/wp-content/uploads/Home-Depot-Logo-PNG-Vector-Free-Download.png"
                    alt="Home Depot"
                    className="object-contain"
                    style={{ width: 96, height: 32 }}
                  />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg shadow-sm p-2" style={{ width: 120, height: 48 }}>
                  <img
                    src="data:image/png;base64,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"
                    alt="Lowe's"
                    className="object-contain"
                    style={{ width: 96, height: 32 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={`relative order-1 lg:order-2 transform transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Professional plumber working on pipes"
                className="w-full h-[350px] sm:h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
            </div>

            {/* Stats Card */}
            <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-white rounded-xl shadow-lg p-4 sm:p-6 max-w-xs transform hover:scale-105 transition-all duration-300 animate-float">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 counter-animation">190K+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Satisfied clients</div>
                </div>
                <div className="flex -space-x-2">
                  {clientAvatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt={`Client ${index + 1}`}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current animate-twinkle" style={{ animationDelay: `${i * 200}ms` }} />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-600 ml-2">5.0 rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;