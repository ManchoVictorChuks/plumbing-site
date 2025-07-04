import React, { useState, useEffect, useRef } from 'react';
import { Wrench, Droplets, Zap, Shield, Clock, Phone } from 'lucide-react';

const Services: React.FC = () => {
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

  const services = [
    {
      icon: Droplets,
      title: 'Leak Detection & Repair',
      description: 'Professional leak detection using advanced equipment to find and fix leaks quickly.',
      features: ['24/7 Emergency Service', 'Advanced Detection Tools', 'Guaranteed Repairs'],
      color: 'blue',
      featured: false
    },
    {
      icon: Wrench,
      title: 'Pipe Installation',
      description: 'Complete pipe installation and replacement services for residential and commercial properties.',
      features: ['Quality Materials', 'Expert Installation', 'Warranty Included'],
      color: 'blue',
      featured: true
    },
    {
      icon: Zap,
      title: 'Drain Cleaning',
      description: 'Thorough drain cleaning services to restore proper flow and prevent future clogs.',
      features: ['Hydro Jetting', 'Video Inspection', 'Preventive Maintenance'],
      color: 'green',
      featured: false
    },
    {
      icon: Wrench,
      title: 'Water Heater Repair',
      description: 'Expert water heater repair and maintenance services to keep your hot water flowing.',
      features: ['Same Day Service', 'All Brands', 'Energy Efficient'],
      color: 'purple',
      featured: false
    },
    {
      icon: Droplets,
      title: 'Bathroom Plumbing',
      description: 'Complete bathroom plumbing solutions from fixtures to full renovations.',
      features: ['Modern Fixtures', 'Professional Install', 'Design Consultation'],
      color: 'cyan',
      featured: false
    }
  ];

  const getCardClasses = (service: any) => {
    if (service.featured) {
      return 'bg-blue-500 text-white col-span-1 md:col-span-2 lg:col-span-1 row-span-2 transform hover:scale-105';
    }
    return 'bg-white border border-gray-100 hover:shadow-xl transform hover:scale-105 hover:-translate-y-2';
  };

  const getIconClasses = (service: any) => {
    if (service.featured) {
      return 'w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110';
    }
    
    const colorMap = {
      blue: 'w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-200',
      green: 'w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-200',
      pink: 'w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-pink-200',
      purple: 'w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-200',
      cyan: 'w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-200'
    };
    
    return colorMap[service.color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIconColor = (service: any) => {
    if (service.featured) {
      return 'text-white';
    }
    
    const colorMap = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      pink: 'text-pink-600',
      purple: 'text-purple-600',
      cyan: 'text-cyan-600'
    };
    
    return colorMap[service.color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section ref={sectionRef} id="services" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 sm:mb-12 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-sm text-gray-600 mb-2">Our services</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Expert Plumbing Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            At Victor Plumbs, we're dedicated to providing top-notch plumbing services that you can rely on. 
            Whether it's a leaky faucet, a clogged drain, or a full-scale installation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${getCardClasses(service)} rounded-2xl p-4 sm:p-6 ${service.featured ? 'flex flex-col justify-center' : ''} group transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={getIconClasses(service) + ' transition-all duration-300'}>
                <service.icon className={`w-6 h-6 ${getIconColor(service)} transition-all duration-300`} />
              </div>
              <h3 className={`text-lg sm:text-xl font-semibold mb-3 ${service.featured ? 'text-white' : 'text-gray-900'} group-hover:scale-105 transition-transform duration-300`}>
                {service.title}
              </h3>
              <p className={`mb-4 leading-relaxed text-sm sm:text-base ${service.featured ? 'text-white/90' : 'text-gray-600'}`}>
                {service.description}
              </p>
              {!service.featured && (
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className={`bg-blue-600 rounded-2xl p-6 sm:p-8 text-center transform transition-all duration-700 delay-600 hover:scale-105 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="max-w-3xl mx-auto">
            <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-white mx-auto mb-4 animate-pulse" />
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Need Emergency Service?</h3>
            <p className="text-blue-100 mb-6 text-sm sm:text-base">
              We're available 24/7 for all your plumbing emergencies. Don't wait - call us now!
            </p>
            <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center mx-auto transform hover:scale-105 hover:shadow-lg">
              <Phone className="w-5 h-5 mr-2 animate-bounce" />
              Call Emergency Line
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;