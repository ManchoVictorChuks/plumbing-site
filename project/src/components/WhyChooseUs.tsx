import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Cog } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
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

  const features = [
    {
      icon: Award,
      title: 'Expertise and Experience',
      description: 'Highlight your team\'s qualifications, certifications, or years of industry experience. we\'re dedicated to providing top-notch plumbing services that you can rely on.'
    },
    {
      icon: Users,
      title: 'Customer-Centric Approach',
      description: 'Highlight your team\'s qualifications, certifications, or years of industry experience. we\'re dedicated to providing top-notch plumbing services that you can rely on.'
    },
    {
      icon: Cog,
      title: 'State-of-the-Art Technology',
      description: 'Highlight your team\'s qualifications, certifications, or years of industry experience. we\'re dedicated to providing top-notch plumbing services that you can rely on.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-6 lg:space-y-8 transform transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div>
              <div className="text-sm text-gray-600 mb-2">Why choose us</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Fixing Your Plumbing<br />
                Woes with Care
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                At Victor Plumbs, we're dedicated to providing top-notch plumbing services 
                that you can rely on. Whether it's a leaky faucet, a clogged drain, or a full-
                scale installation.
              </p>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className={`space-y-4 transform transition-all duration-700 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-blue-500 rounded-2xl p-4 sm:p-6 text-white group hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 500ms ease-out ${index * 200}ms`
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:scale-105 transition-transform duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;