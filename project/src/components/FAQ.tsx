import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus, Phone } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const faqs = [
    {
      question: 'HOW TO REQUEST A SERVICE?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      question: 'HOW MUCH WILL IT COST?',
      answer: 'Our pricing varies depending on the type and complexity of the service. We provide transparent, upfront pricing with no hidden fees. Contact us for a free estimate tailored to your specific needs.'
    },
    {
      question: 'DO YOU WARRANTY YOUR SERVICES?',
      answer: 'Yes, we stand behind our work with comprehensive warranties. All our services come with quality guarantees, and we use only the best materials to ensure long-lasting results.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - FAQ Content */}
          <div className={`space-y-6 lg:space-y-8 transform transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div>
              <div className="text-sm text-blue-600 font-medium mb-2">FAQS</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                24/7 Emergency<br />
                Plumbing Service
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 lg:mb-8 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border-b border-gray-200 group"
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isVisible ? 1 : 0,
                    transition: `all 500ms ease-out ${index * 200}ms`
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between py-4 text-left focus:outline-none group-hover:bg-gray-50 px-2 rounded-lg transition-all duration-300"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wide group-hover:text-blue-600 transition-colors duration-300">
                      {faq.question}
                    </span>
                    <div className="ml-4 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-all duration-300 rotate-0" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-all duration-300 rotate-0 hover:rotate-90" />
                      )}
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pb-4 px-2">
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Request Service Button */}
            <div className="pt-4">
              <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                REQUEST A SERVICE
              </button>
            </div>
          </div>

          {/* Right Column - Image with Emergency Contact */}
          <div className={`relative transform transition-all duration-700 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Professional plumber with tools and cap"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>

            {/* Emergency Contact Card */}
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white rounded-xl shadow-lg p-3 sm:p-4 flex items-center space-x-3 transform hover:scale-105 transition-all duration-300 animate-float">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 animate-pulse" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-gray-900">+123 456 789</div>
                <div className="text-xs sm:text-sm text-gray-600">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;