import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const Workflow: React.FC = () => {
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

  const steps = [
    {
      step: 'Step 1',
      title: 'Schedule A Meeting',
      description: 'We begin by scheduling an initial consultation to understand your specific requirements and project goals.',
      icon: Calendar,
      color: 'blue',
      featured: true
    },
    {
      step: 'Step 2', 
      title: 'Arrive Within 1 Hour',
      description: 'We begin by scheduling an initial consultation to understand your specific requirements and project goals.',
      icon: Clock,
      color: 'gray',
      featured: false
    },
    {
      step: 'Step 3',
      title: 'Complete The Job',
      description: 'We begin by scheduling an initial consultation to understand your specific requirements and project goals.',
      icon: CheckCircle,
      color: 'gray',
      featured: false
    }
  ];

  const getCardClasses = (step: any) => {
    if (step.featured) {
      return 'bg-blue-600 text-white transform hover:scale-105 hover:shadow-xl';
    }
    return 'bg-white border border-gray-200 transform hover:scale-105 hover:shadow-lg';
  };

  const getIconClasses = (step: any) => {
    if (step.featured) {
      return 'w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110';
    }
    return 'w-10 sm:w-12 h-10 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-gray-200';
  };

  const getIconColor = (step: any) => {
    if (step.featured) {
      return 'text-white';
    }
    return 'text-gray-600 group-hover:text-gray-700';
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 sm:mb-12 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
            Our Efficient Handyman Service<br />
            Workflow
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At our handyman service, we have meticulously designed a 
            streamlined workflow to provide our clients with a seamless and 
            hassle-free experience. Here's an overview of our handyman 
            service workflow:
          </p>
          <div className="mt-6 sm:mt-8">
            <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Read More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`${getCardClasses(step)} rounded-2xl p-6 sm:p-8 text-center group transition-all duration-500`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: `all 600ms ease-out ${index * 200}ms`
              }}
            >
              <div className="mb-4">
                <span className={`text-xs sm:text-sm font-medium ${step.featured ? 'text-white/80' : 'text-gray-500'} group-hover:scale-105 transition-transform duration-300 inline-block`}>
                  {step.step}
                </span>
              </div>
              
              <div className={getIconClasses(step) + ' transition-all duration-300'}>
                <step.icon className={`w-5 sm:w-6 h-5 sm:h-6 ${getIconColor(step)} transition-all duration-300`} />
              </div>
              
              <h3 className={`text-lg sm:text-xl font-bold mb-4 ${step.featured ? 'text-white' : 'text-gray-900'} group-hover:scale-105 transition-transform duration-300`}>
                {step.title}
              </h3>
              
              <p className={`leading-relaxed text-sm sm:text-base ${step.featured ? 'text-white/90' : 'text-gray-600'} group-hover:scale-105 transition-transform duration-300`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;