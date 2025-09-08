import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiStar, FiEye, FiEyeOff } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Card from '../../components/ui/Card';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Great for individuals starting out.',
  },
  {
    id: 'standard',
    name: 'Standard',
    description: 'Best for small teams with moderate needs.',
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Ideal for businesses that need full features.',
  },
];

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    first_name: '',
    last_name: '',
    business_name: '',
    website_url: '',
    contact_number: '',
    date_of_birth: '',
    country: '',
    plan: 'basic',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  
  const { signup, isLoading, error, isAuthenticated, clearError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error) {
      setErrors({ general: error });
    }
  }, [error]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    
    if (!validateForm()) return;

    const formattedDate = new Date(formData.date_of_birth).toISOString().split('T')[0];
    
    const result = await signup({
      username: formData.username,
      email: formData.email,
      password: formData.password,
      first_name: formData.first_name,
      last_name: formData.last_name,
      business_name: formData.business_name,
      website_url: formData.website_url,
      contact_number: formData.contact_number,
      date_of_birth: formattedDate,
      country: formData.country,
      plan:formData.plan

    });
    
    if (result.success) {
      navigate('/login', { 
        state: { message: 'Account created successfully! Please sign in.' }
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear field error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePlanSelect = (plan) => {
    setFormData(prev => ({ ...prev, plan }));
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center">
            <FiStar className="h-8 w-8 text-yellow-400 mr-2" />
            <span className="text-2xl font-bold text-white font-goldman">LEVEJ</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-white font-goldman">
            <span className="font-montserrat-uppercase text-lg block mb-2">create your account</span>
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-300 font-montserrat">
            Or{' '}
            <Link to="/login" className="font-medium text-yellow-400 hover:text-yellow-300">
              sign in to your existing account
            </Link>
          </p>
        </div>

        <Card className="bg-gray-900 border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            {errors.general && (
              <div className="bg-red-900 border border-red-700 rounded-md p-4">
                <p className="text-sm text-red-300">{errors.general}</p>
              </div>
            )}

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Input label="First Name" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="John" />
                <Input label="Last Name" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Doe" />
                <Input label="Business Name" name="business_name" value={formData.business_name} onChange={handleChange} placeholder="Your Company" />
                <Input label="Website URL" name="website_url" value={formData.website_url} onChange={handleChange} placeholder="https://example.com" />
                <Input label="Contact Number" name="contact_number" value={formData.contact_number} onChange={handleChange} placeholder="+1 234 567 8901" />
                <Input label="Date of Birth" name="date_of_birth" type="date" value={formData.date_of_birth} onChange={handleChange} />
                <Input label="Country" name="country" value={formData.country} onChange={handleChange} placeholder="India" />
                <Input label="Username" name="username" value={formData.username} onChange={handleChange} error={errors.username} placeholder="Choose a username" />
                <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} placeholder="you@example.com" />
                <div className="relative">
                  <Input
                    label="Password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                    placeholder="Create a password"
                  />
                  <button type="button" className="absolute right-3 top-8 text-gray-400 hover:text-gray-300" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                  </button>
                </div>
                <div className="relative">
                  <Input
                    label="Confirm Password"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={errors.confirmPassword}
                    placeholder="Confirm your password"
                  />
                  <button type="button" className="absolute right-3 top-8 text-gray-400 hover:text-gray-300" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                  </button>
                </div>
              </div>

              {/* Plan Selection */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-300 mb-2 font-montserrat">Choose a Plan</h3>
                {plans.map((plan) => (
                  <label
                    key={plan.id}
                    className={`block p-4 border rounded-lg cursor-pointer ${
                      formData.plan === plan.id
                        ? 'border-yellow-400 bg-yellow-400 bg-opacity-10'
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <input
                      type="radio"
                      name="plan"
                      value={plan.id}
                      checked={formData.plan === plan.id}
                      onChange={() => handlePlanSelect(plan.id)}
                      className="hidden"
                    />
                    <span className="text-lg font-semibold text-white font-goldman">{plan.name}</span>
                    <p className="text-sm text-gray-300 mt-1 font-montserrat">{plan.description}</p>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="agree-terms"
                name="agree-terms"
                type="checkbox"
                required
                className="h-4 w-4 text-yellow-400 focus:ring-yellow-500 border-gray-600 rounded bg-gray-800"
              />
              <label htmlFor="agree-terms" className="ml-2 block text-sm text-white font-montserrat">
                I agree to the{' '}
                <a href="#" className="text-yellow-400 hover:text-yellow-300">Terms of Service</a> and{' '}
                <a href="#" className="text-yellow-400 hover:text-yellow-300">Privacy Policy</a>
              </label>
            </div>

            <Button
              type="submit"
              className="w-full"
              loading={isLoading}
              disabled={isLoading}
            >
              Create Account
            </Button>
          </form>
        </Card>
      </motion.div>
    </div>
  );

};

export default RegisterPage;