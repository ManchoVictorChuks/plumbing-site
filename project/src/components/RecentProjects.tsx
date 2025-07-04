import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const RecentProjects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const projects = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/8293756/pexels-photo-8293756.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      title: 'Kitchen Plumbing Installation',
      description: 'Complete kitchen plumbing system installation with modern fixtures'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      title: 'Bathroom Renovation',
      description: 'Full bathroom plumbing renovation with premium fixtures'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/8293756/pexels-photo-8293756.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      title: 'Commercial Pipe Installation',
      description: 'Large-scale commercial plumbing system installation'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      title: 'Emergency Leak Repair',
      description: 'Quick emergency response for major leak repair'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 sm:mb-12 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center mb-4">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm text-gray-600 font-medium uppercase tracking-wide">
              What we have done
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            With years of experience and a commitment to excellence, we're the plumbing 
            company you can trust.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 -ml-6"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 -mr-6"
            >
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 600ms ease-out ${index * 150}ms`
                }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white group-hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-base sm:text-lg mb-1">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-white/90">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center mt-6 space-x-4 lg:hidden">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 text-gray-600" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-all duration-300"
            >
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {[...Array(3)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className={`text-center mt-8 sm:mt-12 transform transition-all duration-700 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;