import React from 'react';

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;