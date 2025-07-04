import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const LocationMap: React.FC = () => {
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

  const serviceAreas = [
    'Westminster',
    'London Eye Area',
    'South Bank',
    'Waterloo',
    'Thames Riverside',
    'Central London'
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Central London & Surrounding Areas'
    },
    {
      icon: Phone,
      title: 'Emergency Line',
      details: '+123 456 789'
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      details: '24/7 Emergency Service'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@victorplumbs.com'
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 sm:mb-12 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-sm text-gray-600 mb-2">Our Location</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Serving Your Area
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We provide professional plumbing services across Central London and surrounding areas. 
            Find us on the map and see if we serve your location.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Map Section */}
          <div className={`lg:col-span-2 transform transition-all duration-700 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 sm:h-80 lg:h-[500px]">
                {/* Map placeholder with the reference image styling */}
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 relative group-hover:from-blue-200 group-hover:to-green-200 transition-all duration-500">
                  {/* Simulated map interface */}
                  <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-2 text-xs text-gray-600 hover:shadow-lg transition-shadow duration-300">
                    View larger map
                  </div>
                  
                  {/* Zoom controls */}
                  <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md overflow-hidden">
                    <button className="block w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 border-b transition-colors duration-300">
                      +
                    </button>
                    <button className="block w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors duration-300">
                      −
                    </button>
                  </div>

                  {/* Service area markers */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center animate-pulse hover:scale-110 transition-transform duration-300">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center animate-pulse hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.5s' }}>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div className="absolute bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2">
                    <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center animate-pulse hover:scale-110 transition-transform duration-300" style={{ animationDelay: '1s' }}>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Map attribution */}
                  <div className="absolute bottom-2 right-2 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded">
                    Map data ©2024
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`space-y-6 transform transition-all duration-700 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3 group hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300"
                    style={{ 
                      animationDelay: `${index * 200}ms`,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      opacity: isVisible ? 1 : 0,
                      transition: `all 500ms ease-out ${index * 200}ms`
                    }}
                  >
                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                      <info.icon className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm sm:text-base group-hover:text-blue-600 transition-colors duration-300">{info.title}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{info.details}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Service Areas</h3>
              <div className="space-y-2">
                {serviceAreas.map((area, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-2 group hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                      opacity: isVisible ? 1 : 0,
                      transition: `all 400ms ease-out ${index * 100}ms`
                    }}
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-600 text-sm sm:text-base group-hover:text-blue-600 transition-colors duration-300">{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Check Service Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;