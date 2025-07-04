import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BusinessName from './components/BusinessName';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import RecentProjects from './components/RecentProjects';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      <Hero />
      <BusinessName />
      <Services />
      <WhyChooseUs />
      <About />
      <RecentProjects />
      <Testimonials />
      <FAQ />
      <Workflow />
      <Contact />
      <LocationMap />
      <Footer />
    </div>
  );
}

export default App;