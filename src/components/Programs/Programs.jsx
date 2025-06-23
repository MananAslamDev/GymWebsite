import React from 'react';
import HeroSection from './HeroSection';
import ProgramsFilterSection from './ProgramsFilterSection';
import ProgramComparisonSection from './ProgramComparisonSection';
import ProgramAnalysisSection from './ProgramAnalysisSection';

const Programs = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ProgramsFilterSection />
      <ProgramComparisonSection />
      <ProgramAnalysisSection />
    </div>
  );
};

export default Programs;