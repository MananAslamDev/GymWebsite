import React from 'react';

const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ className, children, ...props }) => {
  return (
    <div
      className={`px-6 py-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardTitle = ({ className, children, ...props }) => {
  return (
    <h2
      className={`text-xl font-semibold ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

const CardContent = ({ className, children, ...props }) => {
  return (
    <div
      className={`px-6 py-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardDescription = ({ className, children, ...props }) => {
  return (
    <p
      className={`text-gray-600 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

const CardFooter = ({ className, children, ...props }) => {
  return (
    <div
      className={`px-6 py-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter };