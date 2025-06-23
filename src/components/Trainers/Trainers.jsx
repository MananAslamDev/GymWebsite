import React from 'react';
import HeroSection from './HeroSection';
import TrainersFilterSection from './TrainersFilterSection';
import TrainerSpotlightSection from './TrainerSpotlightSection';
import TestimonialsSection from './TestimonialsSection';

const Trainers = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <TrainersFilterSection />
      <TrainerSpotlightSection />
      <TestimonialsSection />
    </div>
  );
};

export default Trainers;