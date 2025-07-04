import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
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

  const testimonials = [
    {
      id: 1,
      name: 'Robert James',
      role: 'Product manager',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      rating: 5,
      text: 'At Victor Plumbs, we\'re dedicated to providing top-notch plumbing services that you can rely on. Whether it\'s a leaky faucet, a clogged drain, or a full-scale installation.'
    },
    {
      id: 2,
      name: 'Smith Jhone',
      role: 'Product manager',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      rating: 5,
      text: 'At Victor Plumbs, we\'re dedicated to providing top-notch plumbing services that you can rely on. Whether it\'s a leaky faucet, a clogged drain, or a full-scale installation.'
    },
    {
      id: 3,
      name: 'Jerry Smith',
      role: 'Product manager',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      rating: 5,
      text: 'At Victor Plumbs, we\'re dedicated to providing top-notch plumbing services that you can rely on. Whether it\'s a leaky faucet, a clogged drain, or a full-scale installation.'
    },
    {
      id: 4,
      name: 'Robert James',
      role: 'Product manager',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      rating: 5,
      text: 'At Victor Plumbs, we\'re dedicated to providing top-notch plumbing services that you can rely on. Whether it\'s a leaky faucet, a clogged drain, or a full-scale installation.'
    },
    {
      id: 5,
      name: 'Robert James',
      role: 'Product manager',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      rating: 5,
      text: 'At Victor Plumbs, we\'re dedicated to providing top-notch plumbing services that you can rely on. Whether it\'s a leaky faucet, a clogged drain, or a full-scale installation.'
    },
    {
      id: 6,
      name: 'Robert James',
      role: 'Product manager',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      rating: 5,
      text: 'At Victor Plumbs, we\'re dedicated to providing top-notch plumbing services that you can rely on. Whether it\'s a leaky faucet, a clogged drain, or a full-scale installation.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 sm:mb-12 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-sm text-gray-600 mb-2">testimonials</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Hear From Our Satisfied<br />
            Customers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 rounded-xl p-4 sm:p-6 hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: `all 600ms ease-out ${index * 100}ms`
              }}
            >
              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current animate-twinkle group-hover:scale-110 transition-transform duration-300" 
                    style={{ animationDelay: `${i * 200}ms` }} 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
                {testimonial.text}
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-blue-600 transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;