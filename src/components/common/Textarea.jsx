import React from 'react';

const Textarea = ({ className, ...props }) => {
  return (
    <textarea
      className={`w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF3A3A] ${className}`}
      {...props}
    />
  );
};

export default Textarea;