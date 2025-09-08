import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiStar, FiArrowUp, FiUsers, FiTarget, FiAward, FiShield, FiChevronDown } from 'react-icons/fi';
import Button from '../components/ui/Button';

const AboutUsPage = () => {
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

  const values = [
    {
      icon: FiShield,
      title: 'Trust & Transparency',
      description: 'We believe in building genuine relationships between businesses and customers through authentic reviews and transparent processes.',
    },
    {
      icon: FiUsers,
      title: 'Customer-Centric',
      description: 'Every feature we build is designed with our users in mind, ensuring the best possible experience for both businesses and customers.',
    },
    {
      icon: FiTarget,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from our technology to our customer service and support.',
    },
    {
      icon: FiAward,
      title: 'Innovation',
      description: 'We continuously innovate to provide cutting-edge solutions that help businesses grow and succeed in the digital world.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in tech and customer experience.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      description: 'Technology expert passionate about building scalable solutions.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      description: 'Product strategist focused on user experience and innovation.',
    },
    {
      name: 'David Thompson',
      role: 'Head of Marketing',
      description: 'Marketing expert dedicated to helping businesses grow their online presence.',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black shadow-sm border-b border-gray-800 relative z-50" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div 
              className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-200" 
              data-aos="fade-right" 
              data-aos-delay="200"
              onClick={() => navigate('/')}
            >
              <img 
                src="/images/logo.png" 
                alt="Level Logo" 
                className="h-10 w-auto object-contain max-w-full"
                style={{ filter: 'brightness(1.2) contrast(1.1)' }}
              />
            </div>
            <div className="flex items-center space-x-8" data-aos="fade-left" data-aos-delay="400">
              {/* Navigation Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center text-white hover:text-yellow-400 transition-colors duration-200 font-montserrat-light"
                >
                  About Us
                  <FiChevronDown className={`ml-1 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showDropdown && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 bg-black border border-gray-700 rounded-lg shadow-2xl backdrop-blur-sm" 
                    style={{
                      zIndex: 99999,
                      position: 'absolute',
                      top: '100%',
                      left: '0',
                      marginTop: '0.5rem'
                    }}
                  >
                    <div className="py-3">
                      <button
                        onClick={() => {
                          navigate('/about');
                          setShowDropdown(false);
                        }}
                        className="block w-full text-left px-6 py-3 text-white hover:bg-gray-800 hover:text-yellow-400 transition-all duration-200 font-montserrat-light text-sm"
                      >
                        About Us
                      </button>
                      <div className="border-t border-gray-700 my-1"></div>
                      <button
                        onClick={() => {
                          navigate('/contact');
                          setShowDropdown(false);
                        }}
                        className="block w-full text-left px-6 py-3 text-white hover:bg-gray-800 hover:text-yellow-400 transition-all duration-200 font-montserrat-light text-sm"
                      >
                        Contact Us
                      </button>
                      <div className="border-t border-gray-700 my-1"></div>
                      <button
                        onClick={() => {
                          navigate('/how-it-works');
                          setShowDropdown(false);
                        }}
                        className="block w-full text-left px-6 py-3 text-white hover:bg-gray-800 hover:text-yellow-400 transition-all duration-200 font-montserrat-light text-sm"
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
              >
                Login
              </Button>
              <Button
                onClick={() => navigate('/register')}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-32 min-h-screen flex items-center justify-center about-hero-bg"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up" data-aos-duration="800">
            <h1 className="text-5xl md:text-6xl text-white mb-6 font-goldman-bold" data-aos="fade-up" data-aos-delay="200">
              ABOUT US
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-montserrat-light" data-aos="fade-up" data-aos-delay="400">
              Building trust through authentic reviews and transparent business practices
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl text-white mb-6 font-goldman-bold">
                Our Story
              </h2>
              <p className="text-lg text-gray-300 mb-6 font-montserrat-light">
                Level was born from a simple observation: the digital marketplace was flooded with fake reviews, 
                misleading customers and damaging honest businesses. We saw an opportunity to create something better.
              </p>
              <p className="text-lg text-gray-300 mb-6 font-montserrat-light">
                Founded in 2020, we set out to build a platform that would restore trust in online reviews. 
                Our mission is to help businesses showcase their true value while giving customers the authentic 
                information they need to make informed decisions.
              </p>
              <p className="text-lg text-gray-300 font-montserrat-light">
                Today, we're proud to serve thousands of businesses worldwide, helping them build genuine 
                relationships with their customers through transparent, verified review systems.
              </p>
            </div>
            <div data-aos="fade-left">
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl text-white mb-4 font-goldman-bold">Our Mission</h3>
                <p className="text-gray-300 font-montserrat-light mb-6">
                  To eliminate fake reviews and create a trusted ecosystem where businesses can showcase 
                  their authentic value and customers can make informed decisions.
                </p>
                <h3 className="text-2xl text-white mb-4 font-goldman-bold">Our Vision</h3>
                <p className="text-gray-300 font-montserrat-light">
                  A world where every review is genuine, every business is trusted, and every customer 
                  can confidently make decisions based on authentic feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl text-white mb-4 font-goldman-bold">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 font-montserrat-light">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
                className="text-center"
              >
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 h-full">
                  <value.icon className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl text-white mb-3 font-goldman-bold">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 font-montserrat-light">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl text-white mb-4 font-goldman-bold">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 font-montserrat-light">
              The passionate people behind Level
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
                className="text-center"
              >
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 h-full">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-goldman-bold text-black">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl text-white mb-2 font-goldman-bold">
                    {member.name}
                  </h3>
                  <p className="text-yellow-400 mb-3 font-montserrat-light">
                    {member.role}
                  </p>
                  <p className="text-gray-300 font-montserrat-light text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="zoom-in" data-aos-duration="800">
            <h2 className="text-4xl text-black mb-4 font-goldman-bold">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto font-montserrat-light">
              Be part of the movement to restore trust in online reviews and help businesses 
              showcase their authentic value.
            </p>
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-black font-goldman pulse-animation"
              onClick={() => navigate('/register')}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center" data-aos="fade-up" data-aos-delay="200">
            <FiStar className="h-6 w-6 text-yellow-400 mr-2" />
            <span className="text-lg font-goldman-bold">LEVEL</span>
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

export default AboutUsPage;
