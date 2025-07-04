import React, { useState, useEffect, useRef } from 'react';
import { Award, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, plumbers: 0, done: 0, awards: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { value: '150K', label: 'Successful project', key: 'projects', target: 150 },
    { value: '47+', label: 'Expert Plumber', key: 'plumbers', target: 47 },
    { value: '20K+', label: 'Projects done', key: 'done', target: 20 },
    { value: '25+', label: 'Get Awards', key: 'awards', target: 25 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counter animation
          stats.forEach((stat) => {
            let current = 0;
            const increment = stat.target / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.target) {
                current = stat.target;
                clearInterval(timer);
              }
              setCounters(prev => ({ ...prev, [stat.key]: Math.floor(current) }));
            }, 50);
          });
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
    <section ref={sectionRef} id="about" className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div className={`relative transform transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/8293756/pexels-photo-8293756.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Professional plumber working under sink"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>

            {/* Stats Overlay Card */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white rounded-xl shadow-lg p-4 sm:p-6 max-w-xs transform hover:scale-105 transition-all duration-300 animate-float">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{counters.projects}K</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stats[0].label}</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{counters.plumbers}+</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stats[1].label}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`space-y-6 lg:space-y-8 transform transition-all duration-700 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div>
              <div className="text-sm text-gray-600 mb-2">About us</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Your Trusted
                <br />
                Plumbing Partner
              </h2>
              <div className="flex items-center mb-6">
                <div className="w-12 sm:w-16 h-1 bg-blue-600 rounded-full animate-expand-width"></div>
                <div className="w-6 sm:w-8 h-6 sm:h-8 ml-4 flex items-center justify-center">
                  <svg className="w-4 sm:w-6 h-4 sm:h-6 text-gray-400 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                At Victor Plumbs, we're dedicated to providing top-notch plumbing services 
                that you can rely on. Whether it's a leaky faucet, a clogged drain, or a 
                full-scale installation.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm transform hover:scale-105 hover:shadow-md transition-all duration-300">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{counters.done}K+</div>
                <div className="text-xs sm:text-sm text-gray-600">{stats[2].label}</div>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm transform hover:scale-105 hover:shadow-md transition-all duration-300">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{counters.awards}+</div>
                <div className="text-xs sm:text-sm text-gray-600">{stats[3].label}</div>
              </div>
            </div>

            {/* Learn More Button */}
            <div>
              <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center group transform hover:scale-105 hover:shadow-lg">
                Learn more
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;