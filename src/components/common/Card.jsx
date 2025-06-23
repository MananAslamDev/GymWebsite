import React from 'react';

const Card = ({ className, children }) => {
  return <div className={`bg-card border-none ${className}`}>{children}</div>;
};

const CardHeader = ({ className, children }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

const CardTitle = ({ className, children }) => {
  return <h3 className={`text-2xl font-bold text-white ${className}`}>{children}</h3>;
};

const CardDescription = ({ className, children }) => {
  return <p className={`text-white/70 ${className}`}>{children}</p>;
};

const CardContent = ({ className, children }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

const CardFooter = ({ className, children }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;