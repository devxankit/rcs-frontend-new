import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiStar, FiBarChart2, FiShield, FiZap, FiUsers, FiTrendingUp, FiArrowUp, FiChevronDown } from 'react-icons/fi';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const LandingPage = () => {
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

  const features = [
    {
      icon: FiStar,
      title: 'Review Collection',
      description: 'Easily collect and manage customer reviews with our intuitive widget system.',
    },
    {
      icon: FiBarChart2,
      title: 'Analytics Dashboard',
      description: 'Get detailed insights into your review performance with comprehensive analytics.',
    },
    {
      icon: FiShield,
      title: 'Reputation Management',
      description: 'Protect and enhance your online reputation with our advanced management tools.',
    },
    {
      icon: FiZap,
      title: 'Quick Integration',
      description: 'Integrate our review system into your website with just a few lines of code.',
    },
    {
      icon: FiUsers,
      title: 'Customer Insights',
      description: 'Understand your customers better with detailed review analysis and feedback.',
    },
    {
      icon: FiTrendingUp,
      title: 'Growth Tracking',
      description: 'Monitor your business growth through review trends and customer satisfaction metrics.',
    },
  ];

  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      features: [
        'Up to 100 reviews/month',
        'Basic analytics',
        'Email support',
        'Widget customization',
      ],
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      features: [
        'Up to 500 reviews/month',
        'Advanced analytics',
        'Priority support',
        'Custom branding',
        'API access',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      features: [
        'Unlimited reviews',
        'Full analytics suite',
        '24/7 phone support',
        'White-label solution',
        'Custom integrations',
      ],
    },
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
                  <span className="hidden sm:inline">About Us</span>
                  <span className="sm:hidden">About</span>
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
        className="relative py-32 min-h-screen flex items-center justify-center hero-bg"
      >
        <div className="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up" data-aos-duration="800">
            <h1 className="text-5xl md:text-6xl text-white mb-6 font-goldman-bold" data-aos="fade-up" data-aos-delay="200">
              Manage Your Reviews
              <span className="text-yellow-400 block gradient-text floating font-montserrat-uppercase text-3xl md:text-4xl" data-aos="fade-up" data-aos-delay="400">Like a Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-montserrat-light" data-aos="fade-up" data-aos-delay="600">
              Collect, analyze, and respond to customer reviews with our comprehensive 
              review management platform. Build trust and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="800">
              <Button
                size="lg"
                onClick={() => navigate('/register')}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-goldman"
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/login')}
                className="border-white text-white hover:bg-white hover:text-black font-goldman"
              >
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl text-white mb-4 font-goldman-bold">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-300 font-montserrat-light">
              Powerful features to help you manage and grow your online reputation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
                className="floating"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card hover className="h-full bg-gray-900 border-gray-700">
                  <feature.icon className="h-12 w-12 text-yellow-400 mb-4" />
                  <h3 className="text-xl text-white mb-2 font-goldman-bold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 font-montserrat-light">
                    {feature.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 pricing-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl text-white mb-4 font-goldman-bold">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 font-montserrat-light">
              Start free and scale as you grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-duration="800"
              >
                <Card 
                  className={`h-full relative bg-gray-800 border-gray-600 ${
                    plan.popular ? 'ring-2 ring-yellow-400' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-montserrat-uppercase">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl text-white mb-2 font-goldman-bold">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl text-white font-goldman-bold">
                        {plan.price}
                      </span>
                      <span className="text-gray-300 ml-1 font-montserrat-light">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <FiStar className="h-5 w-5 text-yellow-400 mr-3" />
                        <span className="text-gray-300 font-montserrat-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full"
                    onClick={() => navigate('/register')}
                  >
                    Get Started
                  </Button>
                </Card>
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
              Ready to Transform Your Reviews?
            </h2>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto font-montserrat-light">
              Join thousands of businesses already using Level 4 You to build 
              trust and grow their online presence.
            </p>
            <Button
              size="lg"
              className="!bg-white !hover:bg-gray-50 !text-gray-800 !font-goldman !border-0 !shadow-none !focus:ring-gray-300"
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

export default LandingPage;