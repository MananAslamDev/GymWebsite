import React from 'react';
import HeroSection from './HeroSection';
import ProgramsSection from './ProgramsSection';
import TrainersSection from './TrainersSection';
import TestimonialsSection from './TestimonialsSection';
import CallToActionSection from './CallToActionSection';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ProgramsSection />
      <TrainersSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
};

export default Home;