import React, { useState, useEffect, useRef } from 'react';

const BusinessName: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Business Name */}
          <div className={`relative transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
          }`}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-800 tracking-wider leading-none hover:text-gray-700 transition-colors duration-500">
              Victor Plumbs
            </h1>
            
            {/* Shadow/3D Effect */}
            <div className="absolute inset-0 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-400 tracking-wider leading-none transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300">
              Victor Plumbs
            </div>
            
            {/* Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 pointer-events-none"></div>
          </div>
          
          {/* Subtitle */}
          <div className={`mt-6 sm:mt-8 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-medium tracking-wide hover:text-gray-700 transition-colors duration-300">
              PROFESSIONAL PLUMBING SERVICES
            </p>
          </div>
          
          {/* Decorative Line */}
          <div className={`mt-4 sm:mt-6 flex items-center justify-center transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="w-16 sm:w-24 h-1 bg-blue-600 rounded-full animate-expand-width"></div>
          </div>
        </div>
        
        {/* Embedded Map */}
        <div className="w-full h-72 sm:h-96 rounded-xl overflow-hidden shadow-lg mt-8">
          <iframe
            title="Dublin, Ireland Location"
            src="https://www.google.com/maps?q=Dublin,+Ireland&output=embed"
            style={{ border: 0, width: '100%', height: '100%' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default BusinessName;