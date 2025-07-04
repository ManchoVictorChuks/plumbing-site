import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ fullName: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section ref={sectionRef} id="contact" className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image with Contact Info */}
          <div className={`relative transform transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Professional plumber with tools"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Contact Info Overlay Card */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white rounded-xl shadow-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                <div className="group">
                  <div className="flex items-center justify-center mb-2">
                    <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-xs font-semibold text-gray-900 mb-1">Address</div>
                  <div className="text-xs text-gray-600 leading-tight">
                    123 Main Street Anytown,<br />
                    CA 12345 (123) 456-7890
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-center mb-2">
                    <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                  </div>
                  <div className="text-xs font-semibold text-gray-900 mb-1">Call us</div>
                  <div className="text-xs text-gray-600 leading-tight">
                    +9843360932<br />
                    +9843360932
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-center mb-2">
                    <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-xs font-semibold text-gray-900 mb-1">Email</div>
                  <div className="text-xs text-gray-600 leading-tight">
                    lisking@gmail.com<br />
                    support@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={`space-y-6 lg:space-y-8 transform transition-all duration-700 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div>
              <div className="text-sm text-gray-600 mb-2">Contact us</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Hear From Our Satisfied<br />
                Customers
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full name"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 transition-all duration-300 group-hover:shadow-md"
                  />
                </div>
                <div className="group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address...."
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 transition-all duration-300 group-hover:shadow-md"
                  />
                </div>
              </div>

              <div className="group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 transition-all duration-300 group-hover:shadow-md"
                />
              </div>

              <div className="group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Message"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 resize-none transition-all duration-300 group-hover:shadow-md"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;