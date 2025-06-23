import React from 'react';
import Button from '../common/Button';

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready to Transform Your Life?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Join EliteX Fitness today and take the first step towards a stronger, healthier you.
        </p>
        <Button className="bg-secondary hover:bg-secondary/80 text-black px-8 py-4 text-lg">
          Get Started Now
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;