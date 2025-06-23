import React from 'react';

const Button = ({ className, children, ...props }) => {
  <button
    className={`px-6 py-3 text-lg font-semibold rounded-button transition-colors bg-[#FF3A3A] text-white hover:bg-[#FF3A3A80]/ ${className}`}
    {...props}
  >
    {children}
  </button>
};

export default Button;