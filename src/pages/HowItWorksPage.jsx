import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiStar, FiArrowUp, FiUserPlus, FiSettings, FiBarChart2, FiTrendingUp, FiCheckCircle, FiArrowRight, FiChevronDown } from 'react-icons/fi';
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

  const steps = [
    {
      number: '01',
      icon: FiUserPlus,
      title: 'Sign Up & Setup',
      description: 'Create your account and complete your business profile. It takes just a few minutes to get started.',
      details: [
        'Create your Level account',
        'Add your business information',
        'Choose your subscription plan',
        'Verify your business details'
      ]
    },
    {
      number: '02',
      icon: FiSettings,
      title: 'Customize Your Widget',
      description: 'Design your review collection widget to match your brand and website perfectly.',
      details: [
        'Choose your widget style',
        'Customize colors and fonts',
        'Set up review collection rules',
        'Configure notification settings'
      ]
    },
    {
      number: '03',
      icon: FiBarChart2,
      title: 'Integrate & Collect',
      description: 'Add the widget to your website and start collecting authentic reviews from your customers.',
      details: [
        'Copy the integration code',
        'Add to your website',
        'Start collecting reviews',
        'Monitor review activity'
      ]
    },
    {
      number: '04',
      icon: FiTrendingUp,
      title: 'Analyze & Grow',
      description: 'Use our analytics dashboard to understand your customers and grow your business.',
      details: [
        'View detailed analytics',
        'Respond to reviews',
        'Track performance metrics',
        'Optimize your strategy'
      ]
    }
  ];

  const features = [
    {
      title: 'Easy Integration',
      description: 'Add our widget to your website with just a few lines of code. No technical expertise required.',
    },
    {
      title: 'Real-time Analytics',
      description: 'Get instant insights into your review performance with our comprehensive analytics dashboard.',
    },
    {
      title: 'Automated Collection',
      description: 'Set up automated review requests to collect feedback from customers at the right time.',
    },
    {
      title: 'Custom Branding',
      description: 'Customize every aspect of your review widget to match your brand perfectly.',
    },
    {
      title: 'Review Management',
      description: 'Easily respond to reviews, moderate content, and manage your online reputation.',
    },
    {
      title: 'Multi-platform Support',
      description: 'Collect reviews from multiple platforms and display them all in one unified widget.',
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
              <FiStar className="h-8 w-8 text-yellow-400 mr-2" />
              <span className="text-2xl font-goldman-bold text-white">LEVEL</span>
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
        className="relative py-32 min-h-screen flex items-center justify-center how-it-works-hero-bg"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up" data-aos-duration="800">
            <h1 className="text-5xl md:text-6xl text-white mb-6 font-goldman-bold" data-aos="fade-up" data-aos-delay="200">
              HOW IT WORKS
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-montserrat-light" data-aos="fade-up" data-aos-delay="400">
              Get started with Level in just 4 simple steps and transform your review management
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl text-white mb-4 font-goldman-bold">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-300 font-montserrat-light">
              From setup to success in minutes, not hours
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-yellow-400 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-goldman-bold mr-6">
                      {step.number}
                    </div>
                    <step.icon className="h-12 w-12 text-yellow-400" />
                  </div>
                  <h3 className="text-3xl text-white mb-4 font-goldman-bold">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-6 font-montserrat-light">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <FiCheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 font-montserrat-light">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <step.icon className="h-24 w-24 text-yellow-400 mx-auto mb-4" />
                      <p className="text-gray-300 font-montserrat-light">
                        Step {step.number} Visualization
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl text-white mb-4 font-goldman-bold">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 font-montserrat-light">
              Everything you need to manage reviews like a pro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 h-full"
              >
                <h3 className="text-xl text-white mb-3 font-goldman-bold">
                  {feature.title}
                </h3>
                <p className="text-gray-300 font-montserrat-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl text-white mb-6 font-goldman-bold">
                Why Choose Level?
              </h2>
              <p className="text-lg text-gray-300 mb-8 font-montserrat-light">
                Level isn't just another review management tool. We're your partner in building 
                authentic relationships with your customers and growing your business reputation.
              </p>
              <div className="space-y-6">
                {[
                  'Eliminate fake reviews with our verification system',
                  'Increase customer trust with authentic feedback',
                  'Save time with automated review collection',
                  'Grow your business with data-driven insights',
                  'Protect your reputation with proactive monitoring'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <FiCheckCircle className="h-6 w-6 text-yellow-400 mr-4 flex-shrink-0" />
                    <span className="text-gray-300 font-montserrat-light">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl text-white mb-6 font-goldman-bold">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6 font-montserrat-light">
                  Join thousands of businesses already using Level to build trust and grow their online presence.
                </p>
                <div className="space-y-4">
                  <Button
                    onClick={() => navigate('/register')}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-goldman"
                  >
                    Start Your Free Trial
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => navigate('/contact')}
                    className="w-full border-white text-white hover:bg-white hover:text-black font-goldman"
                  >
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="zoom-in" data-aos-duration="800">
            <h2 className="text-4xl text-black mb-4 font-goldman-bold">
              Ready to Transform Your Reviews?
            </h2>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto font-montserrat-light">
              Start your journey with Level today and see the difference authentic reviews can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-black font-goldman pulse-animation"
                onClick={() => navigate('/register')}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white font-goldman"
                onClick={() => navigate('/contact')}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Learn More
              </Button>
            </div>
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

export default HowItWorksPage;
