import React from 'react';

const Input = ({
  label,
  error,
  type = 'text',
  className = '',
  required = false,
  ...props
}) => {
  const inputClasses = `
    block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-500 
    focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400
    bg-gray-800 text-white
    ${error ? 'border-red-500' : 'border-gray-600'}
    ${className}
  `.trim();

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-300 font-montserrat">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        className={inputClasses}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-400 font-montserrat">{error}</p>
      )}
    </div>
  );
};

export default Input;