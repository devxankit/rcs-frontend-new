import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiStar, FiArrowUp, FiChevronDown } from 'react-icons/fi';
import Button from '../components/ui/Button';

const HowItWorksPage = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    const handleClickOutside = (event) => {
      if (showDropdown && !event.target.closest('.dropdown-container')) {
        setShowDropdown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const plans = [
    {
      name: 'Basic Level',
      description: 'Perfect for small companies and startups looking to establish their online presence and build initial customer trust.',
      badge: '/images/badge-1.png'
    },
    {
      name: 'Advanced Level',
      description: 'Ideal for businesses already working with customers who want to enhance their reputation management and customer feedback collection.',
      badge: '/images/badge-2.png'
    },
    {
      name: 'Pro Level',
      description: 'Designed for companies that value scale and are ready for comprehensive review management with advanced analytics and automation.',
      badge: '/images/badge-3.png'
    }
  ];

  const certifications = [
    {
      level: 'BRONZE',
      color: 'orange',
      description: 'Basic review management with essential features for small businesses starting their online reputation journey.',
      badge: '/images/badge-1.png'
    },
    {
      level: 'SILVER',
      color: 'gray',
      description: 'Advanced analytics and automated review collection for growing businesses with moderate review volume.',
      badge: '/images/badge-2.png'
    },
    {
      level: 'GOLD',
      color: 'yellow',
      description: 'Premium features with full customization, white-label options, and dedicated support for enterprise clients.',
      badge: '/images/badge-3.png'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black shadow-sm border-b border-gray-800 relative z-50" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4 lg:py-6">
            <div 
              className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-200" 
              data-aos="fade-right" 
              data-aos-delay="200"
              onClick={() => navigate('/')}
            >
              <img 
                src="/images/logo.png" 
                alt="Level Logo" 
                className="h-6 sm:h-8 lg:h-10 w-auto object-contain max-w-full"
                style={{ filter: 'brightness(1.2) contrast(1.1)' }}
              />
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-8" data-aos="fade-left" data-aos-delay="400">
              {/* Navigation Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center text-white hover:text-yellow-400 transition-colors duration-200 font-montserrat-light text-xs sm:text-sm"
                >
                  <span className="hidden sm:inline">How It Works</span>
                  <span className="sm:hidden">How It Works</span>
                  <FiChevronDown className={`ml-1 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} size={14} />
                </button>
                {showDropdown && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 sm:w-56 bg-black border border-gray-700 rounded-lg shadow-2xl backdrop-blur-sm" 
                    style={{
                      zIndex: 99999,
                      position: 'absolute',
                      top: '100%',
                      left: '0',
                      marginTop: '0.5rem'
                    }}
                  >
                    <div className="py-2 sm:py-3">
                      <button
                        onClick={() => {
                          navigate('/about');
                          setShowDropdown(false);
                        }}
                        className="block w-full text-left px-4 sm:px-6 py-2 sm:py-3 text-white hover:bg-gray-800 hover:text-yellow-400 transition-all duration-200 font-montserrat-light text-xs sm:text-sm"
                      >
                        About Us
                      </button>
                      <div className="border-t border-gray-700 my-1"></div>
                      <button
                        onClick={() => {
                          navigate('/contact');
                          setShowDropdown(false);
                        }}
                        className="block w-full text-left px-4 sm:px-6 py-2 sm:py-3 text-white hover:bg-gray-800 hover:text-yellow-400 transition-all duration-200 font-montserrat-light text-xs sm:text-sm"
                      >
                        Contact Us
                      </button>
                      <div className="border-t border-gray-700 my-1"></div>
                      <button
                        onClick={() => {
                          navigate('/how-it-works');
                          setShowDropdown(false);
                        }}
                        className="block w-full text-left px-4 sm:px-6 py-2 sm:py-3 text-white hover:bg-gray-800 hover:text-yellow-400 transition-all duration-200 font-montserrat-light text-xs sm:text-sm"
                      >
                        How It Works
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <Button
                variant="outline"
                onClick={() => navigate('/login')}
                className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
              >
                <span className="hidden sm:inline">Login</span>
                <span className="sm:hidden">Login</span>
              </Button>
              <Button
                onClick={() => navigate('/register')}
                className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
              >
                <span className="hidden sm:inline">Get Started</span>
                <span className="sm:hidden">Start</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-32 min-h-screen flex items-center justify-center how-it-works-hero-bg"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/image-2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up" data-aos-duration="800">
            {/* Decorative brackets */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-white opacity-30"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-white opacity-30"></div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 font-goldman-bold" data-aos="fade-up" data-aos-delay="200">
              HOW IT WORKS
            </h1>
          </div>
        </div>
      </section>

      {/* Individual Approach Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Decorative brackets */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-white opacity-30"></div>
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-white opacity-30"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 font-montserrat-light leading-relaxed" data-aos="fade-up">
              Time is the most valuable resource in business. That's why we've designed Level to be incredibly simple to set up and use. 
              Our technical team handles all the complex integrations, so you can focus on what matters most - growing your business.
            </p>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white text-center mb-6 sm:mb-8 font-goldman-bold" data-aos="fade-up" data-aos-delay="200">
              Individual approach
            </h2>
            
            <p className="text-base sm:text-lg text-white font-montserrat-light leading-relaxed" data-aos="fade-up" data-aos-delay="400">
              Every business is unique, and so are their review management needs. We create tailored plans that align with your specific 
              goals, industry requirements, and customer base. Our individual approach ensures you get exactly what you need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* LEVEL Widget Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black mb-6 sm:mb-8 font-goldman-bold" data-aos="fade-up">
              LEVEL Widget
            </h2>
            
            <p className="text-base sm:text-lg text-black mb-4 sm:mb-6 font-montserrat-light leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Our intelligent widget displays real, verified reviews from your customers directly on your website. 
              It automatically updates with new reviews and showcases your best feedback to build trust with potential customers.
            </p>
            
            <p className="text-base sm:text-lg text-black font-montserrat-light leading-relaxed" data-aos="fade-up" data-aos-delay="400">
              When visitors click on the widget, they're redirected to a dedicated page where they can read detailed reviews, 
              see your overall rating, and learn more about your business. This seamless experience encourages more customer engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section 
        className="py-20 relative"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/image-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 font-goldman-bold">
              Who the LEVEL Plans are For
            </h2>
          </div>
          
          <div className="space-y-8 lg:space-y-12">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="flex-1 mb-6 lg:mb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                    <h3 className="text-xl sm:text-2xl font-goldman-bold text-white">
                      {plan.name}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base font-montserrat-light leading-relaxed text-white">
                    {plan.description}
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end lg:ml-8">
                  <img 
                    src={plan.badge} 
                    alt={`${plan.name} Badge`}
                    className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Decorative brackets */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-white opacity-30"></div>
          <div className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-white opacity-30"></div>
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-white opacity-30"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-white opacity-30"></div>
          
          <div className="text-center mb-8 sm:mb-12 lg:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 font-goldman-bold">
              LEVEL Certification
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {certifications.map((cert, index) => (
              <div
                key={cert.level}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className={`w-4 h-4 rounded-full mx-auto mb-4 ${
                  cert.color === 'orange' ? 'bg-orange-500' : 
                  cert.color === 'gray' ? 'bg-gray-400' : 'bg-yellow-400'
                }`}></div>
                <h3 className="text-lg sm:text-xl text-white mb-2 font-goldman-bold">
                  {cert.level}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 font-montserrat-light">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Certification Badges */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-4 lg:space-x-8">
            {certifications.map((cert, index) => (
              <div
                key={`badge-${cert.level}`}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 200 + 400}
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 flex items-center justify-center ${
                  cert.color === 'orange' ? 'bg-orange-500' : 
                  cert.color === 'gray' ? 'bg-gray-400' : 'bg-yellow-400'
                }`} style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                  <img 
                    src={cert.badge} 
                    alt={`${cert.level} Certification Badge`}
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain"
                  />
                </div>
                <p className="text-white text-xs sm:text-sm font-montserrat-light">
                  CERTIFIED BY LEVEL
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="zoom-in" data-aos-duration="800">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black mb-4 font-goldman-bold">
              Ready to Transform Your Reviews?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-black mb-6 sm:mb-8 max-w-2xl mx-auto font-montserrat-light">
              Join thousands of businesses already using Level to build trust and grow their online presence.
            </p>
            <Button
              size="lg"
              className="!bg-white !hover:bg-gray-50 !text-gray-800 !font-goldman !border-0 !shadow-none !focus:ring-gray-300 pulse-animation w-full sm:w-auto"
              onClick={() => navigate('/register')}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center" data-aos="fade-up" data-aos-delay="200">
            <img 
              src="/images/logo.png" 
              alt="Level Logo" 
              className="h-8 w-auto object-contain max-w-full"
              style={{ filter: 'brightness(1.2) contrast(1.1)' }}
            />
          </div>
          <p className="text-center text-gray-400 mt-4 font-montserrat-light" data-aos="fade-up" data-aos-delay="400">
            © 2025 Level 4 You. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        data-aos="fade-up"
        data-aos-delay="600"
        aria-label="Scroll to top"
      >
        <FiArrowUp />
      </button>
    </div>
  );
};

export default HowItWorksPage;