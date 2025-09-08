import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiStar, FiArrowUp, FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiChevronDown } from 'react-icons/fi';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const ContactUsPage = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email Us',
      details: 'hello@level4you.com',
      description: 'Send us an email anytime',
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm',
    },
    {
      icon: FiMapPin,
      title: 'Visit Us',
      details: '123 Business St, Suite 100',
      description: 'San Francisco, CA 94105',
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      details: 'Monday - Friday',
      description: '9:00 AM - 6:00 PM PST',
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
        className="relative py-32 min-h-screen flex items-center justify-center contact-hero-bg"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up" data-aos-duration="800">
            <h1 className="text-5xl md:text-6xl text-white mb-6 font-goldman-bold" data-aos="fade-up" data-aos-delay="200">
              CONTACT US
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-montserrat-light" data-aos="fade-up" data-aos-delay="400">
              Get in touch with our team. We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl text-white mb-4 font-goldman-bold">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 font-montserrat-light">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
                className="text-center"
              >
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 h-full">
                  <info.icon className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl text-white mb-2 font-goldman-bold">
                    {info.title}
                  </h3>
                  <p className="text-yellow-400 mb-2 font-montserrat-light">
                    {info.details}
                  </p>
                  <p className="text-gray-300 font-montserrat-light text-sm">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl text-white mb-4 font-goldman-bold">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-300 font-montserrat-light">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700" data-aos="fade-up" data-aos-delay="200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-goldman mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-goldman mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-goldman mb-2">
                  Subject *
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-goldman mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent font-montserrat-light"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-goldman"
                >
                  <FiSend className="inline mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl text-white mb-4 font-goldman-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 font-montserrat-light">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
            {[
              {
                question: "How quickly can I get started with Level?",
                answer: "You can get started in minutes! Simply sign up, choose your plan, and integrate our widget into your website. Our setup process is designed to be quick and easy."
              },
              {
                question: "Do you offer customer support?",
                answer: "Yes! We offer 24/7 email support for all plans, and phone support for Professional and Enterprise plans. Our team is always ready to help you succeed."
              },
              {
                question: "Can I customize the review widget?",
                answer: "Absolutely! Our widget is fully customizable to match your brand. You can change colors, fonts, layout, and more to create the perfect look for your website."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes! We offer a 14-day free trial for all new users. No credit card required to start your trial."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl text-white mb-3 font-goldman-bold">
                  {faq.question}
                </h3>
                <p className="text-gray-300 font-montserrat-light">
                  {faq.answer}
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
            <h2 className="text-4xl text-black mb-4 font-goldman-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto font-montserrat-light">
              Join thousands of businesses already using Level to build trust and grow their online presence.
            </p>
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-black font-goldman pulse-animation"
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

export default ContactUsPage;
